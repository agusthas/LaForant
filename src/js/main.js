import '../scss/main.scss'; //FIXME: Hapus ini kalo dah mau run di css biasa
import Navbar from './Navbar.js';
import Homepage from './Homepage.js';
import Socmed from './Socmed.js';
import Dropdown from './Dropdown.js';
import Requirements from './Requirements.js';
import Maps from './Maps.js';
import Agents from './Agents.js';

Dropdown(); /* Put all dropdown list */
Socmed(); /* Put all Social Media Links to Socials */
Navbar(); /* Navbar functionality (Sidebar, Dropdown) */
Homepage(); /* Homepage Related (Latest Updates) */
Requirements(); /* Requirements Page Related */
Maps(); /* Maps Page Related */
Agents();
