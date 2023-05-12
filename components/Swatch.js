import styles from './swatch.module.scss'
const Swatch = ({ color }) => {
    const { name, hex } = color;
    return <li 
        className={styles.swatch}
        style={{backgroundColor:hex}}>
        {name}
        
        </li>
}
export default Swatch;