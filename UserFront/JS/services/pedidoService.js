export const getPedido = () => {
    const pedidoSaved = sessionStorage.getItem("pedido");
    return JSON.parse(pedidoSaved);
}