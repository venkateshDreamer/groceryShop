
import React, { useEffect, useContext, lazy, Suspense } from "react";
import Context from "store/context";

export default  () => {
    const { state, dispatch } = useContext(Context);
  
    // useEffect(() => {
    //   getProducts();
    // }, []);
  
    // async function getProducts() {
    //   if(productJsonData.length > 0) {
    //     dispatch({ type: "GET_PRODUCTS", payload: productJsonData });
    //   }
    // }
  
    return (
      <>
        {/* <Suspense fallback={<div>Loading...</div>}>
          {state.isEditProduct && <EditProduct />}
        </Suspense> */}
        <div>
                DashBoardPage
        </div>
      </>
    );
  };

  
