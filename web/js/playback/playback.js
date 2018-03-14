// 时间横向滑动对象缓存
var timeBarCache = {};
//存储视频时间段
var timeDatas=[];
/**
 * 初始化 , { timeBarId,时间控件id timeChange:function(){//时间修改回调函数 } height:高度 }
 */
$.fn.initViedoBack = function(option) {
	var content = $(this);
	var playBack = new PlayBack();
	// 默认值
	var defaults = {
		timeBarId : 'timebar',
		height : 60
	};
	playBack.init(content, $.extend(defaults, option));
}
/**
 * 设置回调
 */
$.fn.dreawCallback=function(datas){
	timeDatas=datas;
	var curTimeBar = timeBarCache['timeBar_'+$(this).attr('id')];
		if(curTimeBar){
					for(var i=0;i<datas.length;++i)
					{
						curTimeBar.addFile(datas[i].s_time,datas[i].e_time,1);
					}
					curTimeBar.repaint();
				}
	}
$.fn.setMouseUpCallback = function(time,canvasObject,timeobj){
	var content = $(this);
	var curTimeBar = timeBarCache['timeBar_'+content.attr('id')];
	curTimeBar.curTime = time;
	if(curTimeBar.option.timeChange){
		startTime=time;
		curTimeBar.option.timeChange(time);
		if(searchTimeQuantum(time)){	
	    }else{
			}
	}
	return;
}
/**
 * 设置时间
 */
$.fn.setTime = function(time){
	var curTimeBar = timeBarCache['timeBar_'+$(this).attr('id')];
		if(curTimeBar){
			//curTimeBar.curTime = time;
			if ((navigator.userAgent.indexOf('MSIE') >= 0) 
				&& (navigator.userAgent.indexOf('Opera') < 0)){
				var ieversion=navigator.appVersion.match(/8./i)=="8." ? 'IE8' : 'other version';
				//ie8下这个方法会报错
				if(ieversion!='IE8'){
					curTimeBar.setMidLineTime(time);
				}
			}
			/*else if (navigator.userAgent.indexOf('Firefox') >= 0)
			{
				curTimeBar.setMidLineTime(time);
			}*/
			//除了ie8等
			else{
				    curTimeBar.setMidLineTime(time);
				}
    } 
		
}
/**
 * 获取时间
 */
$.fn.getTime = function(time){
	var curTimeBar = timeBarCache['timeBar_'+$(this).attr('id')];
	if(curTimeBar){
		if(curTimeBar.getMidLineTime){
			return curTimeBar.getMidLineTime();
		}else if(curTimeBar.curTime){
			return curTimeBar.curTime;
		}else{
			return new Time().getStringTime();
		}
	}
}

function PlayBack() {
	this.init = function(content, option) {//content当前对象 option:当前对象加上设置的一些timbar的参数（高，放插件的id）
		if (navigator.appName == "Microsoft Internet Explorer") {
			content.append("<object classid='clsid:FD5C6577-4AF5-4794-9B2F-850091CF5235' standby='Waiting...' id='"
							+ option.timeBarId
							+ "' ><param name='activextype' value='3'></object>");
		} else {
			content.append("<canvas id='" + option.timeBarId + "'></canvas>");
		}
		var tTimeBar;
		if (navigator.appName != "Microsoft Internet Explorer") {
			var a = document.getElementById(option.timeBarId);//得到id的对象
			if (a.getContext) {
			    tTimeBar = new TimeBar(a, content.width(), option.height);//创建timbar对象
				if (option.timeChange) {//如果时间发生变化
					tTimeBar.setMouseUpCallback(function(c){//回调
						if (c) {
							$("#" + content.attr('id')).setMouseUpCallback(c);
						} else {
							$("#" + content.attr('id')).setMouseUpCallback(this.getMidLineTime());
						}
					});
				}
			} else {
				$("#" + option.timeBarId).html("");//没有得到 则设置为空
			}
		} else {
			$("#" + option.timeBarId).width(content.width());
			$("#" + option.timeBarId).height(option.height);
			tTimeBar = document.getElementById(option.timeBarId);
		}
		tTimeBar.option = option;
		timeBarCache['timeBar_'+content.attr('id')] = tTimeBar;
		
		content.bind("resize", function() {
			$("#" + option.timeBarId).width(content.width());
			if (navigator.appName != "Microsoft Internet Explorer") {
				if (tTimeBar != null) {
					tTimeBar.resize(content.width(), option.height);
				}
			}
		});
	}
}
function searchTimeQuantum(time){
	var length=timeDatas.length;
	var searchTime=new Date(time).getTime();
	if(length===0){
		return false;
	}else{
		  for(var i=0;i<length;++i)
		  {
			 var sTiem= new Date(timeDatas[i].s_time).getTime();
			  var eTiem= new Date(timeDatas[i].e_time).getTime();
			  if(searchTime>=sTiem &&searchTime<eTiem){
				  return true;
			  }
		  }
		  return false;
		}
	
	}