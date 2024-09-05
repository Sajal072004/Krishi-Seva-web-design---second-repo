import React from 'react'
import Card from './Card'

const arr = [
  {
    "id": 1,
    "img" : "home_image.png",
    "desc": "Farm Management Solutions"
  },
  {
    "id": 2,
    "img" : "home_image.png",
    "desc": "Technology Integration"
  },
  {
    "id": 3,
    "img" : "home_image.png",
    "desc": "Market Access Support"
  },
  {
    "id": 4,
    "img" : "home_image.png",
    "desc": "Market Access Support"
  }
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
