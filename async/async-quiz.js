const id = prompt('enter your id')
const password = prompt('enter your password')

class UserStorage {

    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'hellcat' && password === 'hell') ||
                    (id === 'coder' && password === 'world')
                ) {
                    resolve(id)
                } else {
                    reject(new Error('not found'))
                }
            }, 2000);
        })
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'hellcat') {
                    resolve({
                        name: 'hellcat',
                        role: 'admin'
                    })
                } else {
                    reject(new Error('no access'))
                }
            }, 1000);
        })
    }
    async userInfo(id, password) {
        const user = await this.loginUser(id, password);
        const userRole = await this.getRoles(user);
        alert(`Hello ${userRole.name}, you have ${userRole.role} role`);
    }
}
const userStorage = new UserStorage()
userStorage
    .userInfo(id, password)
    .catch(console.log)
    .then(console.log)