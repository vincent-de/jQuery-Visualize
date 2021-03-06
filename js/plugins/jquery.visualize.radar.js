/**
 * Radar charts for the jquery Visualize plugin 2.0
 *
 * Data are represented by a star shaped form whose branches
 * are equal to the total value of each serie
 * Doesn't work very well if there is less than 3 members in the serie.
 */
$.visualize.plugins.radar = function () {

    var o = this.options,
        container = this.target.canvasContainer,
        ctx = this.target.canvasContext,
        canvas = this.target.canvas,
        dataGroups = this.data.dataGroups(),
        memberCount = dataGroups.length,
        memberTotals = this.data.memberTotals(),
        topValue = this.data.topValue();


    container.addClass('visualize-pie');

    if (o.pieLabelPos == 'outside') {
        container.addClass('visualize-pie-outside');
    }

    var centerX = Math.round(canvas.width() / 2);
    var centerY = Math.round(canvas.height() / 2);

    var area_span = Math.PI * 2 / memberCount;
    var radius = (centerY < centerX ? centerY : centerX) - o.pieMargin;

    var labels = $('<ul class="visualize-labels"></ul>').insertAfter(canvas);

    // Draw the branches of our star shape
    $.each(memberTotals, function (i, total) {

        var ratio = total / topValue;
        var distance = radius * ratio / 2;

        ctx.beginPath();
        ctx.lineWidth = o.lineWeight;
        ctx.lineJoin = 'round';
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(
            centerX + Math.cos(i * area_span) * distance,
            centerY + Math.sin(i * area_span) * distance
        );
        ctx.strokeStyle = dataGroups[i].color;
        ctx.stroke();
        ctx.closePath();
    });

    // Draw the surrounding form
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.lineJoin = 'round';
    ctx.strokeStyle = o.colors[memberCount];

    ctx.moveTo(
        centerX + radius * memberTotals[0] / topValue / 2,
        centerY
    );

    $.each(memberTotals, function (i, total) {

        var ratio = total / topValue;
        var distance = radius * ratio / 2;

        var labelX = centerX + Math.cos(i * area_span) * distance;
        var labelY = centerY + Math.sin(i * area_span) * distance;
        ctx.lineTo(labelX, labelY);

        // draw labels
        labelY += (labelY > centerY ? radius / 16 : -radius / 16);

        var leftRight = (labelX > centerX) ? 'right' : 'left';
        var topBottom = (labelY > centerY) ? 'bottom' : 'top';

        var labeltext = $("<span>")
            .addClass("visualize-label")
            .html(total)
            .css(leftRight, 0)
            .css(topBottom, 0)
            .css('font-size', radius / 8)
            .css('color', dataGroups[i].color);

        $("<li>")
            .addClass("visualize-label-pos")
            .css({left:labelX, top:labelY})
            .append(labeltext)
            .appendTo(labels);

        labeltext
            .css('margin-' + leftRight, -labeltext.width() / 2)
            .css('margin-' + topBottom, -labeltext.outerHeight() / 2);

    });

    ctx.closePath();
    ctx.stroke();
};
