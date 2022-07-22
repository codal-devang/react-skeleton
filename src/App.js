import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { AuthProvider } from './components/auth/auth'
import { RequireAuth } from './components/auth/RequireAuth'
import store from './redux/store'
import LoaderMain from  './shared_components/loader/loader'

const Home = lazy(() => import('./components/main_content/Home'))
const Navbar = lazy(() => import('./components/layout/header/Navbar'))
const OrderSummary = lazy(() => import('./components/404_page/NoMatch'))
const NewProducts = lazy(() => import('./components/main_content/NewProducts'))
const FeaturedProducts = lazy(() => import('./components/main_content/FeaturedProducts'))
const Products = lazy(() => import('./components/main_content/Products'))
const Users = lazy(() => import('./components/main_content/Users'))
const UserDetails = lazy(() => import('./components/main_content/UserDetails'))
const Admin = lazy(() => import('./components/main_content/Admin'))
const Login = lazy(() => import('./components/auth/Login'))
const Profile = lazy(() => import('./components/main_content/Profile'))
const SignUp = lazy(() => import('./components/auth/SignUp'))

const NoMatch = lazy(() => import('./components/404_page/NoMatch'))
const LazyAbout = lazy(() => import('./components/main_content/About'))

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
    <AuthProvider>
    <Suspense className="loader" fallback={<LoaderMain></LoaderMain>}>
      <Navbar />
      </Suspense>
      <Routes>
        <Route path='/' element={        
        <Suspense className="loader" fallback={<LoaderMain></LoaderMain>}>
        <Home />
      </Suspense>
        } />
        <Route path='/login' element={      
        <Suspense className="loader" fallback={<LoaderMain></LoaderMain>}>
          <Login />
      </Suspense>
        } />
        <Route
          path='/profile'
          element={
            <RequireAuth>
                 <Suspense className="loader" fallback={<LoaderMain></LoaderMain>}>
                 <Profile />
      </Suspense>           
            </RequireAuth>
          }
        />
        <Route
          path='about'
          element={
            <Suspense className="loader" fallback={<LoaderMain></LoaderMain>}>
              <LazyAbout />
            </Suspense>
          }
        />
         <Route path='sign-up' element={         
         <Suspense className="loader" fallback={<LoaderMain></LoaderMain>}>
       <SignUp />
</Suspense>    
         } />
        <Route path='order-summary' element={      
        <Suspense className="loader" fallback={<LoaderMain></LoaderMain>}>
        <OrderSummary />
 </Suspense>   
        } />
        <Route path='products' element={    
        <Suspense className="loader" fallback={<LoaderMain></LoaderMain>}>
         <Products />
        </Suspense> 
        }>
              <Route index element={<Suspense className="loader" fallback={<LoaderMain></LoaderMain>}><FeaturedProducts /></Suspense>} />
              <Route path='featured' element={<Suspense className="loader" fallback={<LoaderMain></LoaderMain>}><FeaturedProducts /></Suspense>} />
              <Route path='new' element={<Suspense className="loader" fallback={<LoaderMain></LoaderMain>}><NewProducts /></Suspense>} />
        </Route>
        <Route path='users' element={ <Suspense className="loader" fallback={<LoaderMain></LoaderMain>}><Users /></Suspense>}>
          <Route path=':userId' element={ <Suspense className="loader" fallback={<LoaderMain></LoaderMain>}><UserDetails /></Suspense>} />
          <Route path='admin' element={<Suspense className="loader" fallback={<LoaderMain></LoaderMain>}><Admin /></Suspense>} />
        </Route>      
        <Route path='*' element={
          <Suspense className="loader" fallback={<LoaderMain></LoaderMain>}>
        <NoMatch />
        </Suspense>
        } 
        />     
      </Routes>
    </AuthProvider>
    </div>
    </Provider>
  )
}

export default App