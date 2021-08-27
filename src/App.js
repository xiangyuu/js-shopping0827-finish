import logo from './logo.svg';
import './App.scss';
import shop01 from './static/pictures/001.webp'
import shop02 from './static/pictures/002.webp'
import shop03 from './static/pictures/003.webp'
import shop04 from './static/pictures/004.webp'
import Banner from "./component/Banner";
import Card from "./component/Card";
import ShoppingCar from "./component/ShoppingCar";
import checked from './static/pictures/checked.png'
import {useState} from "react";

function App() {
  const shoppingData = [];

  const clothData = [
    {
      id: 1,
      title: 'Joined® Authentic 寬版上衣【OS綠】',
      image: shop01,
      cost: 1180
    },
    {
      id: 2,
      title: 'Joined® Authentic 肌肉挖背【黑】',
      image: shop02,
      cost: 500
    },
    {
      id: 3,
      title: 'Joined® 女款挖背訓練背心【黑】',
      image: shop03,
      cost: 8888
    },
  ]

  const [products, setProducts] = useState(shoppingData);
  const [isShow, setIsShow] = useState(false)
  const [cloth, setCloth] = useState(clothData)

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  const addProduct = (product) => {
    setProducts([...products, {
      id: product.length + 1,
      title: product.title,
      image: product.image,
      cost: product.cost
    }])


  }

  return (
    <div className="App">
      <div className='home-container'>
        <div className='title'>
          <span>漁夫の運動服飾專賣店</span>
          <img onClick={() => {
            setIsShow(!isShow)
          }} src={checked} alt=''/>
          <Banner/>
        </div>

        <div className='main'>
          {clothData.map((value, index) => (
            <Card key={index} cloth={value} addProduct={() => addProduct(value)}/>
          ))}
          <ShoppingCar cloth={cloth} deleteProduct={() => deleteProduct()} isShow={isShow} products={products}/>
        </div>
      </div>

    </div>
  );
}

export default App;
