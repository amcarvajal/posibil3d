import React,{ useState, useEffect } from 'react';
import styles from "./nav.module.css";

//imports
import Link from 'next/link'
import Googleicon from '../../public/svg/google'
import { loginWithGmail, onAuthStateChanged } from '../../firebase/client'
import Avatar from'../avatar'
// import CartIcon from '../../public/svg/cartIcon'
import CartButton from '../cartButton/cartButton'




export default function nav() { 
    const [user , setUser] = useState(null)
    let usuario = user


    useEffect(() => {
        onAuthStateChanged(setUser)
        }, [])


    const handleClick = () => {
        loginWithGmail().then(user => {
            const { avatar, name } = user
            setUser(user)
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
    <div className={styles.header}>
      <nav>
        <div className={styles.menuToggle}>
          <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
          <ul className={styles.menu}>
            <Link href="/">
                <a href="#">
                <li className={styles.paddingEffect}>Home</li>
                </a>
            </Link>
            <Link href="./products">
                <a href="#">
                <li className={styles.paddingEffect}>Tienda</li>
                </a>
            </Link>
            <Link href="./account" usuario={usuario}>
                <a href="#">
                <li className={styles.paddingEffect}>Cuenta</li>
                </a>
            </Link>
            <a href="#">
              <li className={styles.paddingEffect}>Contacto</li>
            </a>
            <li>
                <div className={styles.loginWithGmail}>
                   { user === null && <button onClick={handleClick}>
                        <Googleicon />Login with Google
                    </button>  
                    }
                    {  user && user.avatar && 
                    <div>
                        <Avatar alt={user.name} src={user.avatar} text={user.name} email={user.email}/>
                    </div>}
                </div>
            </li>
          </ul>
        </div>
      </nav>
      
        <div className={styles.navRight}>
            {/* LUPA */}
            <div className={styles.headerButton}>
                
            </div>
            {/* BASKET */}
            <div className={styles.headerButton}>
                <CartButton/>
            </div>
        </div>
    </div>
    )
}
