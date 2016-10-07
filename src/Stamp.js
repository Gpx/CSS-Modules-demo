import React from 'react'
import styles from './Stamp.css'

const Stamp = (props) => <span className={styles.label}>{props.children}</span>

export default Stamp
