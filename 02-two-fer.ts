// (name: string) says the user input type 
// the string after declares that the function will release a string
export function twoFer(name: string): string {
	if(name){
		return `One for ${name}, one for me.`
	} else {
		return 'One for you, one for me.'
	}
}