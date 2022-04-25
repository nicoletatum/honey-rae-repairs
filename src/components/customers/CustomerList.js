import React, { useEffect, useState } from "react"

export const CustomerList = () => {
    const [customers, updatedCustomers] = useState([])

    useEffect(
    //^basically an event listener
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                //set to js
                .then((customerArray) => { 
                    updatedCustomers(customerArray)
                    //customers have been pulled from API and are now set in customer array
                })
        },
        [] 
    )

    return (
        <>
        {
            customers.map(
                (customerObject) => {
                    return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                }
            )
        }
        </>
    )
}