import styles from "./Footer.module.css"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <a href="newline.co">Newline.co</a>
      <br/>
      {currentYear}
    </footer>
  )
}