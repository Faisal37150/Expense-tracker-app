//
export default (state, action) => {
    switch(action.type) {
        //Create Reducer For Delete and ADD Transaction
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
            case 'ADD_TRANSACTION':
                return{
                    ...state,
                    transactions: [action.payload, ...state.transactions]
                }

        default:
            return state;

    }
}