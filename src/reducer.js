import Redux from 'redux';

var reducer = (state = null, action) => {
  switch(action.type){
    case 'VOTE':
      return Object.assign({}, state, {option: state.option++})
    default:
      return state
  }
}

export default reducer