function mostrar(num) {
	$('.calc-pantalla').val($('.calc-pantalla').val() + num);
}
function del() {
	value = $('.calc-pantalla').val();
	$('.calc-pantalla').val(value.substring(0, value.length - 1));
}
function ac() {
	$('.calc-pantalla').val('');
}
function igual() {
	$('.calc-pantalla').val(eval($('.calc-pantalla').val()));
}
function c() {
	$('.calc-pantalla').val('');
}
