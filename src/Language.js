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

            let value = this.mapping.get(text);

            let shortcutKey = element.dataset.shortcutKey;
            if (shortcutKey) {
                const mapping = Util.$shortcutSetting.viewMapping.get(
                    element.dataset.area
                );

                const shortcutText = mapping.has(shortcutKey)
                    ? mapping.get(shortcutKey).text
                    : element.dataset.shortcutText;

                value += ` (${shortcutText})`;
            }

            element.innerText = value;
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
