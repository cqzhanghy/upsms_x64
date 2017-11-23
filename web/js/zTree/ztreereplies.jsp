<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<c:set var="path" value="${pageContext.request.contextPath}"></c:set>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>帖 子：${post.postTitle }</title>
<link rel="stylesheet" type="text/css" href="${path }/js/common/jquery_zTree/css/zTreeStyle.css">
<script type="text/javascript" src="${path }/js/common/jquery/jquery.js"></script>
<script type="text/javascript" src="${path }/js/common/jquery_zTree/js/jquery.ztree.js"></script>
<script type="text/javascript" src="${path }/js/module/forum/ztreereplies.js"></script>
<script type="text/javascript"
	src="${path }/js/common/ueditor/ueditor.config.js"></script>
<script type="text/javascript"
	src="${path }/js/common/ueditor/ueditor.all.min.js"></script>
<script type="text/javascript"
	src="${path }/js/common/ueditor/lang/zh-cn/zh-cn.js"></script>
<!-- <style type="text/css">
.grid_header .public_tab tr{ background:url(img/icon/tr_bg.jpg) repeat-x;}
.grid_header .public_tab tr th{ height:25px; line-height:25px; text-align:left; text-indent:8px; background:#ebf6fa; border:none; border:1px solid #c4cbd3; border-right:0; color:#1b578b; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; background:#eaf6fa;}
.grid_header .public_tab tr:hover { background:url(img/icon/tr_bg.jpg) repeat-x !important;}
.public_tab {width:100%; table-layout:fixed; border:medium none; cellspacing:0; cellpadding:0; border-collapse:collapse;}
.public_tab tr{ background:#fff; border:1px solid #c4d9ee; border-bottom:1px solid #e3e6eb;  }
.public_tab tbody tr:hover td{ background:#f7ffb2 !important; }
.public_tab tbody tr.tr_bg:hover td{ background:#f7ffb2 !important;}
.public_tab tbody tr.tr_bg td{ background:#f1f1f1; background:#fffceb; background:#eff2f6; background:#f7ffb2 !important;}
.public_tab tbody td{text-indent:8px; height:25px; line-height:25px; border:none; border-bottom:1px solid #e3e6eb; color:#333; border-left:1px dotted #ccc; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}
.public_tab tr th{ background:#ebf6fa; }
tr.tr_bg td{ background:#f7ffb2 !important;}
tr.tr_bg:hover td{background:#f7ffb2 !important;}
</style> -->
</head>
<script type="text/javascript">
	jQuery(function(){
		orgTree.config({
			target : 'treecontent',
			ztreeId : 'ztree',
			ztreeURL : '${path}/ztree/getReplies',
			initOrgId : '${repliesUpId}'
		}).open();
	});
</script>
<body>
	<div id="treecontent"></div>
</body>
</html>