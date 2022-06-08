const getData = async () => {
    const res = await fetch('data.JSON');
    const data = await res.json();
    console.log(data);

    const taskHeading1 = document.getElementById('task-heading-1');
    for (let i = 0; i < data.tasks[0].assets.length; i++) {
        let div = document.createElement('div');
        div.innerHTML = `
            <li class='fs-3'>${data.tasks[0].assets[i].asset_title}</li>
        `
        taskHeading1.appendChild(div);
    }

    const task1p = document.getElementById('task-1-p');
    let div0 = document.createElement('div0');
    div0.innerHTML = `
    <p>${data.description}</p>
    `
    task1p.appendChild(div0);
}

getData();