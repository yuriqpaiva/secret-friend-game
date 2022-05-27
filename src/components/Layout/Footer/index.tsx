import React from 'react';
import { useParticipantList } from '../../../state/hooks/useParticipantList';
import { useNavigate } from 'react-router-dom';
import sacolas from '../../../assets/sacolas.png';
import styles from './Footer.module.css';
import { useSortition } from '../../../state/hooks/useSortition';

const Footer: React.FC = () => {
  const participantList = useParticipantList();

  const navigateTo = useNavigate();

  const sortition = useSortition();

  const init = () => {
    sortition();
    navigateTo('/sorteio');
  };

  return (
    <footer className={styles['footer-configurations']}>
      <button
        disabled={participantList.length < 3}
        onClick={init}
        className={styles['footer-configurations__button']}
      >
        Iniciar brincadeira
      </button>
      <img src={sacolas} alt="Sacolas de compras" />
    </footer>
  );
};

export default Footer;
