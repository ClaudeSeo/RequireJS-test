define([], function() {
    function krwFormatter(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return {
        krwFormatter: krwFormatter
    }
});
