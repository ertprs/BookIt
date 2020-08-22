const config = require('../config/twilio');
const Patient = require("../models/patient");
const Doctor = require('../models/doctor');
const client = require('twilio')(config.accountSID, config.authToken);

module.exports.home = (req, res) => {
    return res.render('index', {
        title: 'Home'
    })
}

module.exports.addBilling = (req, res) => {
    return res.render('add-billing', {
        title: 'Add Billing'
    })
}
module.exports.addPrescription = (req, res) => {
    return res.render('add-prescription', {
        title: 'Add Prescription'
    })
}
module.exports.Specialist = (req, res) => {
    return res.render('specialist', {
        title: 'Specialist Doctor'
    })
}

module.exports.appointments = (req, res) => {
    return res.render('appointments', {
        title: 'Appointments'
    })
}

module.exports.blankPage = (req, res) => {
    return res.render('blank-page', {
        title: 'Blank'
    })
}

module.exports.booking = (req, res) => {
    return res.render('booking', {
        title: 'Booking'
    })
}

module.exports.bookingSuccess = (req, res) => {
    return res.render('booking-success', {
        title: 'Booking-Success'
    })
}

module.exports.calendar = (req, res) => {
    return res.render('calendar', {
        title: 'Calendar'
    })
}

module.exports.changePassword = async(req, res) => {
    let patient = await Patient.findById(req.user.id)
    return res.render('change-password', {
        title: 'Change Password',
        patient: patient
    })
}

module.exports.chat = async(req, res) => {
    let patient = await Patient.findById(req.user.id)
    return res.render('chat', {
        title: 'Chat',
        patient: patient
    })
}

module.exports.chatDoctor = (req, res) => {
    return res.render('chat-doctor', {
        title: 'Chat Doctor'
    })
}

module.exports.checkout = (req, res) => {
    return res.render('checkout', {
        title: 'Checkout'
    })
}
module.exports.components = (req, res) => {
    return res.render('components', {
        title: 'Components'
    })
}

module.exports.doctorChangePassword = (req, res) => {
    return res.render('doctor-change-password', {
        title: 'Change Password'
    })
}

module.exports.doctorDashboard = (req, res) => {
    return res.render('doctor-dashboard', {
        title: 'Doctor Dashboard'
    })
}

module.exports.doctorProfile = (req, res) => {
    return res.render('doctor-profile', {
        title: 'Profile'
    })
}

module.exports.doctorProfileSettings = (req, res) => {
    return res.render('doctor-profile-settings', {
        title: 'Profile Settings'
    })
}

module.exports.doctorRegister = (req, res) => {
    return res.render('doctor-register', {
        title: 'Register'
    })
}
module.exports.docRegister = (req, res) => {
    return res.render('doc-register', {
        title: 'Doctor Register'
    })
}

module.exports.editBilling = (req, res) => {
    return res.render('edit-billing', {
        title: 'Edit Billing'
    })
}

module.exports.editPrescription = (req, res) => {
    return res.render('edit-prescription', {
        title: 'Edit prescription'
    })
}

module.exports.favourites = async(req, res) => {
    let patient = await Patient.findById(req.user.id)
    return res.render('favourites', {
        title: 'Favourites',
        patient: patient
    })
}

module.exports.forgotPassword = (req, res) => {
    return res.render('forgot-password', {
        title: 'Forgot Password'
    })
}

module.exports.home2 = (req, res) => {
    return res.render('index', {
        title: 'Home'
    })
}

module.exports.invoiceView = (req, res) => {
    return res.render('invoice-view', {
        title: 'Invoice View'
    })
}

module.exports.invoices = (req, res) => {
    return res.render('invoices', {
        title: 'Invoices'
    })
}

module.exports.login = (req, res) => {
    if (req.isAuthenticated()) {
        return res.redirect('/')
    }
    return res.render('login', {
        title: 'Login'
    })
}

module.exports.myPatients = (req, res) => {
    return res.render('my-patients', {
        title: 'My Patients'
    })
}

module.exports.patientDashboard = async(req, res) => {
    let patient = await Patient.findById(req.user.id)
    return res.render('patient-dashboard', {
        title: 'Patient Dashboard',
        patient: patient
    })
}

module.exports.patientProfile = (req, res) => {
    return res.render('patient-profile', {
        title: 'Patient Profile'
    })
}


module.exports.privacyPolicy = (req, res) => {
    return res.render('privacy-policy', {
        title: 'Privacy Policy'
    })
}

module.exports.profileSettings = async(req, res) => {
    let patient = await Patient.findById(req.user.id);
    return res.render('profile-settings', {
        title: 'Profile Settings',
        patient: patient
    })
}

module.exports.register = (req, res) => {
    if (req.isAuthenticated()) {
        return res.redirect('/')
    }
    return res.render('phone-login', {
        title: 'Register'
    })
}

module.exports.signUp = async(req, res) => {
    if (req.body.type == 'doctor') {
        let data = await client
            .verify
            .services(config.serviceID)
            .verificationChecks
            .create({
                to: `+91${req.body.phone}`,
                code: req.body.otp
            });


        if (data.status == 'approved') {
            return res.render('doctor-register', {
                title: 'Register',
                phone: req.body.phone,
            });

        } else {
            req.flash('error', 'Wrong Otp');
            return res.render('phone-verify', {
                title: 'Phone verification',
                phone: req.body.phone,
                type: req.body.type
            })

        }
    }

    if (req.body.type == 'forgot') {
        let data = await client
            .verify
            .services(config.serviceID)
            .verificationChecks
            .create({
                to: `+91${req.body.phone}`,
                code: req.body.otp
            });


        if (data.status == 'approved') {
            return res.render('set-password', {
                title: 'Reset Pasword',
                phone: req.body.phone
            });

        } else {
            req.flash('error', 'Wrong Otp');
            return res.render('phone-verify', {
                title: 'Phone verification',
                phone: req.body.phone
            })

        }
    }

    let data = await client
        .verify
        .services(config.serviceID)
        .verificationChecks
        .create({
            to: `+91${req.body.phone}`,
            code: req.body.otp
        });


    if (data.status == 'approved') {
        return res.render('register', {
            title: 'Register',
            phone: req.body.phone
        });

    } else {
        req.flash('error', 'Wrong Otp');
        return res.render('phone-verify', {
            title: 'Phone verification',
            phone: req.body.phone
        })

    }


}

module.exports.reviews = (req, res) => {
    return res.render('reviews', {
        title: 'Reviews'
    })
}

module.exports.scheduleTimings = (req, res) => {
    return res.render('schedule-timings', {
        title: 'Schedule Timings'
    })
}

module.exports.search = (req, res) => {
    return res.render('search', {
        title: 'Search'
    })
}

module.exports.socialMedia = (req, res) => {
    return res.render('social-media', {
        title: 'Social Media'
    })
}

module.exports.termCondition = (req, res) => {
    return res.render('term-condition', {
        title: 'Term Condition'
    })
}

module.exports.videoCall = (req, res) => {
    return res.render('video-call', {
        title: 'Video Call'
    })
}

module.exports.voiceCall = (req, res) => {
    return res.render('voice-call', {
        title: 'Voice Call'
    })
}

module.exports.verify = (req, res) => {

    if (req.body.type == undefined) {
        Patient.findOne({ phone: req.body.phone }, function(err, patient) {
            if (patient) {
                req.flash('error', 'Account already linked with this mobile number');
                return res.redirect('back');
            }
        });
        Doctor.findOne({ phone: req.body.phone }, function(err, doctor) {
            if (doctor) {
                req.flash('error', 'Account already linked with this mobile number');
                return res.redirect('back');
            }
        });
    }

    console.log(req.body.flag);
    if (req.body.flag == 'doctor') {
        client
            .verify
            .services(config.serviceID)
            .verifications
            .create({
                to: `+91${req.body.phone}`,
                channel: 'sms'
            }).then((data) => {

                return res.render('phone-verify', {
                    title: 'Phone verification',
                    phone: req.body.phone,
                    type: req.body.flag

                });
            });
    } else {
        client
            .verify
            .services(config.serviceID)
            .verifications
            .create({
                to: `+91${req.body.phone}`,
                channel: 'sms'
            }).then((data) => {

                return res.render('phone-verify', {
                    title: 'Phone verification',
                    phone: req.body.phone,
                    type: req.body.type

                });
            });
    }


}