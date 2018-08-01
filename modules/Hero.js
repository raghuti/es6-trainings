export class Hero{
    constructor(fn, ln, cty){
      this.firstname = fn;
      this.lastname = ln;
      var secret = "Secret";
      this._city = cty;
    }
    fullname(){
        return this.firstname+" "+this.lastname
    }
    get city(){
      return this._city;
    } 
    set city(arg){
        this._city = arg
    }
};