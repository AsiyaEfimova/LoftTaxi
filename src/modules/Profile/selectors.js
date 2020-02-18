export const getToken = (state) => state.loginReducer.token;
export const getCard = (state) => ({
    cardNumber: state.cardReducer.cardNumber,
    expiryDate: state.cardReducer.expiryDate,
    cardName: state.cardReducer.cardName,
    cvc: state.cardReducer.cvc
});
export const getHasCard = (state) => state.cardReducer.hasCard;
export const getIsLoading = (state) => state.cardReducer.isLoading;
export const getError = (state) => state.cardReducer.error;