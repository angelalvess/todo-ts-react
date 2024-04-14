import { useState } from 'react';
import { Item } from '../../types/Item';
import * as C from '../../App.styles';
import ListItem from '../ListItem/ListItem';

const Container = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Buy bread', done: true },
    { id: 2, name: 'Buy milk', done: false },
  ]);

  return (
    <div>
      <C.Container>
        <C.Area>
          <C.Header>Todo List</C.Header>

          {/* Add a new item */}
          {list.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </C.Area>
      </C.Container>
    </div>
  );
};

export default Container;
