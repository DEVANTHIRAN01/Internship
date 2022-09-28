import "./App.css";

export default function App() {
  return (
    <div class="navbar">
      <a href="#home">DANCE STUDIO</a>
      <a href="#home">HOME</a>
      <a href="#news">HISTORY</a>
      <div class="dropdown">
        <button class="dropbtn">
          STYLES
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <div class="header">
            <h2>DIFFERENT TYPES OF DANCE</h2>
          </div>
          <div class="row">
            <div class="column">
              <h3>HIPHOP</h3>
              <a href="#">Locking</a>
              <a href="#">House</a>
              <a href="#">Popping</a>
            </div>
            <div class="column">
              <h3>TAMILFOLKS</h3>
              <a href="#">Parraiattam</a>
              <a href="#">Karakkattam</a>
              <a href="#">Oyillatam</a>
            </div>
            <div class="column">
              <h3>FITNESS</h3>
              <a href="#">Zumba</a>
              <a href="#">Aerobitics</a>
              <a href="#">Cardio Warmup</a>
            </div>
            <div class="column">
              <h3>CLASSICAL</h3>
              <a href="#">Bharathanatiyam</a>
              <a href="#">semi-classical</a>
              <a href="#">western-classical</a>
            </div>
          </div>
        </div>
      </div>
      <a href="#about">ABOUT</a>
    </div>
  );
}
