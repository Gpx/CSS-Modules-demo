import React from 'react'
import styles from './Label.css'

const Label = (props) => <label className={styles.label}>{props.children}</label>

export default Label
