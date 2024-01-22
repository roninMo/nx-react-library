/* eslint-disable @typescript-eslint/no-unused-vars */
import { 
  ValidationError, 
  NotFoundError, 
  DBError, 
  UniqueViolationError, 
  NotNullViolationError, 
  ForeignKeyViolationError, 
  CheckViolationError, 
  DataError 
} from 'objection';
import { UnauthorizedError as UnauthorizedJwtError } from 'express-jwt';

// This class handles objection's error types, and sends the appropriate responses for each of the statuses
export const objectionErrorHandler = (err, request, response, next) => {
  const responseObject = {
    message: err.message,
    type: err.type,
    data: {}
  };


  // invalidContentError
  if (err?.type == 'InvalidContent') {
    response.status(400).json({
      ...responseObject,
    });
  }

  if (err instanceof ValidationError) {
    if (err.type == 'ModelValidation') {
      response.status(400).json({
        ...responseObject,
        data: err.data,
      });

    } else if (err.type == 'RelationExpression') {
      response.json({
        ...responseObject,
        type: 'RelationExpression'
      });

    } else if (err.type == 'UnallowedRelation') {
      response.status(400).json({
        ...responseObject,
      });

    } else if (err.type == 'InvalidGraph') {
      response.status(400).json({
        ...responseObject,
      });
    }

  } else if (err instanceof NotFoundError) {
    response.status(404).json({
      ...responseObject,
      type: 'NotFound',
    });

  } else if (err instanceof UniqueViolationError) {
    response.status(409).json({
      ...responseObject,
      type: 'UniqueViolation',
      data: {
        columns: err.columns,
        table: err.table,
        constraint: err.constraint
      },
    });

  } else if (err instanceof NotNullViolationError) {
    response.status(400).json({
      ...responseObject,
      type: 'NotNullViolation',
      data: {
        column: err.column,
        table: err.table
      },
    });

  } else if (err instanceof ForeignKeyViolationError) {
    response.status(409).json({
      ...responseObject,
      type: 'ForeignKeyViolation',
      data: {
        table: err.table,
        constraint: err.constraint
      },
    });

  } else if (err instanceof CheckViolationError) {
    response.status(400).json({
      ...responseObject,
      type: 'CheckViolation',
      data: {
        table: err.table,
        constraint: err.constraint
      },
    });

  } else if (err instanceof DataError) {
    response.status(400).json({
      ...responseObject,
      type: 'InvalidData',
    });

  } else if (err instanceof DBError) {
    response.status(500).json({
      ...responseObject,
      type: 'UnknownDatabaseError',
    });

  } else {
    response.status(500).json({
      ...responseObject,
      type: 'UnknownError',
    });
  }
  
  console.warn('errorHandler: ', {responseObject});
};

export const expressErrorHandler = (err, request, response, next) => {
  if (err instanceof UnauthorizedJwtError) {
    console.error('[express-jwt-error]', request.cookies.id_token);
    response.clearCookie('id_token');
    next(err);
  }
};
