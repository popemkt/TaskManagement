import { Input } from 'react-native-elements';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TextInput({
  label,
  placeholder,
  iconName,
  errorMessage,
  value,
  onChangeText,
  style,
  iconSize,
  ...moreProps
}) {
  return (
    <Input
      placeholder={placeholder}
      placeholderTextColor='grey'
      leftIcon={
        iconName ? (
          <Icon name={iconName} size={iconSize ? iconSize : 24} color='black' />
        ) : null
      }
      labelStyle={{ fontSize: 20, fontWeight: 'bold' }}
      label={label}
      errorStyle={{ color: 'red' }}
      errorMessage={errorMessage}
      value={value}
      onChangeText={onChangeText}
      inputStyle={{ paddingLeft: 30, ...style }}
      {...moreProps}
    />
  );
}
