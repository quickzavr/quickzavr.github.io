//Close and open form
var formMain = document.getElementById("form-wrapper");
var formToggle = document.querySelector(".form__toggle");

formToggle.addEventListener("click", function() {
    if (formMain.classList.contains("form--opened")) {
        formMain.classList.remove("form--opened");
        formMain.classList.add("form--closed");
    } else {
        formMain.classList.add("form--opened");
        formMain.classList.remove("form--closed");
    }
});

//Validation and tabs
var radioTab = document.getElementsByName("tab");
var labelTab = document.querySelectorAll("label.tab-control");
var formTab = document.getElementsByClassName("form-tab");
var checkAgree = document.getElementById("agree");

function nextTab(n) {
    var dataTab = formTab[n].getElementsByTagName("input");
    var valid = true;
    var i;
    //Validation
    for (i = 0; i < dataTab.length; i++) {
        var value = dataTab[i].value;
        if (dataTab[i].value.trim() === "") {
            dataTab[i].parentNode.classList.add("invalid");
            valid = false;
        } else if (!checkAgree.checked) {
            valid = false;
        } else {
            dataTab[i].parentNode.classList.remove("invalid");
        }
    }
    if(!valid) {
        return;
    }
    
    if (n === 1) {
        var phoneNum = document.querySelector('input[name="tel"]').value;
        //send form data by ajax
        //get form values
        var form = document.getElementById('form-1');
        var data = new FormData(form);
        
        //send data to server
        var req = new XMLHttpRequest();
        req.open('POST', 'https://reqres.in/api/users', true);
        req.send(data);
        req.onreadystatechange = function() {
            if (this.readyState === 4) {
                if (req.status !== 201) {
                    alert('Sorry, something went wrong!'); 
                    return;
                }
                document.getElementsByClassName('phone-number')[0].innerHTML = phoneNum;
                showTab(n);
            }
        };
        return;
    }
    
    showTab(n);
}

function showTab(n) {
        //Tabs
    radioTab.forEach(function(tab){
        tab.removeAttribute("checked");
        tab.setAttribute("disabled", "disabled");
    });
     radioTab[n+1].removeAttribute("disabled");
     radioTab[n+1].setAttribute("checked", "checked");
    
    var color = n === 0 ? "#D47C01" : "#E93A28";
    for (i = 0; i < radioTab.length; i++) {
        labelTab[i].style.borderColor = color;
    }
    labelTab[n+1].style.borderBottomColor = "#FFFFFF";
}

//Send join-code
var sendForm = document.getElementById("form-2");
sendForm.addEventListener("submit", function(e){
    var code = document.querySelector('input[name="code"]');
    if (code.value.trim() === "") {
        code.parentNode.classList.add("invalid");
        e.preventDefault();    
        return;
    }
    sendForm.submit();
});