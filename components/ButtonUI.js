import classnames from 'classnames/bind'
import Icon from './Icon'
import styles from './buttonui.module.scss'


let cx =classnames.bind(styles)
const ButtonUI = ({icon,clickHandler}) => {
    let buttonuiClasses = cx({
        btnui: true,
        [`icon-${icon}`] : icon
    });
    return <button className={buttonuiClasses}
    onClick={clickHandler}>
        
        <Icon icon={icon} />
    </button>
}
export default ButtonUI;