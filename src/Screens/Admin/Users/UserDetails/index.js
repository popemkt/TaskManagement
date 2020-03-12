import React, { useEffect, useState, useReducer } from 'react';
import { StyleSheet, Text, View, Alert, TextInput } from 'react-native';
import Button from '../../../../Components/Button';

export default function Admin({ admin, navigation, data, route }) {
  const [name] = useState(route.params?.Username);
  const [user, setUser] = useState({ ...route.params });
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{name || 'TaskName'}</Text>
      <Text style={styles.minorHeader}>{'User Details\n'}</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{'Fullname'}</Text>
        <TextInput
          style={styles.input}
          value={user.Fullname}
          onChangeText={text => setUser({ ...user, Fullname: text })}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{'Address'}</Text>
        <TextInput
          style={styles.input}
          value={user.Address}
          onChangeText={text => setUser({ ...user, Address: text })}
          maxLength={40}
        />
      </View>
      <View>
        <Text style={styles.label}>{`Id: ${user.Id}`}</Text>
        <Text style={styles.label}>{`Phone: ${user.Phone}`}</Text>
        <Text style={styles.label}>{`Mail: ${user.Mail}`}</Text>
        <Text style={styles.label}>{`DoB: ${user.DoB}`}</Text>
        <Text style={styles.label}>{`Group: ${user.GroupName}`}</Text>
        <View style={styles.row}>
          <Button
            title='DELETE'
            // onPress={}
            style={{ color: 'red' }}
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
