import { MutableRefObject } from "react";

type TMergedRef<T> =
	MutableRefObject<T | null>
	| ((instance: T | null) => void)
	| null
	| undefined;

type TMergedRefReturn<T> = (value: T | null) => void;

export function useMergedRef<T>(...refs: TMergedRef<T>[]): TMergedRefReturn<T> {
	return (value: T | null): void => {
		refs.forEach(ref => {
			if (typeof ref === "function") {
				ref(value);
			} else if (ref) {
				(ref as MutableRefObject<T | null>).current = value;
			}
		});
	};
}