//显示包含天数的日历
$(function () {
	$('#datetimepicker1').datetimepicker({
		format: 'yyyy年mm月dd日',//日期格式化，只显示日期
		language:  'zh-CN',
		weekStart: 0,
		todayBtn:  true,
		autoclose: true,
		todayHighlight: true,
		startView: 'month',
		minView:'month',
		forceParse: 0,
	});
	$("#datetimepicker1").datetimepicker("setDate", new Date());


});
//显示只含月份的日历
$(function () {
	$('#datetimepicker2').datetimepicker({
		format: 'yyyy年mm月',//日期格式化，只显示日期
		language:  'zh-CN',
		weekStart: 0,
		todayBtn:  true,
		autoclose: true,
		todayHighlight: true,
		startView: 'year',
		minView:'year',
		forceParse: 0
	});
	$("#datetimepicker2").datetimepicker("setDate", new Date());
});
//显示天数的日历按钮
function showDay() {
	$('#datetimepicker1').css('display','');
	$('#datetimepicker2').css('display','none');

}
//显示月份的日历按钮
function showMonth() {
	$('#datetimepicker1').css('display','none');
	$('#datetimepicker2').css('display','');
}


function btn_click1(){
	//这里写你要执行的语句
	var btn2 = document.getElementById('btn2');
	btn2.style.top="64%";
	var btn3 = document.getElementById('btn3');
	btn3.style.top="73%";
	var btn4 = document.getElementById('btn4');
	btn4.style.top="82%";
	var btn5 = document.getElementById('btn5');
	btn5.style.top="91%";
	}
	function btn_click2(){
	//这里写你要执行的语句
	var btn2 = document.getElementById('btn2');
	btn2.style.top="9%";
	var btn3 = document.getElementById('btn3');
	btn3.style.top="73%";
	var btn4 = document.getElementById('btn4');
	btn4.style.top="82%";
	var btn5 = document.getElementById('btn5');
	btn5.style.top="91%";
	}
	function btn_click3(){
	//这里写你要执行的语句
	var btn3 = document.getElementById('btn3');
	btn3.style.top="18%";
	var btn2 = document.getElementById('btn2');
	btn2.style.top="9%";
	var btn4 = document.getElementById('btn4');
	btn4.style.top="82%";
	var btn5 = document.getElementById('btn5');
	btn5.style.top="91%";
	}
	function btn_click4(){
	//这里写你要执行的语句
	var btn3 = document.getElementById('btn3');
	btn3.style.top="18%";
	var btn2 = document.getElementById('btn2');
	btn2.style.top="9%";
	var btn4 = document.getElementById('btn4');
	btn4.style.top="27%";
	var btn5 = document.getElementById('btn5');
	btn5.style.top="91%";
	}
	function btn_click5(){
	//这里写你要执行的语句
	var btn3 = document.getElementById('btn3');
	btn3.style.top="18%";
	var btn2 = document.getElementById('btn2');
	btn2.style.top="9%";
	var btn4 = document.getElementById('btn4');
	btn4.style.top="27%";
	var btn5 = document.getElementById('btn5');
	btn5.style.top="36%";
	}
	
	//bootstrap-tree_view
	function StateShow0()
    {
        $(".二级菜单类名").slideToggle("fast");

        if ($("#一级菜单ID").hasClass("glyphicon-plus-sign图标类1")) 
            {
                $("#一级菜单ID").addClass("glyphicon-minus-sign图标类2");
                $("#一级菜单ID").removeClass("glyphicon-plus-sign");
            } 
        else 
            {
                $("#一级菜单ID").addClass("glyphicon-plus-sign");
                $("#一级菜单ID").removeClass("glyphicon-minus-sign");
                $(".二级菜单1类名").css("display","none");
                $(".二级菜单2类型").css("display","none");
                $("#二级菜单1ID").removeClass("glyphicon-minus-sign");
                $("#二级菜单1ID").addClass("glyphicon-plus-sign");
                $("#二级菜单2ID").removeClass("glyphicon-minus-sign");
                $("#二级菜单2ID").addClass("glyphicon-plus-sign");
            }
    }
 

    