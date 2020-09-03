const { Patient } = require('../models')

function PatientController() { }


const create = function (req, res) {
  const data = {
    fullname: req.body.fullname,
    phone: req.body.phone
  }

  Patient.create(data, function (err, doc) {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err
      })
    }

    res.status(201).json({
      success: true,
      data: doc
    })
  })
}

const all = function (req, res) {

  Patient.find({}, function (err, docs) {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err
      })
    }

    res.json({
      success: true,
      data: docs
    })
  })
}

PatientController.prototype = {
  all,
  create,
}

module.exports = PatientController