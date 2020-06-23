// Cada reducer é um pedaço (propriedade) do estado da nossa aplicação

// O Reducer é uma função pura, apenas retorna um novo estado, usando o estado
// atual e a action passada

const INITIAL_STATE = 10;

export default function bet(state = INITIAL_STATE, action) {
  switch (action.type) {

    case 'TO_BET': 
      return state + action.value;

    case 'RESET_BET':
      return INITIAL_STATE;

    default: return state;
  }
}