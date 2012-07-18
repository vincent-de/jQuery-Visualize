jQuery Visualize Plugin (_Extended_)
==================================

Fork from JQuery Visualize from Christophe Desguez (https://github.com/zipang)

Added :
 - options to set the min and max value of the numeric axis.
   Example :
   $('table').visualize('bar', topValue:250, bottomValue:0, {width: '420px'});
 - options to select the rows and columns used to create the graph with the number of the column 
   Example :
  	$('table').visualize('bar', rows:[1,2,3,4], cols:[2,3], {width: '420px'});

To do :
 - option to highlight data in the table when the cursor is on the graph 
   Examples :
   $('table').visualize('bar', highlightClass:false, {width: '420px'});   
   $('table').visualize('bar', highlightClass:'className', {width: '420px'});