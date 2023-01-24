// กำหนด action ใน app
const reducer = (state,action)=>{
    if(action.type === 'REMOVE_ITEM'){
        return {
            ...state,
            cart:state.cart.filter(item=>item.id !== action.payload)}
    }

    if(action.type === 'TOGGLE_QUANTITY'){

        let updateCart = state.cart.map((item)=>{
            if(item.id === action.payload.id){
                if(action.payload.type === 'increment'){
                    return{
                        ...item,
                        quantity:item.quantity<5?item.quantity+1:item.quantity
                    }
                }
                if(action.payload.type === 'decrement'){
                    return{
                        ...item,
                        quantity:item.quantity-1
                    }
                }
            }
            return item
        }).filter((item)=>item.quantity !== 0) // return item with more than zero quantity
        
        return{
            ...state,cart:updateCart
        }
    }

    if(action.type === 'CALCULATE'){
        const {total,amount} = state.cart.reduce((cartTotal,item)=>{
            const {price,quantity} = item
            const itemTotal = price*quantity
            cartTotal.total += itemTotal
            cartTotal.amount += quantity
            return cartTotal
        },{
            total:0,
            amount:0
        })

        return{
            ...state,total,amount
        }
    }
}

export default reducer