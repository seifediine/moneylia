import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';

type ScreenHeaderProps = {
  height: number;
  bgColor: string;
  children: ReactNode;
};

const ScreenHeader = ({ bgColor, height, children }: ScreenHeaderProps) => {
  return (
    <View
      style={{
        backgroundColor: bgColor,
        height: height,
        width: '100%',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        paddingHorizontal: 16,
        paddingTop: 16,
      }}
    >
      {children}
    </View>
  );
};

export default ScreenHeader;
