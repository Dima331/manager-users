const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

exports.addUser = (req, res) => {
    if (!req.body) {
        return res.status(400).send("No data");
    }

    const { email, login, password } = req.body;
    const userFindQuery = "SELECT * FROM users WHERE login=?";

    db.query(userFindQuery,
        [login], async (err, data) => {
            if (err) { return res.status(500).send(err); }

            if (data.length > 0) {
                return res.status(400).json({ message: 'There is such a user' });
            } else {
                const userAddQuery = "INSERT INTO users (login, email, password, status, date_registration, date_last_login) VALUES (?,?,?,?,?,?)";
                const hashedPassword = await bcrypt.hash(password, 12);
                let nowTime = new Date();
                nowTime = nowTime.toLocaleString();

                db.query(userAddQuery,
                    [login, email, hashedPassword, 1, nowTime, nowTime], (err, data) => {
                        if (err) { return res.status(500).send(err); }

                        const token = jwt.sign(
                            { userLog: login },
                            config.get('jwtSecret'),
                            { expiresIn: '1h' }
                        );
                        return res.json({ token, userLog: login, userId: data.insertId, status: true });
                    });
            }
        });
}
