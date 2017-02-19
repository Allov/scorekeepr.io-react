const transformObjectValues = (obj, fn) => {
  const transformed = {};
  Object.keys(obj).forEach(key => {
    transformed[key] = fn(obj[key]);
  });
  return transformed;
};

const bindActionCreator = (actionCreator, index) => {
  return (...args) => {
    const s = Object.assign(actionCreator(...args), { index });
    return s;
  }
};

const bindActionCreatorMap = (creators, index) => {
  return transformObjectValues(creators, actionCreator => bindActionCreator(actionCreator, index));
};

const bindIndexToActionCreators = (actionCreators, index) => {
  return typeof actionCreators === 'function'
    ? bindActionCreator(actionCreators, index)
    : bindActionCreatorMap(actionCreators, index);
};

export default bindIndexToActionCreators;
