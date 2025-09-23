


import './App.css';
import CARD from './Lab-2';


import img1 from './assets/images/1.jpg';
import img2 from './assets/images/2.jpg';
import img3 from './assets/images/3.jpg';
import img4 from './assets/images/4.jpg';
import img5 from './assets/images/5.jpg';
import img6 from './assets/images/6.jpg';

function App() {
  return (

    <div className="app">

      <h1 className="title">Resorts Lite</h1>

      <hr className="divider" />

      <div className="card-container">

        <CARD country="Indonesia" resort="Gili Air Hotel" image={img1} rating={4.8} price={589} />
        <CARD country="Seychelles" resort="Hilton Resort" image={img2} rating={4.2} price={629} />
        <CARD country="US Virgin Islands" resort="Goa Resort" image={img3} rating={3.5} price={485} />
        <CARD country="Bahamas" resort="Kuredu Resort" image={img4} rating={4.1} price={729} />
        <CARD country="Mauritius" resort="Trou D'eau Douce" image={img5} rating={4.9} price={877} />
        <CARD country="Bermuda" resort="Staniel Cay Hotel" image={img6} rating={3.2} price={365} />
      
      
      </div>
    </div>
  );
}
export default App;