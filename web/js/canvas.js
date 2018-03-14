function creatCir(num,point){
	var cirli=('<canvas name="cir" class="cir-play"  width="100%" height="100%" style="z-index:999;" ></canvas>');
	point.find(".cir-play").remove();
	point.append(cirli);
	var canvas=point.find(".cir-play")[0];
		var circle = new Sonic({
		width: canvas.width/2-30,
		height: canvas.height/2-30,
		padding: canvas.width/2+10,
		//pixelRatio:2,
		pointDistance: .01,
		stepsPerFrame: 3,
		trailLength: .8,
		strokeColor: '#666',
		domClass:"cir-play",
		step: 'fader',
		fillColor:"#000",
	    backgroundColor:"rgba(0,0,0,0)",
	    z_index:999,
		setup: function(canvas) {
			this._.lineWidth = 2;
		},
	
		path: [
			['arc', 10, 10, 10, 0, 360]
		]
	
	},canvas);
	canvas.cir=circle;
	return circle;
	 
}

function GetOnconnetc(cir,point)
{
	var c = cir;
	
	function doplay()
	{   
	   
	  point.find(".cir-play").show();
	   cir.play();
	}
	return doplay;
}

function GetOnPlay(cir,point)
{
	var c = cir;
	function dostop()
	{ 
	   point.find(".cir-play").hide();
	   cir.stop();	
	}
	return dostop;
}