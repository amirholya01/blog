import React, { Component } from 'react';
import styles from './Cards.module.css';
import Card from './Card';
import java from '../images/java.jpg';
import js from '../images/js.webp';
import de from '../images/de.jpg';
import reacrJS from '../images/react.png';

class Cards extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Card image={java} name="Java Tutorial" cost="Free"/>
                <Card image={js} name="JavaScript Tutorial" cost="Free"/>
                <Card image={de} name="Deutsch Lernen" cost="Free"/>
                <Card image={reacrJS} name="React JS Tutorial" cost="Free"/>
            </div>
        );
    }
}

export default Cards;