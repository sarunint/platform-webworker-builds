/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ɵDomAdapter as DomAdapter } from '@angular/platform-browser';
/**
 * This adapter is required to log error messages.
 *
 * Note: other methods all throw as the DOM is not accessible directly in web worker context.
 */
export declare class WorkerDomAdapter extends DomAdapter {
    static makeCurrent(): void;
    logError(error: any): void;
    log(error: any): void;
    logGroup(error: any): void;
    logGroupEnd(): void;
    contains(nodeA: any, nodeB: any): boolean;
    hasProperty(element: any, name: string): boolean;
    setProperty(el: Element, name: string, value: any): void;
    getProperty(el: Element, name: string): any;
    invoke(el: Element, methodName: string, args: any[]): any;
    attrToPropMap: {
        [key: string]: string;
    };
    parse(templateHtml: string): void;
    querySelector(el: any, selector: string): HTMLElement;
    querySelectorAll(el: any, selector: string): any[];
    on(el: any, evt: any, listener: any): void;
    onAndCancel(el: any, evt: any, listener: any): Function;
    dispatchEvent(el: any, evt: any): void;
    createMouseEvent(eventType: any): any;
    createEvent(eventType: string): any;
    preventDefault(evt: any): void;
    isPrevented(evt: any): boolean;
    getInnerHTML(el: any): string;
    getTemplateContent(el: any): any;
    getOuterHTML(el: any): string;
    nodeName(node: any): string;
    nodeValue(node: any): string;
    type(node: any): string;
    content(node: any): any;
    firstChild(el: any): Node;
    nextSibling(el: any): Node;
    parentElement(el: any): Node;
    childNodes(el: any): Node[];
    childNodesAsList(el: any): Node[];
    clearNodes(el: any): void;
    appendChild(el: any, node: any): void;
    removeChild(el: any, node: any): void;
    replaceChild(el: any, newNode: any, oldNode: any): void;
    remove(el: any): Node;
    insertBefore(parent: any, el: any, node: any): void;
    insertAllBefore(parent: any, el: any, nodes: any): void;
    insertAfter(parent: any, el: any, node: any): void;
    setInnerHTML(el: any, value: any): void;
    getText(el: any): string;
    setText(el: any, value: string): void;
    getValue(el: any): string;
    setValue(el: any, value: string): void;
    getChecked(el: any): boolean;
    setChecked(el: any, value: boolean): void;
    createComment(text: string): any;
    createTemplate(html: any): HTMLElement;
    createElement(tagName: any, doc?: any): HTMLElement;
    createElementNS(ns: string, tagName: string, doc?: any): Element;
    createTextNode(text: string, doc?: any): Text;
    createScriptTag(attrName: string, attrValue: string, doc?: any): HTMLElement;
    createStyleElement(css: string, doc?: any): HTMLStyleElement;
    createShadowRoot(el: any): any;
    getShadowRoot(el: any): any;
    getHost(el: any): any;
    getDistributedNodes(el: any): Node[];
    clone(node: Node): Node;
    getElementsByClassName(element: any, name: string): HTMLElement[];
    getElementsByTagName(element: any, name: string): HTMLElement[];
    classList(element: any): any[];
    addClass(element: any, className: string): void;
    removeClass(element: any, className: string): void;
    hasClass(element: any, className: string): boolean;
    setStyle(element: any, styleName: string, styleValue: string): void;
    removeStyle(element: any, styleName: string): void;
    getStyle(element: any, styleName: string): string;
    hasStyle(element: any, styleName: string, styleValue?: string): boolean;
    tagName(element: any): string;
    attributeMap(element: any): Map<string, string>;
    hasAttribute(element: any, attribute: string): boolean;
    hasAttributeNS(element: any, ns: string, attribute: string): boolean;
    getAttribute(element: any, attribute: string): string;
    getAttributeNS(element: any, ns: string, attribute: string): string;
    setAttribute(element: any, name: string, value: string): void;
    setAttributeNS(element: any, ns: string, name: string, value: string): void;
    removeAttribute(element: any, attribute: string): void;
    removeAttributeNS(element: any, ns: string, attribute: string): void;
    templateAwareRoot(el: any): void;
    createHtmlDocument(): HTMLDocument;
    getDefaultDocument(): Document;
    getBoundingClientRect(el: any): void;
    getTitle(doc: Document): string;
    setTitle(doc: Document, newTitle: string): void;
    elementMatches(n: any, selector: string): boolean;
    isTemplateElement(el: any): boolean;
    isTextNode(node: any): boolean;
    isCommentNode(node: any): boolean;
    isElementNode(node: any): boolean;
    hasShadowRoot(node: any): boolean;
    isShadowRoot(node: any): boolean;
    importIntoDoc(node: Node): Node;
    adoptNode(node: Node): Node;
    getHref(element: any): string;
    getEventKey(event: any): string;
    resolveAndSetHref(element: any, baseUrl: string, href: string): void;
    supportsDOMEvents(): boolean;
    supportsNativeShadowDOM(): boolean;
    getGlobalEventTarget(doc: Document, target: string): any;
    getHistory(): History;
    getLocation(): Location;
    getBaseHref(doc: Document): string;
    resetBaseElement(): void;
    getUserAgent(): string;
    setData(element: any, name: string, value: string): void;
    getComputedStyle(element: any): any;
    getData(element: any, name: string): string;
    performanceNow(): number;
    getAnimationPrefix(): string;
    getTransitionEnd(): string;
    supportsAnimation(): boolean;
    supportsWebAnimation(): boolean;
    supportsCookies(): boolean;
    getCookie(name: string): string;
    setCookie(name: string, value: string): void;
}
