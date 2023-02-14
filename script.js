
function playSeason(month = Number (prompt ('Введите номер месяца'))) {

    if (isNaN(month)) {
        alert('Введите число!');
    } 
        else {
            switch (month) {
                case (1):
                case (2): 
                case (12):
                    alert('Зима');
                    break;
                    
                case (3):
                case (4):
                case (5):
                    alert('Весна');
                    break;
                    
                case (6):
                case (7):
                case (8):
                    alert('Лето');
                    break;
                    
                case (9):
                case (10):
                case (11):
                    alert('Осень');
                    break;
                    
                
                default:
                    alert('Введите число от 1 до 12');
                    break; 
                }       
            }
}


function playWords () {
   
        let arrWords = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
        arrWords = arrWords.sort(() => Math.random() - 0.5);
        alert (arrWords);

        let questionOne = prompt('Какое слово было первым в списке?');
        let questionTwo = prompt('Какое слово было последним в списке?');

        if ((questionOne.toLowerCase() == arrWords[0].toLowerCase()) && (questionTwo.toLowerCase() == arrWords[6].toLowerCase())) {
            alert('Отличная память! ты все угадал!');
            
        } else if ((questionOne.toLowerCase() != arrWords[0].toLowerCase()) && (questionTwo.toLowerCase() != arrWords[6].toLowerCase())){
            alert('Ну-ка соберись и попробуй еще раз! Ничего не угадал');
        }

        else {
            alert('Ты был близок к победе! Ответил правильно на один вопрос!');
        }
        

}


