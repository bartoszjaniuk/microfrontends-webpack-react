import { Styled } from '../styles/app.styles';

import image from './react-logo.svg';
import styles from './App.module.scss';
import '../styles/styles.scss';
import '../styles/style.css';

export const App = () => {
  return (
    <>
      <div className="container">
        <Styled.AppH1>Styled H1 Tag AUTO DEPLOY AWS</Styled.AppH1>
        <img src={image} alt="React Logo" width={50} height={50} />
        <p className={styles.paragraph}>CSS Module Paragraph</p>
      </div>
      <div className="sass">
        <div className="sass__container">
          <h1>SCSS H1 TAG</h1>
          <img src={image} alt="React Logo" width={50} height={50} />
          <p className={styles.paragraph}>SCSS Module Paragraph</p>
        </div>
      </div>
    </>
  );
};
