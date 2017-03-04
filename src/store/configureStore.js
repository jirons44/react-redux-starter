/*
    configureStore will be used at the entry point of app.
        contains the various json objects required for this app

    ...middleware -
        1 -reduxImmutableStateInvariant

           Redux middleware that spits an error on you when you try to
           mutate your state either inside a dispatch or between dispatches.
           For development use only!

           Because you're not allowed to mutate your state in your reducers!.
           And by extension, you shouldn't mutate them either outside. In order to
           change state in your app, you should always return a new instance of
           your state with the changes.

           **import to only when environment is prod.***
            see https://github.com/leoasis/redux-immutable-state-invariant
            see 'react 'slingshot' for other middleware toinclude for dev...i.e. chrome debugextentions..

 */

import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, reduxImmutableStateInvariant())
    );
}