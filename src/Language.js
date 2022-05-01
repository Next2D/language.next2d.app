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
        requestAnimationFrame(this.initialize.bind(this));
    }

    /**
     * @return {void}
     * @method
     * @public
     */
    initialize ()
    {
        const elements = document.getElementsByClassName("language");
        for (let idx = 0; idx < elements.length; ++idx) {

            const element = elements[idx];

            const text = element.dataset.text;
            if (!this.mapping.has(text)) {
                continue;
            }

            element.innerText = this.mapping.get(text);
        }
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
