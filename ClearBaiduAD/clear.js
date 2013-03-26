(function (){
	var clearEl = document.getElementById('content_right'),
	    nodeName = clearEl && clearEl.nodeName.toLowerCase(),
	    marketEls = document.querySelectorAll('.EC_mr15'),
	    marketLen = marketEls && marketEls.length,
	    parentEl = null,
	    eachEl = null ,
	    i = 0;

	if(nodeName !== 'div'){
		return ;
	}

	remove(clearEl);

	if(marketLen > 0){
		for( ; i < marketLen ; i++){
			eachEl = marketEls[i] ;

			if(eachEl.nodeName.toLowerCase() === 'table'){
				remove(eachEl);
			}
		}
	}

	/**
	 * 移除推广信息
	 * @param  {[HTMLElement]} element 推广信息
	 * @return {[void]}         
	 */
	function remove(element){
		if(!element){
			return ;
		}
		var parentEl = element.parentNode;
		if(parentEl.nodeName.toLowerCase() === 'div'){
			parentEl.removeChild(element);
		}
	}
})();