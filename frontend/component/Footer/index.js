import styles from '../../styles/Home.module.css';

const Footer = ()=>{
    return (
        <div className={styles.footer}>
            <p>&copy; </p>
            <span>My Rent</span>
            <p> {new Date().getFullYear()}</p>
        </div>
    )
}

export default Footer;