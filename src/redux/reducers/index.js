import { combineReducers } from 'redux';

// Cada reducer é um pedaço (propriedade) do estado da nossa aplicação
import bet from './bet';
import playerHand from './playerHand';
import croupierHand from './croupierHand';
import deck from './deck';

export default combineReducers({ bet, deck, playerHand, croupierHand });