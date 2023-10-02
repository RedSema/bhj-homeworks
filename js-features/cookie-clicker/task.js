document.getElementById('cookie').onclick = () => {
    let counter = Number(document.getElementById('clicker__counter').innerHTML);
    counter = counter + 1;
    document.getElementById('clicker__counter').innerHTML = counter;
    if(counter % 2 === 0) {
        document.getElementById('cookie').width = 300;
    } else {document.getElementById('cookie').width = 200;}
};