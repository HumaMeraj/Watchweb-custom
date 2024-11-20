import React from 'react'

const Watches = () => {

  const watchData = [
  { id:1 , name:"DiamondDial", price: 25000, description:"Luxury Watch" , image:'/diamonddial.jpeg'},
  { id:2 , name:"Lige", price: 10000, description:"Luxury Watch" , image:'/lige.jpeg'},
  { id:3 , name:"Benyar", price: 20000, description:"Luxury Watch" , image:'/benyar.jpeg'},
  { id:4 , name:"Quartz", price: 15000, description:"Luxury Watch" , image:'/quartz.jpeg'},
  { id:5 , name:"Rolex", price: 18000, description:"Luxury Watch" , image:'/rolex2.jpeg'},
  { id:6 , name:"RolexDaytona", price: 17000, description:"Luxury Watch" , image:'/Rolex Daytona.jpeg'},
  ]
  return (
    <div>
   <div className="watches">
    {watchData.map ((watch) => (
   <div key={watch.id} className="watch-card">
    <img src={watch.image}  alt={watch.name}/>
    <h3>{watch.name}</h3>
    <p>{watch.description}</p>
    <div className="price">${watch.price}</div>
    <button>Add to Cart</button>
   </div>
    
   ) )}
   </div>
    </div>
  )
}

export default Watches 