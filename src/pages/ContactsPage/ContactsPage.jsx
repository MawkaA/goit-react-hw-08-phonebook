import Phonebook from 'components/Phonebook';
import css from './ContactsPage.module.css';
const ContactsPage = () => {
  return (
    <main className={css.main}>
      <Phonebook />
    </main>
  );
};

export default ContactsPage;
