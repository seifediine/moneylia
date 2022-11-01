import React from 'react';
import { View, Text } from 'react-native';
import ScreenHeader from '../../components/ScreenHeader';
import { UserProfile } from '../../../assets/icons';

const Profile = () => {
  return (
    <View>
      <ScreenHeader height={145} bgColor="#3a3b7b">
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
          <View>
            <Text style={{ fontFamily: 'WorkSans-SemiBold', fontSize: 20, color: '#fff' }}>
              Giovanni Farese
            </Text>
            <Text style={{ fontFamily: 'WorkSans-Regular', fontSize: 12, color: '#fff' }}>
              N. Matricola 100
            </Text>
          </View>
          <UserProfile />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontFamily: 'WorkSans-Regular', fontSize: 12, color: '#fff' }}>
              Contribution Seniority
            </Text>
            <Text style={{ fontFamily: 'WorkSans-Regular', fontSize: 16, color: '#fff' }}>
              24 anni e 2 mesi
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontFamily: 'WorkSans-Regular', fontSize: 12, color: '#fff' }}>
              Current Satatus
            </Text>
            <Text style={{ fontFamily: 'WorkSans-Regular', fontSize: 16, color: '#fff' }}>
              Subscribed
            </Text>
          </View>
        </View>
      </ScreenHeader>
    </View>
  );
};

export default Profile;
