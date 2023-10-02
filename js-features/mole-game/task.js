for(let i = 1; i < 10; i++) {
    const getHole = document.getElementById(`hole${i}`);
    getHole.onclick = (event) => {
        if(event.target.classList.contains( 'hole_has-mole' )) {
            let countDead = Number(document.getElementById('dead').innerHTML) + 1;
            document.getElementById('dead').innerHTML = countDead;
            if(countDead === 10) {
                alert('Победа!');
                countDead = 0;
                document.getElementById('dead').innerHTML = countDead;
            }
        } else {
            let countLost = Number(document.getElementById('lost').innerHTML) + 1;
            document.getElementById('lost').innerHTML = countLost ;
            if(countLost === 5) {
                alert('Вы проиграли');
                countLost = 0;
                document.getElementById('lost').innerHTML = countLost;
            }
        }
    }
}