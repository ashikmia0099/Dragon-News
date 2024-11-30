import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {


    const {createNewUser, setUser} = useContext(AuthContext)
    const [error, setError] = useState({});

    const handleSubmit = e =>{
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get('name');
        if(name.length < 5){
            setError({...error, name:'Must have 6 character'});
            return;
        }
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password')
      
        createNewUser(email, password)
        .then((result) =>{
            const user = result.user;
            setUser(user);
            
            console.log(user);
        })
        .catch((error) =>{
            console.log('Error', error);
        });
    }

   


    return (
        <div className=' min-h-screen flex items-center my-auto justify-center '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='text-2xl font-semibold text-center mt-4'>Register your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" required />
                    </div>
                    {
                        error.name &&(
                            <label className="label">
                            {error.name}
                        </label>
                        )
                    }
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                    </div>
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className='flex gap-4'>
                        <input type="checkbox" defaultChecked className="checkbox" />
                        <p>Accept Term & Conditions</p>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Register;