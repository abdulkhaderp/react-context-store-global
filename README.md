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
2. ```ContextStore.getContextStoreDataItem('id')``` To get a particular state value based on key.Only first level Keys should be passed. 
3. ```ContextStore.updateContextStore(instance,key,payload)``` To update the global state. Payload will be updated against the key.```this``` refer the class instance.Only first level keys should be passed.Can be used only in stateful component.
4. ```ContextStore.useContextStore(Class)``` For a stateful component,this is how component subscribe to the context object. This is necessary to access or update the global state. ```Class``` refer to the class name.


### How to access or update the global state from components ? See the examples below.

-- Examples below are very stright forward, simple to grasp and self explnatory.Necessary comments are added in the snippets itself--

From a stateful component
```
import React from 'react';
import {ContextStore} from 'react-context-store-global';
class MyComp extends React.Component {

 handleInput =(event)=>{
  //Update the global state with the user input.
   ContextStore.updateContextStore(this,'id',event.target.value)
 }
 render(){
 // Get id from global state. Three different ways of doing it below.
     const {id} = this.context;  
  //OR const id   = ContextStore.getContextStoreDataItem('id');
  //OR const {id} = ContextStore.getContextStoreData(this);
  return(
   
       <div> 
         {id}
         <input type="text" onChange={this.handleInput} />
       </div>
     
  )
 }
 
}
ContextStore.useContextStore(MyComp);
export default MyComp;
```
From stateless component
```
import React from 'react';
import {ContextStore,useContext} from 'react-context-store-global';
const MyComp = (props) => {
//Get id from the global state.
const {id} = useContext(ContextStore);
const {updateStore} = useContext(ContextStore);
 const handleChange =(event)=>{
    //Update the global state with the user input
   updateStore("id",event.target.value);
  }
  return (
      <div>
      <input type="text" onChange={handleChange} />
      </div>
  );
}
export default MyComp;
```
