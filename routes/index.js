var express = require("express");
var router = express.Router();
const salaryData = require("../models/salaryData");
const filterData = require("../models/filterData");
const { payload, salaryPayload, Payload } = require("../models/payload");
const aqp = require("api-query-params");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Salary Survey App" });
});

router.get("/getSalaryData", function (req, res, next) {
  const { filter, skip, limit, sort, projection, population } = aqp(req.query);
  salaryData
    .find(filter)
    .skip(skip)
    .limit(limit)
    .sort(sort)
    .select(projection)
    .populate(population)
    .then((result) => {
      let salaryItemArray = [];
      const locationSet = new Set();
      const titleSet = new Set();
      const experienceSet = new Set();
      const educationSet = new Set();
      const bootcampSet = new Set();
      const yearSet = new Set();
      const industrySet = new Set();
      const faangSet = new Set();
      const companySizeSet = new Set();
      for (let item of result) {
        const salaryItem = new salaryPayload(
          item.timestamp,
          item.location,
          item.title,
          item.base_salary,
          item.stock_options,
          item.bonus,
          item.cash_equity,
          item.experience,
          item.highest_education,
          item.bootcamp,
          item.year,
          item.industry,
          item.other_industry,
          item.faang_mmanga,
          item.company_size
        );
        locationSet.add(salaryItem.location);
        titleSet.add(salaryItem.position_title);
        experienceSet.add(salaryItem.experience);
        educationSet.add(salaryItem.highest_education);
        bootcampSet.add(salaryItem.bootcamp);
        yearSet.add(salaryItem.year);
        industrySet.add(salaryItem.industry);
        faangSet.add(salaryItem.faang_mmanga);
        companySizeSet.add(salaryItem.company_size);
        salaryItemArray.push(salaryItem);
      }
      const filterPayload = new filterData(
        [...locationSet].sort(),
        [...titleSet].sort(),
        [...experienceSet].sort(),
        [...educationSet].sort(),
        [...bootcampSet].sort(),
        [...yearSet].sort(),
        [...industrySet].sort(),
        [...faangSet].sort(),
        [...companySizeSet].sort()
      );
      const payloadToSent = new Payload(salaryItemArray, filterPayload);
      res.send(payloadToSent);
    })
    .catch((err) => {
      res.status(400);
      res.send(
        "Invalid Query, Please read the API documentation for implemented filters"
      );
      console.log(err);
    });
});

router.get("/sampleResult", function (req, res, next) {
  let sampleJson = [
    {
      timestamp: "12-07-2021 16:09",
      location: "British Columbia (BC)",
      title: "Software Development Engineer",
      base_salary: 102000,
      stock_options: "86,000",
      bonus: 22000.0,
      cash_equity: "20,500 Year 2 Bonus",
      experience: 0.0,
      highest_education: "Bachelor's Degree - Related",
      bootcamp: null,
      year: "2021",
      industry: "Tech",
      other_industry: null,
      faang_mmanga: "Yes",
      company_size: "1000+",
    },
    {
      timestamp: "12-07-2021 16:10",
      location: "Alberta (AB)",
      title: "Software Developer",
      base_salary: 77000,
      stock_options: "0",
      bonus: 0.0,
      cash_equity: null,
      experience: 2.0,
      highest_education: "Bachelor's Degree - Related",
      bootcamp: null,
      year: "2021",
      industry: "B2B",
      other_industry: null,
      faang_mmanga: "No",
      company_size: "501-1000",
    },
  ];
  res.send(sampleJson);
});

module.exports = router;
