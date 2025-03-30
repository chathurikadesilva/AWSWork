exports.handler = async (event) => {
    console.log('Recieved event:', JSON.stringify(event, null,2))
    
    if(event.a === undefined || event.b === undefined || event.op === undefined){
        throw new Error(`event should exist a-b-op: "${event}"`);
    }

       
    let result = 0;

    switch(event.op){
        case "+":
            result = event.a + event.b;
            break;
        case "-":
            result = event.a - event.b;
            break;
        case "*":
            result = event.a * event.b;
            break;
        case "/":
            result = event.a / event.b;
            break;
    }

    //log and return back messages
    console.log('Calculated result: ' + result);
   
    
    return result;
  };