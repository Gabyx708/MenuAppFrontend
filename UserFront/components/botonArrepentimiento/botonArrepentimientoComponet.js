export default function tarjetaArrepentimientoComponent(comida) {

    return `
    <div class="arrepentimiento-container sombra">
    <div class="arrepentimiento-body">
        <img src="/assets/images/question.png" alt="confuso_people">
        <h3>Te arrepentiste?</h3>
        <h5 class="black">ahora puedes cancelar tu ultimo pedido</h5>
        <h5 class="black">(siempre y cuando el menu aun no haya cerrado)</h5>
        <button id="btn-cancelar-pedido">BOTON DE ARREPENTIMIENTO</button>
    </div>
</div>
    `
}