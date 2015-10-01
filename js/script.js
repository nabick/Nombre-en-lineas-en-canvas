window.onload = function()
{
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext('2d');
   

    var puntosValor = [[30, 30, 30, 250],
                       [30, 30, 175, 250],
                       [175, 30, 175, 250],
                       [250, 125, 210, 250],
                       [250, 125, 290, 250],
                       [210, 210, 290, 210],
                       [340, 250, 340, 125],
                       [430, 130, 335, 130],
                       [430, 250, 335, 250],
                       [430, 190, 335, 190],
                       [425, 255, 425, 125],
                       [470, 255, 470, 125],
                       [480, 90, 470, 115],



                        ];

      

    var puntosnombre = function(puntos)
    {
        context.beginPath();
        context.moveTo(puntos[0], puntos[1]);
        context.lineTo(puntos[2], puntos[3]);
        context.lineWidth = 10;
        context.strokeStyle = randomColor();
        context.stroke();
    };

    for(var i = 0; i < puntosValor.length; i++)
    {
        puntosnombre(puntosValor[i]);
    }
    function randomColor()
	{
    	// from http://www.paulirish.com/2009/random-hex-color-code-snippets/
    	return '#'+(function lol(m,s,c){return s[m.floor(m.random() * s.length)] +
    	(c && lol(m,s,c-1));})(Math,'0123456789ABCDEF',4);
  	};

};
