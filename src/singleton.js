/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties#simulating_private_constructors
 */

export default class Singleton {
  static #isInternalConstructing = false;

  constructor() {
    if (!Singleton.#isInternalConstructing) {
      throw new TypeError('Singleton is not constructable');
    }
    Singleton.#isInternalConstructing = false;

    Singleton.instance = this;
  }

  static getInstance() {
    Singleton.#isInternalConstructing = true;
    if (!Singleton.instance) Singleton.instance = new Singleton();
    return Singleton.instance;
  }
}
