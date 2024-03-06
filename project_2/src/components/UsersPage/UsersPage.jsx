import { useEffect,useState } from "react"
import './UsersPage.css'
export default function UsersPage(){

    const[users,setUsers] = useState([])
    async function fetchUsers(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setUsers(users);
    }
    useEffect(() => {
        fetchUsers()
    },[])

    const[searchQuery,setSearchQuery] = useState("");
    const searchUsers = users.filter(
        (item) => item.name.toLowerCase().includes(searchQuery)
    )

   
    return(
        <>
            <h2>Пользователи</h2>
            <input type="search" placeholder="Поиск" onChange={(e) => setSearchQuery(e.target.value)}/>
            {
                searchUsers.length ?
                searchUsers.map((user) => {
                    return(
                        <>
                            <li>{user.name}</li>
                        </>
                    )
                })
            :
            <p>По запросу {searchQuery} ничего не найдено</p>
            }
        </>
    )
}