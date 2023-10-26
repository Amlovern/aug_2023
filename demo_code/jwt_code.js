const jwt = require('jsonwebtoken');

let password = 'supersecrettotallygoodpassword'

let payload = {
    firstName: 'Anthony',
    lastName: 'Lovern'
}

const createToken = (payload) => {
    const token = jwt.sign(payload, password);

    return token
}

let token = createToken(payload)

console.log(token)
// password='incorrectpass'
// payload = {
//     firstName: 'Lovern',
//     lastName: 'Anthony'
// }
// token = token + 'hello'

const verifyToken = (token) => {
    const verified = jwt.verify(token, password, (err) => {
        if (err) console.log(err)
        console.log('inside cb func')
    })

    return verified
}

console.log(verifyToken(token))