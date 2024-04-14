import { useState, KeyboardEvent } from 'react';
import * as C from './styles';

interface AddAreaProps {
  onEnter: (taskName: string) => void;
}

const AddArea = ({ onEnter }: AddAreaProps) => {
  const [inputText, setInputText] = useState('');

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && inputText !== '') {
      onEnter(inputText);
      setInputText('');
    }
  };

  return (
    <C.Container>
      <input
        type="text"
        placeholder="Add a new task..."
        value={inputText}
        onChange={({ target }) => setInputText(target.value)}
        onKeyUp={handleKeyUp}
      />
      <div className="image">➕</div>
    </C.Container>
  );
};

export default AddArea;
