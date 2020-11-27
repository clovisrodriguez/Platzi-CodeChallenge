import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../assets/styles/components/Filters.styl';
import { updateFilter } from '../state/actions';
import { sortDirection } from '../utils';

const Filters = () => {
  const { categories } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [showFilter, setShowFilter] = useState(true);
  const filterColumns = ['price', 'title'];
  const filterProps = {
    column: 'column',
    direction: 'direction',
    categories: 'categories'
  };
  const [filterOptions, setfilterOptions] = useState({
    column: filterColumns[0],
    direction: sortDirection[0],
    categories: []
  });

  const onFilterUpdate = (e) => {
    const { name, value, checked } = e.target;
    let newOptions = {};
    if (name !== filterProps.categories) {
      newOptions = { ...filterOptions, [name]: value };
      setfilterOptions(newOptions);
    } else {
      const categories = [...filterOptions.categories];
      if (checked) categories.push(value);
      if (!checked) categories.splice(categories.indexOf(value), 1);
      newOptions = { ...filterOptions, categories };
      setfilterOptions(newOptions);
    }
    dispatch(updateFilter(newOptions));
  };
  return (
    <>
      <div className={`filters-container ${showFilter ? 'visible' : ''}`}>
        <h4>Sort by</h4>
        <select
          name={filterProps.column}
          onChange={(e) => onFilterUpdate(e)}
          value={filterOptions[filterProps.column]}
        >
          {filterColumns.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          name={filterProps.direction}
          onChange={(e) => onFilterUpdate(e)}
          value={filterOptions[filterProps.direction]}
        >
          {sortDirection.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
        <h4>Categories</h4>
        <form>
          {categories.map((category) => (
            <div key={category} className="checkbox-container">
              <label>{category}</label>
              <input
                name={filterProps.categories}
                type="checkbox"
                value={category}
                onChange={(e) => onFilterUpdate(e)}
              />
            </div>
          ))}
        </form>
      </div>
      <button
        type="button"
        className={`filters-button ${
          showFilter ? 'visible visible-button' : ''
        }`}
        onClick={() => setShowFilter(!showFilter)}
      >
        <i className="fas fa-filter" />
      </button>
    </>
  );
};

export default Filters;
