import React from 'react';
import { Container, Category, Icon } from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps {
  title: string;
  onPress: () => void;
}
export function CategorySelectButton({ title, onPress, testID }: Props) {
  return (
    <Container onPress={onPress} testID={testID}>
      <Category>{title}</Category>
      <Icon name='chevron-down' />
    </Container>
  );
}
