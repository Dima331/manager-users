exports.getUsers = (req, res) => {
    const getUsersQuery = "SELECT id, email, login, date_last_login, date_registration, status  FROM users";

    db.query(getUsersQuery, (err, data) => {
        if (err) { return res.status(500).send(err); }

        return res.json(data)
    });
};

exports.deleteUsers = (req, res) => {
    const id = req.body;
    const deleteUserQuery = 'DELETE FROM users WHERE id=?';

    id.forEach(element => {
        db.query(deleteUserQuery, [element], (err, data) => {
            if (err) return console.log(err);
        })
    });
    return res.status(201).json({ result: 'deleted' });
}