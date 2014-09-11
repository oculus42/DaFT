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
   * @description Provides a model for intereacting with Data components.
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
     * @description Provides a method for loading new modules
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
   * @description Provides a model for intereacting with Accessory components.
   */
   
  Accessories = function(){
      
    if (!(this instanceof Data)) {
      return new Data();
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
     * @description Provides a method for loading new modules
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
   * @description Provides a model for intereacting with Functional components.
   */
   
  Functions = function(){
    
    if (!(this instanceof Data)) {
      return new Data();
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
     * @description Provides a method for loading new modules
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
   * @description Provides a model for intereacting with Template components.
   */
   
  Templates = function(){
    
    if (!(this instanceof Data)) {
      return new Data();
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
     * @description Provides a method for loading new modules
     */
    
    this.unload = function(name){
      return true;
    }
    
    this.loaded = {};
    
  };
  
  return {
    data : Data(),
    accessories : Accessories(),
    functions : Functions(),
    templates : Templates()
  }
  
})();
