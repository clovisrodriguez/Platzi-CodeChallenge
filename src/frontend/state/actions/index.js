export const ACTION_TYPES = {
  updateFilter: '@FILTER/UPDATE_FILTER'
};
export const updateFilter = (payload) => ({
  type: ACTION_TYPES.updateFilter,
  payload
});
