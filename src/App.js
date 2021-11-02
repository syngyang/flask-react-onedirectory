import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([{}])

  useEffect(()=>{
    fetch("/api").then(res=>res.json()).then(data=>{
      setData(data);
      console.log(data);
    })
  },[]);
  return (

   <div>
      {( typeof data.users == "undefined") 
          ? (<p>Loading</p> )
          :(data.users.map((user, i)=> (
          <p key={i}>{user.title} 
            <span >
              <b style={{marginLeft:"5px"}}>user Id : {user.userId}</b>
            </span>
          </p>
          )))
      }
    </div>
  );
}

export default App;
