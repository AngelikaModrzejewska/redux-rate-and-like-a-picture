import bemCssModules from 'bem-css-modules';
import { useDispatch, useSelector } from 'react-redux';
import { default as LikesStyles } from './Likes.module.scss';

const style = bemCssModules(LikesStyles);

const LikeButton = () => {

    const likesStore = useSelector(store => store.likes); 

    const dispatch = useDispatch();
 
    const handleClick = () => {
        dispatch({type: 'COUNT'});
    }
 
  return (
      <div className={style()}>
        <p className={style('p')}><i class="fa fa-heart"></i> {likesStore.count}</p>
        <button className={style('button')} onClick={handleClick}><i class="fa fa-heart"></i> Like</button>
      </div>
  );
};

export default LikeButton;