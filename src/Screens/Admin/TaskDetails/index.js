import React, { useEffect, useState, useReducer } from 'react';
import { StyleSheet, Text, View, Alert, TextInput } from 'react-native';

// import TextInput from '../../../Components/TextInput';

import database from '../../../Services';

export default function Admin({ admin, navigation, data, route }) {
  const [name, setName] = useState(route.params?.TaskName);
  const [task, setTask] = useState({ ...route.params });
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{name || 'TaskName'}</Text>
      <Text style={styles.minorHeader}>{'Task Details\n'}</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{'Description'}</Text>
        <TextInput
          style={styles.input}
          numberOfLines={4}
          multiline
          value={task.Description}
          onChangeText={text => setTask({ ...task, Description: text })}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>{'Name'}</Text>
        <TextInput
          style={styles.input}
          value={task.TaskName}
          onChangeText={text => setTask({ ...task, TaskName: text })}
          maxLength={40}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: '5%',
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  header: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 40,
  },
  listItem: {
    width: 400,
  },
  inputContainer: {
    marginTop: 10,
    width: '90%',
  },
  minorHeader: {
    fontSize: 20,
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  input: {
    borderLeftWidth: 4,
    borderLeftColor: '#039dfc',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    borderTopWidth: 1,
    borderTopColor: 'grey',
    borderRightWidth: 1,
    borderRightColor: 'grey',
    width: '100%',
    paddingLeft: 7,
    paddingTop: 5,
    textAlignVertical: 'top',
  },
  label: {},
});
