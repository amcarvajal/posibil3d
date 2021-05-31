import React,{ useState} from 'react'
import CartIcon from '../../public/svg/cartIcon'
import CartModal from './cartModal'

export default function cartButton() {

const [showModal, setShowModal] = useState(false);

const showCart = () =>{ 
      setShowModal(!showModal)
    };

    return (
        <>
        <div type="button" onClick={showCart}>
            <CartIcon/> </div>
      {showModal ? <CartModal /> : null}
    </>
    )
}