import { useEffect, useState } from "react";

function Users() {

    const [UserList, SetUserList] = useState([]);
    const [pending, setPending]  = useState(true);

    async function fetchUserList() {
        try{
            setPending(true);
            const apiResponse = await fetch('https://dummyjson.com/users');
            const result = await apiResponse.json();

            if(result?.users){
                setPending(false);
                SetUserList(result?.users)
            }else{
                setPending(true);
                SetUserList([]);
            }
    
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchUserList();
    },[])

    console.log(UserList);

    if(pending) return <h1>Fetching Users. Please wait...</h1>
  return (
    <div>
      <h1>List of All Users</h1>
      <ul>
        {
            UserList && UserList.length > 0 ?
            UserList.map((userItem) => <li key={userItem.id}>{userItem.firstName}</li>) : <h4>No Users Found</h4>
        }
      </ul>
    </div>
  );
}

export default Users;
