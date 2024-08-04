import store from "../store/store";

export type TStateStore = ReturnType<typeof store.getState>;

export type TDispatchType = typeof store.dispatch;