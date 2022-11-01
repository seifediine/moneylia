import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenHeader from '../../components/ScreenHeader';
import MainCard from './components/MainCard';
import { contributions } from '../../../assets/data/dashboardData';
import Card from './components/Card';
import { styles } from './Dashboard.module';

const Dashboard = () => {
  return (
    <View style={styles.screen}>
      <ScreenHeader height={195} bgColor="#7476ed">
        <Text style={styles.headerTitle}>Hello, John S.</Text>
        <Text style={styles.headerText}>Welcome in Moneylia</Text>
      </ScreenHeader>
      <View style={styles.container}>
        <MainCard />
        <View style={styles.cards}>
          <Text style={styles.contributions}>Contributions of 2022</Text>
          <View style={styles.cardsContainer}>
            {contributions.map((item) => (
              <Card key={item.title} {...item} />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
