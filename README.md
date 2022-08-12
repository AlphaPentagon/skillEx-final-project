![Logo](https://skill-ex.vercel.app/media/icons/LogoMain.svg)

## School of Code Bootcamp 12

### 2b || !2b Final Project

Our skill sharing platform, SkillEx, provides an opportunity for people to upskill and raise their employability levels without a financial burden. By making access free, the opportunity to learn is available to everyone including marginalised groups who may be priced out of using similar paid-for services.

The 1:1 delivery model will improve learning outcomes and learner engagement when compared with passive learning resources (e.g. YouTube) while enabling human connection and interaction for those who are socially isolated.

## Features

- Create new user & edit existing user profile
- Browse by category
- Searchable user network
- Contact form
- Responsive design for mobile & desktop
- 3rd party authentication & authorisation
- Unit tests & end-to-end testing suites

![App Screenshot](public\media\images\screenshot.png)

## Roadmap

- Email validation
- Delete Profile function
- Search Bar functionality
- User dashboard
- Messaging service
- Increased categorisation
- Upload Photo to profile & image hosting
- Increased test coverage

## Tech Stack

**Authentication**

- Auth0

**Database**

- Postgres
- Prisma

**Deployment**

- Heroku
- Vercel

**Front End & API**

- Next.js
- CSS

**Testing**

- Cypress
- Jest
- React Testing Library
- Postman

## API Reference

| Method | Path           | Additional Info | Result                                      |
| ------ | -------------- | --------------- | ------------------------------------------- |
| GET    | /profiles      | API key         | all profiles                                |
| GET    | /profiles/[id] |                 | profile with a particular id (if it exists) |
| POST   | /profiles      | { body }        | create a new profile                        |
| PUT    | /profiles/[id] | { body }        | updated profile                             |

## Run Locally

Clone the project

```bash
  git clone https://github.com/SchoolOfCode/final-project_front-end-2b-2b
```

Go to the project directory

```bash
  cd final-project_front-end-2b-2b
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Environment Variables

To run this project, you will need to add the following environment variables from Heroku & Auth0, in the following format:

**.env**

DATABASE_URL= `DATABASE URI`

**.env.local**

AUTH0_SECRET= `AUTH0 SECRET`  
AUTH0_BASE_URL= `AUTH0_BASE_URL`  
AUTH0_ISSUER_BASE_URL= `AUTH0_ISSUER_BASE_URL`  
AUTH0_CLIENT_ID= `AUTH0_CLIENT_ID`  
AUTH0_CLIENT_SECRET= `AUTH0_CLIENT_SECRET`

## Deployment

To deploy this project we recommend using the Vercel platform, developed by the creators of Next.js

https://nextjs.org/learn/basics/deploying-nextjs-app/deploy

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Authors

- [Craig Summers](https://www.github.com/AlphaPentagon)
- [Dave Hazeldean](https://www.github.com/dvhzldn)
- [Jay Whittingham](https://www.github.com/jaymlwhittingham)
- [Lucy de Rojas](https://www.github.com/Lucy-de-Rojas)
- [Pira Tejasakulsin](https://www.github.com/piratejas)
- [Zainab Abid](https://www.github.com/ZainabAbid1)

## Feedback

If you have any feedback, please reach out to us at skillexsite@gmail.com
