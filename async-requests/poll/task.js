const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
    const response = JSON.parse(xhr.response);

    pollTitle.textContent = response.data.title;

    response.data.answers.forEach(element => {
        let answer = document.createElement('button');
        answer.className = 'poll__answer';
        answer.textContent = element;
        pollAnswers.append(answer);
    });
    }
}
pollAnswers.onclick = () => {
    alert('Спасибо, ваш голос засчитан!');
}