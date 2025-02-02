import { PassportStatic } from 'passport';
import { Strategy as GitHubStrategy, Profile } from 'passport-github2';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/User.js';
import { env } from './index.js';

const passportConfig = (passport: PassportStatic) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: env.GOOGLE_CLIENT_ID,
        clientSecret: env.GOOGLE_CLIENT_SECRET,
        callbackURL: env.GOOGLE_CALLBACK_URL,
      },
      async (accessToken, refreshToken, profile, done) => {
        const id = profile.id as string;
        const email = profile?.emails?.[0].value as string;
        const username = profile.name?.givenName as string;
        const profileImg =
          (profile?.photos?.[0]?.value as string) ??
          ((env.AVATAR_DICEBEAR_URL + username) as string);

        const user = {
          id: id,
          email: email,
          username: username,
          profileImg: profileImg,
        };

        try {
          const userExists = await User.findOne({
            where: { id: profile.id },
          });
          if (userExists) {
            done(null, userExists);
          } else {
            await User.create(user);
            done(null, user);
          }
        } catch (err) {
          console.error(err);
        }
      }
    )
  );

  passport.use(
    new GitHubStrategy(
      {
        clientID: env.GITHUB_CLIENT_ID,
        clientSecret: env.GITHUB_CLIENT_SECRET,
        callbackURL: env.GITHUB_CALLBACK_URL,
      },
      async (
        accessToken: string,
        refreshToken: string,
        profile: Profile,
        done: (err: unknown, user?: unknown) => void
      ) => {
        const id = profile.id as string;
        const username = profile.username as string;
        const email =
          profile.emails?.[0].value ??
          ((id + username + '@users.noreply.github.com') as string);
        const profileImg =
          (profile?.photos?.[0]?.value as string) ??
          ((env.AVATAR_DICEBEAR_URL + username) as string);

        const user = {
          id: id,
          email: email,
          username: username,
          profileImg: profileImg,
        };

        try {
          const userExists = await User.findOne({
            where: { id: profile.id },
          });
          if (userExists) {
            done(null, userExists);
          } else {
            await User.create(user);
            done(null, user);
          }
        } catch (err) {
          console.error(err);
        }
      }
    )
  );
};

export default passportConfig;
