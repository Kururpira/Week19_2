
let result2 = document.getElementById('result2');
	let resultTitle = document.createElement('h3');
		let resultBody = document.createElement('p');
		resultTitle = '';
	resultBody = '';
function makeTwo() {
	fetch('https://jsonplaceholder.typicode.com/posts')
.then((res) => {
    return res.json();
})
.then((data) => {
	console.log(data);
	data.forEach(element => {
		resultTitle.textContent = data.title;
		result2.append(resultTitle);
		resultBody.textContent = data.body;
		result2.append(resultBody);
	});
	
	})
	.catch((err) => {
		console.log('Ошибка. Запрос не выполнен');
	});
}
document.querySelector('.b-2').addEventListener('click', makeTwo);

