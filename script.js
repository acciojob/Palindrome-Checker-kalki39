// complete the given function

function palindrome(str){
  str=str.toLowerCase();
   let arr=Array.from(str);
	let i=0;
	let j=arr.length-1;
	while(i<=j){
		if(arr[i]!=arr[j]){
			return false;
		}
		i++;
		j--;
	}
	return true;
}
module.exports = palindrome
