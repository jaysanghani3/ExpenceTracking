import React from 'react';
import {View, Text, Button} from 'react-native';
import TotalAmout from '../components/TotalAmout';
import ListofTranctions from '../components/ListofTranctions';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{height: '100%', padding: 15}}>
      <Text style={{fontSize: 30, textAlign: 'center'}}>Expence Tracking</Text>
      <TotalAmout />
      <ListofTranctions />
      <Button
        title="Add Expense"
        onPress={() => navigation.navigate('AddExpenses')}
      />
    </View>
  );
};

export default HomeScreen;
