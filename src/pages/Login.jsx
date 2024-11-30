import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

    const {userLogin,setUser} = useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location)

    const handleSubmit = e =>{
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        // console.log(email, password)

        userLogin(email, password)
        .then((result) =>{
            const user = result.user;
            setUser(user);
            navigate(location?.state ? location.state : '/' )
        })
        .catch((err)=>{
            setError({...error, login: err.code });
        });
    };

    return (
        <div className=' min-h-screen flex items-center my-auto justify-center '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='text-2xl font-semibold text-center mt-4'>Login your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        {
                            error.login && (
                                <label className="label">
                                    {error.login}
                            </label>
                            )
                        }
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p className='font-semibold text-center my-3'><span>Dont’t Have An Account ?</span> <Link to={'/auth/register'} className='text-[#F8625C]'> Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;