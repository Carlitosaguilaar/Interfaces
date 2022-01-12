$( document ).ready(function() {
    $("#mostrar").click(function (e){
        e.preventDefault();
        $(".caja").css ({
            display:'block',
            left: (e.pageX + 350) + 'px',
            top: (e.pageX + 35) + 'px'
        })
    })
    $("#ocultar").click(function (e){
        e.preventDefault();
        $(".caja").css ({
            display:'none'
        })
    })
});
    

    