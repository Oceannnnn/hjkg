$(function() {
		//$('input[name=score]').val(3);
		var data = $('input[name=score]').val();
		rat('star', 'result', 1, data);

		function rat(star, result, m, data) {
			star = '.' + star;
			result = '.' + result;
			$(result).hide(); //将结果DIV隐藏
			//如果从后台获取的评分数大于1，即显示，且不能再次评分
			if (data > 0) {
				$(star).raty({
					path: 'img/raty',
					starOff: 'star-off-big.png',
					starOn: 'star-on-big.png',
					number: 5,
					size: 30,
					readOnly:true,      //禁止再次评分
					score: data         //score方法用于回调评分
				});
			} else {
				$(star).raty({
					hints: ['很差', '不满', '一般', '满意', '完美'],
					path: 'img/raty',
					starOff: 'star-off-big.png',
					starOn: 'star-on-big.png',
					number: 5,
					size: 30,
					start: 40,
					showHalf: true,
					target: result,
					targetKeep: true, //targetKeep 属性设置为true，用户的选择值才会被保持在目标DIV中，否则只是鼠标悬停时有值，而鼠标离开后这个值就会消失
					click: function(score, evt) {
						//第一种方式：直接取值
						// alert('你的评分是' + score * m + '分');
						alert($('input[name=score]').val());
						
					},
				});
			}
		}
	});