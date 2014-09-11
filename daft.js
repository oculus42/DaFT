(function(){
  
  var Data = function(){
    
    if (!(this instanceof Data)) {
      return new Data();
    }
    
    this.load = function(name,func){
      return true;
    }
    
    this.unload = function(name){
      return true;
    }
    
    this.loaded = [];
    
  },
  Accessories = function(){
      
    if (!(this instanceof Data)) {
      return new Data();
    }
    
    this.load = function(){
      return true;
    }
    
    this.unload = function(){
      return true;
    }
    
    this.loaded = [];
      
  },
  Functions = function(){
    if (!(this instanceof Data)) {
      return new Data();
    }
    
    this.load = function(){
      return true;
    }
    
    this.unload = function(){
      return true;
    }
    
    this.loaded = [];
  },
  Templates = function(){
    if (!(this instanceof Data)) {
      return new Data();
    }
    
    this.load = function(){
      return true;
    }
    
    this.unload = function(){
      return true;
    }
    
    this.loaded = [];
  };
  
  return {
    data : Data,
    accessories : Accessories,
    functions : Functions,
    templates : Templates
  }
})();
