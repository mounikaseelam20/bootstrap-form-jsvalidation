    function fnname() {
        sNamepattern = /^[A-Za-z]+$/;
        sName = document.getElementById('userName').value;
        if (sName.match(sNamepattern)) {
            document.getElementById('uincorrect').style.display = "block";
            document.getElementById('name').classList.add("has-success");
            document.getElementById('ucorrect').style.display = "none";
            document.getElementById('name').classList.remove("has-error");

        } else {
            document.getElementById('uincorrect').style.display = "none";
            document.getElementById('ucorrect').style.display = "block";
            document.getElementById('name').classList.add("has-error");
        }
    }

    function fnpassword() {
        sPwdpattern = /^.+$/;
        sPwd = document.getElementById('password').value;
        if (sPwd.match(sPwdpattern) && sPwd.length > 10) {
            document.getElementById('pcorrect').style.display = "block";
            document.getElementById('pw').classList.add("has-success");
            document.getElementById('pincorrect').style.display = "none";
            document.getElementById('pw').classList.remove("has-error");

        } else {
            document.getElementById('pcorrect').style.display = "none";
            document.getElementById('pincorrect').style.display = "block";
            document.getElementById('pw').classList.add("has-error");
        }
    }

    function fnamount() {
        nAmount = document.getElementById('amount').value;
        if (nAmount > 0) {
            document.getElementById('acorrect').style.display = "block";
            document.getElementById('amt').classList.add("has-success");
            document.getElementById('aincorrect').style.display = "none";
            document.getElementById('amt').classList.remove("has-error");

        } else {
            document.getElementById('aincorrect').style.display = "block";
            document.getElementById('amt').classList.add("has-error");
            document.getElementById('acorrect').style.display = "none";
        }
    }

    function fndetails() {

        alert('username:   ' + sName + '  amount:   ' + 'Rs ' + nAmount);
    }
