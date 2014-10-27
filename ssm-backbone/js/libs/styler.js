var handleStyler = function () {

        var panel = $('.color-panel');

        $('.icon-color', panel).click(function () {
            $('.color-mode').show();
            $('.icon-color-close').show();
        });

        $('.icon-color-close', panel).click(function () {
            $('.color-mode').hide();
            $('.icon-color-close').hide();
        });
	
	
		$(window).load(function(){
			estilo = window.localStorage.getItem('data-style');
			console.log(estilo);
			$('#style_color').attr("href", estilo);
		
		});
		
		var setColor = function (color) {
            $('#style_color').attr("href", "css/krack." + color + ".min.css");
			
        }

        $('li', panel).click(function () {
            var color = $(this).attr("data-style");
            setColor(color);
            $('.inline li', panel).removeClass("current");
            $(this).addClass("current");
			
			
			var atual = $('#style_color').attr("href");
			console.log(atual);
			var estilo = window.localStorage.setItem('data-style', atual);
        });

        $('input', panel).change(function () {
            setLayout();
        });

        
        var setLayout = function () {
            if ($('input.header', panel).is(":checked")) {
                $("body").addClass("fixed-top");
                $(".header").addClass("navbar-fixed-top");
            } else {
                $("body").removeClass("fixed-top");
                $(".header").removeClass("navbar-fixed-top");
            }
        }
    }

handleStyler();