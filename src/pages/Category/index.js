
import React, { useEffect, useContext, lazy, Suspense } from "react";
import Context from "store/context";

export default () => {
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
        <main className="content">
          <div className="container-fluid p-0">
            <h1 className="h3 mb-3">Category</h1>
            <div className="row">
              <div className="col-12 col-xl-6">
                <div className="card">
                <div className="card-header">
									<h5 className="card-title">Category Form</h5>
								</div>
                <hr></hr>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <label className="form-label">Category Name</label>
                        <input type="text" className="form-control" placeholder="Name" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Status</label>
                        <select  className="form-control">
                          <option value="">Choose...</option>
                          <option>Active</option>
                          <option>Inactive</option>
                        </select>
                      </div>
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-6">
                <div className="card">
                <div className="card-header">
									<h5 className="card-title">Category List</h5>
								</div>
                  <div className="card-body">
                    <table id="datatables-basic" className="table table-striped" style={{ width: '100%' }} >
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td> Test</td>
                          <td>  active</td>
                          <td className="row">
                          <div className= "col-2">
                               <button type="submit" className="btn btn-primary">View</button>
                            </div>
                            <div className= "col-2">
                               <button type="submit" className="btn btn-secondary">Edit</button>
                            </div>
                            <div className= "col-2">
                               <button type="submit" className="btn btn-danger">Delete</button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};


