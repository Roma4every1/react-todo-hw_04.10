import { user } from "../../../models/user";

export const getUsers = async():Promise<user[]> => {
const response = await fetch("https://jsonplaceholder.typicode.com/users")
const data = await response.json()
return data.map( (dataItem:user) => ({id: dataItem.id, name: dataItem.name }))
}