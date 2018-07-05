# `'Job Application Tracker' Server`

Backend for __[Job Application Tracker App](https://github.com/karantyagi/job-application-tracker)__

## How to run locally?

## `Server`
1. Clone `https://github.com/karantyagi/job-portal-node-server`
2. Go to the cloned repository and run `npm install`
3. Connect to mongodb sever running locally. (`mongodb://127.0.0.1:27017`)
3. Run `node server.js`

## `Database`

### Create `admin`
In mongo shell,
1. Run `use job-applications-db`
2. `db.createCollection('User')`
3. `db.User.insert({username:'admin',password:'admin',role:'Admin'})`
4. `db.User.insert({username:'user1',password:'user1',role:'Applicant'})`
