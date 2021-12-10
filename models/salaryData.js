const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const salarySchema = new Schema({
  timestamp: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  base_salary: {
    type: Number,
    required: false,
  },
  stock_options: {
    type: String,
    required: false,
  },
  bonus: {
    type: Number,
    required: false,
  },
  cash_equity: {
    type: String,
    required: false,
  },
  experience: {
    type: Number,
    required: false,
  },
  highest_education: {
    type: String,
    required: false,
  },
  bootcamp: {
    type: String,
    required: false,
  },
  year: {
    type: String,
    required: false,
  },
  industry: {
    type: String,
    required: false,
  },
  other_industry: {
    type: String,
    required: false,
  },
  faang_mmanga: {
    type: String,
    required: false,
  },
  company_size: {
    type: String,
    required: false,
  },
});

const salaryData = mongoose.model("salaryItem", salarySchema);

module.exports = salaryData;
