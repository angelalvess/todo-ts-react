import * as C from './styles';
import { Item } from '../../types/Item';
import { useState } from 'react';

interface ListItemProps {
  item: Item;
}

const ListItem = ({ item }: ListItemProps) => {
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <div>
      <C.Container>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={({ target }) => setIsChecked(target.checked)}
        />
        <label>{item.name}</label>
      </C.Container>
    </div>
  );
};

export default ListItem;
