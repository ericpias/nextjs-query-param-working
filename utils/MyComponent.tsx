import { useEffect, useState } from "react";
import MyOtherComponent from "./MyOtherComponent";

const MyComponent = ({ parsedQueryParams }: { parsedQueryParams: any }) => {
  const { _locale, _id, _cid, _slug, ...parsedParams } = parsedQueryParams;
  const [doNothing, setDoNothing] = useState(false);

  useEffect(() => {
    setDoNothing(true);
  }, []);

  const props = {
    initialValues: parsedParams,
  };

  return <MyOtherComponent {...props} />;
};

export default MyComponent;
