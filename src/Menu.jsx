const menuItems = [
    { name: "Lebanese Falafel", price: 2, category: "Starters" },
    { name: "Indian Samosas", price: 3, category: "Starters" },
    { name: "Italian Soft Breadsticks (4)", price: 4, category: "Starters" },
    { name: "Brazilian(6)", price: 6, category: "Starters" },
    { name: "Candian Poutine", price: 7, category: "Starters" },
    { name: "Nepali Chili Momos", price: 10, category: "Starters" },

  
    { name: "Spicy Smashburger w/ Fries", price: 8, category: "Main Dishes" },
    { name: "Japanese Shio Ramen", price: 15, category: "Main Dishes" },
    { name: "Ethiopian Doro Wat", price: 15, category: "Main Dishes" },
    { name: "Pad Thai", price: 16, category: "Main Dishes" },
    { name: "Bengali Kacchi Biryani", price: 17, category: "Main Dishes" },
    { name: "Mexican Cheesy Birria Pie", price: 20, category: "Main Dishes" },

  
    { name: "Turkish Baklava", price: 3, category: "Desserts" },
    { name: "Spanish Caramel Flan", price: 4, category: "Desserts" },
    { name: "Bengali Rashmalai", price: 5, category: "Desserts" },
    { name: "Italian Tiramisu", price: 5, category: "Desserts" },
    { name: "Chocolate Fudge Cake", price: 6, category: "Desserts" },
    { name: "Argentian Alfrajores (3)", price: 6, category: "Desserts"},
    
  ];
  
  function Menu({addToCart}) {
    return (
      <div className="menu-page"> 
      <div className="container py-5">
        <h1 className="text-center mb-2">Our Menu</h1>
        <p className="text-center text-muted mb-5">
          Explore bold flavors from around the world.
        </p>
  
        <div className="row">
          {menuItems.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm menu-card">
                <div className="card-body text-center">
                  <span className="badge rounded-pill mb-3">{item.category}</span>
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text fw-bold">{item.price}</p>
                  <button className="menu-btn" onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    );
  }
  
  export default Menu;