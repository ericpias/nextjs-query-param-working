
const parseQueryParams = (queryParams: Record<string, any>) => {
  
  const filteredQueryParams = Object.keys(queryParams).filter(
    (key) => !key.includes('feathery_')
  );
  
  return filteredQueryParams.reduce(
    (obj, key) => ({ ...obj, [key]: queryParams[key] }),
    {}
  );
  
}

export default parseQueryParams;
