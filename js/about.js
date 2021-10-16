setInterval(function(){
    var count=document.getElementById('count-down-text');
    var tar=new Date(2025,9,11,3,3,3);
    var now=new Date().getTime();
    var dis=tar - now;
    var days= Math.floor(dis/(1000*60*60*24));
    var hours=Math.floor((dis%(1000*60*60*24))/(1000*60*60));
    var min=Math.floor((dis % (1000*60*60))/(1000*60));
    var sec=Math.floor((dis % (1000*60))/(1000));
    var years= Math.floor(days/365);
    days=days % 365;

    count.innerHTML=years + ' years ' + days + ' days ' + hours + ' hours ' + min +' minute '+ sec + ' seconds ';
    }, 1000);
    window.onscroll=function(){
        if(document.documentElement.scrollTop > 600){
            document.getElementById('go-to-top').style.display='block';
        }
        else {
            document.getElementById('go-to-top').style.display='none';
        }
    }
$(document).ready(function () {
    $("#sec-1").on('click', function(e) {
        e.preventDefault();
        $("HTML, BODY").animate({
            scrollTop: 0
        }, 2000);
    });
    $("#sec-2").on('click', function(e) {
        e.preventDefault();
        $("HTML, BODY").animate({
            scrollTop: 970
        }, 2000);
    });
    $("#sec-3").on('click', function(e) {
        e.preventDefault();
        $("HTML, BODY").animate({
            scrollTop: 1441+154
        }, 2000);
    });
    $("#sec-4").on('click', function(e) {
        e.preventDefault();
        $("HTML, BODY").animate({
            scrollTop: 2045+154+154
        }, 2000);
    });
    $("#go-to-top").on('click', function(e) {
        e.preventDefault();
        $("HTML, BODY").animate({
            scrollTop: 0
        }, 2000);
    });
    $('#my-pic').hover(function () {
            $('#mask').css({
                'transform' : 'scale(1)'
            })
        },
        function () {
            $('#mask').css({
                'transform' : 'scale(0)'
            })
        });

    $('.fa-heart').click(function () {

        if($(this).hasClass('liked')){
            $(this).css({
                'animation': 'dislike 1s ease',
                '-webkit-animation': 'dislike 1s ease',
                '-moz-animation': 'dislike 1s ease',
                'color': 'white'
            });
            $(this).next().next().css({
                'animation': 'dislike 1s ease',
                '-webkit-animation': 'dislike 1s ease',
                '-moz-animation': 'dislike 1s ease',
                'display': 'none'
            });

            $(this).removeClass('liked');

            $(this).attr('title','click to like')
        }
        else {
            $(this).css({
                'animation': 'like 1s ease',
                '-webkit-animation': 'like 1s ease',
                '-moz-animation': 'like 1s ease',
                'color': 'red'
            });
            $(this).next().next().css({
                'animation': 'like 1s ease',
                '-webkit-animation': 'like 1s ease',
                '-moz-animation': 'like 1s ease',
                'display': 'block',
            });

            $(this).addClass('liked');

            $(this).attr('title','click to dislike')
        }

    })

    $('#close').click(function () {
        $('.pop').animate({
            'width' : '0',
        },1000)
    });
    $('.toggle').click(function () {

        $('.pop').animate({
            'width' : '30%',
            'display' : 'block'
        },1000)
    });

    var allow1=true;
    var allow2=true;
    var allow3=true;
    var allow4=true;
    var name=$('#name');
    var lname=$('#lname');
    var exp=$('#exp');
    var job=$('#job');
    var img=$('#img');
    var teleg=$('#tele');
    var insta=$('#instag');

    $('#be-friend-btn').click(function () {
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
        if(job.val()===''){
            job.next().css({'display':'block'});
            allow3=false;
        }
        else {
            job.next().css({'display':'none'});
            allow3=true;
        }
        if(exp.val()===''){
            exp.next().css({'display':'block'});
            allow4=false;
        }
        else {
            exp.next().css({'display':'none'});
            allow4=true;
        }


        if(allow1===true && allow2===true && allow3===true && allow4===true){
            var col=$('<div class="col-4"></div>');
            var card=$('<div class="card"></div>');

            var cardh=$('<div class="card-header"></div>');
            var image=$('<img sec="" alt="friends">');
            cardh.append(image);


            var cardb=$('<div class="card-body"></div>');
            var h=$('<h1>'+name.val()+lname.val()+'</h1>');
            var p=$('<p>'+'<small>'+job.val()+'</small>'+exp.val()+'</p>');
            cardb.append(h,p);

            var cardf=$('<div class="card-footer row"></div>');
            var social=$('<div class="social-media col-6"></div>');
            var ins=$('<a target="_blank"><span class="fa fa-instagram"></span></a>');
            var tel=$('<a target="_blank"><span  class="fa fa-telegram"></span></a>');
            var twee=$('<a href="#"><span  class="fa fa-twitter"></span></a>');
            var lin=$('<a href="#"><span class="fa fa-linkedin"></span></a>');
            ins.attr('href','https://www.instagram.com/'+insta.val()+'/');
            tel.attr('href','https://t.me/'+teleg.val());
            social.append(ins,tel,twee,lin);

            var follow=$('<div class="col-6 follow"><h5>FOLLOW</h5></div>');
            cardf.append(social,follow);

            card.append(cardh,cardb,cardf);
            col.append(card);
            $('#friends').append(col);

        }

    });
})
