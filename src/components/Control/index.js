import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 

import './style.scss';
import * as actions from '../../redux/actions';

import Button from '../Button';

const mapStateToProps = state => ({ deck: state.deck });
const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch);

function Control(props) {

  const deck = props.deck;
  
  const setCardsToHand = useCallback(() => {
    
    const playerCards = getCardsFromDeck([deck.length - 1, deck.length - 2]);
    const croupierCards = getCardsFromDeck([deck.length - 3, deck.length - 4]);
    const droppedCards = [...playerCards, ...croupierCards];

    if (deck.length <= 0) return;
    
    props.deckDeal(deck.length - 4);
    props.playerDeal(playerCards);
    props.croupierDeal(croupierCards);
    props.droppedDeal(droppedCards);

  })

  function getCardsFromDeck([last, penult]) {
    return [deck[last], deck[penult]];
  }

  return (
    <>
      <Button className="deal" click={() => setCardsToHand()} text="deal" />
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Control);