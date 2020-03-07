document.getElementById('encryptedText').oninput = function(){
    const offset = +document.querySelector("#key").value;
	let str = this.value;
	decryption(str, offset);
}

document.getElementById('key').oninput = function(){
    const offset = +this.value;
	let str = document.getElementById('encryptedText').value;
	decryption(str, offset);
}

document.getElementById('btn').addEventListener('click', copyText);


function decryption(str, offset) {
	let out = '';
	for (let i=0; i< str.length; i++){
		let code = str.charCodeAt(i);
		code = code - offset;
		out += String.fromCharCode(code);
	}
	document.getElementById('decryption').innerHTML = out;
}



function copyText() {
	const copyDecryption =  document.getElementById('decryption');
	copyDecryption.select();
	document.execCommand("copy");
}