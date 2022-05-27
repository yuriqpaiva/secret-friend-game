import styles from './Header.module.css';
import participant from '../../../assets/participante.png';

const Header: React.FC = () => {
  return (
    <header className={styles.header} role="heading">
      <div
        className={styles.header__picture}
        aria-label="Logo do Sorteador"
        data-testid="logo"
      ></div>
      <img
        className={styles.header__participant}
        src={participant}
        alt="Participante com um presente na mão"
      />
    </header>
  );
};

export default Header;
