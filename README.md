# react-context-store-global

The easiest to integrate, global state management library for React based on Context API

## Installation
npm install react-context-store-global

## how To Setup:

### Create a file to maintain the global state. For eg:
```
  export  const globalState = {
      state : {
              "id" : "0",
              "name" : "sample"
               }
        }
```  
### Do the following steps in the entry file. (Index.js if the app is created by create-react-app)
1. Import the package
      ```
      import {ContextStoreProvider} from 'react-context-store-global'; 
      ```
2. Import the global state .Create an instance by passing initial global state. 
      ```
      import {globalState} from './globalState';
      new ContextStoreProvider(globalState.state);
     ```      
3. Wrap the <App/> component as follows;
    ```
    ReactDOM.render( <ContextStoreProvider><App/> </ContextStoreProvider>, document.getElementById('root'));
    ```
    
### API:

1.  ```ContextStore.getContextStoreData(this)  ``` Can be used in stateful component only.
