import style from './App.module.scss';
import { Navigation, Header } from '@components';

function App() {
  return (
    <div className={style.App}>
      <section className={style.navigation}>
        <Navigation />
      </section>

      <section className={style.header}>
        <Header />
      </section>

      <section className={style.body}>
        { Array(1000).fill('ABC')}
      </section>

      <section className="footer"></section>
    </div>
  );
}

export default App;
