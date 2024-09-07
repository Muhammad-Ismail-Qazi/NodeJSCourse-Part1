const express = require('express');
const mongoose = require('mongoose');
const users = require("../MOCK_DATA.json");
const fs = require('fs');

const app = express();
const port = 1000;

console.log("API Integration in MongoDB");

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Connection to the database with help of mongoose
mongoose.connect("mongodb://127.0.0.1:27017/NodeJSCourse")
    .then(() => { console.log("Connection established") })
    .catch((error) => { console.log("Error connecting", error) });

// Schema for user
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
    },
    gender: String,
    job_title: String,
});

const userModel = mongoose.model('user', userSchema);

// Post API with MongoDB
app.post("/api/users/post", async (req, res) => {
    const body = req.body;



    try {
        const result = await userModel.create({
            firstName: body.first_name,
            lastName: body.last_name,
            email: body.email,
            gender: body.gender,
            job_title: body.job_title,
        });


        return res.status(201).send({ status: 'success' });
    } catch (error) {
        return res.status(500).send({ status: 'error', message: error.message });
    }
});

// Get API with MongoDB

app.get("/api/users/get", async (req, res) => {
    try {
        const usersData = await userModel.find({});
        return res.status(200).json({
            status: 'success',
            data: usersData
        });
    } catch (error) {
        return res.status(404).json({
            status: 'error',
            message: error.message
        });
    }
});


app.get('/api/users/get/html', async (req, res) => {
    try {
        const usersData = await userModel.find({});

        const html = `
            <html>
                <body>
                    <h1>User List</h1>
                    <ul>
                        ${usersData.map(user => `<li>${user.firstName} ${user.lastName}</li>`).join('')}
                    </ul>
                </body>
            </html>
        `;

        res.send(html);
    } catch (error) {
        res.status(500).send("Error fetching users");
    }
});


//get single user 

app.get("/api/users/get/:id", async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        if (!user) return res.status(404).send("User not found");
        return res.json({
            status: "success",
            data: user
        });
    } catch (error) {
        return res.status(500).send("Error fetching user");
    }
});


// patch api with mongo

app.patch('/api/users/patch/:id', async function (req, res) {
    await userModel.findByIdAndUpdate(req.params.id, { lastName: "changed" });
    return res.json({ status: 'success', message: 'User last name updated' });

});

//delete api with mongo

app.delete('/api/users/delete/:id', async function (req, res) {
    const user = await userModel.findByIdAndDelete(req.params.id,);
    return res.json({
        status: 'success', message: 'User deleted', data: user

    });
});



app.listen(port, () => {
    console.log("Server listening on port:", port);
});
