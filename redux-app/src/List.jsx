import bemCssModules from 'bem-css-modules';
import { useSelector } from 'react-redux';
import Element from './Element';
import { default as ListStyles } from './List.module.scss';

const style = bemCssModules(ListStyles);

const List = () => {
  const rates = useSelector(store => store.rates); 
  const ratesElements = rates.map(rate => (
    <Element key={rate.id} {...rate} />
  ));

  return (
    <ul className={style()}>
      <p className={style('p')}>Rates:</p>
      {ratesElements}
    </ul>
  );
};

export default List;