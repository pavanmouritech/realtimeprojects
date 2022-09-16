import { useDispatch } from "react-redux";
import rootReducer from "../../redux/reducer";


export const ADD_TO_CART = 'ADD_TO_CART'

const initialState = []
const dispatch = useDispatch()
const productDetails = item => dispatch({ type: ADD_TO_CART, payload: item })
const ItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload] 
  }
  return state
}

export default rootReducer;