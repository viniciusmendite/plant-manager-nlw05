import React, { useEffect, useState } from 'react';

import { Header } from '../../components/Header';

import waterDrop from '../../assets/waterdrop.png';

import { loadPlant, removePlant } from '../../libs/storage';
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
import { Load } from '../../components/Load';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  hour: string;
  dateTimeNotification: Date;
}

interface StoragePlantProps {
  [id: string]: {
    data: PlantProps;
  }
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

  if (loading) {
    return <Load />
  }

  function handleRemove(plant: PlantProps) {
    Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
      {
        text: 'Não 🙏',
        style: 'cancel'
      },
      {
        text: 'Sim 😢',
        onPress: async () => {
          try {
            removePlant(plant.id);

            setMyPlants(oldData => {
              return oldData.filter(item => item.id !== plant.id);
            })
          } catch (error) {
            Alert.alert('Não foi possível remover!')
          }
        }
      }
    ])
  }

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
            <PlantCardSecondary data={item} handleRemove={() => handleRemove(item)} />
          )}
          showsVerticalScrollIndicator={false}
        />
      </Plants>
    </Container>
  );
}