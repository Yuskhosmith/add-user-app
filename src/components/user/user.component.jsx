import styles from './user.module.css'

const User = ({name, age}) => {

  return(
    <li className={styles.user}>{name} ({age} years)</li>
  );
};

export default User;
