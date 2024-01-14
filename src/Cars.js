import React from 'react'
import Car from './Car';
import { useAxios } from './useAxios';

function Cars() {
    const url = 'users';
    const method = 'get';

    const { response, error, isLoading } = useAxios(url, method,);
    console.log({response})
    console.log({error})
    console.log({isLoading})
    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            {response && response.map((carItem) => {
                return (
                    <Car key={carItem._id} carItem={carItem} />
                )
            })}
        </div>
    );
}

export default Cars

