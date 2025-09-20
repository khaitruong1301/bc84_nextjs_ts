'use client'
//tsrafce
export const dynamic = "force-static"; // ép SSG
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation';
import React from 'react'

type Props = {}
interface UserLogin {
    email: string;
    password: string;
}

const Login = (props: Props) => {
    const router = useRouter();
    const loginForm = useFormik<UserLogin>({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
           if(values.email == 'cybersoft' && values.password == 'cybersoft') {
            console.log('Login', values);
           }else{
            router.push('/forgotPass');

           }
        }
    });



    return (
        <div className="container d-flex align-items-center justify-content-center min-vh-100">
            <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                <div className="card shadow-sm">
                    <div className="card-body p-4">
                        <h3 className="card-title mb-3 text-center">Đăng nhập</h3>
                        <form onSubmit={loginForm.handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label" >Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    className="form-control"
                                    placeholder="you@example.com"
                                    required
                                    autoComplete="email"
                                    onInput={loginForm.handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label" >Mật khẩu</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    placeholder="Mật khẩu"
                                    required
                                    autoComplete="current-password"
                                    onInput={loginForm.handleChange}
                                />
                            </div>

                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="remember" name="remember" />
                                    <label className="form-check-label" htmlFor="remember">Ghi nhớ đăng nhập</label>
                                </div>
                                <a href="#" className="small">Quên mật khẩu?</a>
                            </div>

                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">Đăng nhập</button>
                            </div>
                        </form>

                        <hr />

                        <p className="text-center mb-0 small">
                            Chưa có tài khoản? <a href="#">Đăng ký</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login