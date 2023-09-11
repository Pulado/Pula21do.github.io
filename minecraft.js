function insert(n)

{

   var numero = document.getElementById('total').value;

   if (total.value.length <=7){

    document.getElementById('total').value = numero + n

   }

}
function clean()
{
	document.getElementById('total').value = '';
}
function back()
{
	var resultado = document.getElementById('total').value;
	document.getElementById('total').value = resultado.substring(0, resultado.length -1);
}
function calcular()
{
	var resultado = document.getElementById('total').value;
    if(resultado)
    {
        document.getElementById('total').value = eval(resultado);
    }
}


