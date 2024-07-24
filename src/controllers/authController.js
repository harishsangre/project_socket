const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const users = [
    { id: 1, username: 'user1', password: bcrypt.hashSync('password1', 8) },
    { id: 2, username: 'user3', password: bcrypt.hashSync('password2', 8) }
];

exports.login = (req, res) => {

    const { username, password } = req.body

    const user = users.find(u => u.username === username)

    if (!user) {
        return res.status(400).send({ message: 'user not found' })
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password)

    if (!passwordIsValid) {
        return res.status(401).send({ token: null, message: 'Invalid Password' });
    }

    const token = jwt.sign({ id: users.id }, 'secret', { expiresIn: 86400 })

    res.status(200).send({ token });
}