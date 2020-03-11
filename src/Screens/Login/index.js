import React, { useState, useEffect } from 'react';
import { Keyboard, StyleSheet, Text, View, Alert } from 'react-native';
import { login } from '../../Services/commonServices';
import Button from '../../Components/Button';
import TextInput from '../../Components/TextInput';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassord] = useState('');
  const [marginTop, setMarginTop] = useState();

  const onKeyboardShow = () => {
    setMarginTop(-300);
  };

  const onKeyboardHide = () => {
    setMarginTop(0);
  };

  const onSubmit = () => {
    let validation = [];
    if (username === '') validation.push('Username');
    if (password === '') validation.push('Password');
    if (validation.length > 0) {
      Alert.alert(
        'Validation error',
        `${validation.join(', ')} must not be empty!`,
      );
    } else {
      login(username, password, navigation);
    }
  };

  useEffect(() => {
    const keyboardShow = Keyboard.addListener(
      'keyboardDidShow',
      onKeyboardShow,
    );
    const keyboardHide = Keyboard.addListener(
      'keyboardDidHide',
      onKeyboardHide,
    );

    return () => {
      keyboardShow.remove();
      keyboardHide.remove();
    };
  }, []);

  return (
    <View style={{ ...styles.container, marginTop: marginTop }}>
      <Text style={styles.header}>TaskManagement</Text>
      <TextInput
        placeholder='Enter username'
        label='USERNAME'
        value={username}
        iconSize={32}
        onChangeText={text => setUsername(text)}
        iconName='user'
      />
      <TextInput
        placeholder='Enter password'
        secureTextEntry
        iconName='key'
        label='PASSWORD'
        textContentType='password'
        value={password}
        onChangeText={text => setPassord(text)}
      />
      <Button
        icon={{ name: 'arrow-right' }}
        title='LOGIN'
        onPress={onSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
