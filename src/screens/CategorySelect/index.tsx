import React from 'react';
import { FlatList } from 'react-native';
import { categories } from '../../utils/categories';
import {
  Container,
  Title,
  Header,
  Category,
  Icon,
  Name,
  Separator,
  Footer,
} from './styles';
import { Button } from '../../components/Form/Button';

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory,
}: Props) {
  function handleCategorySelect(category: Category) {
    setCategory(category);
  }
  return (
    <Container>
      <Header>
        <Title>{category.name}</Title>
      </Header>
      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon}></Icon>
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button onPress={closeSelectCategory} title='Selecionar' />
      </Footer>
    </Container>
  );
}
