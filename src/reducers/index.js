import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

const usersReducer = (oldUser = { username :"", token:"" }, action) => {
    if(action.type == "SAVE_USER"){
        console.log("userreducer",action)
        return {
            username : action.payload.username,
            token: action.payload.token
        }
    }

    if(action.type == "CLEAR_USER"){
        return {}
    }

    return oldUser
}


const leaderboardsReducers = (leaderboards=[], action) => {
    if(action.type == "LOAD_LEADERBOARDS"){
        return action.payload.leaderboards
    }

    return leaderboards;
}

const leaderboardsDataReducers = (leaderboardDetails =[], action) => {
    let addLeaderboard = true;
    if(action.type == "LOAD_LEADERBOARDS_DATA"){
        let leaderboardDetailsTemp = []
        if(leaderboardDetails.length > 0){
            leaderboardDetails.map((leaderboard)=>{
                if(leaderboard.leaderboardName === action.payload.leaderboardId ){
                    console.log("update data")
                    addLeaderboard= false;
                    leaderboard.data = action.payload.leaderboardsData;
                }
                leaderboardDetailsTemp = [... leaderboardDetailsTemp, leaderboard]
                
            })
        }
        if(addLeaderboard){
            let obj = {
                leaderboardName : action.payload.leaderboardId,
                data : action.payload.leaderboardsData
            }
            leaderboardDetailsTemp = [... leaderboardDetailsTemp, obj]
        }
        
        
        
        return leaderboardDetailsTemp
    }

    return leaderboardDetails;
}

const updateScore = (score=0, action) => {
    if(action.type == "UPDATE_SCORE"){
        console.log("update",action.payload.score)
        return action.payload.score
    }
    return score

}

const showError = ( errorMessage = "", action) => {
    if(action.type == "SHOW_SCORE_ERROR"){
        let errorMessageTemp = action.payload.message
        return errorMessageTemp
    }
    return errorMessage;
}

const loadcurrencies = ( currencies=[], action) => {
    if(action.type == "LOAD_CURRENCIES"){
        let currenciesTemp = action.payload.currencies
        return currenciesTemp
    }

    return currencies;
}

const loadBalances = (balances=[], action) => {
    if(action.type == "LOAD_BALANCES"){
        let balances = action.payload.balances
        return balances
    }

    return balances
}

const findMatch = (pvp = {}, action) => {
    if(action.type == "FIND_MATCH"){
        console.log(action.payload)
        let pvpNew = {}
        pvpNew.status = action.payload.status
        pvpNew.opponent = action.payload.opponentUser
        pvpNew.gameId = action.payload.gameId
        pvpNew.gameStatus = "Begin"
        return pvpNew
    }

    if(action.type == "END_PVP_GAME"){
        let pvpNew = {...pvp}
        pvpNew.gameStatus = "Finished"
        pvpNew.winner = action.payload.winner
        return pvpNew
    }

    return pvp
}

const updateScoresInPvp = (pvpScores={}, action) => {
    if(action.type == "UPDATE_PVP_GAME_SCORES"){
        console.log("updating cache ",action.payload.scores)
        let pvpScoresNew = action.payload.scores
        return pvpScoresNew;
    }

    if(action.type == "FIND_MATCH"){
        return {}
    }

    return pvpScores
}

export default combineReducers({
    user: usersReducer,
    leaderboards : leaderboardsReducers,
    leaderboardsData : leaderboardsDataReducers,
    score : updateScore,
    errorMessage : showError,
    currencies : loadcurrencies,
    balances : loadBalances,
    form : formReducer,
    pvp : findMatch,
    pvpScores : updateScoresInPvp
})