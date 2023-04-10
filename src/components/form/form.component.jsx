import styles from './form.module.css';
import Button from '../ui/button/button.component';
import { useState, useRef } from 'react';
import Invalid from '../ui/invalid/invalid.component';
import Container from '../ui/container/container.component';
import Wrapper from '../helpers/wrapper,component';

const Form = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  
  const [error, setError] = useState();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value; 
    // console.log(enteredName, enteredAge)
    if (enteredName.trim().length === 0 && enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age(non-empty values).',
      });
      return;
    } else if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    let userData = {
      id: (Math.random() * 10).toString(),
      name: enteredName,
      age: enteredAge,
    };
    props.onPost(userData);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError();
  };

  return (
    <Wrapper>
      {error && <Invalid title={error.title} message={error.message} onClickHandler={errorHandler}/>}
      <Container className={styles.input}>
        <form onSubmit={formSubmitHandler}>
          <div className={styles['form-control']}>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              name='username'
              id='username'
              ref={nameInputRef}
            />
          </div>
          <div className={styles['form-control']}>
            <label htmlFor='age'>Age</label>
            <input
              type='number'
              name='age'
              id='age'
              ref={ageInputRef}
            />
          </div>
          <Button type='submit'>Add User</Button>
        </form>
      </Container>
    </Wrapper>
  );
};

export default Form;
