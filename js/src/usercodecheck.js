var OriginTitle = document.title;
var usercode=document.getElementById('usercode');
var btncheck=document.getElementById('codecheck');

function codecheck() {
	if (OriginTitle.value =="js-integrate"){
		if(usercode.value == "tiantian"){
			warn("Welcome back");
		} else {
			console.warn("pls check your code");
		}
	}
}