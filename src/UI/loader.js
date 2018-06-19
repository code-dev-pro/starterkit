
export default class UILoader{
    constructor(){
        this.loaderUI = null;
        this.init()

    }

    init(){
        let _body = document.body;
        let _element = document.createElement("div");
        _element.className = "player_loader";
        _element.innerHTML='<div class="player_loader__picture">Loading</div>';
        _body.appendChild(_element)
        this.loaderUI = _element;
    }

    remove(){
        this.loaderUI.remove()
    }


}