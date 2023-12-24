import React, {createContext, useState} from 'react';


export const NoteContext = createContext({notes: [], addNote: ()=>{}});


export const NoteProvider = ({children})=>{ // Making sure there is only one istance of MainScreenContect and gain access to variables in the MainScreenContent from NoteScreen (such as title and body)
    const[notes, setNotes] = useState([]);
    const addNote=(note)=>{
        setNotes((previousNotes)=> [...previousNotes, note]) 

    }
    return(
        <NoteContext.Provider value={{notes, addNote}}> 
            {children}
        </NoteContext.Provider>
    )

}