let obj = {
    a: 1,
    b: "12",
    c: 12.3,
    d: true,
    e: function(x, n){
      console.log(x*n)
    }
  
  }
  
  const neObj = Object.create(obj)
  neObj.newProperty = 'wow'
  neObj.newProperty2 = 'wow owo'
  
  function getObjItems (obj){ 
    for (let i in obj){
      if (neObj.hasOwnProperty(i)){
        console.log(neObj[i])
      }
    }
  }
  
  getObjItems(neObj)