import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import database from '../../../Services';
import { ListItem } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Users({ admin, navigation, data, route }) {
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    setListUsers(database.users);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{'Users'}</Text>
      <View style={styles.container}>
        {listUsers
          ? listUsers.map((l, i) => (
              <ListItem
                Component={TouchableOpacity}
                style={styles.listItem}
                roundAvatar
                chevron
                subtitle={l.Fullname}
                bottomDivider
                leftAvatar={{
                  source: {
                    uri:
                      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                  },
                }}
                key={i}
                onPress={() => {
                  navigation.navigate('UserDetails', { ...l });
                }}
                title={l.Username.toString()}
              />
            ))
          : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  header: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
    fontSize: 40,
    marginLeft: 10,
  },
  listItem: {
    width: 400,
  },
  minorHeader: {
    fontSize: 20,
    marginLeft: 10,
  },
});
