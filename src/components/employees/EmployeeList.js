import React, {useEffect, useState } from "react"

export const EmployeeList = () => {
    const [employees, updatedEmployees] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((employeeArray) => {
                    updatedEmployees(employeeArray)
                })
        },
        []
    )

    return ( 
        <>
        {
            employees.map(
                (employeeObject) => {
                    return <p key={`employee--${employeeObject.id}`}>{employeeObject.name}</p>
                }
            )
        }
        </>
    )
}
