require("../assets/stylesheets/styles.scss");

import UILoader from "./UI/loader.js";
import UIRoot from "./UI/root.js";
class Main {

    constructor(){
      
        this.init()
       
        
    }

    init() {
       
        let _loader = new UILoader();
        let _root = new UIRoot()
        setTimeout(function(){
            _loader.remove()
        },2000)
    }


}

let main = new Main();
