'use strict';

const todosCreate = require('./functions/todos-create.js');
const todosReadALl = require('./functions/todos-read-all.js');
const todosReadOne = require('./functions/todos-read-one.js');
const todosUpdate = require('./functions/todos-update.js');
const todosDelete = require('./functions/todos-delete.js');

module.exports.create = (event, context, callback) => {
  todosCreate(event, (error, result) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.readAll = (event, context, callback) => {
  todosReadALl(event,  (error, result) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify(result),
    };

    context.succeed(response);
  })
};

module.exports.readOne = (event, context, callback) => {
  todosReadOne(event, (error, result) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
};

module.exports.update = (event, context, callback) => {
  todosUpdate(event, (error, result) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify(result),
    };

    context.succeed(response);
  })
};

module.exports.delete = (event, context, callback) => {
  todosDelete(event, (error, result) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify(result),
    };

    context.succeed(response);
  });
}
