import classnames from 'classnames';

export function removeClasses(classNamesString, classToken) {
	return classnames(classNamesString.split(" "))
		.split(" ")
		.filter((className) => !className.startsWith(classToken))
		.join(" ");
}

