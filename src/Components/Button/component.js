import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';

export default function MyButton({ size, icon, title, onPress }) {
  return (
    <Button
      {...(size ? { [size]: true } : { large: true })}
      containerStyle={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'auto',
      }}
      icon={
        icon ? (
          <Icon name={icon.name} size={icon.size || 15} color='white' />
        ) : null
      }
      iconRight
      title={title}
      onPress={onPress}
    />
  );
}
