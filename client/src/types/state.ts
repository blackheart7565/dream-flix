import { Dispatch, SetStateAction } from "react";

export type TSetStateDispatcher<T> = Dispatch<SetStateAction<T>>;