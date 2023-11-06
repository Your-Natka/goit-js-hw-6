const textInput = document.querySelector("#font-size-control");
console.log(textInput);

const spanText = document.querySelector("#text");
console.log(spanText);

textInput.addEventListener("input", handleInput);

function handleInput(event) {
	const textInputValue = event.currentTarget.value;
	console.log(textInputValue);
	const spanTextValue = event.currentTarget.value;
	console.log(spanTextValue);
		
		if (textInputValue === spanTextValue) {
			spanTextValue = font - size;
		}
	}
