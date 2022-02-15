const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const bcrypt = require('bcrypt');
const path = require('path');
const Match = require('./models/match');
const Player = require('./models/player');
const Team = require('./models/team');
const Contact = require('./models/contact');
const User = require('./models/user')
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const { log } = require('console');
const { default: user } = require('../../../formation/server/models/user');

// Configuration //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/images', express.static(path.join('backend/images')))

// Connect in Data Base Server "soccerDB" // 
mongoose.connect('mongodb://localhost:27017/soccerDB', { useNewUrlParser: true, useUnifiedTopology: true });
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}
const storage = multer.diskStorage({
    // destination  
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },

    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' + extension;
        cb(null, imgName);
    }
});

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
// traitement logique de get all matches
app.get('/api/allMatches', (req, res) => {
    Match.find((err, docs) => {
        // console.log('here get all matches', req.body);
        if (err) {
            console.log('Error in DB');
        } else {
            res.status(200).json({
                matches: docs
            });
        }
    });
    //   console.log('Hello in BE to get all matches');
});

// traitement logique de get match by id
app.get('/api/allMatches/:id', (req, res) => {
    console.log('here get match by id');
    console.log('my id is', req.params.id);
    Match.findOne({ _id: req.params.id }).then(
        (doc) => {
            console.log('here get match by id', doc);
            res.status(200).json({
                match: doc
            })
        });

});

// traitement logique de add match
app.post('/api/addMatch', (req, res) => {
    console.log('here add match', req.body);
    let match = new Match({
        teamOne: req.body.teamOne,
        teamTwo: req.body.teamTwo,
        scoreOne: req.body.scoreOne,
        scoreTwo: req.body.scoreTwo
    });
    match.save();

    res.status(200).json({
        message: ('match added successfully')
    })
})

// traitement logique de edit match
app.put('/api/editMatch/:id', (req, res) => {
    console.log('here edit match', req.params.id);
    console.log('here edit match', req.body);
    let match = {
        _id: req.body.id,
        teamOne: req.body.teamOne,
        teamTwo: req.body.teamTwo,
        scoreOne: req.body.scoreOne,
        scoreTwo: req.body.scoreTwo
    }
    Match.updateOne({ _id: req.body.id }, match).then(
        (result) => {
            // console.log('here edit match', result);
            if (result) {
                res.status(200).json({
                    message: 'match edited successfully'
                })
            }
        })



});

// traitement logique de delete match
app.delete('/api/deleteMatch/:id', (req, res) => {
    console.log('here delete match', req.params.id);
    Match.deleteOne({ _id: req.params.id }).then(
        (result) => {
            console.log('result delete', result);
            if (result) {
                res.status(200).json({
                    message: ('match deleted successfully')
                });
            }
        });

});

// traitement logique de add player
app.post('/api/addPlayer', multer({ storage: storage }).single('img'), (req, res) => {
    console.log('here add player', req.body);
    console.log('Protocol', req.protocol);
    console.log('Host', req.get('host'));
    let url = req.protocol + '://' + req.get('host');
    console.log('here URL', url);
    let player = new Player({
        name: req.body.name,
        age: req.body.age,
        team: req.body.team,
        post: req.body.post,
        numero: req.body.numero,
        price: req.body.price,
        img: url + '/images/' + req.file.filename
    })
    player.save();
    res.status(200).json({
        message: 'player added successfully'
    })
});

// traitement logique de get all players
app.get('/api/allPlayers', (req, res) => {
    console.log('here get all players', req.body);
    Player.find((err, docs) => {

        if (err) {
            console.log('Error in DB');
        } else {
            res.status(200).json({
                players: docs
            });
        }


    });

});

// traitement logique de get player by id
app.get('/api/allPlayers/:id', (req, res) => {
    console.log('here get player by id');
    console.log('my id is', req.params.id);
    Player.findOne({ _id: req.params.id }).then(
        (doc) => {
            console.log('here get player by id', doc);
            res.status(200).json({
                player: doc
            })
        });
});

// traitement logique de delete player
app.delete('/api/deletePlayer/:id', (req, res) => {
    console.log('here delete player', req.params.id);
    Player.deleteOne({ _id: req.params.id }).then(
        (result) => {
            console.log('result delete', result);
            if (result) {
                res.status(200).json({
                    message: ('player deleted successfully')
                });
            }
        });

});

// traitement logique de Edit player
app.put('/api/editPlayer/:id', (req, res) => {
    console.log('here edit player', req.params.id);
    console.log('here edit p', req.body);

    let player = {
        _id: req.params.id,
        name: req.body.name,
        age: req.body.age,
        team: req.body.team,
        post: req.body.post,
        numero: req.body.numero,
        price: req.body.price
    }
    Player.updateOne({ _id: req.params.id }, player).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: 'successfull edit player'
                });
            }
        });
});

// traitement logique de add team
app.post('/api/addTeam', multer({ storage: storage }).single('img'), (req, res) => {
    console.log('here add team', req.body);
    console.log('Protocol', req.protocol);
    console.log('Host', req.get('host'));
    let url = req.protocol + '://' + req.get('host');
    console.log('here URL', url);
    let team = new Team({
        teamName: req.body.teamName,
        dateOfCreation: req.body.dateOfCreation,
        country: req.body.country,
        investment: req.body.investment,
        img: url + '/images/' + req.file.filename

    });
    team.save();
    res.status(200).json({
        message: 'team added successfully'
    });
});

// traitement logique de get all teams
app.get('/api/allTeams', (req, res) => {
    console.log('get all teams', req.body);
    Team.find((err, docs) => {

        console.log('here all teams', docs);
        if (err) {
            console.log('error teams');
        } else {
            res.status(200).json({
                teams: docs
            });
        }
    });
});

// traitement logique de delete team
app.delete('/api/deleteTeam/:id', (req, res) => {
    console.log('here delete team', req.params.id);
    Team.deleteOne({ _id: req.params.id }).then(
        (result) => {
            console.log('team deleted is:', result);
            if (result) {
                res.status(200).json({
                    message: 'team deleted successfully'
                })
            }
        }
    )
}
)

// traitement logique de get team by id
app.get('/api/allTeam/:id', (req, res) => {
    console.log('here get team by id', req.params.id);
    Team.findOne({ _id: req.params.id }).then(
        (doc) => {
            console.log('team by id:', doc);
            res.status(200).json({
                team: doc
            });
        });

});

// traitement logique de Edit team
app.put('/api/editTeam/:id', (req, res) => {
    console.log('here edit team', req.params.id);
    let team = {
        id: req.params.id,
        teamName: req.body.teamName,
        dateOfCreation: req.body.dateOfCreation,
        country: req.body.country,
        investment: req.body.investment

    };
    Team.updateOne({ _id: req.params.id }, team).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: 'team edited successfully'
                });
            }

        });
});

// traitement logique de search by country
app.post('/api/searchByCountry', (req, res) => {
    console.log('Country', req.body);
    Team.find({ country: { $regex: `.*${req.body.country}`}}).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    findedByCountry: result

                })

            }
        }
    )
});

// traitement logique de send message
app.post('/api/sendMessage', (req, res) => {
    console.log('here message', req.body);
    let contact = new Contact({
        teamId: req.body.teamId,
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        tel: req.body.tel,
        textArea: req.body.textArea
    })
    contact.save();
    res.status(200).json({
        message: 'Message sended'
    })
});

// traitement logique de signup
app.post('/api/signup', (req, res) => {
    console.log('here sign up', req.body);
    bcrypt.hash(req.body.password, 10).then(cryptedpassword => {
        let user = new User({

            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: cryptedpassword,
            // confPassword: req.body.confPassword,
            tel: req.body.tel
        });
        user.save();
        res.status(200).json({
            message: 'user added successfully'
        });

    })

});

// traitement logique de Login
app.post('/api/login', (req, res) => {

    console.log('user login', req.body);
    User.findOne({ email: req.body.email }).then(
        (resultEmail) => {
            console.log('resultEmail', resultEmail);

            if (!resultEmail) {
                res.status(200).json({
                    message: '0'
                });
            }
            return bcrypt.compare(req.body.password, resultEmail.password);
        })
        .then((resultPwd) => {
            console.log('resultPwd', resultPwd);
            if (!resultPwd) {
                res.status(200).json({
                    message: '1'
                });


            } else {
                res.status(200).json({
                    message: '2'
                    
                });
            
            }
        });

});

// traitement logique de get all users
app.get('/api/allUsers', (req, res) => {
    console.log('get all users', req.body);
    User.find((err, docs) => {

        console.log('here all users', docs);
        if (err) {
            console.log('error users');
        } else {
            res.status(200).json({
                users: docs
            });
        }
    });
});

// traitement logique de delete user
app.delete('/api/deleteUser/:id', (req, res) => {
    console.log('here delete user', req.params.id);
    User.deleteOne({ _id: req.params.id }).then(
        (result) => {
            console.log('user deleted is:', result);
            if (result) {
                res.status(200).json({
                    message: 'user deleted successfully'
                })
            }
        }
    )

})

// traitement logique de get all messages
app.get('/api/allMessages', (req, res) => {
    Contact.find((err, docs) => {
        console.log('here message', docs);
        if (err) {
            console.log('Error to get messages');

        } else {

            res.status(200).json({
                messages: docs
            })

        }
    })
})
module.exports = app;