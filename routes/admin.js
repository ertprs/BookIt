const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/appointment-list', adminController.appointmentList);
router.get('/application-request',adminController.applicationRequest);
router.post('/approve-documents',adminController.approveDocuments);
router.get('/blank-page', adminController.blankPage);
router.get('/components', adminController.componentsList);
router.get('/data-tables', adminController.dataTables);
router.get('/doctor-list', adminController.doctorList);
router.get('/error-404', adminController.error404);
router.get('/error-500', adminController.error500);
router.get('/forgot-password', adminController.forgotPassword);
router.get('/form-basic-inputs', adminController.formBasicInputs);
router.get('/form-horizontal', adminController.formHorizontal);
router.get('/form-input-groups', adminController.formInputGroups);
router.get('/form-mask', adminController.formMask);
router.get('/form-validation', adminController.formValidation);
router.get('/form-vertical', adminController.formVertical);
router.get('/index', adminController.index);
router.get('/invoice', adminController.invoice);
router.get('/invoice-report', adminController.invoiceReport);
router.get('/lock-screen', adminController.lockScreen);
router.get('/login', adminController.login);
router.get('/patient-list', adminController.patientList);
router.get('/profile', adminController.profile);
router.get('/register', adminController.register);
router.get('/reviews', adminController.reviews);
router.get('/settings', adminController.settings);
router.get('/specialities', adminController.specialities);
router.get('/tables-basic', adminController.tablesBasic);
router.get('/transactions-list', adminController.transactionsList);

module.exports = router;