(function(){


function Background(cfg){
	for (var key in cfg){
		this[key]=cfg[key];
	}
	this.init();
}

Background.prototype={

	space : 10,

	data : null,

	exploded : false,

	init : function(){
		this.nodes=[];

		this.createNodes(t_2012,50,50);
		this.createNodes(t_BYE,500,50);
		this.createNodes(t_2013,50+70,50+250);
		this.createNodes(t_HI,500+70,50+250);

		this.fullNodes=[];

		this.img=document.createElement("canvas");
		this.img.width=canvas.width;
		this.img.height=canvas.height;
		var ctx=this.img.getContext("2d");
		ctx.fillStyle="#ffff00";
		for(var i = this.nodes.length - 1; i >= 0; i--) {
			var node = this.nodes[i];
			ctx.fillRect(node.x,node.y,9,9);
		}
	},

	createNodes : function(text,ox,oy){
		var Me=this;
		text.forEach(function(row,r){
			row.forEach(function(col,c){
				if (col===9){
					Me.nodes.push(
					{
						x : Me.space*c+ox,
						y : Me.space*r+oy,
						f : 0
					}
					)
				}
			})
		})
	},

	update : function(dt){
		for (var i=this.nodes.length-1;i>=0;i--){
			var node=this.nodes[i];
			if (node.f){
				this.fullNodes.push(node);
				this.nodes.splice(i,1);
			}
		}
	},

	render : function(context){
		
		context.fillStyle="#441166"
		context.globalAlpha=0.13;
		context.fillRect(0,0,Config.width,Config.height);

		if (this.exploded){
			context.globalAlpha=1;
			context.drawImage(this.img,0,0);
		}

	}

}

window.Background=Background;


var t_2012=[
[  , ,9,9,9,9,9, , , , , , ,9,9,9,9,9, , , , , , , ,9,9, , , , ,9,9,9,9,9, ,  ],
[  ,9,9,9,9,9,9,9, , , , ,9,9,9,9,9,9,9, , , , , ,9,9,9, , , ,9,9,9,9,9,9,9,  ],
[ 9,9,9, , , ,9,9,9, , ,9,9,9, , , ,9,9,9, , , ,9,9,9,9, , ,9,9,9, , , ,9,9,9 ],
[ 9,9, , , , , ,9,9, , ,9,9, , , , , ,9,9, , ,9,9,9,9,9, , ,9,9, , , , , ,9,9 ],
[  , , , , , , ,9,9, , ,9,9, , , , , ,9,9, , , , , ,9,9, , , , , , , , , ,9,9 ],
[  , , , , , ,9,9,9, , ,9,9, , , , , ,9,9, , , , , ,9,9, , , , , , , , ,9,9,9 ],
[  , , , , ,9,9,9, , , ,9,9, , , , , ,9,9, , , , , ,9,9, , , , , , , ,9,9,9,  ],
[  , , , ,9,9,9, , , , ,9,9, , , , , ,9,9, , , , , ,9,9, , , , , , ,9,9,9, ,  ],
[  , , ,9,9,9, , , , , ,9,9, , , , , ,9,9, , , , , ,9,9, , , , , ,9,9,9, , ,  ],
[  , ,9,9,9, , , , , , ,9,9, , , , , ,9,9, , , , , ,9,9, , , , ,9,9,9, , , ,  ],
[  ,9,9,9, , , , , , , ,9,9, , , , , ,9,9, , , , , ,9,9, , , ,9,9,9, , , , ,  ],
[ 9,9,9, , , , , , , , ,9,9,9, , , ,9,9,9, , , , , ,9,9, , ,9,9,9, , , , , ,  ],
[ 9,9,9,9,9,9,9,9,9, , , ,9,9,9,9,9,9,9, , , , , , ,9,9, , ,9,9,9,9,9,9,9,9,9 ],
[ 9,9,9,9,9,9,9,9,9, , , , ,9,9,9,9,9, , , , , , , ,9,9, , ,9,9,9,9,9,9,9,9,9 ],
];

var t_BYE=[
[ 9,9,9,9,9,9,9,9, , , , ,9,9, , , , , , , , ,9,9, , ,9,9,9,9,9,9,9,9,9,9 ],
[ 9,9,9,9,9,9,9,9,9, , , ,9,9,9, , , , , , ,9,9,9, , ,9,9,9,9,9,9,9,9,9,9 ],
[ 9,9, , , , , ,9,9,9, , , ,9,9,9, , , , ,9,9,9, , , ,9,9, , , , , , , ,  ],
[ 9,9, , , , , , ,9,9, , , , ,9,9,9, , ,9,9,9, , , , ,9,9, , , , , , , ,  ],
[ 9,9, , , , , , ,9,9, , , , , ,9,9,9,9,9,9, , , , , ,9,9, , , , , , , ,  ],
[ 9,9, , , , , ,9,9, , , , , , , ,9,9,9,9, , , , , , ,9,9, , , , , , , ,  ],
[ 9,9,9,9,9,9,9,9, , , , , , , , , ,9,9, , , , , , , ,9,9,9,9,9,9,9,9,9,  ],
[ 9,9,9,9,9,9,9,9,9, , , , , , , , ,9,9, , , , , , , ,9,9,9,9,9,9,9,9,9,  ],
[ 9,9, , , , , ,9,9,9, , , , , , , ,9,9, , , , , , , ,9,9, , , , , , , ,  ],
[ 9,9, , , , , , ,9,9, , , , , , , ,9,9, , , , , , , ,9,9, , , , , , , ,  ],
[ 9,9, , , , , , ,9,9, , , , , , , ,9,9, , , , , , , ,9,9, , , , , , , ,  ],
[ 9,9, , , , , ,9,9,9, , , , , , , ,9,9, , , , , , , ,9,9, , , , , , , ,  ],
[ 9,9,9,9,9,9,9,9,9, , , , , , , , ,9,9, , , , , , , ,9,9,9,9,9,9,9,9,9,9 ],
[ 9,9,9,9,9,9,9,9, , , , , , , , , ,9,9, , , , , , , ,9,9,9,9,9,9,9,9,9,9 ],
];

var t_2013=[
[  , ,9,9,9,9,9, , , , , , ,9,9,9,9,9, , , , , , , ,9,9, , , ,9,9,9,9,9,9, ,  ],
[  ,9,9,9,9,9,9,9, , , , ,9,9,9,9,9,9,9, , , , , ,9,9,9, , ,9,9,9,9,9,9,9,9,  ],
[ 9,9,9, , , ,9,9,9, , ,9,9,9, , , ,9,9,9, , , ,9,9,9,9, , ,9,9, , , , ,9,9,9 ],
[ 9,9, , , , , ,9,9, , ,9,9, , , , , ,9,9, , ,9,9,9,9,9, , , , , , , , , ,9,9 ],
[  , , , , , , ,9,9, , ,9,9, , , , , ,9,9, , , , , ,9,9, , , , , , , , ,9,9,9 ],
[  , , , , , ,9,9,9, , ,9,9, , , , , ,9,9, , , , , ,9,9, , , , , , , ,9,9,9,  ],
[  , , , , ,9,9,9, , , ,9,9, , , , , ,9,9, , , , , ,9,9, , , , ,9,9,9,9,9, ,  ],
[  , , , ,9,9,9, , , , ,9,9, , , , , ,9,9, , , , , ,9,9, , , , ,9,9,9,9,9, ,  ],
[  , , ,9,9,9, , , , , ,9,9, , , , , ,9,9, , , , , ,9,9, , , , , , , ,9,9,9,  ],
[  , ,9,9,9, , , , , , ,9,9, , , , , ,9,9, , , , , ,9,9, , , , , , , , ,9,9,9 ],
[  ,9,9,9, , , , , , , ,9,9, , , , , ,9,9, , , , , ,9,9, , , , , , , , , ,9,9 ],
[ 9,9,9, , , , , , , , ,9,9,9, , , ,9,9,9, , , , , ,9,9, , ,9,9, , , , ,9,9,9 ],
[ 9,9,9,9,9,9,9,9,9, , , ,9,9,9,9,9,9,9, , , , , , ,9,9, , ,9,9,9,9,9,9,9,9,  ],
[ 9,9,9,9,9,9,9,9,9, , , , ,9,9,9,9,9, , , , , , , ,9,9, , , ,9,9,9,9,9,9, ,  ],
];


var t_HI=[
[ 9,9, , , , , , ,9,9, , ,9,9,9,9,9,9 ],
[ 9,9, , , , , , ,9,9, , ,9,9,9,9,9,9 ],
[ 9,9, , , , , , ,9,9, , , , ,9,9, ,  ],
[ 9,9, , , , , , ,9,9, , , , ,9,9, ,  ],
[ 9,9, , , , , , ,9,9, , , , ,9,9, ,  ],
[ 9,9, , , , , , ,9,9, , , , ,9,9, ,  ],
[ 9,9,9,9,9,9,9,9,9,9, , , , ,9,9, ,  ],
[ 9,9,9,9,9,9,9,9,9,9, , , , ,9,9, ,  ],
[ 9,9, , , , , , ,9,9, , , , ,9,9, ,  ],
[ 9,9, , , , , , ,9,9, , , , ,9,9, ,  ],
[ 9,9, , , , , , ,9,9, , , , ,9,9, ,  ],
[ 9,9, , , , , , ,9,9, , , , ,9,9, ,  ],
[ 9,9, , , , , , ,9,9, , ,9,9,9,9,9,9 ],
[ 9,9, , , , , , ,9,9, , ,9,9,9,9,9,9 ],
];


}());

