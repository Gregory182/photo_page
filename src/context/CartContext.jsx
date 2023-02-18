import {createContext} from 'react'

const CartContext = createContext()

export const CartContextProvider = ({children}) => {
  const [cartItems, setCartItems] = 0

  return (
    <CartContext.Provider
      value={{
        cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
