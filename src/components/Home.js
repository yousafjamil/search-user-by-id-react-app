import React, { useEffect, useState } from 'react'
import Gallery from './Gallery';

function Home() {
  const [id, setId] = useState();
  const [load, setLoad] = useState(false);
  const [store, setStore] = useState([]);

  const handleClick = async () => {
    setLoad(true)
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
    const data = await res.json();
    setLoad(false)
    setStore([data])
    setId('')
  }
  useEffect(() => {
    handleClick();

  }, [])

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-lg-10'>
          <input className='form-control' placeholder='Search By  Id   e.g    3' value={id} onChange={(e) => setId(e.target.value)} />
          <button className='btn btn-info m-3'  type='button' onClick={handleClick}>{load ? ' searched ' : "Search by ID"}</button>
        </div>

      </div>
      <div className='row'>
        <div className='col-lg-10'>
          {store.map((person, index) => <Gallery  person={person} load={load}  />)}
        </div>
      </div>

    </div>
  )
}

export default Home