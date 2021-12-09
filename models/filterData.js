class FilterData {
  constructor(
    location,
    title,
    experience,
    education,
    bootcamp,
    year,
    industry,
    faang,
    company_size
  ) {
    this.location = location;
    this.title = title;
    this.experience = experience;
    this.education = education;
    this.bootcamp = bootcamp;
    this.year = year;
    this.industry = industry;
    this.faang = faang;
    this.company_size = company_size;
  }
}

module.exports = FilterData;
