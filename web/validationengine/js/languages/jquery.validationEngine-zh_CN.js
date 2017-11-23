(function($) {
	$.fn.validationEngineLanguage = function() {
	};
	$.validationEngineLanguage = {
		newLang : function() {
			$.validationEngineLanguage.allRules = {
				"required" : { // Add your regex rules here, you can take
					// telephone as an example
					"regex" : "none",
					"alertText" : "* 无效的字符，请重新输入。",
					"alertTextCheckboxMultiple" : "* 请选择一个项目",
					"alertTextCheckboxe" : "* 您必须钩选此栏",
					"alertTextDateRange" : "* 日期范围不可空白"
				},
				"qq" : {
					"regex" : /^[1-9]\d{4,9}$/,
					"alertText" : "* 请输入有效的QQ号码."
				},
				"idCard" : {
					"regex" : /^\d{14}(\d{1}|\d{4}|(\d{3}[xX]))$/,
					"alertText" : "* 无效的身份证号码"
				},
				"chinese" : {
					"regex" : /^[\u4e00-\u9fa5]+$/,
					"alertText" : "* 请输入中文."
				},
				"allInput" : {
					"regex" : /[\s\S]*$/,
					"alertText" : "* 任意字符"
				},
				"confirm" : {
					"regex" : "none",
					"alertText" : "* 两次输入不一致,请重新输入."
				},
				"length" : {
					"regex" : "none",
					"alertText" : "* 长度必须在 ",
					"alertText2" : " 至 ",
					"alertText3" : " 之间."
				},

				"requiredInFunction" : {
					"func" : function(field, rules, i, options) {
						return (field.val() == "test") ? true : false;
					},
					"alertText" : "* Field must equal test"
				},
				"dateRange" : {
					"regex" : "none",
					"alertText" : "* 无效的 ",
					"alertText2" : " 日期范围"
				},
				"dateTimeRange" : {
					"regex" : "none",
					"alertText" : "* 无效的 ",
					"alertText2" : " 时间范围"
				},
				"minSize" : {
					"regex" : "none",
					"alertText" : "* 最少 ",
					"regex":/^\s*(.*?)\s*$/,
					"alertText2" : " 个字符"
				},
				"maxSize" : {
					"regex" : "none",
					"regex":/^\s*(.*?)\s*$/,
					"alertText" : "* 最多 ",
					"alertText2" : " 个字符"
				},
				"groupRequired" : {
					"regex" : "none",
					"alertText" : "* 你必需选填其中一个栏位"
				},
				"min" : {
					"regex" : "none",
					"regex":/^\s*(.*?)\s*$/,
					"alertText" : "* 最小值为 "
				},
				"max" : {
					"regex" : "none",
					"regex":/^\s*(.*?)\s*$/,
					"alertText" : "* 最大值为 "
				},
				"past" : {
					"regex" : "none",
					"alertText" : "* 日期必需早于 "
				},
				"future" : {
					"regex" : "none",
					"alertText" : "* 日期必需晚于 "
				},
				"maxCheckbox" : {
					"regex" : "none",
					"alertText" : "* 最多选取 ",
					"alertText2" : " 个项目"
				},
				"minCheckbox" : {
					"regex" : "none",
					"alertText" : "* 请选择 ",
					"alertText2" : " 个项目"
				},
				"equals" : {
					"regex" : "none",
					"alertText" : "* 请输入与上面相同的密码"
				},
				"equalsNewPwd" : {
					"regex" : "none",
					"alertText" : "* 请输入与新密码相同的密码"
				},
				"creditCard" : {
					"regex" : "none",
					"alertText" : "* 无效的信用卡号码"
				},
				"phone" : {
					// credit: jquery.h5validate.js / orefalo
					"regex" : /^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
					"alertText" : "* 无效的电话号码"
				},
				"mobile" : {
					"regex" : /^(13[0-9]|15[0-9]|18[0-9])[0-9]{8}$/,
					"alertText" : "* 无效的手机号码"
				},
				"tel" : {
					"regex" : /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/,
					"alertText" : "* 无效的固定电话号码"
				},
				"telAndMobile" : {
					"regex" : /^(((13[0-9]|15[0-9]|18[0-9])[0-9]{8})|((0[0-9]{2,3})?([2-9][0-9]{6,7})([0-9]{1,4})?))$/,
					"alertText" : "* 无效的固定电话号码"
				},
				"email" : {
					// Shamelessly lifted from Scott Gonzalez via the
					// Bassistance Validation plugin
					// http://projects.scottsplayground.com/email_address_validation/
					"regex" : /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
					"alertText" : "* 邮件地址无效"
				},
				"integer" : {
					"regex" : /^[\-\+]?\d+$/,
					"alertText" : "* 不是有效的整数"
				},
				"number" : {
					// Number, including positive, negative, and floating
					// decimal. credit: orefalo
					"regex" : /^[\-\+]?(([0-9]+)([\.,]([0-9]+))?|([\.,]([0-9]+))?)$/,
					"alertText" : "* 无效的数字"
				},
				"date" : {
					"regex" : /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,
					"alertText" : "* 无效的日期，格式必需为 YYYY-MM-DD"
				},
				"ipv4" : {
					"regex" : /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))([:][0-9]{4}){0,1}$/,
					"regex":/^\s*(.*?)\s*$/,
					"alertText" : "* 无效的 IP 地址"
				},
				"ipv5" : {
					"regex" : /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))([:][0-9]{2,5})?$/,
					"alertText" : "* 无效的 IP 地址"
				},
				"url" : {
					"regex" : /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
					"alertText" : "* 无效的网址"
				},
				"onlyNumberSp" : {
					"regex" : /^(?!0)\d*$/,
					"alertText" : "* 无效的数字"
				},
				"onlyNumber" : {
					"regex" : /^\d*$/,
					"alertText" : "* 无效的数字"
				},
				"onlyLetterSp" : {
					"regex" : /^[a-zA-Z]+$/,
					"alertText" : "* 只接受英文字母大小写"
				},
				"onlyLetterNumber" : {
					"regex" : /^[0-9a-zA-Z]+$/,
					"alertText" : "* 不接受特殊字符"
				},
				"onlychineseLetterNumber" : {
					"regex" : /^[\u4e00-\u9fa50-9a-zA-Z]+$/,
					"alertText" : "* 不接受特殊字符"
				},
				"onlyCharNumberUnderline" : {
					"regex" : /^[0-9a-zA-Z_]+$/,
					"alertText" : "* 只能是数字字符下划线"
				},
				"notChinese" : {
					"regex" : /^[^\u4e00-\u9fa5]{0,}$/,
					"alertText" : "* 密码不能包含中文字符"
				},
				// --- CUSTOM RULES -- Those are specific to the demos, they can
				// be removed or changed to your likings

				// tls warning:homegrown not fielded
				"dateFormat" : {
					"regex" : /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
					"alertText" : "* 无效的日期格式"
				},
				// tls warning:homegrown not fielded
				"dateTimeFormat" : {
					"regex" : /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
					"alertText" : "* 无效的日期或时间格式",
					"alertText2" : "可接受的格式： ",
					"alertText3" : "mm/dd/yyyy hh:mm:ss AM|PM 或 ",
					"alertText4" : "yyyy-mm-dd hh:mm:ss AM|PM"
				},
				"custom_dateTimeFormat" : {
					"regex" : /^((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))(\s)((0[0-9])|(1[0-9])|(2[0-3])):([0-5][0-9]):([0-5][0-9])$/,
					"alertText" : "* 无效的日期或时间格式"
				},
				"number_cash" : {
					// Number, including positive, negative, and floating
					// decimal. credit: orefalo
					"regex" : /^(([1-9]\d*)|0)(\.\d{1,2})?$/,
					"alertText" : "* 无效的金额"
				},
				"percentage" : {// 百分比
					"regex" : /^(100|([1-9]?[0-9]?))%$/,
					"alertText" : "* 无效的百分比"
				},
				"number_cash_wan" : {// 已万为单位，四位小数
					"regex" : /^(([1-9]\d*)|0)(\.\d{1,4})?$/,
					"alertText" : "* 无效的金额"
				},
				// 正数
				"positive_number" : {
					"regex" : /^(([1-9]\d*)|0)(\.\d{1,2})?$/,
					"alertText" : "* 无效的数字"
				},//比例
				"number_BL" : {
					// Number, including positive, negative, and floating
					// decimal. credit: orefalo
					"regex" : /^(([1-9]\d*)|0)(\.\d{1,2})?$/,
					"alertText" : "* 无效的比例"
				},
				"number_0" : {
					"regex" : /^(0|[1-9]\d*)$/,
					"alertText" : "* 无效的数字"
				},//正整数
				"numberOnly" : {
					"regex" : /^[1-9]{1}[0-9]*$/,
					"alertText" : "* 请输入正整数"
				}
			};

		}
	};
	$.validationEngineLanguage.newLang();
})(jQuery);