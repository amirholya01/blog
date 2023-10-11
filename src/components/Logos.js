import React from 'react';
import styles from '../components/Logos.module.css';

import JAVA from '../images/JAVA.png';
import ExpressJS from '../images/ExpressJs.png';
import SPRINGBOOT from '../images/springboot.png';
const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Our suggestions</h3>
            <div>
                <img src={JAVA} alt='java'/>
                <img src={ExpressJS} alt='expressJS'/>
                <img src={SPRINGBOOT} alt='springboot'/>
            </div>
        </div>
    );
};

export default Logos;