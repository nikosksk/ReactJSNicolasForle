import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from 'react-router';

const film = { id: 1, price: 400 }

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { detalledId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, "products", "44P61i1V2Dfwe88Ht8iX")
        getDoc(queryDoc)
            .then(res => setData({ id: res.id, ...res.data() }))


    }, [])

    return ( <
        ItemDetail data = { data }
        />
    )

}
export default ItemDetailContainer