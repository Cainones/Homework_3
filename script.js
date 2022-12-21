const student = "Корнаушенков Фёдор Андреевич"; 

document.getElementById("student").innerHTML = student;

const guestsList = [{name: 'Пономарев Андрей Алексеевич', gender: 'male', birth: '11.12.1980'},
                    {name: 'Рыбакова Алина Семёновна', gender: 'female', birth: '16.04.1974'},
                    {name: 'Молчанов Даниил Ильич', gender: 'male', birth: '21.03.1984'},
                    {name: 'Смирнова София Львовна', gender: 'female', birth: '02.01.1987'},
                    {name: 'Владимиров Артём Григорьевич', gender: 'male', birth: '07.12.1990'},
                    {name: 'Маслова Елизавета Егоровна', gender: 'female', birth: '10.10.1997'},
                    {name: 'Назарова Вера Романовна', gender: 'female', birth: '01.05.1983'},
                    {name: 'Иванов Иван Фёдорович', gender: 'male', birth: '05.05.1999'},
                    {name: 'Дмитриев Алексей Григорьевич', gender: 'male', birth: '12.11.1998'},
                    {name: 'Овчинников Платон Александрович', gender: 'male', birth: '26.05.1999'},
                    {name: 'Мартынова Софья Тимуровна', gender: 'female', birth: '07.06.1995'},
                    {name: 'Соколов Михаил Адамович', gender: 'male', birth: '11.03.1979'}]

const guestsAmount = guestsList.length
const guestsFemale = guestsList.filter(guest => guest.gender == 'female').length
const guestsMale = guestsList.filter(guest => guest.gender == 'male').length

function calculate_age(birthdayDate) {
    currentlyDate = new Date();
    birthdayDate = new Date(birthdayDate);
    birthdayDate.setMonth(birthdayDate.getMonth()-1);

    birthday_this_year = new Date(birthdayDate);
    birthday_this_year.setFullYear(currentlyDate.getFullYear());
    age_diff = new Date(currentlyDate - birthdayDate);
    age = Math.abs(age_diff.getFullYear() - 1970);

    if ((currentlyDate - birthday_this_year) < 0) {
        age = age - 1;
    } 
    return age
}

console.log(`Кол-во гостей: ${guestsAmount}`)
console.log(`Мужчин: ${guestsMale}`)
console.log(`Женщин: ${guestsFemale}`)
console.log('Список гостей:')

for (let guest_index in guestsList) { (guest = guestsList[guest_index])
    fullName = guest.name.split(' ');
    fullName = `${fullName[0]} ${fullName[1].substring(0, 1)}. ${fullName[2].substring(0, 1)}.` 
    gender = guest.gender == 'male' ? 'Мущина' : 'Женщина';
    birthDate = guest.birth.split('.')
    age = calculate_age(new Date(birthDate[2], 
                                 birthDate[1], 
                                 birthDate[0]))
    console.log(`${fullName}, ${gender}, Возраст: ${age}`)
}