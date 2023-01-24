// ให้บริการข้อมูลแก้ component
import {createContext, useContext, useEffect, useReducer} from 'react'
import CartData from '../data/CartData'
import reducer from './reducer'

const initState = {
    cart: CartData,
    total: 0,
    amount: 0
}

const CartContext = createContext()

const CartProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initState)

    useEffect(()=>{
        dispatch({type:'CALCULATE'})
    },[state.cart])

    const removeItem = (id)=>{
        console.log(`remove item no.${id}`);
        dispatch({type:'REMOVE_ITEM',payload:id})
    }

    const toggleQuantity = (id,type)=>{
        dispatch({type:'TOGGLE_QUANTITY',payload:{id,type}})        
    }

    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return(
        <CartContext.Provider value={
            {...state,removeItem,toggleQuantity,formatNumber}} >
            {children}
        </CartContext.Provider>
    )
}

const UseCartContext = ()=>{
    return useContext(CartContext)
}

export {CartContext,CartProvider,UseCartContext}