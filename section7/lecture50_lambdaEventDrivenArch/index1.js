exports.handler = async (event) => {
    console.log('Recieved event:', JSON.stringify(event, null,2))
    console.log('name =', event.name)
    console.log('surname =', event.surname)
   
    // TODO implement
    // const response = {
    //   statusCode: 200,
    //   body: JSON.stringify('Hello from Lambda!'),
    // };
    return event.name + ' ' + event.surname;
  };