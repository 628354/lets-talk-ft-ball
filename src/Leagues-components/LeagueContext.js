import { createContext, useEffect, useState } from "react";
import { apiCall } from "../helper/RequestHandler";
import { REQUEST_TYPE, LEAGUES } from "../helper/APIInfo";
const LeagueContext=createContext();

export const LeagueProvider=({children})=>{

    const [getAllLeagues,setAllLeagues]=useState(null)
  
    // get all league data 

    const getLeagueName = async () => {
		try {
		  const obj = {
			maxBodyLength: Infinity,
			headers: {
			  "Content-Type": "application/json",
			},
		  };
		  const response = await apiCall(LEAGUES.league, REQUEST_TYPE.GET, obj);
		  console.log(response.response.data.leaguedetails);
		  setAllLeagues(response.response.data.leaguedetails);
		} catch (error) {
		  console.error("An error occurred while fetching league names:", error);
		}
	  };
	useEffect(() => {
		getLeagueName();
		
	}, []);
    


    return(
        <LeagueContext.Provider value={{
            getAllLeagues,
        }}>
            {children}
        </LeagueContext.Provider>
    )
}
export default LeagueContext;