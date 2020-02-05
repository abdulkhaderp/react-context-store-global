import React, { createContext,useContext} from 'react';

const ContextStore = createContext({});
let value;
// Assign context type for stateful component
ContextStore.useContextStore = (instance) =>{
 if(instance){
  instance.contextType = ContextStore;
 }
 
}
// Retrieve whole store Data
ContextStore.getContextStoreData =(instance)=>{
  return instance.context;
}
// Retrieve store data by key
ContextStore.getContextStoreDataItem =(key)=>{
  return ContextStore._currentValue[key];
}
//Update store data
ContextStore.updateContextStore =(instance,key,payload) =>{
  instance.context.updateStore(key,payload);
}

const ContextStoreConsumer = ContextStore.Consumer;



class ContextStoreProvider extends React.Component {  
  constructor(state){
    super();
    if(!state.children){
      value = state;
    }else{
      if(value){
        this.state = value;
        this.state.updateStore = this.updateContextStore;
      }
    }
  }
  
  updateContextStore = (key,payload) =>{
    if(Object.keys(this.state).indexOf(key) > -1){
         this.setState({ [key] : payload});
    }
   
  }
  
  render() {
    return (
      <ContextStore.Provider value={this.state}>
        {  this.props.children }
      </ContextStore.Provider>
    );
  }
  }

  export {ContextStoreProvider,ContextStoreConsumer,ContextStore,useContext};


