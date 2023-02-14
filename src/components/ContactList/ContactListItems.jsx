import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PT from 'prop-types';
import { BsFillPersonLinesFill, BsFillPersonXFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

import { ContactListItemsStyled, DeleteBtnStyled } from './ContactList.styled';

export const ContactListItems = ({ contactId, name, number }) => {
  const dispatch = useDispatch();

  const deleteContact = () => {
    dispatch(removeContact(contactId));
    Notify.success(`${name}  delete from your contacts`, {
      width: '350px',
      opacity: 0.8,
    });
  };

  return (
    <ContactListItemsStyled>
      <BsFillPersonLinesFill
        style={{
          marginRight: 10,
          width: 15,
          height: 15,
        }}
      />
      <p>
        {name}: {number}
      </p>
      <DeleteBtnStyled type="button" onClick={() => deleteContact()}>
        <BsFillPersonXFill
          style={{
            marginRight: 5,
          }}
        />
        Delete
      </DeleteBtnStyled>
    </ContactListItemsStyled>
  );
};

ContactListItems.propTypes = {
  contactId: PT.string.isRequired,
  name: PT.string.isRequired,
  number: PT.string.isRequired,
};
