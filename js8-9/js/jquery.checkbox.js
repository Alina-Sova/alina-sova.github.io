jQuery(document).ready(function(){
jQuery(".niceCheck").mousedown(
function() {
     changeCheck(jQuery(this));
});
jQuery(".niceCheck").each(
function() {
     changeCheckStart(jQuery(this));

});
});
function changeCheck(el)
{
     var el = el,
          input = el.find("input").eq(0);
     if(!input.attr("checked")) {
        el.css("background-position","0 -17px");
        input.attr("checked", true)
    } else {
        el.css("background-position","0 0");
        input.attr("checked", false)
    }
     return true;
}
function changeCheck(el)
{
    var el = el,
    input = el.find("input").eq(0);
    if(el.attr("class").indexOf("niceCheckDisabled")==-1)
    {
      if(!input.attr("checked")) {
        el.addClass("niceChecked");
            input.attr("checked", true);
        } else {
            el.removeClass("niceChecked");
            input.attr("checked", false).focus();
        }
    }
    return true;
}
function changeCheckStart(el)
{
var el = el,
        input = el.find("input").eq(0);
      if(input.attr("checked")) {
        }
     return true;
}
