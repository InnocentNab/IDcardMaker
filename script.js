const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    var image = document.getElementById('image').value;
    var Surname = document.getElementsByClassName('surname')[0].value;
    var GivenName = document.getElementsByClassName('Given-Name')[0].value;
    var selectSex = document.getElementById('sex');
    var sex = selectSex.options[selectSex.selectedIndex].text
    var Nationality = document.getElementsByClassName('nation')[0].value;
    var DOB = document.getElementsByClassName('dob')[0].value;
    var btn = document.getElementsByClassName('btn')
    var result = document.getElementsByClassName('result')
    const submit = document.getElementsByClassName('submit')[0];
    var cardContainer = document.getElementById('cardContainer')
    var resultSurname = document.getElementById('resultSurname')
    var resultGivenName = document.getElementById('resultGivenName')
    var resultSex = document.getElementById('resultSex')
    var resultnation = document.getElementById('resultnation')
    var resultdob = document.getElementById('resultdob')
    var resDOB =document.getElementById('resDOB')
    var cardNumverCont =document.getElementById('cardNumver')
     var DateIssue =document.getElementById('DateIssue');
     var DateExpiry =document.getElementById('DateExpiry');
     var profileImage = document.getElementById('profileImage')
     var image =document.getElementById('image').files[0]
     var DOB = document.getElementsByClassName('dob')[0].value;
    
     //console.log(GivenName, Surname);

    resultSurname.innerText = Surname;
    resultGivenName.innerText = GivenName;
    resultSex.innerText = sex;
    resultnation.innerText = Nationality;
    resultdob.innerText=DOB;

    var cardNumver = `${generateFourNumbers()} ${generateFourNumbers()} ${generateFourNumbers()}`
    cardNumverCont.innerText = cardNumver

    var dd = new Date().getDate()
    var mm = new Date().getMonth()+1
    var yyyy = new Date().getFullYear()
    var issuedDate = `${dd}-${mm}-${yyyy}`
    DateIssue.innerText = issuedDate
    var ExpiryDate = `${dd}-${mm}-${yyyy+5}`
    DateExpiry.innerText = ExpiryDate

    profileImage.src=URL.createObjectURL(image)
    
   // console.log(image);
    
    cardContainer.classList.remove('hidden')
    cardContainer.classList.add('flex')
})

function generateFourNumbers() {
    var DOCUMENT_NUMBERS = '';
    while(DOCUMENT_NUMBERS.length<4){
        var randomNumber = Math.random() * 10 + 1;
        if(DOCUMENT_NUMBERS.indexOf(randomNumber)===-1){
            DOCUMENT_NUMBERS+=randomNumber.toFixed(0);
        }
    }
    return DOCUMENT_NUMBERS;
}


