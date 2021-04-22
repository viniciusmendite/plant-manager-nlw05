import React, { useEffect, useState } from 'react';

import { Header } from '../../components/Header';

import waterDrop from '../../assets/waterdrop.png';

import { loadPlant } from '../../libs/storage';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import {
  Container,
  Spotlight,
  Image,
  SpotlightText,
  Plants,
  PlantsTitle,
  ListPlants,
  PlantText,
} from './styles';
import { PlantCardSecondary } from '../../components/PlantCardSecondary';

export interface PlantProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: string[];
  frequency: {
    times: number;
    repeat_every: string;
  },
  dateTimeNotification: Date;
}

export function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWaterd, setNextWatered] = useState('');

  useEffect(() => {
    async function loadStorageData() {
      const plantsStoraged = await loadPlant();

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(), {
        locale: ptBR
      });

      setNextWatered(
        `Não esqueça de regrar a ${plantsStoraged[0].name} à ${nextTime} horas.`
      );

      setMyPlants(plantsStoraged);
      setLoading(false);
    }

    loadStorageData();
  }, [])

  return (
    <Container>
      <Header />

      <Spotlight>
        <Image source={waterDrop} />

        <SpotlightText>
          {nextWaterd}
        </SpotlightText>
      </Spotlight>

      <Plants>
        <PlantsTitle>
          Próximas regadas
          </PlantsTitle>

        <ListPlants
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary data={item} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
        />
      </Plants>
    </Container>
  );
}