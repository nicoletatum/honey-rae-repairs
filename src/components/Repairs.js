import React, { useEffect, useState } from "react"

export const Repairs = () => {
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
        <h1>Honey Rae's Repair Shop</h1>

        {
            customers.map(
                (customerObject) => {
                    return <h2>{customerObject.name}</h2>
                    return <h2>{customerObject.address}</h2>
                }
            )
        }
        </>
    )
}