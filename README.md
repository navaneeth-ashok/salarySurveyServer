# CS Salary Insight App : Backend

This web-app is the api endpoint for the CS Salary Insight app for the Canadian employees.  
The data provided by the api is collected from [r/cscareerquestionsCAD](https://www.reddit.com/r/cscareerquestionsCAD)  
Please refer to the following reddit post for more information : [Salary Sharing Survey Result](https://www.reddit.com/r/cscareerquestionsCAD/comments/rbeq6z/salary_sharing_survey_and_results/)

## Allowed requests

- GET

## Allowed modifiers

- filter
- skip
- limit
- sort
- select
- populate

## Sample requests

GET : https://back-end-dot-cs-salary-app.uc.r.appspot.com/getSalaryData  
GET : https://back-end-dot-cs-salary-app.uc.r.appspot.com/getSalaryData?location=&title=&experience=&highest_education=&bootcamp=&year=&industry=&faang_mmanga=&company_size=&sort=-base_salary

## Sample response

```(json)
[
  {
    "timestamp": "12-07-2021 16:09",
    "location": "British Columbia (BC)",
    "title": "Software Development Engineer",
    "base_salary": 102000,
    "stock_options": "86,000",
    "bonus": 22000,
    "cash_equity": "20,500 Year 2 Bonus",
    "experience": 0,
    "highest_education": "Bachelor's Degree - Related",
    "bootcamp": null,
    "year": "2021",
    "industry": "Tech",
    "other_industry": null,
    "faang_mmanga": "Yes",
    "company_size": "1000+"
  },
  {
    "timestamp": "12-07-2021 16:10",
    "location": "Alberta (AB)",
    "title": "Software Developer",
    "base_salary": 77000,
    "stock_options": "0",
    "bonus": 0,
    "cash_equity": null,
    "experience": 2,
    "highest_education": "Bachelor's Degree - Related",
    "bootcamp": null,
    "year": "2021",
    "industry": "B2B",
    "other_industry": null,
    "faang_mmanga": "No",
    "company_size": "501-1000"
  }
]
```

## Backend

- ExpressJS
- MongoDB Atlas

## Related Projects

- [Salary CSV to JSON Converter : Python](https://github.com/navaneeth-ashok/salary_survey_csv_converter)
- [CS Salary Insight App Frontend : Angular](https://github.com/navaneeth-ashok/salarySurveyClient)
- [CS Salary Insight App Backend : ExpressJS](https://github.com/navaneeth-ashok/salarySurveyServer)

## Contributors

- [Navaneeth Ashok](https://navaneeth.dev/) : Developed backend, frontend and csv to json converter
- [u/just_a_dev_here](https://www.reddit.com/user/just_a_dev_here/) : Conducted the survey and supplied the RAW data
