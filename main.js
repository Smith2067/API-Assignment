const personPicture = document.getElementById('personPicture');
const personName = document.getElementById('personName');
const personDateofBirth = document.getElementById('personDateofBirth');
const personGender = document.getElementById('personGender');
const personOccupation = document.getElementById('personOccupation');
const personSkill = document.getElementById('personSkill');
const personPhoneNumber = document.getElementById('personPhoneNumber');
const personCountryState = document.getElementById('personCountryState');
const personAdressZip = document.getElementById('personAdressZip');
const personCreditNumber = document.getElementById('personCreditNumber');



function testing(){
    fetch('https://random-data-api.com/api/v2/users')
    .then((results) => {
        return results.json();
      })
        .then((data) => {
            const {first_name, last_name, date_of_birth, gender, employment, phone_number, address, credit_card} = data;
            personName.innerHTML = first_name + " " + last_name;
            personDateofBirth.innerHTML = "Born: " + date_of_birth;
            personGender.innerHTML = "Gender: " + gender;
            personOccupation.innerHTML = "Occupation: " + employment.title;
            personSkill.innerHTML = "Skill:  " + employment.key_skill;
            personPhoneNumber.innerHTML = "Cell Number: " + phone_number;
            personCountryState.innerHTML = "Country and City: " + address.city + " " + address.state + ", " + address.country;
            personAdressZip.innerHTML = "Address: " + address.street_address + ", " + address.zip_code;
            personCreditNumber.innerHTML = "Credit Card Number: " + credit_card.cc_number;
            
        })
 
    fetch("https://fakeface.rest/face/json")
        .then((results) => {
            return results.json();
        })
            .then((data) => {
                personPicture.src = data.image_url
            })

    document.getElementById('personContainer').style.display = "flex";
}