/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '../models/User';
import expressAsyncHandler from 'express-async-handler';
const router = express.Router();


const login = expressAsyncHandler(async (request, response, next) => {
  const email = request.body?.email;
  const password = request.body?.password;

  if (!email || !password) {
    response.status(400).json({ message: 'please enter an email and a password' });
    return;
  }

  const user: User = await User.query()
    .findOne({ email })
    .join('address', 'user.addressId', 'address.id')
    .select('address.*', 'user.*');

  if (!user) {
    response.status(404).json({ message: 'did not find the user' });
    return;
  }

  await bcrypt.compare(password, user.password, (err, result) => {
    // console.log({err, result});
    if (!result || err) {
      response.status(401).json({ message: 'the password was incorrect' });
      return;
    }

    const token = jwt.sign({
        name: user.name,
        username: user.username,
        email: user.email,
        id: user.id
      }, 
      process.env.TOKEN_SECRET, 
      { expiresIn: '18000s' }
    );

    response.status(200).json({
      userId: user.id,
      token,
      message: ' the user successfully logged in'
    });
  });
});

const stillLoggedIn = expressAsyncHandler(async (request, response, next) => {
  const accessToken = request.body?.accessToken;
  
  if (!accessToken) {
    response.sendStatus(401);
    return;
  }

  jwt.verify(accessToken, process.env.TOKEN_SECRET, (err, result) => {
    console.log('verifying whether the user is still logged in', { err, result });

    if (!result || err) {
      response.sendStatus(401);
      return;
    }

    response.sendStatus(200);
  });
});

router.post('/login', login);
router.post('/stillLoggedIn', stillLoggedIn)
module.exports = router;
