import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from 'redux/contactsSlice';

import { FormBtn, FormInput, FormTitle } from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onFormSubmit = e => {
    e.preventDefault();

    const inputName = e.currentTarget.name.value;
    const inputNumber = e.currentTarget.number.value;

    const data = {
      id: nanoid(),
      name: inputName,
      number: inputNumber,
    };

    const normalizeFilter = inputName.toLowerCase();
    const stateNameArray = contacts.map(({ name }) => name.toLowerCase());

    !stateNameArray.includes(normalizeFilter)
      ? dispatch(addContact(data))
      : Notify.failure(`${data.name} is already in contacts.`, {
          width: '350px',
          opacity: 0.8,
        });

    e.currentTarget.reset();
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
