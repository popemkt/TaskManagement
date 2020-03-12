import React, { useState } from 'react';
import { Button, View, Text, Picker, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import DateTimePicker from './DateTimePicker';

function OptionModal({
  isVisible,
  setIsVisile,
  list,
  setList,
  options,
  setOptions,
}) {
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [status, setStatus] = useState('Java');
  const [userId, setUserId] = useState();

  return (
    <Modal isVisible={isVisible} style={{ alignItems: 'center' }}>
      <View style={{ ...styles.margin, ...styles.modal }}>
        <Text>{'Options'}</Text>
        <Picker
          selectedValue={status}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}
        >
          <Picker.Item label='Java' value='java' />
          <Picker.Item label='JavaScript' value='js' />
        </Picker>
        <View>
          <DateTimePicker
            date={fromDate}
            setDate={setFromDate}
          ></DateTimePicker>
          <DateTimePicker date={toDate} setDate={setToDate}></DateTimePicker>
        </View>
        <View
          style={{
            ...status.margin,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <Button style={styles.margin} title='OK' />
          <Button style={styles.margin} title='Cancel' onPress={() => setIsVisile(false)} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  margin: {
    // marginTop: 10,
    // marginBottom: 10,
    margin: 10,
  },
});

export default OptionModal;
