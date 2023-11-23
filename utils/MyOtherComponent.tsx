import { useEffect, useState } from "react";

const MyOtherComponent = ({ initialValues }: { initialValues: any }) => {
  const { testParam } = initialValues;

  return (
    <>
      <div>MyOtherComponent</div>
      {testParam && Array.isArray(testParam) && (
        <div>
          testParam is an array: [
          {testParam.map((item, index) => (!index ? item : `, ${item}`))}]
        </div>
      )}
      {testParam && !Array.isArray(testParam) && (
        <div>testParam is a string: {testParam}</div>
      )}
      {!testParam && (
        <div>
          testParam: not set (hint set it twice to see the bug when deploy in
          netlify)
        </div>
      )}
    </>
  );
};

export default MyOtherComponent;
