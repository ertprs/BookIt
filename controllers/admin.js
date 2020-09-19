const User = require('../models/user');

module.exports.appointmentList = (req, res) => {
    return res.render('a-appointment-list', {
        title: 'Appointment List'
    })
}
module.exports.applicationRequest = async(req, res) => {
    let user = await User.find({ step3: true });
    return res.render('a-application-request', {
        title: 'Application Request',
        user: user
    })
}
module.exports.approveDocuments = async(req, res) => {
    let users = await User.findById(req.body.id);
    let user = await User.find({ step3: true });
    users.approve = true;
    users.save();
    return res.render('a-application-request', {
        title: 'Application Request',
        user: user
    })
}
module.exports.blankPage = (req, res) => {
    return res.render('a-blank-page', {
        title: 'Blank Page'
    })
}
module.exports.componentsList = (req, res) => {
    return res.render('a-components', {
        title: 'Components'
    })
}
module.exports.dataTables = (req, res) => {
    return res.render('a-data-tables', {
        title: 'Data Tables'
    })
}
module.exports.doctorList = async(req, res) => {

    let user = await User.find({ type: "Doctor" });
    return res.render('a-doctor-list', {
        title: 'Doctor List',

        doctors: user
    })
}
module.exports.error404 = (req, res) => {
    return res.render('a-error-404', {
        title: 'Error 404'
    })
}
module.exports.error500 = (req, res) => {
    return res.render('a-error-500', {
        title: 'Error 500'
    })
}
module.exports.forgotPassword = (req, res) => {
    return res.render('a-forgot-password', {
        title: 'Forgot Password'
    })
}
module.exports.formBasicInputs = (req, res) => {
    return res.render('a-form-basic-inputs', {
        title: 'Form Basic Inputs'
    })
}
module.exports.formHorizontal = (req, res) => {
    return res.render('a-form-horizontal', {
        title: 'Form horizontal'
    })
}
module.exports.formInputGroups = (req, res) => {
    return res.render('a-form-input-groups', {
        title: 'Form Input Group'
    })
}
module.exports.formMask = (req, res) => {
    return res.render('a-form-mask', {
        title: 'Form Mask'
    })
}
module.exports.formVertical = (req, res) => {
    return res.render('a-form-vertical', {
        title: 'Form Vertical'
    })
}
module.exports.index = async(req, res) => {
    let doctors = await User.find({ type: "Doctor" });
    let patients = await User.find({ type: "Patient" });
    return res.render('a-index', {
        title: 'Index List',
        doctors: doctors,
        patients: patients
    })
}
module.exports.formValidation = (req, res) => {
    return res.render('a-form-validation', {
        title: 'Form Validation'
    })
}
module.exports.invoice = (req, res) => {
    return res.render('a-invoice', {
        title: 'Invoice List'
    })
}
module.exports.invoiceReport = (req, res) => {
    return res.render('a-invoice-report', {
        title: 'Invoice Report'
    })
}
module.exports.lockScreen = (req, res) => {
    return res.render('a-lock-screen', {
        title: 'lock Screen'
    })
}
module.exports.login = (req, res) => {
    return res.render('a-login', {
        title: 'Login '
    })
}
module.exports.patientList = async(req, res) => {
    let user = await User.find({ type: "Patient" });
    return res.render('a-patient-list', {
        title: 'Patient List',
        patients: user
    })
}
module.exports.profile = async(req, res) => {
    let user = await User.findById(req.query.id);
    return res.render('a-profile', {
        title: 'Profile',
        user: user
    })
}
module.exports.register = (req, res) => {
    return res.render('a-register', {
        title: 'Register'
    })
}
module.exports.reviews = (req, res) => {
    return res.render('a-reviews', {
        title: 'Reviews'
    })
}
module.exports.settings = (req, res) => {
    return res.render('a-settings', {
        title: 'Setting'
    })
}
module.exports.tablesBasic = (req, res) => {
    return res.render('a-tables-basic', {
        title: 'tablesBasic'
    })
}
module.exports.specialities = (req, res) => {
    return res.render('a-specialities', {
        title: 'Specialities List'
    })
}
module.exports.transactionsList = (req, res) => {
    return res.render('a-transactions-list', {
        title: 'Transactions List'
    })
}