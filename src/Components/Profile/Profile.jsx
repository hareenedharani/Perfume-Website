// import React, { useState } from 'react';
// import './Profile.css'; // Import the CSS file
// import { FaRegUser } from 'react-icons/fa';
// const Profile = () => {
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
//     landmark: '',
//     addressType: 'home',
//     customAddressType: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form data submitted: ', formData);
//   };

//   return (
//     <div className="form-container">
      
//       <form onSubmit={handleSubmit}>
//         <div className='third-section'>
//        <div className='first-section'>
//         <div className="profile-icon-container">
//                         <FaRegUser className="profile-icon2" />
//                     </div>
                   

    
//         <div className='second-section'>
//           <h3>Contact Information :</h3>
//           <div className="form-group">
//             <label>Username</label>
//             <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder='Username*'/>
//           </div>
//           <div className="form-group">
//             <label>Name :</label>
//             <input type="text" name="name" value={formData.name} onChange={handleChange} required  placeholder='Name*' />
//           </div>
//           <div className='form-group-sub'>
          
//           <div className="form-group-mobile">
//             <label>Mobile No :</label>
//             <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required  placeholder='CodeMobile No*'/>
//           </div>
//           </div>
//           <div className="form-group-alt">
//             <label>Alternate Mobile No :</label>
//             <input type="tel" name="altMobile" value={formData.altMobile} onChange={handleChange} placeholder='CodeMobile No*'/>
//           </div>
//           <div className="form-group">
//                             <label>Password :</label>
//                             <input 
//                                 type="password" 
//                                 name="password"
//                                 value={formData.password} 
//                                 onChange={handleChange} 
//                                 required 
//                                 minLength="8" 
//                                 maxLength="16" 
//                                 placeholder='Password(8-16 characters)*'
//                             />
//                         </div>
//                         <div className="form-group">
//             <label>E-mail ID :</label>
//             <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder='name@gmail.com*'/>
//           </div>

                 
//                 </div>
//                </div>
//         <div className='delivery-section'>
       
//           <h3>Delivery Address :</h3>
//           <div className="form-group">
//             <label>Name :</label>
//             <input type="text" name="name" value={formData.name} onChange={handleChange} required  placeholder='Name*' />
//           </div>
//           <div className="form-group">
//             <label>Mobile No :</label>
//             <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required  placeholder='CodeMobile No*'/>
//           </div>
//           <div className='state-dist'>
//           <div className="form-group-state">
//             <label>State :</label>
//             <input type="text" name="state" value={formData.state} onChange={handleChange} required placeholder='State*'/>
//           </div>
//           <div className="form-group-dist">
//             <label>District :</label>
//             <input type="text" name="district" value={formData.district} onChange={handleChange} required placeholder='District*'/>
//           </div>
//           </div>
//           <div className='city-pin'>
//           <div className="form-group-city">
//             <label>City :</label>
//             <input type="text" name="city" value={formData.city} onChange={handleChange} required placeholder='City*'/>
//           </div>
//           <div className="form-group-pin">
//             <label>PIN Code :</label>
//             <input type="text" name="pin" value={formData.pin} onChange={handleChange} required placeholder='PIN'/>
//           </div>
//           </div>
//           <div className="form-group">
//             <label>Address lane :</label>
//             <input type="text" name="addressLane" value={formData.addressLane} onChange={handleChange} required placeholder='Apartment,Street,Colony,etc.*' />
//           </div>
//           <div className="form-group">
//             <label>Landmark :</label>
//             <input type="text" name="landmark" value={formData.landmark} onChange={handleChange} placeholder='Landmark' />
//           </div>
//           <button type="submit" className="submit-button1">Recent Order</button>
//         </div>
//         </div>
     
   
//       </form>
//     </div>
//   );
// };

// export default Profile;
// import React, { useState, useEffect } from 'react';
// import './Profile.css'; // Import the CSS file
// import { FaRegUser } from 'react-icons/fa';

// const Profile = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     name: '',
//     country: '',
//     mobile: '',
//     altMobile: '',
//     state: '',
//     district: '',
//     city: '',
//     pin: '',
//     addressLane: '',
//     landmark: ''
//   });

//   // Fetch user details on component mount
//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         console.error('No token found');
//         return;
//       }

//       try {
//         const response = await fetch('http://localhost:3000/profile', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`
//           }
//         });

//         if (response.status === 200) {
//           const data = await response.json();
//           setFormData({
//             name: data.userName,
//             email: data.emailId,
//             mobile: data.phoneNumber,
//             state: data.address.state,
//             district: data.address.district,
//             city: data.address.city,
//             pin: data.address.pincode,
//             addressLane: data.address.address_lane,
//             landmark: data.address.landmark
//           });
//         } else {
//           console.error('Failed to fetch user details');
//         }
//       } catch (error) {
//         console.error('Error fetching user details:', error);
//       }
//     };

//     fetchUserDetails();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form data submitted: ', formData);
//   };

//   return (
//     <div className="form-container">
//       <form onSubmit={handleSubmit}>
//         <div className='third-section'>
//           <div className='first-section'>
//             <div className="profile-icon-container">
//               <FaRegUser className="profile-icon2" />
//             </div>
//             <div className='second-section'>
//               <h3>Contact Information :</h3>
//               <div className="form-group">
//                 <label>Username</label>
//                 <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder='Username*' />
//               </div>
//               <div className="form-group">
//                 <label>Name :</label>
//                 <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder='Name*' />
//               </div>
//               <div className='form-group-sub'>
//                 <div className="form-group-mobile">
//                   <label>Mobile No :</label>
//                   <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required placeholder='CodeMobile No*' />
//                 </div>
//               </div>
//               <div className="form-group-alt">
//                 <label>Alternate Mobile No :</label>
//                 <input type="tel" name="altMobile" value={formData.altMobile} onChange={handleChange} placeholder='CodeMobile No*' />
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
//                 <label>E-mail ID :</label>
//                 <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder='name@gmail.com*' />
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
//               <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required placeholder='CodeMobile No*' />
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
//             <button type="submit" className="submit-button1">Recent Order</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Profile;
// import React, { useState, useEffect } from 'react';
// import './Profile.css'; // Import the CSS file
// import { FaRegUser } from 'react-icons/fa';

// const Profile = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         name: '',
//         // country: '',
//         mobile: '',
//         altMobile: '',
//         state: '',
//         district: '',
//         city: '',
//         pin: '',
//         addressLane: '',
//         landmark: '',
//     });

//     useEffect(() => {
//         const fetchProfile = async () => {
//             const token = localStorage.getItem('token');
//             if (!token) {
//                 alert('No token found. Please log in again.');
//                 return;
//             }

//             try {
//                 const response = await fetch('http://localhost:3000/profile', {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': ` ${token}`,
//                     },
//                 });

//                 if (response.ok) {
//                     const data = await response.json();
//                     setFormData({
//                         email: data.emailId,
//                         name: data.userName,
//                         // country: data.country,
//                         mobile: data.phoneNumber,
//                         altMobile: data.alternatePhoneNumber,   
//                         state: data.address.state,
//                         district: data.address.district,
//                         city: data.address.city,
//                         pin: data.address.pincode,
//                         addressLane: data.address.address_lane,
//                         landmark: data.address.landmark,
//                     });
//                 } else {
//                     alert('Failed to fetch profile details');
//                 }
//             } catch (error) {
//                 console.error('Error fetching profile details:', error);
//                 alert('An error occurred while fetching profile details');
//             }
//         };

//         fetchProfile();
//     }, []);

//     return (
//         <div className="form-container">
//             <form>
//                 <div className="third-section">
//                     <div className="first-section">
//                         <div className="profile-icon-container">
//                             <FaRegUser className="profile-icon2" />
//                         </div>
//                         <div className="second-section">
//                             <h3>Contact Information :</h3>
//                             <div className="form-group">
//                                 <label>Username</label>
//                                 <input type="text" name="name" value={formData.name} readOnly />
//                             </div>
//                             <div className="form-group">
//                                 <label>Name :</label>
//                                 <input type="text" name="name" value={formData.name} readOnly />
//                             </div>
//                             <div className="form-group-sub">
//                                 <div className="form-group-mobile">
//                                     <label>Mobile No :</label>
//                                     <input type="tel" name="mobile" value={formData.mobile} readOnly />
//                                 </div>
//                             </div>
//                             {/* <div className="form-group-alt">
//                                 <label>Alternate Mobile No :</label>
//                                 <input type="tel" name="altMobile" value={formData.altMobile} readOnly />
//                             </div> */}
//                             <div className="form-group">
//                                 <label>Password :</label>
//                                 <input type="password" name="password" value={formData.password} readOnly />
//                             </div>
//                             <div className="form-group">
//                                 <label>E-mail ID :</label>
//                                 <input type="email" name="email" value={formData.email} readOnly />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="delivery-section">
//                         <h3>Delivery Address :</h3>
//                         <div className="form-group">
//                             <label>Name :</label>
//                             <input type="text" name="name" value={formData.name} readOnly />
//                         </div>
//                         <div className="form-group">
//                             <label>Mobile No :</label>
//                             <input type="tel" name="mobile" value={formData.mobile} readOnly />
//                         </div>
//                         <div className="state-dist">
//                             <div className="form-group-state">
//                                 <label>State :</label>
//                                 <input type="text" name="state" value={formData.state} readOnly />
//                             </div>
//                             <div className="form-group-dist">
//                                 <label>District :</label>
//                                 <input type="text" name="district" value={formData.district} readOnly />
//                             </div>
//                         </div>
//                         <div className="city-pin">
//                             <div className="form-group-city">
//                                 <label>City :</label>
//                                 <input type="text" name="city" value={formData.city} readOnly />
//                             </div>
//                             <div className="form-group-pin">
//                                 <label>PIN Code :</label>
//                                 <input type="text" name="pin" value={formData.pin} readOnly />
//                             </div>
//                         </div>
//                         <div className="form-group">
//                             <label>Address lane :</label>
//                             <input type="text" name="addressLane" value={formData.addressLane} readOnly />
//                         </div>
//                         <div className="form-group">
//                             <label>Landmark :</label>
//                             <input type="text" name="landmark" value={formData.landmark} readOnly />
//                         </div>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Profile;
import React, { useState, useEffect } from 'react';
import './Profile.css'; // Import the CSS file
import { FaRegUser } from 'react-icons/fa';

const Profile = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    mobile: '',
    altMobile: '',
    state: '',
    district: '',
    city: '',
    pin: '',
    addressLane: '',
    landmark: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('No token found. Please log in again.');
        return;
      }

      try {
        const response = await fetch('http://localhost:3000/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setFormData({
            email: data.emailId,
            name: data.userName,
            mobile: data.phoneNumber,
            altMobile: data.alternatePhoneNumber,
            state: data.deliveryAddress.state,
            district: data.deliveryAddress.district,
            city: data.deliveryAddress.city,
            pin: data.deliveryAddress.pincode,
            addressLane: data.deliveryAddress.address_lane,
            landmark: data.deliveryAddress.landmark,
          });
        } else {
          console.error('Failed to fetch profile details:', data);
          alert('Failed to fetch profile details');
        }
      } catch (error) {
        console.error('Error fetching profile details:', error);
        alert('An error occurred while fetching profile details');
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="form-container">
      <form>
        <div className="third-section">
          <div className="first-section">
            <div className="profile-icon-container">
              <FaRegUser className="profile-icon2" />
            </div>
            <div className="second-section">
              <h3>Contact Information :</h3>
              <div className="form-group">
                <label>Username</label>
                <input type="text" name="name" value={formData.name} readOnly />
              </div>
              <div className="form-group">
                <label>Name :</label>
                <input type="text" name="name" value={formData.name} readOnly />
              </div>
              <div className="form-group-sub">
                <div className="form-group-mobile">
                  <label>Mobile No :</label>
                  <input type="tel" name="mobile" value={formData.mobile} readOnly />
                </div>
              </div>
              {/* <div className="form-group">
                <label>Password :</label>
                <input type="password" name="password" value={formData.password} readOnly />
              </div> */}
              <div className="form-group">
                <label>E-mail ID :</label>
                <input type="email" name="email" value={formData.email} readOnly />
              </div>
            </div>
          </div>
          <div className="delivery-section">
            <h3>Delivery Address :</h3>
            <div className="form-group">
              <label>Name :</label>
              <input type="text" name="name" value={formData.name} readOnly />
            </div>
            <div className="form-group">
              <label>Mobile No :</label>
              <input type="tel" name="mobile" value={formData.mobile} readOnly />
            </div>
            <div className="state-dist">
              <div className="form-group-state">
                <label>State :</label>
                <input type="text" name="state" value={formData.state} readOnly />
              </div>
              <div className="form-group-dist">
                <label>District :</label>
                <input type="text" name="district" value={formData.district} readOnly />
              </div>
            </div>
            <div className="city-pin">
              <div className="form-group-city">
                <label>City :</label>
                <input type="text" name="city" value={formData.city} readOnly />
              </div>
              <div className="form-group-pin">
                <label>PIN Code :</label>
                <input type="text" name="pin" value={formData.pin} readOnly />
              </div>
            </div>
            <div className="form-group">
              <label>Address lane :</label>
              <input type="text" name="addressLane" value={formData.addressLane} readOnly />
            </div>
            <div className="form-group">
              <label>Landmark :</label>
              <input type="text" name="landmark" value={formData.landmark} readOnly />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
