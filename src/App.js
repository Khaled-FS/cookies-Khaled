import "./App.css";
import "./assest/css/day1.css";
import cookies from "./assest/media/cookieShop.jpg";
import menu from "./assest/data";
function App() {
  const prudect = menu.map((item) => (
    <div className="menu-section">
      <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.price}</p>
    </div>
  ));

  return (
    <div className="container">
      <h1>Khaled's cookies</h1>
      <p>where the best cookies in the world</p>
      <img src={cookies} alt="Khaled's cookies" className="img-style" />

      <div className="menu-container">{prudect}</div>
    </div>
  );
}

export default App;
