import { UseCartContext } from "../management/context"
import CartItem from "./CartItem"

const CartBag = ()=>{

    const {cart,total,formatNumber} = UseCartContext()

    if(cart.length === 0){
        return(
            <div className='shopping-cart' style={{backgroundColor:"white"}}>
                <h1 className="empty">ไม่มีสินค้าในตะกร้า</h1>
            </div>
        )

    }else{
        return(
            <div className='shopping-cart'>
                <div className='title'>สินค้าในตะกร้า</div>
                {cart.map((data)=>{
                    return  <CartItem key={data.id} {...data}/>
                })}
                <div className='footer'>ยอดรวม {formatNumber(total)} บาท</div>
            </div>
        )
    }
}

export default CartBag