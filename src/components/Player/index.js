import React, {  }  from 'react';

import './style.scss';

import { Card } from '../Imports';

export default function Player({ hand }) {

  // console.log(hand);

  return (
    <>
      <h1>Player</h1>
      <section className="hand">
        <div className="cards">
          {/* <Card suit={suit} rank={rank} /> */}
        </div>
        {/* <div className="points">{points}</div> */}
      </section>
    </>
  )
} 