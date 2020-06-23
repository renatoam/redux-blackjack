import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Usar hooks com Redux elimina completamente a necessidade de usar funções como
// mapStateToProps e mapDispatchToProps
// import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../redux/actions';

import './style.scss';

// Usando mapDispatchToProps para criar funções personalizadas nas props 
// const mapDispatchToProps = dispatch => {
//   return {
//     toBet: valor => dispatch(actions.toBet(valor))
//   }
// }

// Usando o bindActionCreators não precisamos criar as funções (que usam o dispatch)
// manualmente para passar para as props, ele mesmo faz isso pra gente, reduzindo
// bastante o código. Passando um objeto de actions creators, ele gera funções 
// usando o nome da AC como key do obj. Ex.: nomeFunc: (...args) => dispatch(actionCr(...args))
const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch); 

// Se precisássemos acessar o estado e tratá-lo ao passar para as props
// const mapStateToProps = state => 
//   ({ bet: state.bet });

// Se quisermos especificar quais props (além do estado) queremos usar, podemos
// usar da forma abaixo, passando as props como segundo parâmetro
// const mapStateToProps = (state, {value, className} ) => 
//   ({ bet: state.bet, value, className });

function Coin({ value, className, toBet }) {
// function Coin(props) {

  // o useSelector é semelhante ao mapState, pois disponibiliza o estado da app,
  // porém em forma de variáveis, deixando muito mais sucinto
  // const bet = useSelector(state => state.bet);

  // da mesma forma, podemos usar useDispatch para simular mapDispatchToProps
  // Para simular o bindActionCreators, pode-se usar useActions*, mas não é 
  // recomendado pela documentação.
  // *: https://react-redux.js.org/api/hooks#recipe-useactions
  // const dispatch = useDispatch();

  function bet(val) {
    // dispatch(actions.toBet(val));
    toBet(val);
  }

  return (
    <>
      <button className={className} onClick={() => bet(value)}>{value}</button>
    </>
  )
}

// No caso desse componente, não precisamos acessar a Store, apenas enviar a
// informação do valor da aposta via action/dispatcher, então exportamos assim:
export default connect(null, mapDispatchToProps)(Coin);

// Usar o connect sem parametros, permite usarmos a função dispatch, que nos 
// permite enviar actions para a store*, mas não "ouve" a store
// *: dispatch({ type: 'TO_BET', value: 10 })
// export default connect()(Coin);

// O connect recebe o estado inteiro da store, então podemos acessá-lo inteiro,
// o que é altamente desencorajado por causa da perda de performance*, como tbm
// podemos acessar apenas o pedaço que nos interessa do estado usando a desconstrução
// de objetos
// *: se acessamos o estado inteiro, o componente é re-renderizado a cada modificação 
// em qualquer parte do estado
// export default connect(state => ({ bet: state.bet }))(Coin);

// É possível usar uma forma mais sucinta para acessar o estado via props
// dessa forma, além do estado, podemos manipular as demais props e especificar
// quais queremos usar
// export default connect(mapStateToProps)(Coin);

// Podemos melhorar nosso código criando funções que já executem o dispatcher 
// usando os actions creators. Para isso podemos criar uma função que retorne 
// esse tipo de função direto nas props, no caso, mapDispatchToProps. 
// Em outras palavras, as funções que criamos/retornamos de mapDispatchToProps, 
// ficam disponiveis diretamente nas props, deixando muito mais facil o acesso
// export default connect(mapStateToProps, mapDispatchToProps)(Coin);