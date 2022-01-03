import * as Yup from 'yup';
import {Formik,Form} from 'formik';
import Textfield from './Textfield';
import axios from 'axios'
import env from '../Settings';
import { useNavigate } from 'react-router-dom';

function ResetPassword(props) {
    const validate = Yup.object({
        password: Yup.string()
        .min(6,"Password must be atleast 6 Characters")
        .required("Password is Mandatory"),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"),null],"Password must Match")
        .required("Confirm Password is Mandatory"),
    });

    const navigate = useNavigate();
    return (
        <>
        <div className='signup__page'>
            <div className='signup__container'>
                <Formik 
                initialValues={{
                    password: "",
                    confirmPassword: "",
                }}
                validationSchema={validate}
                onSubmit={async (values) => {
                    try {
                        let postData = await axios.post(`${env.api}/${props.match.params.userId}/${props.match.params.token}`,{password:values.password});
                        console.log(postData);
                        window.alert("Password Changed Successfully");
                        navigate('/')
                    } catch (error) {
                        console.log(error)
                        window.alert("Check your connection / Password reset Unsucessfull")
                    }
                }}>
                    { (formik) => (
                        <div className='signup__title'>
                            <div className='signup__inner'>
                                <Form>
                                    <Textfield
                                    label="password"
                                    name="password"
                                    type="password"
                                    placeholder="Enter your Password"/>
                                    <Textfield
                                    label="confirm Password"
                                    name="confirmPassword"
                                    type="confirmPassword"
                                    placeholder="Enter your mail ID"/>
                                    <button className='signup__buttons'>Submit</button>
                                    <button className='signup__buttons'>Reset</button>
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

export default ResetPassword;