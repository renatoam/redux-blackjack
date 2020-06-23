import React from 'react';

import './style.scss';

export default function Button({ click, text, className }) {
  return (
    <button className={className} onClick={click}>{text}</button>
  )
}