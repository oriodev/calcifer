![image](https://github.com/oriodev/calcifer/assets/93719767/60f3baf4-8625-4048-9793-bcfbd5b93927)

# calcifer!
a small browser game set in the magical town of calcifer. users can play games, spend their coins in shops, and interact with other users. it is built with next.js, next auth, prisma, neon, resend, tailwind, and shadcn. it is deployed with vercel. _currently in development._

you can check it out so far [here](https://www.calcifergame.com/). _note that data may be wiped at any point during development!_

# features.

### completed features.

**authentication**: register, sign in with credentials or oauth, two factor authentication, password reset, email verification, and account settings. this is implemented with next auth and [resend](https://resend.com/overview) (for emails), and with great thanks to [this tutorial by code with antonio](https://www.youtube.com/watch?v=1MTyCvS05V4).

![image](https://github.com/oriodev/calcifer/assets/93719767/8ca301c3-b34c-4ad9-8006-123fdacb2104)

**configuration**: light/dark theme toggle.

### features in development.

**user landing page**:
- [x] create the home page.
- [x] reset the automatic redirect page.
- [x] display basic user information.
- [ ] revist once onboarding is complete.

**onboarding**:
- [ ] a basic form where the player is asked which character they want to play as, to give some character background, and choose a strength and a weakness.
- [ ] extend the db to store all this information.
- [ ] make sure no user can get past the onboarding page without completing it.
- [ ] make sure the user is redirected to onboarding after registering.
