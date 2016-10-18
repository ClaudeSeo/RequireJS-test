requirejs.config({
    "paths": {
      "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"
    }
});

define(['helpers/utils', "jquery"], function(utils, $) {
    $(document).ready(function() {
        $('input[name="input-price"]').on('keyup', function() {
            var price = $(this).val();
            $('#price-format').text(utils.krwFormatter(price));
        });
    });
});
