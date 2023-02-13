import PT from 'prop-types';
import { BsFillPersonLinesFill, BsFillPersonXFill } from 'react-icons/bs';

import { ContactListItemsStyled, DeleteBtnStyled } from './ContactList.styled';

export const ContactListItems = ({
  contactId,
  name,
  number,
  deleteContact,
}) => {
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
      <DeleteBtnStyled
        type="button"
        onClick={() => deleteContact(contactId, name)}
      >
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
  deleteContact: PT.func.isRequired,
  name: PT.string.isRequired,
  number: PT.string.isRequired,
};
