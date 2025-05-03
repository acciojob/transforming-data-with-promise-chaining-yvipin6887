function domOutput(params) {
  document.getElementById('output').innerText = params;
}

document.getElementById('btn').addEventListener('click', function () {
  let inp = document.getElementById('ip').value;

  let prom = new Promise((resolve) => {
    setTimeout(() => resolve(inp), 2000); // ✅ You must call resolve(inp)
  });

  prom.then((num) => {
    domOutput(num);
	return new Promise((resolve) => {
		setTimeout(() => resolve(num * 2), 2000)
	});
  }).then((num) => {
	  domOutput(num);
	  return new Promise((resolve) => {
		setTimeout(() => resolve(num - 3), 1000)
	});
  }).then((num) => {
	  domOutput(num);
	  return new Promise((resolve) => {
		setTimeout(() => resolve(num / 2), 2000)
	});
  }).then((num) => {
	  domOutput(num);
  });
});
