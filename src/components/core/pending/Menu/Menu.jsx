import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PetsIcon from '@mui/icons-material/Pets';
import PersonIcon from '@mui/icons-material/Person';
import NatureIcon from '@mui/icons-material/Nature';

export default function Menu() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Home"
        value="HomeIcon"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        label="Pets"
        value="PetsIcon"
        icon={<PetsIcon />}
      />
      <BottomNavigationAction
        label="Shelter"
        value="shelter"
        icon={<NatureIcon />}
      />
      <BottomNavigationAction 
      label="Profile" 
      value="PersonIcon" 
      icon={<PersonIcon />} />
    </BottomNavigation>
  );
}