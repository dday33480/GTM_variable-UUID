function() {
  
    //Get date as integer
    var timeStamp = Date.now();
    
    //Convert integer to string
    var timeString = timeStamp.toString();
   
    //Construct Unique Identifier taking first 2 numbers and last 4 number of the timeString variable
    var s = timeString.substr(0, 2);
    
    var r = timeString.substr(-4);
    
    var UUID = s + '-' + r;
  
    
    
    return UUID;
  }