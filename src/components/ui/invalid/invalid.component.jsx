import styles from './invalid.module.css';
import Container from '../container/container.component';
import Button from '../button/button.component';
import ReactDOM from 'react-dom';

const Backdrop = ({ onClickHandler }) => {
  return (
    <div
      className={styles.backdrop}
      onClick={onClickHandler}
    />
  );
};

const ModalOverlay = ({ title, message, onClickHandler }) => {
  return (<Container className={styles.modal}>
    <header className={styles.header}>
      <h2>{title || 'Invalid Input'}</h2>
    </header>
    <div className={styles.content}>
      <p>{message}</p>
    </div>
    <footer className={styles.actions}>
      <Button onClick={onClickHandler}>Okay</Button>
    </footer>
  </Container>
  );
};

const Invalid = ({ title, message, onClickHandler }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClickHandler={onClickHandler} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onClickHandler={onClickHandler} />,
        document.getElementById('overlay-root')
      )}

    </>
  );
};

export default Invalid;
