import React from 'react'

function Gallery({person,load}) {
 const  { title, thumbnailUrl, url, id }=person

if(load){
  return <h1>Loading ...</h1>
}else
  return (
    <div className='container'>

      <div className='row'>
        <div className='col-lg-12 '>
          <div className="card py-1" key={id} >
            <img className="" src={thumbnailUrl} style={{ height: '300px' }} alt=''/>
            <h5 className="card-title"> {title}</h5>
            <div className="card-body">
              <p className="card-text">{url}  {id}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Gallery