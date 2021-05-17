import '../scss/main.scss';
import './vendors/jquery.min';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Socmed from './Socmed';
import Dropdown from './Dropdown';
import Requirements from './Requirements';

Dropdown(); /* Put all dropdown list */
Socmed(); /* Put all Social Media Links to Socials */
Navbar(); /* Navbar functionality (Sidebar, Dropdown) */
Homepage(); /* Homepage Related (Latest Updates) */
Requirements(); /* Requirements Related */
