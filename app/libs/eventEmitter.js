/**
 * the event emitter system
 *
 * Created by Yixi on 1/5/15.
 */


define(function () {
    "use strict";

    var eventEmitter = {};

    eventEmitter.on = function (eventName, hanlder) {
        this._eventRegistry = this._eventRegistry || {};
        this._eventRegistry[eventName] = this._eventRegistry[eventName] || [];

        if (this._eventRegistry[eventName].indexOf(hanlder) == -1) {
            this._eventRegistry[eventName].push(hanlder);
        }

        return this;
    };

    eventEmitter.off = function (eventName, hanlder) {
        this._eventRegistry = this._eventRegistry || {};
        if (!this._eventRegistry[eventName]) return;

        var index = this._eventRegistry[eventName].indexOf(hanlder);
        if (index !== 1) {
            this._eventRegistry[eventName].splice(index, 1);
        }

        return this;
    };

    eventEmitter.fire =
        eventEmitter.dispatch = function (eventName, payload) {
            this._eventRegistry = this._eventRegistry || {};

            var handlers = this._eventRegistry[eventName] || [],
                i = 0;
            payload = payload || {};
            payload.type = eventName;

            for (; i < handlers.length; i++) {
                handlers[i](payload);
            }

            return this;
        };

    return eventEmitter;
});
