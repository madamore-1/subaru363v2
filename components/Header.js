import { useState } from 'react';
import ButtonUI from './ButtonUI';
import Logo from "./Logo";
import NavOverlay from './NavOverlay';
import NavDesktop from './NavDesktop';

import styles from './header.module.scss';
import Link from 'next/link';

const Header = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);
    return <header className={styles.header}>
       <Link href="/"> 
            <Logo />
       </Link>
        <ButtonUI icon="menu" 
        clickHandler={() => {
            setMenuVisible(true);
        }}
       
        />
        <NavDesktop />

        {isMenuVisible && 
            <NavOverlay 
                closeHandler={() => {
                    setMenuVisible(false);
                }} 
            />
        }
    </header>   
}
export default Header
