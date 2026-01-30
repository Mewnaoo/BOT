const mongoose = require('mongoose');

const NoopSettingsSchema = new mongoose.Schema({
  guildId: {
    type: String,
    required: true,
    unique: true
  },
  categoryId: {
    type: String,
    required: true
  },
  creatorChannelId: {
    type: String,
    required: true
  },
  interfaceChannelId: {
    type: String,
    required: true
  },
  interfaceMessageId: {
    type: String,
    default: null
  },
  interfaceType: {
    type: String,
    enum: ['standard', 'original'],
    default: 'standard'
  }
});

module.exports = mongoose.model('NoopSettings', NoopSettingsSchema); 