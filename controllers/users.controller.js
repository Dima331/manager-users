const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')

exports.loginUser = (req, res) => {
    if (!req.body) {
        return res.status(400).send("No data.");
    }

    const { login, password } = req.body
    const userFindQuery = "SELECT * FROM users WHERE login=?";

    db.query(userFindQuery, [login], async (err, data) => {
        if (err) { return res.status(500).send(err); }
        const user = data[0]
        if (data.length === 0) {
            return res.json({ message: 'There is no such user' });
        } else {
            console.log(user.password)
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.status(400).json({ message: "Error pass and log" })
            }
            if(!user.status){
                return res.status(400).json({ message: "This user was block" })
            }
            const newDataLogin = new Date();
            const dataChangeQuery = "UPDATE users SET date_last_login=? WHERE id=?"
            db.query(dataChangeQuery, [+newDataLogin, user.id], (err, data) =>{
                if (err) { return res.status(500).send(err); }

                const token = jwt.sign(
                    { userLog: login },
                    config.get('jwtSecret'),
                    { expiresIn: '1h' }
                )
                return res.json({ token, userLog: login, status: true })
            })
        }
    })
}
exports.getUsers = (req, res) => {
    const getUsersQuery = "SELECT id, email, login, date_last_login, date_registration, status  FROM users"; 
    
    db.query(getUsersQuery, (err, data) => {
        if (err) { return res.status(500).send(err); }

        return res.json(data)
    });
};

// app.get("/api/auth/register", (req, res) => {
//   db.query("SELECT * FROM users", function (err, data) {
//     if (err) return console.log(err);
//     console.log(data)
//   });
// });
