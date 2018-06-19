
export default class UIRoot{
    constructor(){
        this.init()

    }

    init(){
        let _body = document.body;
        let _element = document.createElement("div");
        _element.className = "player_root";
        _element.innerHTML='<H1>WELCOME !</H1>'
        _body.appendChild(_element)
    }


}