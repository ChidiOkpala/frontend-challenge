import { createSelector } from "reselect";

const friendsGroup = state => state.friends;

export const selectId = state => state.id;

export const selectFriends = createSelector(
    [friendsGroup],
    friends => Object.keys(friends).map(key => friends[key])
);
