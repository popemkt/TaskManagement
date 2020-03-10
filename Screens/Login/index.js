import React, { useState, useEffect, useReducer } from 'react';
import { Keyboard, StyleSheet, Text, View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import login from './utils'
import { Input, Button } from 'react-native-elements';

export default function Login({navigation}) {
  const [username, setUsername] = useState();
  const [password, setPassord] = useState();
  const [marginTop, setMarginTop] = useState();

  const onKeyboardShow = () => {
    setMarginTop(-300);
  };

  const onKeyboardHide = () => {
    setMarginTop(0);
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
      <Input
        placeholder='Enter username'
        placeholderTextColor='grey'
        leftIcon={<Icon name='user' size={32} color='black' />}
        labelStyle={{ fontSize: 20, fontWeight: 'bold' }}
        label='USERNAME'
        errorStyle={{ color: 'red' }}
        errorMessage=''
        marginBottom={5}
        textContentType='username'
        value={username}
        onChangeText={text => setUsername(text)}
        inputStyle={{ paddingLeft: 30 }}
      />
      <Input
        placeholder='Enter password'
        placeholderTextColor='grey'
        secureTextEntry
        leftIcon={<Icon name='key' size={24} color='black' />}
        labelStyle={{ fontSize: 20, fontWeight: 'bold' }}
        label='PASSWORD'
        errorStyle={{ color: 'red' }}
        errorMessage=''
        marginBottom={5}
        textContentType='password'
        value={password}
        inputStyle={{ paddingLeft: 30 }}
        onChangeText={text => setPassord(text)}
      />
      <Button
        buttonStyle={{ width: '100%', marginTop: 20 }}
        icon={<Icon name='arrow-right' size={15} color='white' />}
        iconRight
        title='Button with right icon'
        onPress={() => login(username, password, navigation)}
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
