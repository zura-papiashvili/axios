import React from 'react'
import User from './User';
import { useAxios } from './useAxios';

function Users() {
    const url = 'task';
    const method = 'get';

    const { response, error, isLoading } = useAxios(url, method);
    console.log(response)
    
    return (
      <div className="users">
        {isLoading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        {response &&
          response.map((userItem) => {
            return <User userItem={userItem} />;
          })}
      </div>
    );
}

export default Users

