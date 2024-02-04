// MsgBox.jsx
import React from 'react';

export default function MsgBox({ userName, textColor }) {
  const styles = { color: textColor };
  return <h1 style={styles}>{userName}</h1>;
}
