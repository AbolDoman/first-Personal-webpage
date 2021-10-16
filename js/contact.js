$(document).ready(function () {
    var allow1=true;
    var allow2=true;
    var allow3=true;
    var allow4=true;
    var name=$('#name');
    var lname=$('#lname');
    var email=$('#email');
    var phone=$('#phone');

    $('#submit').click(function () {
        if(name.val()===''){
            name.next().css({'display':'block'});
            allow1=false;
        }
        else {
            name.next().css({'display':'none'});
            allow1=true;
        }
        if(lname.val()===''){
            lname.next().css({'display':'block'});
            allow2=false;
        }
        else {
            lname.next().css({'display':'none'});
            allow2=true;
        }
        if(email.val()===''){
            email.next().css({'display':'block'});
            allow3=false;
        }
        else {
            email.next().css({'display':'none'});
            allow3=true;
        }
        if(phone.val()===''){
            phone.next().css({'display':'block'});
            allow4=false;
        }
        else {
            phone.next().css({'display':'none'});
            allow4=true;
        }
        if(allow1===true && allow2===true && allow3===true && allow4===true){
            alert("thank you for your Opinion");
        }
    })
    $("#slider").slider({
        min : 0,
        max : 100,
        step : 0.5,
        change : function(){
            var n=$("#slider").slider("values",1);
            $('#sl').text(n);
            if(n>=0 && n<20){
                $('#imoji').css({
                    'background-position-x': '-3px',
                    'background-position-y': '-1.5px'
                })
            }
            if(n>=20 && n<40){
                $('#imoji').css({
                    'background-position-x': '-3px',
                    'background-position-y': '-117px'
                })
            }
            if(n>=40 && n<60){
                $('#imoji').css({
                    'background-position-x': '-237px',
                    'background-position-y': '-117px'
                })
            }
            if(n>=60 && n<=80){
                $('#imoji').css({
                    'background-position-x': '-120px',
                    'background-position-y': '-235px'
                })
            }
            if(n>=80 && n<=100){
                $('#imoji').css({
                    'background-position-x': '-3px',
                    'background-position-y': '-234px'
                })
            }
        }
    })
})