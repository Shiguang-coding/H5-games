function a_init() {
	updateShare(0);
}

function goHome() {
	window.location.href ='';
}

function a_submitScore(score) {
	updateShareScore(score);
	//show_share();
}

function updateShare(bestScore) {
	imgUrl = '';
	lineLink = '';
	descContent = "反向跑酷没玩过吧？快来一起跑！";
	updateShareScore(bestScore);
	appid = '';
}

function updateShareScore(bestScore) {
	if(bestScore > 0) {
		shareTitle = "我在《3D熊出没》被追了" + bestScore + "米，你跑了多远？！";
	}
	else{
		shareTitle = "超华丽跑酷《3D熊出没》，你能跑多远？";
	}
}
