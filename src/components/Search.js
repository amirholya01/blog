import React, { Component } from 'react';
import styles from '../components/Search.module.css';
class Search extends Component {
    render() {
        return (
            <div className={styles.container}>
                <p>What do you want to search for?</p>
                <input placeholder='Search'/>
            </div>
        );
    }
}

export default Search;