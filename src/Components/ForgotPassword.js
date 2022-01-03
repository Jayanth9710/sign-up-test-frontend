import * as Yup from 'yup';
import {Formik,Form} from 'formik';
import Textfield from './Textfield';
import axios from 'axios'
import env from '../Settings';

function ForgotPassword() {
    const validate = Yup.object({
        email: Yup.string().email("Email is Invalid").required("Email is required"),
    });
    return (
        <>
        <div className='signup__page'>
            <div className='signup__container'>
                <Formik 
                initialValues={{
                    email:"",
                }}
                validationSchema={validate}
                onSubmit={async (values) => {
                    try {
                        let postData = await axios.post(`${env.api}/forgotPassword`,{email:values.email});
                        console.log(postData);
                        window.alert("Check your email for Password Reset Link");
                    } catch (error) {
                        console.log(error)
                        window.alert("Check your connection / mail not found")
                    }
                }}>
                    { (formik) => (
                        <div className='signup__title'>
                            <div className='signup__inner'>
                                <Form>
                                    <Textfield
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your mail ID"/>
                                    <button className='signup__buttons' type='submit'>Submit</button>
                                    <button className='signup__buttons' type='reset'>Reset</button>
                                </Form>
                            </div>
                        </div>
                    )}
                </Formik>
            </div>
        </div>
        </>
    )
}

export default ForgotPassword;