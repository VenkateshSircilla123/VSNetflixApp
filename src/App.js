import './App.css';
import Homescreen from './screens/Homescreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { useDispatch , useSelector} from 'react-redux'
import { selectUser , login, logout} from './features/userSlice';
import React from 'react';
import { auth } from './firebase';
import ProfileScreen from './screens/ProfileScreen';
import MyListScreen from './screens/MyListScreen';
import MyList from './screens/MyList';
import Search from './Search';


function App() {
  
  const dispatch = useDispatch()
  const user = useSelector(selectUser);

  React.useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //Logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
          })
        )
      } else {
        //logged out
        dispatch(logout())
      }
    });
    return unSubscribe;
  },[dispatch])
  return (
    <div className="app">
      <BrowserRouter>
      {!user ? (<LoginScreen />) :
      (<Routes>
        <Route exact path='/' element={<Homescreen />} />
        <Route path='/profile' element={<ProfileScreen />} />
        {/* <Route exact path='/myList' element={<MyListScreen />} /> */}
        <Route exact path='/myList' element={<MyList />} />
        <Route exact path='/search' element={<Search />} />


        </Routes>
      )}
      
    </BrowserRouter>

    </div>
  );
}

export default App;
