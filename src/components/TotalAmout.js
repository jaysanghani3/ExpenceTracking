import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const TotalAmout = () => {
  const [totalExpence, setTotalExpence] = useState(0);
  const expenses = useSelector(state => state.expenses.exp);

  useEffect(() => {
    let total = 0;
    expenses.map(item => {
      if (item.type === 'Expenses') {
        total = total + parseInt(item.amount);
      }
    });
    setTotalExpence(total);
  }, [expenses]);

  return (
    <View style={{marginVertical: 10}}>
      <Text style={{fontSize: 15}}>
        Total Expence Amount :{' '}
        <Text style={{fontSize: 20, fontWeight: 'bold'}}> {totalExpence} </Text>
      </Text>
    </View>
  );
};

export default TotalAmout;
