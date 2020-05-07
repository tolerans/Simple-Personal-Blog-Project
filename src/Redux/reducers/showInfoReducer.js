

export default function showInfoReducer(state=[],action) {
    switch (action.type) {
        case "infos":
            return action.payload;

        default:
            return state
    }
}
