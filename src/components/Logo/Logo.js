import styles from './Logo.module.scss';
// import origamiBird from '/origami-bird.png';

export default function Logo() {
return (
  <div className={styles.LogoContainer}>
    <div className={styles.Logo}>
      <a href="https://www.flaticon.com/free-icons/art" title="Art icons created by Freepik - Flaticon">
        <img className={styles.LogoImage} src="https://i.imgur.com/dPwKUrh.png" />
      </a>
    </div>
    <div className={styles.Name}>
      <div>Origami Grill</div>
    </div>
  </div>
);
}