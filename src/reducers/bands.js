export default (state = {}, action) => {
  switch(action.type) {
    case 'GET_BANDS':
    return {
      result: action.payload
    }
    case 'GET_BAND_NAME':
      return{
        result: action.payload
      }
    default: return state
  }
}