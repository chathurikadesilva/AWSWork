exports.handler = async (event) => {
    console.log("EVENT: \n" + JSON.stringify(event, null,2))
    // TODO implement
    const response = {
      statusCode: 200,
      body: JSON.stringify('Updated function code!'),
    };
    return response;
  };
  