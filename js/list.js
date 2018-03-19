
/*可无限横向滚动的按钮
 * param index：页面需要传入的游标，以0开始计算
 * param obj:对象，用id声明
 * */
function indexInit(index){
	var $frame = $('#framenav');
	var $wrap = $frame.parent();

	// Call Sly on frame
	$frame.sly({
		horizontal: 1,
		itemNav: 'centered',
		smart: 1,
		activateOn: 'click',
		mouseDragging: 1,
		touchDragging: 1,
		releaseSwing: 1,
		startAt: index, //页面初始时的游标，以0为第一个游标
		scrollBy: 1,
		speed: 300,
		elasticBounds: 1,
		dragHandle: 1,
		dynamicHandle: 1,
		clickBar: 1,
	}).init();
}

indexInit(0);

