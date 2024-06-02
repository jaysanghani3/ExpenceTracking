import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const ListofTranctions = () => {
  const expenses = useSelector(state => state.expenses.exp);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          backgroundColor: 'green',
          justifyContent: 'space-between',
        }}>
        <Text>Date</Text>
        <Text>Name</Text>
        <Text>Amount</Text>
        <Text>Type</Text>
      </View>

      {expenses.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              padding: 10,
              justifyContent: 'space-between',
            }}>
            <Text>{item.date}</Text>
            <Text>{item.name}</Text>
            <Text>{item.amount}</Text>
            <Text>{item.type}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default ListofTranctions;
