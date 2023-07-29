import {getFirestore,collection,addDoc} from 'firebase/firestore'


export const firebaseService = {
    createOrder:async (order)=>{
        const db = getFirestore();
        const orderCollection = collection(db,'orders');
        const orderCreated = await addDoc(orderCollection,order)
        return orderCreated
    }
}