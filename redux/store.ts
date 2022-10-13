import { configureStore } from "@reduxjs/toolkit";

import contactModalReducer from "./features/modals/contact-modal-slice";

export const store = configureStore({
  reducer: {
    contactModal: contactModalReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
