import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import UserProfilePage from './src/UserProfilePage/index';

export default function App() {

  return (
   
      <View style={{ flex: 1 }}>
          <UserProfilePage/>
      </View>
   
  )
}