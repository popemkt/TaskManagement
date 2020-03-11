import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import database from '../../../Services';
import { truncate } from '../../../Common/utils';
import { ListItem } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Admin({ admin, navigation, data, route }) {
  const [listTasks, setListTasks] = useState([]);

  useEffect(() => {
    setListTasks(database.tasks);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{route.params?.Fullname || 'Admin'}</Text>
      <Text style={styles.minorHeader}>{'Tasks'}</Text>
      <View style={styles.container}>
        {listTasks
          ? listTasks.map((l, i) => (
              <ListItem
                Component={TouchableOpacity}
                style={styles.listItem}
                roundAvatar
                chevron
                subtitle={truncate(l.Description, 40)}
                bottomDivider
                leftAvatar={{
                  source: {
                    uri:
                      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                  },
                }}
                key={i}
                onPress={() => {
                  Alert.alert(l.Description);
                  navigation.navigate('TaskDetails', { ...l });
                }}
                title={l.TaskName}
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
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
    fontSize: 40,
  },
  listItem: {
    width: 400,
  },
  minorHeader: {
    fontSize: 20,
    marginLeft: 10,
  },
});
