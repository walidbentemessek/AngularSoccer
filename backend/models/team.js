const mongoose = require('mongoose');
const teamShema = mongoose.Schema({
    
    teamName:String,
    dateOfCreation:String,
    country:String,
    investment:String,
    img:String


});

const team = mongoose.model('Team',teamShema);
module.exports = team;