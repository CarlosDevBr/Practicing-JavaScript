function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Carlos', 'Admin');
usuarios.set('Vicent', 'User');
usuarios.set('Ada', 'Admin');

console.log(getAdmins(usuarios));