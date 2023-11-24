import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const MyComponent = () => {
  const [doNothing, setDoNothing] = useState(false);

  useEffect(() => {
    setDoNothing(true);
  }, []);

  const router = useRouter();
  const { testParam } = router.query;

  return (
    <>
      <div>Client Component</div>
      {testParam && Array.isArray(testParam) && (
        <div>
          (Client Component) testParam is an array: [
          {testParam.map((item, index) => (!index ? item : `, ${item}`))}]
        </div>
      )}
      {testParam && !Array.isArray(testParam) && (
        <div>(SClient Component) testParam is a string: {testParam}</div>
      )}
    </>
  );
};

export default MyComponent;
