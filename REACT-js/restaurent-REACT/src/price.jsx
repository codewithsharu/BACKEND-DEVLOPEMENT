import React from 'react';

export default function Price({ oldp, newp }) {
  let styles = {
    backgroundColor: "#e0c367",
    height: "22%",
    borderBottomLeftRadius: "2rem",
    borderBottomRightRadius: "2rem",
  };

  let s = {
    textDecoration: 'line-through'
  };

  return (
    <div style={styles}>
      <span style={s}>{oldp}</span>&nbsp;&nbsp;&nbsp;<span>{newp}</span>
    </div>
  );
}
