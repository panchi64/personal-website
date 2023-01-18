import {configureStore} from "@reduxjs/toolkit";
import menuBarReducer from "./features/ui/menu-slice";

export const store = configureStore({
    reducer: {
        menuBar: menuBarReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
