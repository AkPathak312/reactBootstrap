import React from 'react'
import SingleCard from './SingleCard';
export default function CardsComponent({apiData}) {


//Rendering COmps
    return (
        <div className='d-flex flex-wrap'>
            {
                apiData.map(p=>{
                    return(
                        <div className='p-2 bd-highlight'>
                            <SingleCard data={p}/>
                        </div>
                    )
                })
            }
        </div>
  )
}
