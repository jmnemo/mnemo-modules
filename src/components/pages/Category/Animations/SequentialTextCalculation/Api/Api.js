import React, { Component } from 'react';

import styles from './Api.module.scss';

const data = {
  "result": {
    "answerModels": [
      {
        "slideId": 7,
        "questionText": "Create your Outcome",
        "answerText": "Completing this course in record time.",
        "answerDate": "2020-12-02T01:11:23.388Z"
      },
      {
        "slideId": 7,
        "questionText": "What is your Breakthrough Outcome?",
        "answerText": "Completing this course in record time. 2nd take.",
        "answerDate": "2020-12-09T14:32:45.696Z"
      }
    ],
    "courseStartDate": "2020-12-02T16:59:34.667"
  },
  "statusCode": 200,
  "messages": []
};

const model = {
  result: {
    types: ['object'],
    required: true,
    children: {
      answerModels: {
        types: ["array"],
        childrenType: "object",
        required: true,
        minLength: 1,
        children: {
          slideId: {
            types: ['number'],
            required: true
          },
          questionText: {
            types: ['string'],
            required: true
          },
          answerText: {
            types: ['string'],
            required: true
          },
          answerDate: {
            types: ['string']
          }
        }
      },
      courseStartDate: {
        types: ['string'],
        required: true
      }
    }
  },
  statusCode: {
    types: ['number']
  },
  messages: {
    types: ['array', 'null']
  }
}

function validator(model, data) {
  if (typeof model !== "object" || typeof data !== "object") return {error: true};

  const errors = [];
  const hasOwn = {}.hasOwnProperty;

  function setError(errorType, errorText) {
    errors.push({
      errorType,
      errorText
    });
  }

  function validate(model, data, path) {
    // const type = typeof data;
    //
    // if () {
    //
    // }
    //
    // if (type.toString !== Object.prototype.toString) {
    // }

    for (let key in model) {
      if (hasOwn.call(data, key)) {
        // model[key].type

        if (model[key].required && data[key] === undefined) {
          setError('required', `Required field "${key}" in "${path}" is undefined`);

          continue;
        }

        const dataType = typeof data;

        if (model[key].type === 'array') {
          continue;
        }

        if (model[key].type === 'object') {
          continue;
        }

      }
    }
  }

  validate(model, data, 'rootObject');

  return errors;
}

class Api extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <div className={styles.container}>

      </div>
    );
  }
}

export default Api;
