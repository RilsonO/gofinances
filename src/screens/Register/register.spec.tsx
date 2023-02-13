import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Register } from '.';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../global/styles/theme';
import { NavigationContainer } from '@react-navigation/native';

// jest.mock('@react-navigation/native', () => {
//   return {
//     useNavigation: jest.fn(),
//   };
// });

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </NavigationContainer>
  );
}

describe('Register Screen', () => {
  it('should be open category modal when user click on the category button', () => {
    const { getByTestId } = render(<Register />, {
      wrapper: Providers,
    });

    const categoryModal = getByTestId('modal-category');

    expect(categoryModal.props.visible).toBeFalsy();

    const buttonCategory = getByTestId('button-category');
    fireEvent.press(buttonCategory);

    expect(categoryModal.props.visible).toBeTruthy();
  });
});
