import plus from '../image/plus.svg'
import minus from '../image/minus.svg'
import deleteIcon from '../image/delete-icn.svg'
import { UseCartContext } from '../management/context'

const CartItem = ({id,name,image_url,price,quantity})=>{
    const {removeItem,toggleQuantity,formatNumber} = UseCartContext()

    return(
        <div className='cart-item'>
            <div className='product-img'>
                <img src={image_url} alt={name} />
            </div>
            <div className='description'>
                <span>{name}</span>
                <span>ราคา {formatNumber(price)} บาท</span>
            </div>
            <div className='quantity'>
                <button className='plus-btn' onClick={()=>toggleQuantity(id,'increment')}>
                    <img src={plus} alt='plus'/>
                </button>
                <input type='text' value={quantity} disabled/>
                <button className='minus-btn' onClick={()=>toggleQuantity(id,'decrement')}>
                    <img src={minus} alt='minus'/>
                </button>
            </div>
            <div className='total-price'>
                {formatNumber(quantity*price)}
            </div>
            <div className='remove' onClick={()=>removeItem(id)}>
                <img src={deleteIcon} alt='delete-icn'/>
            </div>
            
        </div>
    )
}

export default CartItem