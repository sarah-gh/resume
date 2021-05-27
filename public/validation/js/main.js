// Regular expression (regex) from W3C HTML5.2 input specification:
// https://www.w3.org/TR/html/sec-forms.html#email-state-typeemail
let emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let phoneNumberRegExp = /^\+?(09)\)?[-. ]?([0-9]{9})$/;
let passRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%* #+=\(\)\^?&])[A-Za-z\d$@$!%* #+=\(\)\^?&]{6,}$/;
let bool = [false, false, false, false];

new Vue({
    el: "#app3",
    data: function() {
        return {
            fName: {
                value: "",
                validfName: true
            },
            errorFName: null,
            lName: {
                value: "",
                validlName: true
            },
            errorLName: null,
            email: {
                value: "",
                valid: true
            },
            errorEmail: null,
            number: {
                value: "",
                validNum: true
            },
            errorNumber: null,
            pass: {
                value: "",
                validPass: true
            },
            errorPass: null,
            message: {
                text: "",
                maxlength: 255
            },
            error: {
                fName: false,
                lName: false,
                email: false,
                pass: false,
                num: false
            },
            submitted: false,
            checkSub: false,
            isChrome: false
        };
    },
    mounted() {
        if (navigator.userAgent.indexOf("Chrome") != -1) {
            this.isChrome = true;
        }
    },
    methods: {
        submit: function(event) {
            if (this.isEmail(this.email.value) &&
                this.isPhone(this.number.value) &&
                this.checkPassword(this.pass.value) &&
                this.fName.value.length >= 3 &&
                this.lName.value.length >= 3) {
                this.submitted = true;
                event.preventDefault();
            } else {
                this.submitted = false;
                event.preventDefault();
            }

        },
        validate: function(type, value) {

            if (this.checkSub == true) {
                this.formCheck();
            }
            if (this.error.lName == true) {
                this.functionErrorLName();
            }
            if (this.error.fName == true) {
                this.functionErrorFName();
            }
            if (this.error.email == true) {
                this.functionErrorEmail();
            }
            if (this.error.pass == true) {
                this.functionErrorPass();
            }
            if (this.error.num == true) {
                this.functionErrorNumber();
            }
        },

        isEmail: function(value) {
            return emailRegExp.test(value);
        },
        isPhone: function(value) {
            return phoneNumberRegExp.test(value);
        },
        checkPassword: function(password) {
            return passRegExp.test(password);
        },
        functionErrorEmail: function() {
            if (this.isEmail(this.email.value)) {
                this.email.valid = true;
                this.error.email = false
            } else {
                this.email.valid = false;
                this.error.email = true
            }

            this.email.valid = this.isEmail(this.email.value) ? true : false;
            this.isEmail(this.email.value) == true ? this.errorEmail = false : this.errorEmail = true;
            console.log(this.error.email);
        },
        functionErrorFName: function() {
            if (this.fName.value.length >= 3) {
                this.fName.validfName = true;
                this.error.fName = false
            } else {
                this.fName.validfName = false;
                this.error.fName = true
            }
            this.fName.value.length >= 3 ? this.errorFName = false : this.errorFName = true;
        },
        functionErrorLName: function() {
            if (this.lName.value.length >= 3) {
                this.lName.validlName = true;
                this.error.lName = false
            } else {
                this.lName.validlName = false;
                this.error.lName = true;
            }
            this.lName.value.length >= 3 ? this.errorLName = false : this.errorLName = true;
            console.log(this.error.email);
        },
        functionErrorPass: function() {
            if (this.checkPassword(this.pass.value) == true) {
                this.pass.validPass = true;
                this.error.pass = false
            } else {
                this.pass.validPass = false;
                this.error.pass = true
            }
            this.checkPassword(this.pass.value) == true ? this.errorPass = false : this.errorPass = true;
        },
        functionErrorNumber: function() {
            if (this.isPhone(this.number.value) == true) {
                this.number.validNum = true;
                this.error.num = false;
            } else {
                this.number.validNum = false;
                this.error.num = true
            }
            this.isPhone(this.number.value) == true ? this.errorNumber = false : this.errorNumber = true;
        },
        formCheck: function() {
            this.isEmail(this.email.value) == true ? this.email.valid = true : this.email.valid = false;
            this.isPhone(this.number.value) == true ? this.number.validNum = true : this.number.validNum = false;
            this.checkPassword(this.pass.value) == true ? this.pass.validPass = true : this.pass.validPass = false;
            if (this.fName.value.length >= 3) {
                this.fName.validfName = true
            } else {
                this.fName.validfName = false
            }

            if (this.lName.value.length >= 3) {
                this.lName.validlName = true
            } else {
                this.lName.validlName = false
            }
            this.isEmail(this.email.value) == true ? this.errorEmail = false : this.errorEmail = true;
            this.isPhone(this.number.value) == true ? this.errorNumber = false : this.errorNumber = true;
            this.checkPassword(this.pass.value) == true ? this.errorPass = false : this.errorPass = true;
            this.fName.value.length >= 3 ? this.errorFName = false : this.errorFName = true;
            this.lName.value.length >= 3 ? this.errorLName = false : this.errorLName = true;
            this.checkSub = true;
        }
    },
    /**/
    watch: {
        "email.value": function(value) {
            this.validate("email", value);
            this.submitted = false;
        },
        "number.value": function(value) {
            this.validate("number", value);
            this.submitted = false;
        },
        "fName.value": function(value) {
            this.validate("fname", value);
            this.submitted = false;
        },
        "lName.value": function(value) {
            this.validate("lname", value);
            this.submitted = false;
        },
        "pass.value": function(value) {
            this.validate("pass", value);
            this.submitted = false;
        }
    }
});