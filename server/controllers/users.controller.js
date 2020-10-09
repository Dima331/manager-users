exports.getUsers = (req, res) => {
    const getUsersQuery = "SELECT id, email, login, date_last_login, date_registration, status  FROM users";

    db.query(getUsersQuery, (err, data) => {
        if (err) { return res.status(500).send(err); }

        return res.json(data);
    });
};

exports.deleteUsers = (req, res) => {
    const id = req.body;
    const deleteUserQuery = 'DELETE FROM users WHERE id=?';

    id.forEach(element => {
        db.query(deleteUserQuery, [element], (err, data) => {
            if (err) return console.log(err);
        });
    });
    return res.status(201).json({ result: 'deleted' });
}

exports.blockUsers = (req, res) => {
    const id = req.body;
    const blockUserQuery = 'UPDATE users SET status=? WHERE id=?';
    const status = 0;

    id.forEach(element => {
        db.query(blockUserQuery, [status, element], (err, data) => {
            if (err) return console.log(err);
        });
    });
    return res.status(201).json({ result: 'changed' });
}
exports.unBlockUsers = (req, res) => {
    const id = req.body;
    const blockUserQuery = 'UPDATE users SET status=? WHERE id=?';
    const status = 1;

    id.forEach(element => {
        db.query(blockUserQuery, [status, element], (err, data) => {
            if (err) return console.log(err);
        });
    });
    return res.status(201).json({ result: 'changed' });
}
