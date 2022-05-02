import {React, useState } from "react";



function Expanding(){
const imgs = [
{
name: 'God of War',
url: `url('https://images.pushsquare.com/1986bfc9f3f08/god-of-war-ragnarok-2022-release-date.large.jpg')`
},
{
  name: 'Horizon Forbidden West',
  url: `url('https://cdn.mos.cms.futurecdn.net/rADFi37BRuJxHsWJnSBBN6.jpg')`
  },
  {
    name: 'Stray',
    url: `url('https://i.ytimg.com/vi/G97FZ3UeJUo/maxresdefault.jpg')`
    },
    {
      name: 'Hogwarts Legacy',
      url: `url('https://cdn.fanbyte.com/wp-content/uploads/2020/10/hogwartslegacy.jpg?x60655')`
      }

]
  const [activeIndex, setActiveIndex]= useState(0)

function handleClick(index){

  setActiveIndex(index)
}



return(
  <>
    <div className="container">
    {imgs.map((img, index)=>(

        <div key={img.name} onClick={()=>handleClick(index)} className={`${activeIndex === index ? 'active' : ''} panel`} style={{backgroundImage: `${img.url}`}}>
          <h3> {img.name}</h3>
        </div>
  
        ))}
    </div>
  </>
)

};

export default Expanding