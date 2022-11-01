import React from 'react';
import { StatusBar, View, Text } from 'react-native';
import ScreenHeader from '../../components/ScreenHeader';
import { Bank } from '../../../assets/images';

const Profile = () => {
  return (
    <View>
      <ScreenHeader height={165} bgColor="#64C2DB">
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <View>
            <Text style={{ fontFamily: 'WorkSans-SemiBold', fontSize: 24, color: '#fff' }}>
              Account Balance
            </Text>
            <Text style={{ fontFamily: 'WorkSans-Regular', fontSize: 14, color: '#fff' }}>
              Seniority: 24 anni e 2 mesi
            </Text>
          </View>
          <Bank />
        </View>
      </ScreenHeader>
    </View>
  );
};

export default Profile;
