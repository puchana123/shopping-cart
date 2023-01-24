import { UseCartContext } from "../management/context"

const HeaderCart = ()=>{

    const {amount} = UseCartContext()
 return(
    <button className='cart-btn'>
        <span>ตะกร้าสินค้า</span>
        <span className='badge'>{amount}</span>
    </button>
 )
}

export default HeaderCart