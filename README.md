![image](https://github.com/oriodev/calcifer/assets/93719767/60f3baf4-8625-4048-9793-bcfbd5b93927)

# calcifer!
a small browser game set in the magical town of calcifer. users can play games, spend their coins in shops, and interact with other users. it is built with next.js, next auth, prisma, neon, resend, tailwind, and shadcn. it is deployed with vercel. _currently in development._

you can check it out so far [here](https://www.calcifergame.com/). _note that data may be wiped at any point during development!_

# features.

### completed features.

**authentication**: register, sign in with credentials or oauth, two factor authentication, password reset, email verification, and account settings. this is implemented with next auth and [resend](https://resend.com/overview) (for emails), and with great thanks to [this tutorial by code with antonio](https://www.youtube.com/watch?v=1MTyCvS05V4).

![image](https://github.com/oriodev/calcifer/assets/93719767/8ca301c3-b34c-4ad9-8006-123fdacb2104)

**configuration**: light/dark theme toggle.

**onboarding:** an onboarding page with some introductory worldbuilding, an image carousel displaying character selection options, a big text input field for character background, and some drop down fields for strengths and weaknesses. all the information gets stored in the database. the user is then redirected to the homepage. the user cannot re-access the onboarding page once they have completed onboarding. a tavern room number is also generated in the background.

![image](https://github.com/oriodev/calcifer/assets/93719767/adcd7ecf-6eda-4b60-ae10-c14040b6c4eb)

**user home page:** currently a very rudimentary user home page. it displays basic user information given during onboarding and displays an image of their character. the user is automatically redirected to the home page after login/after completing onboarding.

![image](https://github.com/oriodev/calcifer/assets/93719767/bde9298b-4966-4ad4-aaf8-2da48caa9e21)


### features in development.

