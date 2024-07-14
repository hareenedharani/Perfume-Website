// import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import BagPage from './Components/BagPage/BagPage';
// import Checkoutpage from './Components/Checkoutpage/Checkoutpage';
// import Footer from './Components/Footer/Footer';
// import Product from './Components/Product/Product';
// import Navbard from './Components/Navbard/Navbard';
// import Home from './Pages/Home';
// import Profile from './Components/Profile/Profile';
// import Category from './Components/Category/Category';
// import Wishlist from './Components/Wishlist/Wishlist';
// import { WishlistProvider } from './context/WishlistContext';
// import RecentOrder from './Components/Recentorder/Recentorder';
// import Premium from './Components/Premium/Premium';
// import { BagProvider } from './context/BagContext';
// // import Category_product from './Components/Category_product/Category_product'
// function App() {
//   return (
//     <div className="App">
//       <BagProvider>
//         <WishlistProvider>
//           <BrowserRouter>
//             <Navbard />
//             <Switch>
//             <Route exact path='/' component={Home} />
//             <Route path='/bag' component={BagPage} />
//             <Route path='/profile' component={Profile} />
//             <Route path='/customised perfume' component={Category}/>
//             {/* <Route path="/category-product/:id" component={Category_product} /> */}
//             <Route path='/wishlist' component={Wishlist} />
//             <Route path='/recent orders' component={RecentOrder}/>
//             <Route path='/premium scents' component={Premium}/>
//             </Switch>
//             <Footer />
//           </BrowserRouter>
//         </WishlistProvider>
//       </BagProvider>
//     </div>
//   );  
// }

// export default App;
// import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import BagPage from './Components/BagPage/BagPage';
// import Checkoutpage from './Components/Checkoutpage/Checkoutpage';
// import Footer from './Components/Footer/Footer';
// import Product from './Components/Product/Product';
// import Navbard from './Components/Navbard/Navbard';
// import Home from './Pages/Home';
// import Profile from './Components/Profile/Profile';
// import Category from './Components/Category/Category';
// import Wishlist from './Components/Wishlist/Wishlist';
// import  {WishlistProvider } from './context/WishlistContext';
// import RecentOrder from './Components/Recentorder/Recentorder';
// import Premium from './Components/Premium/Premium';
// import { BagProvider } from './context/BagContext';
// import Category_product from './Components/Category_product/Category_product';
// import { AuthProvider } from './context/AuthContext';
// import Login from './Components/Login/Login';

// function App() {
//   return (
//     <div className="App">
//       <BagProvider>
//         <WishlistProvider>
//           <AuthProvider>
//             <BrowserRouter>
//               <Navbard />
//             <Switch>
//               <Route exact path='/' component={Home} />
//               <Route path='/bag' component={BagPage} />
//               <Route path='/profile' component={Profile} />
//               <Route path='/createaccount' component={Profile} />
              
//               <Route path='/customised perfume' component={Category}/>
//               <Route path="/category-product/:id" component={Category_product} />
//               <Route path='/wishlist' component={Wishlist} />
//               <Route path='/recent orders' component={RecentOrder}/>
//               <Route path='/premium scents' component={Premium}/>
//               <Route path='/login' component={Login} />
//             </Switch>
//             <Footer />
//             </BrowserRouter>
//           </AuthProvider>
//         </WishlistProvider>
//       </BagProvider>
//     </div>
//   );  
// }

// export default App;


// import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import BagPage from './Components/BagPage/BagPage';
// import Footer from './Components/Footer/Footer';
// import Navbard from './Components/Navbard/Navbard';
// import Home from './Pages/Home';
// import Profile from './Components/Profile/Profile';
// import Category from './Components/Category/Category';
// import Wishlist from './Components/Wishlist/Wishlist';
// import { WishlistProvider } from './context/WishlistContext';
// import RecentOrder from './Components/Recentorder/Recentorder';
// import Premium from './Components/Premium/Premium';
// import { BagProvider } from './context/BagContext';
// import Category_product from './Components/Category_product/Category_product';
// import { AuthProvider } from './context/AuthContext';
// import Login from './Components/Login/Login';
// import { UserProvider } from './context/UserContext';
// import CreateAccount from './Components/CreateAccount/CreateAccount';

// function App() {
//     return (
//         <div className="App">
//           <AuthProvider>
//             <UserProvider>
//               <BagProvider>
//                 <WishlistProvider>
//                   <BrowserRouter>
//                     <Navbard />
//                     <Switch>
//                       <Route exact path='/' component={Home} />
//                       <Route path='/bag' component={BagPage} />
//                       <Route path='/profile' component={Profile} />
//                       <Route path='/createaccount' component={CreateAccount} />
//                       <Route path='/customised-perfume' component={Category} />
//                       <Route path="/category-product/:id" component={Category_product} />                              <Route path='/wishlist' component={Wishlist} />
//                       <Route path='/recent-orders' component={RecentOrder} />
//                       <Route path='/premium-scents' component={Premium} />
//                       <Route path='/login' component={Login} />
//                     </Switch>
//                     <Footer />
//                   </BrowserRouter>
//                 </WishlistProvider>
//              </BagProvider>
//             </UserProvider>
//           </AuthProvider>
//         </div>
//     );
// }

// export default App;
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbard from './Components/Navbard/Navbard';
import Home from './Pages/Home';
import Profile from './Components/Profile/Profile';
import BagPage from './Components/BagPage/BagPage';
import Footer from './Components/Footer/Footer';
import Category from './Components/Category/Category';
import Wishlist from './Components/Wishlist/Wishlist';
import { WishlistProvider } from './context/WishlistContext'; // Import WishlistProvider
import RecentOrder from './Components/Recentorder/Recentorder';
import Premium from './Components/Premium/Premium';
import { BagProvider } from './context/BagContext';
import Category_product from './Components/Category_product/Category_product';
import { AuthProvider } from './context/AuthContext';
import Login from './Components/Login/Login';
import { UserProvider } from './context/UserContext';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import Checkoutpage from './Components/Checkoutpage/Checkoutpage';
function App() {
    return (
        <div className="App">
          <AuthProvider>
            <UserProvider>
              <BagProvider>
                <WishlistProvider>
                  <BrowserRouter>
                    <Navbard />
                    <Switch>
                      <Route exact path='/' component={Home} />
                      <Route path='/bag' component={BagPage} />
                      <Route path='/profile' component={Profile} />
                      <Route path='/createaccount' component={CreateAccount} />
                      <Route path='/customised-perfume' component={Category} />
                      <Route path="/category-product/:id" component={Category_product} />                              <Route path='/wishlist' component={Wishlist} />
                      <Route path='/recent-orders' component={RecentOrder} />
                      <Route path='/premium-scents' component={Premium} />
                      <Route path='/login' component={Login} />
                      <Route path='/checkout' component={Checkoutpage} />
                    </Switch>
                    <Footer />
                  </BrowserRouter>
                </WishlistProvider>
             </BagProvider>
            </UserProvider>
          </AuthProvider>
        </div>
    );
}

export default App;
