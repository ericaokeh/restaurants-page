import './App.css'
import awning from './assets/awning.png'
import carbonara from './assets/carbonara.jpeg'
import crazydog from './assets/crazydog.jpg'
import divineflavored from './assets/divineflavored.jpeg'
import Fishandchips from './assets/Fishandchips.jpg'
import GypsyKitchen from './assets/GypsyKitchen.webp'
import HappyBeginning from './assets/HappyBeginning.jpg'
import Inca from './assets/Inca.jpg'
import Kissedinfire from './assets/Kissedinfire.jpeg'
import MrQuiles from './assets/MrQuiles.jpg'
import ohyum from './assets/ohyum.webp'
import papiosplace from './assets/papiosplace.jpg'
import veganfactory from './assets/veganfactory.jpg'


const App = () => {

  return (
    <div className="container">
    <h1 className = "title">City Shops</h1>
    <Header />
    <div className="cards-grid">
      <Card image={carbonara} restaurantName="Carbonara" cuisine="Italian"/>
      <Card image={crazydog} restaurantName="Crazy Dog" cuisine="American"/>
      <Card image={divineflavored} restaurantName="Divine Flavored" cuisine="Mediterranean"/>
      <Card image={Fishandchips} restaurantName="Fish and Chips" cuisine="British"/>
      <Card image={GypsyKitchen} restaurantName="Gypsy Kitchen" cuisine="Eastern European"/>
      <Card image={HappyBeginning} restaurantName="Happy Beginning" cuisine="Vegetarian"/>
      <Card image={Inca} restaurantName="Inca" cuisine="Peruvian"/>
      <Card image={Kissedinfire} restaurantName="Kissed in Fire" cuisine="Mexican"/>
      <Card image={MrQuiles} restaurantName="Mr Quiles" cuisine="Latin American"/>
      <Card image={ohyum} restaurantName="Oh Yum" cuisine="Asian Fusion"/>
      <Card image={papiosplace} restaurantName="Papio's Place" cuisine="Italian-American"/>
      <Card image={veganfactory} restaurantName="Vegan Factory" cuisine="Vegan"/>
    </div>


    
    </div>
  );
}

const Header = () => {
  return (
    <div className = "header"> 
    <img src={awning} alt = "Store Awning"></img>
    </div>

  );

}

const Card = ({ image, restaurantName, cuisine }) => {
  return(
    <div className = "card"> 
      <img className = "card-image" src = {image} alt = {restaurantName}></img>
      <div className="card-info">
        <h3>{restaurantName}</h3>
        <h5>{cuisine}</h5>
        <button className="card-button">View Menu</button>
      </div>
    </div>
  )
}

export default App;
