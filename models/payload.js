class Payload {
  constructor(salaryData, filterData) {
    this.salaryData = salaryData;
    this.filterData = filterData;
  }
}

class salaryPayload {
  constructor(
    timestamp,
    location,
    position_title,
    base_salary,
    stock_options,
    bonus,
    cash_equity,
    experience,
    highest_education,
    bootcamp,
    year,
    industry,
    other_industry,
    faang_mmanga,
    company_size
  ) {
    this.timestamp = timestamp;
    this.location = location;
    this.position_title = position_title;
    this.base_salary = base_salary;
    this.stock_options = stock_options;
    this.bonus = bonus;
    this.cash_equity = cash_equity;
    this.experience = experience;
    this.highest_education = highest_education;
    this.bootcamp = bootcamp;
    this.year = year;
    this.industry = industry;
    this.other_industry = other_industry;
    this.faang_mmanga = faang_mmanga;
    this.company_size = company_size;
  }
}

module.exports = { Payload, salaryPayload };
