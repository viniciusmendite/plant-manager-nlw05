import React, { useEffect, useState } from 'react';
import { EnviromentButton } from '../../components/EnviromentButton';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { Load } from '../../components/Load';
import { PlantCardPrimary } from '../../components/PlantCardPrimary';
import api from '../../services/api';

import {
  Container,
  HeaderContent,
  Title,
  Subtitle,
  FlatListContainer,
  ListItem,
  FlatListContainerPlants,
  ListPlants
} from './styles';
import colors from '../../styles/colors';

export interface EnviromentProps {
  key: string;
  title: string;
}

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
  }
}

export function PlantSelect() {
  const { navigate } = useNavigation();

  const [enviroments, setEnviroments] = useState<EnviromentProps[]>([])
  const [plants, setPlants] = useState<PlantProps[]>([])
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([])
  const [environmentSelected, setEnvironmentSelected] = useState('all');
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  async function fetchPlants() {
    const { data } = await api
      .get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);

    if (!data)
      return setLoading(true);

    if (page > 1) {
      setPlants(oldValue => [...oldValue, ...data]);
      setFilteredPlants(oldValue => [...oldValue, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }

    setLoading(false);
    setLoadingMore(false);
  }

  useEffect(() => {
    async function fetchEnviroment() {
      const { data } = await api.get('plants_environments?_sort=title&_order=asc');
      setEnviroments([
        {
          key: 'all',
          title: 'Todos',
        },
        ...data
      ]);
    }

    fetchEnviroment();
  }, [])

  useEffect(() => {
    fetchPlants();
  }, [])

  function handleEnvironmentSelected(key: string) {
    setEnvironmentSelected(key);

    if (key === 'all')
      return setFilteredPlants(plants);

    const filtered = plants.filter(plant => plant.environments.includes(key));
    setFilteredPlants(filtered);
  }

  function handleFetchMore(distance: number) {
    if (distance < 1)
      return;

    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);
    fetchPlants();
  }

    function handlePlantSelect(plant: PlantProps){
      navigate('PlantSave', { plant });
    }

    if (loading)
    return <Load />

  return (
    <Container>
      <HeaderContent>

        <Header />

        <Title>Em qual ambiente</Title>
        <Subtitle>voc?? quer colocar sua planta?</Subtitle>
      </HeaderContent>

      <FlatListContainer>
        <ListItem
          data={enviroments}
          keyExtractor={(item) => String(item.key)}
          renderItem={({ item }) => (
            <EnviromentButton
              title={item.title}
              active={item.key === environmentSelected}
              onPress={() => handleEnvironmentSelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </FlatListContainer>

      <FlatListContainerPlants>
        <ListPlants
          data={filteredPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardPrimary 
            data={item} 
            onPress={() => handlePlantSelect(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
          ListFooterComponent={
            loadingMore
              ? <ActivityIndicator color={colors.green} />
              : <></>
          }
        />
      </FlatListContainerPlants>
    </Container>
  );
}