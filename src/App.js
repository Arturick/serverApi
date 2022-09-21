import React, {useEffect, useState} from 'react'
import AdminPanel from './components/AdminPanel';
import {isAuthorizated} from './components/queries/userQueires';
import Auth from './components/pages/Auth';

function App() {
  const [userLogined, setUserLogined] = useState(false)
  
  useEffect(() => {
    isAuthorizated().then((response) => {
      if(response.data.user)
        setUserLogined(true)
    })
  }, [])

  return (
    <div className="App">
      {userLogined ? <AdminPanel/> : <Auth/>}
      
    </div>
  );
}

export default App;
