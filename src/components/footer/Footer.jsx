import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>lamadev</div>
            <div className={styles.text}>
                agency © All rights reserved.
            </div>
        </div>
    );
};

export default Footer;
