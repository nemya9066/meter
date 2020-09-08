let vars = document.querySelectorAll("input")
let submit = document.querySelector('button.submit')
let clear = document.querySelector('button.clear')

const listVars = () => {
	let string = ""
	string += "this will not work\n"
	for(let input of vars){
		string += input.value+" "
	}
	//string = string.slice(0,-1)
	string = string.trim()
	download("text.txt",string)
}
const clearInput = () => {
	for(let input of vars){
		input.value = ""
	}
}

const download = (filename, text) => {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

submit.addEventListener('click', listVars)
clear.addEventListener('click', clearInput)

