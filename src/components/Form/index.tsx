import React, { useRef, useState } from 'react';
import { useAddParticipant } from '../../state/hooks/useAddParticipant';
import { useErroMessage } from '../../state/hooks/useErroMessage';
import styles from './Form.module.css';

const Form: React.FC = () => {
  const [name, setName] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const addOnList = useAddParticipant();

  const addParticipant = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addOnList(name);

    setName('');
    inputRef.current?.focus();
  };

  const erroMessage = useErroMessage();

  return (
    <form onSubmit={addParticipant}>
      <div className={styles['form-container']}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Insira os nomes dos participantes"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button disabled={name.length === 0}>Adicionar</button>
      </div>
      {erroMessage && <p role="alert" className={`${styles.alert} ${styles.error}`}>{erroMessage}</p>}
    </form>
  );
};

export default Form;
