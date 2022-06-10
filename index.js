const getData = async () => {
	const res = await fetch('data.JSON');
	const data = await res.json();
	console.log(data);

	const taskHeading1 = document.getElementById('task-heading-1');
	const heading1 = document.getElementById('h-1');
	const heading2 = document.getElementById('h-2');
	const heading3 = document.getElementById('h-3');
	const heading4 = document.getElementById('h-4');
	const heading7 = document.getElementById('h-7');
	const heading8 = document.getElementById('h-8');
	const heading9 = document.getElementById('h-9');
	for (let i = 0; i < data.tasks[0].assets.length; i++) {
		let div = document.createElement('div');
		let div1 = document.createElement('div1');
		div.innerHTML = `
            <li class='fs-5'>${data.tasks[0].assets[i].asset_title}</li>
        `
		div1.innerHTML = `
			<h5>${data.tasks[0].assets[i].asset_title}</h5>
		`
		taskHeading1.appendChild(div);
		if(i == 0) heading1.appendChild(div1);
		if(i == 1) heading2.appendChild(div1);
		if(i == 2) heading3.appendChild(div1);
		if(i == 3) heading4.appendChild(div1);
		if(i == 6) heading7.appendChild(div1);
		if(i == 7) heading8.appendChild(div1);
		if(i == 8) heading9.appendChild(div1);
	}

	const task1p = document.getElementById('task-1-p');
	let div0 = document.createElement('div0');
	div0.innerHTML = `
    <p>${data.description}</p>
    `
	task1p.appendChild(div0);

	const demo = document.getElementById('demo-task');
	let div1 = document.createElement('div1');
	div1.innerHTML = `
    <p class='fs-5 fw-bold ms-3 mt-4'>1. ${data.tasks[0].task_title}</p>
    `
	demo.appendChild(div1);
}

getData();