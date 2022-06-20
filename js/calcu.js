function mostrar(num) {
	$('.calc-pantalla').val($('.calc-pantalla').val() + num);
	$('.hist').val($('.hist').val() + num);
}
function del() {
	value = $('.calc-pantalla').val();
	$('.calc-pantalla').val(value.substring(0, value.length - 1));
}
function ac() {
	$('.calc-pantalla').val('');
        $('.hist').val('');
}
function igual() {
	$('.calc-pantalla').val(eval($('.calc-pantalla').val()));
        $('.hist').val($('.hist').val());
}
function c() {
	$('.calc-pantalla').val('');
}
