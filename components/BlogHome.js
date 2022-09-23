import Entrada from './Entrada.js'
import styles from '../styles/Blog.module.css'

const BlogHome = ({entradas}) => {
  return (
    <>
        <h2 className='heading'>Blog</h2>
        <div className={styles.blog}>
        {entradas.map(entrada => (
            <Entrada 
            key={entrada._id}
            entrada={entrada}
            />
        ))}
        </div>
    </>
  )
}

export default BlogHome