import { Alert } from 'react-native';
import axios from 'axios';

export default async function login(username, password, navigation) {
  //   axios
  //     .get('http://192.168.1.3:44353/User/1')
  //     .then(function(response) {
  //       if (response.data.RoleId == 1) {
  //         Alert.alert(response.data);
  //         navigation.navigate('Admin');
  //       }
  //     })
  //     .catch(function(error) {
  //       Alert.alert('Error');
  //     });
  let response = await fetch('http://192.168.1.3:44353/User/1')
  Alert.alert(response.json().FullName)
//   await fetch('http://192.168.1.3:44353/User/1')
//     .then(response => response.json())
//     .then(responseJson => {
//       Alert.alert(responseJson.FullName);
//     })
//     .catch(error => {
//       console.error(error);
//     });

  Alert.alert('Error new');
}
