// import React from 'react';
// import './Login.css';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const LoginPage: React.FC = () => {
//     // Define the initial values for Formik
//     const initialValues = {
//         name: '',
//         email: '',
//         mobile_no: '',
//         address: '',
//     };

//     // Define the Yup validation schema
//     const validationSchema = Yup.object({
//         name: Yup.string()
//             .required('Name is required')
//             .min(2, 'Name must be at least 2 characters long'),
//         email: Yup.string()
//             .required('Email is required')
//             .email('Invalid email format'),
//         mobile_no: Yup.string()
//             .required('Mobile number is required')
//             .matches(/^\d{10}$/, 'Mobile number must be 10 digits'),
//         address: Yup.string()
//             .required('Address is required')
//             .min(5, 'Address must be at least 5 characters long'),
//     });

//     // Formik hook
//     const formik = useFormik({
//         initialValues,
//         validationSchema,
//         onSubmit: (values, { resetForm }) => {
//             const newUserData = { ...values };

//             // Get existing data from localStorage
//             const existingData = localStorage.getItem('userData');
//             let userDataArray = [];

//             if (existingData) {
//                 try {
//                     const parsedData = JSON.parse(existingData);
//                     userDataArray = Array.isArray(parsedData) ? parsedData : [];
//                 } catch (error) {
//                     console.error('Error parsing localStorage data:', error);
//                     userDataArray = []; // Default to an empty array if parsing fails
//                 }
//             }

//             // Add the new data to the array
//             userDataArray.push(newUserData);

//             // Save the updated array back to localStorage
//             localStorage.setItem('userData', JSON.stringify(userDataArray));

//             console.log('Data saved to localStorage:', userDataArray);

//             alert('Data Submitted Successfully!');
//             resetForm(); // Reset the form
//         },
//     });

//     return (
//         <div className="login-container">
//             <form className="login-form" onSubmit={formik.handleSubmit}>
//                 <h2>User Data Form</h2>

//                 <div className="form-group">
//                     <label htmlFor="name">Name:</label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formik.values.name}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         placeholder="Enter your Name"
//                     />
//                     {formik.touched.name && formik.errors.name ? (
//                         <div className="error">{formik.errors.name}</div>
//                     ) : null}
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formik.values.email}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         placeholder="Enter your email"
//                     />
//                     {formik.touched.email && formik.errors.email ? (
//                         <div className="error">{formik.errors.email}</div>
//                     ) : null}
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="mobile_no">Mobile No.:</label>
//                     <input
//                         type="text"
//                         id="mobile_no"
//                         name="mobile_no"
//                         value={formik.values.mobile_no}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         placeholder="Enter your Mobile Number"
//                     />
//                     {formik.touched.mobile_no && formik.errors.mobile_no ? (
//                         <div className="error">{formik.errors.mobile_no}</div>
//                     ) : null}
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="address">Address:</label>
//                     <input
//                         id="address"
//                         name="address"
//                         value={formik.values.address}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         placeholder="Enter your Address"
//                     />
//                     {formik.touched.address && formik.errors.address ? (
//                         <div className="error">{formik.errors.address}</div>
//                     ) : null}
//                 </div>

//                 <button type="submit" className="login-button">
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default LoginPage;




// Code with field tag and to save data in laocal stroge

// import React from 'react';
// import './Login.css';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const LoginPage: React.FC = () => {
//     // Define the initial values for Formik
//     const initialValues = {
//         name: '',
//         email: '',
//         mobile_no: '',
//         address: '',
//     };

//     // Define the Yup validation schema
//     const validationSchema = Yup.object({
//         name: Yup.string()
//             .required('Name is required')
//             .min(2, 'Name must be at least 2 characters long'),
//         email: Yup.string()
//             .required('Email is required')
//             .email('Invalid email format'),
//         mobile_no: Yup.string()
//             .required('Mobile number is required')
//             .matches(/^\d{10}$/, 'Mobile number must be 10 digits'),
//         address: Yup.string()
//             .required('Address is required')
//             .min(5, 'Address must be at least 5 characters long'),
//     });

//     // Function to handle form submission
//     const handleSubmit = (values: typeof initialValues, { resetForm }: { resetForm: () => void }) => {
//         const newUserData = { ...values };

//         // Get existing data from localStorage
//         const existingData = localStorage.getItem('userData');
//         let userDataArray = [];

//         if (existingData) {
//             try {
//                 const parsedData = JSON.parse(existingData);
//                 userDataArray = Array.isArray(parsedData) ? parsedData : [];
//             } catch (error) {
//                 console.error('Error parsing localStorage data:', error);
//                 userDataArray = []; // Default to an empty array if parsing fails
//             }
//         }

//         // Add the new data to the array
//         userDataArray.push(newUserData);

//         // Save the updated array back to localStorage
//         localStorage.setItem('userData', JSON.stringify(userDataArray));

//         console.log('Data saved to localStorage:', userDataArray);

//         alert('Data Submitted Successfully!');
//         resetForm(); // Reset the form
//     };

//     return (
//         <div className="login-container">
//             <Formik
//                 initialValues={initialValues}
//                 validationSchema={validationSchema}
//                 onSubmit={handleSubmit}
//             >
//                 {() => (
//                     <Form className="login-form">
//                         <h2>User Data Form</h2>

//                         <div className="form-group">
//                             <label htmlFor="name">Name:</label>
//                             <Field
//                                 type="text"
//                                 id="name"
//                                 name="name"
//                                 placeholder="Enter your Name"
//                             />
//                             <ErrorMessage name="name" component="div" className="error" />
//                         </div>

//                         <div className="form-group">
//                             <label htmlFor="email">Email:</label>
//                             <Field
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 placeholder="Enter your Email"
//                             />
//                             <ErrorMessage name="email" component="div" className="error" />
//                         </div>

//                         <div className="form-group">
//                             <label htmlFor="mobile_no">Mobile No.:</label>
//                             <Field
//                                 type="text"
//                                 id="mobile_no"
//                                 name="mobile_no"
//                                 placeholder="Enter your Mobile Number"
//                             />
//                             <ErrorMessage name="mobile_no" component="div" className="error" />
//                         </div>

//                         <div className="form-group">
//                             <label htmlFor="address">Address:</label>
//                             <Field
//                                 type="text"
//                                 id="address"
//                                 name="address"
//                                 placeholder="Enter your Address"
//                             />
//                             <ErrorMessage name="address" component="div" className="error" />
//                         </div>

//                         <button type="submit" className="login-button">
//                             Submit
//                         </button>
//                     </Form>
//                 )}
//             </Formik>
//         </div>
//     );
// };

// export default LoginPage;

import React from 'react';
import './Login.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Function to save data to IndexedDB
const saveToIndexedDB = (user: { name: string; email: string; mobile_no: string; address: string }) => {
    const request = indexedDB.open('SimpleUserDB', 1);

    request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains('users')) {
            db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
        }
    };

    request.onsuccess = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        const transaction = db.transaction('users', 'readwrite');
        const store = transaction.objectStore('users');
        store.add(user);

        transaction.oncomplete = () => {
            console.log('Data added to IndexedDB successfully.');
            alert('Data saved to IndexedDB!');
        };

        transaction.onerror = () => {
            console.error('Error saving data to IndexedDB.');
            alert('Error saving data!');
        };
    };

    request.onerror = () => {
        console.error('Error opening IndexedDB.');
        alert('Failed to open IndexedDB!');
    };
};

const LoginPage: React.FC = () => {

    const initialValues = {
        name: '',
        email: '',
        mobile_no: '',
        address: '',
    };

    // Validation schema with Yup
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required').min(2, 'Name must be at least 2 characters long'),
        email: Yup.string().required('Email is required').email('Invalid email format'),
        mobile_no: Yup.string()
            .required('Mobile number is required')
            .matches(/^\d{10}$/, 'Mobile number must be 10 digits'),
        address: Yup.string().required('Address is required').min(5, 'Address must be at least 5 characters long'),
    });

    
    const handleSubmit = (values: typeof initialValues, { resetForm }: { resetForm: () => void }) => {
        // Save form data to IndexedDB
        saveToIndexedDB(values);

        // Reset the form after submission
        resetForm();
    };

    return (
        <div className="login-container">
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {() => (
                    <Form className="login-form">
                        <h2>User Data Form</h2>

                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <Field type="text" id="name" name="name" placeholder="Enter your Name" />
                            <ErrorMessage name="name" component="div" className="error" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <Field type="email" id="email" name="email" placeholder="Enter your Email" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="mobile_no">Mobile No.:</label>
                            <Field type="text" id="mobile_no" name="mobile_no" placeholder="Enter your Mobile Number" />
                            <ErrorMessage name="mobile_no" component="div" className="error" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <Field type="text" id="address" name="address" placeholder="Enter your Address" />
                            <ErrorMessage name="address" component="div" className="error" />
                        </div>

                        <button type="submit" className="login-button">
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default LoginPage;
