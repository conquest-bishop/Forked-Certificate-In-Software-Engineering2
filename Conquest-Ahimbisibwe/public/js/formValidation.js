const Validate=(event)=>{
    let error = 0;
    // picking input fields with their names
    let firstName = document.register.firstname
    let lastName = document.register.lastname
    let date = document.register.date
    let gender = document.register.gender
    let country = document.register.country
    let state = document.register.state
    let town = document.register.town
    let zip = document.register.zip
    let phoneone = document.register.phoneone
    let phonetwo = document.register.phonetwo
    let email = document.register.email

    // picking error fields
    let errorFirstName = document.getElementById("firstnameError")
    let errorLastName = document.getElementById("firstnameError")
    let errorDate = document.getElementById("dateError")
    let errorGender = document.getElementById("genderError")
    let errorCountry = document.getElementById("countryError")
    let errorState = document.getElementById("stateError")
    let errorTown = document.getElementById("townError")
    let errorZip = document.getElementById("zipError")
    let errorPhone1 = document.getElementById("phoneoneError")
    let errorPhone2 = document.getElementById("phonetwoError")
    let errorEmail = document.getElementById("emailError")


    // validating for emptyness
    if(firstName.value == ""){
        firstName.style.border = "1px solid red";
        errorFirstName.textContent = "first name is required";
        errorFirstName.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        firstName.focus();
        error++;
    }else if(firstName.value.length < 2){
        firstName.style.border = "1px solid red";
        errorFirstName.textContent = "first name should be atleast 2 characters";
        errorFirstName.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        firstName.focus();
        error++;

    // }else if(firstName.value.length > 15){
    //     firstName.style.border = "1px solid red";
    //     errorFirstName.textContent = "should be atleast 2 characters";
    //     errorFirstName.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
    //     firstName.focus();
    //     error++
    }else{
        firstName.style.border = "1px solid green";
        lastName.focus();
    }

    if(lastName.value == ""){
        lastName.style.border = "1px solid red";
        errorLastName.textContent = "last name is required";
        errorLastName.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        lastName.focus();
        error++;
    }else if(lastName.value.length < 2){
        lastName.style.border = "1px solid red";
        errorLastName.textContent = "should be atleast 2 characters";
        errorLastName.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        lastName.focus();
        error++;

    }else if(lastName.value.length > 15){
        lastName.style.border = "1px solid red";
        errorLastName.textContent = "last name should be atleast 2 characters";
        errorLastName.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        lastName.focus();
        error++;
    }else{
        lastName.style.border = "1px solid green";
        email.focus();
        
    }

    // validating date emptiness 
    if(date.value == ""){
        date.style.border = "1px solid red";
        errorDate.textContent = "date is required";
        errorDate.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        date.focus();
        error++;
    }else{
        date.style.border = "1px solid green";
        gender.focus();
    }

    // validating gender emptiness 
    if(gender.value == ""){
        gender.style.border = "1px solid red";
        errorGender.textContent = "gender is required";
        errorGender.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        gender.focus();
        error++;
    }else{
        gender.style.border = "1px solid green";
        country.focus();
    }

    // validating country emptiness 
    if(country.value == ""){
        country.style.border = "1px solid red";
        errorCountry.textContent = "country is required";
        errorCountry.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        country.focus();
        error++;
    }else{
        country.style.border = "1px solid green";
        state.focus();
    }

    // validating state emptiness 
    if(state.value == ""){
        state.style.border = "1px solid red";
        errorState.textContent = "state is required";
        errorState.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        state.focus();
        error++;
    }else{
        state.style.border = "1px solid green";
        town.focus();
    }


    // validating town emptiness 
    if(town.value == ""){
        town.style.border = "1px solid red";
        errorTown.textContent = "town is required";
        errorTown.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        town.focus();
        error++;
    }else{
        town.style.border = "1px solid green";
        zip.focus();
    }


    // validating zip emptiness 
    if(zip.value == ""){
        zip.style.border = "1px solid red";
        errorZip.textContent = "zip is required";
        errorZip.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        zip.focus();
        error++;
    }else{
        zip.style.border = "1px solid green";
        phoneone.focus();
    }

    // validating phoneone emptiness 
    const phoneRegex = /^(\+256|0)[\d]{9}$/
    
    if(phoneone.value == ""){
        phoneone.style.border = "1px solid red";
        errorPhone1.textContent = "phone is required";
        errorPhone1.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        phoneone.focus();
        error++;
    }else if(!(phoneRegex.test(phoneone.value) || phoneRegex.test(phoneone.value))){
        phoneone.style.border = "1px solid red";
        errorPhone1.textContent = "right phoneone '+256/07..";
        errorPhone1.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        phoneone.focus();
        error++;  
    
    }else{
        phoneone.style.border = "1px solid green";
        phonetwo.focus();
    }

    // validating phonetwo emptiness 
    if(phonetwo.value == ""){
        phonetwo.style.border = "1px solid red";
        errorPhone2.textContent = "phone is required";
        errorPhone2.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        phonetwo.focus();
        error++;
    }else if(!(phoneRegex.test(phonetwo.value) || phoneRegex.test(phonetwo.value))){
        phonetwo.style.border = "1px solid red";
        errorPhone2.textContent = "right phonetwo '+256/07..";
        errorPhone2.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
        phonetwo.focus();
        error++; 
    }else{
        phonetwo.style.border = "1px solid green";
        email.focus();
    }

     // // validating for emptyness
     const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

     if(email.value == ""){
         email.style.border = "1px solid red";
         errorEmail.textContent = "email is required";
         errorEmail.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
         email.focus();
         error++;
     }else if(!EmailRegex.test(email.value)){
         email.style.border = "1px solid red";
         errorEmail.textContent = "wrong email type";
         errorEmail.style = "color: red; font-size: 11px; font-family: arial, sans-serif;";
         email.focus();
         error++;
         
     }else{
         email.style.border = "1px solid green";
         
     }


     if(error > 0){
        event.preventDefault();
    }else{
        window.location.href = "../newhome.html"
    
    }



}