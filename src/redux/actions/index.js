
import { BET, RESET_BET, HIT, DOUBLE, DEAL } from './types';

export const toBet = value => ({ type: BET, value });

export const resetBet = () => ({ type: RESET_BET });

export const deckHit = card => ({ type: HIT, card });

export const deckDouble = cards => ({ type: DOUBLE, cards });

export const deckDeal = index => ({ type: DEAL, index });

export const playerHit = card => ({ type: HIT, card });

export const playerDouble = cards => ({ type: DOUBLE, cards });

export const playerDeal = cards => ({ type: DEAL, cards });

export const croupierHit = card => ({ type: HIT, card });

export const croupierDouble = cards => ({ type: DOUBLE, cards });

export const croupierDeal = cards => ({ type: DEAL, cards });

export const droppedHit = card => ({ type: HIT, card });

export const droppedDouble = cards => ({ type: DOUBLE, cards });

export const droppedDeal = cards => ({ type: DEAL, cards });