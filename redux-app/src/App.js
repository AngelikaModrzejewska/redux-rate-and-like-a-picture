import { Provider } from 'react-redux';
import bemCssModules from 'bem-css-modules';
import Form from './Form';
import LikeButton from './LikeButton';
import List from './List';
import store from './store/store';
import { default as AppStyles } from './App.module.scss';

const style = bemCssModules(AppStyles);

const App = () => {
  return (
    <Provider store={store}>
      <div className={style()}>
        <h1 className={style('h1')}>Rate and like the picture of the day</h1>
        <div className={style('content')}>
          <div className={style('comm-section')}>
            <Form />
            <List />
          </div>
          <div>
            <img src="yachts.jpg" alt="" />
            <LikeButton />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
