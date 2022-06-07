import React,{useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'


const film = { id: 1, price: 400}

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(()=> {
        const getData = new Promise(resolve => {
            setTimeout(()=> {
                resolve(film);
            }, 3000)
        }, )
        getData.then(res => setData(res))
    }, [])

  return (
      <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer