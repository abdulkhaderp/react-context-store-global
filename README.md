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

1. ```ContextStore.getContextStoreData(this)  ``` To get the current global state.Can be used in stateful component only. ```this``` refer the class instance.
2. ```ContextStore.getContextStoreDataItem('id')``` To get a particular state value based on key.
3. ```ContextStore.updateContextStore(instance,key,payload)``` To update the global state. Payload will be updated against the key.```this``` refer the class instance.Can be used only in stateful component.



