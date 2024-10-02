export function mergeClasses(...classes: Array<unknown>) {
	return classes.filter(Boolean).join(' ');
}
