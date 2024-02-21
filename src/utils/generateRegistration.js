export const generateRegistration = () => {
	let i = 0, registration = "";
    
	while (i < 9) {
		const numberRandom = parseInt(Math.random() * 10);
		registration += numberRandom;
		i++;
	}
	const year = new Date().getFullYear();

	const result = year + registration;

	return result;
};