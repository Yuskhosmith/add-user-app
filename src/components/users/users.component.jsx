import styles from './users.module.css';
import User from '../user/user.component';
import Container from '../ui/container/container.component';

const Users = ({users}) => {
  if(users.length > 0) {
    return (
    <Container className={styles.container}>
      <ul className={styles['user-list']}>
        {users.map((user) => (
          <User
            key={user.id}
            name={user.name}
            age={user.age}
          />
        ))}
      </ul>
    </Container>
  );
  }
  
};

export default Users;
