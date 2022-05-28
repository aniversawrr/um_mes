var senha = ('nossos dois meses')
var verifi = prompt("A senha mudou, agora nós estamos um mês a frente: ")

function remove_acento (verifi)
{       
    verifi = verifi.toLowerCase();                                                         
    verifi = verifi.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    verifi = verifi.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    verifi = verifi.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    verifi = verifi.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    verifi = verifi.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    verifi = verifi.replace(new RegExp('[Ç]','gi'), 'c');
    return verifi;                 
}

if (senha == remove_acento(this.verifi.toLowerCase())) {
    window.location.href = "presente.html"
}