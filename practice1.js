const user = {
    name: "John",
    id: 1,
    isOnline: false,
    permissions: ["read", "write", "delete"]
}


let {name, id, isOnline, permissions} = user


const html = permissions.map(permission => {
    return `<li>${permission}</li>`
}).join(' ')

console.log(html)
console.log(name, id, isOnline, permissions)

const togglelogin = (userObj) => {
    return userObj.isOnline = !userObj.isOnline
}

console.log(isOnline)

if(permissions.includes('delete')){
    console.log('permissions include delete')
}

console.log(permissions.join(', '))
console.log(togglelogin(user))