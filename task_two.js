let obj = {
    a: 1,
    b: "12",
    c: 12.3,
    d: true,
    e: function(x, n){
      console.log(x*n)
    }
  
  }
  
  function checkProperty(prototypeName = 'str', obj){
     console.log( prototypeName in obj)
  }
  
  checkProperty('qwe', obj)
  
  checkProperty('a', obj)