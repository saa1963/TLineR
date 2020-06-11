"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).
exports.actionCreators = {
    change: function (pname) { return ({ type: 'CHANGE_CURRENTUSER', name: pname }); }
};
// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
exports.reducer = function (state, incomingAction) {
    if (state === undefined) {
        return { name: '' };
    }
    var action = incomingAction;
    switch (action.type) {
        case 'CHANGE_CURRENTUSER':
            return { name: action.name };
        default:
            return state;
    }
};
//# sourceMappingURL=CurrentUser.js.map