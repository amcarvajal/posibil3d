import React from 'react'
import Nav from '../../components/nav/nav'
//my
import { createClient } from 'contentful'
import Card from '../../components/card/card'
import styles from './products.module.css'

export async function getStaticProps() {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })

    const res = await client.getEntries({ content_type: 'products'})

    return {
        props: {
            products: res.items,
            revalidate: 1,
        }
    }
}


export default function products({ products }) {
    console.log("products", products)

    return (
        <>
        <div className={styles.productsContainer}>
             {products.map(product =>(
                <Card key={ product.sys.id } product={ product } />
                ))} 
        </div> 
        </>
    )


     
    
}
