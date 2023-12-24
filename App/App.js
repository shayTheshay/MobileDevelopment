import React from 'react';
import Stacks from './navigation/NavigationFile';

import { NavigationContainer } from '@react-navigation/native';
import {NoteProvider} from './services/NoteContex';



const App =()=> { // a stack navigation contained in a needed Navigation container, with NoteProvider to gain access to (title && body)
  
  return (
    <NoteProvider>
      <NavigationContainer> 
        <Stacks/>
      </NavigationContainer>
    </NoteProvider>
  );
  }


export default App;
