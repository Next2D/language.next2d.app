/**
 * @class
 */
class Language
{
    /**
     * @constructor
     * @public
     */
    constructor()
    {
        this.mapping = this.createMapping();
    }

    /**
     * @param  {string} value
     * @return {string}
     * @method
     * @public
     */
    replace (value)
    {
        return this.mapping.has(value)
            ? this.mapping.get(value)
            : value;
    }
}