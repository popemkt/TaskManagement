import React, { useState, useEffect } from 'react';
import { Keyboard, StyleSheet, Text, View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { List, ListItem } from 'react-native-elements';


export default function Admin({ admin, navigation }) {
  return (
    <View style={{ ...styles.container }}>
      <Text style={styles.header}>AdminName</Text>
      <Button
        large
        icon={{ name: 'envira', type: 'font-awesome' }}
        color='red'
        title='LOGIN'
        buttonStyle={{ width: '100%', marginTop: 20 }}
        onPress={() => Alert.alert(username + '   ' + password)}
      />
      {/* <List containerStyle={{ marginBottom: 20 }}>
        {list.map(l => (
          <ListItem
            roundAvatar
            avatar={{ uri: l.avatar_url }}
            key={l.name}
            title={l.name}
          />
        ))}
      </List> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
    fontSize: 40,
  },
});
