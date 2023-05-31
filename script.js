const submit = document.getElementsByTagName("input")[0];
submit.addEventListener('click', ()=>{
	const value = document.getElementById("colorSelect").value;
	document.getElementById(value).remove();
})