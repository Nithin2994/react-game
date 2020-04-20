import gameserver from '../apis/gameserver'
import history from '../../src/history'
import store from '../index'

export const saveUser = (username, token) => {
    history.push('/home')
    return {
        type : "SAVE_USER",
        payload : {
            username : username,
            token : token
        }
    }
}

export const logoutUser = () => async (dispatch) =>{
    const sessiontoken = store.getState().user.token
    const response = await gameserver.post("/logout",{},{
        headers : { token : sessiontoken }
    })

    if(response.status == "Success"){
        dispatch({
            type:"CLEAR_USER",
            payload:{}
        })
    }
}

export const loadLeaderboards = () => async (dispatch) => {
    const response = await gameserver.get('/leaderboard')
    dispatch({
        type : "LOAD_LEADERBOARDS",
        payload : {
            leaderboards : response.data.leaderboards
        }    
    })    
}


export const loadLeaderboardData = (leaderboardId) => async (dispatch) =>{
    console.log("action :"+leaderboardId)
    const response =  await gameserver.get('/leaderboard/'+leaderboardId)
    dispatch({
        type : "LOAD_LEADERBOARDS_DATA",
        payload : {
            leaderboardsData : response.data,
            leaderboardId : leaderboardId
        }    
    })
}

export const updateScore = (leaderboard,player,score) => async (dispatch) => {
    const sessiontoken = store.getState().user.token
    console.log("sessiontoken ",sessiontoken)
    const response = await gameserver.post('/leaderboard/'+leaderboard+'/addScore',
    {
        name : player,
        score : score
    }
    ,{
            headers:{ token : sessiontoken }
    }
    )

    if(response != null  && response.data.statusCode == 0){
        dispatch({
            type : "UPDATE_SCORE",
            payload : {
                score : score
            }
        })
    }else if (response != null  && response.data.statusCode == -1){
        dispatch({
            type : "SHOW_SCORE_ERROR",
            payload : {
                message:"error in updating score"
            }
        })
    }
    
}
export const pollOpponent = () => async (dispatch) => {
    const sessiontoken = store.getState().user.token
    const username = store.getState().user.username

    const response = await gameserver.post('matchmaking/pollOpponent',{
        playerName : username
    },{
        headers : {
            token : sessiontoken
        }
    })

    console.log(response)

    if(response.data.status == "Success"){
        dispatch({
            type:"FIND_MATCH",
            payload:{
                status : "FOUND",
                opponentUser : response.data.opponentPlayer,
                gameId : response.data.gameId
            }
        })
    }else{
        dispatch({
            type:"FIND_MATCH",
            payload:{
                status : "SEARCHING",
                opponentUser : "",
                gameId:"NA"
            }
        })
    }
}

export const findOpponent = (gameName) => async (dispatch) => {
    const sessiontoken = store.getState().user.token
    const username = store.getState().user.username
    const response = await gameserver.post('matchmaking/findOpponent',{
        playerName : username,
        gameName : gameName
    },{
        headers : {
            token : sessiontoken
        }
    })

    console.log(response)

    if(response.data.status == "Success"){
        dispatch({
            type:"FIND_MATCH",
            payload:{
                status : "FOUND",
                opponentUser : response.data.opponentPlayer,
                gameId : response.data.gameId
            }
        })
    }else{
        dispatch({
            type:"FIND_MATCH",
            payload:{
                status : "SEARCHING",
                opponentUser : "",
                gameId : "NA"
            }
        })
    }
    
}

export const updatePvpScore = (score) => async (dispatch) => {
    const sessiontoken = store.getState().user.token
    const username = store.getState().user.username
    const gameId = store.getState().pvp.gameId
    const response = await gameserver.post('matchmaking/updateScore',{
        playerName : username,
        gameId : gameId,
        score : score
    },{
        headers : { token : sessiontoken}
    })
    
    console.log(response);

    dispatch({
        type : "UPDATE_PVP_GAME_SCORES",
        payload : {
            scores : response.data.scores
        }
    })
}

export const updateScoresInState = (scores) => {
    return {
        type : "UPDATE_PVP_GAME_SCORES",
        payload : {
            scores : scores
        }
    }
}

export const endGame = () => async (dispatch) => {
    const sessiontoken = store.getState().user.token
    const username = store.getState().user.username
    const gameId = store.getState().pvp.gameId

    const response = await gameserver.post('/matchmaking/endGame',{
        playerName : username,
        gameId : gameId
    },{
        headers:{token : sessiontoken}
    })

    console.log(response)

    if(response.data.status == "Success"){
        dispatch({
            type:"END_PVP_GAME",
            payload:{
                winner : response.data.winner
            }
        })
    }

}

export const loadCurrencies  = () => async (dispatch) => {
    const response = await gameserver.get('/wallet/currencies')
    console.log(response)
    dispatch({
        type : "LOAD_CURRENCIES",
        payload : {
            currencies : response.data.currencies
        }
    })
}

export const loadBalances = (username,usertoken) => async (dispatch) => {
    const sessiontoken = store.getState().user.token
    console.log("sessiontoken ",sessiontoken)
    const response = await gameserver.post('/wallet/balances',{
        PlayerName : username
    },
    {
        headers:{ token : sessiontoken }
    })

    dispatch({
        type : "LOAD_BALANCES",
        payload : {
           balances : response.data.balances
        }
    })

}