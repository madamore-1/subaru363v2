
import Heading from './Heading';
import Paragraph from './Paragraph';
import styles from './footer.module.scss';
import NavSocialMedia from './NavSocialMedia'

const Footer = () => {
    return <footer className={styles.footer}>
        <Heading level={2} >Connect with us </Heading>
        <NavSocialMedia />
        <Paragraph> Copyright 2023 Subaru.</Paragraph>
        </footer>
}
export default Footer