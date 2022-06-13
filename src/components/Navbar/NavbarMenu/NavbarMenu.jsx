import { NavLink } from 'react-router-dom';
import css from './NavbarMenu.module.css';
import { items } from './items';

const NavbarMenu = ({ isLogged }) => {
  const menuItems = items.filter(item => item.private === isLogged);

  const elements = menuItems.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink to={to}>{text}</NavLink>
    </li>
  ));
  return <ul className={css.list}>{elements}</ul>;
};

export default NavbarMenu;
