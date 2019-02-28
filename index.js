/*1.Используя конструкцию if..else, напишите код, который будет спрашивать: 
 'Какой сейчас год?'.Если посетитель вводит '2015', то выводить 'Вы правы!',
  если что-то другое — выводить 'С луны свалися? 2015!'. */

/*2. Используя конструкцию if..else, напишите код, который будет спрашивать: 'Введите любое целое число?'

Затем выведите alert:
1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю. */

/*3. Напишите код, который будет запрашивать логин пользователя (prompt).
Если посетитель вводит 'admin', то спрашивать пароль, если нажал отмена (escape) — выводить 'Canceled', если вводит что-то другое — 'Access denied'.

Пароль проверять так. Если введён пароль 'passw0rd', то выводить 'Welcome home!', иначе — 'Wrong password', при отмене — 'Canceled'.

4. Перепишите if с использованием оператора '?':
var a = 1, b = 2;

if (a + b >= 3) {
	result = 'Yep!';
} else {
  result = 'Noup!';
}
5. +Перепишите if..else с использованием нескольких операторов '?':

var name = 'admin', text;

if (name == 'admin') {
  text = 'Hi';
} else if (name == 'manager') {
  text = 'Hello';
} else if (name == '') {
  text = 'No login';
} else {
  text = '';
}

1.  http://www.codewars.com/kata/convert-a-number-to-a-string/
2.  http://www.codewars.com/kata/convert-a-string-to-a-number/ */


/*1*/

function Year()
{   
var year=document.getElementById("year").value;
if(year==2015)
{
   
    alert('Вы правы!');

}
else{
    alert('С луны свалися? 2015!');
}
}
/*2*/
function Number(){
    var number=document.getElementById("number").value;
    if(number>0)
        alert(1);
    else{
        if(number<0)
            alert(-1);
        else
          if(number==0)
          alert(0)

    }
}
/*3 */
function Null(str,otv){
    if(str==null)
        alert('Cancelled'); 
    else
        alert(otv);
}
function Login(){
   
    var loginA="admin";
    var login = prompt('Введите логин',"");
    
    if(loginA==login)
    {   console.log("login",login);
        var password = prompt('Введите пароль',"");
          Password(password);
    }
        else
          {  console.log("login",login);
              Null(login,'Access denied');}


}
function Password(password){
    var passwordA="passw0rd";
    if(password==passwordA)
            alert('Welcome home!');
        else{
            Null(password,'Wrong password')
        }


}
/*4 */
var a = 1, b = 2;
((a+b)>=3)?result = 'Yep!':result = 'Noup!';

/*5 */
var name = 'admin', text;

(name == 'admin')?text = 'Hi':
(name == 'manager')?text = 'Hello':
(name == '')? text = 'No login': 
text = '';
