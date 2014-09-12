/**
 * DaFT
 * @author Derek Dorr
 * @version 0.0.1
 * @license BSD
 */

;(function(){
  
  /**
   * Data Model
   * @added 09-11-2014
   * @updated 09-11-2014
   * @description Provides a model for interacting with Data components.
   */
  
  var Data = function(){
    
    if (!(this instanceof Data)) {
      return new Data();
    }
    
    /**
     * foo.data.load()
     * @added 09-11-2014
     * @updated 09-11-2014
     * @description Provides a method for loading new modules
     */
    
    this.load = function(name,func){
      return true;
    }
    
    /**
     * foo.data.unload()
     * @added 09-11-2014
     * @updated 09-11-2014
     * @description Provides a method for unloading modules
     */
    
    this.unload = function(name){
      return true;
    }
    
    this.loaded = {};
    
  },
  
  /**
   * Accessories Model
   * @added 09-11-2014
   * @updated 09-11-2014
   * @description Provides a model for interacting with Accessory components.
   */
   
  Accessories = function(){
      
    if (!(this instanceof Accessories)) {
      return new Accessories();
    }
    
    /**
     * foo.accessories.load()
     * @added 09-11-2014
     * @updated 09-11-2014
     * @description Provides a method for loading new modules
     */
    
    this.load = function(name,func){
      return true;
    }
    
    /**
     * foo.accessories.unload()
     * @added 09-11-2014
     * @updated 09-11-2014
     * @description Provides a method for unloading modules
     */
    
    this.unload = function(name){
      return true;
    }
    
    this.loaded = {};
      
  },
  
  /**
   * Functions Model
   * @added 09-11-2014
   * @updated 09-11-2014
   * @description Provides a model for interacting with Functional components.
   */
   
  Functions = function(){
    
    if (!(this instanceof Functions)) {
      return new Functions();
    }

    /**
     * foo.functions.load()
     * @added 09-11-2014
     * @updated 09-11-2014
     * @description Provides a method for loading new modules
     */
    
    this.load = function(name,func){
      return true;
    }
    
    /**
     * foo.functions.unload()
     * @added 09-11-2014
     * @updated 09-11-2014
     * @description Provides a method for unloading modules
     */
    
    this.unload = function(name){
      return true;
    }
    
    this.loaded = {};
      
  },

  /**
   * Templates Model
   * @added 09-11-2014
   * @updated 09-11-2014
   * @description Provides a model for interacting with Template components.
   */
   
  Templates = function(){
    
    if (!(this instanceof Templates)) {
      return new Templates();
    }
    
    /**
     * foo.templates.load()
     * @added 09-11-2014
     * @updated 09-11-2014
     * @description Provides a method for loading new modules
     */
    
    this.load = function(name,data){
      return true;
    }
    
    /**
     * foo.templates.unload()
     * @added 09-11-2014
     * @updated 09-11-2014
     * @description Provides a method for unloading modules
     */
    
    this.unload = function(name){
      return true;
    }
    
    this.loaded = {};
    
  };
  
  // TODO: Expose DaFT interface
  return {
    data : Data(),
    accessories : Accessories(),
    functions : Functions(),
    templates : Templates()
  }
  
}());
