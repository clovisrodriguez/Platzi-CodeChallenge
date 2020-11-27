import _ from 'lodash';
import { ACTION_TYPES } from '../actions';
import { sortDirection } from '../../utils';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.updateFilter:
      const { column, direction, categories } = payload;
      let { products } = state;
      products = categories.length
        ? _.filter(
            products,
            ({ category }) => categories.indexOf(category) !== -1
          )
        : products;
      const filterProducts = _.sortBy(products, [column]);
      if (sortDirection[0] === direction) filterProducts.reverse();
      return {
        ...state,
        filterProducts
      };
    default:
      return state;
  }
};

export default reducer;
