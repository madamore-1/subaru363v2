import styles from './paragraph.module.scss';
import classnames from 'classnames/bind';

let cx =classnames.bind(styles);

const Paragraph = ({
    children, 
    color="white"
}) => {
    let paragraphClasses = cx({
        paragraph: true,
        [`color-${color}`]: color
    });

    return <p className={paragraphClasses}>
        {children}
    </p>
}
export default Paragraph;