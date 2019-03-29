// Core
import React from 'react';

// Instruments
import Styles from './styles.module.css';

export const Spinner = (props) => {
    return props.isSpinning ? <div className = { Styles.spinner } /> : null;
};
