/*SMUTH SCROLL*/
/**Делаем так, чтобы кнопки навигации плавно перебрасывали нас на нужные блоки сайта*/
/**При клике на элемент data-scroll будет выполняться действие*/
$("[data-scroll]").on("click", function(event) {
    /**выполняется событие по умолчанию */
    event.preventDefault();
    var $this = $(this),
        /**сохраняем в переменную .data('scroll') при клике в определенную область (поскольку this) */
        blockId = $this.data('scroll'),
        /**в этой переменной сохраняем позицию элемента $(blockId) от верха страницы */
        blockOffset = $(blockId).offset().top;
    /**Чтобы все нажатые ссылки не оставались активными на постоянно, т.е. не
    сохраняли изменение цвета, мы должны убрать у них класс active*/
    $("#nav a").removeClass("active")
        /**для ссылки, на которую нажали, придидим класс active,т.е. активная ссылка меняет цвет */
    $this.addClass("active");
    /**к положению в пикселях от верха окна, которое отобразилось в переменной blockOffset
     нужно плавно проскроллить. 500 - это миллисекунды времени скролла.*/
    $("html,body").animate({
        scrollTop: blockOffset
    }, 500);

});