import { Lover } from "../entity/Lover";
import { LoverSevervice } from "./LoverSevervice";

let readlineSync = require('readline-sync')

let newObj =  new LoverSevervice();
newObj.add(new Lover('ny1','A','Aries','ha nam','game',5398, ))
newObj.add(new Lover('ny2','B','Aries','ha nam','game',5398, ))
newObj.add(new Lover('ny3','C','Aries','ha nam','game',5398, ))
newObj.add(new Lover('ny4','D','Aries','ha nam','game',5398, ))
newObj.show()


console.log('Edit Lover');
let code = readlineSync.question('nhap code em ny can sua ')
let newCode = readlineSync.question(' new code ')
let newName = readlineSync.question(' new name ')
let newzodiac = readlineSync.question(' new zodiac ')
let newAdress = readlineSync.question(' new adress ')
let newInterrest = readlineSync.question(' new Interrest ')
let newBirthday = readlineSync.question(' new Birthday ')
newObj.edit(code,new Lover(newCode,newName,newzodiac,newAdress,newInterrest,newBirthday))



console.log('Delete Lover');
let DeleteLover= readlineSync.question('nhap ny can xao di ')
newObj.delete(DeleteLover)

console.log('search Lover');
let search1 = readlineSync.question('nhap ten em ny can tim di ')
newObj.search(search1)

