import { createSelector } from 'reselect';

const selectingMessage = state => state.message;

export const selectMessage = createSelector(
    [selectingMessage],
    message => message.message
)
