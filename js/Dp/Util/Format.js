// Dp.Util.Format
(function (my) {
    var cents = 0;

    // Public properties and methods
    my.Format = {
        Price: function (cents) {
            return parseFloat(cents / 100).toFixed(2) + ' $';
        }
    };

    return my;
}(Dp.Util || {}));

