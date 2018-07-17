// Server
const express       = require('express');
const app           = express();
const bodyParser    = require('body-parser');
// Conexion Database
var mongoose        = require('mongoose');
// Request Web
const cors          = require('cors');
// Handler Directories
// const path    = require('path');

// Routes
// /api/master
const typesRoutes        = require('./routes/master_detail/types-animals-route');
const typeBreedRoutes    = require('./routes/master_detail/types-breeds-route');
const typeDonationRoutes = require('./routes/master_detail/types-donations-route');
const typeObjectRoutes   = require('./routes/master_detail/types-objects-route');
const typeMedicineRoutes = require('./routes/master_detail/types-medicines-route');
const typeRolesRoutes    = require('./routes/master_detail/types-roles-route');
const typeComplaintRoutes= require('./routes/master_detail/types-complaints-route');
const typeRhRoutes       = require('./routes/master_detail/types-rhs-route');

const donationMedicineRoutes = require('./routes/donation_types/donation-medicine-route');
const donationFoodRoutes  = require('./routes/donation_types/donation-food-route');
const donationBloodRoutes  = require('./routes/donation_types/donation-blood-route');
const donationObjectRoutes  = require('./routes/donation_types/donation-object-route');
const donationMoneyRoutes  = require('./routes/donation_types/donation-money-route');

const userRoutes     = require('./routes/user-route');
const animalRoutes   = require('./routes/animal-route');
const generateRoutes = require('./routes/donation-route');
const complaintRoutes   = require('./routes/complaint-route');

const adoptionRoutes = require('./routes/adoption-route')
const loginRoutes    = require('./routes/auth/login')

// Database
mongoose.connection.openUri('mongodb://localhost:27017/adoptame', 
(error, response) => {
    if(error) throw error;
    console.log('Database: \x1b[32m%s\x1b[0m',' Online');
})


// Middleware
app.use(cors())
// Body parser
app.use(bodyParser.json())
// Parse application/x-www-form-urleconded
app.use(bodyParser.urlencoded({ extended: false }))


// Routes
app.use('/api/master/type', typesRoutes);
app.use('/api/master/breed', typeBreedRoutes);
app.use('/api/master/donation', typeDonationRoutes);
app.use('/api/master/objects', typeObjectRoutes);
app.use('/api/master/medicine', typeMedicineRoutes);
app.use('/api/master/roles', typeRolesRoutes);
app.use('/api/master/complaint', typeComplaintRoutes);
app.use('/api/master/rh', typeRhRoutes);

app.use('/complaints', complaintRoutes);

app.use('/register/users', userRoutes);
app.use('/register/animals', animalRoutes);

app.use('/donation/type-food', donationFoodRoutes);
app.use('/donation/type-blood', donationBloodRoutes);
app.use('/donation/type-object', donationObjectRoutes);
app.use('/donation/type-money', donationMoneyRoutes);
app.use('/donation/type-medicine', donationMedicineRoutes);

app.use('/login', loginRoutes)

app.use('/generate/donation', generateRoutes);
app.use('/request/adoption', adoptionRoutes);


app.get('/', (req, res)=> { res.send('Ok in index'); })


// Settings
app.set('port', process.env.PORT || 3000);

// Start Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})