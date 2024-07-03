//let collectionCopy = []
//function myEach(collection, arrOrObj) {
//function arrOrObj() {
//for (let i = 0; i < collection.length; i++) {
  //  if (Array.isArray(collection)) {
  // return alert(Object.values(collection[i]))
   // } else (collectionCopy.push(collection)); {
  //      return alert(object.values(collection[i]))
 //   }
//}

//return collectionCopy.alert(collection)
//}
//arrOrObj();
//}


//let collectionCopy = [];











function myEach(collection, alert) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      alert(collection[i]);
    }
  } else if (typeof collection === 'object') {
    for (let key in collection) {
      alert(collection[key]);
    }
  }
  return collection;
}


function myMap(collection, callback) {
  let newCollection = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      newCollection.push(callback(collection[i]));
    }
  } else if (typeof collection === 'object') {
    for (let key in collection) {
      newCollection.push(callback(collection[key]));
    }
  }
  return newCollection;
}
function myReduce(collection, callback, acc) {
  let currentValue;
  if (typeof acc !== 'undefined') {
    currentValue = acc;
  } else {
    if (Array.isArray(collection)) {
      currentValue = collection[0];
      collection = collection.slice(1);
    } else {
      const keys = Object.keys(collection);
      currentValue = collection[keys[0]];
      collection = Object.assign({}, collection);
      delete collection[keys[0]];
    }
  }
  for (let key in collection) {
    currentValue = callback(currentValue, collection[key], collection);
  }
  return currentValue;
}


function myFind(collection, predicate) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
  } else if (typeof collection === 'object') {
    for (let key in collection) {
      if (predicate(collection[key])) {
        return collection[key];
      }
    }
  }
  return undefined;
}


function myFilter(collection, predicate) {
  let collReturn = []
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        collReturn.push(collection[i]);
      }
    }
  } else if (typeof collection === 'object') {
    for (let key in collection) {
      if (predicate(collection[key])) {
        collReturn.push(collection[key])
      } 
    }
  } 
  return collReturn;
}


function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length; 
  } else if (typeof collection === 'object') {
    return Object.keys(collection).length; 
  }
}



  function myFirst(array, n) {
    let firstElem = array[0];
    if (typeof n === 'undefined') {
      return firstElem;
    } else {
      let nArray = [];
      for (let i = 0; i < n; i++) {
        nArray.push(array[i]);
      }
      return nArray;
    }
  };





  function myLast(array, n) {
    let lastElem = array[array.length - 1];
  
    if (typeof n === 'undefined') {
      return lastElem;
    } else {
      let nArray = [];
      for (let i = array.length - 1; i >= array.length - n; i--) {
        nArray.unshift(array[i]);
      }
      return nArray;
    }
  }

  function myKeys(object) {
    let objToArray = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        objToArray.push(key);
      }
    }
    return objToArray;
  }

  function myValues(object) {
    let objValues = [];
    let keyVal = Object.keys(object);
  
    for (let i = 0; i < keyVal.length; i++) {
      let val = keyVal[i];
      objValues.push(object[val]);
    }
  
    return objValues;
  }