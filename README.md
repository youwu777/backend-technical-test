# Inquisitive Backend Developer Test

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![CircleCI](https://img.shields.io/badge/circle%20ci-%23161616.svg?style=for-the-badge&logo=circleci&logoColor=white)

Welcome to Inqusitive developer technical test. Hope you will have some fun here and in the end you will learn something new.

---

## Background

We want this technical test to be close to our development environment, so the programming language, the tooling and the coding standard are the same in the real work here at Inquisitive. We would appreciate you make the efforts to following the framework we've already setup to complete the test.

---

## Inquisitive Tech Stack

From an infrastructure perspective, Inquisitive arguably runs on a full serverless stack. We use AWS Lambda for the main computing power, RDS + S3 for the storage, API Gateway, Cloudfront, SES, EventBridge, AppFlow, Kinesis and a few other services from AWS.

From an application architecture perspective, Inqusitive is full stack TypeScript/JavaScript, meaning that we write TypeScript in both backend and frontend. More specicically we use React in frontend, Apollo Server running on NodeJS in the backend, GraphqQL is the API interface.

We also use SnowFlake, Metabase, Salesforce etc. for data warehouse, data analyzing, reporting and so on. We heavily rely on data to make bussiness decisions.

---

## About this test

There are 5 tasks in this test, the tasks are based off the one before, ie in order to complete task 2 you must complete task 1. You should aim to complete all of the tasks, but not compulsory. Feel free to reach out if you have any questions.

## Prerequisites

- You should have NodeJS and nvm installed.
- You should have Git installed.
- You should fork this project and commit your code to your new forked project.

---

## Tasks

### Task 1. Setup your project.

```bash
nvm install
yarn install
yarn babel-node --extensions '.ts'  ./index.ts
```

You should see `Hello World`

---

### Task 2. Call Inquisitive GraphQL API

In `task1.ts`, write a function, in the function make a POST call to https://api2.inquisitive.com/latest/graphql, with the following the payload, the function should return the response body in JSON format. You can use any external npm libraries to make the call.

```json
{
  "operationName": "ContentBrowser",
  "query": "query ContentBrowser($input: ContentBrowserInput!) { contentBrowser(input: $input) {  topics { name  units { name  lessons { id name   subjects { id name } years { id name } }  } } }}",
  "variables": {
    "input": {
      "years": ["1", "2", "3", "4"],
      "subjects": ["history", "science-and-technology", "english", "maths"],
      "curriculums": [],
      "includingDraft": false,
      "includingComingSoon": false,
      "includingFuture": false,
      "includingEmptyTopic": false,
      "initialTopics": 10,
      "topicIds": []
    }
  }
}
```

Invoke the function from `index.ts`. An example of the response

```json
{
  "data": {
    "contentBrowser": {
      "topics": [
        {
          "name": "Past and Present Family Life",
          "units": [
            {
              "name": "Past, Present and Future",
              "lessons": [
                {
                  "id": 200,
                  "name": "Time Traveller",
                  "subjects": [
                    {
                      "id": 2,
                      "name": "history"
                    }
                  ],
                  "years": [
                    {
                      "id": 2,
                      "name": "1"
                    }
                  ]
                },
                {
                  "id": 202,
                  "name": "Days, Months and Seasons",
                  "subjects": [
                    {
                      "id": 2,
                      "name": "history"
                    }
                  ],
                  "years": [
                    {
                      "id": 2,
                      "name": "1"
                    }
                  ]
                },
                {
                  "id": 204,
                  "name": "Different Seasons",
                  "subjects": [
                    {
                      "id": 2,
                      "name": "history"
                    }
                  ],
                  "years": [
                    {
                      "id": 2,
                      "name": "1"
                    }
                  ]
                },
                {
                  "id": 206,
                  "name": "Now I am Six",
                  "subjects": [
                    {
                      "id": 2,
                      "name": "history"
                    }
                  ],
                  "years": [
                    {
                      "id": 2,
                      "name": "1"
                    }
                  ]
                },
                {
                  "id": 207,
                  "name": "Special Days",
                  "subjects": [
                    {
                      "id": 2,
                      "name": "history"
                    }
                  ],
                  "years": [
                    {
                      "id": 2,
                      "name": "1"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Family Life",
              "lessons": [
                {
                  "id": 239,
                  "name": "We are Family",
                  "subjects": [
                    {
                      "id": 2,
                      "name": "history"
                    }
                  ],
                  "years": [
                    {
                      "id": 2,
                      "name": "1"
                    }
                  ]
                },
                {
                  "id": 240,
                  "name": "Family Connections",
                  "subjects": [
                    {
                      "id": 2,
                      "name": "history"
                    }
                  ],
                  "years": [
                    {
                      "id": 2,
                      "name": "1"
                    }
                  ]
                },
                {
                  "id": 242,
                  "name": "Families Then and Now",
                  "subjects": [
                    {
                      "id": 2,
                      "name": "history"
                    }
                  ],
                  "years": [
                    {
                      "id": 2,
                      "name": "1"
                    }
                  ]
                },
                {
                  "id": 243,
                  "name": "Family Roles",
                  "subjects": [
                    {
                      "id": 2,
                      "name": "history"
                    }
                  ],
                  "years": [
                    {
                      "id": 2,
                      "name": "1"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Then and Now",
              "lessons": [
                {
                  "id": 249,
                  "name": "How Times Have Changed",
                  "subjects": [
                    {
                      "id": 2,
                      "name": "history"
                    }
                  ],
                  "years": [
                    {
                      "id": 2,
                      "name": "1"
                    }
                  ]
                },
                {
                  "id": 250,
                  "name": "Let's Play",
                  "subjects": [
                    {
                      "id": 2,
                      "name": "history"
                    }
                  ],
                  "years": [
                    {
                      "id": 2,
                      "name": "1"
                    }
                  ]
                },
                {
                  "id": 251,
                  "name": "Step Back in Time",
                  "subjects": [
                    {
                      "id": 2,
                      "name": "history"
                    }
                  ],
                  "years": [
                    {
                      "id": 2,
                      "name": "1"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
```

---

### Task 3. Some data transformation

Use the response data from Task 2, list the subject and lessons under each year group. For example,

```
Year 1
  History
    Time Traveller
    Days, Months and Seasons
    ...
  Geography
    Weather Patterns
    Weather and Seasons
    ...
Year 2
  ...
```

---

### Task 4. Export to CSV

Export the data from the previous task into a CSV format. For example,

| Year   | Subject   | Lesson                   |
| ------ | --------- | ------------------------ |
| Year 1 | Geography | Weather Patterns         |
| Year 1 | Geography | Weather and Seasons      |
| Year 1 | History   | Time Traveller           |
| Year 1 | History   | Days, Months and Seasons |

---

### Task 5. Upload the CSV to AWS S3.

You should have received the `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` from us. You will need them in order to use aws sdk to upload to a S3 bucket which is managed by Inquisitive.
After you get the credentails, create a file named `.env`, put the following into the file.

```
AWS_ACCESS_KEY_ID=the-id-you-received
AWS_SECRET_ACCESS_KEY=the-key-you-received
```

The `dovenv` library will load the environment variables from the `.env` into your local environment for aws-sdk to use.

So now you can write your code in `task5.ts`, upload the exported CSV from the previous task to a S3 bucket we've created for you, the name of the bucket is `inquisitive-backend-developer-tests'`, you should upload the file under a folder with your name.

Hint. You should use the `putObject` function from the AWS SDK. See https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property

---

### Bouns Task

If you feel like adding some test coverage, please do! Whatever unit test framework you like, whatever coverage you want.

---

#### When you are done, make sure you commit your code, and let us know your github repo of your forked project.

Happy coding
