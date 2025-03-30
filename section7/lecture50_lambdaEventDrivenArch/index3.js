var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var times = ['morning', 'afternoon',  'evening', 'night', 'day'];


exports.handler = async (event) => {
    console.log('Recieved event:', JSON.stringify(event, null,2))
    
    //parse input values
    let name = event.name === undefined ? 'you' : event.name;
    let city = event.city === undefined ? 'world' : event.city;
    let time = times.indexOf(event.time)<0 ? 'time' : event.time;
    let day = days.indexOf(event.day)<0 ? null : event.day;


    //greeting messages
    let greeting = 'Good' + time + ',' + name + 'of' + city + '.' + 'Happy' + day + '!';

    //log and return back messages
    console.log('Message: ' + greeting);
   
    
    return greeting;
  };