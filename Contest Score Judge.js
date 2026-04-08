var a=parseInt(prompt('Enter the numbers of correct answers:- '));
var b=parseInt(prompt('Enter the numbers of "partially-correct answers":- '));
var c=parseInt(prompt('Enter the numbers of wrong answers:- '));
if(a,b,c<0 || a,b,c>100)
{
    alert('invalid input!');
    return;
}
var score=3*a+b-2*c

if( score<0)
    score=0;
if(a+b+c>50)
{
    score-=10;
}

score>=60? alert('PASS,marks:- '+score):alert('FAIL,marks:- '+score);