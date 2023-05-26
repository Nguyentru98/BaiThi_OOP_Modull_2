import { Lover } from "../entity/Lover"

let readlineSync = require('readline-sync')

export class LoverSevervice {
      listLover: Lover[]=[];

    add(element: Lover) {
      this.listLover.push(element)
      
    }
    edit(code: string, element: Lover) {
      for(let i=0; i<this.listLover.length; i++){
        if(this.listLover[i].code == code){
          this.listLover[i] = element
          this.show()
        }
      }

    }
    delete(code: string){
      this.listLover = this.listLover.filter(x => x.code !==code)
      this.show()

    }
    show() {
      console.table(this.listLover);
    }

    search(code:string){
      this.listLover = this.listLover.filter(x => x.code == code)
      this.show()  
    }

}
