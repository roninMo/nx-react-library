/* eslint-disable @typescript-eslint/no-unused-vars */
import jwt from 'jsonwebtoken';
import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/User';
import { deleteValue } from '../utilities/utils';
import { Address } from '../models/Address';
const router = express.Router();
import { CreateUserRequestPayload } from '../models/RequestResponse';
import expressAsyncHandler from 'express-async-handler';

const signUp = expressAsyncHandler(async (request, response, next) => {
  const requestInformation: CreateUserRequestPayload = request.body;
    const user: User = requestInformation.user;
    const address: Address = requestInformation.address;

    if (!user || !address || !user.password) {
      const invalidContentError = {
        message: 'Create user was called without the user information',
        type: 'InvalidContent'
      };
      next(invalidContentError);
      return;
    }

    const createdAddress: Address = await Address.query().insert(address);
    if (!createdAddress) {
      userCreationErrorResponse(response, { user, address });
      return;
    }

    await bcrypt.hash(user.password, 10, async (err, result) => {
      if (err || !result) {
        userCreationErrorResponse(response, { user, address });
        deleteValue(createdAddress.id, Address);
        return;
      }

      const tokenInformation = { name: user.name, username: user.username, email: user.email,};
      const token = await jwt.sign(tokenInformation, process.env.TOKEN_SECRET, { expiresIn: '18000s' });
      const createdUser = await createdAddress.$relatedQuery('user').insert({ ...user, password: result, addressId: createdAddress.id });
      if (createdUser) {
        response.status(200).json({ token: token, message: "successfully created the user" });
      } else {
        userCreationErrorResponse(response, { user, address });
        deleteValue(createdAddress.id, Address);
        return;
      }
    });
});


const userCreationErrorResponse = (response, data) => {
  response.status(400).json({ 
    message: "something happened while trying to create the user!", 
    data
  });
};


router.post('/signup', signUp);
module.exports = router;
