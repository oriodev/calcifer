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

**user home page:** currently a very rudimentary user home page. it displays basic user information given during onboarding and displays an image of their character. it also houses the user's letterbox, where they can see mail they have recieved from other users. the user is automatically redirected to the home page after login/after completing onboarding.

![image](https://github.com/oriodev/calcifer/assets/93719767/51f66cdc-2dd9-4b35-b851-e2e4b38dfd96)


**post office/letter box:** a letter sending system where a user can send a message to another user. the user can then check their letter box and read their letters. they can do this by clicking on the letter, and it will then show in a pop up dialogue box. unread letters are marked in a different colour to read letters. there is an 'unread letter' count at the top of the inbox. when they open a letter, the user can choose to mark the letter as read/unread, delete it, or reply to it (which routes them back to the post office). long letters are scrollable.

![image](https://github.com/oriodev/calcifer/assets/93719767/5d88a454-169a-4f6d-8808-d53a54bc1ea8)

![image](https://github.com/oriodev/calcifer/assets/93719767/510c36a3-c37b-4351-ac36-e6305c8ed24f)

![image](https://github.com/oriodev/calcifer/assets/93719767/531680bd-fcc5-4e66-97d8-25c22dc0b11c)

**coins:** currently a simple system. the user has a 'coins' field that stores how many coins they have. users get 5 by default. sending a letter costs 1 coin. when you send a letter, it gets deducted from your account. if you do not have the coin to spend, you cannot send the letter.

![image](https://github.com/oriodev/calcifer/assets/93719767/a5822cb2-65a4-4ce8-aeae-13fe45b819d2)


### features in development.
