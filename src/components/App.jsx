import { ContactForm, ContactList, Filter, Section } from '../components';
import { AppStyled, Main } from './App.styled';

export const App = () => {
  return (
    <AppStyled>
      <Main>
        <Section title="Phonebook">
          <ContactForm />
        </Section>

        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </Main>
    </AppStyled>
  );
};
