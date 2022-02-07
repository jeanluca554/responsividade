import { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.scss';

export function Header() {

    const [show, setShow] = useState(false);

    function toggleMenu() {
        // document.body.style.overflow = show ? "hidden" : "initial";
        document.body.style.overflow = show ? "initial" : "hidden";
        setShow(!show);

    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <img
                    src="/logo-rocketseat.svg"
                    alt="Rocketseat"
                />
                <div
                    className={
                        show ?
                            `${styles.menuSection} ${styles.on}`
                            :
                            `${styles.menuSection}`
                    }
                >
                    <div className={styles.menuToggle} onClick={toggleMenu}>
                        <div className={styles.one}></div>
                        <div className={styles.two}></div>
                        <div className={styles.three}></div>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <a href="#">Starter</a>
                            </li>
                            <li>
                                <a href="#">Bootcamp</a>
                            </li>
                            <li>
                                <a href="#">Comunidade</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}


