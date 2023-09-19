import React, { useState } from "react";


function AgeCounter() { 
    const [user, setUser] = useState({
        name: "Bob",
        age: 17,
        city: "Berlin",
      });
    
    
    function incrementAge() {
        setUser((prevUser) => ({ ...prevUser, age: prevUser.age + 1 }))
        console.log(user);
        {JSON.stringify(user)}
        console.log(user.age)

      }


return (
    <div> 
<button onClick={incrementAge}>Age</button>
    
      </div>
)

 }



  export default AgeCounter;