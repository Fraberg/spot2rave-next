import axios from 'axios'

const url = 'api/users/'

class UserService {
    // get users
    // static so that we don't have to instantiate the class
    static getConnectedUsers() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data
                resolve(
                    data.map(user => ({
                        ...user,
                        createdAt: new Date(user.createdAt),
                        updatedAt: new Date(user.updatedAt)
                    }))
                )
            })
            .catch((err)=> {
                reject(err)
            })
            
        })
    }
}

export default UserService