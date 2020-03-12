import React, { useState } from 'react';
import { View, Button, Platform, Alert, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const MyDateTimePicker = ({ date, setDate }) => {
  const [mode, setMode] = useState();
  const [show, setShow] = useState(false);
  const [reset, setReset] = useState(true);

  const onChange = (event, selectedDate) => {
    setReset(false);
    let dateValue = selectedDate || date;
    setDate(dateValue);
    if (mode === 'date') {
      setMode('time');
      setReset(true);
      setShow(false);
    } 
};

  const showTimepicker = () => {
    setMode('date');
    setShow(true);
  };

  return (
    <View>
      <TouchableOpacity onPress={showTimepicker}>
        <Text  >{date?.toString() || 'From Date'} </Text>
      </TouchableOpacity>
      {(show&&reset) && (
        <DateTimePicker
          timeZoneOffsetInMinutes={0}
          value={date || new Date()}
          mode={mode}
          is24Hour={true}
          display='default'
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default MyDateTimePicker;
