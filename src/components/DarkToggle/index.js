import React from 'react';
import { ThemeContext } from '../ThemeContext';

const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
    <label style={{ cursor: "pointer" }}>
      <input
        type="checkbox"
        checked={colorMode === 'dark'}
        onChange={ev => {
          setColorMode(ev.target.checked ? 'dark' : 'light');
        }}
      />{' '}
      🌗
    </label>
  );
};

export default DarkToggle;