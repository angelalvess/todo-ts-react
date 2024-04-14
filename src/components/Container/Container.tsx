import { useState } from 'react';
import { Item } from '../../types/Item';
import * as C from '../../App.styles';
import ListItem from '../ListItem/ListItem';
import AddArea from '../AddArea/AddArea';

const Container = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Buy bread', done: true },
    { id: 2, name: 'Buy milk', done: false },
    { id: 3, name: 'Buy butter', done: false },
  ]);

  const handleAddTask = (taskName: string) => {
    const newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Todo List</C.Header>

        {/* Add a new item */}

        <AddArea onEnter={handleAddTask} />

        {/* List of items */}

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
};

export default Container;
