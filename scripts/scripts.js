function doMath() {
    let numStr = document.getElementById("number_field").value;
    let total = 0;
    let num;

    if (numStr == "") {
        alert("Enter a number, please!");
        return false;
    }
    else {
        num = parseInt(numStr);

        //Easy for loop to satisfy the requirements. Hard to say where I'd use these
        //with a website. More research needed - but at least I can show I know it!
        for (let i = 0; i < num; i++) {
            total += num;
        }
    }

    //Setting innerHTML to a label was not working. Alert will have to do.
    //Javascript doing its thing...
    alert(`${num} squared is ${total}`);
}

function sendMessage() {
    let info = {
        name: "",
        email: "",
        query: "",
        comment: ""
    }
    //Simple regex: characters with a space. Will fail numerous names, but it's a start.
    //Same with the email situation. Simple pattern... for now?
    let regName = /^[a-zA-Z ]+$/;
    let regMail = /\S+@\S+\.\S+/;
    let nameIn = document.getElementById("cont_name").value;
    let emailIn = document.getElementById("cont_email").value;
    let commentIn = document.getElementById("cont_text").value;

    //Test name
    if (!regName.test(nameIn)) {
        alert(`Name field is invalid! Re-enter, please!`);
        return false;
    }
    else {
        info.name = nameIn;
    }

    //Test email
    if (!regMail.test(emailIn)) {
        alert(`Email is invalid! Please re-enter.`);
        return false;
    }
    else {
        info.email = emailIn;
    }

    info.query = document.getElementById("cont_choice").value;

    if (commentIn == "") {
        alert(`Please add a comment!`);
        return false;
    }
    else {
        info.comment = commentIn;
    }

    //Split first name to send a message back
    let greet = info.name.split(" ");
    alert(`Thanks, ${greet[0]}. We'll get back to you ASAP!`);
}

function register() {
    /*largely a copy of the previous form - I would have built on my login form, but
     * it feels pointless without implementing something in the back to make it
     * functional
     */
    let member = {
        name: "",
        email: ""
    }
    let regName = /^[a-zA-Z ]+$/;
    let regMail = /\S+@\S+\.\S+/;
    let nameIn = document.getElementById("reg_name").value;
    let emailIn = document.getElementById("reg_email").value;

    //Test name
    if (!regName.test(nameIn)) {
        alert(`Name field is invalid! Re-enter, please!`);
        return false;
    }
    else {
        member.name = nameIn;
    }

    //Test email
    if (!regMail.test(emailIn)) {
        alert(`Email is invalid! Please re-enter.`);
        return false;
    }
    else {
        member.email = emailIn;
    }

    alert(`Thanks for registering, ${member.email}!\nDon't add us to your spammer list!`)
}
