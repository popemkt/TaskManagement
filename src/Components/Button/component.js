import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button } from 'react-native-elements';

export default function MyButton({ size, icon, title, onPress, ...moreArgs }) {
  return (
    <Button
      containerStyle={{
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
      {...moreArgs}
      {...(size ? { [size]: true } : { large: true })}
    />
  );
}
