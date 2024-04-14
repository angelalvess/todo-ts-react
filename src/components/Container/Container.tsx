import * as C from '../../App.styles';
import { useState } from 'react';

const Container = () => {
  const [list, setList] = useState([]);

  return (
    <div>
      <C.Container>
        <C.Area>
          <C.Header>Todo List</C.Header>
        </C.Area>
      </C.Container>
    </div>
  );
};

export default Container;
