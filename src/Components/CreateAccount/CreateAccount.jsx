// import React, { useState, useContext } from 'react';
// import './CreateAccount.css'; // Import the CSS file
// import { FaRegUser } from 'react-icons/fa';
// import UserContext from '../../context/UserContext';
// import {AuthContext} from '../../context/AuthContext'; // Import AuthContext
// import { useHistory } from 'react-router-dom';

// const CreateAccount = () => {
//   const { setUser } = useContext(UserContext);
//   const { setIsLoggedIn } = useContext(AuthContext); // Access setIsLoggedIn from AuthContext
//   const history = useHistory();

//   // State to manage form data
//   const [formData, setFormData] = useState({
//     email: '',
//     name: '',
//     country: '',
//     mobile: '',
//     altMobile: '',
//     password: '',
//     confirmPassword: '',
//     state: '',
//     district: '',
//     city: '',
//     pin: '',
//     addressLane: '',
//     landmark: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     if (formData.password !== formData.confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }
  
//     const userPayload = {
//       username: formData.name,
//       emailId: formData.email,
//       password: formData.password,
//       phoneNumber: formData.mobile,
//       alternatePhoneNumber: formData.altMobile,
//       deliveryAddress: {
//         state: formData.state,
//         district: formData.district,
//         city: formData.city,
//         pincode: formData.pin,
//         address_lane: formData.addressLane,
//         landmark: formData.landmark
//       }
//     };
  
//     try {
//       const response = await fetch('http://localhost:3000/auth/create', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(userPayload)
//       });
  
//       const data = await response.json();
  
//       if (response.status === 200) {
//         setUser(formData); // Assuming setUser updates the context with user data
//         setIsLoggedIn(true); // Set isLoggedIn to true
//         alert('Account created successfully!');
  
//         const { token } = data;
//         localStorage.setItem('token', token);
//         console.log('Token found:', token);
        
//         history.push('/profile');
//       } else if (response.status === 401) {
//         alert('User already exists');
//       } else if (response.status === 422) {
//         alert('Validation error: ' + JSON.stringify(data)); // Log validation errors
//       } else {
//         alert('An error occurred while creating the account');
//       }
//     } catch (error) {
//       console.error('Error creating account:', error);
//       alert('An error occurred while creating the account');
//     }
//   };
  
//   return (
//     <div className="form-container">
//       <form onSubmit={handleSubmit}>
//         <div className='third-section'>
//           <div className='first-section'>
//             <div className="profile-icon-container">
//               <FaRegUser className="profile-icon1" />
//             </div>
//             <div className='second-section'>
//               <h3>Contact Information :</h3>
//               <div className="form-group">
//                 <label>E-mail ID :</label>
//                 <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder='name@gmail.com*' />
//               </div>
//               <div className="form-group">
//                 <label>Name :</label>
//                 <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder='Name*' />
//               </div>
//               <div className='form-group-sub'>
//                 <div className="form-group">
//                   <label>Country :</label>
//                   <input type="text" name="country" value={formData.country} onChange={handleChange} required placeholder='Country*' />
//                 </div>
//                 <div className="form-group-mobile">
//                   <label>Mobile No :</label>
//                   <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required placeholder='CodeMobile No*' />
//                 </div>
//               </div>
//               <div className="form-group-alt">
//                 <label>Alternate Mobile No :</label>
//                 <input type="text" name="altMobile" value={formData.altMobile} onChange={handleChange} placeholder='CodeMobile No*' />
//               </div>
//               <div className="form-group">
//                 <label>Password :</label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                   minLength="8"
//                   maxLength="16"
//                   placeholder='Password(8-16 characters)*'
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Confirm Password :</label>
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   required
//                   minLength="8"
//                   maxLength="16"
//                   placeholder='Password(8-16 characters)*'
//                 />
//               </div>
//             </div>
//           </div>
//           <div className='delivery-section'>
//             <h3>Delivery Address :</h3>
//             <div className="form-group">
//               <label>Name :</label>
//               <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder='Name*' />
//             </div>
//             <div className="form-group">
//               <label>Mobile No :</label>
//               <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required placeholder='CodeMobile No*' />
//             </div>
//             <div className='state-dist'>
//               <div className="form-group-state">
//                 <label>State :</label>
//                 <input type="text" name="state" value={formData.state} onChange={handleChange} required placeholder='State*' />
//               </div>
//               <div className="form-group-dist">
//                 <label>District :</label>
//                 <input type="text" name="district" value={formData.district} onChange={handleChange} required placeholder='District*' />
//               </div>
//             </div>
//             <div className='city-pin'>
//               <div className="form-group-city">
//                 <label>City :</label>
//                 <input type="text" name="city" value={formData.city} onChange={handleChange} required placeholder='City*' />
//               </div>
//               <div className="form-group-pin">
//                 <label>PIN Code :</label>
//                 <input type="text" name="pin" value={formData.pin} onChange={handleChange} required placeholder='PIN' />
//               </div>
//             </div>
//             <div className="form-group">
//               <label>Address lane :</label>
//               <input type="text" name="addressLane" value={formData.addressLane} onChange={handleChange} required placeholder='Apartment,Street,Colony,etc.*' />
//             </div>
//             <div className="form-group">
//               <label>Landmark :</label>
//               <input type="text" name="landmark" value={formData.landmark} onChange={handleChange} placeholder='Landmark' />
//             </div>
//             <button type="submit" className="submit-button">Create account</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateAccount;
import React, { useState, useContext } from 'react';
import './CreateAccount.css'; // Import the CSS file
import { FaRegUser } from 'react-icons/fa';
import UserContext from '../../context/UserContext';
import { AuthContext } from '../../context/AuthContext'; // Import AuthContext
import { useHistory } from 'react-router-dom';

const CreateAccount = () => {
  const { setUser } = useContext(UserContext);
  const { setIsLoggedIn } = useContext(AuthContext); // Access setIsLoggedIn from AuthContext
  const history = useHistory();

  // State to manage form data
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    country: '',
    mobile: '',
    altMobile: '',
    password: '',
    confirmPassword: '',
    state: '',
    district: '',
    city: '',
    pin: '',
    addressLane: '',
    landmark: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const userPayload = {
      username: formData.name,
      emailId: formData.email,
      password: formData.password,
      phoneNumber: formData.mobile,
      alternatePhoneNumber: formData.altMobile,
      deliveryAddress: {
        state: formData.state,
        district: formData.district,
        city: formData.city,
        pincode: formData.pin,
        address_lane: formData.addressLane,
        landmark: formData.landmark
      }
    };

    try {
      const response = await fetch('http://localhost:3000/auth/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userPayload)
      });

      const data = await response.json();

      if (response.status === 200) {
        setUser(formData); // Assuming setUser updates the context with user data
        setIsLoggedIn(true); // Set isLoggedIn to true
        alert('Account created successfully!');

        const { token } = data;
        localStorage.setItem('token', token);
        console.log('Token found:', token);

        history.push('/profile');
      } else if (response.status === 401) {
        alert('User already exists');
      } else if (response.status === 422) {
        alert('Validation error: ' + JSON.stringify(data)); // Log validation errors
      } else {
        alert('An error occurred while creating the account');
      }
    } catch (error) {
      console.error('Error creating account:', error);
      alert('An error occurred while creating the account');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className='third-section'>
          <div className='first-section'>
            <div className="profile-icon-container">
              <FaRegUser className="profile-icon1" />
            </div>
            <div className='second-section'>
              <h3>Contact Information :</h3>
              <div className="form-group">
                <label>E-mail ID :</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder='name@gmail.com*' />
              </div>
              <div className="form-group">
                <label>Name :</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder='Name*' />
              </div>
              <div className='form-group-sub'>
                <div className="form-group">
                  <label>Country :</label>
                  <input type="text" name="country" value={formData.country} onChange={handleChange} required placeholder='Country*' />
                </div>
                <div className="form-group-mobile">
                  <label>Mobile No :</label>
                  <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required placeholder='CodeMobile No*' />
                </div>
              </div>
              <div className="form-group-alt">
                <label>Alternate Mobile No :</label>
                <input type="text" name="altMobile" value={formData.altMobile} onChange={handleChange} placeholder='CodeMobile No*' />
              </div>
              <div className="form-group">
                <label>Password :</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength="8"
                  maxLength="16"
                  placeholder='Password(8-16 characters)*'
                />
              </div>
              <div className="form-group">
                <label>Confirm Password :</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  minLength="8"
                  maxLength="16"
                  placeholder='Password(8-16 characters)*'
                />
              </div>
            </div>
          </div>
          <div className='delivery-section'>
            <h3>Delivery Address :</h3>
            <div className="form-group">
              <label>Name :</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder='Name*' />
            </div>
            <div className="form-group">
              <label>Mobile No :</label>
              <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required placeholder='CodeMobile No*' />
            </div>
            <div className='state-dist'>
              <div className="form-group-state">
                <label>State :</label>
                <input type="text" name="state" value={formData.state} onChange={handleChange} required placeholder='State*' />
              </div>
              <div className="form-group-dist">
                <label>District :</label>
                <input type="text" name="district" value={formData.district} onChange={handleChange} required placeholder='District*' />
              </div>
            </div>
            <div className='city-pin'>
              <div className="form-group-city">
                <label>City :</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} required placeholder='City*' />
              </div>
              <div className="form-group-pin">
                <label>PIN Code :</label>
                <input type="text" name="pin" value={formData.pin} onChange={handleChange} required placeholder='PIN' />
              </div>
            </div>
            <div className="form-group">
              <label>Address lane :</label>
              <input type="text" name="addressLane" value={formData.addressLane} onChange={handleChange} required placeholder='Apartment,Street,Colony,etc.*' />
            </div>
            <div className="form-group">
              <label>Landmark :</label>
              <input type="text" name="landmark" value={formData.landmark} onChange={handleChange} placeholder='Landmark' />
            </div>
            <button type="submit" className="submit-button">Create account</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
