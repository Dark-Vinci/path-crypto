import style from './App.module.scss';

import { Navigation, Header, Body2, Body1, Body3 } from '@components';

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
        <Body1/>
      </section>

      <section className={style.body2}>
        <Body2 />
      </section>

      <section className={ style.body3 }>
        <Body3 />
      </section>
    </div>
  );
}

export default App;
