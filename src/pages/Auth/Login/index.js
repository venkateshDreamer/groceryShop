
import React, { useEffect, useContext, lazy, Suspense } from "react";
import Context from "store/context";
import {Link} from 'react-router-dom'
import Auth from 'config/auth';
import logo from '../../../assets/img/fandashtic-logo-full.svg'
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
    const signin = ()=> {
        Auth.authenticate();
    }
    return (
        <>
            {/* <Suspense fallback={<div>Loading...</div>}>
          {state.isEditProduct && <EditProduct />}
        </Suspense> */}
            <main className="main d-flex w-100">
                <div className="container d-flex flex-column">
                    <div className="row h-100">
                        <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                            <div className="d-table-cell align-middle">
                                <div className="text-center mt-4">
                                    <h1 className="h2">Welcome back, Admin</h1>
                                    <p className="lead">
                                        Sign in to your account to continue
                                    </p>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="m-sm-4">
                                            <div className= "text-center">
                                            <img src={logo} width={'50%'} />
                                            </div>
                                            <form>
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input className="form-control form-control-lg"  value ="demo" type="email" name="email" placeholder="Enter your email" readOnly />
                                                </div>
                                                <div className="form-group">
                                                    <label>Password</label>
                                                    <input className="form-control form-control-lg" value ="demo" type="password" name="password" placeholder="Enter your password" readOnly />
                                                    <small>
                                                        <Link to="/forgetPassword">Forgot password?</Link>
                                                    </small>
                                                </div>
                                                <div>
                                                </div>
                                                <div className="text-center mt-3">
                                                    <Link to="/dashboard" onClick ={() =>signin()} className="btn btn-lg btn-primary">Sign in</Link>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};