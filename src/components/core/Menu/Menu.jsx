import * as React from 'react';

import './Menu.scss';

export default function Menu() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div class="align">

      <nav class="navigation navigation--inline">
        <ul>
          <li>
            <a href="#">
              <i class='bx bxl-discord-alt'></i>
              <span class="invisible">Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class='bx bxl-discord-alt'></i>
              <span class="invisible">Search</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class='bx bxl-discord-alt'></i>
              <span class="invisible">Products</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class='bx bxl-discord-alt'></i>
              <span class="invisible">Notifications</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class='bx bxl-discord-alt'></i>
              <span class="invisible">Profile</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}