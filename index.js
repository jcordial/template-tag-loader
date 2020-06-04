module.exports = {
    default: function (source, map, meta) {
        const cb = this.async();
        let normalized = source
            .replace(/\r?\n|\r/g, '')
            .replace(/('|")/g, `\\$&`)
            .trim()
            .substring(
                10, /*'<template>'.length*/
                normalized.length - 11 //'</template>'.length
            );
        return cb(null, `
        const template = document.createElement("template");
        export default template;
        template.innerHTML = "${normalized}";
        `, map, meta);
    }
}
