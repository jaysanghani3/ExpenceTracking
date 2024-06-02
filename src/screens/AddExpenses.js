import React, {useState} from 'react';
import {Text, TextInput, View, Button, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {add_expenses} from '../components/redux1/expenseSlice';
import DatePicker from 'react-native-date-picker';

const AddExpenses = ({navigation}) => {
  const [data, setData] = useState({
    date: '',
    name: '',
    amount: 0,
    type: 'Expenses',
  });

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.staticeText}>Date</Text>
        <View style={styles.containerDate}>
          <Text onPress={() => setOpen(true)} style={styles.text}>
            Choose Date
          </Text>
          <DatePicker
            modal
            mode="date"
            open={open}
            date={new Date()}
            onConfirm={date => {
              setOpen(false);
              console.log('    date', date.toLocaleDateString());
              setData({...data, date: date.toLocaleDateString()});
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>
      </View>

      <View style={styles.box}>
        <Text style={styles.staticeText}>Name</Text>
        <TextInput
          placeholder="Enter Item Name"
          style={styles.input}
          onChangeText={newName => setData({...data, name: newName})}
          defaultValue={data.name}
        />
      </View>

      <View style={styles.box}>
        <Text style={styles.staticeText}>Amount</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Amount"
          keyboardType="numeric"
          onChangeText={newAmout => setData({...data, amount: newAmout})}
          defaultValue={data.amount}
        />
      </View>

      <View style={styles.box}>
        <Text style={styles.staticeText}>Type</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Type"
          keyboardType="numeric"
          onChangeText={newType => setData({...data, type: newType})}
          defaultValue={data.type}
        />
      </View>

      <Button
        title="Add Expenses"
        onPress={() => {
          dispatch(add_expenses(data));
          //doubt Here for navigation
          navigation.navigate('AddExpenses');
        }}
      />
    </View>
  );
};
export default AddExpenses;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
  },
  box: {
    flexDirection: 'row',
    padding: 10,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  staticeText: {
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    width: 300,
    paddingStart: 10,
    borderRadius: 10,
  },
  containerDate: {
    flex: 1,
    marginLeft: 100,
    marginRight: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 7,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
