const readline =require("readline");
const reader=readline.createInterface({
    input: process.stdin,
    output:process.stdout
});
function isPalindrome(str){
    const cleanedStr=str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let revstring='';
   for(let i=cleanedStr.length-1;i>=0;i--){
    revstring+=cleanedStr[i];
   }

   if(revstring==cleanedStr){
    return true;
   }
   else return false;
}

reader.question("please enter your String : ",str =>{
    console.log(isPalindrome(str));
    reader.close();
});

