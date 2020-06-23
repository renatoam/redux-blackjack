import React from 'react';

import Coin from '../Coin';

export default function Coins() {
  return (
    <>
      <Coin value={10} className="ten" />
      <Coin value={20} className="twenty" />
      <Coin value={50} className="fifty" />
      <Coin value={100} className="hundred" />
    </>
  )
}