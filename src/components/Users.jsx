import React, { useEffect, useState } from "react";
import {
    Select,
    InputGroup,
    Input ,
    Button,
    useDisclosure,
    Lorem
} from "@chakra-ui/react"



const UsersContext = React.createContext({
    users: [], fetchUsers: () => {}
})




function AddUser() {
    const [username, setUsername] = React.useState("")
    const {users, fetchUsers} = React.useContext(UsersContext)

    const handleInput = event => {
        setUsername(event.target.value)

    }


    const handleSubmit = (event) => {
        const newUser = {
            "password": "string",
            "username": username,
            "email": username,
            "first_name": "string",
            "last_name": "string",
            "id": users.length + 1
        }

        fetch("http://localhost:8000/create-user", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newUser)
        }).then(fetchUsers)
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputGroup size="md">
                <Input
                    pr="4.5rem"
                    type="text"
                    placeholder="Add User"
                    aria-label="Add User"
                    onChange={handleInput}
                />
            </InputGroup>
        </form>
    )
}
function DeleteUser() {
    const {fetchUsers} = React.useContext(UsersContext)

    const deleteUser = async () => {
        await fetch(`http://localhost:8000//delete-user//`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },

        })
        await fetchUsers()
    }

    return (
        <Button h="1.5rem" size="sm" onClick={deleteUser}>Delete</Button>
    )
}

export default function GetUsersList() {
    const [users, setUsers] = useState([])
    const fetchUsers = async () => {
        const response = await fetch("http://localhost:8000/get-user-list")
        const users = await response.json()
        setUsers(users.data)
    }
    useEffect(() => {
        fetchUsers().then()
    }, [])


        return (
            <UsersContext.Provider value={{users, fetchUsers}}>
                <AddUser />
                <Select placeholder="Select user">
                    {users.map((user) => (
                        <option key={user.id}>{user.username}</option>

                    ))}
                </Select>
                <DeleteUser />
            </UsersContext.Provider>
        )
}