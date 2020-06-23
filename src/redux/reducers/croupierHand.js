export default function croupierHand(state = [], action) {
  switch(action.type){
    case 'DEAL':
      return Object.assign([], [...state], action.cards)
    
    // case 'DOUBLE':
    //   return [...state, ...action.newCards]
    
    // case 'HIT':
    //   return [...state, action.newCard]
    
    default: return state;
  }
}