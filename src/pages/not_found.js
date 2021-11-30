import React from "react";

import getAssetPath from '../utils/getAssetPath';
import { withLayout } from "../common/layout";

const PageNotFound = () => {
  return (
    <>
      <div className="pageN_container">
        <img className="logo logoP"
          src={getAssetPath('icons8-food-as-resources-50.svg')}
          alt="logo" />
        <h2 className="pegeN_header">You can't place an new order now. Page not found.</h2>
      </div>

    </>
  );
};

export default withLayout(PageNotFound);