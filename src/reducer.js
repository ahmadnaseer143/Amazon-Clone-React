export const initialState = {
    cart: [],
    user: null
  };
  
  // Selector
  export const getCartTotal = (cart) => 
    cart?.reduce((amount, item) => item.price + amount, 0);

   
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "Add-to-cart":
        return {
          ...state,
          cart: [...state.cart, action.item],
        };
      
      case 'Empty_cart':
        return {
          ...state,
          cart: []
        }
  
      case "Remove-from-cart":
        const index = state.cart.findIndex(
          (cartItem) => cartItem.id === action.id
        );
        let newcart = [...state.cart];
  
        if (index >= 0) {
          newcart.splice(index, 1);
  
        } else {
          console.warn(
            `Cant remove product (id: ${action.id}) as its not in cart!`
          )
        }
  
        return {
          ...state,
          cart: newcart
        }
      
      case "Set_User":
        return {
          ...state,
          user: action.user
        }
  
      default:
        return state;
    }
  };
  
  export default reducer;