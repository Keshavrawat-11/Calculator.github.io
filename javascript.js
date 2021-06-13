var x = document.querySelectorAll('button');
var v = document.getElementById('result');
str = '';
for (i of x) {
    i.addEventListener('click', (e) => {
        var info = e.target.innerText
        if (info == '=') {
            alert("The answer is :  " + eval(str));
        }
        else if (info == 'x') {
            str += '*';
            v.value = str;
        }
        else if (info == 'C') {
            str = '';
            v.value = '';
        }
        else if (info == 'del') {
            var l = str.length;
            if (str.length > 0) {
                str = str.substr(0, l - 1);
                v.value = str;
            }
        }
        else if ((info >= '0' && info <= '9') || info == '-' || info == '.' || info == '(' || info == ')') {
            str += info;
            v.value = str;
        }
        else if (info == '+' || info == '*' || info == '/') {
            if (str.length > 0) {
                str += info;
                v.value = str;

            }
            else {
                alert("Please enter a number before this operator");
            }

        }
        else {
            alert("Invalid input");
        }

    })
}
