const mongoose = require('mongoose');

const formConfigurationSchema = new mongoose.Schema({
  officeName: {
    type: String,
    required: true,
  },
  officeId: {
    type: String,
    required: true,
  },
  formFields: [{
    id: {
      type: Number,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    customLabel: {
      type: String,
      default: ''
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Create compound index to ensure unique configuration per office
formConfigurationSchema.index({ officeId: 1 }, { unique: true });

const FormConfiguration = mongoose.model('FormConfiguration', formConfigurationSchema);

module.exports = FormConfiguration;