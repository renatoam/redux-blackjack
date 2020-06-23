import initialDeck from './initialDeck';

export default function deck(state = initialDeck, action) {
  switch(action.type){
    case 'DEAL':
      return Object.assign([], 
        [...state].filter((card, index) => index < action.index)
      )
    
    // case 'DOUBLE':
    //   return [...state, ...action.newCards]
    
    // case 'HIT':
    //   return [...state, action.newCard]
    
    default: return state;
  }
}