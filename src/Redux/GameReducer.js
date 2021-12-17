let GameState = {
    MainTitle: null
}

const FunctionGame = (state = GameState, action) => {
    switch(action.type) {
        case 'CHANGE_GAME_STATUS':
            return {
                ...state,
                MainTitle: action.value
            }

        default:
            return state
    }       

}
export default FunctionGame