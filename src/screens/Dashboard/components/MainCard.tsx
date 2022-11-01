import React from 'react';
import { View, Text } from 'react-native';
import { User } from '../../../../assets/icons';
import { styles } from './MainCard.module';

const MainCard = () => {
  return (
    <View style={[styles.card, styles.elevation]}>
      <View style={styles.cardHeader}>
        <User />
        <Text style={styles.cardTitle}>User summary</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.statTitle}>Status</Text>
          <Text style={styles.statValue}>Subscribed</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.statTitle}>Birthday</Text>
          <Text style={styles.statValue}>26/01/1994</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.statTitle}>City</Text>
          <Text style={styles.statValue}>Barcelona</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View>
            <Text style={styles.statTitle}>Country</Text>
            <Text style={styles.statValue}>ES</Text>
          </View>
          <View style={{ marginLeft: 24 }}>
            <Text style={styles.statTitle}>Number</Text>
            <Text style={styles.statValue}>100</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MainCard;
