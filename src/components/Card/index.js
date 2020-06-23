import React from 'react';

import * as iconRank from '../Images';

export default function Card({ suit, rank }) {

  // const [cardValue, setCardValue] = useState(value);

  return (
    <section className="card">
      <section className="card__wrapper" data-suit={suit}>
        <section className="card__row card__row--top">
          <p>{rank}</p>
          <img src={iconRank[suit]} alt={suit}/>
        </section>
        <figure className="card__row card__row--middle">
          <img src={iconRank[suit]} alt={suit}/>
        </figure>
        <section className="card__row card__row--bottom">
          <img src={iconRank[suit]} alt={suit}/>
          <p>{rank}</p>
        </section>
      </section>
    </section>
  )
};
