import React, { useState } from 'react';
import { useParticipantList } from '../state/hooks/useParticipantList';
import { useSortitionResult } from '../state/hooks/useSortitionResult';
import styles from './Sortition.module.css';
import aviao from '../assets/aviao.png';
import Card from '../components/Card';

const Sortition: React.FC = () => {
  const participants = useParticipantList();

  const [selectedParticipant, setSelectedParticipant] = useState('');

  const [secretFriend, setSecretFriend] = useState('');

  const sortitionResult = useSortitionResult();

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const currentSecretFriend = sortitionResult.get(selectedParticipant) || '';

    setSecretFriend(currentSecretFriend);
  };

  return (
    <Card>
      <section>
        <form onSubmit={submit}>
          <select
            className={styles.sortition}
            required
            name="participant"
            id=""
            placeholder="Selecione o seu nome"
            value={selectedParticipant}
            onChange={(event) => {
              setSelectedParticipant(event.target.value);
            }}
          >
            {participants.map((participant) => {
              return (
                <option value={participant} key={participant}>
                  {participant}
                </option>
              );
            })}
          </select>
          <button className={styles.sortition__button} type="submit">
            Sortear
          </button>
        </form>
        {secretFriend.length > 0 && (
          <p className={styles.sortition__result} role="alert">
            {secretFriend}
          </p>
        )}
        <footer className={styles.sortiton}>
          <img src={aviao} alt="Um desenho de um avião de papel" />
        </footer>
      </section>
    </Card>
  );
};

export default Sortition;
