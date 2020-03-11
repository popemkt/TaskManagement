import { Alert } from 'react-native';
import axios from 'axios';
import { BASE_URL } from '../Constants/configs';

export async function login(username, password, navigation) {
  //   Alert.alert(username + '   ' + password);
  axios
    .get(`${BASE_URL}Home`, {
      Username: username,
      Password: password,
    })
    .then(response => {
      switch (response.data.Data.RoleId) {
        case 1:
          navigation.navigate('Admin', { ...response.data.Data });
      }
    })
    .catch(err =>
      Alert.alert('Login failed', 'Incorrect username or password'),
    );
}
