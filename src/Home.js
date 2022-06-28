import React from 'react'   
import "./Home.css"
import home_background from './home_bg.png'
import Product from './Product'

//Import de imagenes
import dress_1 from './dress_1.jpeg'
import dress_2 from './dress_2.jpeg'
import tshirt_1 from './t-shirt_1.jpeg'
import tshirt_2 from './t-shirt_2.jpg'
import tshirt_3 from './t-shirt_3.jpg'
import wedding_dress from './wedding_dress_1.jpg'



function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img 
            className='home__image'
            src={home_background} alt="home_background"
            />
        </div>
       
      {/* Aquí hacemos las filas de productos */}
        <div className='home__row'>
            <Product title='Vestido guindo' price={800} image={dress_1} alt=""/>
            <Product title='Vestido morado' price={1100} image={dress_2} alt=""/>
        </div>

        {/* Segunda fila */}
        <div className='home__row'>
            <Product title='Camisa blanca' price={280} image={tshirt_1} alt=""/>
            <Product title='Camisa azul' price={270} image={tshirt_2} alt=""/>
            <Product title='Camisa negra' price={320} image={tshirt_3} alt=""/>
        </div>
        {/* Tercera fila */}
        <div className='home__row'>
        <Product title='Vestido de bodas' price={12000} image={wedding_dress} alt=""/>
        </div>
    </div>
  )
}

export default Home
