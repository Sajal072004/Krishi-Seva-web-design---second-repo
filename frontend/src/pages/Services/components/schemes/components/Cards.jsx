import React from 'react'
import Card from './Card'

const arr = [
  {
    "id": 1,
    "img" : "home_image.png",
    "title": "From Farm to Table , Exploring the journey of agro produce",
    "desc": "Exploring the journey of agro produce , delving into the intrigate process of bringing agricultural products from farms to consumers' tables. This enlightning exploration traces the various stages of production including cultivation, harvesting, processing, packaging, distribution, and retail."
  },
  {
    "id": 1,
    "img" : "home_image.png",
    "title": "Home",
    "desc": "Exploring the journey of agro produce , delving into the intrigate process of bringing agricultural products from farms to consumers' tables. This enlightning exploration traces the various stages of production including cultivation, harvesting, processing, packaging, distribution, and retail."
  },
  {
    "id": 1,
    "img" : "home_image.png",
    "title": "Home",
    "desc": "Exploring the journey of agro produce , delving into the intrigate process of bringing agricultural products from farms to consumers' tables. This enlightning exploration traces the various stages of production including cultivation, harvesting, processing, packaging, distribution, and retail."
  },
  {
    "id": 1,
    "img" : "home_image.png",
    "title": "Home",
    "desc": "Exploring the journey of agro produce , delving into the intrigate process of bringing agricultural products from farms to consumers' tables. This enlightning exploration traces the various stages of production including cultivation, harvesting, processing, packaging, distribution, and retail."
  },
]

const Cards = () => {
  return (
    <div className='flex flex-row justify-between mx-[3vw]'>
      {arr.map((item, index) => {
        return (
          <div key={item.id}>
            <Card />
          </div>
        )
      })}
    </div>
  )
}

export default Cards
