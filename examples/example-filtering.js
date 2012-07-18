// Run the script on DOM ready:
$(function(){
	//filtered chart
 	$('table')
	.visualize({
		rowFilter: ':not(:first)',
		colFilter: ':not(:first)',
		rows: [1,2,4],
		cols: [1,3,5,6],
		topValue:210,bottomValue:0
	})
	.before("<h2>D) Charted with filters and column and rows number (filter apply first, numbers not in array ignored)</h2><pre><code>$('table').visualize({<strong>rowFilter: ':not(:first)', colFilter: ':not(:first)',rows: [1,2,4], cols: [1,3,5,6], topValue:210,bottomValue:0</strong>});</code></pre>");

 	$('table')
		.visualize({
 		rows: [1,2,4],
 		cols: [1,3,5,6],
 		topValue:210,bottomValue:0
 	})
 	.before("<h2>C) Charted with column and rows number</h2><pre><code>$('table').visualize({<strong>rows: [1,2,4], cols: [1,3,5,6], topValue:210,bottomValue:0</strong>});</code></pre>");
	
	$('table')
 		.visualize({
	 		rowFilter: ':not(:last)',
	 		colFilter: ':not(:last-child)',
	 		topValue:210,bottomValue:0
	 	})
	 	.before("<h2>B) Charted with filters to exclude totals data</h2><pre><code>$('table').visualize({<strong>rowFilter: ':not(:last)', colFilter: ':not(:last-child)',topValue:210,bottomValue:0</strong>});</code></pre>");
 	
 	$('table')
 		.visualize({topValue:210,bottomValue:0})
 		.before("<h2>A) Charted without row/col filtering (<em>not ideal with this table</em>)</h2><pre><code>$('table').visualize({topValue:210,bottomValue:0});</code></pre>")
});