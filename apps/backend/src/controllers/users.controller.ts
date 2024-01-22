/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express';
import { db } from '../database';
import { User, UserValidationInformation, UserValidationResponse } from '../models/User';
import { Address } from '../models/Address';
import { Comment } from '../models/Comment';
import { Todo } from '../models/Todos';
import { Post } from '../models/Post';
import { constructUser } from '../utilities/utils';
import { CreateUserRequestPayload } from '../models/RequestResponse';
import expressAsyncHandler from 'express-async-handler';
const router = express.Router();


const getUser = expressAsyncHandler(async (request, response, next) => {
  const userId = request.params.id;
  const user = await User.query()
    .findById(userId)
    .join('address', 'user.addressId', 'address.id')
    .select('address.*', 'user.*');

  if (!user) {
    response.sendStatus(404);
    return;
  }

  response.status(200).json({ message: 'user found', user: constructUser(user) });
});

const getUserTodos = expressAsyncHandler(async (request, response, next) => {
  const userId = request.params.id;
  const todos = await Todo.query().where('userId', userId);

  if (!todos) {
    response.sendStatus(404);
    return;
  }

  console.log(`get all todos for user ${userId}: `, { todos });
  response.status(200).json({ todos });
});

const getUserPosts = expressAsyncHandler(async (request, response, next) => {
  const userId = request.params.id;
  const posts = await Post.query().where('userId', userId);

  if (!posts) {
    response.sendStatus(404);
    return;
  }

  console.log(`get all posts for user ${userId}`, { posts });
  response.status(200).json({ posts });
});

const getUserInformation = expressAsyncHandler(async (request, response, next) => {
  const userId = request.params.id;
  const user = await User.query().findById(userId);

  if (!user) {
    response.sendStatus(404);
    return;
  }

  const address = await Address.query().findById(user.addressId);
  const todos = await Todo.query().where('userId', userId);
  const posts = await Post.query().where('userId', userId);
  // const posts = await Post.query()
  //   .select('*')
  //   .leftJoin('comment as comments', 'post.id', 'comments.postId');

  response.status(200).json({ 
    message: 'user information', 
    user: {...user, address}, 
    todos, 
    posts
  });
});


const getAllUsers = expressAsyncHandler(async (request, response, next) => {
  const allUsers = await User.query();
  if (!allUsers) {
    response.sendStatus(204);
    return;
  }

  console.log('get all users: ', { allUsers });
  response.status(200).json({ message: 'users found', users: allUsers })
});

const deleteUser = expressAsyncHandler(async (request, response, next) => {
  const id = request.params.id;
  const deleteUser = await User.query().deleteById(id);
  
  if (!deleteUser) {
    response.sendStatus(404);
    return;
  }

  console.log('deleted user: ', { deleteUser, id });
  response.sendStatus(200);
});

const createUser = expressAsyncHandler(async (request, response, next) => {
  const requestInformation: CreateUserRequestPayload = request.body;
  const user: User = requestInformation.user;
  const address: Address = requestInformation.address;

  if (!user) {
    const invalidContentError = {
      message: 'Create user was called without the user information',
      type: 'InvalidContent'
    };
    next(invalidContentError);
    return;
  }
  
  // User and address
  if (address) {
    const createdAddress = await Address.query().insert(address);
    if (!createdAddress) {
      response.status(400).json({ message: 'failed to create the address for the user', data: requestInformation });
      return;
    }

    const createdUser = await createdAddress.$relatedQuery('user').insert({...user, addressId: createdAddress.id });
    if (createdUser) {
      response.status(400).json({ message: 'failed to create the user', data: requestInformation });
      return;
    }
    
    response.status(200).json({ message: 'user created', address, user, createdUser, createdAddress });
  } else {
    // Only the user
    const createdUser = await User.query().insert(user);
    if (createdUser) {
      response.status(400).json({ message: 'failed to create the user', data: requestInformation });
      return;
    }
    
    response.sendStatus(200);
  }
});

const validateUserValues = expressAsyncHandler(async (request, response, next) => {
  const userId = request.params.id;
  const user = await User.query().findById(userId);
  
  console.log('user information: ', user);
  if (!user || !request.body) {
    response.sendStatus(404);
    return;
  }

  const updateInformationValues: UserValidationInformation = request.body;
  let validation: UserValidationResponse;
  console.log('updateInformation: ', updateInformationValues);

  // This logic is dummy logic just to test connections for validations on this side 
  if (!updateInformationValues.key || !updateInformationValues.value) {
    response.sendStatus(204);
    return;
  }


  // name - no numbers
  if (updateInformationValues.key == 'name') {
    const noNumbersOrSpecialCharacters = new RegExp('^[a-zA-Z]*$');
    validation = noNumbersOrSpecialCharacters.test(updateInformationValues.value) ? null : 'enter a valid name';
  }

  // phone - this needs to have the proper format
  if (updateInformationValues.key == 'phone') {
    const tenDigitNumberValidation = new RegExp('^[0-9]{10}$'); // Actual validations can be handled on the client
    validation = tenDigitNumberValidation.test(updateInformationValues.value) ? null : 'the phone number is invalid';
  }

  // username - validations and rules for this
  if (updateInformationValues.key == 'username') {
    // If username is not already taken
    const noNumbersOrSpecialCharacters = new RegExp('^[a-zA-Z]*$');
    validation = noNumbersOrSpecialCharacters.test(updateInformationValues.value) ? null : 'the username is invalid';
  }

  // email address - email validations
  if (updateInformationValues.key == 'email') {
    validation = null;
  }

  response.status(200).json({ validation });
});


const editUser = expressAsyncHandler(async (request, response, next) => {
  const id = request.params.id;
  if (!request.body || !id) {
    const invalidContentError = {
      message: 'Update user was called without valid user information',
      type: 'InvalidContent'
    };
    next(invalidContentError);
    return;
  }

  const user = request.body;
  const updateUser = await User.query().findById(id).patch(user);
  if (!updateUser) {
    response.sendStatus(204);
  }

  response.sendStatus(200);
});

const updateUser = expressAsyncHandler(async (request, response, next) => {
  const id = request.params.id;
  if (request.body && id) {
    const invalidContentError = {
      message: 'Update user was called without valid user information',
      type: 'InvalidContent'
    };
    next(invalidContentError);
    return;
  }

  const user = request.body;
  const updateUser = await User.query().findById(id).update(user);
  if (!updateUser) {
    response.sendStatus(204);
  }

  response.sendStatus(200);
});




router.get("/:id", getUser);
router.get('/:id/todos', getUserTodos);
router.get('/:id/posts', getUserPosts);
router.get('/:id/information', getUserInformation);
router.get("/", getAllUsers);
router.delete("/:id", deleteUser);
router.post("/", createUser);
router.post('/:id/validatevalues', validateUserValues);
router.patch("/:id", editUser);
router.put("/:id", updateUser);




module.exports = router;
