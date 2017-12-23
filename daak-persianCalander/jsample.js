var daak = (function ()
{
    // Define a local copy of "k"
    var k = function (selector, context)
    {
        // The k object is actually just the init constructor 'enhanced'
        var kobj = new k.fn.init(selector, context);
        return kobj;
    };

    //Define k’s fn prototype, specially contains init method
    k.fn = k.prototype = {
        init: function (selector, context)
        {
            if (!selector)
            {
                return this;
            }

            else if (selector.nodeType){
                this[]
            }

            else {
                this[0] = document.querySelectorAll(selector);
                this.length = 1
                return this;
            }
        }
    };

    // Give the init function the "k" prototype for later instantiation
    k.fn.init.prototype = k.fn;

    // Return "k" to the global object
    return k;
})();