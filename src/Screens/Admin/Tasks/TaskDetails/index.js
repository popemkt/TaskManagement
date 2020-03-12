import React, { useEffect, useState, useReducer } from 'react';
import { StyleSheet, Text, View, Alert, TextInput } from 'react-native';
import Button from '../../../../Components/Button';

export default function Admin({ admin, navigation, data, route }) {
  const [name] = useState(route.params?.TaskName);
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
          value={task.ContentAssigned}
          onChangeText={text => setTask({ ...task, ContentAssigned: text })}
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
      <View>
        <Text style={styles.label}>{`Creator: ${task.CreatorName}`}</Text>
        <Text style={styles.label}>{`Details: ${task.ContentAssigned}`}</Text>
        <Text style={styles.label}>{`Processor: ${task.ProcesssorName}`}</Text>

        <Text
          style={styles.label}
        >{`Processing details: ${task.ContentHandlingWork}`}</Text>

        <Text style={styles.label}>{`Status: ${task.Status}`}</Text>
        <Text style={styles.label}>{`Time start: ${task.TimeStart}`}</Text>
        <Text style={styles.label}>{`Time created: ${task.CreationTime}`}</Text>
        <Text
          style={styles.label}
        >{`Time manager last commented: ${task.TimeManagerCommented}`}</Text>
        <View style={styles.inputContainer}>

        </View>
        <View style={styles.row}>
          <Button
            title='DELETE'
            // onPress={}
            style={{color: 'red'}}
          />
          <Button
            title='CREATE'
            // onPress={}
          />
          <Button
            title='UPDATE'
            // onPress={}
          />
        </View>
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
    width: '95%',
  },
  minorHeader: {
    fontSize: 20,
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
