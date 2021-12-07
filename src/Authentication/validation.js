function validation(user) {

    const errors = {};
    const {name, email, password, rePassword, date, address} = user;

    if(name === ""){
        errors.name = "** full name is required"
    }else if(name.length < 3){
        errors.name = "** length must between 10-20 "
    }else if(!isNaN(name)){
        errors.name = "** only characters are allowed"
    }

    if(email === ""){
        errors.email = "** email required"
    }else if(email.indexOf('@') <= 0){
        errors.email = "** @ at invalid position"
    }else if((email.charAt(email.length-4) !== '.') && (email.charAt(email.length-3) !== '.')){
        errors.email = "** '.' at invalid position"
    }

    if(password === ""){
        errors.password = "** password is required"
    }else if(password.length < 8 || password.length > 20){
        errors.password = "** password length must be greater than 8"
    }

    if(rePassword === ""){
        errors.rePassword = "** repassword is required"
    }else if(password !== rePassword){
        errors.rePassword = "** password don't match"
    }

    if(date === ""){
        errors.date = "** date is required"
    }

    if(address === ""){
        errors.address = "** address is required"
    }

    return errors;
}

export default validation
