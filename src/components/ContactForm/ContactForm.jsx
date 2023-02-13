import { nanoid } from 'nanoid';
import PT from 'prop-types';
import { useState } from 'react';
import { BsFillPersonPlusFill } from 'react-icons/bs';

import { FormBtn, FormInput, FormTitle } from './ContactForm.styled';

const ContactForm = ({ createNewContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const data = { id: nanoid(), name: name, number: number };
    createNewContact(data);

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label>
        <FormTitle>Name</FormTitle>
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onInputChange}
        />
      </label>

      <label>
        <FormTitle>Phone number</FormTitle>
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={onInputChange}
        />
      </label>

      <FormBtn type="submit">
        <BsFillPersonPlusFill
          style={{
            marginRight: 10,
            width: 20,
            height: 20,
          }}
        />
        Add contact
      </FormBtn>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  createNewContact: PT.func.isRequired,
};
