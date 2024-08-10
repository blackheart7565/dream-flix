import { MutableRefObject, useCallback, useEffect, useRef } from "react";

type TCallback = () => void;

type IUseClickOutside<T> = MutableRefObject<T | null>;

export const useClickOutside = <T extends Element>(callback: TCallback): IUseClickOutside<T> => {
	const ref = useRef<T | null>(null);

	const handleClickOutside = useCallback((event: MouseEvent): void => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			callback();
		}
	}, [callback]);

	useEffect((): TCallback => {
		document.addEventListener("click", handleClickOutside, true);
		return (): void => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, [handleClickOutside]);

	return ref;
};