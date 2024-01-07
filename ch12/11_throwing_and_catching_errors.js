// Throwing and Catching Errors

const getTodos = async () => { 

  const response = await fetch('todos/luigi.json');
  console.log(response);
  // if we change the name luigi to luigisss it will not throw an error so we need to consider this case
  if(response.status !== 200) {
    throw new Error('cannot fetch the data');
  }

  const data = await response.json();
  console.log(data);
  
  return data;

};

getTodos()
  .then(data => console.log('resolved: ', data))
  .catch(err => console.log('rejected', err.message));