import React from 'react'
import ChiefCard from './ChiefCard'

const CheifSection = () => {

    const Chiefs = [
        {
            name:"Juan Carlos",
            img:"/images/top-chiefs/img_1.jpg",
            recipesCount:"10",
            cuisine:"Mexican"
        },
        {
            name:"asdsa wadads",
            img:"/images/top-chiefs/img_2.jpg",
            recipesCount:"12",
            cuisine:"Mexican"
        },
        {
            name:"Jon stewert",
            img:"/images/top-chiefs/img_3.jpg",
            recipesCount:"14",
            cuisine:"Mexican"
        },
        {
            name:"Juan adwda",
            img:"/images/top-chiefs/img_4.jpg",
            recipesCount:"7",
            cuisine:"Mexican"
        },
        {
            name:"asdsafa Carlos",
            img:"/images/top-chiefs/img_5.jpg",
            recipesCount:"11",
            cuisine:"Mexican"
        },
        {
            name:"Juawasdn asdsa",
            img:"/images/top-chiefs/img_6.jpg",
            recipesCount:"10",
            cuisine:"Mexican"
        }
    ]

  return (
    <div className='section chiefs'>
      <h1 className="title">Our Top Chiefs</h1>
      <div className="top-chiefs-container">
          {
              Chiefs.map((chief,index)=>{
                  return(
                    <ChiefCard key={index} chief={chief}/>
                  )
              })
          }
            
            
      </div>
    </div>
  )
}

export default CheifSection
