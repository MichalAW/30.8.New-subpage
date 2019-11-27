# 30.8.Stack-Mern-Blog
1.First of all, the application should keep the data also after the server restart. With us, we lose everything every time we finish the process, and after reboot we start again, with the same rigid set of posts. 

2.Secondly, the mere modifications, searches or additions of data, while working on an ordinary array, all this can be very onerous in the long run. 

3.Thirdly, our application is intended to be a fairly large blog engine. We assume then that the customer can expect huge traffic on the site. Thus, access to data should be handled by a tool that is fast, efficient and prepared for such tasks. An ordinary board is certainly not the best option here. 

4.Tool that will be perfect for our needs. It's MongoDB with the package Mongoose.

# Scripts 

"start": "cd client && yarn build && cd .. && cd server && yarn start",
"start:server": "cd server && yarn start",
"install:client": "cd client && npm install",
"install:server": "cd server && npm install",
"postinstall": "run-p install:*"

Run app by clicking link --> https://stack-mern-app.herokuapp.com/
