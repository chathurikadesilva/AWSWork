exports.handler = async (event, context) => {
    console.log('Remaining time:', context.getRemainingTimeInMillis())
    console.log('Function name:', context.functionName)
    console.log("EVENT: \n" + JSON.stringify(event, null,2))


    const total = event.num1 + event.num2;
    const body_2 = 
        `Function name: ${context.functionName}
         LogStream name : ${context.logStreamName}
        `
    // TODO implement
    const response = {
      statusCode: 200,
      body: "The total of " + event.num1 + " and " + event.num2 + " is " + total
    };
    return [body_2, response];
  };