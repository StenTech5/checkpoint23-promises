//Iterating with Async/Await
async function iterateWithAsyncAwait(values) {
    for (let i = 0; i < values.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // delay of 1 second
      console.log(values[i]);
    }
  }
  
  const values = [1, 2, 3, 4, 5];
  iterateWithAsyncAwait(values);

  // Awaiting a Call
  async function awaitCall() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // Simulate an API call
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  awaitCall();

  //Handling Errors with Async/Await
  async function awaitCall() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if (!response.ok) {
        throw new Error('API response was not ok');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error.message); // Log a user-friendly error message
    }
  }
  
  awaitCall();

  //Awaiting Concurrent Requests
  async function concurrentRequests() {
    try {
      const [response1, response2] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/posts/1'),
        fetch('https://jsonplaceholder.typicode.com/posts/2')
      ]);
      const data1 = await response1.json();
      const data2 = await response2.json();
      
      console.log('Data from first request:', data1);
      console.log('Data from second request:', data2);
    } catch (error) {
      console.error('Error with concurrent requests:', error.message);
    }
  }
  
  concurrentRequests();

  // Awaiting Parallel Calls
  async function parallelCalls(urls) {
    try {
      const responses = await Promise.all(urls.map(url => fetch(url)));
      const dataPromises = responses.map(response => response.json());
      const data = await Promise.all(dataPromises);
      
      console.log('Data from all requests:', data);
    } catch (error) {
      console.error('Error with parallel calls:', error.message);
    }
  }
  
  const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
  ];
  
  parallelCalls(urls);
  
  
  
  
  