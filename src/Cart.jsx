function Cart({ cart, clearCart, removeFromCart }) {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
  
    return (
      <div className="cart-page">
        <div className="container py-5 text-center">
          <h1>Shopping Cart</h1>
  
          {cart.length === 0 ? (<p>Your cart is empty. Let's find something you'll love!</p>):(
            <>
              {cart.map((item, index) => (
                <div className="cart-item" key={index}>
                  {item.name} - ${item.price}
                  <button onClick={() => removeFromCart(index)}>
                    Remove
                  </button>
                </div>
              ))}
  
              <h4>Total: {total}</h4>
  
              <button onClick={clearCart}>Clear Cart</button>
            </>
          )}
        </div>
      </div>
    );
  }

export default Cart;