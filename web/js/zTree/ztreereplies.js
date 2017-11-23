(function(){
	var otreeObj = null;
	var isFirst = true;
	var initOrgId = "";
	var oTree = window.orgTree = {
		config : function(config) {
			this.config = config;
			path = config.path;
			this.createOrgtreeHTML();
			initOrgId = config.initOrgId;
			return this;
		},
		createOrgtreeHTML : function() {
			var treeDiv = "<ul id=" + this.config.ztreeId
					+ " class='ztree'></ul>";
			jQuery('#' + this.config.target).append(treeDiv);
		},
		setztree : function() {
			this.ztreeSetting = {
				async : {
					enable : true,
					url : this.config.ztreeURL,
					autoParam : [ "id" ]
				},
				callback : {
					onAsyncSuccess : zTreeOnAsyncSuccess
				},
				view : {
					selectedMulti : true,
					fontCss : getFontCss
				}
			};
		},

		open : function() {
			this.setztree();
			jQuery.fn.zTree.init(jQuery("#" + this.config.ztreeId),
					this.ztreeSetting);
			otreeObj = jQuery.fn.zTree.getZTreeObj(this.config.ztreeId);

		},
		getSelectNode : function() {
			var nodes = otreeObj.getSelectedNodes();
			return nodes;
		},
		searchNodes : function(key) {
			if (key) {
				//取消选中
				otreeObj.cancelSelectedNode();
				
				var nodes = otreeObj.getNodesByParam("name", key, null);
				updateNodes(nodes);
			}
		}
	};

	var getFontCss = function(treeId, treeNode) {
		return (!!treeNode.highlight) ? {
			color : "#A60000",
			"font-weight" : "bold"
		} : {
			color : "#333",
			"font-weight" : "normal"
		};
	};
	var zTreeOnAsyncSuccess = function(event, treeId, treeNode, msg) {
		if (isFirst) {
			var nodes = otreeObj.getNodes();
			
			if(initOrgId == ""){
				otreeObj.selectNode(nodes[0]);
			}
			isFirst = false;
			asyncChildNode(nodes);
		} else {
			asyncChildNode(treeNode.children);
		}
		
		
		
	};
	// 异步加载子节点
	var asyncChildNode = function(nodes) {
		if (!nodes)
			return;
		for ( var i = 0, l = nodes.length; i < l; i++) {
			if(initOrgId != ""&&nodes[i].id == initOrgId){
				otreeObj.expandNode(nodes[i], true);
				otreeObj.selectNode(nodes[i], true);
			}
			otreeObj.reAsyncChildNodes(nodes[i], 'refresh', true);
		}

	};

	var updateNodes = function(nodeList) {
		for ( var i = 0, l = nodeList.length; i < l; i++) {
			otreeObj.expandNode(nodeList[i], true, true, true);
			otreeObj.selectNode(nodeList[i], true);
		}
	};
})();