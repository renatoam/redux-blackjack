import React, { useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

// import './style.scss';
import store from '../../redux/store';

import { Coins, Control, Croupier, Deck, Player, ResetBet } from '../Imports';

export default function Match() {

  // Está executando várias vezes. Verificar
  // Usei shallowEqual, eliminou metade

  const bet = useSelector(({ bet } = {}) => bet);
  const cardStates = useSelector(({ playerHand, croupierHand, deck } = {}) => {
    return { playerHand, croupierHand, deck }
  }, shallowEqual);

  
  // const [bet, setBet] = useState(store.getState().bet);
  
  // const getBet = () => setBet(store.getState().bet);
  
  // store.subscribe(getBet);
  
  console.log("PlayerHand", bet);
  // const [money, setMoney] = useState(500);
  // const [newBet, setNewBet] = useState(0);
  // const [playerCard, setPlayerCard] = useState({});
  // const [croupierCard, setCroupierCard] = useState({});
  // const [playerPoints, setPlayerPoints] = useState(0);
  // const [croupierPoints, setCroupierPoints] = useState(0);
  // const [dropped, setDropped] = useState([]);

//  function requestCard(action) {
//     const cards = {
//       hit: (() => console.log("manda uma carta"))(),
//       double: (() => console.log("manda duas cartas"))()
//     }

//     setHand([...hand, cards[action]]);
//  }

  return (
    <section className="match">
      {/* <header className="match__header">
        <div className="match__money">{money}</div>
        <div className="match__menu"><ul><li></li>
        <li></li></ul></div>
      </header> */}
      <article>
        {/* <Deck cards={cardStates.deck} />
        <div className="board">
          <Croupier hand={cardStates.croupierHand} />
          <Player hand={cardStates.playerHand} />
        </div> */}
      </article>
      {/* <p>Aposta: {bet}</p> */}
      <ResetBet />
      <footer className="match__control">
        <Control />
        <Coins />
      </footer>
    </section>
  )
}