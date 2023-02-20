import { useState , createContext, useEffect, useReducer} from "react";
import { initialState, reducer } from "./useReducer";
import { getDataUser } from "../service/api";


export const DataContext = createContext(null);

const DataProvider = ({children}) =>{
    
    const [userData, setUserData] = useState({});
    const [state,dispatch] = useReducer(reducer,initialState );
    const [open, setOpen] = useState(false);
    
    //console.log(userData);

    const userInformation = async() =>{
        const response = await getDataUser();
 

        if(response.status === 200){
          
            dispatch({type:'USER',payload:true});
            setUserData(response?.data) 
          
        }else{
            dispatch({type:'USER',payload:false});
           
        }
    }

    useEffect(()=>{
        userInformation()
    },[])
    

    return(
        <DataContext.Provider value={{userData, state,dispatch, setUserData, open, setOpen}} >
            { children}
        </DataContext.Provider>
    )
}
export default DataProvider;
