import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Card( { product } ) {
    const { title, slug, price, colors, thumbnail } = product.fields
    console.log()
    return (
        <div className={styles.container}>
            <div className={styles.thumbnail}>
                  <Image src={'https:'+ thumbnail.fields.file.url} width={250} height={300}/>    
            </div>
            <div className={styles.content}>
                <div className={styles.info}>
                    <h4 className={styles.title}>{product.fields.title}</h4>
                    <span className={styles.price}>{price} €</span>
                </div>
                <div className={styles.actions}>
                    {/* <Link href={'/products/' + slug}/><a>Ver</a><Link/>  */}
                </div>
            </div>
        </div>
    )
}
