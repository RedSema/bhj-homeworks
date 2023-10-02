let currentTimer = document.getElementById('timer').innerHTML;
setInterval(()=> {
    currentTimer = currentTimer - 1;
    document.getElementById('timer').innerHTML = currentTimer;
    if(currentTimer < 0) {
        clearInterval(1);
        alert('Вы победили в конкурсе')};

    }, 1000);

 