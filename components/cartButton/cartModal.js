import React from 'react'
import styles from './cart.module.css'



export default function cartModal() {
    

    return (
        <div className={styles.modal}>
            <h3 className={styles.header}>Shop cart</h3>
            <div className={styles.modalContainer}>

            </div>
            <div className={styles.footer}>
                <button>Check out</button>
            </div>
            
        </div>
    )
}

