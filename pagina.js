document.addEventListener('DOMContentLoaded', () => {
    const masks = {
        nome: /[^a-zA-Z\s]/g,
        quantidade: /[^0-9]/g,
        pagar: /[^0-9]/g
    };
    Object.keys(masks).forEach(id => {
        document.getElementById(id).addEventListener('input', e => {
            e.target.value = e.target.value.replace(masks[id], '');
        });
    });
    document.getElementById('enviarBtn').addEventListener('click', () => {
        alert('pedido enviado com sucesso');
    });
});