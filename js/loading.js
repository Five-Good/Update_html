$(document).ready(function(){
  let pathname = window.location.pathname;
  let consult = pathname.split("/");
  let number = consult.length

    $("header").load("header.html");
    $('.sideWP').load("side.html");
    $('.pagination').load('pagination.html');
    $('section.detail').load('detail.html');
    $('section.auditDetail').load('auditDetail.html');
    $('.inputAmount').load('inputAmount.html');
    $('.mobileTableWP.checkLook').load('mobileTableWP_checkLook.html');
    
//datePicker
    let n = $('body').find('.datePicker').length
    for(let i=0;i<n;i++){
        $('body').find('.datepicker').eq(i).prop('id','date'+i);
    }


});