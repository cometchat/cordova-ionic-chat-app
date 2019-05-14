export class Reorder {
    onClick(ev) {
        ev.preventDefault();
        ev.stopImmediatePropagation();
    }
    render() {
        return (h("slot", null,
            h("ion-icon", { name: "reorder", lazy: false, class: "reorder-icon" })));
    }
    static get is() { return "ion-reorder"; }
    static get encapsulation() { return "shadow"; }
    static get listeners() { return [{
            "name": "click",
            "method": "onClick",
            "capture": true
        }]; }
    static get style() { return "/**style-placeholder:ion-reorder:**/"; }
    static get styleMode() { return "/**style-id-placeholder:ion-reorder:**/"; }
}
