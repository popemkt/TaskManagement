import React, { useEffect, useState, createContext } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import OptionModal from './Modals/OptionModal/OptionModal';
import database from '../../../Services';
import Button from '../../../Components/Button';
import { truncate } from '../../../Common/utils';
import { ListItem } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Tasks({ admin, navigation, data, route }) {
  const [listGroups, setListGroups] = useState([]);
  const [options, setOptions] = useState({
    filter: false,
    fromDate: null,
    toDate: null,
    status: null,
    userId: null,
  });
  const [optionModalVisibility, setOptionModalVisibility] = useState(true);

  useEffect(() => {
    setListTasks(database.tasks);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{'Groups'}</Text>
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
