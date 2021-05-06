/**
 * Combined by jsDelivr.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.Tone = e())
    : (t.Tone = e());
})("undefined" != typeof self ? self : this, function () {
  return (function (t) {
    var e = {};
    function i(s) {
      if (e[s]) return e[s].exports;
      var n = (e[s] = { i: s, l: !1, exports: {} });
      return t[s].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
    }
    return (
      (i.m = t),
      (i.c = e),
      (i.d = function (t, e, s) {
        i.o(t, e) ||
          Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: s,
          });
      }),
      (i.r = function (t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (i.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return i.d(e, "a", e), e;
      }),
      (i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (i.p = ""),
      i((i.s = 148))
    );
  })([
    function (t, e, i) {
      "use strict";
      i.r(e),
        function (t) {
          var s = i(93),
            n = function () {
              if (!(this instanceof n))
                throw new Error(
                  "constructor needs to be called with the 'new' keyword"
                );
            };
          /**
           *  Tone.js
           *  @author Yotam Mann
           *  @license http://opensource.org/licenses/MIT MIT License
           *  @copyright 2014-2019 Yotam Mann
           */ (n.prototype.toString = function () {
            for (var t in n) {
              var e = t[0].match(/^[A-Z]$/),
                i = n[t] === this.constructor;
              if (n.isFunction(n[t]) && e && i) return t;
            }
            return "Tone";
          }),
            (n.prototype.dispose = function () {
              return this;
            }),
            (n.prototype.set = function (t, e) {
              if (n.isString(t)) {
                var i = {};
                (i[t] = e), (t = i);
              }
              t: for (var s in t) {
                e = t[s];
                var o = this;
                if (-1 !== s.indexOf(".")) {
                  for (var a = s.split("."), r = 0; r < a.length - 1; r++)
                    if ((o = o[a[r]]) instanceof n) {
                      a.splice(0, r + 1);
                      var l = a.join(".");
                      o.set(l, e);
                      continue t;
                    }
                  s = a[a.length - 1];
                }
                var u = o[s];
                n.isUndef(u) ||
                  ((n.Signal && u instanceof n.Signal) ||
                  (n.Param && u instanceof n.Param)
                    ? u.value !== e && (u.value = e)
                    : u instanceof AudioParam
                    ? u.value !== e && (u.value = e)
                    : n.TimeBase && u instanceof n.TimeBase
                    ? (o[s] = e)
                    : u instanceof n
                    ? u.set(e)
                    : u !== e && (o[s] = e));
              }
              return this;
            }),
            (n.prototype.get = function (t) {
              n.isUndef(t)
                ? (t = this._collectDefaults(this.constructor))
                : n.isString(t) && (t = [t]);
              for (var e = {}, i = 0; i < t.length; i++) {
                var s = t[i],
                  o = this,
                  a = e;
                if (-1 !== s.indexOf(".")) {
                  for (var r = s.split("."), l = 0; l < r.length - 1; l++) {
                    var u = r[l];
                    (a[u] = a[u] || {}), (a = a[u]), (o = o[u]);
                  }
                  s = r[r.length - 1];
                }
                var d = o[s];
                n.isObject(t[s])
                  ? (a[s] = d.get())
                  : n.Signal && d instanceof n.Signal
                  ? (a[s] = d.value)
                  : n.Param && d instanceof n.Param
                  ? (a[s] = d.value)
                  : d instanceof AudioParam
                  ? (a[s] = d.value)
                  : d instanceof n
                  ? (a[s] = d.get())
                  : !n.isFunction(d) && n.isDefined(d) && (a[s] = d);
              }
              return e;
            }),
            (n.prototype._collectDefaults = function (t) {
              var e = [];
              if (
                (n.isDefined(t.defaults) && (e = Object.keys(t.defaults)),
                n.isDefined(t._super))
              )
                for (
                  var i = this._collectDefaults(t._super), s = 0;
                  s < i.length;
                  s++
                )
                  -1 === e.indexOf(i[s]) && e.push(i[s]);
              return e;
            }),
            (n.defaults = function (t, e, i) {
              var s = {};
              if (1 === t.length && n.isObject(t[0])) s = t[0];
              else for (var o = 0; o < e.length; o++) s[e[o]] = t[o];
              return n.isDefined(i.defaults)
                ? n.defaultArg(s, i.defaults)
                : n.isObject(i)
                ? n.defaultArg(s, i)
                : s;
            }),
            (n.defaultArg = function (t, e) {
              if (n.isObject(t) && n.isObject(e)) {
                var i = {};
                for (var s in t) i[s] = n.defaultArg(e[s], t[s]);
                for (var o in e) i[o] = n.defaultArg(t[o], e[o]);
                return i;
              }
              return n.isUndef(t) ? e : t;
            }),
            (n.prototype.log = function () {
              if (this.debug || this.toString() === n.global.TONE_DEBUG_CLASS) {
                var t = Array.from(arguments);
                t.unshift(this.toString() + ":"), console.log.apply(void 0, t);
              }
            }),
            (n.prototype.assert = function (t, e) {
              if (!t) throw new Error(e);
            }),
            (n.connectSeries = function () {
              for (var t = arguments[0], e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                n.connect(t, i), (t = i);
              }
              return n;
            }),
            (n.connect = function (t, e, i, s) {
              for (; n.isDefined(e.input); )
                n.isArray(e.input)
                  ? ((s = n.defaultArg(s, 0)), (e = e.input[s]), (s = 0))
                  : e.input && (e = e.input);
              return (
                e instanceof AudioParam
                  ? t.connect(e, i)
                  : e instanceof AudioNode && t.connect(e, i, s),
                n
              );
            }),
            (n.disconnect = function (t, e, i, s) {
              if (e) {
                for (var o = !1; !o; )
                  n.isArray(e.input)
                    ? (n.isDefined(s)
                        ? n.disconnect(t, e.input[s], i)
                        : e.input.forEach(function (e) {
                            try {
                              n.disconnect(t, e, i);
                            } catch (t) {}
                          }),
                      (o = !0))
                    : e.input
                    ? (e = e.input)
                    : (o = !0);
                e instanceof AudioParam
                  ? t.disconnect(e, i)
                  : e instanceof AudioNode && t.disconnect(e, i, s);
              } else t.disconnect();
              return n;
            }),
            (n.isUndef = function (t) {
              return void 0 === t;
            }),
            (n.isDefined = function (t) {
              return !n.isUndef(t);
            }),
            (n.isFunction = function (t) {
              return "function" == typeof t;
            }),
            (n.isNumber = function (t) {
              return "number" == typeof t;
            }),
            (n.isObject = function (t) {
              return (
                "[object Object]" === Object.prototype.toString.call(t) &&
                t.constructor === Object
              );
            }),
            (n.isBoolean = function (t) {
              return "boolean" == typeof t;
            }),
            (n.isArray = function (t) {
              return Array.isArray(t);
            }),
            (n.isString = function (t) {
              return "string" == typeof t;
            }),
            (n.isNote = function (t) {
              return (
                n.isString(t) && /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(t)
              );
            }),
            (n.noOp = function () {}),
            (n.prototype._readOnly = function (t) {
              if (Array.isArray(t))
                for (var e = 0; e < t.length; e++) this._readOnly(t[e]);
              else
                Object.defineProperty(this, t, {
                  writable: !1,
                  enumerable: !0,
                });
            }),
            (n.prototype._writable = function (t) {
              if (Array.isArray(t))
                for (var e = 0; e < t.length; e++) this._writable(t[e]);
              else Object.defineProperty(this, t, { writable: !0 });
            }),
            (n.State = {
              Started: "started",
              Stopped: "stopped",
              Paused: "paused",
            }),
            (n.global = n.isUndef(t) ? window : t),
            (n.equalPowerScale = function (t) {
              var e = 0.5 * Math.PI;
              return Math.sin(t * e);
            }),
            (n.dbToGain = function (t) {
              return Math.pow(10, t / 20);
            }),
            (n.gainToDb = function (t) {
              return (Math.log(t) / Math.LN10) * 20;
            }),
            (n.intervalToFrequencyRatio = function (t) {
              return Math.pow(2, t / 12);
            }),
            (n.prototype.now = function () {
              return n.context.now();
            }),
            (n.now = function () {
              return n.context.now();
            }),
            (n.prototype.immediate = function () {
              return n.context.currentTime;
            }),
            (n.immediate = function () {
              return n.context.currentTime;
            }),
            (n.extend = function (t, e) {
              function i() {}
              n.isUndef(e) && (e = n),
                (i.prototype = e.prototype),
                (t.prototype = new i()),
                (t.prototype.constructor = t),
                (t._super = e);
            }),
            (n._audioContext = null),
            (n.start = function () {
              return n.context.resume();
            }),
            Object.defineProperty(n, "context", {
              get: function () {
                return n._audioContext;
              },
              set: function (t) {
                t.isContext
                  ? (n._audioContext = t)
                  : (n._audioContext = new n.Context(t)),
                  n.Context.emit("init", n._audioContext);
              },
            }),
            Object.defineProperty(n.prototype, "context", {
              get: function () {
                return n.context;
              },
            }),
            (n.setContext = function (t) {
              n.context = t;
            }),
            Object.defineProperty(n.prototype, "blockTime", {
              get: function () {
                return 128 / this.context.sampleRate;
              },
            }),
            Object.defineProperty(n.prototype, "sampleTime", {
              get: function () {
                return 1 / this.context.sampleRate;
              },
            }),
            Object.defineProperty(n, "supported", {
              get: function () {
                var t =
                    n.global.hasOwnProperty("AudioContext") ||
                    n.global.hasOwnProperty("webkitAudioContext"),
                  e = n.global.hasOwnProperty("Promise");
                return t && e;
              },
            }),
            Object.defineProperty(n, "initialized", {
              get: function () {
                return Boolean(n.context);
              },
            }),
            (n.getContext = function (t) {
              if (n.initialized) t(n.context);
              else {
                var e = function () {
                  t(n.context), n.Context.off("init", e);
                };
                n.Context.on("init", e);
              }
              return n;
            }),
            (n.version = s.a),
            (e.default = n);
        }.call(this, i(147));
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(20);
      if (s.default.supported) {
        var n = new OfflineAudioContext(2, 1, 44100),
          o = n.createGain(),
          a = n.createGain();
        if (o.connect(a) !== a) {
          var r = AudioNode.prototype.connect;
          AudioNode.prototype.connect = function () {
            return r.apply(this, arguments), arguments[0];
          };
        }
      }
      (s.default.AudioNode = function () {
        s.default.call(this);
        var t = s.default.defaults(arguments, ["context"], {
          context: s.default.context,
        });
        this._context = t.context;
      }),
        s.default.extend(s.default.AudioNode),
        Object.defineProperty(s.default.AudioNode.prototype, "context", {
          get: function () {
            return this._context;
          },
        }),
        (s.default.AudioNode.prototype.createInsOuts = function (t, e) {
          1 === t
            ? (this.input = this.context.createGain())
            : t > 1 && (this.input = new Array(t)),
            1 === e
              ? (this.output = this.context.createGain())
              : e > 1 && (this.output = new Array(e));
        }),
        Object.defineProperty(s.default.AudioNode.prototype, "channelCount", {
          get: function () {
            return this.output.channelCount;
          },
          set: function (t) {
            return (this.output.channelCount = t);
          },
        }),
        Object.defineProperty(
          s.default.AudioNode.prototype,
          "channelCountMode",
          {
            get: function () {
              return this.output.channelCountMode;
            },
            set: function (t) {
              return (this.output.channelCountMode = t);
            },
          }
        ),
        Object.defineProperty(
          s.default.AudioNode.prototype,
          "channelInterpretation",
          {
            get: function () {
              return this.output.channelInterpretation;
            },
            set: function (t) {
              return (this.output.channelInterpretation = t);
            },
          }
        ),
        Object.defineProperty(s.default.AudioNode.prototype, "numberOfInputs", {
          get: function () {
            return this.input
              ? s.default.isArray(this.input)
                ? this.input.length
                : 1
              : 0;
          },
        }),
        Object.defineProperty(
          s.default.AudioNode.prototype,
          "numberOfOutputs",
          {
            get: function () {
              return this.output
                ? s.default.isArray(this.output)
                  ? this.output.length
                  : 1
                : 0;
            },
          }
        ),
        (s.default.AudioNode.prototype.connect = function (t, e, i) {
          return (
            s.default.isArray(this.output)
              ? ((e = s.default.defaultArg(e, 0)),
                this.output[e].connect(t, 0, i))
              : s.default.connect(this.output, t, e, i),
            this
          );
        }),
        (s.default.AudioNode.prototype.disconnect = function (t, e, i) {
          return (
            s.default.isArray(this.output)
              ? ((e = s.default.defaultArg(e, 0)),
                this.output[e].disconnect(t, 0, i))
              : s.default.disconnect(this.output, t, e, i),
            this
          );
        }),
        (s.default.AudioNode.prototype.chain = function () {
          var t = Array.from(arguments);
          return (
            t.unshift(this), s.default.connectSeries.apply(void 0, t), this
          );
        }),
        (s.default.AudioNode.prototype.fan = function () {
          for (var t = 0; t < arguments.length; t++) this.connect(arguments[t]);
          return this;
        }),
        (s.default.AudioNode.prototype.dispose = function () {
          return (
            s.default.isDefined(this.input) &&
              (this.input instanceof AudioNode && this.input.disconnect(),
              (this.input = null)),
            s.default.isDefined(this.output) &&
              (this.output instanceof AudioNode && this.output.disconnect(),
              (this.output = null)),
            (this._context = null),
            this
          );
        });
      e.default = s.default.AudioNode;
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(4), i(14), i(30), i(44), i(20), i(3);
      if (
        s.default.supported &&
        !s.default.global.AudioContext.prototype.createConstantSource
      ) {
        var n = function (t) {
          this.context = t;
          for (
            var e = t.createBuffer(1, 128, t.sampleRate),
              i = e.getChannelData(0),
              s = 0;
            s < i.length;
            s++
          )
            i[s] = 1;
          (this._bufferSource = t.createBufferSource()),
            (this._bufferSource.channelCount = 1),
            (this._bufferSource.channelCountMode = "explicit"),
            (this._bufferSource.buffer = e),
            (this._bufferSource.loop = !0);
          var n = (this._output = t.createGain());
          (this.offset = n.gain), this._bufferSource.connect(n);
        };
        (n.prototype.start = function (t) {
          return this._bufferSource.start(t), this;
        }),
          (n.prototype.stop = function (t) {
            return this._bufferSource.stop(t), this;
          }),
          (n.prototype.connect = function () {
            return this._output.connect.apply(this._output, arguments), this;
          }),
          (n.prototype.disconnect = function () {
            return this._output.disconnect.apply(this._output, arguments), this;
          }),
          (AudioContext.prototype.createConstantSource = function () {
            return new n(this);
          }),
          (s.default.Context.prototype.createConstantSource = function () {
            return new n(this);
          });
      }
      (s.default.Signal = function () {
        var t = s.default.defaults(
          arguments,
          ["value", "units"],
          s.default.Signal
        );
        s.default.Param.call(this, t),
          (this._constantSource = this.context.createConstantSource()),
          this._constantSource.start(0),
          (this._param = this._constantSource.offset),
          (this.value = t.value),
          (this.output = this._constantSource),
          (this.input = this._param = this.output.offset);
      }),
        s.default.extend(s.default.Signal, s.default.Param),
        (s.default.Signal.defaults = {
          value: 0,
          units: s.default.Type.Default,
          convert: !0,
        }),
        (s.default.Signal.prototype.connect =
          s.default.SignalBase.prototype.connect),
        (s.default.Signal.prototype.disconnect =
          s.default.SignalBase.prototype.disconnect),
        (s.default.Signal.prototype.getValueAtTime = function (t) {
          return this._param.getValueAtTime
            ? this._param.getValueAtTime(t)
            : s.default.Param.prototype.getValueAtTime.call(this, t);
        }),
        (s.default.Signal.prototype.dispose = function () {
          return (
            s.default.Param.prototype.dispose.call(this),
            this._constantSource.stop(),
            this._constantSource.disconnect(),
            (this._constantSource = null),
            this
          );
        });
      e.default = s.default.Signal;
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(14), i(4), i(1);
      (s.default.Gain = function () {
        var t = s.default.defaults(
          arguments,
          ["gain", "units"],
          s.default.Gain
        );
        s.default.AudioNode.call(this, t),
          (this.input = this.output = this._gainNode = this.context.createGain()),
          (this.gain = new s.default.Param({
            param: this._gainNode.gain,
            units: t.units,
            value: t.gain,
            convert: t.convert,
          })),
          this._readOnly("gain");
      }),
        s.default.extend(s.default.Gain, s.default.AudioNode),
        (s.default.Gain.defaults = { gain: 1, convert: !0 }),
        (s.default.Gain.prototype.dispose = function () {
          s.default.AudioNode.prototype.dispose.call(this),
            this._gainNode.disconnect(),
            (this._gainNode = null),
            this._writable("gain"),
            this.gain.dispose(),
            (this.gain = null);
        }),
        (e.default = s.default.Gain);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(63), i(46), i(45), i(20);
      (s.default.Type = {
        Default: "number",
        Time: "time",
        Frequency: "frequency",
        TransportTime: "transportTime",
        Ticks: "ticks",
        NormalRange: "normalRange",
        AudioRange: "audioRange",
        Decibels: "db",
        Interval: "interval",
        BPM: "bpm",
        Positive: "positive",
        Gain: "gain",
        Cents: "cents",
        Degrees: "degrees",
        MIDI: "midi",
        BarsBeatsSixteenths: "barsBeatsSixteenths",
        Samples: "samples",
        Hertz: "hertz",
        Note: "note",
        Milliseconds: "milliseconds",
        Seconds: "seconds",
        Notation: "notation",
      }),
        (s.default.prototype.toSeconds = function (t) {
          return s.default.isNumber(t)
            ? t
            : s.default.isUndef(t)
            ? this.now()
            : s.default.isString(t) || s.default.isObject(t)
            ? new s.default.Time(t).toSeconds()
            : t instanceof s.default.TimeBase
            ? t.toSeconds()
            : void 0;
        }),
        (s.default.prototype.toFrequency = function (t) {
          return s.default.isNumber(t)
            ? t
            : s.default.isString(t) ||
              s.default.isUndef(t) ||
              s.default.isObject(t)
            ? new s.default.Frequency(t).valueOf()
            : t instanceof s.default.TimeBase
            ? t.toFrequency()
            : void 0;
        }),
        (s.default.prototype.toTicks = function (t) {
          return s.default.isNumber(t) ||
            s.default.isString(t) ||
            s.default.isObject(t)
            ? new s.default.TransportTime(t).toTicks()
            : s.default.isUndef(t)
            ? s.default.Transport.ticks
            : t instanceof s.default.TimeBase
            ? t.toTicks()
            : void 0;
        }),
        (e.default = s.default);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(14), i(3), i(30);
      (s.default.Multiply = function (t) {
        s.default.Signal.call(this),
          this.createInsOuts(2, 0),
          (this._mult = this.input[0] = this.output = new s.default.Gain()),
          (this._param = this.input[1] = this.output.gain),
          (this.value = s.default.defaultArg(t, 0));
      }),
        s.default.extend(s.default.Multiply, s.default.Signal),
        (s.default.Multiply.prototype.dispose = function () {
          return (
            s.default.Signal.prototype.dispose.call(this),
            this._mult.dispose(),
            (this._mult = null),
            (this._param = null),
            this
          );
        }),
        (e.default = s.default.Multiply);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(16), i(27), i(40), i(4), i(34), i(2), i(1);
      (s.default.Source = function (t) {
        (t = s.default.defaultArg(t, s.default.Source.defaults)),
          s.default.AudioNode.call(this),
          (this._volume = this.output = new s.default.Volume(t.volume)),
          (this.volume = this._volume.volume),
          this._readOnly("volume"),
          (this._state = new s.default.TimelineState(s.default.State.Stopped)),
          (this._state.memory = 100),
          (this._synced = !1),
          (this._scheduled = []),
          (this._volume.output.output.channelCount = 2),
          (this._volume.output.output.channelCountMode = "explicit"),
          (this.mute = t.mute);
      }),
        s.default.extend(s.default.Source, s.default.AudioNode),
        (s.default.Source.defaults = { volume: 0, mute: !1 }),
        Object.defineProperty(s.default.Source.prototype, "state", {
          get: function () {
            return this._synced
              ? s.default.Transport.state === s.default.State.Started
                ? this._state.getValueAtTime(s.default.Transport.seconds)
                : s.default.State.Stopped
              : this._state.getValueAtTime(this.now());
          },
        }),
        Object.defineProperty(s.default.Source.prototype, "mute", {
          get: function () {
            return this._volume.mute;
          },
          set: function (t) {
            this._volume.mute = t;
          },
        }),
        (s.default.Source.prototype._start = s.default.noOp),
        (s.default.Source.prototype.restart = s.default.noOp),
        (s.default.Source.prototype._stop = s.default.noOp),
        (s.default.Source.prototype.start = function (t, e, i) {
          if (
            (s.default.isUndef(t) && this._synced
              ? (t = s.default.Transport.seconds)
              : ((t = this.toSeconds(t)),
                this._synced || (t = Math.max(t, this.context.currentTime))),
            this._state.getValueAtTime(t) === s.default.State.Started)
          )
            this._state.cancel(t),
              this._state.setStateAtTime(s.default.State.Started, t),
              this.restart(t, e, i);
          else if (
            (this._state.setStateAtTime(s.default.State.Started, t),
            this._synced)
          ) {
            var n = this._state.get(t);
            (n.offset = s.default.defaultArg(e, 0)), (n.duration = i);
            var o = s.default.Transport.schedule(
              function (t) {
                this._start(t, e, i);
              }.bind(this),
              t
            );
            this._scheduled.push(o),
              s.default.Transport.state === s.default.State.Started &&
                this._syncedStart(this.now(), s.default.Transport.seconds);
          } else this._start.apply(this, arguments);
          return this;
        }),
        (s.default.Source.prototype.stop = function (t) {
          if (
            (s.default.isUndef(t) && this._synced
              ? (t = s.default.Transport.seconds)
              : ((t = this.toSeconds(t)),
                (t = Math.max(t, this.context.currentTime))),
            this._synced)
          ) {
            var e = s.default.Transport.schedule(this._stop.bind(this), t);
            this._scheduled.push(e);
          } else this._stop.apply(this, arguments);
          return (
            this._state.cancel(t),
            this._state.setStateAtTime(s.default.State.Stopped, t),
            this
          );
        }),
        (s.default.Source.prototype.sync = function () {
          return (
            (this._synced = !0),
            (this._syncedStart = function (t, e) {
              if (e > 0) {
                var i = this._state.get(e);
                if (i && i.state === s.default.State.Started && i.time !== e) {
                  var n,
                    o = e - this.toSeconds(i.time);
                  i.duration && (n = this.toSeconds(i.duration) - o),
                    this._start(t, this.toSeconds(i.offset) + o, n);
                }
              }
            }.bind(this)),
            (this._syncedStop = function (t) {
              var e = s.default.Transport.getSecondsAtTime(
                Math.max(t - this.sampleTime, 0)
              );
              this._state.getValueAtTime(e) === s.default.State.Started &&
                this._stop(t);
            }.bind(this)),
            s.default.Transport.on("start loopStart", this._syncedStart),
            s.default.Transport.on("stop pause loopEnd", this._syncedStop),
            this
          );
        }),
        (s.default.Source.prototype.unsync = function () {
          this._synced &&
            (s.default.Transport.off("stop pause loopEnd", this._syncedStop),
            s.default.Transport.off("start loopStart", this._syncedStart)),
            (this._synced = !1);
          for (var t = 0; t < this._scheduled.length; t++) {
            var e = this._scheduled[t];
            s.default.Transport.clear(e);
          }
          return (this._scheduled = []), this._state.cancel(0), this;
        }),
        (s.default.Source.prototype.dispose = function () {
          s.default.AudioNode.prototype.dispose.call(this),
            this.unsync(),
            (this._scheduled = null),
            this._writable("volume"),
            this._volume.dispose(),
            (this._volume = null),
            (this.volume = null),
            this._state.dispose(),
            (this._state = null);
        }),
        (e.default = s.default.Source);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(30), i(44);
      if (
        s.default.supported &&
        !s.default.global.AudioContext.prototype._native_createWaveShaper
      ) {
        var n = navigator.userAgent.toLowerCase();
        if (n.includes("safari") && !n.includes("chrome")) {
          var o = function (t) {
            for (var e in ((this._internalNode = this.input = this.output = t._native_createWaveShaper()),
            (this._curve = null),
            this._internalNode))
              this._defineProperty(this._internalNode, e);
          };
          Object.defineProperty(o.prototype, "curve", {
            get: function () {
              return this._curve;
            },
            set: function (t) {
              this._curve = t;
              var e = new Float32Array(t.length + 1);
              e.set(t, 1), (e[0] = t[0]), (this._internalNode.curve = e);
            },
          }),
            (o.prototype._defineProperty = function (t, e) {
              s.default.isUndef(this[e]) &&
                Object.defineProperty(this, e, {
                  get: function () {
                    return "function" == typeof t[e] ? t[e].bind(t) : t[e];
                  },
                  set: function (i) {
                    t[e] = i;
                  },
                });
            }),
            (s.default.global.AudioContext.prototype._native_createWaveShaper =
              s.default.global.AudioContext.prototype.createWaveShaper),
            (s.default.global.AudioContext.prototype.createWaveShaper = function () {
              return new o(this);
            });
        }
      }
      (s.default.WaveShaper = function (t, e) {
        s.default.SignalBase.call(this),
          (this._shaper = this.input = this.output = this.context.createWaveShaper()),
          (this._curve = null),
          Array.isArray(t)
            ? (this.curve = t)
            : isFinite(t) || s.default.isUndef(t)
            ? (this._curve = new Float32Array(s.default.defaultArg(t, 1024)))
            : s.default.isFunction(t) &&
              ((this._curve = new Float32Array(s.default.defaultArg(e, 1024))),
              this.setMap(t));
      }),
        s.default.extend(s.default.WaveShaper, s.default.SignalBase),
        (s.default.WaveShaper.prototype.setMap = function (t) {
          for (
            var e = new Array(this._curve.length),
              i = 0,
              s = this._curve.length;
            i < s;
            i++
          ) {
            var n = (i / (s - 1)) * 2 - 1;
            e[i] = t(n, i);
          }
          return (this.curve = e), this;
        }),
        Object.defineProperty(s.default.WaveShaper.prototype, "curve", {
          get: function () {
            return this._shaper.curve;
          },
          set: function (t) {
            (this._curve = new Float32Array(t)),
              (this._shaper.curve = this._curve);
          },
        }),
        Object.defineProperty(s.default.WaveShaper.prototype, "oversample", {
          get: function () {
            return this._shaper.oversample;
          },
          set: function (t) {
            if (!["none", "2x", "4x"].includes(t))
              throw new RangeError(
                "Tone.WaveShaper: oversampling must be either 'none', '2x', or '4x'"
              );
            this._shaper.oversample = t;
          },
        }),
        (s.default.WaveShaper.prototype.dispose = function () {
          return (
            s.default.SignalBase.prototype.dispose.call(this),
            this._shaper.disconnect(),
            (this._shaper = null),
            (this._curve = null),
            this
          );
        });
      e.default = s.default.WaveShaper;
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(23), i(1);
      (s.default.Effect = function () {
        var t = s.default.defaults(arguments, ["wet"], s.default.Effect);
        s.default.AudioNode.call(this),
          this.createInsOuts(1, 1),
          (this._dryWet = new s.default.CrossFade(t.wet)),
          (this.wet = this._dryWet.fade),
          (this.effectSend = new s.default.Gain()),
          (this.effectReturn = new s.default.Gain()),
          s.default.connect(this.input, this._dryWet.a),
          s.default.connect(this.input, this.effectSend),
          this.effectReturn.connect(this._dryWet.b),
          this._dryWet.connect(this.output),
          this._readOnly(["wet"]);
      }),
        s.default.extend(s.default.Effect, s.default.AudioNode),
        (s.default.Effect.defaults = { wet: 1 }),
        (s.default.Effect.prototype.connectEffect = function (t) {
          return this.effectSend.chain(t, this.effectReturn), this;
        }),
        (s.default.Effect.prototype.dispose = function () {
          return (
            s.default.AudioNode.prototype.dispose.call(this),
            this._dryWet.dispose(),
            (this._dryWet = null),
            this.effectSend.dispose(),
            (this.effectSend = null),
            this.effectReturn.dispose(),
            (this.effectReturn = null),
            this._writable(["wet"]),
            (this.wet = null),
            this
          );
        }),
        (e.default = s.default.Effect);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(2), i(1);
      (s.default.Filter = function () {
        var t = s.default.defaults(
          arguments,
          ["frequency", "type", "rolloff"],
          s.default.Filter
        );
        s.default.AudioNode.call(this),
          this.createInsOuts(1, 1),
          (this._filters = []),
          (this.frequency = new s.default.Signal(
            t.frequency,
            s.default.Type.Frequency
          )),
          (this.detune = new s.default.Signal(0, s.default.Type.Cents)),
          (this.gain = new s.default.Signal({
            value: t.gain,
            convert: !0,
            type: s.default.Type.Decibels,
          })),
          (this.Q = new s.default.Signal(t.Q)),
          (this._type = t.type),
          (this._rolloff = t.rolloff),
          (this.rolloff = t.rolloff),
          this._readOnly(["detune", "frequency", "gain", "Q"]);
      }),
        s.default.extend(s.default.Filter, s.default.AudioNode),
        (s.default.Filter.defaults = {
          type: "lowpass",
          frequency: 350,
          rolloff: -12,
          Q: 1,
          gain: 0,
        }),
        Object.defineProperty(s.default.Filter.prototype, "type", {
          get: function () {
            return this._type;
          },
          set: function (t) {
            if (
              -1 ===
              [
                "lowpass",
                "highpass",
                "bandpass",
                "lowshelf",
                "highshelf",
                "notch",
                "allpass",
                "peaking",
              ].indexOf(t)
            )
              throw new TypeError("Tone.Filter: invalid type " + t);
            this._type = t;
            for (var e = 0; e < this._filters.length; e++)
              this._filters[e].type = t;
          },
        }),
        Object.defineProperty(s.default.Filter.prototype, "rolloff", {
          get: function () {
            return this._rolloff;
          },
          set: function (t) {
            t = parseInt(t, 10);
            var e = [-12, -24, -48, -96].indexOf(t);
            if (-1 === e)
              throw new RangeError(
                "Tone.Filter: rolloff can only be -12, -24, -48 or -96"
              );
            (e += 1), (this._rolloff = t), this.input.disconnect();
            for (var i = 0; i < this._filters.length; i++)
              this._filters[i].disconnect(), (this._filters[i] = null);
            this._filters = new Array(e);
            for (var n = 0; n < e; n++) {
              var o = this.context.createBiquadFilter();
              (o.type = this._type),
                this.frequency.connect(o.frequency),
                this.detune.connect(o.detune),
                this.Q.connect(o.Q),
                this.gain.connect(o.gain),
                (this._filters[n] = o);
            }
            var a = [this.input].concat(this._filters).concat([this.output]);
            s.default.connectSeries.apply(s.default, a);
          },
        }),
        (s.default.Filter.prototype.getFrequencyResponse = function (t) {
          t = s.default.defaultArg(t, 128);
          for (
            var e = new Float32Array(t).map(function () {
                return 1;
              }),
              i = new Float32Array(t),
              n = 0;
            n < t;
            n++
          ) {
            var o = 19980 * Math.pow(n / t, 2) + 20;
            i[n] = o;
          }
          var a = new Float32Array(t),
            r = new Float32Array(t);
          return (
            this._filters.forEach(
              function () {
                var t = this.context.createBiquadFilter();
                (t.type = this._type),
                  (t.Q.value = this.Q.value),
                  (t.frequency.value = this.frequency.value),
                  (t.gain.value = this.gain.value),
                  t.getFrequencyResponse(i, a, r),
                  a.forEach(function (t, i) {
                    e[i] *= t;
                  });
              }.bind(this)
            ),
            e
          );
        }),
        (s.default.Filter.prototype.dispose = function () {
          s.default.AudioNode.prototype.dispose.call(this);
          for (var t = 0; t < this._filters.length; t++)
            this._filters[t].disconnect(), (this._filters[t] = null);
          return (
            (this._filters = null),
            this._writable(["detune", "frequency", "gain", "Q"]),
            this.frequency.dispose(),
            this.Q.dispose(),
            (this.frequency = null),
            (this.Q = null),
            this.detune.dispose(),
            (this.detune = null),
            this.gain.dispose(),
            (this.gain = null),
            this
          );
        }),
        (e.default = s.default.Filter);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(1);
      (s.default.Merge = function (t) {
        (t = s.default.defaultArg(t, 2)),
          s.default.AudioNode.call(this),
          this.createInsOuts(t, 0),
          (this._merger = this.output = this.context.createChannelMerger(t));
        for (var e = 0; e < t; e++)
          (this.input[e] = new s.default.Gain()),
            this.input[e].connect(this._merger, 0, e),
            (this.input[e].channelCount = 1),
            (this.input[e].channelCountMode = "explicit");
        (this.left = this.input[0]), (this.right = this.input[1]);
      }),
        s.default.extend(s.default.Merge, s.default.AudioNode),
        (s.default.Merge.prototype.dispose = function () {
          return (
            this.input.forEach(function (t) {
              t.dispose();
            }),
            s.default.AudioNode.prototype.dispose.call(this),
            (this.left = null),
            (this.right = null),
            this._merger.disconnect(),
            (this._merger = null),
            this
          );
        }),
        (e.default = s.default.Merge);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(35), i(4);
      s.default.supported &&
        (AudioBuffer.prototype.copyToChannel ||
          ((AudioBuffer.prototype.copyToChannel = function (t, e, i) {
            var s = this.getChannelData(e);
            i = i || 0;
            for (var n = 0; n < s.length; n++) s[n + i] = t[n];
          }),
          (AudioBuffer.prototype.copyFromChannel = function (t, e, i) {
            var s = this.getChannelData(e);
            i = i || 0;
            for (var n = 0; n < t.length; n++) t[n] = s[n + i];
          }))),
        (s.default.Buffer = function () {
          var t = s.default.defaults(
            arguments,
            ["url", "onload", "onerror"],
            s.default.Buffer
          );
          s.default.call(this),
            (this._buffer = null),
            (this._reversed = t.reverse),
            (this._xhr = null),
            (this.onload = s.default.noOp),
            t.url instanceof AudioBuffer || t.url instanceof s.default.Buffer
              ? (this.set(t.url), this.loaded || (this.onload = t.onload))
              : s.default.isString(t.url) &&
                this.load(t.url).then(t.onload).catch(t.onerror);
        }),
        s.default.extend(s.default.Buffer),
        (s.default.Buffer.defaults = {
          url: void 0,
          reverse: !1,
          onload: s.default.noOp,
          onerror: s.default.noOp,
        }),
        (s.default.Buffer.prototype.set = function (t) {
          return (
            t instanceof s.default.Buffer
              ? t.loaded
                ? (this._buffer = t.get())
                : (t.onload = function () {
                    this.set(t), this.onload(this);
                  }.bind(this))
              : (this._buffer = t),
            this._reversed && this._reverse(),
            this
          );
        }),
        (s.default.Buffer.prototype.get = function () {
          return this._buffer;
        }),
        (s.default.Buffer.prototype.load = function (t, e, i) {
          return new Promise(
            function (n, o) {
              this._xhr = s.default.Buffer.load(
                t,
                function (t) {
                  (this._xhr = null),
                    this.set(t),
                    n(this),
                    this.onload(this),
                    e && e(this);
                }.bind(this),
                function (t) {
                  (this._xhr = null), o(t), i && i(t);
                }.bind(this)
              );
            }.bind(this)
          );
        }),
        (s.default.Buffer.prototype.dispose = function () {
          return (
            s.default.prototype.dispose.call(this),
            (this._buffer = null),
            this._xhr &&
              (s.default.Buffer._removeFromDownloadQueue(this._xhr),
              this._xhr.abort(),
              (this._xhr = null)),
            this
          );
        }),
        Object.defineProperty(s.default.Buffer.prototype, "loaded", {
          get: function () {
            return this.length > 0;
          },
        }),
        Object.defineProperty(s.default.Buffer.prototype, "duration", {
          get: function () {
            return this._buffer ? this._buffer.duration : 0;
          },
        }),
        Object.defineProperty(s.default.Buffer.prototype, "length", {
          get: function () {
            return this._buffer ? this._buffer.length : 0;
          },
        }),
        Object.defineProperty(s.default.Buffer.prototype, "numberOfChannels", {
          get: function () {
            return this._buffer ? this._buffer.numberOfChannels : 0;
          },
        }),
        (s.default.Buffer.prototype.fromArray = function (t) {
          var e = t[0].length > 0,
            i = e ? t.length : 1,
            s = e ? t[0].length : t.length,
            n = this.context.createBuffer(i, s, this.context.sampleRate);
          e || 1 !== i || (t = [t]);
          for (var o = 0; o < i; o++) n.copyToChannel(t[o], o);
          return (this._buffer = n), this;
        }),
        (s.default.Buffer.prototype.toMono = function (t) {
          if (s.default.isNumber(t)) this.fromArray(this.toArray(t));
          else {
            for (
              var e = new Float32Array(this.length),
                i = this.numberOfChannels,
                n = 0;
              n < i;
              n++
            )
              for (var o = this.toArray(n), a = 0; a < o.length; a++)
                e[a] += o[a];
            (e = e.map(function (t) {
              return t / i;
            })),
              this.fromArray(e);
          }
          return this;
        }),
        (s.default.Buffer.prototype.toArray = function (t) {
          if (s.default.isNumber(t)) return this.getChannelData(t);
          if (1 === this.numberOfChannels) return this.toArray(0);
          for (var e = [], i = 0; i < this.numberOfChannels; i++)
            e[i] = this.getChannelData(i);
          return e;
        }),
        (s.default.Buffer.prototype.getChannelData = function (t) {
          return this._buffer.getChannelData(t);
        }),
        (s.default.Buffer.prototype.slice = function (t, e) {
          e = s.default.defaultArg(e, this.duration);
          for (
            var i = Math.floor(this.context.sampleRate * this.toSeconds(t)),
              n = Math.floor(this.context.sampleRate * this.toSeconds(e)),
              o = [],
              a = 0;
            a < this.numberOfChannels;
            a++
          )
            o[a] = this.toArray(a).slice(i, n);
          return new s.default.Buffer().fromArray(o);
        }),
        (s.default.Buffer.prototype._reverse = function () {
          if (this.loaded)
            for (var t = 0; t < this.numberOfChannels; t++)
              Array.prototype.reverse.call(this.getChannelData(t));
          return this;
        }),
        Object.defineProperty(s.default.Buffer.prototype, "reverse", {
          get: function () {
            return this._reversed;
          },
          set: function (t) {
            this._reversed !== t && ((this._reversed = t), this._reverse());
          },
        }),
        s.default.Emitter.mixin(s.default.Buffer),
        (s.default.Buffer._downloadQueue = []),
        (s.default.Buffer.baseUrl = ""),
        (s.default.Buffer.fromArray = function (t) {
          return new s.default.Buffer().fromArray(t);
        }),
        (s.default.Buffer.fromUrl = function (t) {
          var e = new s.default.Buffer();
          return e.load(t).then(function () {
            return e;
          });
        }),
        (s.default.Buffer._removeFromDownloadQueue = function (t) {
          var e = s.default.Buffer._downloadQueue.indexOf(t);
          -1 !== e && s.default.Buffer._downloadQueue.splice(e, 1);
        }),
        (s.default.Buffer.load = function (t, e, i) {
          e = s.default.defaultArg(e, s.default.noOp);
          var n = t.match(/\[(.+\|?)+\]$/);
          if (n) {
            for (var o = n[1].split("|"), a = o[0], r = 0; r < o.length; r++)
              if (s.default.Buffer.supportsType(o[r])) {
                a = o[r];
                break;
              }
            t = t.replace(n[0], a);
          }
          function l(t) {
            if (
              (s.default.Buffer._removeFromDownloadQueue(d),
              s.default.Buffer.emit("error", t),
              !i)
            )
              throw t;
            i(t);
          }
          function u() {
            for (
              var t = 0, e = 0;
              e < s.default.Buffer._downloadQueue.length;
              e++
            )
              t += s.default.Buffer._downloadQueue[e].progress;
            s.default.Buffer.emit(
              "progress",
              t / s.default.Buffer._downloadQueue.length
            );
          }
          var d = new XMLHttpRequest();
          return (
            d.open("GET", s.default.Buffer.baseUrl + t, !0),
            (d.responseType = "arraybuffer"),
            (d.progress = 0),
            s.default.Buffer._downloadQueue.push(d),
            d.addEventListener("load", function () {
              200 === d.status
                ? s.default.context
                    .decodeAudioData(d.response)
                    .then(function (t) {
                      (d.progress = 1),
                        u(),
                        e(t),
                        s.default.Buffer._removeFromDownloadQueue(d),
                        0 === s.default.Buffer._downloadQueue.length &&
                          s.default.Buffer.emit("load");
                    })
                    .catch(function () {
                      s.default.Buffer._removeFromDownloadQueue(d),
                        l("Tone.Buffer: could not decode audio data: " + t);
                    })
                : l("Tone.Buffer: could not locate file: " + t);
            }),
            d.addEventListener("error", l),
            d.addEventListener("progress", function (t) {
              t.lengthComputable &&
                ((d.progress = (t.loaded / t.total) * 0.95), u());
            }),
            d.send(),
            d
          );
        }),
        (s.default.Buffer.cancelDownloads = function () {
          return (
            s.default.Buffer._downloadQueue.slice().forEach(function (t) {
              s.default.Buffer._removeFromDownloadQueue(t), t.abort();
            }),
            s.default.Buffer
          );
        }),
        (s.default.Buffer.supportsType = function (t) {
          var e = t.split(".");
          return (
            (e = e[e.length - 1]),
            "" !== document.createElement("audio").canPlayType("audio/" + e)
          );
        }),
        (s.default.loaded = function () {
          var t, e;
          function i() {
            s.default.Buffer.off("load", t), s.default.Buffer.off("error", e);
          }
          return new Promise(function (i, n) {
            (t = function () {
              i();
            }),
              (e = function () {
                n();
              }),
              s.default.Buffer.on("load", t),
              s.default.Buffer.on("error", e);
          })
            .then(i)
            .catch(function (t) {
              throw (i(), new Error(t));
            });
        });
      e.default = s.default.Buffer;
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(17), i(26), i(1), i(2), i(22), i(4), i(28);
      (s.default.LFO = function () {
        var t = s.default.defaults(
          arguments,
          ["frequency", "min", "max"],
          s.default.LFO
        );
        s.default.AudioNode.call(this),
          (this._oscillator = new s.default.Oscillator({
            frequency: t.frequency,
            type: t.type,
          })),
          (this.frequency = this._oscillator.frequency),
          (this.amplitude = this._oscillator.volume),
          (this.amplitude.units = s.default.Type.NormalRange),
          (this.amplitude.value = t.amplitude),
          (this._stoppedSignal = new s.default.Signal(
            0,
            s.default.Type.AudioRange
          )),
          (this._zeros = new s.default.Zero()),
          (this._stoppedValue = 0),
          (this._a2g = new s.default.AudioToGain()),
          (this._scaler = this.output = new s.default.Scale(t.min, t.max)),
          (this._units = s.default.Type.Default),
          (this.units = t.units),
          this._oscillator.chain(this._a2g, this._scaler),
          this._zeros.connect(this._a2g),
          this._stoppedSignal.connect(this._a2g),
          this._readOnly(["amplitude", "frequency"]),
          (this.phase = t.phase);
      }),
        s.default.extend(s.default.LFO, s.default.AudioNode),
        (s.default.LFO.defaults = {
          type: "sine",
          min: 0,
          max: 1,
          phase: 0,
          frequency: "4n",
          amplitude: 1,
          units: s.default.Type.Default,
        }),
        (s.default.LFO.prototype.start = function (t) {
          return (
            (t = this.toSeconds(t)),
            this._stoppedSignal.setValueAtTime(0, t),
            this._oscillator.start(t),
            this
          );
        }),
        (s.default.LFO.prototype.stop = function (t) {
          return (
            (t = this.toSeconds(t)),
            this._stoppedSignal.setValueAtTime(this._stoppedValue, t),
            this._oscillator.stop(t),
            this
          );
        }),
        (s.default.LFO.prototype.sync = function () {
          return (
            this._oscillator.sync(), this._oscillator.syncFrequency(), this
          );
        }),
        (s.default.LFO.prototype.unsync = function () {
          return (
            this._oscillator.unsync(), this._oscillator.unsyncFrequency(), this
          );
        }),
        Object.defineProperty(s.default.LFO.prototype, "min", {
          get: function () {
            return this._toUnits(this._scaler.min);
          },
          set: function (t) {
            (t = this._fromUnits(t)), (this._scaler.min = t);
          },
        }),
        Object.defineProperty(s.default.LFO.prototype, "max", {
          get: function () {
            return this._toUnits(this._scaler.max);
          },
          set: function (t) {
            (t = this._fromUnits(t)), (this._scaler.max = t);
          },
        }),
        Object.defineProperty(s.default.LFO.prototype, "type", {
          get: function () {
            return this._oscillator.type;
          },
          set: function (t) {
            (this._oscillator.type = t),
              (this._stoppedValue = this._oscillator._getInitialValue()),
              (this._stoppedSignal.value = this._stoppedValue);
          },
        }),
        Object.defineProperty(s.default.LFO.prototype, "phase", {
          get: function () {
            return this._oscillator.phase;
          },
          set: function (t) {
            (this._oscillator.phase = t),
              (this._stoppedValue = this._oscillator._getInitialValue()),
              (this._stoppedSignal.value = this._stoppedValue);
          },
        }),
        Object.defineProperty(s.default.LFO.prototype, "units", {
          get: function () {
            return this._units;
          },
          set: function (t) {
            var e = this.min,
              i = this.max;
            (this._units = t), (this.min = e), (this.max = i);
          },
        }),
        Object.defineProperty(s.default.LFO.prototype, "state", {
          get: function () {
            return this._oscillator.state;
          },
        }),
        (s.default.LFO.prototype.connect = function (t) {
          return (
            (t.constructor !== s.default.Signal &&
              t.constructor !== s.default.Param) ||
              ((this.convert = t.convert), (this.units = t.units)),
            s.default.SignalBase.prototype.connect.apply(this, arguments),
            this
          );
        }),
        (s.default.LFO.prototype._fromUnits =
          s.default.Param.prototype._fromUnits),
        (s.default.LFO.prototype._toUnits = s.default.Param.prototype._toUnits),
        (s.default.LFO.prototype.dispose = function () {
          return (
            s.default.AudioNode.prototype.dispose.call(this),
            this._writable(["amplitude", "frequency"]),
            this._oscillator.dispose(),
            (this._oscillator = null),
            this._stoppedSignal.dispose(),
            (this._stoppedSignal = null),
            this._zeros.dispose(),
            (this._zeros = null),
            this._scaler.dispose(),
            (this._scaler = null),
            this._a2g.dispose(),
            (this._a2g = null),
            (this.frequency = null),
            (this.amplitude = null),
            this
          );
        }),
        (e.default = s.default.LFO);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(29), i(90), i(2), i(3);
      (s.default.Subtract = function (t) {
        s.default.Signal.call(this),
          this.createInsOuts(2, 0),
          (this._sum = this.input[0] = this.output = new s.default.Gain()),
          (this._neg = new s.default.Negate()),
          (this._param = this.input[1] = new s.default.Signal(t)),
          this._param.chain(this._neg, this._sum);
      }),
        s.default.extend(s.default.Subtract, s.default.Signal),
        (s.default.Subtract.prototype.dispose = function () {
          return (
            s.default.Signal.prototype.dispose.call(this),
            this._neg.dispose(),
            (this._neg = null),
            this._sum.disconnect(),
            (this._sum = null),
            this
          );
        }),
        (e.default = s.default.Subtract);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(4), i(1), i(24);
      (s.default.Param = function () {
        var t = s.default.defaults(
          arguments,
          ["param", "units", "convert"],
          s.default.Param
        );
        s.default.AudioNode.call(this, t),
          (this._param = this.input = t.param),
          (this.units = t.units),
          (this.convert = t.convert),
          (this.overridden = !1),
          (this._events = new s.default.Timeline(1e3)),
          s.default.isDefined(t.value) &&
            this._param &&
            this.setValueAtTime(t.value, 0);
      }),
        s.default.extend(s.default.Param, s.default.AudioNode),
        (s.default.Param.defaults = {
          units: s.default.Type.Default,
          convert: !0,
          param: void 0,
        }),
        Object.defineProperty(s.default.Param.prototype, "value", {
          get: function () {
            var t = this.now();
            return this._toUnits(this.getValueAtTime(t));
          },
          set: function (t) {
            (this._initialValue = this._fromUnits(t)),
              this.cancelScheduledValues(this.now()),
              this.setValueAtTime(t, this.now());
          },
        }),
        Object.defineProperty(s.default.Param.prototype, "minValue", {
          get: function () {
            return this.units === s.default.Type.Time ||
              this.units === s.default.Type.Frequency ||
              this.units === s.default.Type.NormalRange ||
              this.units === s.default.Type.Positive ||
              this.units === s.default.Type.BPM
              ? 0
              : this.units === s.default.Type.AudioRange
              ? -1
              : this.units === s.default.Type.Decibels
              ? -1 / 0
              : this._param.minValue;
          },
        }),
        Object.defineProperty(s.default.Param.prototype, "maxValue", {
          get: function () {
            return this.units === s.default.Type.NormalRange ||
              this.units === s.default.Type.AudioRange
              ? 1
              : this._param.maxValue;
          },
        }),
        (s.default.Param.prototype._fromUnits = function (t) {
          if (
            (!this.convert && !s.default.isUndef(this.convert)) ||
            this.overridden
          )
            return t;
          switch (this.units) {
            case s.default.Type.Time:
              return this.toSeconds(t);
            case s.default.Type.Frequency:
              return this.toFrequency(t);
            case s.default.Type.Decibels:
              return s.default.dbToGain(t);
            case s.default.Type.NormalRange:
              return Math.min(Math.max(t, 0), 1);
            case s.default.Type.AudioRange:
              return Math.min(Math.max(t, -1), 1);
            case s.default.Type.Positive:
              return Math.max(t, 0);
            default:
              return t;
          }
        }),
        (s.default.Param.prototype._toUnits = function (t) {
          if (!this.convert && !s.default.isUndef(this.convert)) return t;
          switch (this.units) {
            case s.default.Type.Decibels:
              return s.default.gainToDb(t);
            default:
              return t;
          }
        }),
        (s.default.Param.prototype._minOutput = 1e-5),
        (s.default.Param.AutomationType = {
          Linear: "linearRampToValueAtTime",
          Exponential: "exponentialRampToValueAtTime",
          Target: "setTargetAtTime",
          SetValue: "setValueAtTime",
          Cancel: "cancelScheduledValues",
        }),
        (s.default.Param.prototype.setValueAtTime = function (t, e) {
          return (
            (e = this.toSeconds(e)),
            (t = this._fromUnits(t)),
            this._events.add({
              type: s.default.Param.AutomationType.SetValue,
              value: t,
              time: e,
            }),
            this.log(s.default.Param.AutomationType.SetValue, t, e),
            this._param.setValueAtTime(t, e),
            this
          );
        }),
        (s.default.Param.prototype.getValueAtTime = function (t) {
          t = this.toSeconds(t);
          var e = this._events.getAfter(t),
            i = this._events.get(t),
            n = s.default.defaultArg(
              this._initialValue,
              this._param.defaultValue
            ),
            o = n;
          if (null === i) o = n;
          else if (i.type === s.default.Param.AutomationType.Target) {
            var a,
              r = this._events.getBefore(i.time);
            (a = null === r ? n : r.value),
              (o = this._exponentialApproach(
                i.time,
                a,
                i.value,
                i.constant,
                t
              ));
          } else
            o =
              null === e
                ? i.value
                : e.type === s.default.Param.AutomationType.Linear
                ? this._linearInterpolate(i.time, i.value, e.time, e.value, t)
                : e.type === s.default.Param.AutomationType.Exponential
                ? this._exponentialInterpolate(
                    i.time,
                    i.value,
                    e.time,
                    e.value,
                    t
                  )
                : i.value;
          return o;
        }),
        (s.default.Param.prototype.setRampPoint = function (t) {
          t = this.toSeconds(t);
          var e = this.getValueAtTime(t);
          return (
            this.cancelAndHoldAtTime(t),
            0 === e && (e = this._minOutput),
            this.setValueAtTime(this._toUnits(e), t),
            this
          );
        }),
        (s.default.Param.prototype.linearRampToValueAtTime = function (t, e) {
          return (
            (t = this._fromUnits(t)),
            (e = this.toSeconds(e)),
            this._events.add({
              type: s.default.Param.AutomationType.Linear,
              value: t,
              time: e,
            }),
            this.log(s.default.Param.AutomationType.Linear, t, e),
            this._param.linearRampToValueAtTime(t, e),
            this
          );
        }),
        (s.default.Param.prototype.exponentialRampToValueAtTime = function (
          t,
          e
        ) {
          return (
            (t = this._fromUnits(t)),
            (t = Math.max(this._minOutput, t)),
            (e = this.toSeconds(e)),
            this._events.add({
              type: s.default.Param.AutomationType.Exponential,
              time: e,
              value: t,
            }),
            this.log(s.default.Param.AutomationType.Exponential, t, e),
            this._param.exponentialRampToValueAtTime(t, e),
            this
          );
        }),
        (s.default.Param.prototype.exponentialRampTo = function (t, e, i) {
          return (
            (i = this.toSeconds(i)),
            this.setRampPoint(i),
            this.exponentialRampToValueAtTime(t, i + this.toSeconds(e)),
            this
          );
        }),
        (s.default.Param.prototype.linearRampTo = function (t, e, i) {
          return (
            (i = this.toSeconds(i)),
            this.setRampPoint(i),
            this.linearRampToValueAtTime(t, i + this.toSeconds(e)),
            this
          );
        }),
        (s.default.Param.prototype.targetRampTo = function (t, e, i) {
          return (
            (i = this.toSeconds(i)),
            this.setRampPoint(i),
            this.exponentialApproachValueAtTime(t, i, e),
            this
          );
        }),
        (s.default.Param.prototype.exponentialApproachValueAtTime = function (
          t,
          e,
          i
        ) {
          var s = Math.log(this.toSeconds(i) + 1) / Math.log(200);
          return (
            (e = this.toSeconds(e)),
            this.setTargetAtTime(t, e, s),
            this.cancelAndHoldAtTime(e + 0.9 * i),
            this.linearRampToValueAtTime(t, e + i),
            this
          );
        }),
        (s.default.Param.prototype.setTargetAtTime = function (t, e, i) {
          if (((t = this._fromUnits(t)), i <= 0))
            throw new Error("timeConstant must be greater than 0");
          return (
            (e = this.toSeconds(e)),
            this._events.add({
              type: s.default.Param.AutomationType.Target,
              value: t,
              time: e,
              constant: i,
            }),
            this.log(s.default.Param.AutomationType.Target, t, e, i),
            this._param.setTargetAtTime(t, e, i),
            this
          );
        }),
        (s.default.Param.prototype.setValueCurveAtTime = function (t, e, i, n) {
          (n = s.default.defaultArg(n, 1)),
            (i = this.toSeconds(i)),
            (e = this.toSeconds(e)),
            this.setValueAtTime(t[0] * n, e);
          for (var o = i / (t.length - 1), a = 1; a < t.length; a++)
            this.linearRampToValueAtTime(t[a] * n, e + a * o);
          return this;
        }),
        (s.default.Param.prototype.cancelScheduledValues = function (t) {
          return (
            (t = this.toSeconds(t)),
            this._events.cancel(t),
            this._param.cancelScheduledValues(t),
            this.log(s.default.Param.AutomationType.Cancel, t),
            this
          );
        }),
        (s.default.Param.prototype.cancelAndHoldAtTime = function (t) {
          t = this.toSeconds(t);
          var e = this.getValueAtTime(t);
          this.log("cancelAndHoldAtTime", t, "value=" + e),
            this._param.cancelScheduledValues(t);
          var i = this._events.get(t),
            n = this._events.getAfter(t);
          return (
            i && i.time === t
              ? n
                ? this._events.cancel(n.time)
                : this._events.cancel(t + this.sampleTime)
              : n &&
                (this._events.cancel(n.time),
                n.type === s.default.Param.AutomationType.Linear
                  ? this.linearRampToValueAtTime(e, t)
                  : n.type === s.default.Param.AutomationType.Exponential &&
                    this.exponentialRampToValueAtTime(e, t)),
            this._events.add({
              type: s.default.Param.AutomationType.SetValue,
              value: e,
              time: t,
            }),
            this._param.setValueAtTime(e, t),
            this
          );
        }),
        (s.default.Param.prototype.rampTo = function (t, e, i) {
          return (
            (e = s.default.defaultArg(e, 0.1)),
            this.units === s.default.Type.Frequency ||
            this.units === s.default.Type.BPM ||
            this.units === s.default.Type.Decibels
              ? this.exponentialRampTo(t, e, i)
              : this.linearRampTo(t, e, i),
            this
          );
        }),
        (s.default.Param.prototype._exponentialApproach = function (
          t,
          e,
          i,
          s,
          n
        ) {
          return i + (e - i) * Math.exp(-(n - t) / s);
        }),
        (s.default.Param.prototype._linearInterpolate = function (
          t,
          e,
          i,
          s,
          n
        ) {
          return e + ((n - t) / (i - t)) * (s - e);
        }),
        (s.default.Param.prototype._exponentialInterpolate = function (
          t,
          e,
          i,
          s,
          n
        ) {
          return e * Math.pow(s / e, (n - t) / (i - t));
        }),
        (s.default.Param.prototype.dispose = function () {
          return (
            s.default.AudioNode.prototype.dispose.call(this),
            (this._param = null),
            (this._events = null),
            this
          );
        }),
        (e.default = s.default.Param);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(8), i(19), i(10), i(23);
      (s.default.StereoEffect = function () {
        s.default.AudioNode.call(this);
        var t = s.default.defaults(arguments, ["wet"], s.default.Effect);
        this.createInsOuts(1, 1),
          (this._dryWet = new s.default.CrossFade(t.wet)),
          (this.wet = this._dryWet.fade),
          (this._split = new s.default.Split()),
          (this.effectSendL = this._split.left),
          (this.effectSendR = this._split.right),
          (this._merge = new s.default.Merge()),
          (this.effectReturnL = this._merge.left),
          (this.effectReturnR = this._merge.right),
          s.default.connect(this.input, this._split),
          s.default.connect(this.input, this._dryWet, 0, 0),
          this._merge.connect(this._dryWet, 0, 1),
          this._dryWet.connect(this.output),
          this._readOnly(["wet"]);
      }),
        s.default.extend(s.default.StereoEffect, s.default.Effect),
        (s.default.StereoEffect.prototype.dispose = function () {
          return (
            s.default.AudioNode.prototype.dispose.call(this),
            this._dryWet.dispose(),
            (this._dryWet = null),
            this._split.dispose(),
            (this._split = null),
            this._merge.dispose(),
            (this._merge = null),
            (this.effectSendL = null),
            (this.effectSendR = null),
            (this.effectReturnL = null),
            (this.effectReturnR = null),
            this._writable(["wet"]),
            (this.wet = null),
            this
          );
        }),
        (e.default = s.default.StereoEffect);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(83), i(4), i(24), i(35), i(3), i(81), i(80), i(56);
      (s.default.Transport = function () {
        s.default.Emitter.call(this),
          s.default.getContext(
            function () {
              (this.loop = !1),
                (this._loopStart = 0),
                (this._loopEnd = 0),
                (this._ppq = n.defaults.PPQ),
                (this._clock = new s.default.Clock({
                  callback: this._processTick.bind(this),
                  frequency: 0,
                })),
                this._bindClockEvents(),
                (this.bpm = this._clock.frequency),
                (this.bpm._toUnits = this._toUnits.bind(this)),
                (this.bpm._fromUnits = this._fromUnits.bind(this)),
                (this.bpm.units = s.default.Type.BPM),
                (this.bpm.value = n.defaults.bpm),
                this._readOnly("bpm"),
                (this._timeSignature = n.defaults.timeSignature),
                (this._scheduledEvents = {}),
                (this._timeline = new s.default.Timeline()),
                (this._repeatedEvents = new s.default.IntervalTimeline()),
                (this._syncedSignals = []),
                (this._swingTicks = n.defaults.PPQ / 2),
                (this._swingAmount = 0),
                (this.context.transport = this);
            }.bind(this)
          );
      }),
        s.default.extend(s.default.Transport, s.default.Emitter),
        (s.default.Transport.defaults = {
          bpm: 120,
          swing: 0,
          swingSubdivision: "8n",
          timeSignature: 4,
          loopStart: 0,
          loopEnd: "4m",
          PPQ: 192,
        }),
        (s.default.Transport.prototype.isTransport = !0),
        (s.default.Transport.prototype._processTick = function (t, e) {
          if (
            this._swingAmount > 0 &&
            e % this._ppq != 0 &&
            e % (2 * this._swingTicks) != 0
          ) {
            var i = (e % (2 * this._swingTicks)) / (2 * this._swingTicks),
              n = Math.sin(i * Math.PI) * this._swingAmount;
            t += s.default.Ticks((2 * this._swingTicks) / 3).toSeconds() * n;
          }
          this.loop &&
            e >= this._loopEnd &&
            (this.emit("loopEnd", t),
            this._clock.setTicksAtTime(this._loopStart, t),
            (e = this._loopStart),
            this.emit("loopStart", t, this._clock.getSecondsAtTime(t)),
            this.emit("loop", t)),
            this._timeline.forEachAtTime(e, function (e) {
              e.invoke(t);
            });
        }),
        (s.default.Transport.prototype.schedule = function (t, e) {
          var i = new s.default.TransportEvent(this, {
            time: s.default.TransportTime(e),
            callback: t,
          });
          return this._addEvent(i, this._timeline);
        }),
        (s.default.Transport.prototype.scheduleRepeat = function (t, e, i, n) {
          var o = new s.default.TransportRepeatEvent(this, {
            callback: t,
            interval: s.default.Time(e),
            time: s.default.TransportTime(i),
            duration: s.default.Time(s.default.defaultArg(n, 1 / 0)),
          });
          return this._addEvent(o, this._repeatedEvents);
        }),
        (s.default.Transport.prototype.scheduleOnce = function (t, e) {
          var i = new s.default.TransportEvent(this, {
            time: s.default.TransportTime(e),
            callback: t,
            once: !0,
          });
          return this._addEvent(i, this._timeline);
        }),
        (s.default.Transport.prototype.clear = function (t) {
          if (this._scheduledEvents.hasOwnProperty(t)) {
            var e = this._scheduledEvents[t.toString()];
            e.timeline.remove(e.event),
              e.event.dispose(),
              delete this._scheduledEvents[t.toString()];
          }
          return this;
        }),
        (s.default.Transport.prototype._addEvent = function (t, e) {
          return (
            (this._scheduledEvents[t.id.toString()] = {
              event: t,
              timeline: e,
            }),
            e.add(t),
            t.id
          );
        }),
        (s.default.Transport.prototype.cancel = function (t) {
          return (
            (t = s.default.defaultArg(t, 0)),
            (t = this.toTicks(t)),
            this._timeline.forEachFrom(
              t,
              function (t) {
                this.clear(t.id);
              }.bind(this)
            ),
            this._repeatedEvents.forEachFrom(
              t,
              function (t) {
                this.clear(t.id);
              }.bind(this)
            ),
            this
          );
        }),
        (s.default.Transport.prototype._bindClockEvents = function () {
          this._clock.on(
            "start",
            function (t, e) {
              (e = s.default.Ticks(e).toSeconds()), this.emit("start", t, e);
            }.bind(this)
          ),
            this._clock.on(
              "stop",
              function (t) {
                this.emit("stop", t);
              }.bind(this)
            ),
            this._clock.on(
              "pause",
              function (t) {
                this.emit("pause", t);
              }.bind(this)
            );
        }),
        Object.defineProperty(s.default.Transport.prototype, "state", {
          get: function () {
            return this._clock.getStateAtTime(this.now());
          },
        }),
        (s.default.Transport.prototype.start = function (t, e) {
          return (
            s.default.isDefined(e) && (e = this.toTicks(e)),
            this._clock.start(t, e),
            this
          );
        }),
        (s.default.Transport.prototype.stop = function (t) {
          return this._clock.stop(t), this;
        }),
        (s.default.Transport.prototype.pause = function (t) {
          return this._clock.pause(t), this;
        }),
        (s.default.Transport.prototype.toggle = function (t) {
          return (
            (t = this.toSeconds(t)),
            this._clock.getStateAtTime(t) !== s.default.State.Started
              ? this.start(t)
              : this.stop(t),
            this
          );
        }),
        Object.defineProperty(s.default.Transport.prototype, "timeSignature", {
          get: function () {
            return this._timeSignature;
          },
          set: function (t) {
            s.default.isArray(t) && (t = (t[0] / t[1]) * 4),
              (this._timeSignature = t);
          },
        }),
        Object.defineProperty(s.default.Transport.prototype, "loopStart", {
          get: function () {
            return s.default.Ticks(this._loopStart).toSeconds();
          },
          set: function (t) {
            this._loopStart = this.toTicks(t);
          },
        }),
        Object.defineProperty(s.default.Transport.prototype, "loopEnd", {
          get: function () {
            return s.default.Ticks(this._loopEnd).toSeconds();
          },
          set: function (t) {
            this._loopEnd = this.toTicks(t);
          },
        }),
        (s.default.Transport.prototype.setLoopPoints = function (t, e) {
          return (this.loopStart = t), (this.loopEnd = e), this;
        }),
        Object.defineProperty(s.default.Transport.prototype, "swing", {
          get: function () {
            return this._swingAmount;
          },
          set: function (t) {
            this._swingAmount = t;
          },
        }),
        Object.defineProperty(
          s.default.Transport.prototype,
          "swingSubdivision",
          {
            get: function () {
              return s.default.Ticks(this._swingTicks).toNotation();
            },
            set: function (t) {
              this._swingTicks = this.toTicks(t);
            },
          }
        ),
        Object.defineProperty(s.default.Transport.prototype, "position", {
          get: function () {
            var t = this.now(),
              e = this._clock.getTicksAtTime(t);
            return s.default.Ticks(e).toBarsBeatsSixteenths();
          },
          set: function (t) {
            var e = this.toTicks(t);
            this.ticks = e;
          },
        }),
        Object.defineProperty(s.default.Transport.prototype, "seconds", {
          get: function () {
            return this._clock.seconds;
          },
          set: function (t) {
            var e = this.now(),
              i = this.bpm.timeToTicks(t, e);
            this.ticks = i;
          },
        }),
        Object.defineProperty(s.default.Transport.prototype, "progress", {
          get: function () {
            if (this.loop) {
              var t = this.now();
              return (
                (this._clock.getTicksAtTime(t) - this._loopStart) /
                (this._loopEnd - this._loopStart)
              );
            }
            return 0;
          },
        }),
        Object.defineProperty(s.default.Transport.prototype, "ticks", {
          get: function () {
            return this._clock.ticks;
          },
          set: function (t) {
            if (this._clock.ticks !== t) {
              var e = this.now();
              this.state === s.default.State.Started
                ? (this.emit("stop", e),
                  this._clock.setTicksAtTime(t, e),
                  this.emit("start", e, this.seconds))
                : this._clock.setTicksAtTime(t, e);
            }
          },
        }),
        (s.default.Transport.prototype.getTicksAtTime = function (t) {
          return Math.round(this._clock.getTicksAtTime(t));
        }),
        (s.default.Transport.prototype.getSecondsAtTime = function (t) {
          return this._clock.getSecondsAtTime(t);
        }),
        Object.defineProperty(s.default.Transport.prototype, "PPQ", {
          get: function () {
            return this._ppq;
          },
          set: function (t) {
            var e = this.bpm.value;
            (this._ppq = t), (this.bpm.value = e);
          },
        }),
        (s.default.Transport.prototype._fromUnits = function (t) {
          return 1 / (60 / t / this.PPQ);
        }),
        (s.default.Transport.prototype._toUnits = function (t) {
          return (t / this.PPQ) * 60;
        }),
        (s.default.Transport.prototype.nextSubdivision = function (t) {
          if (((t = this.toTicks(t)), this.state !== s.default.State.Started))
            return 0;
          var e = this.now(),
            i = t - (this.getTicksAtTime(e) % t);
          return this._clock.nextTickTime(i, e);
        }),
        (s.default.Transport.prototype.syncSignal = function (t, e) {
          if (!e) {
            var i = this.now();
            e =
              0 !== t.getValueAtTime(i)
                ? t.getValueAtTime(i) / this.bpm.getValueAtTime(i)
                : 0;
          }
          var n = new s.default.Gain(e);
          return (
            this.bpm.chain(n, t._param),
            this._syncedSignals.push({ ratio: n, signal: t, initial: t.value }),
            (t.value = 0),
            this
          );
        }),
        (s.default.Transport.prototype.unsyncSignal = function (t) {
          for (var e = this._syncedSignals.length - 1; e >= 0; e--) {
            var i = this._syncedSignals[e];
            i.signal === t &&
              (i.ratio.dispose(),
              (i.signal.value = i.initial),
              this._syncedSignals.splice(e, 1));
          }
          return this;
        }),
        (s.default.Transport.prototype.dispose = function () {
          return (
            s.default.Emitter.prototype.dispose.call(this),
            this._clock.dispose(),
            (this._clock = null),
            this._writable("bpm"),
            (this.bpm = null),
            this._timeline.dispose(),
            (this._timeline = null),
            this._repeatedEvents.dispose(),
            (this._repeatedEvents = null),
            this
          );
        });
      var n = s.default.Transport;
      (s.default.Transport = new n()),
        s.default.Context.on("init", function (t) {
          t.transport && t.transport.isTransport
            ? (s.default.Transport = t.transport)
            : (s.default.Transport = new n());
        }),
        s.default.Context.on("close", function (t) {
          t.transport && t.transport.isTransport && t.transport.dispose();
        }),
        (e.default = s.default.Transport);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(2), i(6), i(16), i(64);
      (s.default.Oscillator = function () {
        var t = s.default.defaults(
          arguments,
          ["frequency", "type"],
          s.default.Oscillator
        );
        s.default.Source.call(this, t),
          (this._oscillator = null),
          (this.frequency = new s.default.Signal(
            t.frequency,
            s.default.Type.Frequency
          )),
          (this.detune = new s.default.Signal(t.detune, s.default.Type.Cents)),
          (this._wave = null),
          (this._partials = t.partials),
          (this._partialCount = t.partialCount),
          (this._phase = t.phase),
          (this._type = t.type),
          t.partialCount &&
            t.type !== s.default.Oscillator.Type.Custom &&
            (this._type = this.baseType + t.partialCount.toString()),
          (this.phase = this._phase),
          this._readOnly(["frequency", "detune"]);
      }),
        s.default.extend(s.default.Oscillator, s.default.Source),
        (s.default.Oscillator.defaults = {
          type: "sine",
          frequency: 440,
          detune: 0,
          phase: 0,
          partials: [],
          partialCount: 0,
        }),
        (s.default.Oscillator.Type = {
          Sine: "sine",
          Triangle: "triangle",
          Sawtooth: "sawtooth",
          Square: "square",
          Custom: "custom",
        }),
        (s.default.Oscillator.prototype._start = function (t) {
          this.log("start", t);
          var e = new s.default.OscillatorNode();
          (this._oscillator = e),
            this._wave
              ? this._oscillator.setPeriodicWave(this._wave)
              : (this._oscillator.type = this._type),
            this._oscillator.connect(this.output),
            this.frequency.connect(this._oscillator.frequency),
            this.detune.connect(this._oscillator.detune),
            (t = this.toSeconds(t)),
            this._oscillator.start(t);
        }),
        (s.default.Oscillator.prototype._stop = function (t) {
          return (
            this.log("stop", t),
            this._oscillator &&
              ((t = this.toSeconds(t)), this._oscillator.stop(t)),
            this
          );
        }),
        (s.default.Oscillator.prototype.restart = function (t) {
          return (
            this._oscillator && this._oscillator.cancelStop(),
            this._state.cancel(this.toSeconds(t)),
            this
          );
        }),
        (s.default.Oscillator.prototype.syncFrequency = function () {
          return s.default.Transport.syncSignal(this.frequency), this;
        }),
        (s.default.Oscillator.prototype.unsyncFrequency = function () {
          return s.default.Transport.unsyncSignal(this.frequency), this;
        }),
        Object.defineProperty(s.default.Oscillator.prototype, "type", {
          get: function () {
            return this._type;
          },
          set: function (t) {
            var e = [
              s.default.Oscillator.Type.Sine,
              s.default.Oscillator.Type.Square,
              s.default.Oscillator.Type.Triangle,
              s.default.Oscillator.Type.Sawtooth,
            ].includes(t);
            if (0 === this._phase && e)
              (this._wave = null),
                (this._partialCount = 0),
                null !== this._oscillator && (this._oscillator.type = t);
            else {
              var i = this._getRealImaginary(t, this._phase),
                n = this.context.createPeriodicWave(i[0], i[1]);
              (this._wave = n),
                null !== this._oscillator &&
                  this._oscillator.setPeriodicWave(this._wave);
            }
            this._type = t;
          },
        }),
        Object.defineProperty(s.default.Oscillator.prototype, "baseType", {
          get: function () {
            return this._type.replace(this.partialCount, "");
          },
          set: function (t) {
            this.partialCount &&
            this._type !== s.default.Oscillator.Type.Custom &&
            t !== s.default.Oscillator.Type.Custom
              ? (this.type = t + this.partialCount)
              : (this.type = t);
          },
        }),
        Object.defineProperty(s.default.Oscillator.prototype, "partialCount", {
          get: function () {
            return this._partialCount;
          },
          set: function (t) {
            var e = this._type,
              i = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);
            i && (e = i[1]),
              this._type !== s.default.Oscillator.Type.Custom &&
                (this.type = 0 === t ? e : e + t.toString());
          },
        }),
        (s.default.Oscillator.prototype.get = function () {
          var t = s.default.prototype.get.apply(this, arguments);
          return (
            t.type !== s.default.Oscillator.Type.Custom && delete t.partials, t
          );
        }),
        (s.default.Oscillator.prototype._getRealImaginary = function (t, e) {
          var i = 2048,
            n = new Float32Array(i),
            o = new Float32Array(i),
            a = 1;
          if (t === s.default.Oscillator.Type.Custom)
            (a = this._partials.length + 1),
              (this._partialCount = this._partials.length),
              (i = a);
          else {
            var r = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(t);
            r
              ? ((a = parseInt(r[2]) + 1),
                (this._partialCount = parseInt(r[2])),
                (t = r[1]),
                (i = a = Math.max(a, 2)))
              : (this._partialCount = 0),
              (this._partials = []);
          }
          for (var l = 1; l < i; ++l) {
            var u,
              d = 2 / (l * Math.PI);
            switch (t) {
              case s.default.Oscillator.Type.Sine:
                (u = l <= a ? 1 : 0), (this._partials[l - 1] = u);
                break;
              case s.default.Oscillator.Type.Square:
                (u = 1 & l ? 2 * d : 0), (this._partials[l - 1] = u);
                break;
              case s.default.Oscillator.Type.Sawtooth:
                (u = d * (1 & l ? 1 : -1)), (this._partials[l - 1] = u);
                break;
              case s.default.Oscillator.Type.Triangle:
                (u = 1 & l ? d * d * 2 * (((l - 1) >> 1) & 1 ? -1 : 1) : 0),
                  (this._partials[l - 1] = u);
                break;
              case s.default.Oscillator.Type.Custom:
                u = this._partials[l - 1];
                break;
              default:
                throw new TypeError("Tone.Oscillator: invalid type: " + t);
            }
            0 !== u
              ? ((n[l] = -u * Math.sin(e * l)), (o[l] = u * Math.cos(e * l)))
              : ((n[l] = 0), (o[l] = 0));
          }
          return [n, o];
        }),
        (s.default.Oscillator.prototype._inverseFFT = function (t, e, i) {
          for (var s = 0, n = t.length, o = 0; o < n; o++)
            s += t[o] * Math.cos(o * i) + e[o] * Math.sin(o * i);
          return s;
        }),
        (s.default.Oscillator.prototype._getInitialValue = function () {
          for (
            var t = this._getRealImaginary(this._type, 0),
              e = t[0],
              i = t[1],
              s = 0,
              n = 2 * Math.PI,
              o = 0;
            o < 8;
            o++
          )
            s = Math.max(this._inverseFFT(e, i, (o / 8) * n), s);
          return -this._inverseFFT(e, i, this._phase) / s;
        }),
        Object.defineProperty(s.default.Oscillator.prototype, "partials", {
          get: function () {
            return this._partials;
          },
          set: function (t) {
            (this._partials = t),
              (this.type = s.default.Oscillator.Type.Custom);
          },
        }),
        Object.defineProperty(s.default.Oscillator.prototype, "phase", {
          get: function () {
            return this._phase * (180 / Math.PI);
          },
          set: function (t) {
            (this._phase = (t * Math.PI) / 180), (this.type = this._type);
          },
        }),
        (s.default.Oscillator.prototype.dispose = function () {
          return (
            s.default.Source.prototype.dispose.call(this),
            null !== this._oscillator &&
              (this._oscillator.dispose(), (this._oscillator = null)),
            (this._wave = null),
            this._writable(["frequency", "detune"]),
            this.frequency.dispose(),
            (this.frequency = null),
            this.detune.dispose(),
            (this.detune = null),
            (this._partials = null),
            this
          );
        }),
        (e.default = s.default.Oscillator);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(14), i(1);
      (s.default.Delay = function () {
        var t = s.default.defaults(
          arguments,
          ["delayTime", "maxDelay"],
          s.default.Delay
        );
        s.default.AudioNode.call(this, t),
          (this._maxDelay = Math.max(
            this.toSeconds(t.maxDelay),
            this.toSeconds(t.delayTime)
          )),
          (this._delayNode = this.input = this.output = this.context.createDelay(
            this._maxDelay
          )),
          (this.delayTime = new s.default.Param({
            param: this._delayNode.delayTime,
            units: s.default.Type.Time,
            value: t.delayTime,
          })),
          this._readOnly("delayTime");
      }),
        s.default.extend(s.default.Delay, s.default.AudioNode),
        (s.default.Delay.defaults = { maxDelay: 1, delayTime: 0 }),
        Object.defineProperty(s.default.Delay.prototype, "maxDelay", {
          get: function () {
            return this._maxDelay;
          },
        }),
        (s.default.Delay.prototype.dispose = function () {
          return (
            s.default.AudioNode.prototype.dispose.call(this),
            this._delayNode.disconnect(),
            (this._delayNode = null),
            this._writable("delayTime"),
            (this.delayTime = null),
            this
          );
        }),
        (e.default = s.default.Delay);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(3), i(1);
      (s.default.Split = function (t) {
        (t = s.default.defaultArg(t, 2)),
          s.default.AudioNode.call(this),
          this.createInsOuts(0, t),
          (this._splitter = this.input = this.context.createChannelSplitter(t));
        for (var e = 0; e < t; e++)
          (this.output[e] = new s.default.Gain()),
            s.default.connect(this._splitter, this.output[e], e, 0),
            (this.output[e].channelCount = 1),
            (this.output[e].channelCountMode = "explicit");
        (this.left = this.output[0]), (this.right = this.output[1]);
      }),
        s.default.extend(s.default.Split, s.default.AudioNode),
        (s.default.Split.prototype.dispose = function () {
          return (
            this.output.forEach(function (t) {
              t.dispose();
            }),
            s.default.AudioNode.prototype.dispose.call(this),
            this._splitter.disconnect(),
            (this.left = null),
            (this.right = null),
            (this._splitter = null),
            this
          );
        }),
        (e.default = s.default.Split);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0),
        n =
          (i(35),
          i(24),
          i(44),
          [
            "baseLatency",
            "destination",
            "currentTime",
            "sampleRate",
            "listener",
            "state",
          ]),
        o = [
          "suspend",
          "close",
          "resume",
          "getOutputTimestamp",
          "createMediaElementSource",
          "createMediaStreamSource",
          "createMediaStreamDestination",
          "createBuffer",
          "decodeAudioData",
          "createBufferSource",
          "createConstantSource",
          "createGain",
          "createDelay",
          "createBiquadFilter",
          "createIIRFilter",
          "createWaveShaper",
          "createPanner",
          "createConvolver",
          "createDynamicsCompressor",
          "createAnalyser",
          "createScriptProcessor",
          "createStereoPanner",
          "createOscillator",
          "createPeriodicWave",
          "createChannelSplitter",
          "createChannelMerger",
          "audioWorklet",
        ];
      (s.default.Context = function () {
        s.default.Emitter.call(this);
        var t = s.default.defaults(arguments, ["context"], s.default.Context);
        if (
          !t.context &&
          ((t.context = new s.default.global.AudioContext()), !t.context)
        )
          throw new Error(
            "could not create AudioContext. Possibly too many AudioContexts running already."
          );
        for (this._context = t.context; this._context.rawContext; )
          this._context = this._context.rawContext;
        n.forEach(
          function (t) {
            this._defineProperty(this._context, t);
          }.bind(this)
        ),
          o.forEach(
            function (t) {
              this._defineMethod(this._context, t);
            }.bind(this)
          ),
          (this._latencyHint = t.latencyHint),
          (this._constants = {}),
          (this.lookAhead = t.lookAhead),
          (this._computedUpdateInterval = 0),
          (this._ticker = new a(
            this.emit.bind(this, "tick"),
            t.clockSource,
            t.updateInterval
          )),
          (this._timeouts = new s.default.Timeline()),
          (this._timeoutIds = 0),
          this.on("tick", this._timeoutLoop.bind(this)),
          (this._context.onstatechange = function (t) {
            this.emit("statechange", t);
          }.bind(this));
      }),
        s.default.extend(s.default.Context, s.default.Emitter),
        s.default.Emitter.mixin(s.default.Context),
        (s.default.Context.defaults = {
          clockSource: "worker",
          latencyHint: "interactive",
          lookAhead: 0.1,
          updateInterval: 0.03,
        }),
        (s.default.Context.prototype.isContext = !0),
        (s.default.Context.prototype._defineProperty = function (t, e) {
          s.default.isUndef(this[e]) &&
            Object.defineProperty(this, e, {
              get: function () {
                return t[e];
              },
              set: function (i) {
                t[e] = i;
              },
            });
        }),
        (s.default.Context.prototype._defineMethod = function (t, e) {
          s.default.isUndef(this[e]) &&
            Object.defineProperty(this, e, {
              get: function () {
                return t[e].bind(t);
              },
            });
        }),
        (s.default.Context.prototype.now = function () {
          return this._context.currentTime + this.lookAhead;
        }),
        Object.defineProperty(s.default.Context.prototype, "destination", {
          get: function () {
            return this.master ? this.master : this._context.destination;
          },
        }),
        (s.default.Context.prototype.resume = function () {
          return "suspended" === this._context.state &&
            this._context instanceof AudioContext
            ? this._context.resume()
            : Promise.resolve();
        }),
        (s.default.Context.prototype.close = function () {
          var t = Promise.resolve();
          return (
            this !== s.default.global.TONE_AUDIO_CONTEXT &&
              (t = this.rawContext.close()),
            t.then(
              function () {
                s.default.Context.emit("close", this);
              }.bind(this)
            )
          );
        }),
        (s.default.Context.prototype.getConstant = function (t) {
          if (this._constants[t]) return this._constants[t];
          for (
            var e = this._context.createBuffer(
                1,
                128,
                this._context.sampleRate
              ),
              i = e.getChannelData(0),
              s = 0;
            s < i.length;
            s++
          )
            i[s] = t;
          var n = this._context.createBufferSource();
          return (
            (n.channelCount = 1),
            (n.channelCountMode = "explicit"),
            (n.buffer = e),
            (n.loop = !0),
            n.start(0),
            (this._constants[t] = n),
            n
          );
        }),
        (s.default.Context.prototype._timeoutLoop = function () {
          for (
            var t = this.now();
            this._timeouts &&
            this._timeouts.length &&
            this._timeouts.peek().time <= t;

          )
            this._timeouts.shift().callback();
        }),
        (s.default.Context.prototype.setTimeout = function (t, e) {
          this._timeoutIds++;
          var i = this.now();
          return (
            this._timeouts.add({
              callback: t,
              time: i + e,
              id: this._timeoutIds,
            }),
            this._timeoutIds
          );
        }),
        (s.default.Context.prototype.clearTimeout = function (t) {
          return (
            this._timeouts.forEach(function (e) {
              e.id === t && this.remove(e);
            }),
            this
          );
        }),
        Object.defineProperty(s.default.Context.prototype, "updateInterval", {
          get: function () {
            return this._ticker.updateInterval;
          },
          set: function (t) {
            this._ticker.updateInterval = t;
          },
        }),
        Object.defineProperty(s.default.Context.prototype, "rawContext", {
          get: function () {
            return this._context;
          },
        }),
        Object.defineProperty(s.default.Context.prototype, "clockSource", {
          get: function () {
            return this._ticker.type;
          },
          set: function (t) {
            this._ticker.type = t;
          },
        }),
        Object.defineProperty(s.default.Context.prototype, "latencyHint", {
          get: function () {
            return this._latencyHint;
          },
          set: function (t) {
            var e = t;
            if (((this._latencyHint = t), s.default.isString(t)))
              switch (t) {
                case "interactive":
                  (e = 0.1), (this._context.latencyHint = t);
                  break;
                case "playback":
                  (e = 0.8), (this._context.latencyHint = t);
                  break;
                case "balanced":
                  (e = 0.25), (this._context.latencyHint = t);
                  break;
                case "fastest":
                  (this._context.latencyHint = "interactive"), (e = 0.01);
              }
            (this.lookAhead = e), (this.updateInterval = e / 3);
          },
        }),
        (s.default.Context.prototype.dispose = function () {
          return this.close().then(
            function () {
              for (var t in (s.default.Emitter.prototype.dispose.call(this),
              this._ticker.dispose(),
              (this._ticker = null),
              this._timeouts.dispose(),
              (this._timeouts = null),
              this._constants))
                this._constants[t].disconnect();
              this._constants = null;
            }.bind(this)
          );
        });
      var a = function (t, e, i) {
        (this._type = e),
          (this._updateInterval = i),
          (this._callback = s.default.defaultArg(t, s.default.noOp)),
          this._createClock();
      };
      if (
        ((a.Type = {
          Worker: "worker",
          Timeout: "timeout",
          Offline: "offline",
        }),
        (a.prototype._createWorker = function () {
          s.default.global.URL =
            s.default.global.URL || s.default.global.webkitURL;
          var t = new Blob([
              "var timeoutTime = " +
                (1e3 * this._updateInterval).toFixed(1) +
                ";self.onmessage = function(msg){\ttimeoutTime = parseInt(msg.data);};function tick(){\tsetTimeout(tick, timeoutTime);\tself.postMessage('tick');}tick();",
            ]),
            e = URL.createObjectURL(t),
            i = new Worker(e);
          (i.onmessage = this._callback.bind(this)), (this._worker = i);
        }),
        (a.prototype._createTimeout = function () {
          this._timeout = setTimeout(
            function () {
              this._createTimeout(), this._callback();
            }.bind(this),
            1e3 * this._updateInterval
          );
        }),
        (a.prototype._createClock = function () {
          if (this._type === a.Type.Worker)
            try {
              this._createWorker();
            } catch (t) {
              (this._type = a.Type.Timeout), this._createClock();
            }
          else this._type === a.Type.Timeout && this._createTimeout();
        }),
        Object.defineProperty(a.prototype, "updateInterval", {
          get: function () {
            return this._updateInterval;
          },
          set: function (t) {
            (this._updateInterval = Math.max(t, 128 / 44100)),
              this._type === a.Type.Worker &&
                this._worker.postMessage(Math.max(1e3 * t, 1));
          },
        }),
        Object.defineProperty(a.prototype, "type", {
          get: function () {
            return this._type;
          },
          set: function (t) {
            this._disposeClock(), (this._type = t), this._createClock();
          },
        }),
        (a.prototype._disposeClock = function () {
          this._timeout &&
            (clearTimeout(this._timeout), (this._timeout = null)),
            this._worker &&
              (this._worker.terminate(),
              (this._worker.onmessage = null),
              (this._worker = null));
        }),
        (a.prototype.dispose = function () {
          this._disposeClock(), (this._callback = null);
        }),
        s.default.supported && !s.default.initialized)
      ) {
        if (
          (s.default.global.TONE_AUDIO_CONTEXT ||
            (s.default.global.TONE_AUDIO_CONTEXT = new s.default.Context()),
          (s.default.context = s.default.global.TONE_AUDIO_CONTEXT),
          !s.default.global.TONE_SILENCE_LOGGING)
        ) {
          var r = "v";
          "dev" === s.default.version && (r = "");
          var l = " * Tone.js " + r + s.default.version + " * ";
          console.log("%c" + l, "background: #000; color: #fff");
        }
      } else
        s.default.supported ||
          s.default.global.TONE_SILENCE_LOGGING ||
          console.warn("This browser does not support Tone.js");
      e.default = s.default.Context;
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(4), i(40);
      (s.default.Instrument = function (t) {
        (t = s.default.defaultArg(t, s.default.Instrument.defaults)),
          s.default.AudioNode.call(this),
          (this._volume = this.output = new s.default.Volume(t.volume)),
          (this.volume = this._volume.volume),
          this._readOnly("volume"),
          (this._scheduledEvents = []);
      }),
        s.default.extend(s.default.Instrument, s.default.AudioNode),
        (s.default.Instrument.defaults = { volume: 0 }),
        (s.default.Instrument.prototype.triggerAttack = s.default.noOp),
        (s.default.Instrument.prototype.triggerRelease = s.default.noOp),
        (s.default.Instrument.prototype.sync = function () {
          return (
            this._syncMethod("triggerAttack", 1),
            this._syncMethod("triggerRelease", 0),
            this
          );
        }),
        (s.default.Instrument.prototype._syncMethod = function (t, e) {
          var i = (this["_original_" + t] = this[t]);
          this[t] = function () {
            var t = Array.prototype.slice.call(arguments),
              n = t[e],
              o = s.default.Transport.schedule(
                function (s) {
                  (t[e] = s), i.apply(this, t);
                }.bind(this),
                n
              );
            this._scheduledEvents.push(o);
          }.bind(this);
        }),
        (s.default.Instrument.prototype.unsync = function () {
          return (
            this._scheduledEvents.forEach(function (t) {
              s.default.Transport.clear(t);
            }),
            (this._scheduledEvents = []),
            this._original_triggerAttack &&
              ((this.triggerAttack = this._original_triggerAttack),
              (this.triggerRelease = this._original_triggerRelease)),
            this
          );
        }),
        (s.default.Instrument.prototype.triggerAttackRelease = function (
          t,
          e,
          i,
          s
        ) {
          return (
            (i = this.toSeconds(i)),
            (e = this.toSeconds(e)),
            this.triggerAttack(t, i, s),
            this.triggerRelease(i + e),
            this
          );
        }),
        (s.default.Instrument.prototype.dispose = function () {
          return (
            s.default.AudioNode.prototype.dispose.call(this),
            this._volume.dispose(),
            (this._volume = null),
            this._writable(["volume"]),
            (this.volume = null),
            this.unsync(),
            (this._scheduledEvents = null),
            this
          );
        }),
        (e.default = s.default.Instrument);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(7), i(2);
      (s.default.AudioToGain = function () {
        s.default.SignalBase.call(this),
          (this._norm = this.input = this.output = new s.default.WaveShaper(
            function (t) {
              return (t + 1) / 2;
            }
          ));
      }),
        s.default.extend(s.default.AudioToGain, s.default.SignalBase),
        (s.default.AudioToGain.prototype.dispose = function () {
          return (
            s.default.SignalBase.prototype.dispose.call(this),
            this._norm.dispose(),
            (this._norm = null),
            this
          );
        }),
        (e.default = s.default.AudioToGain);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(2), i(13), i(89), i(3), i(1);
      (s.default.CrossFade = function (t) {
        s.default.AudioNode.call(this),
          this.createInsOuts(2, 1),
          (this.a = this.input[0] = new s.default.Gain()),
          (this.b = this.input[1] = new s.default.Gain()),
          (this.fade = new s.default.Signal(
            s.default.defaultArg(t, 0.5),
            s.default.Type.NormalRange
          )),
          (this._equalPowerA = new s.default.EqualPowerGain()),
          (this._equalPowerB = new s.default.EqualPowerGain()),
          (this._one = this.context.getConstant(1)),
          (this._invert = new s.default.Subtract()),
          this.a.connect(this.output),
          this.b.connect(this.output),
          this.fade.chain(this._equalPowerB, this.b.gain),
          s.default.connect(this._one, this._invert, 0, 0),
          this.fade.connect(this._invert, 0, 1),
          this._invert.chain(this._equalPowerA, this.a.gain),
          this._readOnly("fade");
      }),
        s.default.extend(s.default.CrossFade, s.default.AudioNode),
        (s.default.CrossFade.prototype.dispose = function () {
          return (
            s.default.AudioNode.prototype.dispose.call(this),
            this._writable("fade"),
            this._equalPowerA.dispose(),
            (this._equalPowerA = null),
            this._equalPowerB.dispose(),
            (this._equalPowerB = null),
            this.fade.dispose(),
            (this.fade = null),
            this._invert.dispose(),
            (this._invert = null),
            (this._one = null),
            this.a.dispose(),
            (this.a = null),
            this.b.dispose(),
            (this.b = null),
            this
          );
        }),
        (e.default = s.default.CrossFade);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      (s.default.Timeline = function () {
        var t = s.default.defaults(arguments, ["memory"], s.default.Timeline);
        s.default.call(this), (this._timeline = []), (this.memory = t.memory);
      }),
        s.default.extend(s.default.Timeline),
        (s.default.Timeline.defaults = { memory: 1 / 0 }),
        Object.defineProperty(s.default.Timeline.prototype, "length", {
          get: function () {
            return this._timeline.length;
          },
        }),
        (s.default.Timeline.prototype.add = function (t) {
          if (s.default.isUndef(t.time))
            throw new Error("Tone.Timeline: events must have a time attribute");
          t.time = t.time.valueOf();
          var e = this._search(t.time);
          if ((this._timeline.splice(e + 1, 0, t), this.length > this.memory)) {
            var i = this.length - this.memory;
            this._timeline.splice(0, i);
          }
          return this;
        }),
        (s.default.Timeline.prototype.remove = function (t) {
          var e = this._timeline.indexOf(t);
          return -1 !== e && this._timeline.splice(e, 1), this;
        }),
        (s.default.Timeline.prototype.get = function (t, e) {
          e = s.default.defaultArg(e, "time");
          var i = this._search(t, e);
          return -1 !== i ? this._timeline[i] : null;
        }),
        (s.default.Timeline.prototype.peek = function () {
          return this._timeline[0];
        }),
        (s.default.Timeline.prototype.shift = function () {
          return this._timeline.shift();
        }),
        (s.default.Timeline.prototype.getAfter = function (t, e) {
          e = s.default.defaultArg(e, "time");
          var i = this._search(t, e);
          return i + 1 < this._timeline.length ? this._timeline[i + 1] : null;
        }),
        (s.default.Timeline.prototype.getBefore = function (t, e) {
          e = s.default.defaultArg(e, "time");
          var i = this._timeline.length;
          if (i > 0 && this._timeline[i - 1][e] < t)
            return this._timeline[i - 1];
          var n = this._search(t, e);
          return n - 1 >= 0 ? this._timeline[n - 1] : null;
        }),
        (s.default.Timeline.prototype.cancel = function (t) {
          if (this._timeline.length > 1) {
            var e = this._search(t);
            if (e >= 0)
              if (this._timeline[e].time === t) {
                for (var i = e; i >= 0 && this._timeline[i].time === t; i--)
                  e = i;
                this._timeline = this._timeline.slice(0, e);
              } else this._timeline = this._timeline.slice(0, e + 1);
            else this._timeline = [];
          } else
            1 === this._timeline.length &&
              this._timeline[0].time >= t &&
              (this._timeline = []);
          return this;
        }),
        (s.default.Timeline.prototype.cancelBefore = function (t) {
          var e = this._search(t);
          return e >= 0 && (this._timeline = this._timeline.slice(e + 1)), this;
        }),
        (s.default.Timeline.prototype.previousEvent = function (t) {
          var e = this._timeline.indexOf(t);
          return e > 0 ? this._timeline[e - 1] : null;
        }),
        (s.default.Timeline.prototype._search = function (t, e) {
          if (0 === this._timeline.length) return -1;
          e = s.default.defaultArg(e, "time");
          var i = 0,
            n = this._timeline.length,
            o = n;
          if (n > 0 && this._timeline[n - 1][e] <= t) return n - 1;
          for (; i < o; ) {
            var a = Math.floor(i + (o - i) / 2),
              r = this._timeline[a],
              l = this._timeline[a + 1];
            if (r[e] === t) {
              for (var u = a; u < this._timeline.length; u++) {
                this._timeline[u][e] === t && (a = u);
              }
              return a;
            }
            if (r[e] < t && l[e] > t) return a;
            r[e] > t ? (o = a) : (i = a + 1);
          }
          return -1;
        }),
        (s.default.Timeline.prototype._iterate = function (t, e, i) {
          (e = s.default.defaultArg(e, 0)),
            (i = s.default.defaultArg(i, this._timeline.length - 1)),
            this._timeline.slice(e, i + 1).forEach(
              function (e) {
                t.call(this, e);
              }.bind(this)
            );
        }),
        (s.default.Timeline.prototype.forEach = function (t) {
          return this._iterate(t), this;
        }),
        (s.default.Timeline.prototype.forEachBefore = function (t, e) {
          var i = this._search(t);
          return -1 !== i && this._iterate(e, 0, i), this;
        }),
        (s.default.Timeline.prototype.forEachAfter = function (t, e) {
          var i = this._search(t);
          return this._iterate(e, i + 1), this;
        }),
        (s.default.Timeline.prototype.forEachBetween = function (t, e, i) {
          var s = this._search(t),
            n = this._search(e);
          return (
            -1 !== s && -1 !== n
              ? (this._timeline[s].time !== t && (s += 1),
                this._timeline[n].time === e && (n -= 1),
                this._iterate(i, s, n))
              : -1 === s && this._iterate(i, 0, n),
            this
          );
        }),
        (s.default.Timeline.prototype.forEachFrom = function (t, e) {
          for (var i = this._search(t); i >= 0 && this._timeline[i].time >= t; )
            i--;
          return this._iterate(e, i + 1), this;
        }),
        (s.default.Timeline.prototype.forEachAtTime = function (t, e) {
          var i = this._search(t);
          return (
            -1 !== i &&
              this._iterate(
                function (i) {
                  i.time === t && e.call(this, i);
                },
                0,
                i
              ),
            this
          );
        }),
        (s.default.Timeline.prototype.dispose = function () {
          return (
            s.default.prototype.dispose.call(this),
            (this._timeline = null),
            this
          );
        }),
        (e.default = s.default.Timeline);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(21), i(2);
      (s.default.Monophonic = function (t) {
        (t = s.default.defaultArg(t, s.default.Monophonic.defaults)),
          s.default.Instrument.call(this, t),
          (this.portamento = t.portamento);
      }),
        s.default.extend(s.default.Monophonic, s.default.Instrument),
        (s.default.Monophonic.defaults = { portamento: 0 }),
        (s.default.Monophonic.prototype.triggerAttack = function (t, e, i) {
          return (
            this.log("triggerAttack", t, e, i),
            (e = this.toSeconds(e)),
            this._triggerEnvelopeAttack(e, i),
            this.setNote(t, e),
            this
          );
        }),
        (s.default.Monophonic.prototype.triggerRelease = function (t) {
          return (
            this.log("triggerRelease", t),
            (t = this.toSeconds(t)),
            this._triggerEnvelopeRelease(t),
            this
          );
        }),
        (s.default.Monophonic.prototype._triggerEnvelopeAttack = function () {}),
        (s.default.Monophonic.prototype._triggerEnvelopeRelease = function () {}),
        (s.default.Monophonic.prototype.getLevelAtTime = function (t) {
          return (t = this.toSeconds(t)), this.envelope.getValueAtTime(t);
        }),
        (s.default.Monophonic.prototype.setNote = function (t, e) {
          if (
            ((e = this.toSeconds(e)),
            this.portamento > 0 && this.getLevelAtTime(e) > 0.05)
          ) {
            var i = this.toSeconds(this.portamento);
            this.frequency.exponentialRampTo(t, i, e);
          } else this.frequency.setValueAtTime(t, e);
          return this;
        }),
        (e.default = s.default.Monophonic);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(29), i(5), i(2);
      (s.default.Scale = function (t, e) {
        s.default.SignalBase.call(this),
          (this._outputMin = s.default.defaultArg(t, 0)),
          (this._outputMax = s.default.defaultArg(e, 1)),
          (this._scale = this.input = new s.default.Multiply(1)),
          (this._add = this.output = new s.default.Add(0)),
          this._scale.connect(this._add),
          this._setRange();
      }),
        s.default.extend(s.default.Scale, s.default.SignalBase),
        Object.defineProperty(s.default.Scale.prototype, "min", {
          get: function () {
            return this._outputMin;
          },
          set: function (t) {
            (this._outputMin = t), this._setRange();
          },
        }),
        Object.defineProperty(s.default.Scale.prototype, "max", {
          get: function () {
            return this._outputMax;
          },
          set: function (t) {
            (this._outputMax = t), this._setRange();
          },
        }),
        (s.default.Scale.prototype._setRange = function () {
          (this._add.value = this._outputMin),
            (this._scale.value = this._outputMax - this._outputMin);
        }),
        (s.default.Scale.prototype.dispose = function () {
          return (
            s.default.SignalBase.prototype.dispose.call(this),
            this._add.dispose(),
            (this._add = null),
            this._scale.dispose(),
            (this._scale = null),
            this
          );
        }),
        (e.default = s.default.Scale);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(2), i(3), i(1);
      (s.default.Volume = function () {
        var t = s.default.defaults(arguments, ["volume"], s.default.Volume);
        s.default.AudioNode.call(this, t),
          (this.output = this.input = new s.default.Gain(
            t.volume,
            s.default.Type.Decibels
          )),
          (this._unmutedVolume = t.volume),
          (this.volume = this.output.gain),
          this._readOnly("volume"),
          (this.mute = t.mute);
      }),
        s.default.extend(s.default.Volume, s.default.AudioNode),
        (s.default.Volume.defaults = { volume: 0, mute: !1 }),
        Object.defineProperty(s.default.Volume.prototype, "mute", {
          get: function () {
            return this.volume.value === -1 / 0;
          },
          set: function (t) {
            !this.mute && t
              ? ((this._unmutedVolume = this.volume.value),
                (this.volume.value = -1 / 0))
              : this.mute && !t && (this.volume.value = this._unmutedVolume);
          },
        }),
        (s.default.Volume.prototype.dispose = function () {
          return (
            this.input.dispose(),
            s.default.AudioNode.prototype.dispose.call(this),
            this._writable("volume"),
            this.volume.dispose(),
            (this.volume = null),
            this
          );
        }),
        (e.default = s.default.Volume);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(3), i(30);
      (s.default.Zero = function () {
        s.default.SignalBase.call(this),
          (this._gain = this.input = this.output = new s.default.Gain()),
          s.default.connect(this.context.getConstant(0), this._gain);
      }),
        s.default.extend(s.default.Zero, s.default.SignalBase),
        (s.default.Zero.prototype.dispose = function () {
          return (
            s.default.SignalBase.prototype.dispose.call(this),
            this._gain.dispose(),
            (this._gain = null),
            this
          );
        }),
        (e.default = s.default.Zero);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(2), i(3);
      (s.default.Add = function (t) {
        s.default.Signal.call(this),
          this.createInsOuts(2, 0),
          (this._sum = this.input[0] = this.input[1] = this.output = new s.default.Gain()),
          (this._param = this.input[1] = new s.default.Signal(t)),
          this._param.connect(this._sum);
      }),
        s.default.extend(s.default.Add, s.default.Signal),
        (s.default.Add.prototype.dispose = function () {
          return (
            s.default.Signal.prototype.dispose.call(this),
            this._sum.dispose(),
            (this._sum = null),
            this
          );
        }),
        (e.default = s.default.Add);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(1);
      (s.default.SignalBase = function () {
        s.default.AudioNode.call(this);
      }),
        s.default.extend(s.default.SignalBase, s.default.AudioNode),
        (s.default.SignalBase.prototype.connect = function (t, e, i) {
          return (
            (s.default.Signal && s.default.Signal === t.constructor) ||
            (s.default.Param && s.default.Param === t.constructor)
              ? (t._param.cancelScheduledValues(0),
                t._param.setValueAtTime(0, 0),
                (t.overridden = !0))
              : t instanceof AudioParam &&
                (t.cancelScheduledValues(0), t.setValueAtTime(0, 0)),
            s.default.AudioNode.prototype.connect.call(this, t, e, i),
            this
          );
        }),
        (e.default = s.default.SignalBase);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(47), i(3);
      (s.default.AmplitudeEnvelope = function () {
        s.default.Envelope.apply(this, arguments),
          (this.input = this.output = new s.default.Gain()),
          this._sig.connect(this.output.gain);
      }),
        s.default.extend(s.default.AmplitudeEnvelope, s.default.Envelope),
        (s.default.AmplitudeEnvelope.prototype.dispose = function () {
          return s.default.Envelope.prototype.dispose.call(this), this;
        }),
        (e.default = s.default.AmplitudeEnvelope);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(11), i(6), i(3), i(1);
      (s.default.BufferSource = function () {
        var t = s.default.defaults(
          arguments,
          ["buffer", "onload"],
          s.default.BufferSource
        );
        s.default.AudioNode.call(this, t),
          (this.onended = t.onended),
          (this._startTime = -1),
          (this._sourceStarted = !1),
          (this._sourceStopped = !1),
          (this._stopTime = -1),
          (this._gainNode = this.output = new s.default.Gain(0)),
          (this._source = this.context.createBufferSource()),
          s.default.connect(this._source, this._gainNode),
          (this._source.onended = this._onended.bind(this)),
          (this._buffer = new s.default.Buffer(t.buffer, t.onload)),
          (this.playbackRate = new s.default.Param({
            param: this._source.playbackRate,
            units: s.default.Type.Positive,
            value: t.playbackRate,
          })),
          (this.fadeIn = t.fadeIn),
          (this.fadeOut = t.fadeOut),
          (this.curve = t.curve),
          (this._onendedTimeout = -1),
          (this.loop = t.loop),
          (this.loopStart = t.loopStart),
          (this.loopEnd = t.loopEnd);
      }),
        s.default.extend(s.default.BufferSource, s.default.AudioNode),
        (s.default.BufferSource.defaults = {
          onended: s.default.noOp,
          onload: s.default.noOp,
          loop: !1,
          loopStart: 0,
          loopEnd: 0,
          fadeIn: 0,
          fadeOut: 0,
          curve: "linear",
          playbackRate: 1,
        }),
        Object.defineProperty(s.default.BufferSource.prototype, "state", {
          get: function () {
            return this.getStateAtTime(this.now());
          },
        }),
        (s.default.BufferSource.prototype.getStateAtTime = function (t) {
          return (
            (t = this.toSeconds(t)),
            -1 !== this._startTime &&
            this._startTime <= t &&
            (-1 === this._stopTime || t < this._stopTime) &&
            !this._sourceStopped
              ? s.default.State.Started
              : s.default.State.Stopped
          );
        }),
        (s.default.BufferSource.prototype.start = function (t, e, i, n) {
          this.log("start", t, e, i, n),
            this.assert(-1 === this._startTime, "can only be started once"),
            this.assert(
              this.buffer.loaded,
              "buffer is either not set or not loaded"
            ),
            this.assert(!this._sourceStopped, "source is already stopped"),
            (t = this.toSeconds(t)),
            (e = this.loop
              ? s.default.defaultArg(e, this.loopStart)
              : s.default.defaultArg(e, 0)),
            (e = this.toSeconds(e)),
            (e = Math.max(e, 0)),
            (n = s.default.defaultArg(n, 1));
          var o = this.toSeconds(this.fadeIn);
          if (
            (o > 0
              ? (this._gainNode.gain.setValueAtTime(0, t),
                "linear" === this.curve
                  ? this._gainNode.gain.linearRampToValueAtTime(n, t + o)
                  : this._gainNode.gain.exponentialApproachValueAtTime(n, t, o))
              : this._gainNode.gain.setValueAtTime(n, t),
            (this._startTime = t),
            s.default.isDefined(i))
          ) {
            var a = this.toSeconds(i);
            (a = Math.max(a, 0)), this.stop(t + a);
          }
          if (this.loop) {
            var r = this.loopEnd || this.buffer.duration,
              l = this.loopStart;
            e >= r && (e = ((e - l) % (r - l)) + l);
          }
          return (
            (this._source.buffer = this.buffer.get()),
            (this._source.loopEnd = this.loopEnd || this.buffer.duration),
            e < this.buffer.duration &&
              ((this._sourceStarted = !0), this._source.start(t, e)),
            this
          );
        }),
        (s.default.BufferSource.prototype.stop = function (t) {
          this.log("stop", t),
            this.assert(
              this.buffer.loaded,
              "buffer is either not set or not loaded"
            ),
            this.assert(!this._sourceStopped, "source is already stopped"),
            (t = this.toSeconds(t)),
            -1 !== this._stopTime && this.cancelStop();
          var e = this.toSeconds(this.fadeOut);
          return (
            (this._stopTime = t + e),
            e > 0
              ? "linear" === this.curve
                ? this._gainNode.gain.linearRampTo(0, e, t)
                : this._gainNode.gain.targetRampTo(0, e, t)
              : (this._gainNode.gain.cancelAndHoldAtTime(t),
                this._gainNode.gain.setValueAtTime(0, t)),
            s.default.context.clearTimeout(this._onendedTimeout),
            (this._onendedTimeout = s.default.context.setTimeout(
              this._onended.bind(this),
              this._stopTime - this.now()
            )),
            this
          );
        }),
        (s.default.BufferSource.prototype.cancelStop = function () {
          if (-1 !== this._startTime && !this._sourceStopped) {
            var t = this.toSeconds(this.fadeIn);
            this._gainNode.gain.cancelScheduledValues(
              this._startTime + t + this.sampleTime
            ),
              this.context.clearTimeout(this._onendedTimeout),
              (this._stopTime = -1);
          }
          return this;
        }),
        (s.default.BufferSource.prototype._onended = function () {
          if (!this._sourceStopped) {
            this._sourceStopped = !0;
            var t = "exponential" === this.curve ? 2 * this.fadeOut : 0;
            this._sourceStarted &&
              -1 !== this._stopTime &&
              this._source.stop(this._stopTime + t),
              this.onended(this),
              setTimeout(
                function () {
                  this._source &&
                    (this._source.disconnect(), this._gainNode.disconnect());
                }.bind(this),
                1e3 * t + 100
              );
          }
        }),
        Object.defineProperty(s.default.BufferSource.prototype, "loopStart", {
          get: function () {
            return this._source.loopStart;
          },
          set: function (t) {
            this._source.loopStart = this.toSeconds(t);
          },
        }),
        Object.defineProperty(s.default.BufferSource.prototype, "loopEnd", {
          get: function () {
            return this._source.loopEnd;
          },
          set: function (t) {
            this._source.loopEnd = this.toSeconds(t);
          },
        }),
        Object.defineProperty(s.default.BufferSource.prototype, "buffer", {
          get: function () {
            return this._buffer;
          },
          set: function (t) {
            this._buffer.set(t);
          },
        }),
        Object.defineProperty(s.default.BufferSource.prototype, "loop", {
          get: function () {
            return this._source.loop;
          },
          set: function (t) {
            (this._source.loop = t), this.cancelStop();
          },
        }),
        (s.default.BufferSource.prototype.dispose = function () {
          return (
            this._wasDisposed ||
              ((this._wasDisposed = !0),
              s.default.AudioNode.prototype.dispose.call(this),
              (this.onended = null),
              (this._source.onended = null),
              this._source.disconnect(),
              (this._source = null),
              this._gainNode.dispose(),
              (this._gainNode = null),
              this._buffer.dispose(),
              (this._buffer = null),
              (this._startTime = -1),
              (this.playbackRate = null),
              s.default.context.clearTimeout(this._onendedTimeout)),
            this
          );
        }),
        (e.default = s.default.BufferSource);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(8), i(2), i(5), i(3);
      (s.default.FeedbackEffect = function () {
        var t = s.default.defaults(
          arguments,
          ["feedback"],
          s.default.FeedbackEffect
        );
        s.default.Effect.call(this, t),
          (this._feedbackGain = new s.default.Gain(
            t.feedback,
            s.default.Type.NormalRange
          )),
          (this.feedback = this._feedbackGain.gain),
          this.effectReturn.chain(this._feedbackGain, this.effectSend),
          this._readOnly(["feedback"]);
      }),
        s.default.extend(s.default.FeedbackEffect, s.default.Effect),
        (s.default.FeedbackEffect.defaults = { feedback: 0.125 }),
        (s.default.FeedbackEffect.prototype.dispose = function () {
          return (
            s.default.Effect.prototype.dispose.call(this),
            this._writable(["feedback"]),
            this._feedbackGain.dispose(),
            (this._feedbackGain = null),
            (this.feedback = null),
            this
          );
        }),
        (e.default = s.default.FeedbackEffect);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(24), i(4);
      (s.default.TimelineState = function (t) {
        s.default.Timeline.call(this), (this._initial = t);
      }),
        s.default.extend(s.default.TimelineState, s.default.Timeline),
        (s.default.TimelineState.prototype.getValueAtTime = function (t) {
          var e = this.get(t);
          return null !== e ? e.state : this._initial;
        }),
        (s.default.TimelineState.prototype.setStateAtTime = function (t, e) {
          return this.add({ state: t, time: e }), this;
        }),
        (s.default.TimelineState.prototype.getLastState = function (t, e) {
          e = this.toSeconds(e);
          for (var i = this._search(e); i >= 0; i--) {
            var s = this._timeline[i];
            if (s.state === t) return s;
          }
        }),
        (s.default.TimelineState.prototype.getNextState = function (t, e) {
          e = this.toSeconds(e);
          var i = this._search(e);
          if (-1 !== i)
            for (var s = i; s < this._timeline.length; s++) {
              var n = this._timeline[s];
              if (n.state === t) return n;
            }
        }),
        (e.default = s.default.TimelineState);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      (s.default.Emitter = function () {
        s.default.call(this), (this._events = {});
      }),
        s.default.extend(s.default.Emitter),
        (s.default.Emitter.prototype.on = function (t, e) {
          for (var i = t.split(/\W+/), s = 0; s < i.length; s++) {
            var n = i[s];
            this._events.hasOwnProperty(n) || (this._events[n] = []),
              this._events[n].push(e);
          }
          return this;
        }),
        (s.default.Emitter.prototype.once = function (t, e) {
          var i = function () {
            e.apply(this, arguments), this.off(t, i);
          }.bind(this);
          return this.on(t, i), this;
        }),
        (s.default.Emitter.prototype.off = function (t, e) {
          for (var i = t.split(/\W+/), n = 0; n < i.length; n++)
            if (((t = i[n]), this._events.hasOwnProperty(t)))
              if (s.default.isUndef(e)) this._events[t] = [];
              else
                for (var o = this._events[t], a = 0; a < o.length; a++)
                  o[a] === e && o.splice(a, 1);
          return this;
        }),
        (s.default.Emitter.prototype.emit = function (t) {
          if (this._events) {
            var e = Array.apply(null, arguments).slice(1);
            if (this._events.hasOwnProperty(t))
              for (
                var i = this._events[t].slice(0), s = 0, n = i.length;
                s < n;
                s++
              )
                i[s].apply(this, e);
          }
          return this;
        }),
        (s.default.Emitter.mixin = function (t) {
          var e = ["on", "once", "off", "emit"];
          t._events = {};
          for (var i = 0; i < e.length; i++) {
            var n = e[i],
              o = s.default.Emitter.prototype[n];
            t[n] = o;
          }
          return s.default.Emitter;
        }),
        (s.default.Emitter.prototype.dispose = function () {
          return (
            s.default.prototype.dispose.call(this), (this._events = null), this
          );
        }),
        (e.default = s.default.Emitter);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(1), i(44);
      s.default.supported &&
        (AnalyserNode.prototype.getFloatTimeDomainData ||
          (AnalyserNode.prototype.getFloatTimeDomainData = function (t) {
            var e = new Uint8Array(t.length);
            this.getByteTimeDomainData(e);
            for (var i = 0; i < e.length; i++) t[i] = (e[i] - 128) / 128;
          })),
        (s.default.Analyser = function () {
          var t = s.default.defaults(
            arguments,
            ["type", "size"],
            s.default.Analyser
          );
          s.default.AudioNode.call(this),
            (this._analyser = this.input = this.output = this.context.createAnalyser()),
            (this._type = t.type),
            (this._buffer = null),
            (this.size = t.size),
            (this.type = t.type);
        }),
        s.default.extend(s.default.Analyser, s.default.AudioNode),
        (s.default.Analyser.defaults = {
          size: 1024,
          type: "fft",
          smoothing: 0.8,
        }),
        (s.default.Analyser.Type = { Waveform: "waveform", FFT: "fft" }),
        (s.default.Analyser.prototype.getValue = function () {
          return (
            this._type === s.default.Analyser.Type.FFT
              ? this._analyser.getFloatFrequencyData(this._buffer)
              : this._type === s.default.Analyser.Type.Waveform &&
                this._analyser.getFloatTimeDomainData(this._buffer),
            this._buffer
          );
        }),
        Object.defineProperty(s.default.Analyser.prototype, "size", {
          get: function () {
            return this._analyser.frequencyBinCount;
          },
          set: function (t) {
            (this._analyser.fftSize = 2 * t),
              (this._buffer = new Float32Array(t));
          },
        }),
        Object.defineProperty(s.default.Analyser.prototype, "type", {
          get: function () {
            return this._type;
          },
          set: function (t) {
            if (
              t !== s.default.Analyser.Type.Waveform &&
              t !== s.default.Analyser.Type.FFT
            )
              throw new TypeError("Tone.Analyser: invalid type: " + t);
            this._type = t;
          },
        }),
        Object.defineProperty(s.default.Analyser.prototype, "smoothing", {
          get: function () {
            return this._analyser.smoothingTimeConstant;
          },
          set: function (t) {
            this._analyser.smoothingTimeConstant = t;
          },
        }),
        (s.default.Analyser.prototype.dispose = function () {
          s.default.AudioNode.prototype.dispose.call(this),
            this._analyser.disconnect(),
            (this._analyser = null),
            (this._buffer = null);
        });
      e.default = s.default.Analyser;
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(6), i(17), i(50), i(69), i(49), i(68), i(67);
      (s.default.OmniOscillator = function () {
        var t = s.default.defaults(
          arguments,
          ["frequency", "type"],
          s.default.OmniOscillator
        );
        s.default.Source.call(this, t),
          (this.frequency = new s.default.Signal(
            t.frequency,
            s.default.Type.Frequency
          )),
          (this.detune = new s.default.Signal(t.detune, s.default.Type.Cents)),
          (this._sourceType = void 0),
          (this._oscillator = null),
          (this.type = t.type),
          this._readOnly(["frequency", "detune"]),
          this.set(t);
      }),
        s.default.extend(s.default.OmniOscillator, s.default.Source),
        (s.default.OmniOscillator.defaults = {
          frequency: 440,
          detune: 0,
          type: "sine",
          phase: 0,
        });
      var n = "PulseOscillator",
        o = "PWMOscillator",
        a = "Oscillator",
        r = "FMOscillator",
        l = "AMOscillator",
        u = "FatOscillator";
      (s.default.OmniOscillator.prototype._start = function (t) {
        this._oscillator.start(t);
      }),
        (s.default.OmniOscillator.prototype._stop = function (t) {
          this._oscillator.stop(t);
        }),
        (s.default.OmniOscillator.prototype.restart = function (t) {
          this._oscillator.restart(t);
        }),
        Object.defineProperty(s.default.OmniOscillator.prototype, "type", {
          get: function () {
            var t = "";
            return (
              this._sourceType === r
                ? (t = "fm")
                : this._sourceType === l
                ? (t = "am")
                : this._sourceType === u && (t = "fat"),
              t + this._oscillator.type
            );
          },
          set: function (t) {
            "fm" === t.substr(0, 2)
              ? (this._createNewOscillator(r),
                (this._oscillator.type = t.substr(2)))
              : "am" === t.substr(0, 2)
              ? (this._createNewOscillator(l),
                (this._oscillator.type = t.substr(2)))
              : "fat" === t.substr(0, 3)
              ? (this._createNewOscillator(u),
                (this._oscillator.type = t.substr(3)))
              : "pwm" === t
              ? this._createNewOscillator(o)
              : "pulse" === t
              ? this._createNewOscillator(n)
              : (this._createNewOscillator(a), (this._oscillator.type = t));
          },
        }),
        Object.defineProperty(s.default.OmniOscillator.prototype, "partials", {
          get: function () {
            return this._oscillator.partials;
          },
          set: function (t) {
            this._oscillator.partials = t;
          },
        }),
        Object.defineProperty(
          s.default.OmniOscillator.prototype,
          "partialCount",
          {
            get: function () {
              return this._oscillator.partialCount;
            },
            set: function (t) {
              this._oscillator.partialCount = t;
            },
          }
        ),
        (s.default.OmniOscillator.prototype.set = function (t, e) {
          return (
            "type" === t
              ? (this.type = e)
              : s.default.isObject(t) &&
                t.hasOwnProperty("type") &&
                (this.type = t.type),
            s.default.prototype.set.apply(this, arguments),
            this
          );
        }),
        (s.default.OmniOscillator.prototype.get = function (t) {
          var e = this._oscillator.get(t);
          return (e.type = this.type), e;
        }),
        (s.default.OmniOscillator.prototype._createNewOscillator = function (
          t
        ) {
          if (t !== this._sourceType) {
            this._sourceType = t;
            var e = s.default[t],
              i = this.now();
            if (null !== this._oscillator) {
              var n = this._oscillator;
              n.stop(i),
                this.context.setTimeout(function () {
                  n.dispose(), (n = null);
                }, this.blockTime);
            }
            (this._oscillator = new e()),
              this.frequency.connect(this._oscillator.frequency),
              this.detune.connect(this._oscillator.detune),
              this._oscillator.connect(this.output),
              this.state === s.default.State.Started &&
                this._oscillator.start(i);
          }
        }),
        Object.defineProperty(s.default.OmniOscillator.prototype, "phase", {
          get: function () {
            return this._oscillator.phase;
          },
          set: function (t) {
            this._oscillator.phase = t;
          },
        });
      var d = {
        PulseOscillator: "pulse",
        PWMOscillator: "pwm",
        Oscillator: "oscillator",
        FMOscillator: "fm",
        AMOscillator: "am",
        FatOscillator: "fat",
      };
      Object.defineProperty(s.default.OmniOscillator.prototype, "sourceType", {
        get: function () {
          return d[this._sourceType];
        },
        set: function (t) {
          var e = "sine";
          "pwm" !== this._oscillator.type &&
            "pulse" !== this._oscillator.type &&
            (e = this._oscillator.type),
            t === d.FMOscillator
              ? (this.type = "fm" + e)
              : t === d.AMOscillator
              ? (this.type = "am" + e)
              : t === d.FatOscillator
              ? (this.type = "fat" + e)
              : t === d.Oscillator
              ? (this.type = e)
              : t === d.PulseOscillator
              ? (this.type = "pulse")
              : t === d.PWMOscillator && (this.type = "pwm");
        },
      }),
        Object.defineProperty(s.default.OmniOscillator.prototype, "baseType", {
          get: function () {
            return this._oscillator.baseType;
          },
          set: function (t) {
            this.sourceType !== d.PulseOscillator &&
              this.sourceType !== d.PWMOscillator &&
              (this._oscillator.baseType = t);
          },
        }),
        Object.defineProperty(s.default.OmniOscillator.prototype, "width", {
          get: function () {
            return this._sourceType === n ? this._oscillator.width : void 0;
          },
        }),
        Object.defineProperty(s.default.OmniOscillator.prototype, "count", {
          get: function () {
            return this._sourceType === u ? this._oscillator.count : void 0;
          },
          set: function (t) {
            this._sourceType === u && (this._oscillator.count = t);
          },
        }),
        Object.defineProperty(s.default.OmniOscillator.prototype, "spread", {
          get: function () {
            return this._sourceType === u ? this._oscillator.spread : void 0;
          },
          set: function (t) {
            this._sourceType === u && (this._oscillator.spread = t);
          },
        }),
        Object.defineProperty(
          s.default.OmniOscillator.prototype,
          "modulationType",
          {
            get: function () {
              return this._sourceType === r || this._sourceType === l
                ? this._oscillator.modulationType
                : void 0;
            },
            set: function (t) {
              (this._sourceType !== r && this._sourceType !== l) ||
                (this._oscillator.modulationType = t);
            },
          }
        ),
        Object.defineProperty(
          s.default.OmniOscillator.prototype,
          "modulationIndex",
          {
            get: function () {
              return this._sourceType === r
                ? this._oscillator.modulationIndex
                : void 0;
            },
          }
        ),
        Object.defineProperty(
          s.default.OmniOscillator.prototype,
          "harmonicity",
          {
            get: function () {
              return this._sourceType === r || this._sourceType === l
                ? this._oscillator.harmonicity
                : void 0;
            },
          }
        ),
        Object.defineProperty(
          s.default.OmniOscillator.prototype,
          "modulationFrequency",
          {
            get: function () {
              return this._sourceType === o
                ? this._oscillator.modulationFrequency
                : void 0;
            },
          }
        ),
        (s.default.OmniOscillator.prototype.dispose = function () {
          return (
            s.default.Source.prototype.dispose.call(this),
            this._writable(["frequency", "detune"]),
            this.detune.dispose(),
            (this.detune = null),
            this.frequency.dispose(),
            (this.frequency = null),
            this._oscillator.dispose(),
            (this._oscillator = null),
            (this._sourceType = null),
            this
          );
        }),
        (e.default = s.default.OmniOscillator);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(31), i(37), i(25);
      (s.default.Synth = function (t) {
        (t = s.default.defaultArg(t, s.default.Synth.defaults)),
          s.default.Monophonic.call(this, t),
          (this.oscillator = new s.default.OmniOscillator(t.oscillator)),
          (this.frequency = this.oscillator.frequency),
          (this.detune = this.oscillator.detune),
          (this.envelope = new s.default.AmplitudeEnvelope(t.envelope)),
          this.oscillator.chain(this.envelope, this.output),
          this._readOnly(["oscillator", "frequency", "detune", "envelope"]);
      }),
        s.default.extend(s.default.Synth, s.default.Monophonic),
        (s.default.Synth.defaults = {
          oscillator: { type: "triangle" },
          envelope: { attack: 0.005, decay: 0.1, sustain: 0.3, release: 1 },
        }),
        (s.default.Synth.prototype._triggerEnvelopeAttack = function (t, e) {
          return (
            this.envelope.triggerAttack(t, e),
            this.oscillator.start(t),
            0 === this.envelope.sustain &&
              this.oscillator.stop(
                t +
                  this.toSeconds(this.envelope.attack) +
                  this.toSeconds(this.envelope.decay)
              ),
            this
          );
        }),
        (s.default.Synth.prototype._triggerEnvelopeRelease = function (t) {
          return (
            (t = this.toSeconds(t)),
            this.envelope.triggerRelease(t),
            this.oscillator.stop(t + this.toSeconds(this.envelope.release)),
            this
          );
        }),
        (s.default.Synth.prototype.dispose = function () {
          return (
            s.default.Monophonic.prototype.dispose.call(this),
            this._writable(["oscillator", "frequency", "detune", "envelope"]),
            this.oscillator.dispose(),
            (this.oscillator = null),
            this.envelope.dispose(),
            (this.envelope = null),
            (this.frequency = null),
            (this.detune = null),
            this
          );
        }),
        (e.default = s.default.Synth);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(6), i(11), i(32);
      (s.default.Noise = function () {
        var t = s.default.defaults(arguments, ["type"], s.default.Noise);
        s.default.Source.call(this, t),
          (this._source = null),
          (this._type = t.type),
          (this._playbackRate = t.playbackRate);
      }),
        s.default.extend(s.default.Noise, s.default.Source),
        (s.default.Noise.defaults = { type: "white", playbackRate: 1 }),
        Object.defineProperty(s.default.Noise.prototype, "type", {
          get: function () {
            return this._type;
          },
          set: function (t) {
            if (this._type !== t) {
              if (!(t in n))
                throw new TypeError("Tone.Noise: invalid type: " + t);
              if (((this._type = t), this.state === s.default.State.Started)) {
                var e = this.now();
                this._stop(e), this._start(e);
              }
            }
          },
        }),
        Object.defineProperty(s.default.Noise.prototype, "playbackRate", {
          get: function () {
            return this._playbackRate;
          },
          set: function (t) {
            (this._playbackRate = t),
              this._source && (this._source.playbackRate.value = t);
          },
        }),
        (s.default.Noise.prototype._start = function (t) {
          var e = n[this._type];
          (this._source = new s.default.BufferSource(e).connect(this.output)),
            (this._source.loop = !0),
            (this._source.playbackRate.value = this._playbackRate),
            this._source.start(
              this.toSeconds(t),
              Math.random() * (e.duration - 0.001)
            );
        }),
        (s.default.Noise.prototype._stop = function (t) {
          this._source &&
            (this._source.stop(this.toSeconds(t)), (this._source = null));
        }),
        (s.default.Noise.prototype.restart = function (t) {
          return this._stop(t), this._start(t), this;
        }),
        (s.default.Noise.prototype.dispose = function () {
          return (
            s.default.Source.prototype.dispose.call(this),
            null !== this._source &&
              (this._source.disconnect(), (this._source = null)),
            (this._buffer = null),
            this
          );
        });
      var n = {},
        o = {};
      Object.defineProperty(n, "pink", {
        get: function () {
          if (!o.pink) {
            for (var t = [], e = 0; e < 2; e++) {
              var i,
                n,
                a,
                r,
                l,
                u,
                d,
                f = new Float32Array(220500);
              (t[e] = f), (i = n = a = r = l = u = d = 0);
              for (var h = 0; h < 220500; h++) {
                var c = 2 * Math.random() - 1;
                (i = 0.99886 * i + 0.0555179 * c),
                  (n = 0.99332 * n + 0.0750759 * c),
                  (a = 0.969 * a + 0.153852 * c),
                  (r = 0.8665 * r + 0.3104856 * c),
                  (l = 0.55 * l + 0.5329522 * c),
                  (u = -0.7616 * u - 0.016898 * c),
                  (f[h] = i + n + a + r + l + u + d + 0.5362 * c),
                  (f[h] *= 0.11),
                  (d = 0.115926 * c);
              }
            }
            o.pink = new s.default.Buffer().fromArray(t);
          }
          return o.pink;
        },
      }),
        Object.defineProperty(n, "brown", {
          get: function () {
            if (!o.brown) {
              for (var t = [], e = 0; e < 2; e++) {
                var i = new Float32Array(220500);
                t[e] = i;
                for (var n = 0, a = 0; a < 220500; a++) {
                  var r = 2 * Math.random() - 1;
                  (i[a] = (n + 0.02 * r) / 1.02), (n = i[a]), (i[a] *= 3.5);
                }
              }
              o.brown = new s.default.Buffer().fromArray(t);
            }
            return o.brown;
          },
        }),
        Object.defineProperty(n, "white", {
          get: function () {
            if (!o.white) {
              for (var t = [], e = 0; e < 2; e++) {
                var i = new Float32Array(220500);
                t[e] = i;
                for (var n = 0; n < 220500; n++) i[n] = 2 * Math.random() - 1;
              }
              o.white = new s.default.Buffer().fromArray(t);
            }
            return o.white;
          },
        }),
        (e.default = s.default.Noise);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(27), i(20), i(1);
      (s.default.Master = function () {
        s.default.AudioNode.call(this),
          s.default.getContext(
            function () {
              this.createInsOuts(1, 0),
                (this._volume = this.output = new s.default.Volume()),
                (this.volume = this._volume.volume),
                this._readOnly("volume"),
                s.default.connectSeries(
                  this.input,
                  this.output,
                  this.context.destination
                ),
                (this.context.master = this);
            }.bind(this)
          );
      }),
        s.default.extend(s.default.Master, s.default.AudioNode),
        (s.default.Master.defaults = { volume: 0, mute: !1 }),
        (s.default.Master.prototype.isMaster = !0),
        Object.defineProperty(s.default.Master.prototype, "mute", {
          get: function () {
            return this._volume.mute;
          },
          set: function (t) {
            this._volume.mute = t;
          },
        }),
        (s.default.Master.prototype.chain = function () {
          this.input.disconnect();
          var t = Array.from(arguments);
          t.unshift(this.input),
            t.push(this.output),
            s.default.connectSeries.apply(void 0, t);
        }),
        (s.default.Master.prototype.dispose = function () {
          s.default.AudioNode.prototype.dispose.call(this),
            this._writable("volume"),
            this._volume.dispose(),
            (this._volume = null),
            (this.volume = null);
        }),
        (s.default.AudioNode.prototype.toMaster = function () {
          return this.connect(this.context.master), this;
        });
      var n = s.default.Master;
      (s.default.Master = new n()),
        s.default.Context.on("init", function (t) {
          t.master && t.master.isMaster
            ? (s.default.Master = t.master)
            : (s.default.Master = new n());
        }),
        s.default.Context.on("close", function (t) {
          t.master && t.master.isMaster && t.master.dispose();
        }),
        (e.default = s.default.Master);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(86), i(47);
      (s.default.FrequencyEnvelope = function () {
        var t = s.default.defaults(
          arguments,
          ["attack", "decay", "sustain", "release"],
          s.default.Envelope
        );
        (t = s.default.defaultArg(t, s.default.FrequencyEnvelope.defaults)),
          s.default.ScaledEnvelope.call(this, t),
          (this._octaves = t.octaves),
          (this.baseFrequency = t.baseFrequency),
          (this.octaves = t.octaves),
          (this.exponent = t.exponent);
      }),
        s.default.extend(s.default.FrequencyEnvelope, s.default.Envelope),
        (s.default.FrequencyEnvelope.defaults = {
          baseFrequency: 200,
          octaves: 4,
          exponent: 1,
        }),
        Object.defineProperty(
          s.default.FrequencyEnvelope.prototype,
          "baseFrequency",
          {
            get: function () {
              return this._scale.min;
            },
            set: function (t) {
              (this._scale.min = this.toFrequency(t)),
                (this.octaves = this._octaves);
            },
          }
        ),
        Object.defineProperty(
          s.default.FrequencyEnvelope.prototype,
          "octaves",
          {
            get: function () {
              return this._octaves;
            },
            set: function (t) {
              (this._octaves = t),
                (this._scale.max = this.baseFrequency * Math.pow(2, t));
            },
          }
        ),
        Object.defineProperty(
          s.default.FrequencyEnvelope.prototype,
          "exponent",
          {
            get: function () {
              return this._exp.value;
            },
            set: function (t) {
              this._exp.value = t;
            },
          }
        ),
        (s.default.FrequencyEnvelope.prototype.dispose = function () {
          return s.default.ScaledEnvelope.prototype.dispose.call(this), this;
        }),
        (e.default = s.default.FrequencyEnvelope);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(26), i(61);
      (s.default.ScaleExp = function (t, e, i) {
        s.default.SignalBase.call(this),
          (this._scale = this.output = new s.default.Scale(t, e)),
          (this._exp = this.input = new s.default.Pow(
            s.default.defaultArg(i, 2)
          )),
          this._exp.connect(this._scale);
      }),
        s.default.extend(s.default.ScaleExp, s.default.SignalBase),
        Object.defineProperty(s.default.ScaleExp.prototype, "exponent", {
          get: function () {
            return this._exp.value;
          },
          set: function (t) {
            this._exp.value = t;
          },
        }),
        Object.defineProperty(s.default.ScaleExp.prototype, "min", {
          get: function () {
            return this._scale.min;
          },
          set: function (t) {
            this._scale.min = t;
          },
        }),
        Object.defineProperty(s.default.ScaleExp.prototype, "max", {
          get: function () {
            return this._scale.max;
          },
          set: function (t) {
            this._scale.max = t;
          },
        }),
        (s.default.ScaleExp.prototype.dispose = function () {
          return (
            s.default.SignalBase.prototype.dispose.call(this),
            this._scale.dispose(),
            (this._scale = null),
            this._exp.dispose(),
            (this._exp = null),
            this
          );
        }),
        (e.default = s.default.ScaleExp);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(14), i(1);
      (s.default.Compressor = function () {
        var t = s.default.defaults(
          arguments,
          ["threshold", "ratio"],
          s.default.Compressor
        );
        s.default.AudioNode.call(this),
          (this._compressor = this.input = this.output = this.context.createDynamicsCompressor()),
          (this.threshold = new s.default.Param({
            param: this._compressor.threshold,
            units: s.default.Type.Decibels,
            convert: !1,
          })),
          (this.attack = new s.default.Param(
            this._compressor.attack,
            s.default.Type.Time
          )),
          (this.release = new s.default.Param(
            this._compressor.release,
            s.default.Type.Time
          )),
          (this.knee = new s.default.Param({
            param: this._compressor.knee,
            units: s.default.Type.Decibels,
            convert: !1,
          })),
          (this.ratio = new s.default.Param({
            param: this._compressor.ratio,
            convert: !1,
          })),
          this._readOnly(["knee", "release", "attack", "ratio", "threshold"]),
          this.set(t);
      }),
        s.default.extend(s.default.Compressor, s.default.AudioNode),
        (s.default.Compressor.defaults = {
          ratio: 12,
          threshold: -24,
          release: 0.25,
          attack: 0.003,
          knee: 30,
        }),
        (s.default.Compressor.prototype.dispose = function () {
          return (
            s.default.AudioNode.prototype.dispose.call(this),
            this._writable(["knee", "release", "attack", "ratio", "threshold"]),
            this._compressor.disconnect(),
            (this._compressor = null),
            this.attack.dispose(),
            (this.attack = null),
            this.release.dispose(),
            (this.release = null),
            this.threshold.dispose(),
            (this.threshold = null),
            this.ratio.dispose(),
            (this.ratio = null),
            this.knee.dispose(),
            (this.knee = null),
            this
          );
        }),
        (e.default = s.default.Compressor);
    },
    function (t, e, i) {
      "use strict";
      var s = i(0);
      i(92);
      if (s.default.supported) {
        !s.default.global.hasOwnProperty("AudioContext") &&
          s.default.global.hasOwnProperty("webkitAudioContext") &&
          (s.default.global.AudioContext = s.default.global.webkitAudioContext),
          AudioContext.prototype.close ||
            (AudioContext.prototype.close = function () {
              return (
                s.default.isFunction(this.suspend) && this.suspend(),
                Promise.resolve()
              );
            }),
          AudioContext.prototype.resume ||
            (AudioContext.prototype.resume = function () {
              var t = this.createBuffer(1, 1, this.sampleRate),
                e = this.createBufferSource();
              return (
                (e.buffer = t),
                e.connect(this.destination),
                e.start(0),
                Promise.resolve()
              );
            }),
          !AudioContext.prototype.createGain &&
            AudioContext.prototype.createGainNode &&
            (AudioContext.prototype.createGain =
              AudioContext.prototype.createGainNode),
          !AudioContext.prototype.createDelay &&
            AudioContext.prototype.createDelayNode &&
            (AudioContext.prototype.createDelay =
              AudioContext.prototype.createDelayNode);
        var n = !1,
          o = new OfflineAudioContext(1, 1, 44100),
          a = new Uint32Array([
            1179011410,
            48,
            1163280727,
            544501094,
            16,
            131073,
            44100,
            176400,
            1048580,
            1635017060,
            8,
            0,
            0,
            0,
            0,
          ]).buffer;
        try {
          var r = o.decodeAudioData(a);
          r && s.default.isFunction(r.then) && (n = !0);
        } catch (t) {
          n = !1;
        }
        n ||
          ((AudioContext.prototype._native_decodeAudioData =
            AudioContext.prototype.decodeAudioData),
          (AudioContext.prototype.decodeAudioData = function (t) {
            return new Promise(
              function (e, i) {
                this._native_decodeAudioData(t, e, i);
              }.bind(this)
            );
          }));
      }
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(63);
      (s.default.TransportTime = function (t, e) {
        if (!(this instanceof s.default.TransportTime))
          return new s.default.TransportTime(t, e);
        s.default.Time.call(this, t, e);
      }),
        s.default.extend(s.default.TransportTime, s.default.Time),
        (s.default.TransportTime.prototype._now = function () {
          return s.default.Transport.seconds;
        }),
        (e.default = s.default.TransportTime);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(62);
      (s.default.Frequency = function (t, e) {
        if (!(this instanceof s.default.Frequency))
          return new s.default.Frequency(t, e);
        s.default.TimeBase.call(this, t, e);
      }),
        s.default.extend(s.default.Frequency, s.default.TimeBase),
        (s.default.Frequency.prototype._expressions = Object.assign(
          {},
          s.default.TimeBase.prototype._expressions,
          {
            midi: {
              regexp: /^(\d+(?:\.\d+)?midi)/,
              method: function (t) {
                return "midi" === this._defaultUnits
                  ? t
                  : s.default.Frequency.mtof(t);
              },
            },
            note: {
              regexp: /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,
              method: function (t, e) {
                var i = n[t.toLowerCase()] + 12 * (parseInt(e) + 1);
                return "midi" === this._defaultUnits
                  ? i
                  : s.default.Frequency.mtof(i);
              },
            },
            tr: {
              regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
              method: function (t, e, i) {
                var s = 1;
                return (
                  t &&
                    "0" !== t &&
                    (s *= this._beatsToUnits(
                      this._getTimeSignature() * parseFloat(t)
                    )),
                  e && "0" !== e && (s *= this._beatsToUnits(parseFloat(e))),
                  i &&
                    "0" !== i &&
                    (s *= this._beatsToUnits(parseFloat(i) / 4)),
                  s
                );
              },
            },
          }
        )),
        (s.default.Frequency.prototype.transpose = function (t) {
          return new this.constructor(
            this.valueOf() * s.default.intervalToFrequencyRatio(t)
          );
        }),
        (s.default.Frequency.prototype.harmonize = function (t) {
          return t.map(
            function (t) {
              return this.transpose(t);
            }.bind(this)
          );
        }),
        (s.default.Frequency.prototype.toMidi = function () {
          return s.default.Frequency.ftom(this.valueOf());
        }),
        (s.default.Frequency.prototype.toNote = function () {
          var t = this.toFrequency(),
            e = Math.log2(t / s.default.Frequency.A4),
            i = Math.round(12 * e) + 57,
            n = Math.floor(i / 12);
          return n < 0 && (i += -12 * n), o[i % 12] + n.toString();
        }),
        (s.default.Frequency.prototype.toSeconds = function () {
          return 1 / s.default.TimeBase.prototype.toSeconds.call(this);
        }),
        (s.default.Frequency.prototype.toFrequency = function () {
          return s.default.TimeBase.prototype.toFrequency.call(this);
        }),
        (s.default.Frequency.prototype.toTicks = function () {
          var t = this._beatsToUnits(1),
            e = this.valueOf() / t;
          return Math.floor(e * s.default.Transport.PPQ);
        }),
        (s.default.Frequency.prototype._noArg = function () {
          return 0;
        }),
        (s.default.Frequency.prototype._frequencyToUnits = function (t) {
          return t;
        }),
        (s.default.Frequency.prototype._ticksToUnits = function (t) {
          return (
            1 /
            ((60 * t) /
              (s.default.Transport.bpm.value * s.default.Transport.PPQ))
          );
        }),
        (s.default.Frequency.prototype._beatsToUnits = function (t) {
          return 1 / s.default.TimeBase.prototype._beatsToUnits.call(this, t);
        }),
        (s.default.Frequency.prototype._secondsToUnits = function (t) {
          return 1 / t;
        }),
        (s.default.Frequency.prototype._defaultUnits = "hz");
      var n = {
          cbb: -2,
          cb: -1,
          c: 0,
          "c#": 1,
          cx: 2,
          dbb: 0,
          db: 1,
          d: 2,
          "d#": 3,
          dx: 4,
          ebb: 2,
          eb: 3,
          e: 4,
          "e#": 5,
          ex: 6,
          fbb: 3,
          fb: 4,
          f: 5,
          "f#": 6,
          fx: 7,
          gbb: 5,
          gb: 6,
          g: 7,
          "g#": 8,
          gx: 9,
          abb: 7,
          ab: 8,
          a: 9,
          "a#": 10,
          ax: 11,
          bbb: 9,
          bb: 10,
          b: 11,
          "b#": 12,
          bx: 13,
        },
        o = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
      (s.default.Frequency.A4 = 440),
        (s.default.Frequency.mtof = function (t) {
          return s.default.Frequency.A4 * Math.pow(2, (t - 69) / 12);
        }),
        (s.default.Frequency.ftom = function (t) {
          return 69 + Math.round(12 * Math.log2(t / s.default.Frequency.A4));
        }),
        (e.default = s.default.Frequency);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(2), i(61), i(4), i(1);
      (s.default.Envelope = function () {
        var t = s.default.defaults(
          arguments,
          ["attack", "decay", "sustain", "release"],
          s.default.Envelope
        );
        s.default.AudioNode.call(this),
          (this.attack = t.attack),
          (this.decay = t.decay),
          (this.sustain = t.sustain),
          (this.release = t.release),
          (this._attackCurve = "linear"),
          (this._releaseCurve = "exponential"),
          (this._sig = this.output = new s.default.Signal(0)),
          (this.attackCurve = t.attackCurve),
          (this.releaseCurve = t.releaseCurve),
          (this.decayCurve = t.decayCurve);
      }),
        s.default.extend(s.default.Envelope, s.default.AudioNode),
        (s.default.Envelope.defaults = {
          attack: 0.01,
          decay: 0.1,
          sustain: 0.5,
          release: 1,
          attackCurve: "linear",
          decayCurve: "exponential",
          releaseCurve: "exponential",
        }),
        Object.defineProperty(s.default.Envelope.prototype, "value", {
          get: function () {
            return this.getValueAtTime(this.now());
          },
        }),
        (s.default.Envelope.prototype._getCurve = function (t, e) {
          if (s.default.isString(t)) return t;
          if (s.default.isArray(t))
            for (var i in s.default.Envelope.Type)
              if (s.default.Envelope.Type[i][e] === t) return i;
        }),
        (s.default.Envelope.prototype._setCurve = function (t, e, i) {
          if (s.default.Envelope.Type.hasOwnProperty(i)) {
            var n = s.default.Envelope.Type[i];
            s.default.isObject(n) ? (this[t] = n[e]) : (this[t] = n);
          } else {
            if (!s.default.isArray(i))
              throw new Error("Tone.Envelope: invalid curve: " + i);
            this[t] = i;
          }
        }),
        Object.defineProperty(s.default.Envelope.prototype, "attackCurve", {
          get: function () {
            return this._getCurve(this._attackCurve, "In");
          },
          set: function (t) {
            this._setCurve("_attackCurve", "In", t);
          },
        }),
        Object.defineProperty(s.default.Envelope.prototype, "releaseCurve", {
          get: function () {
            return this._getCurve(this._releaseCurve, "Out");
          },
          set: function (t) {
            this._setCurve("_releaseCurve", "Out", t);
          },
        }),
        Object.defineProperty(s.default.Envelope.prototype, "decayCurve", {
          get: function () {
            return this._decayCurve;
          },
          set: function (t) {
            if (!["linear", "exponential"].includes(t))
              throw new Error("Tone.Envelope: invalid curve: " + t);
            this._decayCurve = t;
          },
        }),
        (s.default.Envelope.prototype.triggerAttack = function (t, e) {
          this.log("triggerAttack", t, e), (t = this.toSeconds(t));
          var i = this.toSeconds(this.attack),
            n = this.toSeconds(this.decay);
          e = s.default.defaultArg(e, 1);
          var o = this.getValueAtTime(t);
          o > 0 && (i = (1 - o) / (1 / i));
          if (0 === i) this._sig.setValueAtTime(e, t);
          else if ("linear" === this._attackCurve)
            this._sig.linearRampTo(e, i, t);
          else if ("exponential" === this._attackCurve)
            this._sig.targetRampTo(e, i, t);
          else if (i > 0) {
            this._sig.cancelAndHoldAtTime(t);
            for (var a = this._attackCurve, r = 1; r < a.length; r++)
              if (a[r - 1] <= o && o <= a[r]) {
                (a = this._attackCurve.slice(r))[0] = o;
                break;
              }
            this._sig.setValueCurveAtTime(a, t, i, e);
          }
          if (n) {
            var l = e * this.sustain,
              u = t + i;
            this.log("decay", u),
              "linear" === this._decayCurve
                ? this._sig.linearRampTo(l, n, u + this.sampleTime)
                : "exponential" === this._decayCurve &&
                  this._sig.exponentialApproachValueAtTime(l, u, n);
          }
          return this;
        }),
        (s.default.Envelope.prototype.triggerRelease = function (t) {
          this.log("triggerRelease", t), (t = this.toSeconds(t));
          var e = this.getValueAtTime(t);
          if (e > 0) {
            var i = this.toSeconds(this.release);
            if ("linear" === this._releaseCurve)
              this._sig.linearRampTo(0, i, t);
            else if ("exponential" === this._releaseCurve)
              this._sig.targetRampTo(0, i, t);
            else {
              var n = this._releaseCurve;
              s.default.isArray(n) &&
                (this._sig.cancelAndHoldAtTime(t),
                this._sig.setValueCurveAtTime(n, t, i, e));
            }
          }
          return this;
        }),
        (s.default.Envelope.prototype.getValueAtTime = function (t) {
          return this._sig.getValueAtTime(t);
        }),
        (s.default.Envelope.prototype.triggerAttackRelease = function (
          t,
          e,
          i
        ) {
          return (
            (e = this.toSeconds(e)),
            this.triggerAttack(e, i),
            this.triggerRelease(e + this.toSeconds(t)),
            this
          );
        }),
        (s.default.Envelope.prototype.cancel = function (t) {
          return this._sig.cancelScheduledValues(t), this;
        }),
        (s.default.Envelope.prototype.connect =
          s.default.SignalBase.prototype.connect),
        (function () {
          var t,
            e,
            i = [];
          for (t = 0; t < 128; t++) i[t] = Math.sin((t / 127) * (Math.PI / 2));
          var n = [];
          for (t = 0; t < 127; t++) {
            e = t / 127;
            var o = Math.sin(e * (2 * Math.PI) * 6.4 - Math.PI / 2) + 1;
            n[t] = o / 10 + 0.83 * e;
          }
          n[127] = 1;
          var a = [];
          for (t = 0; t < 128; t++) a[t] = Math.ceil((t / 127) * 5) / 5;
          var r = [];
          for (t = 0; t < 128; t++)
            (e = t / 127), (r[t] = 0.5 * (1 - Math.cos(Math.PI * e)));
          var l,
            u = [];
          for (t = 0; t < 128; t++) {
            e = t / 127;
            var d = 4 * Math.pow(e, 3) + 0.2,
              f = Math.cos(d * Math.PI * 2 * e);
            u[t] = Math.abs(f * (1 - e));
          }
          function h(t) {
            for (var e = new Array(t.length), i = 0; i < t.length; i++)
              e[i] = 1 - t[i];
            return e;
          }
          s.default.Envelope.Type = {
            linear: "linear",
            exponential: "exponential",
            bounce: { In: h(u), Out: u },
            cosine: { In: i, Out: ((l = i), l.slice(0).reverse()) },
            step: { In: a, Out: h(a) },
            ripple: { In: n, Out: h(n) },
            sine: { In: r, Out: h(r) },
          };
        })(),
        (s.default.Envelope.prototype.dispose = function () {
          return (
            s.default.AudioNode.prototype.dispose.call(this),
            this._sig.dispose(),
            (this._sig = null),
            (this._attackCurve = null),
            (this._releaseCurve = null),
            this
          );
        }),
        (e.default = s.default.Envelope);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(23), i(10), i(19), i(7), i(28), i(3), i(2), i(20);
      if (
        s.default.supported &&
        !s.default.global.AudioContext.prototype.createStereoPanner
      ) {
        var n = function (t) {
          (this.context = t),
            (this.pan = new s.default.Signal(0, s.default.Type.AudioRange));
          var e = new s.default.WaveShaper(function (t) {
              return s.default.equalPowerScale((t + 1) / 2);
            }, 4096),
            i = new s.default.WaveShaper(function (t) {
              return s.default.equalPowerScale(1 - (t + 1) / 2);
            }, 4096),
            n = new s.default.Gain(),
            o = new s.default.Gain(),
            a = (this.input = new s.default.Split());
          (a._splitter.channelCountMode = "explicit"),
            new s.default.Zero().fan(e, i);
          var r = (this.output = new s.default.Merge());
          a.left.chain(n, r.left),
            a.right.chain(o, r.right),
            this.pan.chain(i, n.gain),
            this.pan.chain(e, o.gain);
        };
        (n.prototype.disconnect = function () {
          this.output.disconnect.apply(this.output, arguments);
        }),
          (n.prototype.connect = function () {
            this.output.connect.apply(this.output, arguments);
          }),
          (AudioContext.prototype.createStereoPanner = function () {
            return new n(this);
          }),
          (s.default.Context.prototype.createStereoPanner = function () {
            return new n(this);
          });
      }
      i(22), i(1);
      (s.default.Panner = function () {
        var t = s.default.defaults(arguments, ["pan"], s.default.Panner);
        s.default.AudioNode.call(this),
          (this._panner = this.input = this.output = this.context.createStereoPanner()),
          (this.pan = this._panner.pan),
          (this.pan.value = t.pan),
          this._readOnly("pan");
      }),
        s.default.extend(s.default.Panner, s.default.AudioNode),
        (s.default.Panner.defaults = { pan: 0 }),
        (s.default.Panner.prototype.dispose = function () {
          return (
            s.default.AudioNode.prototype.dispose.call(this),
            this._writable("pan"),
            this._panner.disconnect(),
            (this._panner = null),
            (this.pan = null),
            this
          );
        });
      e.default = s.default.Panner;
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(6), i(17), i(5), i(3);
      (s.default.FMOscillator = function () {
        var t = s.default.defaults(
          arguments,
          ["frequency", "type", "modulationType"],
          s.default.FMOscillator
        );
        s.default.Source.call(this, t),
          (this._carrier = new s.default.Oscillator(t.frequency, t.type)),
          (this.frequency = new s.default.Signal(
            t.frequency,
            s.default.Type.Frequency
          )),
          (this.detune = this._carrier.detune),
          (this.detune.value = t.detune),
          (this.modulationIndex = new s.default.Multiply(t.modulationIndex)),
          (this.modulationIndex.units = s.default.Type.Positive),
          (this._modulator = new s.default.Oscillator(
            t.frequency,
            t.modulationType
          )),
          (this.harmonicity = new s.default.Multiply(t.harmonicity)),
          (this.harmonicity.units = s.default.Type.Positive),
          (this._modulationNode = new s.default.Gain(0)),
          this.frequency.connect(this._carrier.frequency),
          this.frequency.chain(this.harmonicity, this._modulator.frequency),
          this.frequency.chain(this.modulationIndex, this._modulationNode),
          this._modulator.connect(this._modulationNode.gain),
          this._modulationNode.connect(this._carrier.frequency),
          this._carrier.connect(this.output),
          this.detune.connect(this._modulator.detune),
          (this.phase = t.phase),
          this._readOnly([
            "modulationIndex",
            "frequency",
            "detune",
            "harmonicity",
          ]);
      }),
        s.default.extend(s.default.FMOscillator, s.default.Source),
        (s.default.FMOscillator.defaults = {
          frequency: 440,
          detune: 0,
          phase: 0,
          type: "sine",
          modulationIndex: 2,
          modulationType: "square",
          harmonicity: 1,
        }),
        (s.default.FMOscillator.prototype._start = function (t) {
          this._modulator.start(t), this._carrier.start(t);
        }),
        (s.default.FMOscillator.prototype._stop = function (t) {
          this._modulator.stop(t), this._carrier.stop(t);
        }),
        (s.default.FMOscillator.prototype.restart = function (t) {
          this._modulator.restart(t), this._carrier.restart(t);
        }),
        Object.defineProperty(s.default.FMOscillator.prototype, "type", {
          get: function () {
            return this._carrier.type;
          },
          set: function (t) {
            this._carrier.type = t;
          },
        }),
        Object.defineProperty(s.default.FMOscillator.prototype, "baseType", {
          get: function () {
            return this._carrier.baseType;
          },
          set: function (t) {
            this._carrier.baseType = t;
          },
        }),
        Object.defineProperty(
          s.default.FMOscillator.prototype,
          "partialCount",
          {
            get: function () {
              return this._carrier.partialCount;
            },
            set: function (t) {
              this._carrier.partialCount = t;
            },
          }
        ),
        Object.defineProperty(
          s.default.FMOscillator.prototype,
          "modulationType",
          {
            get: function () {
              return this._modulator.type;
            },
            set: function (t) {
              this._modulator.type = t;
            },
          }
        ),
        Object.defineProperty(s.default.FMOscillator.prototype, "phase", {
          get: function () {
            return this._carrier.phase;
          },
          set: function (t) {
            (this._carrier.phase = t), (this._modulator.phase = t);
          },
        }),
        Object.defineProperty(s.default.FMOscillator.prototype, "partials", {
          get: function () {
            return this._carrier.partials;
          },
          set: function (t) {
            this._carrier.partials = t;
          },
        }),
        (s.default.FMOscillator.prototype.dispose = function () {
          return (
            s.default.Source.prototype.dispose.call(this),
            this._writable([
              "modulationIndex",
              "frequency",
              "detune",
              "harmonicity",
            ]),
            this.frequency.dispose(),
            (this.frequency = null),
            (this.detune = null),
            this.harmonicity.dispose(),
            (this.harmonicity = null),
            this._carrier.dispose(),
            (this._carrier = null),
            this._modulator.dispose(),
            (this._modulator = null),
            this._modulationNode.dispose(),
            (this._modulationNode = null),
            this.modulationIndex.dispose(),
            (this.modulationIndex = null),
            this
          );
        }),
        (e.default = s.default.FMOscillator);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(6), i(17), i(2), i(7), i(3);
      (s.default.PulseOscillator = function () {
        var t = s.default.defaults(
          arguments,
          ["frequency", "width"],
          s.default.Oscillator
        );
        s.default.Source.call(this, t),
          (this.width = new s.default.Signal(
            t.width,
            s.default.Type.NormalRange
          )),
          (this._widthGate = new s.default.Gain(0)),
          (this._sawtooth = new s.default.Oscillator({
            frequency: t.frequency,
            detune: t.detune,
            type: "sawtooth",
            phase: t.phase,
          })),
          (this.frequency = this._sawtooth.frequency),
          (this.detune = this._sawtooth.detune),
          (this._thresh = new s.default.WaveShaper(function (t) {
            return t < 0 ? -1 : 1;
          })),
          this._sawtooth.chain(this._thresh, this.output),
          this.width.chain(this._widthGate, this._thresh),
          this._readOnly(["width", "frequency", "detune"]);
      }),
        s.default.extend(s.default.PulseOscillator, s.default.Source),
        (s.default.PulseOscillator.defaults = {
          frequency: 440,
          detune: 0,
          phase: 0,
          width: 0.2,
        }),
        (s.default.PulseOscillator.prototype._start = function (t) {
          (t = this.toSeconds(t)),
            this._sawtooth.start(t),
            this._widthGate.gain.setValueAtTime(1, t);
        }),
        (s.default.PulseOscillator.prototype._stop = function (t) {
          (t = this.toSeconds(t)),
            this._sawtooth.stop(t),
            this._widthGate.gain.setValueAtTime(0, t);
        }),
        (s.default.PulseOscillator.prototype.restart = function (t) {
          this._sawtooth.restart(t),
            this._widthGate.gain.cancelScheduledValues(t),
            this._widthGate.gain.setValueAtTime(1, t);
        }),
        Object.defineProperty(s.default.PulseOscillator.prototype, "phase", {
          get: function () {
            return this._sawtooth.phase;
          },
          set: function (t) {
            this._sawtooth.phase = t;
          },
        }),
        Object.defineProperty(s.default.PulseOscillator.prototype, "type", {
          get: function () {
            return "pulse";
          },
        }),
        Object.defineProperty(s.default.PulseOscillator.prototype, "baseType", {
          get: function () {
            return "pulse";
          },
        }),
        Object.defineProperty(s.default.PulseOscillator.prototype, "partials", {
          get: function () {
            return [];
          },
        }),
        (s.default.PulseOscillator.prototype.dispose = function () {
          return (
            s.default.Source.prototype.dispose.call(this),
            this._sawtooth.dispose(),
            (this._sawtooth = null),
            this._writable(["width", "frequency", "detune"]),
            this.width.dispose(),
            (this.width = null),
            this._widthGate.dispose(),
            (this._widthGate = null),
            this._thresh.dispose(),
            (this._thresh = null),
            (this.frequency = null),
            (this.detune = null),
            this
          );
        }),
        (e.default = s.default.PulseOscillator);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(16), i(4), i(34);
      (s.default.Event = function () {
        var t = s.default.defaults(
          arguments,
          ["callback", "value"],
          s.default.Event
        );
        s.default.call(this),
          (this._loop = t.loop),
          (this.callback = t.callback),
          (this.value = t.value),
          (this._loopStart = this.toTicks(t.loopStart)),
          (this._loopEnd = this.toTicks(t.loopEnd)),
          (this._state = new s.default.TimelineState(s.default.State.Stopped)),
          (this._playbackRate = 1),
          (this._startOffset = 0),
          (this._probability = t.probability),
          (this._humanize = t.humanize),
          (this.mute = t.mute),
          (this.playbackRate = t.playbackRate);
      }),
        s.default.extend(s.default.Event),
        (s.default.Event.defaults = {
          callback: s.default.noOp,
          loop: !1,
          loopEnd: "1m",
          loopStart: 0,
          playbackRate: 1,
          value: null,
          probability: 1,
          mute: !1,
          humanize: !1,
        }),
        (s.default.Event.prototype._rescheduleEvents = function (t) {
          return (
            (t = s.default.defaultArg(t, -1)),
            this._state.forEachFrom(
              t,
              function (t) {
                var e;
                if (t.state === s.default.State.Started) {
                  s.default.isDefined(t.id) && s.default.Transport.clear(t.id);
                  var i =
                    t.time + Math.round(this.startOffset / this._playbackRate);
                  if (
                    !0 === this._loop ||
                    (s.default.isNumber(this._loop) && this._loop > 1)
                  ) {
                    (e = 1 / 0),
                      s.default.isNumber(this._loop) &&
                        (e = this._loop * this._getLoopDuration());
                    var n = this._state.getAfter(i);
                    null !== n && (e = Math.min(e, n.time - i)),
                      e !== 1 / 0 &&
                        (this._state.setStateAtTime(
                          s.default.State.Stopped,
                          i + e + 1
                        ),
                        (e = s.default.Ticks(e)));
                    var o = s.default.Ticks(this._getLoopDuration());
                    t.id = s.default.Transport.scheduleRepeat(
                      this._tick.bind(this),
                      o,
                      s.default.Ticks(i),
                      e
                    );
                  } else
                    t.id = s.default.Transport.schedule(
                      this._tick.bind(this),
                      s.default.Ticks(i)
                    );
                }
              }.bind(this)
            ),
            this
          );
        }),
        Object.defineProperty(s.default.Event.prototype, "state", {
          get: function () {
            return this._state.getValueAtTime(s.default.Transport.ticks);
          },
        }),
        Object.defineProperty(s.default.Event.prototype, "startOffset", {
          get: function () {
            return this._startOffset;
          },
          set: function (t) {
            this._startOffset = t;
          },
        }),
        Object.defineProperty(s.default.Event.prototype, "probability", {
          get: function () {
            return this._probability;
          },
          set: function (t) {
            this._probability = t;
          },
        }),
        Object.defineProperty(s.default.Event.prototype, "humanize", {
          get: function () {
            return this._humanize;
          },
          set: function (t) {
            this._humanize = t;
          },
        }),
        (s.default.Event.prototype.start = function (t) {
          return (
            (t = this.toTicks(t)),
            this._state.getValueAtTime(t) === s.default.State.Stopped &&
              (this._state.add({
                state: s.default.State.Started,
                time: t,
                id: void 0,
              }),
              this._rescheduleEvents(t)),
            this
          );
        }),
        (s.default.Event.prototype.stop = function (t) {
          if (
            (this.cancel(t),
            (t = this.toTicks(t)),
            this._state.getValueAtTime(t) === s.default.State.Started)
          ) {
            this._state.setStateAtTime(s.default.State.Stopped, t);
            var e = this._state.getBefore(t),
              i = t;
            null !== e && (i = e.time), this._rescheduleEvents(i);
          }
          return this;
        }),
        (s.default.Event.prototype.cancel = function (t) {
          return (
            (t = s.default.defaultArg(t, -1 / 0)),
            (t = this.toTicks(t)),
            this._state.forEachFrom(t, function (t) {
              s.default.Transport.clear(t.id);
            }),
            this._state.cancel(t),
            this
          );
        }),
        (s.default.Event.prototype._tick = function (t) {
          var e = s.default.Transport.getTicksAtTime(t);
          if (
            !this.mute &&
            this._state.getValueAtTime(e) === s.default.State.Started
          ) {
            if (this.probability < 1 && Math.random() > this.probability)
              return;
            if (this.humanize) {
              var i = 0.02;
              s.default.isBoolean(this.humanize) ||
                (i = this.toSeconds(this.humanize)),
                (t += (2 * Math.random() - 1) * i);
            }
            this.callback(t, this.value);
          }
        }),
        (s.default.Event.prototype._getLoopDuration = function () {
          return Math.round(
            (this._loopEnd - this._loopStart) / this._playbackRate
          );
        }),
        Object.defineProperty(s.default.Event.prototype, "loop", {
          get: function () {
            return this._loop;
          },
          set: function (t) {
            (this._loop = t), this._rescheduleEvents();
          },
        }),
        Object.defineProperty(s.default.Event.prototype, "playbackRate", {
          get: function () {
            return this._playbackRate;
          },
          set: function (t) {
            (this._playbackRate = t), this._rescheduleEvents();
          },
        }),
        Object.defineProperty(s.default.Event.prototype, "loopEnd", {
          get: function () {
            return s.default.Ticks(this._loopEnd).toSeconds();
          },
          set: function (t) {
            (this._loopEnd = this.toTicks(t)),
              this._loop && this._rescheduleEvents();
          },
        }),
        Object.defineProperty(s.default.Event.prototype, "loopStart", {
          get: function () {
            return s.default.Ticks(this._loopStart).toSeconds();
          },
          set: function (t) {
            (this._loopStart = this.toTicks(t)),
              this._loop && this._rescheduleEvents();
          },
        }),
        Object.defineProperty(s.default.Event.prototype, "progress", {
          get: function () {
            if (this._loop) {
              var t = s.default.Transport.ticks,
                e = this._state.get(t);
              if (null !== e && e.state === s.default.State.Started) {
                var i = this._getLoopDuration();
                return ((t - e.time) % i) / i;
              }
              return 0;
            }
            return 0;
          },
        }),
        (s.default.Event.prototype.dispose = function () {
          this.cancel(),
            this._state.dispose(),
            (this._state = null),
            (this.callback = null),
            (this.value = null);
        }),
        (e.default = s.default.Event);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(2), i(13), i(29), i(10), i(3), i(1);
      (s.default.MidSideMerge = function () {
        s.default.AudioNode.call(this),
          this.createInsOuts(2, 0),
          (this.mid = this.input[0] = new s.default.Gain()),
          (this._left = new s.default.Add()),
          (this._timesTwoLeft = new s.default.Multiply(Math.SQRT1_2)),
          (this.side = this.input[1] = new s.default.Gain()),
          (this._right = new s.default.Subtract()),
          (this._timesTwoRight = new s.default.Multiply(Math.SQRT1_2)),
          (this._merge = this.output = new s.default.Merge()),
          this.mid.connect(this._left, 0, 0),
          this.side.connect(this._left, 0, 1),
          this.mid.connect(this._right, 0, 0),
          this.side.connect(this._right, 0, 1),
          this._left.connect(this._timesTwoLeft),
          this._right.connect(this._timesTwoRight),
          this._timesTwoLeft.connect(this._merge, 0, 0),
          this._timesTwoRight.connect(this._merge, 0, 1);
      }),
        s.default.extend(s.default.MidSideMerge, s.default.AudioNode),
        (s.default.MidSideMerge.prototype.dispose = function () {
          return (
            s.default.AudioNode.prototype.dispose.call(this),
            this.mid.dispose(),
            (this.mid = null),
            this.side.dispose(),
            (this.side = null),
            this._left.dispose(),
            (this._left = null),
            this._timesTwoLeft.dispose(),
            (this._timesTwoLeft = null),
            this._right.dispose(),
            (this._right = null),
            this._timesTwoRight.dispose(),
            (this._timesTwoRight = null),
            this._merge.dispose(),
            (this._merge = null),
            this
          );
        }),
        (e.default = s.default.MidSideMerge);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(29), i(13), i(2), i(19), i(1);
      (s.default.MidSideSplit = function () {
        s.default.AudioNode.call(this),
          this.createInsOuts(0, 2),
          (this._split = this.input = new s.default.Split()),
          (this._midAdd = new s.default.Add()),
          (this.mid = this.output[0] = new s.default.Multiply(Math.SQRT1_2)),
          (this._sideSubtract = new s.default.Subtract()),
          (this.side = this.output[1] = new s.default.Multiply(Math.SQRT1_2)),
          this._split.connect(this._midAdd, 0, 0),
          this._split.connect(this._midAdd, 1, 1),
          this._split.connect(this._sideSubtract, 0, 0),
          this._split.connect(this._sideSubtract, 1, 1),
          this._midAdd.connect(this.mid),
          this._sideSubtract.connect(this.side);
      }),
        s.default.extend(s.default.MidSideSplit, s.default.AudioNode),
        (s.default.MidSideSplit.prototype.dispose = function () {
          return (
            s.default.AudioNode.prototype.dispose.call(this),
            this.mid.dispose(),
            (this.mid = null),
            this.side.dispose(),
            (this.side = null),
            this._midAdd.dispose(),
            (this._midAdd = null),
            this._sideSubtract.dispose(),
            (this._sideSubtract = null),
            this._split.dispose(),
            (this._split = null),
            this
          );
        }),
        (e.default = s.default.MidSideSplit);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(2), i(9), i(1), i(59);
      (s.default.LowpassCombFilter = function () {
        var t = s.default.defaults(
          arguments,
          ["delayTime", "resonance", "dampening"],
          s.default.LowpassCombFilter
        );
        s.default.AudioNode.call(this),
          (this._combFilter = this.output = new s.default.FeedbackCombFilter(
            t.delayTime,
            t.resonance
          )),
          (this.delayTime = this._combFilter.delayTime),
          (this._lowpass = this.input = new s.default.Filter({
            frequency: t.dampening,
            type: "lowpass",
            Q: 0,
            rolloff: -12,
          })),
          (this.dampening = this._lowpass.frequency),
          (this.resonance = this._combFilter.resonance),
          this._lowpass.connect(this._combFilter),
          this._readOnly(["dampening", "resonance", "delayTime"]);
      }),
        s.default.extend(s.default.LowpassCombFilter, s.default.AudioNode),
        (s.default.LowpassCombFilter.defaults = {
          delayTime: 0.1,
          resonance: 0.5,
          dampening: 3e3,
        }),
        (s.default.LowpassCombFilter.prototype.dispose = function () {
          return (
            s.default.AudioNode.prototype.dispose.call(this),
            this._writable(["dampening", "resonance", "delayTime"]),
            this._combFilter.dispose(),
            (this._combFilter = null),
            (this.resonance = null),
            (this.delayTime = null),
            this._lowpass.dispose(),
            (this._lowpass = null),
            (this.dampening = null),
            this
          );
        }),
        (e.default = s.default.LowpassCombFilter);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(45);
      (s.default.Ticks = function (t, e) {
        if (!(this instanceof s.default.Ticks))
          return new s.default.Ticks(t, e);
        s.default.TransportTime.call(this, t, e);
      }),
        s.default.extend(s.default.Ticks, s.default.TransportTime),
        (s.default.Ticks.prototype._defaultUnits = "i"),
        (s.default.Ticks.prototype._now = function () {
          return s.default.Transport.ticks;
        }),
        (s.default.Ticks.prototype._beatsToUnits = function (t) {
          return this._getPPQ() * t;
        }),
        (s.default.Ticks.prototype._secondsToUnits = function (t) {
          return Math.floor((t / (60 / this._getBpm())) * this._getPPQ());
        }),
        (s.default.Ticks.prototype._ticksToUnits = function (t) {
          return t;
        }),
        (s.default.Ticks.prototype.toTicks = function () {
          return this.valueOf();
        }),
        (s.default.Ticks.prototype.toSeconds = function () {
          return (this.valueOf() / this._getPPQ()) * (60 / this._getBpm());
        }),
        (e.default = s.default.Ticks);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(55);
      (s.default.TransportEvent = function (t, e) {
        (e = s.default.defaultArg(e, s.default.TransportEvent.defaults)),
          s.default.call(this),
          (this.Transport = t),
          (this.id = s.default.TransportEvent._eventId++),
          (this.time = s.default.Ticks(e.time)),
          (this.callback = e.callback),
          (this._once = e.once);
      }),
        s.default.extend(s.default.TransportEvent),
        (s.default.TransportEvent.defaults = {
          once: !1,
          callback: s.default.noOp,
        }),
        (s.default.TransportEvent._eventId = 0),
        (s.default.TransportEvent.prototype.invoke = function (t) {
          this.callback &&
            (this.callback(t),
            this._once && this.Transport && this.Transport.clear(this.id));
        }),
        (s.default.TransportEvent.prototype.dispose = function () {
          return (
            s.default.prototype.dispose.call(this),
            (this.Transport = null),
            (this.callback = null),
            (this.time = null),
            this
          );
        }),
        (e.default = s.default.TransportEvent);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(82), i(34), i(24), i(14);
      (s.default.TickSource = function () {
        var t = s.default.defaults(
          arguments,
          ["frequency"],
          s.default.TickSource
        );
        (this.frequency = new s.default.TickSignal(t.frequency)),
          this._readOnly("frequency"),
          (this._state = new s.default.TimelineState(s.default.State.Stopped)),
          this._state.setStateAtTime(s.default.State.Stopped, 0),
          (this._tickOffset = new s.default.Timeline()),
          this.setTicksAtTime(0, 0);
      }),
        s.default.extend(s.default.TickSource),
        (s.default.TickSource.defaults = { frequency: 1 }),
        Object.defineProperty(s.default.TickSource.prototype, "state", {
          get: function () {
            return this._state.getValueAtTime(this.now());
          },
        }),
        (s.default.TickSource.prototype.start = function (t, e) {
          return (
            (t = this.toSeconds(t)),
            this._state.getValueAtTime(t) !== s.default.State.Started &&
              (this._state.setStateAtTime(s.default.State.Started, t),
              s.default.isDefined(e) && this.setTicksAtTime(e, t)),
            this
          );
        }),
        (s.default.TickSource.prototype.stop = function (t) {
          if (
            ((t = this.toSeconds(t)),
            this._state.getValueAtTime(t) === s.default.State.Stopped)
          ) {
            var e = this._state.get(t);
            e.time > 0 &&
              (this._tickOffset.cancel(e.time), this._state.cancel(e.time));
          }
          return (
            this._state.cancel(t),
            this._state.setStateAtTime(s.default.State.Stopped, t),
            this.setTicksAtTime(0, t),
            this
          );
        }),
        (s.default.TickSource.prototype.pause = function (t) {
          return (
            (t = this.toSeconds(t)),
            this._state.getValueAtTime(t) === s.default.State.Started &&
              this._state.setStateAtTime(s.default.State.Paused, t),
            this
          );
        }),
        (s.default.TickSource.prototype.cancel = function (t) {
          return (
            (t = this.toSeconds(t)),
            this._state.cancel(t),
            this._tickOffset.cancel(t),
            this
          );
        }),
        (s.default.TickSource.prototype.getTicksAtTime = function (t) {
          t = this.toSeconds(t);
          var e = this._state.getLastState(s.default.State.Stopped, t),
            i = { state: s.default.State.Paused, time: t };
          this._state.add(i);
          var n = e,
            o = 0;
          return (
            this._state.forEachBetween(
              e.time,
              t + this.sampleTime,
              function (t) {
                var e = n.time,
                  i = this._tickOffset.get(t.time);
                i.time >= n.time && ((o = i.ticks), (e = i.time)),
                  n.state === s.default.State.Started &&
                    t.state !== s.default.State.Started &&
                    (o +=
                      this.frequency.getTicksAtTime(t.time) -
                      this.frequency.getTicksAtTime(e)),
                  (n = t);
              }.bind(this)
            ),
            this._state.remove(i),
            o
          );
        }),
        Object.defineProperty(s.default.TickSource.prototype, "ticks", {
          get: function () {
            return this.getTicksAtTime(this.now());
          },
          set: function (t) {
            this.setTicksAtTime(t, this.now());
          },
        }),
        Object.defineProperty(s.default.TickSource.prototype, "seconds", {
          get: function () {
            return this.getSecondsAtTime(this.now());
          },
          set: function (t) {
            var e = this.now(),
              i = this.frequency.timeToTicks(t, e);
            this.setTicksAtTime(i, e);
          },
        }),
        (s.default.TickSource.prototype.getSecondsAtTime = function (t) {
          t = this.toSeconds(t);
          var e = this._state.getLastState(s.default.State.Stopped, t),
            i = { state: s.default.State.Paused, time: t };
          this._state.add(i);
          var n = e,
            o = 0;
          return (
            this._state.forEachBetween(
              e.time,
              t + this.sampleTime,
              function (t) {
                var e = n.time,
                  i = this._tickOffset.get(t.time);
                i.time >= n.time && ((o = i.seconds), (e = i.time)),
                  n.state === s.default.State.Started &&
                    t.state !== s.default.State.Started &&
                    (o += t.time - e),
                  (n = t);
              }.bind(this)
            ),
            this._state.remove(i),
            o
          );
        }),
        (s.default.TickSource.prototype.setTicksAtTime = function (t, e) {
          return (
            (e = this.toSeconds(e)),
            this._tickOffset.cancel(e),
            this._tickOffset.add({
              time: e,
              ticks: t,
              seconds: this.frequency.getDurationOfTicks(t, e),
            }),
            this
          );
        }),
        (s.default.TickSource.prototype.getStateAtTime = function (t) {
          return (t = this.toSeconds(t)), this._state.getValueAtTime(t);
        }),
        (s.default.TickSource.prototype.getTimeOfTick = function (t, e) {
          e = s.default.defaultArg(e, this.now());
          var i = this._tickOffset.get(e),
            n = this._state.get(e),
            o = Math.max(i.time, n.time),
            a = this.frequency.getTicksAtTime(o) + t - i.ticks;
          return this.frequency.getTimeOfTick(a);
        }),
        (s.default.TickSource.prototype.forEachTickBetween = function (
          t,
          e,
          i
        ) {
          var n = this._state.get(t);
          if (
            (this._state.forEachBetween(
              t,
              e,
              function (e) {
                n.state === s.default.State.Started &&
                  e.state !== s.default.State.Started &&
                  this.forEachTickBetween(
                    Math.max(n.time, t),
                    e.time - this.sampleTime,
                    i
                  ),
                  (n = e);
              }.bind(this)
            ),
            (t = Math.max(n.time, t)),
            n.state === s.default.State.Started && this._state)
          ) {
            var o = this.frequency.getTicksAtTime(t),
              a = (o - this.frequency.getTicksAtTime(n.time)) % 1;
            0 !== a && (a = 1 - a);
            for (
              var r = this.frequency.getTimeOfTick(o + a), l = null;
              r < e && this._state;

            ) {
              try {
                i(r, Math.round(this.getTicksAtTime(r)));
              } catch (t) {
                l = t;
                break;
              }
              this._state && (r += this.frequency.getDurationOfTicks(1, r));
            }
          }
          if (l) throw l;
          return this;
        }),
        (s.default.TickSource.prototype.dispose = function () {
          return (
            s.default.Param.prototype.dispose.call(this),
            this._state.dispose(),
            (this._state = null),
            this._tickOffset.dispose(),
            (this._tickOffset = null),
            this._writable("frequency"),
            this.frequency.dispose(),
            (this.frequency = null),
            this
          );
        }),
        (e.default = s.default.TickSource);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(87), i(13), i(2), i(4), i(18), i(1);
      (s.default.Follower = function () {
        var t = s.default.defaults(
          arguments,
          ["smoothing"],
          s.default.Follower
        );
        s.default.AudioNode.call(this),
          this.createInsOuts(1, 1),
          (this._abs = new s.default.Abs()),
          (this._filter = this.context.createBiquadFilter()),
          (this._filter.type = "lowpass"),
          (this._filter.frequency.value = 0),
          (this._filter.Q.value = 0),
          (this._sub = new s.default.Subtract()),
          (this._delay = new s.default.Delay(this.blockTime)),
          (this._smoothing = t.smoothing),
          s.default.connect(this.input, this._delay),
          s.default.connect(this.input, this._sub, 0, 1),
          this._sub.chain(this._abs, this._filter, this.output),
          (this.smoothing = t.smoothing);
      }),
        s.default.extend(s.default.Follower, s.default.AudioNode),
        (s.default.Follower.defaults = { smoothing: 0.05 }),
        Object.defineProperty(s.default.Follower.prototype, "smoothing", {
          get: function () {
            return this._smoothing;
          },
          set: function (t) {
            (this._smoothing = t),
              (this._filter.frequency.value =
                0.5 * s.default.Time(t).toFrequency());
          },
        }),
        (s.default.Follower.prototype.connect =
          s.default.SignalBase.prototype.connect),
        (s.default.Follower.prototype.dispose = function () {
          return (
            s.default.AudioNode.prototype.dispose.call(this),
            this._filter.disconnect(),
            (this._filter = null),
            this._delay.dispose(),
            (this._delay = null),
            this._sub.disconnect(),
            (this._sub = null),
            this._abs.dispose(),
            (this._abs = null),
            this
          );
        }),
        (e.default = s.default.Follower);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(42), i(2), i(14), i(18), i(3), i(1);
      (s.default.FeedbackCombFilter = function () {
        var t = s.default.defaults(
          arguments,
          ["delayTime", "resonance"],
          s.default.FeedbackCombFilter
        );
        s.default.AudioNode.call(this),
          (this._delay = this.input = this.output = new s.default.Delay(
            t.delayTime
          )),
          (this.delayTime = this._delay.delayTime),
          (this._feedback = new s.default.Gain(
            t.resonance,
            s.default.Type.NormalRange
          )),
          (this.resonance = this._feedback.gain),
          this._delay.chain(this._feedback, this._delay),
          this._readOnly(["resonance", "delayTime"]);
      }),
        s.default.extend(s.default.FeedbackCombFilter, s.default.AudioNode),
        (s.default.FeedbackCombFilter.defaults = {
          delayTime: 0.1,
          resonance: 0.5,
        }),
        (s.default.FeedbackCombFilter.prototype.dispose = function () {
          return (
            s.default.AudioNode.prototype.dispose.call(this),
            this._writable(["resonance", "delayTime"]),
            this._delay.dispose(),
            (this._delay = null),
            (this.delayTime = null),
            this._feedback.dispose(),
            (this._feedback = null),
            (this.resonance = null),
            this
          );
        }),
        (e.default = s.default.FeedbackCombFilter);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(9), i(2), i(3), i(1);
      (s.default.MultibandSplit = function () {
        var t = s.default.defaults(
          arguments,
          ["lowFrequency", "highFrequency"],
          s.default.MultibandSplit
        );
        s.default.AudioNode.call(this),
          (this.input = new s.default.Gain()),
          (this.output = new Array(3)),
          (this.low = this.output[0] = new s.default.Filter(0, "lowpass")),
          (this._lowMidFilter = new s.default.Filter(0, "highpass")),
          (this.mid = this.output[1] = new s.default.Filter(0, "lowpass")),
          (this.high = this.output[2] = new s.default.Filter(0, "highpass")),
          (this.lowFrequency = new s.default.Signal(
            t.lowFrequency,
            s.default.Type.Frequency
          )),
          (this.highFrequency = new s.default.Signal(
            t.highFrequency,
            s.default.Type.Frequency
          )),
          (this.Q = new s.default.Signal(t.Q)),
          this.input.fan(this.low, this.high),
          this.input.chain(this._lowMidFilter, this.mid),
          this.lowFrequency.connect(this.low.frequency),
          this.lowFrequency.connect(this._lowMidFilter.frequency),
          this.highFrequency.connect(this.mid.frequency),
          this.highFrequency.connect(this.high.frequency),
          this.Q.connect(this.low.Q),
          this.Q.connect(this._lowMidFilter.Q),
          this.Q.connect(this.mid.Q),
          this.Q.connect(this.high.Q),
          this._readOnly([
            "high",
            "mid",
            "low",
            "highFrequency",
            "lowFrequency",
          ]);
      }),
        s.default.extend(s.default.MultibandSplit, s.default.AudioNode),
        (s.default.MultibandSplit.defaults = {
          lowFrequency: 400,
          highFrequency: 2500,
          Q: 1,
        }),
        (s.default.MultibandSplit.prototype.dispose = function () {
          return (
            s.default.AudioNode.prototype.dispose.call(this),
            this._writable([
              "high",
              "mid",
              "low",
              "highFrequency",
              "lowFrequency",
            ]),
            this.low.dispose(),
            (this.low = null),
            this._lowMidFilter.dispose(),
            (this._lowMidFilter = null),
            this.mid.dispose(),
            (this.mid = null),
            this.high.dispose(),
            (this.high = null),
            this.lowFrequency.dispose(),
            (this.lowFrequency = null),
            this.highFrequency.dispose(),
            (this.highFrequency = null),
            this.Q.dispose(),
            (this.Q = null),
            this
          );
        }),
        (e.default = s.default.MultibandSplit);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(7);
      (s.default.Pow = function (t) {
        s.default.SignalBase.call(this),
          (this._exp = s.default.defaultArg(t, 1)),
          (this._expScaler = this.input = this.output = new s.default.WaveShaper(
            this._expFunc(this._exp),
            8192
          ));
      }),
        s.default.extend(s.default.Pow, s.default.SignalBase),
        Object.defineProperty(s.default.Pow.prototype, "value", {
          get: function () {
            return this._exp;
          },
          set: function (t) {
            (this._exp = t), this._expScaler.setMap(this._expFunc(this._exp));
          },
        }),
        (s.default.Pow.prototype._expFunc = function (t) {
          return function (e) {
            return Math.pow(Math.abs(e), t);
          };
        }),
        (s.default.Pow.prototype.dispose = function () {
          return (
            s.default.SignalBase.prototype.dispose.call(this),
            this._expScaler.dispose(),
            (this._expScaler = null),
            this
          );
        }),
        (e.default = s.default.Pow);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      (s.default.TimeBase = function (t, e) {
        if (!(this instanceof s.default.TimeBase))
          return new s.default.TimeBase(t, e);
        if (
          ((this._val = t),
          (this._units = e),
          s.default.isUndef(this._units) &&
            s.default.isString(this._val) &&
            parseFloat(this._val) == this._val &&
            "+" !== this._val.charAt(0))
        )
          (this._val = parseFloat(this._val)),
            (this._units = this._defaultUnits);
        else if (t && t.constructor === this.constructor)
          (this._val = t._val), (this._units = t._units);
        else if (t instanceof s.default.TimeBase)
          switch (this._defaultUnits) {
            case "s":
              this._val = t.toSeconds();
              break;
            case "i":
              this._val = t.toTicks();
              break;
            case "hz":
              this._val = t.toFrequency();
              break;
            case "midi":
              this._val = t.toMidi();
              break;
            default:
              throw new Error(
                "Unrecognized default units " + this._defaultUnits
              );
          }
      }),
        s.default.extend(s.default.TimeBase),
        (s.default.TimeBase.prototype._expressions = {
          n: {
            regexp: /^(\d+)n(\.?)$/i,
            method: function (t, e) {
              t = parseInt(t);
              var i = "." === e ? 1.5 : 1;
              return 1 === t
                ? this._beatsToUnits(this._getTimeSignature()) * i
                : this._beatsToUnits(4 / t) * i;
            },
          },
          t: {
            regexp: /^(\d+)t$/i,
            method: function (t) {
              return (
                (t = parseInt(t)), this._beatsToUnits(8 / (3 * parseInt(t)))
              );
            },
          },
          m: {
            regexp: /^(\d+)m$/i,
            method: function (t) {
              return this._beatsToUnits(parseInt(t) * this._getTimeSignature());
            },
          },
          i: {
            regexp: /^(\d+)i$/i,
            method: function (t) {
              return this._ticksToUnits(parseInt(t));
            },
          },
          hz: {
            regexp: /^(\d+(?:\.\d+)?)hz$/i,
            method: function (t) {
              return this._frequencyToUnits(parseFloat(t));
            },
          },
          tr: {
            regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/,
            method: function (t, e, i) {
              var s = 0;
              return (
                t &&
                  "0" !== t &&
                  (s += this._beatsToUnits(
                    this._getTimeSignature() * parseFloat(t)
                  )),
                e && "0" !== e && (s += this._beatsToUnits(parseFloat(e))),
                i && "0" !== i && (s += this._beatsToUnits(parseFloat(i) / 4)),
                s
              );
            },
          },
          s: {
            regexp: /^(\d+(?:\.\d+)?)s$/,
            method: function (t) {
              return this._secondsToUnits(parseFloat(t));
            },
          },
          samples: {
            regexp: /^(\d+)samples$/,
            method: function (t) {
              return parseInt(t) / this.context.sampleRate;
            },
          },
          default: {
            regexp: /^(\d+(?:\.\d+)?)$/,
            method: function (t) {
              return this._expressions[this._defaultUnits].method.call(this, t);
            },
          },
        }),
        (s.default.TimeBase.prototype._defaultUnits = "s"),
        (s.default.TimeBase.prototype._getBpm = function () {
          return s.default.Transport ? s.default.Transport.bpm.value : 120;
        }),
        (s.default.TimeBase.prototype._getTimeSignature = function () {
          return s.default.Transport ? s.default.Transport.timeSignature : 4;
        }),
        (s.default.TimeBase.prototype._getPPQ = function () {
          return s.default.Transport ? s.default.Transport.PPQ : 192;
        }),
        (s.default.TimeBase.prototype._now = function () {
          return this.now();
        }),
        (s.default.TimeBase.prototype._frequencyToUnits = function (t) {
          return 1 / t;
        }),
        (s.default.TimeBase.prototype._beatsToUnits = function (t) {
          return (60 / this._getBpm()) * t;
        }),
        (s.default.TimeBase.prototype._secondsToUnits = function (t) {
          return t;
        }),
        (s.default.TimeBase.prototype._ticksToUnits = function (t) {
          return t * (this._beatsToUnits(1) / this._getPPQ());
        }),
        (s.default.TimeBase.prototype._noArg = function () {
          return this._now();
        }),
        (s.default.TimeBase.prototype.valueOf = function () {
          if (s.default.isUndef(this._val)) return this._noArg();
          if (s.default.isString(this._val) && s.default.isUndef(this._units)) {
            for (var t in this._expressions)
              if (this._expressions[t].regexp.test(this._val.trim())) {
                this._units = t;
                break;
              }
          } else if (s.default.isObject(this._val)) {
            var e = 0;
            for (var i in this._val) {
              var n = this._val[i];
              e += new this.constructor(i).valueOf() * n;
            }
            return e;
          }
          if (s.default.isDefined(this._units)) {
            var o = this._expressions[this._units],
              a = this._val.toString().trim().match(o.regexp);
            return a
              ? o.method.apply(this, a.slice(1))
              : o.method.call(this, parseFloat(this._val));
          }
          return this._val;
        }),
        (s.default.TimeBase.prototype.toSeconds = function () {
          return this.valueOf();
        }),
        (s.default.TimeBase.prototype.toFrequency = function () {
          return 1 / this.toSeconds();
        }),
        (s.default.TimeBase.prototype.toSamples = function () {
          return this.toSeconds() * this.context.sampleRate;
        }),
        (s.default.TimeBase.prototype.toMilliseconds = function () {
          return 1e3 * this.toSeconds();
        }),
        (s.default.TimeBase.prototype.dispose = function () {
          (this._val = null), (this._units = null);
        }),
        (e.default = s.default.TimeBase);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(62), i(46);
      (s.default.Time = function (t, e) {
        if (!(this instanceof s.default.Time)) return new s.default.Time(t, e);
        s.default.TimeBase.call(this, t, e);
      }),
        s.default.extend(s.default.Time, s.default.TimeBase),
        (s.default.Time.prototype._expressions = Object.assign(
          {},
          s.default.TimeBase.prototype._expressions,
          {
            quantize: {
              regexp: /^@(.+)/,
              method: function (t) {
                if (s.default.Transport) {
                  var e = new this.constructor(t);
                  return this._secondsToUnits(
                    s.default.Transport.nextSubdivision(e)
                  );
                }
                return 0;
              },
            },
            now: {
              regexp: /^\+(.+)/,
              method: function (t) {
                return this._now() + new this.constructor(t);
              },
            },
          }
        )),
        (s.default.Time.prototype.quantize = function (t, e) {
          e = s.default.defaultArg(e, 1);
          var i = new this.constructor(t),
            n = this.valueOf();
          return n + (Math.round(n / i) * i - n) * e;
        }),
        (s.default.Time.prototype.toNotation = function () {
          for (var t = this.toSeconds(), e = ["1m"], i = 1; i < 8; i++) {
            var n = Math.pow(2, i);
            e.push(n + "n."), e.push(n + "n"), e.push(n + "t");
          }
          e.push("0");
          var o = e[0],
            a = s.default.Time(e[0]).toSeconds();
          return (
            e.forEach(function (e) {
              var i = s.default.Time(e).toSeconds();
              Math.abs(i - t) < Math.abs(a - t) && ((o = e), (a = i));
            }),
            o
          );
        }),
        (s.default.Time.prototype.toBarsBeatsSixteenths = function () {
          var t = this._beatsToUnits(1),
            e = this.valueOf() / t;
          e = parseFloat(e.toFixed(4));
          var i = Math.floor(e / this._getTimeSignature()),
            s = (e % 1) * 4;
          return (
            (e = Math.floor(e) % this._getTimeSignature()),
            (s = s.toString()).length > 3 &&
              (s = parseFloat(parseFloat(s).toFixed(3))),
            [i, e, s].join(":")
          );
        }),
        (s.default.Time.prototype.toTicks = function () {
          var t = this._beatsToUnits(1),
            e = this.valueOf() / t;
          return Math.round(e * this._getPPQ());
        }),
        (s.default.Time.prototype.toSeconds = function () {
          return this.valueOf();
        }),
        (s.default.Time.prototype.toMidi = function () {
          return s.default.Frequency.ftom(this.toFrequency());
        }),
        (e.default = s.default.Time);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(11), i(6), i(3), i(1);
      s.default.supported &&
        (OscillatorNode.prototype.setPeriodicWave ||
          (OscillatorNode.prototype.setPeriodicWave =
            OscillatorNode.prototype.setWaveTable),
        AudioContext.prototype.createPeriodicWave ||
          (AudioContext.prototype.createPeriodicWave =
            AudioContext.prototype.createWaveTable)),
        (s.default.OscillatorNode = function () {
          var t = s.default.defaults(
            arguments,
            ["frequency", "type"],
            s.default.OscillatorNode
          );
          s.default.AudioNode.call(this, t),
            (this.onended = t.onended),
            (this._startTime = -1),
            (this._stopTime = -1),
            (this._gainNode = this.output = new s.default.Gain(0)),
            (this._oscillator = this.context.createOscillator()),
            s.default.connect(this._oscillator, this._gainNode),
            (this.type = t.type),
            (this.frequency = new s.default.Param({
              param: this._oscillator.frequency,
              units: s.default.Type.Frequency,
              value: t.frequency,
            })),
            (this.detune = new s.default.Param({
              param: this._oscillator.detune,
              units: s.default.Type.Cents,
              value: t.detune,
            })),
            (this._gain = 1);
        }),
        s.default.extend(s.default.OscillatorNode, s.default.AudioNode),
        (s.default.OscillatorNode.defaults = {
          frequency: 440,
          detune: 0,
          type: "sine",
          onended: s.default.noOp,
        }),
        Object.defineProperty(s.default.OscillatorNode.prototype, "state", {
          get: function () {
            return this.getStateAtTime(this.now());
          },
        }),
        (s.default.OscillatorNode.prototype.getStateAtTime = function (t) {
          return (
            (t = this.toSeconds(t)),
            -1 !== this._startTime &&
            t >= this._startTime &&
            (-1 === this._stopTime || t <= this._stopTime)
              ? s.default.State.Started
              : s.default.State.Stopped
          );
        }),
        (s.default.OscillatorNode.prototype.start = function (t) {
          if ((this.log("start", t), -1 !== this._startTime))
            throw new Error("cannot call OscillatorNode.start more than once");
          return (
            (this._startTime = this.toSeconds(t)),
            (this._startTime = Math.max(
              this._startTime,
              this.context.currentTime
            )),
            this._oscillator.start(this._startTime),
            this._gainNode.gain.setValueAtTime(1, this._startTime),
            this
          );
        }),
        (s.default.OscillatorNode.prototype.setPeriodicWave = function (t) {
          return this._oscillator.setPeriodicWave(t), this;
        }),
        (s.default.OscillatorNode.prototype.stop = function (t) {
          return (
            this.log("stop", t),
            this.assert(
              -1 !== this._startTime,
              "'start' must be called before 'stop'"
            ),
            this.cancelStop(),
            (this._stopTime = this.toSeconds(t)),
            (this._stopTime = Math.max(
              this._stopTime,
              this.context.currentTime
            )),
            this._stopTime > this._startTime
              ? (this._gainNode.gain.setValueAtTime(0, this._stopTime),
                this.context.clearTimeout(this._timeout),
                (this._timeout = this.context.setTimeout(
                  function () {
                    this._oscillator.stop(this.now()),
                      this.onended(),
                      setTimeout(
                        function () {
                          this._oscillator &&
                            (this._oscillator.disconnect(),
                            this._gainNode.disconnect());
                        }.bind(this),
                        100
                      );
                  }.bind(this),
                  this._stopTime - this.context.currentTime
                )))
              : this._gainNode.gain.cancelScheduledValues(this._startTime),
            this
          );
        }),
        (s.default.OscillatorNode.prototype.cancelStop = function () {
          return (
            -1 !== this._startTime &&
              (this._gainNode.gain.cancelScheduledValues(
                this._startTime + this.sampleTime
              ),
              this.context.clearTimeout(this._timeout),
              (this._stopTime = -1)),
            this
          );
        }),
        Object.defineProperty(s.default.OscillatorNode.prototype, "type", {
          get: function () {
            return this._oscillator.type;
          },
          set: function (t) {
            this._oscillator.type = t;
          },
        }),
        (s.default.OscillatorNode.prototype.dispose = function () {
          return (
            this._wasDisposed ||
              ((this._wasDisposed = !0),
              this.context.clearTimeout(this._timeout),
              s.default.AudioNode.prototype.dispose.call(this),
              (this.onended = null),
              this._oscillator.disconnect(),
              (this._oscillator = null),
              this._gainNode.dispose(),
              (this._gainNode = null),
              this.frequency.dispose(),
              (this.frequency = null),
              this.detune.dispose(),
              (this.detune = null)),
            this
          );
        });
      e.default = s.default.OscillatorNode;
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(11), i(6), i(57), i(32);
      (s.default.Player = function (t) {
        var e;
        t instanceof s.default.Buffer && t.loaded
          ? ((t = t.get()), (e = s.default.Player.defaults))
          : (e = s.default.defaults(
              arguments,
              ["url", "onload"],
              s.default.Player
            )),
          s.default.Source.call(this, e),
          (this.autostart = e.autostart),
          (this._buffer = new s.default.Buffer({
            url: e.url,
            onload: this._onload.bind(this, e.onload),
            reverse: e.reverse,
          })),
          t instanceof AudioBuffer && this._buffer.set(t),
          (this._loop = e.loop),
          (this._loopStart = e.loopStart),
          (this._loopEnd = e.loopEnd),
          (this._playbackRate = e.playbackRate),
          (this._activeSources = []),
          (this.fadeIn = e.fadeIn),
          (this.fadeOut = e.fadeOut);
      }),
        s.default.extend(s.default.Player, s.default.Source),
        (s.default.Player.defaults = {
          onload: s.default.noOp,
          playbackRate: 1,
          loop: !1,
          autostart: !1,
          loopStart: 0,
          loopEnd: 0,
          reverse: !1,
          fadeIn: 0,
          fadeOut: 0,
        }),
        (s.default.Player.prototype.load = function (t, e) {
          return this._buffer.load(t, this._onload.bind(this, e));
        }),
        (s.default.Player.prototype._onload = function (t) {
          (t = s.default.defaultArg(t, s.default.noOp))(this),
            this.autostart && this.start();
        }),
        (s.default.Player.prototype._onSourceEnd = function (t) {
          var e = this._activeSources.indexOf(t);
          this._activeSources.splice(e, 1),
            0 !== this._activeSources.length ||
              this._synced ||
              this._state.setStateAtTime(
                s.default.State.Stopped,
                s.default.now()
              );
        }),
        (s.default.Player.prototype._start = function (t, e, i) {
          (e = this._loop
            ? s.default.defaultArg(e, this._loopStart)
            : s.default.defaultArg(e, 0)),
            (e = this.toSeconds(e)),
            this._synced && (e *= this._playbackRate);
          var n = s.default.defaultArg(
            i,
            Math.max(this._buffer.duration - e, 0)
          );
          (n = this.toSeconds(n)),
            (n /= this._playbackRate),
            (t = this.toSeconds(t));
          var o = new s.default.BufferSource({
            buffer: this._buffer,
            loop: this._loop,
            loopStart: this._loopStart,
            loopEnd: this._loopEnd,
            onended: this._onSourceEnd.bind(this),
            playbackRate: this._playbackRate,
            fadeIn: this.fadeIn,
            fadeOut: this.fadeOut,
          }).connect(this.output);
          return (
            this._loop ||
              this._synced ||
              this._state.setStateAtTime(s.default.State.Stopped, t + n),
            this._activeSources.push(o),
            this._loop && s.default.isUndef(i)
              ? o.start(t, e)
              : o.start(t, e, n - this.toSeconds(this.fadeOut)),
            this
          );
        }),
        (s.default.Player.prototype._stop = function (t) {
          return (
            (t = this.toSeconds(t)),
            this._activeSources.forEach(function (e) {
              e.stop(t);
            }),
            this
          );
        }),
        (s.default.Player.prototype.restart = function (t, e, i) {
          return this._stop(t), this._start(t, e, i), this;
        }),
        (s.default.Player.prototype.seek = function (t, e) {
          return (
            (e = this.toSeconds(e)),
            this._state.getValueAtTime(e) === s.default.State.Started &&
              ((t = this.toSeconds(t)), this._stop(e), this._start(e, t)),
            this
          );
        }),
        (s.default.Player.prototype.setLoopPoints = function (t, e) {
          return (this.loopStart = t), (this.loopEnd = e), this;
        }),
        Object.defineProperty(s.default.Player.prototype, "loopStart", {
          get: function () {
            return this._loopStart;
          },
          set: function (t) {
            (this._loopStart = t),
              this._activeSources.forEach(function (e) {
                e.loopStart = t;
              });
          },
        }),
        Object.defineProperty(s.default.Player.prototype, "loopEnd", {
          get: function () {
            return this._loopEnd;
          },
          set: function (t) {
            (this._loopEnd = t),
              this._activeSources.forEach(function (e) {
                e.loopEnd = t;
              });
          },
        }),
        Object.defineProperty(s.default.Player.prototype, "buffer", {
          get: function () {
            return this._buffer;
          },
          set: function (t) {
            this._buffer.set(t);
          },
        }),
        Object.defineProperty(s.default.Player.prototype, "loop", {
          get: function () {
            return this._loop;
          },
          set: function (t) {
            if (
              this._loop !== t &&
              ((this._loop = t),
              this._activeSources.forEach(function (e) {
                e.loop = t;
              }),
              t)
            ) {
              var e = this._state.getNextState(
                s.default.State.Stopped,
                this.now()
              );
              e && this._state.cancel(e.time);
            }
          },
        }),
        Object.defineProperty(s.default.Player.prototype, "playbackRate", {
          get: function () {
            return this._playbackRate;
          },
          set: function (t) {
            this._playbackRate = t;
            var e = this.now(),
              i = this._state.getNextState(s.default.State.Stopped, e);
            i && this._state.cancel(i.time),
              this._activeSources.forEach(function (i) {
                i.cancelStop(), i.playbackRate.setValueAtTime(t, e);
              });
          },
        }),
        Object.defineProperty(s.default.Player.prototype, "reverse", {
          get: function () {
            return this._buffer.reverse;
          },
          set: function (t) {
            this._buffer.reverse = t;
          },
        }),
        Object.defineProperty(s.default.Player.prototype, "loaded", {
          get: function () {
            return this._buffer.loaded;
          },
        }),
        (s.default.Player.prototype.dispose = function () {
          return (
            this._activeSources.forEach(function (t) {
              t.dispose();
            }),
            (this._activeSources = null),
            s.default.Source.prototype.dispose.call(this),
            this._buffer.dispose(),
            (this._buffer = null),
            this
          );
        }),
        (e.default = s.default.Player);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(31), i(41), i(37), i(2), i(9), i(25);
      (s.default.MonoSynth = function (t) {
        (t = s.default.defaultArg(t, s.default.MonoSynth.defaults)),
          s.default.Monophonic.call(this, t),
          (this.oscillator = new s.default.OmniOscillator(t.oscillator)),
          (this.frequency = this.oscillator.frequency),
          (this.detune = this.oscillator.detune),
          (this.filter = new s.default.Filter(t.filter)),
          (this.filter.frequency.value = 5e3),
          (this.filterEnvelope = new s.default.FrequencyEnvelope(
            t.filterEnvelope
          )),
          (this.envelope = new s.default.AmplitudeEnvelope(t.envelope)),
          this.oscillator.chain(this.filter, this.envelope, this.output),
          this.filterEnvelope.connect(this.filter.frequency),
          this._readOnly([
            "oscillator",
            "frequency",
            "detune",
            "filter",
            "filterEnvelope",
            "envelope",
          ]);
      }),
        s.default.extend(s.default.MonoSynth, s.default.Monophonic),
        (s.default.MonoSynth.defaults = {
          frequency: "C4",
          detune: 0,
          oscillator: { type: "square" },
          filter: { Q: 6, type: "lowpass", rolloff: -24 },
          envelope: { attack: 0.005, decay: 0.1, sustain: 0.9, release: 1 },
          filterEnvelope: {
            attack: 0.06,
            decay: 0.2,
            sustain: 0.5,
            release: 2,
            baseFrequency: 200,
            octaves: 7,
            exponent: 2,
          },
        }),
        (s.default.MonoSynth.prototype._triggerEnvelopeAttack = function (
          t,
          e
        ) {
          return (
            (t = this.toSeconds(t)),
            this.envelope.triggerAttack(t, e),
            this.filterEnvelope.triggerAttack(t),
            this.oscillator.start(t),
            0 === this.envelope.sustain &&
              this.oscillator.stop(
                t + this.envelope.attack + this.envelope.decay
              ),
            this
          );
        }),
        (s.default.MonoSynth.prototype._triggerEnvelopeRelease = function (t) {
          return (
            this.envelope.triggerRelease(t),
            this.filterEnvelope.triggerRelease(t),
            this.oscillator.stop(t + this.envelope.release),
            this
          );
        }),
        (s.default.MonoSynth.prototype.dispose = function () {
          return (
            s.default.Monophonic.prototype.dispose.call(this),
            this._writable([
              "oscillator",
              "frequency",
              "detune",
              "filter",
              "filterEnvelope",
              "envelope",
            ]),
            this.oscillator.dispose(),
            (this.oscillator = null),
            this.envelope.dispose(),
            (this.envelope = null),
            this.filterEnvelope.dispose(),
            (this.filterEnvelope = null),
            this.filter.dispose(),
            (this.filter = null),
            (this.frequency = null),
            (this.detune = null),
            this
          );
        }),
        (e.default = s.default.MonoSynth);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(6), i(17), i(5), i(3);
      (s.default.FatOscillator = function () {
        var t = s.default.defaults(
          arguments,
          ["frequency", "type", "spread"],
          s.default.FatOscillator
        );
        s.default.Source.call(this, t),
          (this.frequency = new s.default.Signal(
            t.frequency,
            s.default.Type.Frequency
          )),
          (this.detune = new s.default.Signal(t.detune, s.default.Type.Cents)),
          (this._oscillators = []),
          (this._spread = t.spread),
          (this._type = t.type),
          (this._phase = t.phase),
          (this._partials = t.partials),
          (this._partialCount = t.partialCount),
          (this.count = t.count),
          this._readOnly(["frequency", "detune"]);
      }),
        s.default.extend(s.default.FatOscillator, s.default.Source),
        (s.default.FatOscillator.defaults = {
          frequency: 440,
          detune: 0,
          phase: 0,
          spread: 20,
          count: 3,
          type: "sawtooth",
          partials: [],
          partialCount: 0,
        }),
        (s.default.FatOscillator.prototype._start = function (t) {
          (t = this.toSeconds(t)),
            this._forEach(function (e) {
              e.start(t);
            });
        }),
        (s.default.FatOscillator.prototype._stop = function (t) {
          (t = this.toSeconds(t)),
            this._forEach(function (e) {
              e.stop(t);
            });
        }),
        (s.default.FatOscillator.prototype.restart = function (t) {
          (t = this.toSeconds(t)),
            this._forEach(function (e) {
              e.restart(t);
            });
        }),
        (s.default.FatOscillator.prototype._forEach = function (t) {
          for (var e = 0; e < this._oscillators.length; e++)
            t.call(this, this._oscillators[e], e);
        }),
        Object.defineProperty(s.default.FatOscillator.prototype, "type", {
          get: function () {
            return this._type;
          },
          set: function (t) {
            (this._type = t),
              this._forEach(function (e) {
                e.type = t;
              });
          },
        }),
        Object.defineProperty(s.default.FatOscillator.prototype, "spread", {
          get: function () {
            return this._spread;
          },
          set: function (t) {
            if (((this._spread = t), this._oscillators.length > 1)) {
              var e = -t / 2,
                i = t / (this._oscillators.length - 1);
              this._forEach(function (t, s) {
                t.detune.value = e + i * s;
              });
            }
          },
        }),
        Object.defineProperty(s.default.FatOscillator.prototype, "count", {
          get: function () {
            return this._oscillators.length;
          },
          set: function (t) {
            if (((t = Math.max(t, 1)), this._oscillators.length !== t)) {
              this._forEach(function (t) {
                t.dispose();
              }),
                (this._oscillators = []);
              for (var e = 0; e < t; e++) {
                var i = new s.default.Oscillator();
                this.type === s.default.Oscillator.Type.Custom
                  ? (i.partials = this._partials)
                  : (i.type = this._type),
                  (i.partialCount = this._partialCount),
                  (i.phase = this._phase + (e / t) * 360),
                  (i.volume.value = -6 - 1.1 * t),
                  this.frequency.connect(i.frequency),
                  this.detune.connect(i.detune),
                  i.connect(this.output),
                  (this._oscillators[e] = i);
              }
              (this.spread = this._spread),
                this.state === s.default.State.Started &&
                  this._forEach(function (t) {
                    t.start();
                  });
            }
          },
        }),
        Object.defineProperty(s.default.FatOscillator.prototype, "phase", {
          get: function () {
            return this._phase;
          },
          set: function (t) {
            (this._phase = t),
              this._forEach(function (e) {
                e.phase = t;
              });
          },
        }),
        Object.defineProperty(s.default.FatOscillator.prototype, "baseType", {
          get: function () {
            return this._oscillators[0].baseType;
          },
          set: function (t) {
            this._forEach(function (e) {
              e.baseType = t;
            }),
              (this._type = this._oscillators[0].type);
          },
        }),
        Object.defineProperty(s.default.FatOscillator.prototype, "partials", {
          get: function () {
            return this._oscillators[0].partials;
          },
          set: function (t) {
            (this._partials = t),
              (this._type = s.default.Oscillator.Type.Custom),
              this._forEach(function (e) {
                e.partials = t;
              });
          },
        }),
        Object.defineProperty(
          s.default.FatOscillator.prototype,
          "partialCount",
          {
            get: function () {
              return this._oscillators[0].partialCount;
            },
            set: function (t) {
              (this._partialCount = t),
                this._forEach(function (e) {
                  e.partialCount = t;
                }),
                (this._type = this._oscillators[0].type);
            },
          }
        ),
        (s.default.FatOscillator.prototype.dispose = function () {
          return (
            s.default.Source.prototype.dispose.call(this),
            this._writable(["frequency", "detune"]),
            this.frequency.dispose(),
            (this.frequency = null),
            this.detune.dispose(),
            (this.detune = null),
            this._forEach(function (t) {
              t.dispose();
            }),
            (this._oscillators = null),
            (this._partials = null),
            this
          );
        }),
        (e.default = s.default.FatOscillator);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(6), i(17), i(5), i(3), i(22);
      (s.default.AMOscillator = function () {
        var t = s.default.defaults(
          arguments,
          ["frequency", "type", "modulationType"],
          s.default.AMOscillator
        );
        s.default.Source.call(this, t),
          (this._carrier = new s.default.Oscillator(t.frequency, t.type)),
          (this.frequency = this._carrier.frequency),
          (this.detune = this._carrier.detune),
          (this.detune.value = t.detune),
          (this._modulator = new s.default.Oscillator(
            t.frequency,
            t.modulationType
          )),
          (this._modulationScale = new s.default.AudioToGain()),
          (this.harmonicity = new s.default.Multiply(t.harmonicity)),
          (this.harmonicity.units = s.default.Type.Positive),
          (this._modulationNode = new s.default.Gain(0)),
          this.frequency.chain(this.harmonicity, this._modulator.frequency),
          this.detune.connect(this._modulator.detune),
          this._modulator.chain(
            this._modulationScale,
            this._modulationNode.gain
          ),
          this._carrier.chain(this._modulationNode, this.output),
          (this.phase = t.phase),
          this._readOnly(["frequency", "detune", "harmonicity"]);
      }),
        s.default.extend(s.default.AMOscillator, s.default.Oscillator),
        (s.default.AMOscillator.defaults = {
          frequency: 440,
          detune: 0,
          phase: 0,
          type: "sine",
          modulationType: "square",
          harmonicity: 1,
        }),
        (s.default.AMOscillator.prototype._start = function (t) {
          this._modulator.start(t), this._carrier.start(t);
        }),
        (s.default.AMOscillator.prototype._stop = function (t) {
          this._modulator.stop(t), this._carrier.stop(t);
        }),
        (s.default.AMOscillator.prototype.restart = function (t) {
          this._modulator.restart(t), this._carrier.restart(t);
        }),
        Object.defineProperty(s.default.AMOscillator.prototype, "type", {
          get: function () {
            return this._carrier.type;
          },
          set: function (t) {
            this._carrier.type = t;
          },
        }),
        Object.defineProperty(s.default.AMOscillator.prototype, "baseType", {
          get: function () {
            return this._carrier.baseType;
          },
          set: function (t) {
            this._carrier.baseType = t;
          },
        }),
        Object.defineProperty(
          s.default.AMOscillator.prototype,
          "partialCount",
          {
            get: function () {
              return this._carrier.partialCount;
            },
            set: function (t) {
              this._carrier.partialCount = t;
            },
          }
        ),
        Object.defineProperty(
          s.default.AMOscillator.prototype,
          "modulationType",
          {
            get: function () {
              return this._modulator.type;
            },
            set: function (t) {
              this._modulator.type = t;
            },
          }
        ),
        Object.defineProperty(s.default.AMOscillator.prototype, "phase", {
          get: function () {
            return this._carrier.phase;
          },
          set: function (t) {
            (this._carrier.phase = t), (this._modulator.phase = t);
          },
        }),
        Object.defineProperty(s.default.AMOscillator.prototype, "partials", {
          get: function () {
            return this._carrier.partials;
          },
          set: function (t) {
            this._carrier.partials = t;
          },
        }),
        (s.default.AMOscillator.prototype.dispose = function () {
          return (
            s.default.Source.prototype.dispose.call(this),
            this._writable(["frequency", "detune", "harmonicity"]),
            (this.frequency = null),
            (this.detune = null),
            this.harmonicity.dispose(),
            (this.harmonicity = null),
            this._carrier.dispose(),
            (this._carrier = null),
            this._modulator.dispose(),
            (this._modulator = null),
            this._modulationNode.dispose(),
            (this._modulationNode = null),
            this._modulationScale.dispose(),
            (this._modulationScale = null),
            this
          );
        }),
        (e.default = s.default.AMOscillator);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(6), i(50), i(17), i(5);
      (s.default.PWMOscillator = function () {
        var t = s.default.defaults(
          arguments,
          ["frequency", "modulationFrequency"],
          s.default.PWMOscillator
        );
        s.default.Source.call(this, t),
          (this._pulse = new s.default.PulseOscillator(t.modulationFrequency)),
          (this._pulse._sawtooth.type = "sine"),
          (this._modulator = new s.default.Oscillator({
            frequency: t.frequency,
            detune: t.detune,
            phase: t.phase,
          })),
          (this._scale = new s.default.Multiply(2)),
          (this.frequency = this._modulator.frequency),
          (this.detune = this._modulator.detune),
          (this.modulationFrequency = this._pulse.frequency),
          this._modulator.chain(this._scale, this._pulse.width),
          this._pulse.connect(this.output),
          this._readOnly(["modulationFrequency", "frequency", "detune"]);
      }),
        s.default.extend(s.default.PWMOscillator, s.default.Source),
        (s.default.PWMOscillator.defaults = {
          frequency: 440,
          detune: 0,
          phase: 0,
          modulationFrequency: 0.4,
        }),
        (s.default.PWMOscillator.prototype._start = function (t) {
          (t = this.toSeconds(t)),
            this._modulator.start(t),
            this._pulse.start(t);
        }),
        (s.default.PWMOscillator.prototype._stop = function (t) {
          (t = this.toSeconds(t)), this._modulator.stop(t), this._pulse.stop(t);
        }),
        (s.default.PWMOscillator.prototype.restart = function (t) {
          this._modulator.restart(t), this._pulse.restart(t);
        }),
        Object.defineProperty(s.default.PWMOscillator.prototype, "type", {
          get: function () {
            return "pwm";
          },
        }),
        Object.defineProperty(s.default.PWMOscillator.prototype, "baseType", {
          get: function () {
            return "pwm";
          },
        }),
        Object.defineProperty(s.default.PWMOscillator.prototype, "partials", {
          get: function () {
            return [];
          },
        }),
        Object.defineProperty(s.default.PWMOscillator.prototype, "phase", {
          get: function () {
            return this._modulator.phase;
          },
          set: function (t) {
            this._modulator.phase = t;
          },
        }),
        (s.default.PWMOscillator.prototype.dispose = function () {
          return (
            s.default.Source.prototype.dispose.call(this),
            this._pulse.dispose(),
            (this._pulse = null),
            this._scale.dispose(),
            (this._scale = null),
            this._modulator.dispose(),
            (this._modulator = null),
            this._writable(["modulationFrequency", "frequency", "detune"]),
            (this.frequency = null),
            (this.detune = null),
            (this.modulationFrequency = null),
            this
          );
        }),
        (e.default = s.default.PWMOscillator);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(51), i(4), i(16);
      (s.default.Part = function () {
        var t = s.default.defaults(
          arguments,
          ["callback", "events"],
          s.default.Part
        );
        s.default.Event.call(this, t), (this._events = []);
        for (var e = 0; e < t.events.length; e++)
          Array.isArray(t.events[e])
            ? this.add(t.events[e][0], t.events[e][1])
            : this.add(t.events[e]);
      }),
        s.default.extend(s.default.Part, s.default.Event),
        (s.default.Part.defaults = {
          callback: s.default.noOp,
          loop: !1,
          loopEnd: "1m",
          loopStart: 0,
          playbackRate: 1,
          probability: 1,
          humanize: !1,
          mute: !1,
          events: [],
        }),
        (s.default.Part.prototype.start = function (t, e) {
          var i = this.toTicks(t);
          return (
            this._state.getValueAtTime(i) !== s.default.State.Started &&
              ((e = this._loop
                ? s.default.defaultArg(e, this._loopStart)
                : s.default.defaultArg(e, 0)),
              (e = this.toTicks(e)),
              this._state.add({
                state: s.default.State.Started,
                time: i,
                offset: e,
              }),
              this._forEach(function (t) {
                this._startNote(t, i, e);
              })),
            this
          );
        }),
        (s.default.Part.prototype._startNote = function (t, e, i) {
          (e -= i),
            this._loop
              ? t.startOffset >= this._loopStart &&
                t.startOffset < this._loopEnd
                ? (t.startOffset < i && (e += this._getLoopDuration()),
                  t.start(s.default.Ticks(e)))
                : t.startOffset < this._loopStart &&
                  t.startOffset >= i &&
                  ((t.loop = !1), t.start(s.default.Ticks(e)))
              : t.startOffset >= i && t.start(s.default.Ticks(e));
        }),
        Object.defineProperty(s.default.Part.prototype, "startOffset", {
          get: function () {
            return this._startOffset;
          },
          set: function (t) {
            (this._startOffset = t),
              this._forEach(function (t) {
                t.startOffset += this._startOffset;
              });
          },
        }),
        (s.default.Part.prototype.stop = function (t) {
          var e = this.toTicks(t);
          return (
            this._state.cancel(e),
            this._state.setStateAtTime(s.default.State.Stopped, e),
            this._forEach(function (e) {
              e.stop(t);
            }),
            this
          );
        }),
        (s.default.Part.prototype.at = function (t, e) {
          t = s.default.TransportTime(t);
          for (
            var i = s.default.Ticks(1).toSeconds(), n = 0;
            n < this._events.length;
            n++
          ) {
            var o = this._events[n];
            if (Math.abs(t.toTicks() - o.startOffset) < i)
              return s.default.isDefined(e) && (o.value = e), o;
          }
          return s.default.isDefined(e)
            ? (this.add(t, e), this._events[this._events.length - 1])
            : null;
        }),
        (s.default.Part.prototype.add = function (t, e) {
          var i;
          return (
            t.hasOwnProperty("time") && (t = (e = t).time),
            (t = this.toTicks(t)),
            e instanceof s.default.Event
              ? ((i = e).callback = this._tick.bind(this))
              : (i = new s.default.Event({
                  callback: this._tick.bind(this),
                  value: e,
                })),
            (i.startOffset = t),
            i.set({
              loopEnd: this.loopEnd,
              loopStart: this.loopStart,
              loop: this.loop,
              humanize: this.humanize,
              playbackRate: this.playbackRate,
              probability: this.probability,
            }),
            this._events.push(i),
            this._restartEvent(i),
            this
          );
        }),
        (s.default.Part.prototype._restartEvent = function (t) {
          this._state.forEach(
            function (e) {
              e.state === s.default.State.Started
                ? this._startNote(t, e.time, e.offset)
                : t.stop(s.default.Ticks(e.time));
            }.bind(this)
          );
        }),
        (s.default.Part.prototype.remove = function (t, e) {
          t.hasOwnProperty("time") && (t = (e = t).time), (t = this.toTicks(t));
          for (var i = this._events.length - 1; i >= 0; i--) {
            var n = this._events[i];
            n.startOffset === t &&
              (s.default.isUndef(e) ||
                (s.default.isDefined(e) && n.value === e)) &&
              (this._events.splice(i, 1), n.dispose());
          }
          return this;
        }),
        (s.default.Part.prototype.removeAll = function () {
          return (
            this._forEach(function (t) {
              t.dispose();
            }),
            (this._events = []),
            this
          );
        }),
        (s.default.Part.prototype.cancel = function (t) {
          return (
            this._forEach(function (e) {
              e.cancel(t);
            }),
            this._state.cancel(this.toTicks(t)),
            this
          );
        }),
        (s.default.Part.prototype._forEach = function (t, e) {
          if (this._events) {
            e = s.default.defaultArg(e, this);
            for (var i = this._events.length - 1; i >= 0; i--) {
              var n = this._events[i];
              n instanceof s.default.Part ? n._forEach(t, e) : t.call(e, n);
            }
          }
          return this;
        }),
        (s.default.Part.prototype._setAll = function (t, e) {
          this._forEach(function (i) {
            i[t] = e;
          });
        }),
        (s.default.Part.prototype._tick = function (t, e) {
          this.mute || this.callback(t, e);
        }),
        (s.default.Part.prototype._testLoopBoundries = function (t) {
          this._loop &&
          (t.startOffset < this._loopStart || t.startOffset >= this._loopEnd)
            ? t.cancel(0)
            : t.state === s.default.State.Stopped && this._restartEvent(t);
        }),
        Object.defineProperty(s.default.Part.prototype, "probability", {
          get: function () {
            return this._probability;
          },
          set: function (t) {
            (this._probability = t), this._setAll("probability", t);
          },
        }),
        Object.defineProperty(s.default.Part.prototype, "humanize", {
          get: function () {
            return this._humanize;
          },
          set: function (t) {
            (this._humanize = t), this._setAll("humanize", t);
          },
        }),
        Object.defineProperty(s.default.Part.prototype, "loop", {
          get: function () {
            return this._loop;
          },
          set: function (t) {
            (this._loop = t),
              this._forEach(function (e) {
                (e._loopStart = this._loopStart),
                  (e._loopEnd = this._loopEnd),
                  (e.loop = t),
                  this._testLoopBoundries(e);
              });
          },
        }),
        Object.defineProperty(s.default.Part.prototype, "loopEnd", {
          get: function () {
            return s.default.Ticks(this._loopEnd).toSeconds();
          },
          set: function (t) {
            (this._loopEnd = this.toTicks(t)),
              this._loop &&
                this._forEach(function (e) {
                  (e.loopEnd = t), this._testLoopBoundries(e);
                });
          },
        }),
        Object.defineProperty(s.default.Part.prototype, "loopStart", {
          get: function () {
            return s.default.Ticks(this._loopStart).toSeconds();
          },
          set: function (t) {
            (this._loopStart = this.toTicks(t)),
              this._loop &&
                this._forEach(function (t) {
                  (t.loopStart = this.loopStart), this._testLoopBoundries(t);
                });
          },
        }),
        Object.defineProperty(s.default.Part.prototype, "playbackRate", {
          get: function () {
            return this._playbackRate;
          },
          set: function (t) {
            (this._playbackRate = t), this._setAll("playbackRate", t);
          },
        }),
        Object.defineProperty(s.default.Part.prototype, "length", {
          get: function () {
            return this._events.length;
          },
        }),
        (s.default.Part.prototype.dispose = function () {
          return (
            s.default.Event.prototype.dispose.call(this),
            this.removeAll(),
            (this.callback = null),
            (this._events = null),
            this
          );
        }),
        (e.default = s.default.Part);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(51);
      (s.default.Loop = function () {
        var t = s.default.defaults(
          arguments,
          ["callback", "interval"],
          s.default.Loop
        );
        s.default.call(this),
          (this._event = new s.default.Event({
            callback: this._tick.bind(this),
            loop: !0,
            loopEnd: t.interval,
            playbackRate: t.playbackRate,
            probability: t.probability,
          })),
          (this.callback = t.callback),
          (this.iterations = t.iterations);
      }),
        s.default.extend(s.default.Loop),
        (s.default.Loop.defaults = {
          interval: "4n",
          callback: s.default.noOp,
          playbackRate: 1,
          iterations: 1 / 0,
          probability: !0,
          mute: !1,
        }),
        (s.default.Loop.prototype.start = function (t) {
          return this._event.start(t), this;
        }),
        (s.default.Loop.prototype.stop = function (t) {
          return this._event.stop(t), this;
        }),
        (s.default.Loop.prototype.cancel = function (t) {
          return this._event.cancel(t), this;
        }),
        (s.default.Loop.prototype._tick = function (t) {
          this.callback(t);
        }),
        Object.defineProperty(s.default.Loop.prototype, "state", {
          get: function () {
            return this._event.state;
          },
        }),
        Object.defineProperty(s.default.Loop.prototype, "progress", {
          get: function () {
            return this._event.progress;
          },
        }),
        Object.defineProperty(s.default.Loop.prototype, "interval", {
          get: function () {
            return this._event.loopEnd;
          },
          set: function (t) {
            this._event.loopEnd = t;
          },
        }),
        Object.defineProperty(s.default.Loop.prototype, "playbackRate", {
          get: function () {
            return this._event.playbackRate;
          },
          set: function (t) {
            this._event.playbackRate = t;
          },
        }),
        Object.defineProperty(s.default.Loop.prototype, "humanize", {
          get: function () {
            return this._event.humanize;
          },
          set: function (t) {
            this._event.humanize = t;
          },
        }),
        Object.defineProperty(s.default.Loop.prototype, "probability", {
          get: function () {
            return this._event.probability;
          },
          set: function (t) {
            this._event.probability = t;
          },
        }),
        Object.defineProperty(s.default.Loop.prototype, "mute", {
          get: function () {
            return this._event.mute;
          },
          set: function (t) {
            this._event.mute = t;
          },
        }),
        Object.defineProperty(s.default.Loop.prototype, "iterations", {
          get: function () {
            return !0 === this._event.loop ? 1 / 0 : this._event.loop;
          },
          set: function (t) {
            this._event.loop = t === 1 / 0 || t;
          },
        }),
        (s.default.Loop.prototype.dispose = function () {
          this._event.dispose(), (this._event = null), (this.callback = null);
        }),
        (e.default = s.default.Loop);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(15), i(33);
      (s.default.StereoXFeedbackEffect = function () {
        var t = s.default.defaults(
          arguments,
          ["feedback"],
          s.default.FeedbackEffect
        );
        s.default.StereoEffect.call(this, t),
          (this.feedback = new s.default.Signal(
            t.feedback,
            s.default.Type.NormalRange
          )),
          (this._feedbackLR = new s.default.Gain()),
          (this._feedbackRL = new s.default.Gain()),
          this.effectReturnL.chain(this._feedbackLR, this.effectSendR),
          this.effectReturnR.chain(this._feedbackRL, this.effectSendL),
          this.feedback.fan(this._feedbackLR.gain, this._feedbackRL.gain),
          this._readOnly(["feedback"]);
      }),
        s.default.extend(
          s.default.StereoXFeedbackEffect,
          s.default.StereoEffect
        ),
        (s.default.StereoXFeedbackEffect.prototype.dispose = function () {
          return (
            s.default.StereoEffect.prototype.dispose.call(this),
            this._writable(["feedback"]),
            this.feedback.dispose(),
            (this.feedback = null),
            this._feedbackLR.dispose(),
            (this._feedbackLR = null),
            this._feedbackRL.dispose(),
            (this._feedbackRL = null),
            this
          );
        }),
        (e.default = s.default.StereoXFeedbackEffect);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(8), i(53), i(52);
      (s.default.MidSideEffect = function () {
        s.default.Effect.apply(this, arguments),
          (this._midSideSplit = new s.default.MidSideSplit()),
          (this._midSideMerge = new s.default.MidSideMerge()),
          (this.midSend = this._midSideSplit.mid),
          (this.sideSend = this._midSideSplit.side),
          (this.midReturn = this._midSideMerge.mid),
          (this.sideReturn = this._midSideMerge.side),
          this.effectSend.connect(this._midSideSplit),
          this._midSideMerge.connect(this.effectReturn);
      }),
        s.default.extend(s.default.MidSideEffect, s.default.Effect),
        (s.default.MidSideEffect.prototype.dispose = function () {
          return (
            s.default.Effect.prototype.dispose.call(this),
            this._midSideSplit.dispose(),
            (this._midSideSplit = null),
            this._midSideMerge.dispose(),
            (this._midSideMerge = null),
            (this.midSend = null),
            (this.sideSend = null),
            (this.midReturn = null),
            (this.sideReturn = null),
            this
          );
        }),
        (e.default = s.default.MidSideEffect);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(11), i(8);
      (s.default.Convolver = function () {
        var t = s.default.defaults(
          arguments,
          ["url", "onload"],
          s.default.Convolver
        );
        s.default.Effect.call(this, t),
          (this._convolver = this.context.createConvolver()),
          (this._buffer = new s.default.Buffer(
            t.url,
            function (e) {
              (this.buffer = e.get()), t.onload();
            }.bind(this)
          )),
          this._buffer.loaded && (this.buffer = this._buffer),
          (this.normalize = t.normalize),
          this.connectEffect(this._convolver);
      }),
        s.default.extend(s.default.Convolver, s.default.Effect),
        (s.default.Convolver.defaults = {
          onload: s.default.noOp,
          normalize: !0,
        }),
        Object.defineProperty(s.default.Convolver.prototype, "buffer", {
          get: function () {
            return this._buffer.length ? this._buffer : null;
          },
          set: function (t) {
            this._buffer.set(t),
              this._convolver.buffer &&
                (this.effectSend.disconnect(),
                this._convolver.disconnect(),
                (this._convolver = this.context.createConvolver()),
                this.connectEffect(this._convolver)),
              (this._convolver.buffer = this._buffer.get());
          },
        }),
        Object.defineProperty(s.default.Convolver.prototype, "normalize", {
          get: function () {
            return this._convolver.normalize;
          },
          set: function (t) {
            this._convolver.normalize = t;
          },
        }),
        (s.default.Convolver.prototype.load = function (t, e) {
          return this._buffer.load(
            t,
            function (t) {
              (this.buffer = t), e && e();
            }.bind(this)
          );
        }),
        (s.default.Convolver.prototype.dispose = function () {
          return (
            s.default.Effect.prototype.dispose.call(this),
            this._buffer.dispose(),
            (this._buffer = null),
            this._convolver.disconnect(),
            (this._convolver = null),
            this
          );
        }),
        (e.default = s.default.Convolver);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(7), i(5), i(13);
      (s.default.Modulo = function (t) {
        s.default.SignalBase.call(this),
          this.createInsOuts(1, 0),
          (this._shaper = new s.default.WaveShaper(Math.pow(2, 16))),
          (this._multiply = new s.default.Multiply()),
          (this._subtract = this.output = new s.default.Subtract()),
          (this._modSignal = new s.default.Signal(t)),
          s.default.connect(this.input, this._shaper),
          s.default.connect(this.input, this._subtract),
          this._modSignal.connect(this._multiply, 0, 0),
          this._shaper.connect(this._multiply, 0, 1),
          this._multiply.connect(this._subtract, 0, 1),
          this._setWaveShaper(t);
      }),
        s.default.extend(s.default.Modulo, s.default.SignalBase),
        (s.default.Modulo.prototype._setWaveShaper = function (t) {
          this._shaper.setMap(function (e) {
            return Math.floor((e + 1e-4) / t);
          });
        }),
        Object.defineProperty(s.default.Modulo.prototype, "value", {
          get: function () {
            return this._modSignal.value;
          },
          set: function (t) {
            (this._modSignal.value = t), this._setWaveShaper(t);
          },
        }),
        (s.default.Modulo.prototype.dispose = function () {
          return (
            s.default.SignalBase.prototype.dispose.call(this),
            this._shaper.dispose(),
            (this._shaper = null),
            this._multiply.dispose(),
            (this._multiply = null),
            this._subtract.dispose(),
            (this._subtract = null),
            this._modSignal.dispose(),
            (this._modSignal = null),
            this
          );
        }),
        (e.default = s.default.Modulo);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(20), i(92);
      (s.default.OfflineContext = function (t, e, i) {
        var n = new OfflineAudioContext(t, e * i, i);
        s.default.Context.call(this, {
          context: n,
          clockSource: "offline",
          lookAhead: 0,
          updateInterval: 128 / i,
        }),
          (this._duration = e),
          (this._currentTime = 0);
      }),
        s.default.extend(s.default.OfflineContext, s.default.Context),
        (s.default.OfflineContext.prototype.now = function () {
          return this._currentTime;
        }),
        (s.default.OfflineContext.prototype.resume = function () {
          return Promise.resolve();
        }),
        (s.default.OfflineContext.prototype.render = function () {
          for (; this._duration - this._currentTime >= 0; )
            this.emit("tick"), (this._currentTime += 0.005);
          return this._context.startRendering();
        }),
        (s.default.OfflineContext.prototype.close = function () {
          return (this._context = null), Promise.resolve();
        }),
        (e.default = s.default.OfflineContext);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(16), i(11), i(76), i(40);
      (s.default.Offline = function (t, e) {
        var i = s.default.context.sampleRate,
          n = s.default.context,
          o = new s.default.OfflineContext(2, e, i);
        s.default.context = o;
        var a = t(s.default.Transport),
          r = null;
        return (
          (r =
            a && s.default.isFunction(a.then)
              ? a.then(function () {
                  return o.render();
                })
              : o.render()),
          (s.default.context = n),
          r.then(function (t) {
            return new s.default.Buffer(t);
          })
        );
      }),
        (e.default = s.default.Offline);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(11);
      (s.default.Buffers = function (t) {
        var e = Array.prototype.slice.call(arguments);
        e.shift();
        var i = s.default.defaults(e, ["onload", "baseUrl"], s.default.Buffers);
        for (var n in (s.default.call(this),
        (this._buffers = {}),
        (this.baseUrl = i.baseUrl),
        (this._loadingCount = 0),
        t))
          this._loadingCount++,
            this.add(n, t[n], this._bufferLoaded.bind(this, i.onload));
      }),
        s.default.extend(s.default.Buffers),
        (s.default.Buffers.defaults = { onload: s.default.noOp, baseUrl: "" }),
        (s.default.Buffers.prototype.has = function (t) {
          return this._buffers.hasOwnProperty(t);
        }),
        (s.default.Buffers.prototype.get = function (t) {
          if (this.has(t)) return this._buffers[t];
          throw new Error("Tone.Buffers: no buffer named " + t);
        }),
        (s.default.Buffers.prototype._bufferLoaded = function (t) {
          this._loadingCount--, 0 === this._loadingCount && t && t(this);
        }),
        Object.defineProperty(s.default.Buffers.prototype, "loaded", {
          get: function () {
            var t = !0;
            for (var e in this._buffers) {
              var i = this.get(e);
              t = t && i.loaded;
            }
            return t;
          },
        }),
        (s.default.Buffers.prototype.add = function (t, e, i) {
          return (
            (i = s.default.defaultArg(i, s.default.noOp)),
            e instanceof s.default.Buffer
              ? ((this._buffers[t] = e), i(this))
              : e instanceof AudioBuffer
              ? ((this._buffers[t] = new s.default.Buffer(e)), i(this))
              : s.default.isString(e) &&
                (this._buffers[t] = new s.default.Buffer(this.baseUrl + e, i)),
            this
          );
        }),
        (s.default.Buffers.prototype.dispose = function () {
          for (var t in (s.default.prototype.dispose.call(this), this._buffers))
            this._buffers[t].dispose();
          return (this._buffers = null), this;
        }),
        (e.default = s.default.Buffers);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      (s.default.CtrlPattern = function () {
        var t = s.default.defaults(
          arguments,
          ["values", "type"],
          s.default.CtrlPattern
        );
        s.default.call(this),
          (this.values = t.values),
          (this.index = 0),
          (this._type = null),
          (this._shuffled = null),
          (this._direction = null),
          (this.type = t.type);
      }),
        s.default.extend(s.default.CtrlPattern),
        (s.default.CtrlPattern.Type = {
          Up: "up",
          Down: "down",
          UpDown: "upDown",
          DownUp: "downUp",
          AlternateUp: "alternateUp",
          AlternateDown: "alternateDown",
          Random: "random",
          RandomWalk: "randomWalk",
          RandomOnce: "randomOnce",
        }),
        (s.default.CtrlPattern.defaults = {
          type: s.default.CtrlPattern.Type.Up,
          values: [],
        }),
        Object.defineProperty(s.default.CtrlPattern.prototype, "value", {
          get: function () {
            if (0 !== this.values.length) {
              if (1 === this.values.length) return this.values[0];
              this.index = Math.min(this.index, this.values.length - 1);
              var t = this.values[this.index];
              return (
                this.type === s.default.CtrlPattern.Type.RandomOnce &&
                  (this.values.length !== this._shuffled.length &&
                    this._shuffleValues(),
                  (t = this.values[this._shuffled[this.index]])),
                t
              );
            }
          },
        }),
        Object.defineProperty(s.default.CtrlPattern.prototype, "type", {
          get: function () {
            return this._type;
          },
          set: function (t) {
            (this._type = t),
              (this._shuffled = null),
              this._type === s.default.CtrlPattern.Type.Up ||
              this._type === s.default.CtrlPattern.Type.UpDown ||
              this._type === s.default.CtrlPattern.Type.RandomOnce ||
              this._type === s.default.CtrlPattern.Type.AlternateUp
                ? (this.index = 0)
                : (this._type !== s.default.CtrlPattern.Type.Down &&
                    this._type !== s.default.CtrlPattern.Type.DownUp &&
                    this._type !== s.default.CtrlPattern.Type.AlternateDown) ||
                  (this.index = this.values.length - 1),
              this._type === s.default.CtrlPattern.Type.UpDown ||
              this._type === s.default.CtrlPattern.Type.AlternateUp
                ? (this._direction = s.default.CtrlPattern.Type.Up)
                : (this._type !== s.default.CtrlPattern.Type.DownUp &&
                    this._type !== s.default.CtrlPattern.Type.AlternateDown) ||
                  (this._direction = s.default.CtrlPattern.Type.Down),
              this._type === s.default.CtrlPattern.Type.RandomOnce
                ? this._shuffleValues()
                : this._type === s.default.CtrlPattern.Type.Random &&
                  (this.index = Math.floor(Math.random() * this.values.length));
          },
        }),
        (s.default.CtrlPattern.prototype.next = function () {
          var t = this.type;
          return (
            t === s.default.CtrlPattern.Type.Up
              ? (this.index++,
                this.index >= this.values.length && (this.index = 0))
              : t === s.default.CtrlPattern.Type.Down
              ? (this.index--,
                this.index < 0 && (this.index = this.values.length - 1))
              : t === s.default.CtrlPattern.Type.UpDown ||
                t === s.default.CtrlPattern.Type.DownUp
              ? (this._direction === s.default.CtrlPattern.Type.Up
                  ? this.index++
                  : this.index--,
                this.index < 0
                  ? ((this.index = 1),
                    (this._direction = s.default.CtrlPattern.Type.Up))
                  : this.index >= this.values.length &&
                    ((this.index = this.values.length - 2),
                    (this._direction = s.default.CtrlPattern.Type.Down)))
              : t === s.default.CtrlPattern.Type.Random
              ? (this.index = Math.floor(Math.random() * this.values.length))
              : t === s.default.CtrlPattern.Type.RandomWalk
              ? Math.random() < 0.5
                ? (this.index--, (this.index = Math.max(this.index, 0)))
                : (this.index++,
                  (this.index = Math.min(this.index, this.values.length - 1)))
              : t === s.default.CtrlPattern.Type.RandomOnce
              ? (this.index++,
                this.index >= this.values.length &&
                  ((this.index = 0), this._shuffleValues()))
              : t === s.default.CtrlPattern.Type.AlternateUp
              ? (this._direction === s.default.CtrlPattern.Type.Up
                  ? ((this.index += 2),
                    (this._direction = s.default.CtrlPattern.Type.Down))
                  : ((this.index -= 1),
                    (this._direction = s.default.CtrlPattern.Type.Up)),
                this.index >= this.values.length &&
                  ((this.index = 0),
                  (this._direction = s.default.CtrlPattern.Type.Up)))
              : t === s.default.CtrlPattern.Type.AlternateDown &&
                (this._direction === s.default.CtrlPattern.Type.Up
                  ? ((this.index += 1),
                    (this._direction = s.default.CtrlPattern.Type.Down))
                  : ((this.index -= 2),
                    (this._direction = s.default.CtrlPattern.Type.Up)),
                this.index < 0 &&
                  ((this.index = this.values.length - 1),
                  (this._direction = s.default.CtrlPattern.Type.Down))),
            this.value
          );
        }),
        (s.default.CtrlPattern.prototype._shuffleValues = function () {
          var t = [];
          this._shuffled = [];
          for (var e = 0; e < this.values.length; e++) t[e] = e;
          for (; t.length > 0; ) {
            var i = t.splice(Math.floor(t.length * Math.random()), 1);
            this._shuffled.push(i[0]);
          }
        }),
        (s.default.CtrlPattern.prototype.dispose = function () {
          (this._shuffled = null), (this.values = null);
        }),
        (e.default = s.default.CtrlPattern);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(56), i(55);
      (s.default.TransportRepeatEvent = function (t, e) {
        s.default.TransportEvent.call(this, t, e),
          (e = s.default.defaultArg(
            e,
            s.default.TransportRepeatEvent.defaults
          )),
          (this.duration = s.default.Ticks(e.duration)),
          (this._interval = s.default.Ticks(e.interval)),
          (this._currentId = -1),
          (this._nextId = -1),
          (this._nextTick = this.time),
          (this._boundRestart = this._restart.bind(this)),
          this.Transport.on("start loopStart", this._boundRestart),
          this._restart();
      }),
        s.default.extend(
          s.default.TransportRepeatEvent,
          s.default.TransportEvent
        ),
        (s.default.TransportRepeatEvent.defaults = {
          duration: 1 / 0,
          interval: 1,
        }),
        (s.default.TransportRepeatEvent.prototype.invoke = function (t) {
          this._createEvents(t),
            s.default.TransportEvent.prototype.invoke.call(this, t);
        }),
        (s.default.TransportRepeatEvent.prototype._createEvents = function (t) {
          var e = this.Transport.getTicksAtTime(t);
          e >= this.time &&
            e >= this._nextTick &&
            this._nextTick + this._interval < this.time + this.duration &&
            ((this._nextTick += this._interval),
            (this._currentId = this._nextId),
            (this._nextId = this.Transport.scheduleOnce(
              this.invoke.bind(this),
              s.default.Ticks(this._nextTick)
            )));
        }),
        (s.default.TransportRepeatEvent.prototype._restart = function (t) {
          this.Transport.clear(this._currentId),
            this.Transport.clear(this._nextId),
            (this._nextTick = this.time);
          var e = this.Transport.getTicksAtTime(t);
          e > this.time &&
            (this._nextTick =
              this.time +
              Math.ceil((e - this.time) / this._interval) * this._interval),
            (this._currentId = this.Transport.scheduleOnce(
              this.invoke.bind(this),
              s.default.Ticks(this._nextTick)
            )),
            (this._nextTick += this._interval),
            (this._nextId = this.Transport.scheduleOnce(
              this.invoke.bind(this),
              s.default.Ticks(this._nextTick)
            ));
        }),
        (s.default.TransportRepeatEvent.prototype.dispose = function () {
          return (
            this.Transport.clear(this._currentId),
            this.Transport.clear(this._nextId),
            this.Transport.off("start loopStart", this._boundRestart),
            (this._boundCreateEvents = null),
            s.default.TransportEvent.prototype.dispose.call(this),
            (this.duration = null),
            (this._interval = null),
            this
          );
        }),
        (e.default = s.default.TransportRepeatEvent);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(4);
      (s.default.IntervalTimeline = function () {
        s.default.call(this), (this._root = null), (this._length = 0);
      }),
        s.default.extend(s.default.IntervalTimeline),
        (s.default.IntervalTimeline.prototype.add = function (t) {
          if (s.default.isUndef(t.time) || s.default.isUndef(t.duration))
            throw new Error(
              "Tone.IntervalTimeline: events must have time and duration parameters"
            );
          t.time = t.time.valueOf();
          var e = new n(t.time, t.time + t.duration, t);
          for (
            null === this._root ? (this._root = e) : this._root.insert(e),
              this._length++;
            null !== e;

          )
            e.updateHeight(), e.updateMax(), this._rebalance(e), (e = e.parent);
          return this;
        }),
        (s.default.IntervalTimeline.prototype.remove = function (t) {
          if (null !== this._root) {
            var e = [];
            this._root.search(t.time, e);
            for (var i = 0; i < e.length; i++) {
              var s = e[i];
              if (s.event === t) {
                this._removeNode(s), this._length--;
                break;
              }
            }
          }
          return this;
        }),
        Object.defineProperty(s.default.IntervalTimeline.prototype, "length", {
          get: function () {
            return this._length;
          },
        }),
        (s.default.IntervalTimeline.prototype.cancel = function (t) {
          return (
            this.forEachFrom(
              t,
              function (t) {
                this.remove(t);
              }.bind(this)
            ),
            this
          );
        }),
        (s.default.IntervalTimeline.prototype._setRoot = function (t) {
          (this._root = t), null !== this._root && (this._root.parent = null);
        }),
        (s.default.IntervalTimeline.prototype._replaceNodeInParent = function (
          t,
          e
        ) {
          null !== t.parent
            ? (t.isLeftChild() ? (t.parent.left = e) : (t.parent.right = e),
              this._rebalance(t.parent))
            : this._setRoot(e);
        }),
        (s.default.IntervalTimeline.prototype._removeNode = function (t) {
          if (null === t.left && null === t.right)
            this._replaceNodeInParent(t, null);
          else if (null === t.right) this._replaceNodeInParent(t, t.left);
          else if (null === t.left) this._replaceNodeInParent(t, t.right);
          else {
            var e, i;
            if (t.getBalance() > 0)
              if (null === t.left.right)
                ((e = t.left).right = t.right), (i = e);
              else {
                for (e = t.left.right; null !== e.right; ) e = e.right;
                (e.parent.right = e.left),
                  (i = e.parent),
                  (e.left = t.left),
                  (e.right = t.right);
              }
            else if (null === t.right.left)
              ((e = t.right).left = t.left), (i = e);
            else {
              for (e = t.right.left; null !== e.left; ) e = e.left;
              (e.parent.left = e.right),
                (i = e.parent),
                (e.left = t.left),
                (e.right = t.right);
            }
            null !== t.parent
              ? t.isLeftChild()
                ? (t.parent.left = e)
                : (t.parent.right = e)
              : this._setRoot(e),
              this._rebalance(i);
          }
          t.dispose();
        }),
        (s.default.IntervalTimeline.prototype._rotateLeft = function (t) {
          var e = t.parent,
            i = t.isLeftChild(),
            s = t.right;
          (t.right = s.left),
            (s.left = t),
            null !== e ? (i ? (e.left = s) : (e.right = s)) : this._setRoot(s);
        }),
        (s.default.IntervalTimeline.prototype._rotateRight = function (t) {
          var e = t.parent,
            i = t.isLeftChild(),
            s = t.left;
          (t.left = s.right),
            (s.right = t),
            null !== e ? (i ? (e.left = s) : (e.right = s)) : this._setRoot(s);
        }),
        (s.default.IntervalTimeline.prototype._rebalance = function (t) {
          var e = t.getBalance();
          e > 1
            ? t.left.getBalance() < 0
              ? this._rotateLeft(t.left)
              : this._rotateRight(t)
            : e < -1 &&
              (t.right.getBalance() > 0
                ? this._rotateRight(t.right)
                : this._rotateLeft(t));
        }),
        (s.default.IntervalTimeline.prototype.get = function (t) {
          if (null !== this._root) {
            var e = [];
            if ((this._root.search(t, e), e.length > 0)) {
              for (var i = e[0], s = 1; s < e.length; s++)
                e[s].low > i.low && (i = e[s]);
              return i.event;
            }
          }
          return null;
        }),
        (s.default.IntervalTimeline.prototype.forEach = function (t) {
          if (null !== this._root) {
            var e = [];
            this._root.traverse(function (t) {
              e.push(t);
            });
            for (var i = 0; i < e.length; i++) {
              var s = e[i].event;
              s && t(s);
            }
          }
          return this;
        }),
        (s.default.IntervalTimeline.prototype.forEachAtTime = function (t, e) {
          if (null !== this._root) {
            var i = [];
            this._root.search(t, i);
            for (var s = i.length - 1; s >= 0; s--) {
              var n = i[s].event;
              n && e(n);
            }
          }
          return this;
        }),
        (s.default.IntervalTimeline.prototype.forEachFrom = function (t, e) {
          if (null !== this._root) {
            var i = [];
            this._root.searchAfter(t, i);
            for (var s = i.length - 1; s >= 0; s--) {
              e(i[s].event);
            }
          }
          return this;
        }),
        (s.default.IntervalTimeline.prototype.dispose = function () {
          var t = [];
          null !== this._root &&
            this._root.traverse(function (e) {
              t.push(e);
            });
          for (var e = 0; e < t.length; e++) t[e].dispose();
          return (t = null), (this._root = null), this;
        });
      var n = function (t, e, i) {
        (this.event = i),
          (this.low = t),
          (this.high = e),
          (this.max = this.high),
          (this._left = null),
          (this._right = null),
          (this.parent = null),
          (this.height = 0);
      };
      (n.prototype.insert = function (t) {
        t.low <= this.low
          ? null === this.left
            ? (this.left = t)
            : this.left.insert(t)
          : null === this.right
          ? (this.right = t)
          : this.right.insert(t);
      }),
        (n.prototype.search = function (t, e) {
          t > this.max ||
            (null !== this.left && this.left.search(t, e),
            this.low <= t && this.high > t && e.push(this),
            this.low > t || (null !== this.right && this.right.search(t, e)));
        }),
        (n.prototype.searchAfter = function (t, e) {
          this.low >= t &&
            (e.push(this), null !== this.left && this.left.searchAfter(t, e)),
            null !== this.right && this.right.searchAfter(t, e);
        }),
        (n.prototype.traverse = function (t) {
          t(this),
            null !== this.left && this.left.traverse(t),
            null !== this.right && this.right.traverse(t);
        }),
        (n.prototype.updateHeight = function () {
          null !== this.left && null !== this.right
            ? (this.height = Math.max(this.left.height, this.right.height) + 1)
            : null !== this.right
            ? (this.height = this.right.height + 1)
            : null !== this.left
            ? (this.height = this.left.height + 1)
            : (this.height = 0);
        }),
        (n.prototype.updateMax = function () {
          (this.max = this.high),
            null !== this.left &&
              (this.max = Math.max(this.max, this.left.max)),
            null !== this.right &&
              (this.max = Math.max(this.max, this.right.max));
        }),
        (n.prototype.getBalance = function () {
          var t = 0;
          return (
            null !== this.left && null !== this.right
              ? (t = this.left.height - this.right.height)
              : null !== this.left
              ? (t = this.left.height + 1)
              : null !== this.right && (t = -(this.right.height + 1)),
            t
          );
        }),
        (n.prototype.isLeftChild = function () {
          return null !== this.parent && this.parent.left === this;
        }),
        Object.defineProperty(n.prototype, "left", {
          get: function () {
            return this._left;
          },
          set: function (t) {
            (this._left = t),
              null !== t && (t.parent = this),
              this.updateHeight(),
              this.updateMax();
          },
        }),
        Object.defineProperty(n.prototype, "right", {
          get: function () {
            return this._right;
          },
          set: function (t) {
            (this._right = t),
              null !== t && (t.parent = this),
              this.updateHeight(),
              this.updateMax();
          },
        }),
        (n.prototype.dispose = function () {
          (this.parent = null),
            (this._left = null),
            (this._right = null),
            (this.event = null);
        }),
        (e.default = s.default.IntervalTimeline);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(2);
      function n(t) {
        return function (e, i) {
          (i = this.toSeconds(i)), t.apply(this, arguments);
          var s = this._events.get(i),
            n = this._events.previousEvent(s),
            o = this._getTicksUntilEvent(n, i);
          return (s.ticks = Math.max(o, 0)), this;
        };
      }
      (s.default.TickSignal = function (t) {
        (t = s.default.defaultArg(t, 1)),
          s.default.Signal.call(this, {
            units: s.default.Type.Ticks,
            value: t,
          }),
          (this._events.memory = 1 / 0),
          this.cancelScheduledValues(0),
          this._events.add({
            type: s.default.Param.AutomationType.SetValue,
            time: 0,
            value: t,
          });
      }),
        s.default.extend(s.default.TickSignal, s.default.Signal),
        (s.default.TickSignal.prototype.setValueAtTime = n(
          s.default.Signal.prototype.setValueAtTime
        )),
        (s.default.TickSignal.prototype.linearRampToValueAtTime = n(
          s.default.Signal.prototype.linearRampToValueAtTime
        )),
        (s.default.TickSignal.prototype.setTargetAtTime = function (t, e, i) {
          (e = this.toSeconds(e)),
            this.setRampPoint(e),
            (t = this._fromUnits(t));
          for (
            var s = this._events.get(e),
              n = Math.round(Math.max(1 / i, 1)),
              o = 0;
            o <= n;
            o++
          ) {
            var a = i * o + e,
              r = this._exponentialApproach(s.time, s.value, t, i, a);
            this.linearRampToValueAtTime(this._toUnits(r), a);
          }
          return this;
        }),
        (s.default.TickSignal.prototype.exponentialRampToValueAtTime = function (
          t,
          e
        ) {
          (e = this.toSeconds(e)), (t = this._fromUnits(t));
          for (
            var i = this._events.get(e),
              s = Math.round(Math.max(10 * (e - i.time), 1)),
              n = (e - i.time) / s,
              o = 0;
            o <= s;
            o++
          ) {
            var a = n * o + i.time,
              r = this._exponentialInterpolate(i.time, i.value, e, t, a);
            this.linearRampToValueAtTime(this._toUnits(r), a);
          }
          return this;
        }),
        (s.default.TickSignal.prototype._getTicksUntilEvent = function (t, e) {
          if (null === t) t = { ticks: 0, time: 0 };
          else if (s.default.isUndef(t.ticks)) {
            var i = this._events.previousEvent(t);
            t.ticks = this._getTicksUntilEvent(i, t.time);
          }
          var n = this.getValueAtTime(t.time),
            o = this.getValueAtTime(e);
          return (
            this._events.get(e).time === e &&
              this._events.get(e).type ===
                s.default.Param.AutomationType.SetValue &&
              (o = this.getValueAtTime(e - this.sampleTime)),
            0.5 * (e - t.time) * (n + o) + t.ticks
          );
        }),
        (s.default.TickSignal.prototype.getTicksAtTime = function (t) {
          t = this.toSeconds(t);
          var e = this._events.get(t);
          return Math.max(this._getTicksUntilEvent(e, t), 0);
        }),
        (s.default.TickSignal.prototype.getDurationOfTicks = function (t, e) {
          e = this.toSeconds(e);
          var i = this.getTicksAtTime(e);
          return this.getTimeOfTick(i + t) - e;
        }),
        (s.default.TickSignal.prototype.getTimeOfTick = function (t) {
          var e = this._events.get(t, "ticks"),
            i = this._events.getAfter(t, "ticks");
          if (e && e.ticks === t) return e.time;
          if (
            e &&
            i &&
            i.type === s.default.Param.AutomationType.Linear &&
            e.value !== i.value
          ) {
            var n = this.getValueAtTime(e.time),
              o = (this.getValueAtTime(i.time) - n) / (i.time - e.time),
              a = Math.sqrt(Math.pow(n, 2) - 2 * o * (e.ticks - t)),
              r = (-n + a) / o;
            return (r > 0 ? r : (-n - a) / o) + e.time;
          }
          return e
            ? 0 === e.value
              ? 1 / 0
              : e.time + (t - e.ticks) / e.value
            : t / this._initialValue;
        }),
        (s.default.TickSignal.prototype.ticksToTime = function (t, e) {
          return (
            (e = this.toSeconds(e)),
            new s.default.Time(this.getDurationOfTicks(t, e))
          );
        }),
        (s.default.TickSignal.prototype.timeToTicks = function (t, e) {
          (e = this.toSeconds(e)), (t = this.toSeconds(t));
          var i = this.getTicksAtTime(e),
            n = this.getTicksAtTime(e + t);
          return new s.default.Ticks(n - i);
        }),
        (e.default = s.default.TickSignal);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(57), i(34), i(35), i(20);
      (s.default.Clock = function () {
        var t = s.default.defaults(
          arguments,
          ["callback", "frequency"],
          s.default.Clock
        );
        s.default.Emitter.call(this),
          (this.callback = t.callback),
          (this._nextTick = 0),
          (this._tickSource = new s.default.TickSource(t.frequency)),
          (this._lastUpdate = 0),
          (this.frequency = this._tickSource.frequency),
          this._readOnly("frequency"),
          (this._state = new s.default.TimelineState(s.default.State.Stopped)),
          this._state.setStateAtTime(s.default.State.Stopped, 0),
          (this._boundLoop = this._loop.bind(this)),
          this.context.on("tick", this._boundLoop);
      }),
        s.default.extend(s.default.Clock, s.default.Emitter),
        (s.default.Clock.defaults = { callback: s.default.noOp, frequency: 1 }),
        Object.defineProperty(s.default.Clock.prototype, "state", {
          get: function () {
            return this._state.getValueAtTime(this.now());
          },
        }),
        (s.default.Clock.prototype.start = function (t, e) {
          return (
            this.context.resume(),
            (t = this.toSeconds(t)),
            this._state.getValueAtTime(t) !== s.default.State.Started &&
              (this._state.setStateAtTime(s.default.State.Started, t),
              this._tickSource.start(t, e),
              t < this._lastUpdate && this.emit("start", t, e)),
            this
          );
        }),
        (s.default.Clock.prototype.stop = function (t) {
          return (
            (t = this.toSeconds(t)),
            this._state.cancel(t),
            this._state.setStateAtTime(s.default.State.Stopped, t),
            this._tickSource.stop(t),
            t < this._lastUpdate && this.emit("stop", t),
            this
          );
        }),
        (s.default.Clock.prototype.pause = function (t) {
          return (
            (t = this.toSeconds(t)),
            this._state.getValueAtTime(t) === s.default.State.Started &&
              (this._state.setStateAtTime(s.default.State.Paused, t),
              this._tickSource.pause(t),
              t < this._lastUpdate && this.emit("pause", t)),
            this
          );
        }),
        Object.defineProperty(s.default.Clock.prototype, "ticks", {
          get: function () {
            return Math.ceil(this.getTicksAtTime(this.now()));
          },
          set: function (t) {
            this._tickSource.ticks = t;
          },
        }),
        Object.defineProperty(s.default.Clock.prototype, "seconds", {
          get: function () {
            return this._tickSource.seconds;
          },
          set: function (t) {
            this._tickSource.seconds = t;
          },
        }),
        (s.default.Clock.prototype.getSecondsAtTime = function (t) {
          return this._tickSource.getSecondsAtTime(t);
        }),
        (s.default.Clock.prototype.setTicksAtTime = function (t, e) {
          return this._tickSource.setTicksAtTime(t, e), this;
        }),
        (s.default.Clock.prototype.getTicksAtTime = function (t) {
          return this._tickSource.getTicksAtTime(t);
        }),
        (s.default.Clock.prototype.nextTickTime = function (t, e) {
          e = this.toSeconds(e);
          var i = this.getTicksAtTime(e);
          return this._tickSource.getTimeOfTick(i + t, e);
        }),
        (s.default.Clock.prototype._loop = function () {
          var t = this._lastUpdate,
            e = this.now();
          (this._lastUpdate = e),
            t !== e &&
              (this._state.forEachBetween(
                t,
                e,
                function (t) {
                  switch (t.state) {
                    case s.default.State.Started:
                      var e = this._tickSource.getTicksAtTime(t.time);
                      this.emit("start", t.time, e);
                      break;
                    case s.default.State.Stopped:
                      0 !== t.time && this.emit("stop", t.time);
                      break;
                    case s.default.State.Paused:
                      this.emit("pause", t.time);
                  }
                }.bind(this)
              ),
              this._tickSource.forEachTickBetween(
                t,
                e,
                function (t, e) {
                  this.callback(t, e);
                }.bind(this)
              ));
        }),
        (s.default.Clock.prototype.getStateAtTime = function (t) {
          return (t = this.toSeconds(t)), this._state.getValueAtTime(t);
        }),
        (s.default.Clock.prototype.dispose = function () {
          s.default.Emitter.prototype.dispose.call(this),
            this.context.off("tick", this._boundLoop),
            this._writable("frequency"),
            this._tickSource.dispose(),
            (this._tickSource = null),
            (this.frequency = null),
            (this._boundLoop = null),
            (this._nextTick = 1 / 0),
            (this.callback = null),
            this._state.dispose(),
            (this._state = null);
        }),
        (e.default = s.default.Clock);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(2), i(5), i(7);
      (s.default.GreaterThanZero = function () {
        s.default.SignalBase.call(this),
          (this._thresh = this.output = new s.default.WaveShaper(function (t) {
            return t <= 0 ? 0 : 1;
          }, 127)),
          (this._scale = this.input = new s.default.Multiply(1e4)),
          this._scale.connect(this._thresh);
      }),
        s.default.extend(s.default.GreaterThanZero, s.default.SignalBase),
        (s.default.GreaterThanZero.prototype.dispose = function () {
          return (
            s.default.SignalBase.prototype.dispose.call(this),
            this._scale.dispose(),
            (this._scale = null),
            this._thresh.dispose(),
            (this._thresh = null),
            this
          );
        }),
        (e.default = s.default.GreaterThanZero);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(84), i(13), i(2);
      (s.default.GreaterThan = function (t) {
        s.default.Signal.call(this),
          this.createInsOuts(2, 0),
          (this._param = this.input[0] = new s.default.Subtract(t)),
          (this.input[1] = this._param.input[1]),
          (this._gtz = this.output = new s.default.GreaterThanZero()),
          this._param.connect(this._gtz);
      }),
        s.default.extend(s.default.GreaterThan, s.default.Signal),
        (s.default.GreaterThan.prototype.dispose = function () {
          return (
            s.default.Signal.prototype.dispose.call(this),
            this._gtz.dispose(),
            (this._gtz = null),
            this
          );
        }),
        (e.default = s.default.GreaterThan);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(47), i(26);
      (s.default.ScaledEnvelope = function () {
        var t = s.default.defaults(
          arguments,
          ["attack", "decay", "sustain", "release"],
          s.default.Envelope
        );
        s.default.Envelope.call(this, t),
          (t = s.default.defaultArg(t, s.default.ScaledEnvelope.defaults)),
          (this._exp = this.output = new s.default.Pow(t.exponent)),
          (this._scale = this.output = new s.default.Scale(t.min, t.max)),
          this._sig.chain(this._exp, this._scale);
      }),
        s.default.extend(s.default.ScaledEnvelope, s.default.Envelope),
        (s.default.ScaledEnvelope.defaults = { min: 0, max: 1, exponent: 1 }),
        Object.defineProperty(s.default.ScaledEnvelope.prototype, "min", {
          get: function () {
            return this._scale.min;
          },
          set: function (t) {
            this._scale.min = t;
          },
        }),
        Object.defineProperty(s.default.ScaledEnvelope.prototype, "max", {
          get: function () {
            return this._scale.max;
          },
          set: function (t) {
            this._scale.max = t;
          },
        }),
        Object.defineProperty(s.default.ScaledEnvelope.prototype, "exponent", {
          get: function () {
            return this._exp.value;
          },
          set: function (t) {
            this._exp.value = t;
          },
        }),
        (s.default.ScaledEnvelope.prototype.dispose = function () {
          return (
            s.default.Envelope.prototype.dispose.call(this),
            this._scale.dispose(),
            (this._scale = null),
            this._exp.dispose(),
            (this._exp = null),
            this
          );
        }),
        (e.default = s.default.ScaledEnvelope);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(7), i(30);
      (s.default.Abs = function () {
        s.default.SignalBase.call(this),
          (this._abs = this.input = this.output = new s.default.WaveShaper(
            function (t) {
              return Math.abs(t) < 0.001 ? 0 : Math.abs(t);
            },
            1024
          ));
      }),
        s.default.extend(s.default.Abs, s.default.SignalBase),
        (s.default.Abs.prototype.dispose = function () {
          return (
            s.default.SignalBase.prototype.dispose.call(this),
            this._abs.dispose(),
            (this._abs = null),
            this
          );
        }),
        (e.default = s.default.Abs);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(3), i(1);
      (s.default.Solo = function () {
        var t = s.default.defaults(arguments, ["solo"], s.default.Solo);
        s.default.AudioNode.call(this),
          (this.input = this.output = new s.default.Gain()),
          (this._soloBind = this._soloed.bind(this)),
          this.context.on("solo", this._soloBind),
          (this.solo = t.solo);
      }),
        s.default.extend(s.default.Solo, s.default.AudioNode),
        (s.default.Solo.defaults = { solo: !1 }),
        Object.defineProperty(s.default.Solo.prototype, "solo", {
          get: function () {
            return this._isSoloed();
          },
          set: function (t) {
            t ? this._addSolo() : this._removeSolo(),
              this.context.emit("solo", this);
          },
        }),
        Object.defineProperty(s.default.Solo.prototype, "muted", {
          get: function () {
            return 0 === this.input.gain.value;
          },
        }),
        (s.default.Solo.prototype._addSolo = function () {
          s.default.isArray(this.context._currentSolo) ||
            (this.context._currentSolo = []),
            this._isSoloed() || this.context._currentSolo.push(this);
        }),
        (s.default.Solo.prototype._removeSolo = function () {
          if (this._isSoloed()) {
            var t = this.context._currentSolo.indexOf(this);
            this.context._currentSolo.splice(t, 1);
          }
        }),
        (s.default.Solo.prototype._isSoloed = function () {
          return (
            !!s.default.isArray(this.context._currentSolo) &&
            0 !== this.context._currentSolo.length &&
            -1 !== this.context._currentSolo.indexOf(this)
          );
        }),
        (s.default.Solo.prototype._noSolos = function () {
          return (
            !s.default.isArray(this.context._currentSolo) ||
            0 === this.context._currentSolo.length
          );
        }),
        (s.default.Solo.prototype._soloed = function () {
          this._isSoloed()
            ? (this.input.gain.value = 1)
            : this._noSolos()
            ? (this.input.gain.value = 1)
            : (this.input.gain.value = 0);
        }),
        (s.default.Solo.prototype.dispose = function () {
          return (
            this.context.off("solo", this._soloBind),
            this._removeSolo(),
            (this._soloBind = null),
            s.default.AudioNode.prototype.dispose.call(this),
            this
          );
        }),
        (e.default = s.default.Solo);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(7);
      (s.default.EqualPowerGain = function () {
        s.default.SignalBase.call(this),
          (this._eqPower = this.input = this.output = new s.default.WaveShaper(
            function (t) {
              return Math.abs(t) < 0.001 ? 0 : s.default.equalPowerScale(t);
            }.bind(this),
            4096
          ));
      }),
        s.default.extend(s.default.EqualPowerGain, s.default.SignalBase),
        (s.default.EqualPowerGain.prototype.dispose = function () {
          return (
            s.default.SignalBase.prototype.dispose.call(this),
            this._eqPower.dispose(),
            (this._eqPower = null),
            this
          );
        }),
        (e.default = s.default.EqualPowerGain);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(5), i(2);
      (s.default.Negate = function () {
        s.default.SignalBase.call(this),
          (this._multiply = this.input = this.output = new s.default.Multiply(
            -1
          ));
      }),
        s.default.extend(s.default.Negate, s.default.SignalBase),
        (s.default.Negate.prototype.dispose = function () {
          return (
            s.default.SignalBase.prototype.dispose.call(this),
            this._multiply.dispose(),
            (this._multiply = null),
            this
          );
        }),
        (e.default = s.default.Negate);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(48), i(27), i(1);
      (s.default.PanVol = function () {
        var t = s.default.defaults(
          arguments,
          ["pan", "volume"],
          s.default.PanVol
        );
        s.default.AudioNode.call(this),
          (this._panner = this.input = new s.default.Panner(t.pan)),
          (this.pan = this._panner.pan),
          (this._volume = this.output = new s.default.Volume(t.volume)),
          (this.volume = this._volume.volume),
          this._panner.connect(this._volume),
          (this.mute = t.mute),
          this._readOnly(["pan", "volume"]);
      }),
        s.default.extend(s.default.PanVol, s.default.AudioNode),
        (s.default.PanVol.defaults = { pan: 0, volume: 0, mute: !1 }),
        Object.defineProperty(s.default.PanVol.prototype, "mute", {
          get: function () {
            return this._volume.mute;
          },
          set: function (t) {
            this._volume.mute = t;
          },
        }),
        (s.default.PanVol.prototype.dispose = function () {
          return (
            s.default.AudioNode.prototype.dispose.call(this),
            this._writable(["pan", "volume"]),
            this._panner.dispose(),
            (this._panner = null),
            (this.pan = null),
            this._volume.dispose(),
            (this._volume = null),
            (this.volume = null),
            this
          );
        }),
        (e.default = s.default.PanVol);
    },
    function (t, e, i) {
      "use strict";
      var s = i(0);
      if (s.default.supported) {
        !s.default.global.hasOwnProperty("OfflineAudioContext") &&
          s.default.global.hasOwnProperty("webkitOfflineAudioContext") &&
          (s.default.global.OfflineAudioContext =
            s.default.global.webkitOfflineAudioContext);
        var n = new OfflineAudioContext(1, 1, 44100).startRendering();
        (n && s.default.isFunction(n.then)) ||
          ((OfflineAudioContext.prototype._native_startRendering =
            OfflineAudioContext.prototype.startRendering),
          (OfflineAudioContext.prototype.startRendering = function () {
            return new Promise(
              function (t) {
                (this.oncomplete = function (e) {
                  t(e.renderedBuffer);
                }),
                  this._native_startRendering();
              }.bind(this)
            );
          }));
      }
    },
    function (t, e, i) {
      "use strict";
      e.a = "13.8.34";
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(46);
      (s.default.Midi = function (t, e) {
        if (!(this instanceof s.default.Midi)) return new s.default.Midi(t, e);
        s.default.Frequency.call(this, t, e);
      }),
        s.default.extend(s.default.Midi, s.default.Frequency),
        (s.default.Midi.prototype._defaultUnits = "midi"),
        (s.default.Midi.prototype._frequencyToUnits = function (t) {
          return s.default.Frequency.ftom(
            s.default.Frequency.prototype._frequencyToUnits.call(this, t)
          );
        }),
        (s.default.Midi.prototype._ticksToUnits = function (t) {
          return s.default.Frequency.ftom(
            s.default.Frequency.prototype._ticksToUnits.call(this, t)
          );
        }),
        (s.default.Midi.prototype._beatsToUnits = function (t) {
          return s.default.Frequency.ftom(
            s.default.Frequency.prototype._beatsToUnits.call(this, t)
          );
        }),
        (s.default.Midi.prototype._secondsToUnits = function (t) {
          return s.default.Frequency.ftom(
            s.default.Frequency.prototype._secondsToUnits.call(this, t)
          );
        }),
        (s.default.Midi.prototype.toMidi = function () {
          return this.valueOf();
        }),
        (s.default.Midi.prototype.toFrequency = function () {
          return s.default.Frequency.mtof(this.toMidi());
        }),
        (s.default.Midi.prototype.transpose = function (t) {
          return new this.constructor(this.toMidi() + t);
        }),
        (e.default = s.default.Midi);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(27), i(1);
      (s.default.UserMedia = function () {
        var t = s.default.defaults(arguments, ["volume"], s.default.UserMedia);
        s.default.AudioNode.call(this),
          (this._mediaStream = null),
          (this._stream = null),
          (this._device = null),
          (this._volume = this.output = new s.default.Volume(t.volume)),
          (this.volume = this._volume.volume),
          this._readOnly("volume"),
          (this.mute = t.mute);
      }),
        s.default.extend(s.default.UserMedia, s.default.AudioNode),
        (s.default.UserMedia.defaults = { volume: 0, mute: !1 }),
        (s.default.UserMedia.prototype.open = function (t) {
          return (
            this.state === s.default.State.Started && this.close(),
            s.default.UserMedia.enumerateDevices().then(
              function (e) {
                var i;
                if (s.default.isNumber(t)) i = e[t];
                else if (
                  !(i = e.find(function (e) {
                    return e.label === t || e.deviceId === t;
                  })) &&
                  e.length > 0
                )
                  i = e[0];
                else if (!i && s.default.isDefined(t))
                  throw new Error("Tone.UserMedia: no matching device: " + t);
                this._device = i;
                var n = {
                  audio: {
                    echoCancellation: !1,
                    sampleRate: this.context.sampleRate,
                    noiseSuppression: !1,
                    mozNoiseSuppression: !1,
                  },
                };
                return (
                  i && (n.audio.deviceId = i.deviceId),
                  navigator.mediaDevices.getUserMedia(n).then(
                    function (t) {
                      return (
                        this._stream ||
                          ((this._stream = t),
                          (this._mediaStream = this.context.createMediaStreamSource(
                            t
                          )),
                          s.default.connect(this._mediaStream, this.output)),
                        this
                      );
                    }.bind(this)
                  )
                );
              }.bind(this)
            )
          );
        }),
        (s.default.UserMedia.prototype.close = function () {
          return (
            this._stream &&
              (this._stream.getAudioTracks().forEach(function (t) {
                t.stop();
              }),
              (this._stream = null),
              this._mediaStream.disconnect(),
              (this._mediaStream = null)),
            (this._device = null),
            this
          );
        }),
        (s.default.UserMedia.enumerateDevices = function () {
          return navigator.mediaDevices.enumerateDevices().then(function (t) {
            return t.filter(function (t) {
              return "audioinput" === t.kind;
            });
          });
        }),
        Object.defineProperty(s.default.UserMedia.prototype, "state", {
          get: function () {
            return this._stream && this._stream.active
              ? s.default.State.Started
              : s.default.State.Stopped;
          },
        }),
        Object.defineProperty(s.default.UserMedia.prototype, "deviceId", {
          get: function () {
            return this._device ? this._device.deviceId : null;
          },
        }),
        Object.defineProperty(s.default.UserMedia.prototype, "groupId", {
          get: function () {
            return this._device ? this._device.groupId : null;
          },
        }),
        Object.defineProperty(s.default.UserMedia.prototype, "label", {
          get: function () {
            return this._device ? this._device.label : null;
          },
        }),
        Object.defineProperty(s.default.UserMedia.prototype, "mute", {
          get: function () {
            return this._volume.mute;
          },
          set: function (t) {
            this._volume.mute = t;
          },
        }),
        (s.default.UserMedia.prototype.dispose = function () {
          return (
            s.default.AudioNode.prototype.dispose.call(this),
            this.close(),
            this._writable("volume"),
            this._volume.dispose(),
            (this._volume = null),
            (this.volume = null),
            this
          );
        }),
        Object.defineProperty(s.default.UserMedia, "supported", {
          get: function () {
            return (
              s.default.isDefined(navigator.mediaDevices) &&
              s.default.isFunction(navigator.mediaDevices.getUserMedia)
            );
          },
        }),
        (e.default = s.default.UserMedia);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(65), i(27), i(1);
      (s.default.Players = function (t) {
        var e = Array.prototype.slice.call(arguments);
        e.shift();
        var i = s.default.defaults(e, ["onload"], s.default.Players);
        for (var n in (s.default.AudioNode.call(this, i),
        (this._volume = this.output = new s.default.Volume(i.volume)),
        (this.volume = this._volume.volume),
        this._readOnly("volume"),
        (this._volume.output.output.channelCount = 2),
        (this._volume.output.output.channelCountMode = "explicit"),
        (this.mute = i.mute),
        (this._players = {}),
        (this._loadingCount = 0),
        (this._fadeIn = i.fadeIn),
        (this._fadeOut = i.fadeOut),
        t))
          this._loadingCount++,
            this.add(n, t[n], this._bufferLoaded.bind(this, i.onload));
      }),
        s.default.extend(s.default.Players, s.default.AudioNode),
        (s.default.Players.defaults = {
          volume: 0,
          mute: !1,
          onload: s.default.noOp,
          fadeIn: 0,
          fadeOut: 0,
        }),
        (s.default.Players.prototype._bufferLoaded = function (t) {
          this._loadingCount--, 0 === this._loadingCount && t && t(this);
        }),
        Object.defineProperty(s.default.Players.prototype, "mute", {
          get: function () {
            return this._volume.mute;
          },
          set: function (t) {
            this._volume.mute = t;
          },
        }),
        Object.defineProperty(s.default.Players.prototype, "fadeIn", {
          get: function () {
            return this._fadeIn;
          },
          set: function (t) {
            (this._fadeIn = t),
              this._forEach(function (e) {
                e.fadeIn = t;
              });
          },
        }),
        Object.defineProperty(s.default.Players.prototype, "fadeOut", {
          get: function () {
            return this._fadeOut;
          },
          set: function (t) {
            (this._fadeOut = t),
              this._forEach(function (e) {
                e.fadeOut = t;
              });
          },
        }),
        Object.defineProperty(s.default.Players.prototype, "state", {
          get: function () {
            var t = !1;
            return (
              this._forEach(function (e) {
                t = t || e.state === s.default.State.Started;
              }),
              t ? s.default.State.Started : s.default.State.Stopped
            );
          },
        }),
        (s.default.Players.prototype.has = function (t) {
          return this._players.hasOwnProperty(t);
        }),
        (s.default.Players.prototype.get = function (t) {
          if (this.has(t)) return this._players[t];
          throw new Error("Tone.Players: no player named " + t);
        }),
        (s.default.Players.prototype._forEach = function (t) {
          for (var e in this._players) t(this._players[e], e);
          return this;
        }),
        Object.defineProperty(s.default.Players.prototype, "loaded", {
          get: function () {
            var t = !0;
            return (
              this._forEach(function (e) {
                t = t && e.loaded;
              }),
              t
            );
          },
        }),
        (s.default.Players.prototype.add = function (t, e, i) {
          return (
            (this._players[t] = new s.default.Player(e, i).connect(
              this.output
            )),
            (this._players[t].fadeIn = this._fadeIn),
            (this._players[t].fadeOut = this._fadeOut),
            this
          );
        }),
        (s.default.Players.prototype.stopAll = function (t) {
          this._forEach(function (e) {
            e.stop(t);
          });
        }),
        (s.default.Players.prototype.dispose = function () {
          return (
            s.default.AudioNode.prototype.dispose.call(this),
            this._volume.dispose(),
            (this._volume = null),
            this._writable("volume"),
            (this.volume = null),
            (this.output = null),
            this._forEach(function (t) {
              t.dispose();
            }),
            (this._players = null),
            this
          );
        }),
        (e.default = s.default.Players);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(6), i(11), i(32);
      (s.default.GrainPlayer = function () {
        var t = s.default.defaults(
          arguments,
          ["url", "onload"],
          s.default.GrainPlayer
        );
        s.default.Source.call(this, t),
          (this.buffer = new s.default.Buffer(
            t.url,
            t.onload.bind(void 0, this)
          )),
          (this._clock = new s.default.Clock(
            this._tick.bind(this),
            t.grainSize
          )),
          (this._loopStart = 0),
          (this._loopEnd = 0),
          (this._activeSources = []),
          (this._playbackRate = t.playbackRate),
          (this._grainSize = t.grainSize),
          (this._overlap = t.overlap),
          (this.detune = t.detune),
          (this.overlap = t.overlap),
          (this.loop = t.loop),
          (this.playbackRate = t.playbackRate),
          (this.grainSize = t.grainSize),
          (this.loopStart = t.loopStart),
          (this.loopEnd = t.loopEnd),
          (this.reverse = t.reverse),
          this._clock.on("stop", this._onstop.bind(this));
      }),
        s.default.extend(s.default.GrainPlayer, s.default.Source),
        (s.default.GrainPlayer.defaults = {
          onload: s.default.noOp,
          overlap: 0.1,
          grainSize: 0.2,
          playbackRate: 1,
          detune: 0,
          loop: !1,
          loopStart: 0,
          loopEnd: 0,
          reverse: !1,
        }),
        (s.default.GrainPlayer.prototype._start = function (t, e, i) {
          (e = s.default.defaultArg(e, 0)),
            (e = this.toSeconds(e)),
            (t = this.toSeconds(t)),
            (this._offset = e),
            this._clock.start(t),
            i && this.stop(t + this.toSeconds(i));
        }),
        (s.default.GrainPlayer.prototype._stop = function (t) {
          this._clock.stop(t);
        }),
        (s.default.GrainPlayer.prototype._onstop = function (t) {
          this._activeSources.forEach(function (e) {
            (e.fadeOut = 0), e.stop(t);
          });
        }),
        (s.default.GrainPlayer.prototype._tick = function (t) {
          if (!this.loop && this._offset > this.buffer.duration) this.stop(t);
          else {
            var e = this._offset < this._overlap ? 0 : this._overlap,
              i = new s.default.BufferSource({
                buffer: this.buffer,
                fadeIn: e,
                fadeOut: this._overlap,
                loop: this.loop,
                loopStart: this._loopStart,
                loopEnd: this._loopEnd,
                playbackRate: s.default.intervalToFrequencyRatio(
                  this.detune / 100
                ),
              }).connect(this.output);
            i.start(t, this._offset),
              (this._offset += this.grainSize),
              i.stop(t + this.grainSize / this.playbackRate),
              this._activeSources.push(i),
              (i.onended = function () {
                var t = this._activeSources.indexOf(i);
                -1 !== t && this._activeSources.splice(t, 1);
              }.bind(this));
          }
        }),
        Object.defineProperty(s.default.GrainPlayer.prototype, "playbackRate", {
          get: function () {
            return this._playbackRate;
          },
          set: function (t) {
            (this._playbackRate = t), (this.grainSize = this._grainSize);
          },
        }),
        Object.defineProperty(s.default.GrainPlayer.prototype, "loopStart", {
          get: function () {
            return this._loopStart;
          },
          set: function (t) {
            this._loopStart = this.toSeconds(t);
          },
        }),
        Object.defineProperty(s.default.GrainPlayer.prototype, "loopEnd", {
          get: function () {
            return this._loopEnd;
          },
          set: function (t) {
            this._loopEnd = this.toSeconds(t);
          },
        }),
        Object.defineProperty(s.default.GrainPlayer.prototype, "reverse", {
          get: function () {
            return this.buffer.reverse;
          },
          set: function (t) {
            this.buffer.reverse = t;
          },
        }),
        Object.defineProperty(s.default.GrainPlayer.prototype, "grainSize", {
          get: function () {
            return this._grainSize;
          },
          set: function (t) {
            (this._grainSize = this.toSeconds(t)),
              (this._clock.frequency.value =
                this._playbackRate / this._grainSize);
          },
        }),
        Object.defineProperty(s.default.GrainPlayer.prototype, "overlap", {
          get: function () {
            return this._overlap;
          },
          set: function (t) {
            this._overlap = this.toSeconds(t);
          },
        }),
        Object.defineProperty(s.default.GrainPlayer.prototype, "loaded", {
          get: function () {
            return this.buffer.loaded;
          },
        }),
        (s.default.GrainPlayer.prototype.dispose = function () {
          return (
            s.default.Source.prototype.dispose.call(this),
            this.buffer.dispose(),
            (this.buffer = null),
            this._clock.dispose(),
            (this._clock = null),
            this._activeSources.forEach(function (t) {
              t.dispose();
            }),
            (this._activeSources = null),
            this
          );
        }),
        (e.default = s.default.GrainPlayer);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(16), i(2), i(45);
      (s.default.TransportTimelineSignal = function () {
        s.default.Signal.apply(this, arguments),
          (this.output = this._outputSig = new s.default.Signal(
            this._initialValue
          )),
          (this._lastVal = this.value),
          (this._synced = s.default.Transport.scheduleRepeat(
            this._onTick.bind(this),
            "1i"
          )),
          (this._bindAnchorValue = this._anchorValue.bind(this)),
          s.default.Transport.on("start stop pause", this._bindAnchorValue),
          (this._events.memory = 1 / 0);
      }),
        s.default.extend(s.default.TransportTimelineSignal, s.default.Signal),
        (s.default.TransportTimelineSignal.prototype._onTick = function (t) {
          var e = this.getValueAtTime(s.default.Transport.seconds);
          this._lastVal !== e &&
            ((this._lastVal = e),
            this._outputSig.linearRampToValueAtTime(e, t));
        }),
        (s.default.TransportTimelineSignal.prototype._anchorValue = function (
          t
        ) {
          var e = this.getValueAtTime(s.default.Transport.seconds);
          return (
            (this._lastVal = e),
            this._outputSig.cancelScheduledValues(t),
            this._outputSig.setValueAtTime(e, t),
            this
          );
        }),
        (s.default.TransportTimelineSignal.prototype.getValueAtTime = function (
          t
        ) {
          return (
            (t = s.default.TransportTime(t)),
            s.default.Signal.prototype.getValueAtTime.call(this, t)
          );
        }),
        (s.default.TransportTimelineSignal.prototype.setValueAtTime = function (
          t,
          e
        ) {
          return (
            (e = s.default.TransportTime(e)),
            s.default.Signal.prototype.setValueAtTime.call(this, t, e),
            this
          );
        }),
        (s.default.TransportTimelineSignal.prototype.linearRampToValueAtTime = function (
          t,
          e
        ) {
          return (
            (e = s.default.TransportTime(e)),
            s.default.Signal.prototype.linearRampToValueAtTime.call(this, t, e),
            this
          );
        }),
        (s.default.TransportTimelineSignal.prototype.exponentialRampToValueAtTime = function (
          t,
          e
        ) {
          return (
            (e = s.default.TransportTime(e)),
            s.default.Signal.prototype.exponentialRampToValueAtTime.call(
              this,
              t,
              e
            ),
            this
          );
        }),
        (s.default.TransportTimelineSignal.prototype.setTargetAtTime = function (
          t,
          e,
          i
        ) {
          return (
            (e = s.default.TransportTime(e)),
            s.default.Signal.prototype.setTargetAtTime.call(this, t, e, i),
            this
          );
        }),
        (s.default.TransportTimelineSignal.prototype.cancelScheduledValues = function (
          t
        ) {
          return (
            (t = s.default.TransportTime(t)),
            s.default.Signal.prototype.cancelScheduledValues.call(this, t),
            this
          );
        }),
        (s.default.TransportTimelineSignal.prototype.setValueCurveAtTime = function (
          t,
          e,
          i,
          n
        ) {
          return (
            (e = s.default.TransportTime(e)),
            (i = s.default.TransportTime(i)),
            s.default.Signal.prototype.setValueCurveAtTime.call(
              this,
              t,
              e,
              i,
              n
            ),
            this
          );
        }),
        (s.default.TransportTimelineSignal.prototype.cancelAndHoldAtTime = function (
          t
        ) {
          return s.default.Signal.prototype.cancelAndHoldAtTime.call(
            this,
            s.default.TransportTime(t)
          );
        }),
        (s.default.TransportTimelineSignal.prototype.dispose = function () {
          s.default.Transport.clear(this._synced),
            s.default.Transport.off("start stop pause", this._syncedCallback),
            this._events.cancel(0),
            s.default.Signal.prototype.dispose.call(this),
            this._outputSig.dispose(),
            (this._outputSig = null);
        }),
        (e.default = s.default.TransportTimelineSignal);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(29), i(5);
      (s.default.Normalize = function (t, e) {
        s.default.SignalBase.call(this),
          (this._inputMin = s.default.defaultArg(t, 0)),
          (this._inputMax = s.default.defaultArg(e, 1)),
          (this._sub = this.input = new s.default.Add(0)),
          (this._div = this.output = new s.default.Multiply(1)),
          this._sub.connect(this._div),
          this._setRange();
      }),
        s.default.extend(s.default.Normalize, s.default.SignalBase),
        Object.defineProperty(s.default.Normalize.prototype, "min", {
          get: function () {
            return this._inputMin;
          },
          set: function (t) {
            (this._inputMin = t), this._setRange();
          },
        }),
        Object.defineProperty(s.default.Normalize.prototype, "max", {
          get: function () {
            return this._inputMax;
          },
          set: function (t) {
            (this._inputMax = t), this._setRange();
          },
        }),
        (s.default.Normalize.prototype._setRange = function () {
          (this._sub.value = -this._inputMin),
            (this._div.value = 1 / (this._inputMax - this._inputMin));
        }),
        (s.default.Normalize.prototype.dispose = function () {
          return (
            s.default.SignalBase.prototype.dispose.call(this),
            this._sub.dispose(),
            (this._sub = null),
            this._div.dispose(),
            (this._div = null),
            this
          );
        }),
        (e.default = s.default.Normalize);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(7), i(2);
      (s.default.GainToAudio = function () {
        s.default.SignalBase.call(this),
          (this._norm = this.input = this.output = new s.default.WaveShaper(
            function (t) {
              return 2 * Math.abs(t) - 1;
            }
          ));
      }),
        s.default.extend(s.default.GainToAudio, s.default.SignalBase),
        (s.default.GainToAudio.prototype.dispose = function () {
          return (
            s.default.SignalBase.prototype.dispose.call(this),
            this._norm.dispose(),
            (this._norm = null),
            this
          );
        }),
        (e.default = s.default.GainToAudio);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(21), i(78), i(32);
      (s.default.Sampler = function (t) {
        var e = Array.prototype.slice.call(arguments);
        e.shift();
        var i = s.default.defaults(e, ["onload", "baseUrl"], s.default.Sampler);
        s.default.Instrument.call(this, i);
        var n = {};
        for (var o in t)
          if (s.default.isNote(o)) {
            n[s.default.Frequency(o).toMidi()] = t[o];
          } else {
            if (isNaN(parseFloat(o)))
              throw new Error(
                "Tone.Sampler: url keys must be the note's pitch"
              );
            n[o] = t[o];
          }
        (this._buffers = new s.default.Buffers(n, i.onload, i.baseUrl)),
          (this._activeSources = {}),
          (this.attack = i.attack),
          (this.release = i.release),
          (this.curve = i.curve);
      }),
        s.default.extend(s.default.Sampler, s.default.Instrument),
        (s.default.Sampler.defaults = {
          attack: 0,
          release: 0.1,
          onload: s.default.noOp,
          baseUrl: "",
          curve: "exponential",
        }),
        (s.default.Sampler.prototype._findClosest = function (t) {
          for (var e = 0; e < 96; ) {
            if (this._buffers.has(t + e)) return -e;
            if (this._buffers.has(t - e)) return e;
            e++;
          }
          throw new Error("No available buffers for note: " + t);
        }),
        (s.default.Sampler.prototype.triggerAttack = function (t, e, i) {
          this.log("triggerAttack", t, e, i), Array.isArray(t) || (t = [t]);
          for (var n = 0; n < t.length; n++) {
            var o = s.default.Frequency(t[n]).toMidi(),
              a = this._findClosest(o),
              r = o - a,
              l = this._buffers.get(r),
              u = s.default.intervalToFrequencyRatio(a),
              d = new s.default.BufferSource({
                buffer: l,
                playbackRate: u,
                fadeIn: this.attack,
                fadeOut: this.release,
                curve: this.curve,
              }).connect(this.output);
            d.start(e, 0, l.duration / u, i),
              s.default.isArray(this._activeSources[o]) ||
                (this._activeSources[o] = []),
              this._activeSources[o].push(d),
              (d.onended = function () {
                if (this._activeSources && this._activeSources[o]) {
                  var t = this._activeSources[o].indexOf(d);
                  -1 !== t && this._activeSources[o].splice(t, 1);
                }
              }.bind(this));
          }
          return this;
        }),
        (s.default.Sampler.prototype.triggerRelease = function (t, e) {
          this.log("triggerRelease", t, e), Array.isArray(t) || (t = [t]);
          for (var i = 0; i < t.length; i++) {
            var n = s.default.Frequency(t[i]).toMidi();
            this._activeSources[n] &&
              this._activeSources[n].length &&
              ((e = this.toSeconds(e)),
              this._activeSources[n].forEach(function (t) {
                t.stop(e);
              }),
              (this._activeSources[n] = []));
          }
          return this;
        }),
        (s.default.Sampler.prototype.releaseAll = function (t) {
          for (var e in ((t = this.toSeconds(t)), this._activeSources))
            for (var i = this._activeSources[e]; i.length; ) {
              i.shift().stop(t);
            }
          return this;
        }),
        (s.default.Sampler.prototype.sync = function () {
          return (
            this._syncMethod("triggerAttack", 1),
            this._syncMethod("triggerRelease", 1),
            this
          );
        }),
        (s.default.Sampler.prototype.triggerAttackRelease = function (
          t,
          e,
          i,
          n
        ) {
          if (
            ((i = this.toSeconds(i)),
            this.triggerAttack(t, i, n),
            s.default.isArray(e) && s.default.isArray(t))
          )
            for (var o = 0; o < t.length; o++) {
              var a = e[Math.min(o, e.length - 1)];
              this.triggerRelease(t[o], i + this.toSeconds(a));
            }
          else this.triggerRelease(t, i + this.toSeconds(e));
          return this;
        }),
        (s.default.Sampler.prototype.add = function (t, e, i) {
          if (s.default.isNote(t)) {
            var n = s.default.Frequency(t).toMidi();
            this._buffers.add(n, e, i);
          } else {
            if (isNaN(parseFloat(t)))
              throw new Error(
                "Tone.Sampler: note must be the note's pitch. Instead got " + t
              );
            this._buffers.add(t, e, i);
          }
        }),
        Object.defineProperty(s.default.Sampler.prototype, "loaded", {
          get: function () {
            return this._buffers.loaded;
          },
        }),
        (s.default.Sampler.prototype.dispose = function () {
          for (var t in (s.default.Instrument.prototype.dispose.call(this),
          this._buffers.dispose(),
          (this._buffers = null),
          this._activeSources))
            this._activeSources[t].forEach(function (t) {
              t.dispose();
            });
          return (this._activeSources = null), this;
        }),
        (e.default = s.default.Sampler);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(38), i(6);
      (s.default.PolySynth = function () {
        var t = s.default.defaults(
          arguments,
          ["polyphony", "voice"],
          s.default.PolySynth
        );
        s.default.Instrument.call(this, t),
          ((t = s.default.defaultArg(
            t,
            s.default.Instrument.defaults
          )).polyphony = Math.min(
            s.default.PolySynth.MAX_POLYPHONY,
            t.polyphony
          )),
          (this.voices = new Array(t.polyphony)),
          this.assert(t.polyphony > 0, "polyphony must be greater than 0"),
          (this.detune = new s.default.Signal(t.detune, s.default.Type.Cents)),
          this._readOnly("detune");
        for (var e = 0; e < t.polyphony; e++) {
          var i = new t.voice(arguments[2], arguments[3]);
          if (!(i instanceof s.default.Monophonic))
            throw new Error(
              "Synth constructor must be instance of Tone.Monophonic"
            );
          (this.voices[e] = i),
            (i.index = e),
            i.connect(this.output),
            i.hasOwnProperty("detune") && this.detune.connect(i.detune);
        }
      }),
        s.default.extend(s.default.PolySynth, s.default.Instrument),
        (s.default.PolySynth.defaults = {
          polyphony: 4,
          volume: 0,
          detune: 0,
          voice: s.default.Synth,
        }),
        (s.default.PolySynth.prototype._getClosestVoice = function (t, e) {
          var i = this.voices.find(function (i) {
            if (
              Math.abs(i.frequency.getValueAtTime(t) - s.default.Frequency(e)) <
                1e-4 &&
              i.getLevelAtTime(t) > 1e-5
            )
              return i;
          });
          return (
            i ||
            this.voices.slice().sort(
              function (e, i) {
                var s = e.getLevelAtTime(t + this.blockTime),
                  n = i.getLevelAtTime(t + this.blockTime);
                return s < 1e-5 && (s = 0), n < 1e-5 && (n = 0), s - n;
              }.bind(this)
            )[0]
          );
        }),
        (s.default.PolySynth.prototype.triggerAttack = function (t, e, i) {
          return (
            Array.isArray(t) || (t = [t]),
            (e = this.toSeconds(e)),
            t.forEach(
              function (t) {
                var s = this._getClosestVoice(e, t);
                s.triggerAttack(t, e, i), this.log("triggerAttack", s.index, t);
              }.bind(this)
            ),
            this
          );
        }),
        (s.default.PolySynth.prototype.triggerRelease = function (t, e) {
          return (
            Array.isArray(t) || (t = [t]),
            (e = this.toSeconds(e)),
            t.forEach(
              function (t) {
                var i = this._getClosestVoice(e, t);
                this.log("triggerRelease", i.index, t), i.triggerRelease(e);
              }.bind(this)
            ),
            this
          );
        }),
        (s.default.PolySynth.prototype.triggerAttackRelease = function (
          t,
          e,
          i,
          n
        ) {
          if (
            ((i = this.toSeconds(i)),
            this.triggerAttack(t, i, n),
            s.default.isArray(e) && s.default.isArray(t))
          )
            for (var o = 0; o < t.length; o++) {
              var a = e[Math.min(o, e.length - 1)];
              this.triggerRelease(t[o], i + this.toSeconds(a));
            }
          else this.triggerRelease(t, i + this.toSeconds(e));
          return this;
        }),
        (s.default.PolySynth.prototype.sync = function () {
          return (
            this._syncMethod("triggerAttack", 1),
            this._syncMethod("triggerRelease", 1),
            this
          );
        }),
        (s.default.PolySynth.prototype.set = function (t, e, i) {
          for (var s = 0; s < this.voices.length; s++)
            this.voices[s].set(t, e, i);
          return this;
        }),
        (s.default.PolySynth.prototype.get = function (t) {
          return this.voices[0].get(t);
        }),
        (s.default.PolySynth.prototype.releaseAll = function (t) {
          return (
            (t = this.toSeconds(t)),
            this.voices.forEach(function (e) {
              e.triggerRelease(t);
            }),
            this
          );
        }),
        (s.default.PolySynth.prototype.dispose = function () {
          return (
            s.default.Instrument.prototype.dispose.call(this),
            this.voices.forEach(function (t) {
              t.dispose();
            }),
            this._writable("detune"),
            this.detune.dispose(),
            (this.detune = null),
            (this.voices = null),
            this
          );
        }),
        (s.default.PolySynth.MAX_POLYPHONY = 20),
        (e.default = s.default.PolySynth);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(21), i(39), i(54);
      (s.default.PluckSynth = function (t) {
        (t = s.default.defaultArg(t, s.default.PluckSynth.defaults)),
          s.default.Instrument.call(this, t),
          (this._noise = new s.default.Noise("pink")),
          (this.attackNoise = t.attackNoise),
          (this._lfcf = new s.default.LowpassCombFilter({
            resonance: t.resonance,
            dampening: t.dampening,
          })),
          (this.resonance = this._lfcf.resonance),
          (this.dampening = this._lfcf.dampening),
          this._noise.connect(this._lfcf),
          this._lfcf.connect(this.output),
          this._readOnly(["resonance", "dampening"]);
      }),
        s.default.extend(s.default.PluckSynth, s.default.Instrument),
        (s.default.PluckSynth.defaults = {
          attackNoise: 1,
          dampening: 4e3,
          resonance: 0.7,
        }),
        (s.default.PluckSynth.prototype.triggerAttack = function (t, e) {
          (t = this.toFrequency(t)), (e = this.toSeconds(e));
          var i = 1 / t;
          return (
            this._lfcf.delayTime.setValueAtTime(i, e),
            this._noise.start(e),
            this._noise.stop(e + i * this.attackNoise),
            this
          );
        }),
        (s.default.PluckSynth.prototype.dispose = function () {
          return (
            s.default.Instrument.prototype.dispose.call(this),
            this._noise.dispose(),
            this._lfcf.dispose(),
            (this._noise = null),
            (this._lfcf = null),
            this._writable(["resonance", "dampening"]),
            (this.dampening = null),
            (this.resonance = null),
            this
          );
        }),
        (e.default = s.default.PluckSynth);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(31), i(41), i(39), i(2), i(9), i(21);
      (s.default.NoiseSynth = function (t) {
        (t = s.default.defaultArg(t, s.default.NoiseSynth.defaults)),
          s.default.Instrument.call(this, t),
          (this.noise = new s.default.Noise(t.noise)),
          (this.envelope = new s.default.AmplitudeEnvelope(t.envelope)),
          this.noise.chain(this.envelope, this.output),
          this._readOnly(["noise", "envelope"]);
      }),
        s.default.extend(s.default.NoiseSynth, s.default.Instrument),
        (s.default.NoiseSynth.defaults = {
          noise: { type: "white" },
          envelope: { attack: 0.005, decay: 0.1, sustain: 0 },
        }),
        (s.default.NoiseSynth.prototype.triggerAttack = function (t, e) {
          return (
            (t = this.toSeconds(t)),
            this.envelope.triggerAttack(t, e),
            this.noise.start(t),
            0 === this.envelope.sustain &&
              this.noise.stop(t + this.envelope.attack + this.envelope.decay),
            this
          );
        }),
        (s.default.NoiseSynth.prototype.triggerRelease = function (t) {
          return (
            (t = this.toSeconds(t)),
            this.envelope.triggerRelease(t),
            this.noise.stop(t + this.envelope.release),
            this
          );
        }),
        (s.default.NoiseSynth.prototype.sync = function () {
          return (
            this._syncMethod("triggerAttack", 0),
            this._syncMethod("triggerRelease", 0),
            this
          );
        }),
        (s.default.NoiseSynth.prototype.triggerAttackRelease = function (
          t,
          e,
          i
        ) {
          return (
            (e = this.toSeconds(e)),
            (t = this.toSeconds(t)),
            this.triggerAttack(e, i),
            this.triggerRelease(e + t),
            this
          );
        }),
        (s.default.NoiseSynth.prototype.dispose = function () {
          return (
            s.default.Instrument.prototype.dispose.call(this),
            this._writable(["noise", "envelope"]),
            this.noise.dispose(),
            (this.noise = null),
            this.envelope.dispose(),
            (this.envelope = null),
            this
          );
        }),
        (e.default = s.default.NoiseSynth);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0),
        n =
          (i(21),
          i(49),
          i(9),
          i(41),
          i(31),
          i(3),
          i(26),
          i(5),
          [1, 1.483, 1.932, 2.546, 2.63, 3.897]);
      (s.default.MetalSynth = function (t) {
        (t = s.default.defaultArg(t, s.default.MetalSynth.defaults)),
          s.default.Instrument.call(this, t),
          (this.frequency = new s.default.Signal(
            t.frequency,
            s.default.Type.Frequency
          )),
          (this._oscillators = []),
          (this._freqMultipliers = []),
          (this._amplitue = new s.default.Gain(0).connect(this.output)),
          (this._highpass = new s.default.Filter({
            type: "highpass",
            Q: -3.0102999566398125,
          }).connect(this._amplitue)),
          (this._octaves = t.octaves),
          (this._filterFreqScaler = new s.default.Scale(t.resonance, 7e3)),
          (this.envelope = new s.default.Envelope({
            attack: t.envelope.attack,
            attackCurve: "linear",
            decay: t.envelope.decay,
            sustain: 0,
            release: t.envelope.release,
          }).chain(this._filterFreqScaler, this._highpass.frequency)),
          this.envelope.connect(this._amplitue.gain);
        for (var e = 0; e < n.length; e++) {
          var i = new s.default.FMOscillator({
            type: "square",
            modulationType: "square",
            harmonicity: t.harmonicity,
            modulationIndex: t.modulationIndex,
          });
          i.connect(this._highpass), (this._oscillators[e] = i);
          var o = new s.default.Multiply(n[e]);
          (this._freqMultipliers[e] = o), this.frequency.chain(o, i.frequency);
        }
        this.octaves = t.octaves;
      }),
        s.default.extend(s.default.MetalSynth, s.default.Instrument),
        (s.default.MetalSynth.defaults = {
          frequency: 200,
          envelope: { attack: 0.001, decay: 1.4, release: 0.2 },
          harmonicity: 5.1,
          modulationIndex: 32,
          resonance: 4e3,
          octaves: 1.5,
        }),
        (s.default.MetalSynth.prototype.triggerAttack = function (t, e) {
          return (
            (t = this.toSeconds(t)),
            (e = s.default.defaultArg(e, 1)),
            this.envelope.triggerAttack(t, e),
            this._oscillators.forEach(function (e) {
              e.start(t);
            }),
            0 === this.envelope.sustain &&
              this._oscillators.forEach(
                function (e) {
                  e.stop(t + this.envelope.attack + this.envelope.decay);
                }.bind(this)
              ),
            this
          );
        }),
        (s.default.MetalSynth.prototype.triggerRelease = function (t) {
          return (
            (t = this.toSeconds(t)),
            this.envelope.triggerRelease(t),
            this._oscillators.forEach(
              function (e) {
                e.stop(t + this.envelope.release);
              }.bind(this)
            ),
            this
          );
        }),
        (s.default.MetalSynth.prototype.sync = function () {
          return (
            this._syncMethod("triggerAttack", 0),
            this._syncMethod("triggerRelease", 0),
            this
          );
        }),
        (s.default.MetalSynth.prototype.triggerAttackRelease = function (
          t,
          e,
          i
        ) {
          return (
            (e = this.toSeconds(e)),
            (t = this.toSeconds(t)),
            this.triggerAttack(e, i),
            this.triggerRelease(e + t),
            this
          );
        }),
        Object.defineProperty(
          s.default.MetalSynth.prototype,
          "modulationIndex",
          {
            get: function () {
              return this._oscillators[0].modulationIndex.value;
            },
            set: function (t) {
              for (var e = 0; e < this._oscillators.length; e++)
                this._oscillators[e].modulationIndex.value = t;
            },
          }
        ),
        Object.defineProperty(s.default.MetalSynth.prototype, "harmonicity", {
          get: function () {
            return this._oscillators[0].harmonicity.value;
          },
          set: function (t) {
            for (var e = 0; e < this._oscillators.length; e++)
              this._oscillators[e].harmonicity.value = t;
          },
        }),
        Object.defineProperty(s.default.MetalSynth.prototype, "resonance", {
          get: function () {
            return this._filterFreqScaler.min;
          },
          set: function (t) {
            (this._filterFreqScaler.min = t), (this.octaves = this._octaves);
          },
        }),
        Object.defineProperty(s.default.MetalSynth.prototype, "octaves", {
          get: function () {
            return this._octaves;
          },
          set: function (t) {
            (this._octaves = t),
              (this._filterFreqScaler.max =
                this._filterFreqScaler.min * Math.pow(2, t));
          },
        }),
        (s.default.MetalSynth.prototype.dispose = function () {
          s.default.Instrument.prototype.dispose.call(this);
          for (var t = 0; t < this._oscillators.length; t++)
            this._oscillators[t].dispose(), this._freqMultipliers[t].dispose();
          (this._oscillators = null),
            (this._freqMultipliers = null),
            this.frequency.dispose(),
            (this.frequency = null),
            this._filterFreqScaler.dispose(),
            (this._filterFreqScaler = null),
            this._amplitue.dispose(),
            (this._amplitue = null),
            this.envelope.dispose(),
            (this.envelope = null),
            this._highpass.dispose(),
            (this._highpass = null);
        }),
        (e.default = s.default.MetalSynth);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(37), i(21), i(31);
      (s.default.MembraneSynth = function (t) {
        (t = s.default.defaultArg(t, s.default.MembraneSynth.defaults)),
          s.default.Instrument.call(this, t),
          (this.oscillator = new s.default.OmniOscillator(t.oscillator)),
          (this.envelope = new s.default.AmplitudeEnvelope(t.envelope)),
          (this.octaves = t.octaves),
          (this.pitchDecay = t.pitchDecay),
          this.oscillator.chain(this.envelope, this.output),
          this._readOnly(["oscillator", "envelope"]);
      }),
        s.default.extend(s.default.MembraneSynth, s.default.Instrument),
        (s.default.MembraneSynth.defaults = {
          pitchDecay: 0.05,
          octaves: 10,
          oscillator: { type: "sine" },
          envelope: {
            attack: 0.001,
            decay: 0.4,
            sustain: 0.01,
            release: 1.4,
            attackCurve: "exponential",
          },
        }),
        (s.default.MembraneSynth.prototype.triggerAttack = function (t, e, i) {
          e = this.toSeconds(e);
          var s = (t = this.toFrequency(t)) * this.octaves;
          return (
            this.oscillator.frequency.setValueAtTime(s, e),
            this.oscillator.frequency.exponentialRampToValueAtTime(
              t,
              e + this.toSeconds(this.pitchDecay)
            ),
            this.envelope.triggerAttack(e, i),
            this.oscillator.start(e),
            0 === this.envelope.sustain &&
              this.oscillator.stop(
                e + this.envelope.attack + this.envelope.decay
              ),
            this
          );
        }),
        (s.default.MembraneSynth.prototype.triggerRelease = function (t) {
          return (
            (t = this.toSeconds(t)),
            this.envelope.triggerRelease(t),
            this.oscillator.stop(t + this.envelope.release),
            this
          );
        }),
        (s.default.MembraneSynth.prototype.dispose = function () {
          return (
            s.default.Instrument.prototype.dispose.call(this),
            this._writable(["oscillator", "envelope"]),
            this.oscillator.dispose(),
            (this.oscillator = null),
            this.envelope.dispose(),
            (this.envelope = null),
            this
          );
        }),
        (e.default = s.default.MembraneSynth);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(38), i(2), i(5), i(25);
      (s.default.FMSynth = function (t) {
        (t = s.default.defaultArg(t, s.default.FMSynth.defaults)),
          s.default.Monophonic.call(this, t),
          (this._carrier = new s.default.Synth(t.carrier)),
          (this._carrier.volume.value = -10),
          (this.oscillator = this._carrier.oscillator),
          (this.envelope = this._carrier.envelope.set(t.envelope)),
          (this._modulator = new s.default.Synth(t.modulator)),
          (this._modulator.volume.value = -10),
          (this.modulation = this._modulator.oscillator.set(t.modulation)),
          (this.modulationEnvelope = this._modulator.envelope.set(
            t.modulationEnvelope
          )),
          (this.frequency = new s.default.Signal(
            440,
            s.default.Type.Frequency
          )),
          (this.detune = new s.default.Signal(t.detune, s.default.Type.Cents)),
          (this.harmonicity = new s.default.Multiply(t.harmonicity)),
          (this.harmonicity.units = s.default.Type.Positive),
          (this.modulationIndex = new s.default.Multiply(t.modulationIndex)),
          (this.modulationIndex.units = s.default.Type.Positive),
          (this._modulationNode = new s.default.Gain(0)),
          this.frequency.connect(this._carrier.frequency),
          this.frequency.chain(this.harmonicity, this._modulator.frequency),
          this.frequency.chain(this.modulationIndex, this._modulationNode),
          this.detune.fan(this._carrier.detune, this._modulator.detune),
          this._modulator.connect(this._modulationNode.gain),
          this._modulationNode.connect(this._carrier.frequency),
          this._carrier.connect(this.output),
          this._readOnly([
            "frequency",
            "harmonicity",
            "modulationIndex",
            "oscillator",
            "envelope",
            "modulation",
            "modulationEnvelope",
            "detune",
          ]);
      }),
        s.default.extend(s.default.FMSynth, s.default.Monophonic),
        (s.default.FMSynth.defaults = {
          harmonicity: 3,
          modulationIndex: 10,
          detune: 0,
          oscillator: { type: "sine" },
          envelope: { attack: 0.01, decay: 0.01, sustain: 1, release: 0.5 },
          modulation: { type: "square" },
          modulationEnvelope: {
            attack: 0.5,
            decay: 0,
            sustain: 1,
            release: 0.5,
          },
        }),
        (s.default.FMSynth.prototype._triggerEnvelopeAttack = function (t, e) {
          return (
            (t = this.toSeconds(t)),
            this._carrier._triggerEnvelopeAttack(t, e),
            this._modulator._triggerEnvelopeAttack(t),
            this
          );
        }),
        (s.default.FMSynth.prototype._triggerEnvelopeRelease = function (t) {
          return (
            (t = this.toSeconds(t)),
            this._carrier._triggerEnvelopeRelease(t),
            this._modulator._triggerEnvelopeRelease(t),
            this
          );
        }),
        (s.default.FMSynth.prototype.dispose = function () {
          return (
            s.default.Monophonic.prototype.dispose.call(this),
            this._writable([
              "frequency",
              "harmonicity",
              "modulationIndex",
              "oscillator",
              "envelope",
              "modulation",
              "modulationEnvelope",
              "detune",
            ]),
            this._carrier.dispose(),
            (this._carrier = null),
            this._modulator.dispose(),
            (this._modulator = null),
            this.frequency.dispose(),
            (this.frequency = null),
            this.detune.dispose(),
            (this.detune = null),
            this.modulationIndex.dispose(),
            (this.modulationIndex = null),
            this.harmonicity.dispose(),
            (this.harmonicity = null),
            this._modulationNode.dispose(),
            (this._modulationNode = null),
            (this.oscillator = null),
            (this.envelope = null),
            (this.modulationEnvelope = null),
            (this.modulation = null),
            this
          );
        }),
        (e.default = s.default.FMSynth);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(66), i(12), i(2), i(5), i(25), i(14);
      (s.default.DuoSynth = function (t) {
        (t = s.default.defaultArg(t, s.default.DuoSynth.defaults)),
          s.default.Monophonic.call(this, t),
          (this.voice0 = new s.default.MonoSynth(t.voice0)),
          (this.voice0.volume.value = -10),
          (this.voice1 = new s.default.MonoSynth(t.voice1)),
          (this.voice1.volume.value = -10),
          (this._vibrato = new s.default.LFO(t.vibratoRate, -50, 50)),
          this._vibrato.start(),
          (this.vibratoRate = this._vibrato.frequency),
          (this._vibratoGain = new s.default.Gain(
            t.vibratoAmount,
            s.default.Type.Positive
          )),
          (this.vibratoAmount = this._vibratoGain.gain),
          (this.frequency = new s.default.Signal(
            440,
            s.default.Type.Frequency
          )),
          (this.harmonicity = new s.default.Multiply(t.harmonicity)),
          (this.harmonicity.units = s.default.Type.Positive),
          this.frequency.connect(this.voice0.frequency),
          this.frequency.chain(this.harmonicity, this.voice1.frequency),
          this._vibrato.connect(this._vibratoGain),
          this._vibratoGain.fan(this.voice0.detune, this.voice1.detune),
          this.voice0.connect(this.output),
          this.voice1.connect(this.output),
          this._readOnly([
            "voice0",
            "voice1",
            "frequency",
            "vibratoAmount",
            "vibratoRate",
          ]);
      }),
        s.default.extend(s.default.DuoSynth, s.default.Monophonic),
        (s.default.DuoSynth.defaults = {
          vibratoAmount: 0.5,
          vibratoRate: 5,
          harmonicity: 1.5,
          voice0: {
            volume: -10,
            portamento: 0,
            oscillator: { type: "sine" },
            filterEnvelope: {
              attack: 0.01,
              decay: 0,
              sustain: 1,
              release: 0.5,
            },
            envelope: { attack: 0.01, decay: 0, sustain: 1, release: 0.5 },
          },
          voice1: {
            volume: -10,
            portamento: 0,
            oscillator: { type: "sine" },
            filterEnvelope: {
              attack: 0.01,
              decay: 0,
              sustain: 1,
              release: 0.5,
            },
            envelope: { attack: 0.01, decay: 0, sustain: 1, release: 0.5 },
          },
        }),
        (s.default.DuoSynth.prototype._triggerEnvelopeAttack = function (t, e) {
          return (
            (t = this.toSeconds(t)),
            this.voice0._triggerEnvelopeAttack(t, e),
            this.voice1._triggerEnvelopeAttack(t, e),
            this
          );
        }),
        (s.default.DuoSynth.prototype._triggerEnvelopeRelease = function (t) {
          return (
            this.voice0._triggerEnvelopeRelease(t),
            this.voice1._triggerEnvelopeRelease(t),
            this
          );
        }),
        (s.default.DuoSynth.prototype.getLevelAtTime = function (t) {
          return (
            (this.voice0.getLevelAtTime(t) + this.voice1.getLevelAtTime(t)) / 2
          );
        }),
        (s.default.DuoSynth.prototype.dispose = function () {
          return (
            s.default.Monophonic.prototype.dispose.call(this),
            this._writable([
              "voice0",
              "voice1",
              "frequency",
              "vibratoAmount",
              "vibratoRate",
            ]),
            this.voice0.dispose(),
            (this.voice0 = null),
            this.voice1.dispose(),
            (this.voice1 = null),
            this.frequency.dispose(),
            (this.frequency = null),
            this._vibratoGain.dispose(),
            (this._vibratoGain = null),
            (this._vibrato = null),
            this.harmonicity.dispose(),
            (this.harmonicity = null),
            this.vibratoAmount.dispose(),
            (this.vibratoAmount = null),
            (this.vibratoRate = null),
            this
          );
        }),
        (e.default = s.default.DuoSynth);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(38), i(2), i(5), i(25), i(22), i(3);
      (s.default.AMSynth = function (t) {
        (t = s.default.defaultArg(t, s.default.AMSynth.defaults)),
          s.default.Monophonic.call(this, t),
          (this._carrier = new s.default.Synth()),
          (this._carrier.volume.value = -10),
          (this.oscillator = this._carrier.oscillator.set(t.oscillator)),
          (this.envelope = this._carrier.envelope.set(t.envelope)),
          (this._modulator = new s.default.Synth()),
          (this._modulator.volume.value = -10),
          (this.modulation = this._modulator.oscillator.set(t.modulation)),
          (this.modulationEnvelope = this._modulator.envelope.set(
            t.modulationEnvelope
          )),
          (this.frequency = new s.default.Signal(
            440,
            s.default.Type.Frequency
          )),
          (this.detune = new s.default.Signal(t.detune, s.default.Type.Cents)),
          (this.harmonicity = new s.default.Multiply(t.harmonicity)),
          (this.harmonicity.units = s.default.Type.Positive),
          (this._modulationScale = new s.default.AudioToGain()),
          (this._modulationNode = new s.default.Gain()),
          this.frequency.connect(this._carrier.frequency),
          this.frequency.chain(this.harmonicity, this._modulator.frequency),
          this.detune.fan(this._carrier.detune, this._modulator.detune),
          this._modulator.chain(
            this._modulationScale,
            this._modulationNode.gain
          ),
          this._carrier.chain(this._modulationNode, this.output),
          this._readOnly([
            "frequency",
            "harmonicity",
            "oscillator",
            "envelope",
            "modulation",
            "modulationEnvelope",
            "detune",
          ]);
      }),
        s.default.extend(s.default.AMSynth, s.default.Monophonic),
        (s.default.AMSynth.defaults = {
          harmonicity: 3,
          detune: 0,
          oscillator: { type: "sine" },
          envelope: { attack: 0.01, decay: 0.01, sustain: 1, release: 0.5 },
          modulation: { type: "square" },
          modulationEnvelope: {
            attack: 0.5,
            decay: 0,
            sustain: 1,
            release: 0.5,
          },
        }),
        (s.default.AMSynth.prototype._triggerEnvelopeAttack = function (t, e) {
          return (
            (t = this.toSeconds(t)),
            this._carrier._triggerEnvelopeAttack(t, e),
            this._modulator._triggerEnvelopeAttack(t),
            this
          );
        }),
        (s.default.AMSynth.prototype._triggerEnvelopeRelease = function (t) {
          return (
            this._carrier._triggerEnvelopeRelease(t),
            this._modulator._triggerEnvelopeRelease(t),
            this
          );
        }),
        (s.default.AMSynth.prototype.dispose = function () {
          return (
            s.default.Monophonic.prototype.dispose.call(this),
            this._writable([
              "frequency",
              "harmonicity",
              "oscillator",
              "envelope",
              "modulation",
              "modulationEnvelope",
              "detune",
            ]),
            this._carrier.dispose(),
            (this._carrier = null),
            this._modulator.dispose(),
            (this._modulator = null),
            this.frequency.dispose(),
            (this.frequency = null),
            this.detune.dispose(),
            (this.detune = null),
            this.harmonicity.dispose(),
            (this.harmonicity = null),
            this._modulationScale.dispose(),
            (this._modulationScale = null),
            this._modulationNode.dispose(),
            (this._modulationNode = null),
            (this.oscillator = null),
            (this.envelope = null),
            (this.modulationEnvelope = null),
            (this.modulation = null),
            this
          );
        }),
        (e.default = s.default.AMSynth);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(70), i(16);
      (s.default.Sequence = function () {
        var t = s.default.defaults(
            arguments,
            ["callback", "events", "subdivision"],
            s.default.Sequence
          ),
          e = t.events;
        if (
          (delete t.events,
          s.default.Part.call(this, t),
          (this._subdivision = this.toTicks(t.subdivision)),
          s.default.isUndef(t.loopEnd) &&
            s.default.isDefined(e) &&
            (this._loopEnd = e.length * this._subdivision),
          (this._loop = !0),
          s.default.isDefined(e))
        )
          for (var i = 0; i < e.length; i++) this.add(i, e[i]);
      }),
        s.default.extend(s.default.Sequence, s.default.Part),
        (s.default.Sequence.defaults = { subdivision: "4n" }),
        Object.defineProperty(s.default.Sequence.prototype, "subdivision", {
          get: function () {
            return s.default.Ticks(this._subdivision).toSeconds();
          },
        }),
        (s.default.Sequence.prototype.at = function (t, e) {
          return (
            s.default.isArray(e) && this.remove(t),
            s.default.Part.prototype.at.call(this, this._indexTime(t), e)
          );
        }),
        (s.default.Sequence.prototype.add = function (t, e) {
          if (null === e) return this;
          if (s.default.isArray(e)) {
            var i = Math.round(this._subdivision / e.length);
            e = new s.default.Sequence(
              this._tick.bind(this),
              e,
              s.default.Ticks(i)
            );
          }
          return (
            s.default.Part.prototype.add.call(this, this._indexTime(t), e), this
          );
        }),
        (s.default.Sequence.prototype.remove = function (t, e) {
          return (
            s.default.Part.prototype.remove.call(this, this._indexTime(t), e),
            this
          );
        }),
        (s.default.Sequence.prototype._indexTime = function (t) {
          return t instanceof s.default.TransportTime
            ? t
            : s.default
                .Ticks(t * this._subdivision + this.startOffset)
                .toSeconds();
        }),
        (s.default.Sequence.prototype.dispose = function () {
          return s.default.Part.prototype.dispose.call(this), this;
        }),
        (e.default = s.default.Sequence);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(71), i(79);
      (s.default.Pattern = function () {
        var t = s.default.defaults(
          arguments,
          ["callback", "values", "pattern"],
          s.default.Pattern
        );
        s.default.Loop.call(this, t),
          (this._pattern = new s.default.CtrlPattern({
            values: t.values,
            type: t.pattern,
            index: t.index,
          }));
      }),
        s.default.extend(s.default.Pattern, s.default.Loop),
        (s.default.Pattern.defaults = {
          pattern: s.default.CtrlPattern.Type.Up,
          callback: s.default.noOp,
          values: [],
        }),
        (s.default.Pattern.prototype._tick = function (t) {
          this.callback(t, this._pattern.value), this._pattern.next();
        }),
        Object.defineProperty(s.default.Pattern.prototype, "index", {
          get: function () {
            return this._pattern.index;
          },
          set: function (t) {
            this._pattern.index = t;
          },
        }),
        Object.defineProperty(s.default.Pattern.prototype, "values", {
          get: function () {
            return this._pattern.values;
          },
          set: function (t) {
            this._pattern.values = t;
          },
        }),
        Object.defineProperty(s.default.Pattern.prototype, "value", {
          get: function () {
            return this._pattern.value;
          },
        }),
        Object.defineProperty(s.default.Pattern.prototype, "pattern", {
          get: function () {
            return this._pattern.type;
          },
          set: function (t) {
            this._pattern.type = t;
          },
        }),
        (s.default.Pattern.prototype.dispose = function () {
          s.default.Loop.prototype.dispose.call(this),
            this._pattern.dispose(),
            (this._pattern = null);
        }),
        (e.default = s.default.Pattern);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(8), i(18), i(12);
      (s.default.Vibrato = function () {
        var t = s.default.defaults(
          arguments,
          ["frequency", "depth"],
          s.default.Vibrato
        );
        s.default.Effect.call(this, t),
          (this._delayNode = new s.default.Delay(0, t.maxDelay)),
          (this._lfo = new s.default.LFO({
            type: t.type,
            min: 0,
            max: t.maxDelay,
            frequency: t.frequency,
            phase: -90,
          })
            .start()
            .connect(this._delayNode.delayTime)),
          (this.frequency = this._lfo.frequency),
          (this.depth = this._lfo.amplitude),
          (this.depth.value = t.depth),
          this._readOnly(["frequency", "depth"]),
          this.effectSend.chain(this._delayNode, this.effectReturn);
      }),
        s.default.extend(s.default.Vibrato, s.default.Effect),
        (s.default.Vibrato.defaults = {
          maxDelay: 0.005,
          frequency: 5,
          depth: 0.1,
          type: "sine",
        }),
        Object.defineProperty(s.default.Vibrato.prototype, "type", {
          get: function () {
            return this._lfo.type;
          },
          set: function (t) {
            this._lfo.type = t;
          },
        }),
        (s.default.Vibrato.prototype.dispose = function () {
          s.default.Effect.prototype.dispose.call(this),
            this._delayNode.dispose(),
            (this._delayNode = null),
            this._lfo.dispose(),
            (this._lfo = null),
            this._writable(["frequency", "depth"]),
            (this.frequency = null),
            (this.depth = null);
        }),
        (e.default = s.default.Vibrato);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(12), i(15);
      (s.default.Tremolo = function () {
        var t = s.default.defaults(
          arguments,
          ["frequency", "depth"],
          s.default.Tremolo
        );
        s.default.StereoEffect.call(this, t),
          (this._lfoL = new s.default.LFO({ phase: t.spread, min: 1, max: 0 })),
          (this._lfoR = new s.default.LFO({ phase: t.spread, min: 1, max: 0 })),
          (this._amplitudeL = new s.default.Gain()),
          (this._amplitudeR = new s.default.Gain()),
          (this.frequency = new s.default.Signal(
            t.frequency,
            s.default.Type.Frequency
          )),
          (this.depth = new s.default.Signal(
            t.depth,
            s.default.Type.NormalRange
          )),
          this._readOnly(["frequency", "depth"]),
          this.effectSendL.chain(this._amplitudeL, this.effectReturnL),
          this.effectSendR.chain(this._amplitudeR, this.effectReturnR),
          this._lfoL.connect(this._amplitudeL.gain),
          this._lfoR.connect(this._amplitudeR.gain),
          this.frequency.fan(this._lfoL.frequency, this._lfoR.frequency),
          this.depth.fan(this._lfoR.amplitude, this._lfoL.amplitude),
          (this.type = t.type),
          (this.spread = t.spread);
      }),
        s.default.extend(s.default.Tremolo, s.default.StereoEffect),
        (s.default.Tremolo.defaults = {
          frequency: 10,
          type: "sine",
          depth: 0.5,
          spread: 180,
        }),
        (s.default.Tremolo.prototype.start = function (t) {
          return this._lfoL.start(t), this._lfoR.start(t), this;
        }),
        (s.default.Tremolo.prototype.stop = function (t) {
          return this._lfoL.stop(t), this._lfoR.stop(t), this;
        }),
        (s.default.Tremolo.prototype.sync = function (t) {
          return (
            this._lfoL.sync(t),
            this._lfoR.sync(t),
            s.default.Transport.syncSignal(this.frequency),
            this
          );
        }),
        (s.default.Tremolo.prototype.unsync = function () {
          return (
            this._lfoL.unsync(),
            this._lfoR.unsync(),
            s.default.Transport.unsyncSignal(this.frequency),
            this
          );
        }),
        Object.defineProperty(s.default.Tremolo.prototype, "type", {
          get: function () {
            return this._lfoL.type;
          },
          set: function (t) {
            (this._lfoL.type = t), (this._lfoR.type = t);
          },
        }),
        Object.defineProperty(s.default.Tremolo.prototype, "spread", {
          get: function () {
            return this._lfoR.phase - this._lfoL.phase;
          },
          set: function (t) {
            (this._lfoL.phase = 90 - t / 2), (this._lfoR.phase = t / 2 + 90);
          },
        }),
        (s.default.Tremolo.prototype.dispose = function () {
          return (
            s.default.StereoEffect.prototype.dispose.call(this),
            this._writable(["frequency", "depth"]),
            this._lfoL.dispose(),
            (this._lfoL = null),
            this._lfoR.dispose(),
            (this._lfoR = null),
            this._amplitudeL.dispose(),
            (this._amplitudeL = null),
            this._amplitudeR.dispose(),
            (this._amplitudeR = null),
            (this.frequency = null),
            (this.depth = null),
            this
          );
        }),
        (e.default = s.default.Tremolo);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(73), i(2), i(5), i(13);
      (s.default.StereoWidener = function () {
        var t = s.default.defaults(
          arguments,
          ["width"],
          s.default.StereoWidener
        );
        s.default.MidSideEffect.call(this, t),
          (this.width = new s.default.Signal(
            t.width,
            s.default.Type.NormalRange
          )),
          this._readOnly(["width"]),
          (this._twoTimesWidthMid = new s.default.Multiply(2)),
          (this._twoTimesWidthSide = new s.default.Multiply(2)),
          (this._midMult = new s.default.Multiply()),
          this._twoTimesWidthMid.connect(this._midMult, 0, 1),
          this.midSend.chain(this._midMult, this.midReturn),
          (this._oneMinusWidth = new s.default.Subtract()),
          this._oneMinusWidth.connect(this._twoTimesWidthMid),
          s.default.connect(
            this.context.getConstant(1),
            this._oneMinusWidth,
            0,
            0
          ),
          this.width.connect(this._oneMinusWidth, 0, 1),
          (this._sideMult = new s.default.Multiply()),
          this.width.connect(this._twoTimesWidthSide),
          this._twoTimesWidthSide.connect(this._sideMult, 0, 1),
          this.sideSend.chain(this._sideMult, this.sideReturn);
      }),
        s.default.extend(s.default.StereoWidener, s.default.MidSideEffect),
        (s.default.StereoWidener.defaults = { width: 0.5 }),
        (s.default.StereoWidener.prototype.dispose = function () {
          return (
            s.default.MidSideEffect.prototype.dispose.call(this),
            this._writable(["width"]),
            this.width.dispose(),
            (this.width = null),
            this._midMult.dispose(),
            (this._midMult = null),
            this._sideMult.dispose(),
            (this._sideMult = null),
            this._twoTimesWidthMid.dispose(),
            (this._twoTimesWidthMid = null),
            this._twoTimesWidthSide.dispose(),
            (this._twoTimesWidthSide = null),
            this._oneMinusWidth.dispose(),
            (this._oneMinusWidth = null),
            this
          );
        }),
        (e.default = s.default.StereoWidener);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(15), i(33), i(3);
      (s.default.StereoFeedbackEffect = function () {
        var t = s.default.defaults(
          arguments,
          ["feedback"],
          s.default.FeedbackEffect
        );
        s.default.StereoEffect.call(this, t),
          (this.feedback = new s.default.Signal(
            t.feedback,
            s.default.Type.NormalRange
          )),
          (this._feedbackL = new s.default.Gain()),
          (this._feedbackR = new s.default.Gain()),
          this.effectReturnL.chain(this._feedbackL, this.effectSendL),
          this.effectReturnR.chain(this._feedbackR, this.effectSendR),
          this.feedback.fan(this._feedbackL.gain, this._feedbackR.gain),
          this._readOnly(["feedback"]);
      }),
        s.default.extend(
          s.default.StereoFeedbackEffect,
          s.default.StereoEffect
        ),
        (s.default.StereoFeedbackEffect.prototype.dispose = function () {
          return (
            s.default.StereoEffect.prototype.dispose.call(this),
            this._writable(["feedback"]),
            this.feedback.dispose(),
            (this.feedback = null),
            this._feedbackL.dispose(),
            (this._feedbackL = null),
            this._feedbackR.dispose(),
            (this._feedbackR = null),
            this
          );
        }),
        (e.default = s.default.StereoFeedbackEffect);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(77), i(9), i(10), i(39), i(3), i(74);
      (s.default.Reverb = function () {
        var t = s.default.defaults(arguments, ["decay"], s.default.Reverb);
        s.default.Effect.call(this, t),
          (this._convolver = this.context.createConvolver()),
          (this.decay = t.decay),
          (this.preDelay = t.preDelay),
          this.connectEffect(this._convolver);
      }),
        s.default.extend(s.default.Reverb, s.default.Effect),
        (s.default.Reverb.defaults = { decay: 1.5, preDelay: 0.01 }),
        (s.default.Reverb.prototype.generate = function () {
          return s.default
            .Offline(
              function () {
                var t = new s.default.Noise(),
                  e = new s.default.Noise(),
                  i = new s.default.Merge();
                t.connect(i.left), e.connect(i.right);
                var n = new s.default.Gain().toMaster();
                i.connect(n),
                  t.start(0),
                  e.start(0),
                  n.gain.setValueAtTime(0, 0),
                  n.gain.setValueAtTime(1, this.preDelay),
                  n.gain.exponentialApproachValueAtTime(
                    0,
                    this.preDelay,
                    this.decay + this.preDelay
                  );
              }.bind(this),
              this.decay + this.preDelay
            )
            .then(
              function (t) {
                return (this._convolver.buffer = t.get()), this;
              }.bind(this)
            );
        }),
        (s.default.Reverb.prototype.dispose = function () {
          return (
            s.default.Effect.prototype.dispose.call(this),
            this._convolver.disconnect(),
            (this._convolver = null),
            this
          );
        }),
        (e.default = s.default.Reverb);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(12), i(23), i(2), i(33), i(18);
      (s.default.PitchShift = function () {
        var t = s.default.defaults(arguments, ["pitch"], s.default.PitchShift);
        s.default.FeedbackEffect.call(this, t),
          (this._frequency = new s.default.Signal(0)),
          (this._delayA = new s.default.Delay(0, 1)),
          (this._lfoA = new s.default.LFO({
            min: 0,
            max: 0.1,
            type: "sawtooth",
          }).connect(this._delayA.delayTime)),
          (this._delayB = new s.default.Delay(0, 1)),
          (this._lfoB = new s.default.LFO({
            min: 0,
            max: 0.1,
            type: "sawtooth",
            phase: 180,
          }).connect(this._delayB.delayTime)),
          (this._crossFade = new s.default.CrossFade()),
          (this._crossFadeLFO = new s.default.LFO({
            min: 0,
            max: 1,
            type: "triangle",
            phase: 90,
          }).connect(this._crossFade.fade)),
          (this._feedbackDelay = new s.default.Delay(t.delayTime)),
          (this.delayTime = this._feedbackDelay.delayTime),
          this._readOnly("delayTime"),
          (this._pitch = t.pitch),
          (this._windowSize = t.windowSize),
          this._delayA.connect(this._crossFade.a),
          this._delayB.connect(this._crossFade.b),
          this._frequency.fan(
            this._lfoA.frequency,
            this._lfoB.frequency,
            this._crossFadeLFO.frequency
          ),
          this.effectSend.fan(this._delayA, this._delayB),
          this._crossFade.chain(this._feedbackDelay, this.effectReturn);
        var e = this.now();
        this._lfoA.start(e),
          this._lfoB.start(e),
          this._crossFadeLFO.start(e),
          (this.windowSize = this._windowSize);
      }),
        s.default.extend(s.default.PitchShift, s.default.FeedbackEffect),
        (s.default.PitchShift.defaults = {
          pitch: 0,
          windowSize: 0.1,
          delayTime: 0,
          feedback: 0,
        }),
        Object.defineProperty(s.default.PitchShift.prototype, "pitch", {
          get: function () {
            return this._pitch;
          },
          set: function (t) {
            this._pitch = t;
            var e = 0;
            t < 0
              ? ((this._lfoA.min = 0),
                (this._lfoA.max = this._windowSize),
                (this._lfoB.min = 0),
                (this._lfoB.max = this._windowSize),
                (e = s.default.intervalToFrequencyRatio(t - 1) + 1))
              : ((this._lfoA.min = this._windowSize),
                (this._lfoA.max = 0),
                (this._lfoB.min = this._windowSize),
                (this._lfoB.max = 0),
                (e = s.default.intervalToFrequencyRatio(t) - 1)),
              (this._frequency.value = e * (1.2 / this._windowSize));
          },
        }),
        Object.defineProperty(s.default.PitchShift.prototype, "windowSize", {
          get: function () {
            return this._windowSize;
          },
          set: function (t) {
            (this._windowSize = this.toSeconds(t)), (this.pitch = this._pitch);
          },
        }),
        (s.default.PitchShift.prototype.dispose = function () {
          return (
            s.default.FeedbackEffect.prototype.dispose.call(this),
            this._frequency.dispose(),
            (this._frequency = null),
            this._delayA.disconnect(),
            (this._delayA = null),
            this._delayB.disconnect(),
            (this._delayB = null),
            this._lfoA.dispose(),
            (this._lfoA = null),
            this._lfoB.dispose(),
            (this._lfoB = null),
            this._crossFade.dispose(),
            (this._crossFade = null),
            this._crossFadeLFO.dispose(),
            (this._crossFadeLFO = null),
            this._writable("delayTime"),
            this._feedbackDelay.dispose(),
            (this._feedbackDelay = null),
            (this.delayTime = null),
            this
          );
        }),
        (e.default = s.default.PitchShift);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(72), i(2), i(18);
      (s.default.PingPongDelay = function () {
        var t = s.default.defaults(
          arguments,
          ["delayTime", "feedback"],
          s.default.PingPongDelay
        );
        s.default.StereoXFeedbackEffect.call(this, t),
          (this._leftDelay = new s.default.Delay(0, t.maxDelayTime)),
          (this._rightDelay = new s.default.Delay(0, t.maxDelayTime)),
          (this._rightPreDelay = new s.default.Delay(0, t.maxDelayTime)),
          (this.delayTime = new s.default.Signal(
            t.delayTime,
            s.default.Type.Time
          )),
          this.effectSendL.chain(this._leftDelay, this.effectReturnL),
          this.effectSendR.chain(
            this._rightPreDelay,
            this._rightDelay,
            this.effectReturnR
          ),
          this.delayTime.fan(
            this._leftDelay.delayTime,
            this._rightDelay.delayTime,
            this._rightPreDelay.delayTime
          ),
          this._feedbackLR.disconnect(),
          this._feedbackLR.connect(this._rightDelay),
          this._readOnly(["delayTime"]);
      }),
        s.default.extend(
          s.default.PingPongDelay,
          s.default.StereoXFeedbackEffect
        ),
        (s.default.PingPongDelay.defaults = {
          delayTime: 0.25,
          maxDelayTime: 1,
        }),
        (s.default.PingPongDelay.prototype.dispose = function () {
          return (
            s.default.StereoXFeedbackEffect.prototype.dispose.call(this),
            this._leftDelay.dispose(),
            (this._leftDelay = null),
            this._rightDelay.dispose(),
            (this._rightDelay = null),
            this._rightPreDelay.dispose(),
            (this._rightPreDelay = null),
            this._writable(["delayTime"]),
            this.delayTime.dispose(),
            (this.delayTime = null),
            this
          );
        }),
        (e.default = s.default.PingPongDelay);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(12), i(9), i(15);
      (s.default.Phaser = function () {
        var t = s.default.defaults(
          arguments,
          ["frequency", "octaves", "baseFrequency"],
          s.default.Phaser
        );
        s.default.StereoEffect.call(this, t),
          (this._lfoL = new s.default.LFO(t.frequency, 0, 1)),
          (this._lfoR = new s.default.LFO(t.frequency, 0, 1)),
          (this._lfoR.phase = 180),
          (this._baseFrequency = t.baseFrequency),
          (this._octaves = t.octaves),
          (this.Q = new s.default.Signal(t.Q, s.default.Type.Positive)),
          (this._filtersL = this._makeFilters(t.stages, this._lfoL, this.Q)),
          (this._filtersR = this._makeFilters(t.stages, this._lfoR, this.Q)),
          (this.frequency = this._lfoL.frequency),
          (this.frequency.value = t.frequency),
          this.effectSendL.connect(this._filtersL[0]),
          this.effectSendR.connect(this._filtersR[0]),
          s.default.connect(this._filtersL[t.stages - 1], this.effectReturnL),
          s.default.connect(this._filtersR[t.stages - 1], this.effectReturnR),
          this._lfoL.frequency.connect(this._lfoR.frequency),
          (this.baseFrequency = t.baseFrequency),
          (this.octaves = t.octaves),
          this._lfoL.start(),
          this._lfoR.start(),
          this._readOnly(["frequency", "Q"]);
      }),
        s.default.extend(s.default.Phaser, s.default.StereoEffect),
        (s.default.Phaser.defaults = {
          frequency: 0.5,
          octaves: 3,
          stages: 10,
          Q: 10,
          baseFrequency: 350,
        }),
        (s.default.Phaser.prototype._makeFilters = function (t, e, i) {
          for (var n = new Array(t), o = 0; o < t; o++) {
            var a = this.context.createBiquadFilter();
            (a.type = "allpass"),
              i.connect(a.Q),
              e.connect(a.frequency),
              (n[o] = a);
          }
          return s.default.connectSeries.apply(s.default, n), n;
        }),
        Object.defineProperty(s.default.Phaser.prototype, "octaves", {
          get: function () {
            return this._octaves;
          },
          set: function (t) {
            this._octaves = t;
            var e = this._baseFrequency * Math.pow(2, t);
            (this._lfoL.max = e), (this._lfoR.max = e);
          },
        }),
        Object.defineProperty(s.default.Phaser.prototype, "baseFrequency", {
          get: function () {
            return this._baseFrequency;
          },
          set: function (t) {
            (this._baseFrequency = t),
              (this._lfoL.min = t),
              (this._lfoR.min = t),
              (this.octaves = this._octaves);
          },
        }),
        (s.default.Phaser.prototype.dispose = function () {
          s.default.StereoEffect.prototype.dispose.call(this),
            this._writable(["frequency", "Q"]),
            this.Q.dispose(),
            (this.Q = null),
            this._lfoL.dispose(),
            (this._lfoL = null),
            this._lfoR.dispose(),
            (this._lfoR = null);
          for (var t = 0; t < this._filtersL.length; t++)
            this._filtersL[t].disconnect(), (this._filtersL[t] = null);
          this._filtersL = null;
          for (var e = 0; e < this._filtersR.length; e++)
            this._filtersR[e].disconnect(), (this._filtersR[e] = null);
          return (this._filtersR = null), (this.frequency = null), this;
        }),
        (e.default = s.default.Phaser);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0),
        n = (i(59), i(15), i(26), [0.06748, 0.06404, 0.08212, 0.09004]),
        o = [0.773, 0.802, 0.753, 0.733],
        a = [347, 113, 37];
      (s.default.JCReverb = function () {
        var t = s.default.defaults(arguments, ["roomSize"], s.default.JCReverb);
        s.default.StereoEffect.call(this, t),
          (this.roomSize = new s.default.Signal(
            t.roomSize,
            s.default.Type.NormalRange
          )),
          (this._scaleRoomSize = new s.default.Scale(-0.733, 0.197)),
          (this._allpassFilters = []),
          (this._feedbackCombFilters = []);
        for (var e = 0; e < a.length; e++) {
          var i = this.context.createBiquadFilter();
          (i.type = "allpass"),
            (i.frequency.value = a[e]),
            this._allpassFilters.push(i);
        }
        for (var r = 0; r < n.length; r++) {
          var l = new s.default.FeedbackCombFilter(n[r], 0.1);
          this._scaleRoomSize.connect(l.resonance),
            (l.resonance.value = o[r]),
            s.default.connect(
              this._allpassFilters[this._allpassFilters.length - 1],
              l
            ),
            r < n.length / 2
              ? l.connect(this.effectReturnL)
              : l.connect(this.effectReturnR),
            this._feedbackCombFilters.push(l);
        }
        this.roomSize.connect(this._scaleRoomSize),
          s.default.connectSeries.apply(s.default, this._allpassFilters),
          this.effectSendL.connect(this._allpassFilters[0]),
          this.effectSendR.connect(this._allpassFilters[0]),
          this._readOnly(["roomSize"]);
      }),
        s.default.extend(s.default.JCReverb, s.default.StereoEffect),
        (s.default.JCReverb.defaults = { roomSize: 0.5 }),
        (s.default.JCReverb.prototype.dispose = function () {
          s.default.StereoEffect.prototype.dispose.call(this);
          for (var t = 0; t < this._allpassFilters.length; t++)
            this._allpassFilters[t].disconnect(),
              (this._allpassFilters[t] = null);
          this._allpassFilters = null;
          for (var e = 0; e < this._feedbackCombFilters.length; e++)
            this._feedbackCombFilters[e].dispose(),
              (this._feedbackCombFilters[e] = null);
          return (
            (this._feedbackCombFilters = null),
            this._writable(["roomSize"]),
            this.roomSize.dispose(),
            (this.roomSize = null),
            this._scaleRoomSize.dispose(),
            (this._scaleRoomSize = null),
            this
          );
        }),
        (e.default = s.default.JCReverb);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0),
        n =
          (i(54),
          i(15),
          i(2),
          i(19),
          i(10),
          i(42),
          [
            1557 / 44100,
            1617 / 44100,
            1491 / 44100,
            1422 / 44100,
            1277 / 44100,
            1356 / 44100,
            1188 / 44100,
            1116 / 44100,
          ]),
        o = [225, 556, 441, 341];
      (s.default.Freeverb = function () {
        var t = s.default.defaults(
          arguments,
          ["roomSize", "dampening"],
          s.default.Freeverb
        );
        s.default.StereoEffect.call(this, t),
          (this.roomSize = new s.default.Signal(
            t.roomSize,
            s.default.Type.NormalRange
          )),
          (this.dampening = new s.default.Signal(
            t.dampening,
            s.default.Type.Frequency
          )),
          (this._combFilters = []),
          (this._allpassFiltersL = []),
          (this._allpassFiltersR = []);
        for (var e = 0; e < o.length; e++) {
          var i = this.context.createBiquadFilter();
          (i.type = "allpass"),
            (i.frequency.value = o[e]),
            this._allpassFiltersL.push(i);
        }
        for (var a = 0; a < o.length; a++) {
          var r = this.context.createBiquadFilter();
          (r.type = "allpass"),
            (r.frequency.value = o[a]),
            this._allpassFiltersR.push(r);
        }
        for (var l = 0; l < n.length; l++) {
          var u = new s.default.LowpassCombFilter(n[l]);
          l < n.length / 2
            ? this.effectSendL.chain(u, this._allpassFiltersL[0])
            : this.effectSendR.chain(u, this._allpassFiltersR[0]),
            this.roomSize.connect(u.resonance),
            this.dampening.connect(u.dampening),
            this._combFilters.push(u);
        }
        s.default.connectSeries.apply(s.default, this._allpassFiltersL),
          s.default.connectSeries.apply(s.default, this._allpassFiltersR),
          s.default.connect(
            this._allpassFiltersL[this._allpassFiltersL.length - 1],
            this.effectReturnL
          ),
          s.default.connect(
            this._allpassFiltersR[this._allpassFiltersR.length - 1],
            this.effectReturnR
          ),
          this._readOnly(["roomSize", "dampening"]);
      }),
        s.default.extend(s.default.Freeverb, s.default.StereoEffect),
        (s.default.Freeverb.defaults = { roomSize: 0.7, dampening: 3e3 }),
        (s.default.Freeverb.prototype.dispose = function () {
          s.default.StereoEffect.prototype.dispose.call(this);
          for (var t = 0; t < this._allpassFiltersL.length; t++)
            this._allpassFiltersL[t].disconnect(),
              (this._allpassFiltersL[t] = null);
          this._allpassFiltersL = null;
          for (var e = 0; e < this._allpassFiltersR.length; e++)
            this._allpassFiltersR[e].disconnect(),
              (this._allpassFiltersR[e] = null);
          this._allpassFiltersR = null;
          for (var i = 0; i < this._combFilters.length; i++)
            this._combFilters[i].dispose(), (this._combFilters[i] = null);
          return (
            (this._combFilters = null),
            this._writable(["roomSize", "dampening"]),
            this.roomSize.dispose(),
            (this.roomSize = null),
            this.dampening.dispose(),
            (this.dampening = null),
            this
          );
        }),
        (e.default = s.default.Freeverb);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(33), i(2), i(18);
      (s.default.FeedbackDelay = function () {
        var t = s.default.defaults(
          arguments,
          ["delayTime", "feedback"],
          s.default.FeedbackDelay
        );
        s.default.FeedbackEffect.call(this, t),
          (this._delayNode = new s.default.Delay(t.delayTime, t.maxDelay)),
          (this.delayTime = this._delayNode.delayTime),
          this.connectEffect(this._delayNode),
          this._readOnly(["delayTime"]);
      }),
        s.default.extend(s.default.FeedbackDelay, s.default.FeedbackEffect),
        (s.default.FeedbackDelay.defaults = { delayTime: 0.25, maxDelay: 1 }),
        (s.default.FeedbackDelay.prototype.dispose = function () {
          return (
            s.default.FeedbackEffect.prototype.dispose.call(this),
            this._delayNode.dispose(),
            (this._delayNode = null),
            this._writable(["delayTime"]),
            (this.delayTime = null),
            this
          );
        }),
        (e.default = s.default.FeedbackDelay);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(8), i(7);
      (s.default.Distortion = function () {
        var t = s.default.defaults(
          arguments,
          ["distortion"],
          s.default.Distortion
        );
        s.default.Effect.call(this, t),
          (this._shaper = new s.default.WaveShaper(4096)),
          (this._distortion = t.distortion),
          this.connectEffect(this._shaper),
          (this.distortion = t.distortion),
          (this.oversample = t.oversample);
      }),
        s.default.extend(s.default.Distortion, s.default.Effect),
        (s.default.Distortion.defaults = {
          distortion: 0.4,
          oversample: "none",
        }),
        Object.defineProperty(s.default.Distortion.prototype, "distortion", {
          get: function () {
            return this._distortion;
          },
          set: function (t) {
            this._distortion = t;
            var e = 100 * t,
              i = Math.PI / 180;
            this._shaper.setMap(function (t) {
              return Math.abs(t) < 0.001
                ? 0
                : ((3 + e) * t * 20 * i) / (Math.PI + e * Math.abs(t));
            });
          },
        }),
        Object.defineProperty(s.default.Distortion.prototype, "oversample", {
          get: function () {
            return this._shaper.oversample;
          },
          set: function (t) {
            this._shaper.oversample = t;
          },
        }),
        (s.default.Distortion.prototype.dispose = function () {
          return (
            s.default.Effect.prototype.dispose.call(this),
            this._shaper.dispose(),
            (this._shaper = null),
            this
          );
        }),
        (e.default = s.default.Distortion);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(12), i(15), i(18);
      (s.default.Chorus = function () {
        var t = s.default.defaults(
          arguments,
          ["frequency", "delayTime", "depth"],
          s.default.Chorus
        );
        s.default.StereoEffect.call(this, t),
          (this._depth = t.depth),
          (this._delayTime = t.delayTime / 1e3),
          (this._lfoL = new s.default.LFO({
            frequency: t.frequency,
            min: 0,
            max: 1,
          })),
          (this._lfoR = new s.default.LFO({
            frequency: t.frequency,
            min: 0,
            max: 1,
            phase: 180,
          })),
          (this._delayNodeL = new s.default.Delay()),
          (this._delayNodeR = new s.default.Delay()),
          (this.frequency = this._lfoL.frequency),
          this.effectSendL.chain(this._delayNodeL, this.effectReturnL),
          this.effectSendR.chain(this._delayNodeR, this.effectReturnR),
          this.effectSendL.connect(this.effectReturnL),
          this.effectSendR.connect(this.effectReturnR),
          this._lfoL.connect(this._delayNodeL.delayTime),
          this._lfoR.connect(this._delayNodeR.delayTime),
          this._lfoL.start(),
          this._lfoR.start(),
          this._lfoL.frequency.connect(this._lfoR.frequency),
          (this.depth = this._depth),
          (this.frequency.value = t.frequency),
          (this.type = t.type),
          this._readOnly(["frequency"]),
          (this.spread = t.spread);
      }),
        s.default.extend(s.default.Chorus, s.default.StereoEffect),
        (s.default.Chorus.defaults = {
          frequency: 1.5,
          delayTime: 3.5,
          depth: 0.7,
          type: "sine",
          spread: 180,
        }),
        Object.defineProperty(s.default.Chorus.prototype, "depth", {
          get: function () {
            return this._depth;
          },
          set: function (t) {
            this._depth = t;
            var e = this._delayTime * t;
            (this._lfoL.min = Math.max(this._delayTime - e, 0)),
              (this._lfoL.max = this._delayTime + e),
              (this._lfoR.min = Math.max(this._delayTime - e, 0)),
              (this._lfoR.max = this._delayTime + e);
          },
        }),
        Object.defineProperty(s.default.Chorus.prototype, "delayTime", {
          get: function () {
            return 1e3 * this._delayTime;
          },
          set: function (t) {
            (this._delayTime = t / 1e3), (this.depth = this._depth);
          },
        }),
        Object.defineProperty(s.default.Chorus.prototype, "type", {
          get: function () {
            return this._lfoL.type;
          },
          set: function (t) {
            (this._lfoL.type = t), (this._lfoR.type = t);
          },
        }),
        Object.defineProperty(s.default.Chorus.prototype, "spread", {
          get: function () {
            return this._lfoR.phase - this._lfoL.phase;
          },
          set: function (t) {
            (this._lfoL.phase = 90 - t / 2), (this._lfoR.phase = t / 2 + 90);
          },
        }),
        (s.default.Chorus.prototype.dispose = function () {
          return (
            s.default.StereoEffect.prototype.dispose.call(this),
            this._lfoL.dispose(),
            (this._lfoL = null),
            this._lfoR.dispose(),
            (this._lfoR = null),
            this._delayNodeL.dispose(),
            (this._delayNodeL = null),
            this._delayNodeR.dispose(),
            (this._delayNodeR = null),
            this._writable("frequency"),
            (this.frequency = null),
            this
          );
        }),
        (e.default = s.default.Chorus);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(8), i(7);
      (s.default.Chebyshev = function () {
        var t = s.default.defaults(arguments, ["order"], s.default.Chebyshev);
        s.default.Effect.call(this, t),
          (this._shaper = new s.default.WaveShaper(4096)),
          (this._order = t.order),
          this.connectEffect(this._shaper),
          (this.order = t.order),
          (this.oversample = t.oversample);
      }),
        s.default.extend(s.default.Chebyshev, s.default.Effect),
        (s.default.Chebyshev.defaults = { order: 1, oversample: "none" }),
        (s.default.Chebyshev.prototype._getCoefficient = function (t, e, i) {
          return i.hasOwnProperty(e)
            ? i[e]
            : ((i[e] =
                0 === e
                  ? 0
                  : 1 === e
                  ? t
                  : 2 * t * this._getCoefficient(t, e - 1, i) -
                    this._getCoefficient(t, e - 2, i)),
              i[e]);
        }),
        Object.defineProperty(s.default.Chebyshev.prototype, "order", {
          get: function () {
            return this._order;
          },
          set: function (t) {
            this._order = t;
            for (var e = new Array(4096), i = e.length, s = 0; s < i; ++s) {
              var n = (2 * s) / i - 1;
              e[s] = 0 === n ? 0 : this._getCoefficient(n, t, {});
            }
            this._shaper.curve = e;
          },
        }),
        Object.defineProperty(s.default.Chebyshev.prototype, "oversample", {
          get: function () {
            return this._shaper.oversample;
          },
          set: function (t) {
            this._shaper.oversample = t;
          },
        }),
        (s.default.Chebyshev.prototype.dispose = function () {
          return (
            s.default.Effect.prototype.dispose.call(this),
            this._shaper.dispose(),
            (this._shaper = null),
            this
          );
        }),
        (e.default = s.default.Chebyshev);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(8), i(13), i(75);
      (s.default.BitCrusher = function () {
        var t = s.default.defaults(arguments, ["bits"], s.default.BitCrusher);
        s.default.Effect.call(this, t);
        var e = 1 / Math.pow(2, t.bits - 1);
        (this._subtract = new s.default.Subtract()),
          (this._modulo = new s.default.Modulo(e)),
          (this._bits = t.bits),
          this.effectSend.fan(this._subtract, this._modulo),
          this._modulo.connect(this._subtract, 0, 1),
          this._subtract.connect(this.effectReturn);
      }),
        s.default.extend(s.default.BitCrusher, s.default.Effect),
        (s.default.BitCrusher.defaults = { bits: 4 }),
        Object.defineProperty(s.default.BitCrusher.prototype, "bits", {
          get: function () {
            return this._bits;
          },
          set: function (t) {
            this._bits = t;
            var e = 1 / Math.pow(2, t - 1);
            this._modulo.value = e;
          },
        }),
        (s.default.BitCrusher.prototype.dispose = function () {
          return (
            s.default.Effect.prototype.dispose.call(this),
            this._subtract.dispose(),
            (this._subtract = null),
            this._modulo.dispose(),
            (this._modulo = null),
            this
          );
        }),
        (e.default = s.default.BitCrusher);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(58), i(42), i(8), i(9);
      (s.default.AutoWah = function () {
        var t = s.default.defaults(
          arguments,
          ["baseFrequency", "octaves", "sensitivity"],
          s.default.AutoWah
        );
        s.default.Effect.call(this, t),
          (this.follower = new s.default.Follower(t.follower)),
          (this._sweepRange = new s.default.ScaleExp(0, 1, 0.5)),
          (this._baseFrequency = t.baseFrequency),
          (this._octaves = t.octaves),
          (this._inputBoost = new s.default.Gain()),
          (this._bandpass = new s.default.Filter({
            rolloff: -48,
            frequency: 0,
            Q: t.Q,
          })),
          (this._peaking = new s.default.Filter(0, "peaking")),
          (this._peaking.gain.value = t.gain),
          (this.gain = this._peaking.gain),
          (this.Q = this._bandpass.Q),
          this.effectSend.chain(
            this._inputBoost,
            this.follower,
            this._sweepRange
          ),
          this._sweepRange.connect(this._bandpass.frequency),
          this._sweepRange.connect(this._peaking.frequency),
          this.effectSend.chain(
            this._bandpass,
            this._peaking,
            this.effectReturn
          ),
          this._setSweepRange(),
          (this.sensitivity = t.sensitivity),
          this._readOnly(["gain", "Q"]);
      }),
        s.default.extend(s.default.AutoWah, s.default.Effect),
        (s.default.AutoWah.defaults = {
          baseFrequency: 100,
          octaves: 6,
          sensitivity: 0,
          Q: 2,
          gain: 2,
          follower: { attack: 0.3, release: 0.5 },
        }),
        Object.defineProperty(s.default.AutoWah.prototype, "octaves", {
          get: function () {
            return this._octaves;
          },
          set: function (t) {
            (this._octaves = t), this._setSweepRange();
          },
        }),
        Object.defineProperty(s.default.AutoWah.prototype, "baseFrequency", {
          get: function () {
            return this._baseFrequency;
          },
          set: function (t) {
            (this._baseFrequency = t), this._setSweepRange();
          },
        }),
        Object.defineProperty(s.default.AutoWah.prototype, "sensitivity", {
          get: function () {
            return s.default.gainToDb(1 / this._inputBoost.gain.value);
          },
          set: function (t) {
            this._inputBoost.gain.value = 1 / s.default.dbToGain(t);
          },
        }),
        (s.default.AutoWah.prototype._setSweepRange = function () {
          (this._sweepRange.min = this._baseFrequency),
            (this._sweepRange.max = Math.min(
              this._baseFrequency * Math.pow(2, this._octaves),
              this.context.sampleRate / 2
            ));
        }),
        (s.default.AutoWah.prototype.dispose = function () {
          return (
            s.default.Effect.prototype.dispose.call(this),
            this.follower.dispose(),
            (this.follower = null),
            this._sweepRange.dispose(),
            (this._sweepRange = null),
            this._bandpass.dispose(),
            (this._bandpass = null),
            this._peaking.dispose(),
            (this._peaking = null),
            this._inputBoost.dispose(),
            (this._inputBoost = null),
            this._writable(["gain", "Q"]),
            (this.gain = null),
            (this.Q = null),
            this
          );
        }),
        (e.default = s.default.AutoWah);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(8), i(12), i(48);
      (s.default.AutoPanner = function () {
        var t = s.default.defaults(
          arguments,
          ["frequency"],
          s.default.AutoPanner
        );
        s.default.Effect.call(this, t),
          (this._lfo = new s.default.LFO({
            frequency: t.frequency,
            amplitude: t.depth,
            min: -1,
            max: 1,
          })),
          (this.depth = this._lfo.amplitude),
          (this._panner = new s.default.Panner()),
          (this.frequency = this._lfo.frequency),
          this.connectEffect(this._panner),
          this._lfo.connect(this._panner.pan),
          (this.type = t.type),
          this._readOnly(["depth", "frequency"]);
      }),
        s.default.extend(s.default.AutoPanner, s.default.Effect),
        (s.default.AutoPanner.defaults = {
          frequency: 1,
          type: "sine",
          depth: 1,
        }),
        (s.default.AutoPanner.prototype.start = function (t) {
          return this._lfo.start(t), this;
        }),
        (s.default.AutoPanner.prototype.stop = function (t) {
          return this._lfo.stop(t), this;
        }),
        (s.default.AutoPanner.prototype.sync = function (t) {
          return this._lfo.sync(t), this;
        }),
        (s.default.AutoPanner.prototype.unsync = function () {
          return this._lfo.unsync(), this;
        }),
        Object.defineProperty(s.default.AutoPanner.prototype, "type", {
          get: function () {
            return this._lfo.type;
          },
          set: function (t) {
            this._lfo.type = t;
          },
        }),
        (s.default.AutoPanner.prototype.dispose = function () {
          return (
            s.default.Effect.prototype.dispose.call(this),
            this._lfo.dispose(),
            (this._lfo = null),
            this._panner.dispose(),
            (this._panner = null),
            this._writable(["depth", "frequency"]),
            (this.frequency = null),
            (this.depth = null),
            this
          );
        }),
        (e.default = s.default.AutoPanner);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(8), i(12), i(9);
      (s.default.AutoFilter = function () {
        var t = s.default.defaults(
          arguments,
          ["frequency", "baseFrequency", "octaves"],
          s.default.AutoFilter
        );
        s.default.Effect.call(this, t),
          (this._lfo = new s.default.LFO({
            frequency: t.frequency,
            amplitude: t.depth,
          })),
          (this.depth = this._lfo.amplitude),
          (this.frequency = this._lfo.frequency),
          (this.filter = new s.default.Filter(t.filter)),
          (this._octaves = 0),
          this.connectEffect(this.filter),
          this._lfo.connect(this.filter.frequency),
          (this.type = t.type),
          this._readOnly(["frequency", "depth"]),
          (this.octaves = t.octaves),
          (this.baseFrequency = t.baseFrequency);
      }),
        s.default.extend(s.default.AutoFilter, s.default.Effect),
        (s.default.AutoFilter.defaults = {
          frequency: 1,
          type: "sine",
          depth: 1,
          baseFrequency: 200,
          octaves: 2.6,
          filter: { type: "lowpass", rolloff: -12, Q: 1 },
        }),
        (s.default.AutoFilter.prototype.start = function (t) {
          return this._lfo.start(t), this;
        }),
        (s.default.AutoFilter.prototype.stop = function (t) {
          return this._lfo.stop(t), this;
        }),
        (s.default.AutoFilter.prototype.sync = function (t) {
          return this._lfo.sync(t), this;
        }),
        (s.default.AutoFilter.prototype.unsync = function () {
          return this._lfo.unsync(), this;
        }),
        Object.defineProperty(s.default.AutoFilter.prototype, "type", {
          get: function () {
            return this._lfo.type;
          },
          set: function (t) {
            this._lfo.type = t;
          },
        }),
        Object.defineProperty(s.default.AutoFilter.prototype, "baseFrequency", {
          get: function () {
            return this._lfo.min;
          },
          set: function (t) {
            (this._lfo.min = this.toFrequency(t)),
              (this.octaves = this._octaves);
          },
        }),
        Object.defineProperty(s.default.AutoFilter.prototype, "octaves", {
          get: function () {
            return this._octaves;
          },
          set: function (t) {
            (this._octaves = t),
              (this._lfo.max = this.baseFrequency * Math.pow(2, t));
          },
        }),
        (s.default.AutoFilter.prototype.dispose = function () {
          return (
            s.default.Effect.prototype.dispose.call(this),
            this._lfo.dispose(),
            (this._lfo = null),
            this.filter.dispose(),
            (this.filter = null),
            this._writable(["frequency", "depth"]),
            (this.frequency = null),
            (this.depth = null),
            this
          );
        }),
        (e.default = s.default.AutoFilter);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(23), i(10), i(19), i(2), i(22), i(28);
      (s.default.Listener = function () {
        s.default.call(this),
          (this._orientation = [0, 0, 0, 0, 0, 0]),
          (this._position = [0, 0, 0]),
          s.default.getContext(
            function () {
              this.set(n.defaults);
            }.bind(this)
          );
      }),
        s.default.extend(s.default.Listener),
        (s.default.Listener.defaults = {
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          forwardX: 0,
          forwardY: 0,
          forwardZ: 1,
          upX: 0,
          upY: 1,
          upZ: 0,
        }),
        (s.default.Listener.prototype.isListener = !0),
        (s.default.Listener.prototype._rampTimeConstant = 0.01),
        (s.default.Listener.prototype.setPosition = function (t, e, i) {
          if (this.context.rawContext.listener.positionX) {
            var s = this.now();
            this.context.rawContext.listener.positionX.setTargetAtTime(
              t,
              s,
              this._rampTimeConstant
            ),
              this.context.rawContext.listener.positionY.setTargetAtTime(
                e,
                s,
                this._rampTimeConstant
              ),
              this.context.rawContext.listener.positionZ.setTargetAtTime(
                i,
                s,
                this._rampTimeConstant
              );
          } else this.context.rawContext.listener.setPosition(t, e, i);
          return (this._position = Array.prototype.slice.call(arguments)), this;
        }),
        (s.default.Listener.prototype.setOrientation = function (
          t,
          e,
          i,
          s,
          n,
          o
        ) {
          if (this.context.rawContext.listener.forwardX) {
            var a = this.now();
            this.context.rawContext.listener.forwardX.setTargetAtTime(
              t,
              a,
              this._rampTimeConstant
            ),
              this.context.rawContext.listener.forwardY.setTargetAtTime(
                e,
                a,
                this._rampTimeConstant
              ),
              this.context.rawContext.listener.forwardZ.setTargetAtTime(
                i,
                a,
                this._rampTimeConstant
              ),
              this.context.rawContext.listener.upX.setTargetAtTime(
                s,
                a,
                this._rampTimeConstant
              ),
              this.context.rawContext.listener.upY.setTargetAtTime(
                n,
                a,
                this._rampTimeConstant
              ),
              this.context.rawContext.listener.upZ.setTargetAtTime(
                o,
                a,
                this._rampTimeConstant
              );
          } else
            this.context.rawContext.listener.setOrientation(t, e, i, s, n, o);
          return (
            (this._orientation = Array.prototype.slice.call(arguments)), this
          );
        }),
        Object.defineProperty(s.default.Listener.prototype, "positionX", {
          set: function (t) {
            (this._position[0] = t),
              this.setPosition.apply(this, this._position);
          },
          get: function () {
            return this._position[0];
          },
        }),
        Object.defineProperty(s.default.Listener.prototype, "positionY", {
          set: function (t) {
            (this._position[1] = t),
              this.setPosition.apply(this, this._position);
          },
          get: function () {
            return this._position[1];
          },
        }),
        Object.defineProperty(s.default.Listener.prototype, "positionZ", {
          set: function (t) {
            (this._position[2] = t),
              this.setPosition.apply(this, this._position);
          },
          get: function () {
            return this._position[2];
          },
        }),
        Object.defineProperty(s.default.Listener.prototype, "forwardX", {
          set: function (t) {
            (this._orientation[0] = t),
              this.setOrientation.apply(this, this._orientation);
          },
          get: function () {
            return this._orientation[0];
          },
        }),
        Object.defineProperty(s.default.Listener.prototype, "forwardY", {
          set: function (t) {
            (this._orientation[1] = t),
              this.setOrientation.apply(this, this._orientation);
          },
          get: function () {
            return this._orientation[1];
          },
        }),
        Object.defineProperty(s.default.Listener.prototype, "forwardZ", {
          set: function (t) {
            (this._orientation[2] = t),
              this.setOrientation.apply(this, this._orientation);
          },
          get: function () {
            return this._orientation[2];
          },
        }),
        Object.defineProperty(s.default.Listener.prototype, "upX", {
          set: function (t) {
            (this._orientation[3] = t),
              this.setOrientation.apply(this, this._orientation);
          },
          get: function () {
            return this._orientation[3];
          },
        }),
        Object.defineProperty(s.default.Listener.prototype, "upY", {
          set: function (t) {
            (this._orientation[4] = t),
              this.setOrientation.apply(this, this._orientation);
          },
          get: function () {
            return this._orientation[4];
          },
        }),
        Object.defineProperty(s.default.Listener.prototype, "upZ", {
          set: function (t) {
            (this._orientation[5] = t),
              this.setOrientation.apply(this, this._orientation);
          },
          get: function () {
            return this._orientation[5];
          },
        }),
        (s.default.Listener.prototype.dispose = function () {
          return (this._orientation = null), (this._position = null), this;
        });
      var n = s.default.Listener;
      (s.default.Listener = new n()),
        s.default.Context.on("init", function (t) {
          t.listener && t.listener.isListener
            ? (s.default.Listener = t.listener)
            : (s.default.Listener = new n());
        }),
        (e.default = s.default.Listener);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(24);
      (s.default.Draw = function () {
        s.default.call(this),
          (this._events = new s.default.Timeline()),
          (this.expiration = 0.25),
          (this.anticipation = 0.008),
          (this._boundDrawLoop = this._drawLoop.bind(this));
      }),
        s.default.extend(s.default.Draw),
        (s.default.Draw.prototype.schedule = function (t, e) {
          return (
            this._events.add({ callback: t, time: this.toSeconds(e) }),
            1 === this._events.length &&
              requestAnimationFrame(this._boundDrawLoop),
            this
          );
        }),
        (s.default.Draw.prototype.cancel = function (t) {
          return this._events.cancel(this.toSeconds(t)), this;
        }),
        (s.default.Draw.prototype._drawLoop = function () {
          for (
            var t = s.default.context.currentTime;
            this._events.length &&
            this._events.peek().time - this.anticipation <= t;

          ) {
            var e = this._events.shift();
            t - e.time <= this.expiration && e.callback();
          }
          this._events.length > 0 && requestAnimationFrame(this._boundDrawLoop);
        }),
        (s.default.Draw = new s.default.Draw()),
        (e.default = s.default.Draw);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0),
        n = (i(3), {});
      (s.default.prototype.send = function (t, e) {
        n.hasOwnProperty(t) || (n[t] = this.context.createGain()),
          (e = s.default.defaultArg(e, 0));
        var i = new s.default.Gain(e, s.default.Type.Decibels);
        return this.connect(i), i.connect(n[t]), i;
      }),
        (s.default.prototype.receive = function (t, e) {
          return (
            n.hasOwnProperty(t) || (n[t] = this.context.createGain()),
            s.default.connect(n[t], this, 0, e),
            this
          );
        }),
        s.default.Context.on("init", function (t) {
          t.buses ? (n = t.buses) : ((n = {}), (t.buses = n));
        }),
        (e.default = s.default);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(4);
      (s.default.CtrlRandom = function () {
        var t = s.default.defaults(
          arguments,
          ["min", "max"],
          s.default.CtrlRandom
        );
        s.default.call(this),
          (this.min = t.min),
          (this.max = t.max),
          (this.integer = t.integer);
      }),
        s.default.extend(s.default.CtrlRandom),
        (s.default.CtrlRandom.defaults = { min: 0, max: 1, integer: !1 }),
        Object.defineProperty(s.default.CtrlRandom.prototype, "value", {
          get: function () {
            var t = this.toSeconds(this.min),
              e = this.toSeconds(this.max),
              i = Math.random(),
              s = i * t + (1 - i) * e;
            return this.integer && (s = Math.floor(s)), s;
          },
        }),
        (e.default = s.default.CtrlRandom);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      (s.default.CtrlMarkov = function (t, e) {
        s.default.call(this),
          (this.values = s.default.defaultArg(t, {})),
          (this.value = s.default.defaultArg(e, Object.keys(this.values)[0]));
      }),
        s.default.extend(s.default.CtrlMarkov),
        (s.default.CtrlMarkov.prototype.next = function () {
          if (this.values.hasOwnProperty(this.value)) {
            var t = this.values[this.value];
            if (s.default.isArray(t))
              for (
                var e = this._getProbDistribution(t),
                  i = Math.random(),
                  n = 0,
                  o = 0;
                o < e.length;
                o++
              ) {
                var a = e[o];
                if (i > n && i < n + a) {
                  var r = t[o];
                  s.default.isObject(r)
                    ? (this.value = r.value)
                    : (this.value = r);
                }
                n += a;
              }
            else this.value = t;
          }
          return this.value;
        }),
        (s.default.CtrlMarkov.prototype._getProbDistribution = function (t) {
          for (var e = [], i = 0, n = !1, o = 0; o < t.length; o++) {
            var a = t[o];
            s.default.isObject(a)
              ? ((n = !0), (e[o] = a.probability))
              : (e[o] = 1 / t.length),
              (i += e[o]);
          }
          if (n) for (var r = 0; r < e.length; r++) e[r] = e[r] / i;
          return e;
        }),
        (s.default.CtrlMarkov.prototype.dispose = function () {
          this.values = null;
        }),
        (e.default = s.default.CtrlMarkov);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(4);
      (s.default.CtrlInterpolate = function () {
        var t = s.default.defaults(
          arguments,
          ["values", "index"],
          s.default.CtrlInterpolate
        );
        s.default.call(this), (this.values = t.values), (this.index = t.index);
      }),
        s.default.extend(s.default.CtrlInterpolate),
        (s.default.CtrlInterpolate.defaults = { index: 0, values: [] }),
        Object.defineProperty(s.default.CtrlInterpolate.prototype, "value", {
          get: function () {
            var t = this.index;
            t = Math.min(t, this.values.length - 1);
            var e = Math.floor(t),
              i = this.values[e],
              s = this.values[Math.ceil(t)];
            return this._interpolate(t - e, i, s);
          },
        }),
        (s.default.CtrlInterpolate.prototype._interpolate = function (t, e, i) {
          if (s.default.isArray(e)) {
            for (var n = [], o = 0; o < e.length; o++)
              n[o] = this._interpolate(t, e[o], i[o]);
            return n;
          }
          if (s.default.isObject(e)) {
            var a = {};
            for (var r in e) a[r] = this._interpolate(t, e[r], i[r]);
            return a;
          }
          return (
            (1 - t) * (e = this._toNumber(e)) + t * (i = this._toNumber(i))
          );
        }),
        (s.default.CtrlInterpolate.prototype._toNumber = function (t) {
          return s.default.isNumber(t) ? t : this.toSeconds(t);
        }),
        (s.default.CtrlInterpolate.prototype.dispose = function () {
          this.values = null;
        }),
        (e.default = s.default.CtrlInterpolate);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(36), i(1);
      (s.default.Waveform = function () {
        var t = s.default.defaults(arguments, ["size"], s.default.Waveform);
        (t.type = s.default.Analyser.Type.Waveform),
          s.default.AudioNode.call(this),
          (this._analyser = this.input = this.output = new s.default.Analyser(
            t
          ));
      }),
        s.default.extend(s.default.Waveform, s.default.AudioNode),
        (s.default.Waveform.defaults = { size: 1024 }),
        (s.default.Waveform.prototype.getValue = function () {
          return this._analyser.getValue();
        }),
        Object.defineProperty(s.default.Waveform.prototype, "size", {
          get: function () {
            return this._analyser.size;
          },
          set: function (t) {
            this._analyser.size = t;
          },
        }),
        (s.default.Waveform.prototype.dispose = function () {
          s.default.AudioNode.prototype.dispose.call(this),
            this._analyser.dispose(),
            (this._analyser = null);
        }),
        (e.default = s.default.Waveform);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(23), i(10), i(19), i(2), i(22), i(28), i(1);
      (s.default.Panner3D = function () {
        var t = s.default.defaults(
          arguments,
          ["positionX", "positionY", "positionZ"],
          s.default.Panner3D
        );
        s.default.AudioNode.call(this),
          (this._panner = this.input = this.output = this.context.createPanner()),
          (this._panner.panningModel = t.panningModel),
          (this._panner.maxDistance = t.maxDistance),
          (this._panner.distanceModel = t.distanceModel),
          (this._panner.coneOuterGain = t.coneOuterGain),
          (this._panner.coneOuterAngle = t.coneOuterAngle),
          (this._panner.coneInnerAngle = t.coneInnerAngle),
          (this._panner.refDistance = t.refDistance),
          (this._panner.rolloffFactor = t.rolloffFactor),
          (this._orientation = [
            t.orientationX,
            t.orientationY,
            t.orientationZ,
          ]),
          (this._position = [t.positionX, t.positionY, t.positionZ]),
          (this.orientationX = t.orientationX),
          (this.orientationY = t.orientationY),
          (this.orientationZ = t.orientationZ),
          (this.positionX = t.positionX),
          (this.positionY = t.positionY),
          (this.positionZ = t.positionZ);
      }),
        s.default.extend(s.default.Panner3D, s.default.AudioNode),
        (s.default.Panner3D.defaults = {
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          orientationX: 0,
          orientationY: 0,
          orientationZ: 0,
          panningModel: "equalpower",
          maxDistance: 1e4,
          distanceModel: "inverse",
          coneOuterGain: 0,
          coneOuterAngle: 360,
          coneInnerAngle: 360,
          refDistance: 1,
          rolloffFactor: 1,
        }),
        (s.default.Panner3D.prototype._rampTimeConstant = 0.01),
        (s.default.Panner3D.prototype.setPosition = function (t, e, i) {
          if (this._panner.positionX) {
            var s = this.now();
            this._panner.positionX.setTargetAtTime(
              t,
              s,
              this._rampTimeConstant
            ),
              this._panner.positionY.setTargetAtTime(
                e,
                s,
                this._rampTimeConstant
              ),
              this._panner.positionZ.setTargetAtTime(
                i,
                s,
                this._rampTimeConstant
              );
          } else this._panner.setPosition(t, e, i);
          return (this._position = Array.prototype.slice.call(arguments)), this;
        }),
        (s.default.Panner3D.prototype.setOrientation = function (t, e, i) {
          if (this._panner.orientationX) {
            var s = this.now();
            this._panner.orientationX.setTargetAtTime(
              t,
              s,
              this._rampTimeConstant
            ),
              this._panner.orientationY.setTargetAtTime(
                e,
                s,
                this._rampTimeConstant
              ),
              this._panner.orientationZ.setTargetAtTime(
                i,
                s,
                this._rampTimeConstant
              );
          } else this._panner.setOrientation(t, e, i);
          return (
            (this._orientation = Array.prototype.slice.call(arguments)), this
          );
        }),
        Object.defineProperty(s.default.Panner3D.prototype, "positionX", {
          set: function (t) {
            (this._position[0] = t),
              this.setPosition.apply(this, this._position);
          },
          get: function () {
            return this._position[0];
          },
        }),
        Object.defineProperty(s.default.Panner3D.prototype, "positionY", {
          set: function (t) {
            (this._position[1] = t),
              this.setPosition.apply(this, this._position);
          },
          get: function () {
            return this._position[1];
          },
        }),
        Object.defineProperty(s.default.Panner3D.prototype, "positionZ", {
          set: function (t) {
            (this._position[2] = t),
              this.setPosition.apply(this, this._position);
          },
          get: function () {
            return this._position[2];
          },
        }),
        Object.defineProperty(s.default.Panner3D.prototype, "orientationX", {
          set: function (t) {
            (this._orientation[0] = t),
              this.setOrientation.apply(this, this._orientation);
          },
          get: function () {
            return this._orientation[0];
          },
        }),
        Object.defineProperty(s.default.Panner3D.prototype, "orientationY", {
          set: function (t) {
            (this._orientation[1] = t),
              this.setOrientation.apply(this, this._orientation);
          },
          get: function () {
            return this._orientation[1];
          },
        }),
        Object.defineProperty(s.default.Panner3D.prototype, "orientationZ", {
          set: function (t) {
            (this._orientation[2] = t),
              this.setOrientation.apply(this, this._orientation);
          },
          get: function () {
            return this._orientation[2];
          },
        }),
        (s.default.Panner3D._aliasProperty = function (t) {
          Object.defineProperty(s.default.Panner3D.prototype, t, {
            set: function (e) {
              this._panner[t] = e;
            },
            get: function () {
              return this._panner[t];
            },
          });
        }),
        s.default.Panner3D._aliasProperty("panningModel"),
        s.default.Panner3D._aliasProperty("refDistance"),
        s.default.Panner3D._aliasProperty("rolloffFactor"),
        s.default.Panner3D._aliasProperty("distanceModel"),
        s.default.Panner3D._aliasProperty("coneInnerAngle"),
        s.default.Panner3D._aliasProperty("coneOuterAngle"),
        s.default.Panner3D._aliasProperty("coneOuterGain"),
        s.default.Panner3D._aliasProperty("maxDistance"),
        (s.default.Panner3D.prototype.dispose = function () {
          return (
            s.default.AudioNode.prototype.dispose.call(this),
            this._panner.disconnect(),
            (this._panner = null),
            (this._orientation = null),
            (this._position = null),
            this
          );
        }),
        (e.default = s.default.Panner3D);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(60), i(43), i(1);
      (s.default.MultibandCompressor = function (t) {
        s.default.AudioNode.call(this),
          (t = s.default.defaultArg(
            arguments,
            s.default.MultibandCompressor.defaults
          )),
          (this._splitter = this.input = new s.default.MultibandSplit({
            lowFrequency: t.lowFrequency,
            highFrequency: t.highFrequency,
          })),
          (this.lowFrequency = this._splitter.lowFrequency),
          (this.highFrequency = this._splitter.highFrequency),
          (this.output = new s.default.Gain()),
          (this.low = new s.default.Compressor(t.low)),
          (this.mid = new s.default.Compressor(t.mid)),
          (this.high = new s.default.Compressor(t.high)),
          this._splitter.low.chain(this.low, this.output),
          this._splitter.mid.chain(this.mid, this.output),
          this._splitter.high.chain(this.high, this.output),
          this._readOnly([
            "high",
            "mid",
            "low",
            "highFrequency",
            "lowFrequency",
          ]);
      }),
        s.default.extend(s.default.MultibandCompressor, s.default.AudioNode),
        (s.default.MultibandCompressor.defaults = {
          low: s.default.Compressor.defaults,
          mid: s.default.Compressor.defaults,
          high: s.default.Compressor.defaults,
          lowFrequency: 250,
          highFrequency: 2e3,
        }),
        (s.default.MultibandCompressor.prototype.dispose = function () {
          return (
            s.default.AudioNode.prototype.dispose.call(this),
            this._splitter.dispose(),
            this._writable([
              "high",
              "mid",
              "low",
              "highFrequency",
              "lowFrequency",
            ]),
            this.low.dispose(),
            this.mid.dispose(),
            this.high.dispose(),
            (this._splitter = null),
            (this.low = null),
            (this.mid = null),
            (this.high = null),
            (this.lowFrequency = null),
            (this.highFrequency = null),
            this
          );
        }),
        (e.default = s.default.MultibandCompressor);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(10), i(1);
      (s.default.Mono = function () {
        s.default.AudioNode.call(this),
          this.createInsOuts(1, 0),
          (this._merge = this.output = new s.default.Merge()),
          s.default.connect(this.input, this._merge, 0, 0),
          s.default.connect(this.input, this._merge, 0, 1);
      }),
        s.default.extend(s.default.Mono, s.default.AudioNode),
        (s.default.Mono.prototype.dispose = function () {
          return (
            s.default.AudioNode.prototype.dispose.call(this),
            this._merge.dispose(),
            (this._merge = null),
            this
          );
        }),
        (e.default = s.default.Mono);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(53), i(52), i(43), i(1);
      (s.default.MidSideCompressor = function (t) {
        s.default.AudioNode.call(this),
          (t = s.default.defaultArg(t, s.default.MidSideCompressor.defaults)),
          (this._midSideSplit = this.input = new s.default.MidSideSplit()),
          (this._midSideMerge = this.output = new s.default.MidSideMerge()),
          (this.mid = new s.default.Compressor(t.mid)),
          (this.side = new s.default.Compressor(t.side)),
          this._midSideSplit.mid.chain(this.mid, this._midSideMerge.mid),
          this._midSideSplit.side.chain(this.side, this._midSideMerge.side),
          this._readOnly(["mid", "side"]);
      }),
        s.default.extend(s.default.MidSideCompressor, s.default.AudioNode),
        (s.default.MidSideCompressor.defaults = {
          mid: {
            ratio: 3,
            threshold: -24,
            release: 0.03,
            attack: 0.02,
            knee: 16,
          },
          side: {
            ratio: 6,
            threshold: -30,
            release: 0.25,
            attack: 0.03,
            knee: 10,
          },
        }),
        (s.default.MidSideCompressor.prototype.dispose = function () {
          return (
            s.default.AudioNode.prototype.dispose.call(this),
            this._writable(["mid", "side"]),
            this.mid.dispose(),
            (this.mid = null),
            this.side.dispose(),
            (this.side = null),
            this._midSideSplit.dispose(),
            (this._midSideSplit = null),
            this._midSideMerge.dispose(),
            (this._midSideMerge = null),
            this
          );
        }),
        (e.default = s.default.MidSideCompressor);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(36), i(1);
      (s.default.Meter = function () {
        var t = s.default.defaults(arguments, ["smoothing"], s.default.Meter);
        s.default.AudioNode.call(this),
          (this.smoothing = t.smoothing),
          (this._rms = 0),
          (this.input = this.output = this._analyser = new s.default.Analyser(
            "waveform",
            256
          ));
      }),
        s.default.extend(s.default.Meter, s.default.AudioNode),
        (s.default.Meter.defaults = { smoothing: 0.8 }),
        (s.default.Meter.prototype.getLevel = function () {
          for (
            var t = this._analyser.getValue(), e = 0, i = 0;
            i < t.length;
            i++
          ) {
            var n = t[i];
            e += n * n;
          }
          var o = Math.sqrt(e / t.length);
          return (
            (this._rms = Math.max(o, this._rms * this.smoothing)),
            s.default.gainToDb(this._rms)
          );
        }),
        (s.default.Meter.prototype.getValue = function () {
          return this._analyser.getValue()[0];
        }),
        (s.default.Meter.prototype.dispose = function () {
          return (
            s.default.AudioNode.prototype.dispose.call(this),
            this._analyser.dispose(),
            (this._analyser = null),
            this
          );
        }),
        (e.default = s.default.Meter);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(43), i(1);
      (s.default.Limiter = function () {
        var t = s.default.defaults(arguments, ["threshold"], s.default.Limiter);
        s.default.AudioNode.call(this),
          (this._compressor = this.input = this.output = new s.default.Compressor(
            { attack: 0.001, decay: 0.001, threshold: t.threshold }
          )),
          (this.threshold = this._compressor.threshold),
          this._readOnly("threshold");
      }),
        s.default.extend(s.default.Limiter, s.default.AudioNode),
        (s.default.Limiter.defaults = { threshold: -12 }),
        (s.default.Limiter.prototype.dispose = function () {
          return (
            s.default.AudioNode.prototype.dispose.call(this),
            this._compressor.dispose(),
            (this._compressor = null),
            this._writable("threshold"),
            (this.threshold = null),
            this
          );
        }),
        (e.default = s.default.Limiter);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(58), i(85), i(1);
      (s.default.Gate = function () {
        var t = s.default.defaults(
          arguments,
          ["threshold", "smoothing"],
          s.default.Gate
        );
        s.default.AudioNode.call(this),
          this.createInsOuts(1, 1),
          (this._follower = new s.default.Follower(t.smoothing)),
          (this._gt = new s.default.GreaterThan(
            s.default.dbToGain(t.threshold)
          )),
          s.default.connect(this.input, this.output),
          s.default.connectSeries(
            this.input,
            this._follower,
            this._gt,
            this.output.gain
          );
      }),
        s.default.extend(s.default.Gate, s.default.AudioNode),
        (s.default.Gate.defaults = { smoothing: 0.1, threshold: -40 }),
        Object.defineProperty(s.default.Gate.prototype, "threshold", {
          get: function () {
            return s.default.gainToDb(this._gt.value);
          },
          set: function (t) {
            this._gt.value = s.default.dbToGain(t);
          },
        }),
        Object.defineProperty(s.default.Gate.prototype, "smoothing", {
          get: function () {
            return this._follower.smoothing;
          },
          set: function (t) {
            this._follower.smoothing = t;
          },
        }),
        (s.default.Gate.prototype.dispose = function () {
          return (
            s.default.AudioNode.prototype.dispose.call(this),
            this._follower.dispose(),
            this._gt.dispose(),
            (this._follower = null),
            (this._gt = null),
            this
          );
        }),
        (e.default = s.default.Gate);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(36), i(1);
      (s.default.FFT = function () {
        var t = s.default.defaults(arguments, ["size"], s.default.FFT);
        (t.type = s.default.Analyser.Type.FFT),
          s.default.AudioNode.call(this),
          (this._analyser = this.input = this.output = new s.default.Analyser(
            t
          ));
      }),
        s.default.extend(s.default.FFT, s.default.AudioNode),
        (s.default.FFT.defaults = { size: 1024 }),
        (s.default.FFT.prototype.getValue = function () {
          return this._analyser.getValue();
        }),
        Object.defineProperty(s.default.FFT.prototype, "size", {
          get: function () {
            return this._analyser.size;
          },
          set: function (t) {
            this._analyser.size = t;
          },
        }),
        (s.default.FFT.prototype.dispose = function () {
          s.default.AudioNode.prototype.dispose.call(this),
            this._analyser.dispose(),
            (this._analyser = null);
        }),
        (e.default = s.default.FFT);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(60), i(3), i(1);
      (s.default.EQ3 = function () {
        var t = s.default.defaults(
          arguments,
          ["low", "mid", "high"],
          s.default.EQ3
        );
        s.default.AudioNode.call(this),
          (this.output = new s.default.Gain()),
          (this._multibandSplit = this.input = new s.default.MultibandSplit({
            lowFrequency: t.lowFrequency,
            highFrequency: t.highFrequency,
          })),
          (this._lowGain = new s.default.Gain(t.low, s.default.Type.Decibels)),
          (this._midGain = new s.default.Gain(t.mid, s.default.Type.Decibels)),
          (this._highGain = new s.default.Gain(
            t.high,
            s.default.Type.Decibels
          )),
          (this.low = this._lowGain.gain),
          (this.mid = this._midGain.gain),
          (this.high = this._highGain.gain),
          (this.Q = this._multibandSplit.Q),
          (this.lowFrequency = this._multibandSplit.lowFrequency),
          (this.highFrequency = this._multibandSplit.highFrequency),
          this._multibandSplit.low.chain(this._lowGain, this.output),
          this._multibandSplit.mid.chain(this._midGain, this.output),
          this._multibandSplit.high.chain(this._highGain, this.output),
          this._readOnly([
            "low",
            "mid",
            "high",
            "lowFrequency",
            "highFrequency",
          ]);
      }),
        s.default.extend(s.default.EQ3, s.default.AudioNode),
        (s.default.EQ3.defaults = {
          low: 0,
          mid: 0,
          high: 0,
          lowFrequency: 400,
          highFrequency: 2500,
        }),
        (s.default.EQ3.prototype.dispose = function () {
          return (
            s.default.AudioNode.prototype.dispose.call(this),
            this._writable([
              "low",
              "mid",
              "high",
              "lowFrequency",
              "highFrequency",
            ]),
            this._multibandSplit.dispose(),
            (this._multibandSplit = null),
            (this.lowFrequency = null),
            (this.highFrequency = null),
            this._lowGain.dispose(),
            (this._lowGain = null),
            this._midGain.dispose(),
            (this._midGain = null),
            this._highGain.dispose(),
            (this._highGain = null),
            (this.low = null),
            (this.mid = null),
            (this.high = null),
            (this.Q = null),
            this
          );
        }),
        (e.default = s.default.EQ3);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(0);
      i(91), i(88), i(1);
      (s.default.Channel = function () {
        var t = s.default.defaults(
          arguments,
          ["volume", "pan"],
          s.default.PanVol
        );
        s.default.AudioNode.call(this, t),
          (this._solo = this.input = new s.default.Solo(t.solo)),
          (this._panVol = this.output = new s.default.PanVol({
            pan: t.pan,
            volume: t.volume,
            mute: t.mute,
          })),
          (this.pan = this._panVol.pan),
          (this.volume = this._panVol.volume),
          this._solo.connect(this._panVol),
          this._readOnly(["pan", "volume"]);
      }),
        s.default.extend(s.default.Channel, s.default.AudioNode),
        (s.default.Channel.defaults = {
          pan: 0,
          volume: 0,
          mute: !1,
          solo: !1,
        }),
        Object.defineProperty(s.default.Channel.prototype, "solo", {
          get: function () {
            return this._solo.solo;
          },
          set: function (t) {
            this._solo.solo = t;
          },
        }),
        Object.defineProperty(s.default.Channel.prototype, "muted", {
          get: function () {
            return this._solo.muted || this.mute;
          },
        }),
        Object.defineProperty(s.default.Channel.prototype, "mute", {
          get: function () {
            return this._panVol.mute;
          },
          set: function (t) {
            this._panVol.mute = t;
          },
        }),
        (s.default.Channel.prototype.dispose = function () {
          return (
            s.default.AudioNode.prototype.dispose.call(this),
            this._writable(["pan", "volume"]),
            this._panVol.dispose(),
            (this._panVol = null),
            (this.pan = null),
            (this.volume = null),
            this._solo.dispose(),
            (this._solo = null),
            this
          );
        }),
        (e.default = s.default.Channel);
    },
    function (t, e) {
      var i;
      i = (function () {
        return this;
      })();
      try {
        i = i || Function("return this")() || (0, eval)("this");
      } catch (t) {
        "object" == typeof window && (i = window);
      }
      t.exports = i;
    },
    function (t, e, i) {
      i(31),
        i(36),
        i(146),
        i(43),
        i(23),
        i(47),
        i(145),
        i(59),
        i(144),
        i(9),
        i(58),
        i(41),
        i(143),
        i(12),
        i(142),
        i(54),
        i(10),
        i(141),
        i(140),
        i(52),
        i(53),
        i(139),
        i(138),
        i(60),
        i(48),
        i(137),
        i(91),
        i(86),
        i(88),
        i(19),
        i(27),
        i(136),
        i(135),
        i(134),
        i(79),
        i(133),
        i(1),
        i(11),
        i(78),
        i(132),
        i(83),
        i(20),
        i(18),
        i(131),
        i(35),
        i(3),
        i(81),
        i(130),
        i(40),
        i(77),
        i(76),
        i(14),
        i(24),
        i(34),
        i(16),
        i(56),
        i(80),
        i(129),
        i(128),
        i(127),
        i(126),
        i(125),
        i(124),
        i(74),
        i(123),
        i(8),
        i(122),
        i(33),
        i(121),
        i(120),
        i(73),
        i(119),
        i(118),
        i(117),
        i(116),
        i(15),
        i(115),
        i(114),
        i(72),
        i(113),
        i(112),
        i(51),
        i(71),
        i(70),
        i(111),
        i(110),
        i(109),
        i(108),
        i(107),
        i(21),
        i(106),
        i(105),
        i(25),
        i(66),
        i(104),
        i(103),
        i(102),
        i(101),
        i(38),
        i(87),
        i(29),
        i(22),
        i(89),
        i(100),
        i(85),
        i(84),
        i(75),
        i(5),
        i(90),
        i(99),
        i(61),
        i(26),
        i(42),
        i(2),
        i(30),
        i(13),
        i(82),
        i(98),
        i(7),
        i(28),
        i(68),
        i(32),
        i(67),
        i(49),
        i(97),
        i(39),
        i(37),
        i(17),
        i(64),
        i(65),
        i(96),
        i(50),
        i(69),
        i(6),
        i(57),
        i(95),
        i(46),
        i(94),
        i(55),
        i(63),
        i(62),
        i(45),
        i(4),
        (t.exports = i(0).default);
    },
  ]);
});
!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e(require("@tensorflow/tfjs"), require("tone")))
    : "function" == typeof define && define.amd
    ? define(["tf", "Tone"], e)
    : "object" == typeof exports
    ? (exports.core = e(require("@tensorflow/tfjs"), require("tone")))
    : (t.core = e(t.tf, t.Tone));
})(self, function (
  __WEBPACK_EXTERNAL_MODULE__0__,
  __WEBPACK_EXTERNAL_MODULE__3__
) {
  return (function (t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var i = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
      }),
      (n.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var i in t)
            n.d(
              r,
              i,
              function (e) {
                return t[e];
              }.bind(null, i)
            );
        return r;
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, "a", e), e;
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = ""),
      n((n.s = 68))
    );
  })([
    function (t, e) {
      t.exports = __WEBPACK_EXTERNAL_MODULE__0__;
    },
    function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "DEFAULT_QUARTERS_PER_MINUTE", function () {
          return r;
        }),
        n.d(e, "DEFAULT_STEPS_PER_BAR", function () {
          return i;
        }),
        n.d(e, "DEFAULT_STEPS_PER_QUARTER", function () {
          return o;
        }),
        n.d(e, "DEFAULT_STEPS_PER_SECOND", function () {
          return s;
        }),
        n.d(e, "DEFAULT_VELOCITY", function () {
          return a;
        }),
        n.d(e, "DEFAULT_PROGRAM", function () {
          return u;
        }),
        n.d(e, "DEFAULT_TICKS_PER_QUARTER", function () {
          return c;
        }),
        n.d(e, "DEFAULT_CHANNEL", function () {
          return l;
        }),
        n.d(e, "DRUM_CHANNEL", function () {
          return h;
        }),
        n.d(e, "NON_DRUM_CHANNELS", function () {
          return p;
        }),
        n.d(e, "MIN_MIDI_VELOCITY", function () {
          return f;
        }),
        n.d(e, "MAX_MIDI_VELOCITY", function () {
          return m;
        }),
        n.d(e, "MIDI_VELOCITIES", function () {
          return d;
        }),
        n.d(e, "NO_CHORD", function () {
          return g;
        }),
        n.d(e, "NUM_PITCH_CLASSES", function () {
          return S;
        }),
        n.d(e, "MIN_MIDI_PITCH", function () {
          return y;
        }),
        n.d(e, "MAX_MIDI_PITCH", function () {
          return b;
        }),
        n.d(e, "MIDI_PITCHES", function () {
          return w;
        }),
        n.d(e, "MIN_PIANO_PITCH", function () {
          return P;
        }),
        n.d(e, "MAX_PIANO_PITCH", function () {
          return v;
        }),
        n.d(e, "MIN_DRUM_PITCH", function () {
          return N;
        }),
        n.d(e, "MAX_DRUM_PITCH", function () {
          return T;
        }),
        n.d(e, "MIN_MIDI_PROGRAM", function () {
          return O;
        }),
        n.d(e, "MAX_MIDI_PROGRAM", function () {
          return I;
        }),
        n.d(e, "LO_CLICK_PITCH", function () {
          return M;
        }),
        n.d(e, "HI_CLICK_PITCH", function () {
          return A;
        }),
        n.d(e, "LO_CLICK_CLASS", function () {
          return k;
        }),
        n.d(e, "HI_CLICK_CLASS", function () {
          return q;
        });
      const r = 120,
        i = 16,
        o = 4,
        s = 100,
        a = 80,
        u = 0,
        c = 220,
        l = 0,
        h = 9,
        p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15],
        f = 0,
        m = 127,
        d = m - f + 1,
        g = "N.C.",
        S = 12,
        y = 0,
        b = 127,
        w = b - y + 1,
        P = 21,
        v = 108,
        N = 35,
        T = 81,
        O = 0,
        I = 127,
        M = 89,
        A = 90,
        k = 9,
        q = 10;
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = n(16),
        i = r.tensorflow.magenta.NoteSequence;
    },
    function (t, e) {
      t.exports = __WEBPACK_EXTERNAL_MODULE__3__;
    },
    function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "Level", function () {
          return r;
        }),
        n.d(e, "verbosity", function () {
          return o;
        }),
        n.d(e, "log", function () {
          return s;
        }),
        n.d(e, "logWithDuration", function () {
          return a;
        });
      var r,
        i = n(6);
      !(function (t) {
        (t[(t.NONE = 0)] = "NONE"),
          (t[(t.WARN = 5)] = "WARN"),
          (t[(t.INFO = 10)] = "INFO"),
          (t[(t.DEBUG = 20)] = "DEBUG");
      })(r || (r = {}));
      let o = 10;
      function s(t, e = "Magenta.js", n = 10) {
        if (0 === n) throw Error("Logging level cannot be NONE.");
        if (o >= n) {
          (5 === n ? console.warn : console.log)(
            `%c ${e} `,
            "background:magenta; color:white",
            t
          );
        }
      }
      function a(t, e, n = "Magenta.js", r = 10) {
        s(`${t} in ${((i.d.now() - e) / 1e3).toPrecision(3)}s`, n, r);
      }
    },
    ,
    function (t, e, n) {
      "use strict";
      (function (t) {
        n.d(e, "a", function () {
          return i;
        }),
          n.d(e, "d", function () {
            return o;
          }),
          n.d(e, "c", function () {
            return s;
          }),
          n.d(e, "b", function () {
            return u;
          });
        const r = (function () {
            if ("undefined" != typeof globalThis) return globalThis;
            if ("undefined" != typeof self) return self;
            if ("undefined" != typeof window) return window;
            if (void 0 !== t) return t;
            throw new Error("cannot find the global object");
          })(),
          i = r.fetch.bind(r),
          o = r.performance,
          s = (r.navigator, !!r.webkitOfflineAudioContext),
          a = void 0 !== r.WorkerGlobalScope;
        function u(t) {
          if (((t = s ? 44100 : t), a))
            throw new Error(
              "Cannot use offline audio context in a web worker."
            );
          const e = r.webkitOfflineAudioContext;
          return s ? new e(1, t, t) : new r.OfflineAudioContext(1, t, t);
        }
      }.call(this, n(9)));
    },
    function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "MultipleTimeSignatureException", function () {
          return o;
        }),
        n.d(e, "BadTimeSignatureException", function () {
          return s;
        }),
        n.d(e, "NegativeTimeException", function () {
          return a;
        }),
        n.d(e, "MultipleTempoException", function () {
          return u;
        }),
        n.d(e, "QuantizationStatusException", function () {
          return c;
        }),
        n.d(e, "clone", function () {
          return l;
        }),
        n.d(e, "stepsPerQuarterToStepsPerSecond", function () {
          return h;
        }),
        n.d(e, "quantizeToStep", function () {
          return p;
        }),
        n.d(e, "quantizeNoteSequence", function () {
          return d;
        }),
        n.d(e, "isQuantizedSequence", function () {
          return g;
        }),
        n.d(e, "assertIsQuantizedSequence", function () {
          return S;
        }),
        n.d(e, "isRelativeQuantizedSequence", function () {
          return y;
        }),
        n.d(e, "assertIsRelativeQuantizedSequence", function () {
          return b;
        }),
        n.d(e, "isAbsoluteQuantizedSequence", function () {
          return w;
        }),
        n.d(e, "assertIsAbsoluteQuantizedSequence", function () {
          return P;
        }),
        n.d(e, "unquantizeSequence", function () {
          return v;
        }),
        n.d(e, "createQuantizedNoteSequence", function () {
          return N;
        }),
        n.d(e, "mergeInstruments", function () {
          return T;
        }),
        n.d(e, "replaceInstruments", function () {
          return O;
        }),
        n.d(e, "mergeConsecutiveNotes", function () {
          return I;
        }),
        n.d(e, "concatenate", function () {
          return M;
        }),
        n.d(e, "trim", function () {
          return A;
        }),
        n.d(e, "split", function () {
          return E;
        });
      var r = n(2),
        i = n(1);
      class o extends Error {
        constructor(t) {
          super(t), Object.setPrototypeOf(this, new.target.prototype);
        }
      }
      class s extends Error {
        constructor(t) {
          super(t), Object.setPrototypeOf(this, new.target.prototype);
        }
      }
      class a extends Error {
        constructor(t) {
          super(t), Object.setPrototypeOf(this, new.target.prototype);
        }
      }
      class u extends Error {
        constructor(t) {
          super(t), Object.setPrototypeOf(this, new.target.prototype);
        }
      }
      class c extends Error {
        constructor(t) {
          super(t), Object.setPrototypeOf(this, new.target.prototype);
        }
      }
      function l(t) {
        return r.a.decode(r.a.encode(t).finish());
      }
      function h(t, e) {
        return (t * e) / 60;
      }
      function p(t, e, n = 0.5) {
        const r = t * e;
        return Math.floor(r + (1 - n));
      }
      function f(t) {
        return t.controlChanges.concat(t.textAnnotations);
      }
      function m(t) {
        if (t.tempos && 0 !== t.tempos.length) {
          if (
            (t.tempos.sort((t, e) => t.time - e.time),
            0 !== t.tempos[0].time &&
              t.tempos[0].qpm !== i.DEFAULT_QUARTERS_PER_MINUTE)
          )
            throw new u(
              "NoteSequence has an implicit tempo change from initial " +
                i.DEFAULT_QUARTERS_PER_MINUTE +
                " qpm to " +
                `${t.tempos[0].qpm} qpm at ${t.tempos[0].time} seconds.`
            );
          for (let e = 1; e < t.tempos.length; e++)
            if (t.tempos[e].qpm !== t.tempos[0].qpm)
              throw new u(
                `NoteSequence has at least one tempo change from ${t.tempos[0].qpm} qpm to ${t.tempos[e].qpm}qpm at ${t.tempos[e].time} seconds.`
              );
        }
      }
      function d(t, e) {
        const n = l(t);
        if (
          ((n.quantizationInfo = r.a.QuantizationInfo.create({
            stepsPerQuarter: e,
          })),
          n.timeSignatures.length > 0)
        ) {
          if (
            (n.timeSignatures.sort((t, e) => t.time - e.time),
            0 !== n.timeSignatures[0].time &&
              (4 !== n.timeSignatures[0].numerator ||
                4 !== n.timeSignatures[0].denominator))
          )
            throw new o(
              `NoteSequence has an implicit change from initial 4/4 time signature to ${n.timeSignatures[0].numerator}/` +
                n.timeSignatures[0].denominator +
                " at " +
                n.timeSignatures[0].time +
                " seconds."
            );
          for (let t = 1; t < n.timeSignatures.length; t++) {
            const e = n.timeSignatures[t];
            if (
              e.numerator !== n.timeSignatures[0].numerator ||
              e.denominator !== n.timeSignatures[0].denominator
            )
              throw new o(
                "NoteSequence has at least one time signature change from " +
                  n.timeSignatures[0].numerator +
                  "/" +
                  n.timeSignatures[0].denominator +
                  " to " +
                  `${e.numerator}/${e.denominator} ` +
                  `at ${e.time} seconds`
              );
          }
          (n.timeSignatures[0].time = 0),
            (n.timeSignatures = [n.timeSignatures[0]]);
        } else {
          const t = r.a.TimeSignature.create({
            numerator: 4,
            denominator: 4,
            time: 0,
          });
          n.timeSignatures.push(t);
        }
        const u = n.timeSignatures[0];
        if (!(c = u.denominator) || 0 != (c & (c - 1)))
          throw new s(
            `Denominator is not a power of 2. Time signature: ${u.numerator}/${u.denominator}`
          );
        var c;
        if (0 === u.numerator)
          throw new s(
            `Numerator is 0. Time signature: ${u.numerator}/${u.denominator}`
          );
        if (n.tempos.length > 0)
          m(n), (n.tempos[0].time = 0), (n.tempos = [n.tempos[0]]);
        else {
          const t = r.a.Tempo.create({
            qpm: i.DEFAULT_QUARTERS_PER_MINUTE,
            time: 0,
          });
          n.tempos.push(t);
        }
        const d = h(e, n.tempos[0].qpm);
        return (
          (n.totalQuantizedSteps = p(t.totalTime, d)),
          (function (t, e) {
            for (const n of t.notes) {
              if (
                ((n.quantizedStartStep = p(n.startTime, e)),
                (n.quantizedEndStep = p(n.endTime, e)),
                n.quantizedEndStep === n.quantizedStartStep &&
                  (n.quantizedEndStep += 1),
                n.quantizedStartStep < 0 || n.quantizedEndStep < 0)
              )
                throw new a(
                  "Got negative note time: start_step = " +
                    n.quantizedStartStep +
                    ", end_step = " +
                    n.quantizedEndStep
                );
              n.quantizedEndStep > t.totalQuantizedSteps &&
                (t.totalQuantizedSteps = n.quantizedEndStep);
            }
            f(t).forEach((t) => {
              if (((t.quantizedStep = p(t.time, e)), t.quantizedStep < 0))
                throw new a(
                  "Got negative event time: step = " + t.quantizedStep
                );
            });
          })(n, d),
          n
        );
      }
      function g(t) {
        return (
          t.quantizationInfo &&
          (t.quantizationInfo.stepsPerQuarter > 0 ||
            t.quantizationInfo.stepsPerSecond > 0)
        );
      }
      function S(t) {
        if (!g(t))
          throw new c(
            `NoteSequence ${t.id} is not quantized (missing quantizationInfo)`
          );
      }
      function y(t) {
        return t.quantizationInfo && t.quantizationInfo.stepsPerQuarter > 0;
      }
      function b(t) {
        if (!y(t))
          throw new c(
            `NoteSequence ${t.id} is not quantized or is quantized based on absolute timing`
          );
      }
      function w(t) {
        return t.quantizationInfo && t.quantizationInfo.stepsPerSecond > 0;
      }
      function P(t) {
        if (!w(t))
          throw new c(
            `NoteSequence ${t.id} is not quantized or is quantized based on relative timing`
          );
      }
      function v(t, e) {
        b(t), m(t);
        const n = l(t);
        e
          ? n.tempos && n.tempos.length > 0
            ? (n.tempos[0].qpm = e)
            : n.tempos.push(r.a.Tempo.create({ time: 0, qpm: e }))
          : (e =
              t.tempos && t.tempos.length > 0
                ? n.tempos[0].qpm
                : i.DEFAULT_QUARTERS_PER_MINUTE);
        const o = (t) => (t / n.quantizationInfo.stepsPerQuarter) * (60 / e);
        return (
          (n.totalTime = o(n.totalQuantizedSteps)),
          n.notes.forEach((t) => {
            (t.startTime = o(t.quantizedStartStep)),
              (t.endTime = o(t.quantizedEndStep)),
              (n.totalTime = Math.max(n.totalTime, t.endTime)),
              delete t.quantizedStartStep,
              delete t.quantizedEndStep;
          }),
          f(n).forEach((t) => {
            t.time = o(t.time);
          }),
          delete n.totalQuantizedSteps,
          delete n.quantizationInfo,
          n
        );
      }
      function N(
        t = i.DEFAULT_STEPS_PER_QUARTER,
        e = i.DEFAULT_QUARTERS_PER_MINUTE
      ) {
        return r.a.create({
          quantizationInfo: { stepsPerQuarter: t },
          tempos: [{ qpm: e }],
        });
      }
      function T(t) {
        const e = l(t),
          n = e.notes.concat(e.pitchBends).concat(e.controlChanges),
          r = Array.from(
            new Set(n.filter((t) => !t.isDrum).map((t) => t.program))
          );
        return (
          n.forEach((t) => {
            t.isDrum
              ? ((t.program = 0), (t.instrument = r.length))
              : (t.instrument = r.indexOf(t.program));
          }),
          e
        );
      }
      function O(t, e) {
        const n = new Set(t.notes.map((t) => t.instrument)),
          i = new Set(e.notes.map((t) => t.instrument)),
          o = [];
        t.notes.forEach((t) => {
          i.has(t.instrument) || o.push(r.a.Note.create(t));
        }),
          e.notes.forEach((t) => {
            n.has(t.instrument) && o.push(r.a.Note.create(t));
          });
        const s = l(t);
        return (
          (s.notes = o.sort((t, e) => {
            const n = t.instrument - e.instrument;
            return n || t.quantizedStartStep - e.quantizedStartStep;
          })),
          s
        );
      }
      function I(t) {
        S(t);
        const e = l(t);
        e.notes = [];
        const n = t.notes.sort((t, e) => {
            const n = t.instrument - e.instrument;
            return n || t.quantizedStartStep - e.quantizedStartStep;
          }),
          i = new r.a.Note();
        (i.pitch = n[0].pitch),
          (i.instrument = n[0].instrument),
          (i.quantizedStartStep = n[0].quantizedStartStep),
          (i.quantizedEndStep = n[0].quantizedEndStep),
          e.notes.push(i);
        let o = 0;
        for (let t = 1; t < n.length; t++) {
          const i = n[t],
            s = e.notes[o];
          if (
            s.instrument === i.instrument &&
            s.pitch === i.pitch &&
            i.quantizedStartStep === s.quantizedEndStep &&
            i.quantizedStartStep % 16 != 0
          )
            e.notes[o].quantizedEndStep +=
              i.quantizedEndStep - i.quantizedStartStep;
          else {
            const i = new r.a.Note();
            (i.pitch = n[t].pitch),
              (i.instrument = n[t].instrument),
              (i.quantizedStartStep = n[t].quantizedStartStep),
              (i.quantizedEndStep = n[t].quantizedEndStep),
              e.notes.push(i),
              o++;
          }
        }
        return e;
      }
      function M(t, e) {
        if (e && e.length !== t.length)
          throw new Error(
            "Number of sequences to concatenate and their individual\n durations does not match."
          );
        if (g(t[0])) {
          for (let e = 0; e < t.length; ++e)
            if (
              (S(t[e]),
              t[e].quantizationInfo.stepsPerQuarter !==
                t[0].quantizationInfo.stepsPerQuarter)
            )
              throw new Error(
                "Not all sequences have the same quantizationInfo"
              );
          return k(
            t,
            "totalQuantizedSteps",
            "quantizedStartStep",
            "quantizedEndStep",
            e
          );
        }
        return k(t, "totalTime", "startTime", "endTime", e);
      }
      function A(t, e, n, r) {
        return g(t)
          ? q(
              t,
              e,
              n,
              "totalQuantizedSteps",
              "quantizedStartStep",
              "quantizedEndStep",
              r
            )
          : q(t, e, n, "totalTime", "startTime", "endTime", r);
      }
      function k(t, e, n, i, o) {
        let s,
          a = 0;
        for (let u = 0; u < t.length; ++u) {
          const c = o ? o[u] : t[u][e];
          if (0 === c)
            throw Error(
              `Sequence ${t[u].id} has no ${e}, and no individual duration was provided.`
            );
          0 === u
            ? (s = l(t[0]))
            : Array.prototype.push.apply(
                s.notes,
                t[u].notes.map((t) => {
                  const e = r.a.Note.create(t);
                  return (e[n] += a), (e[i] += a), e;
                })
              ),
            (a += c);
        }
        return (s[e] = a), s;
      }
      function q(t, e, n, r, i, o, s) {
        const a = l(t);
        (a[r] = n),
          (a.notes = a.notes.filter(
            (t) => t[i] >= e && t[i] <= n && (s || t[o] <= n)
          )),
          (a[r] -= e);
        for (let t = 0; t < a.notes.length; t++)
          (a.notes[t][i] -= e),
            (a.notes[t][o] -= e),
            s && (a.notes[t][o] = Math.min(a.notes[t][o], a[r]));
        return a;
      }
      function E(t, e) {
        S(t);
        const n = l(t),
          i = n.notes.sort(
            (t, e) => t.quantizedStartStep - e.quantizedStartStep
          ),
          o = [];
        let s = 0,
          a = [];
        for (let t = 0; t < i.length; t++) {
          const u = i[t],
            c = u.quantizedStartStep,
            h = u.quantizedEndStep;
          if (
            ((u.quantizedStartStep -= s),
            (u.quantizedEndStep -= s),
            !(u.quantizedStartStep < 0))
          )
            if (u.quantizedEndStep <= e) a.push(u);
            else {
              if (u.quantizedStartStep < e) {
                const t = r.a.Note.create(u);
                (t.quantizedEndStep = e),
                  (t.startTime = t.endTime = void 0),
                  a.push(t),
                  (u.quantizedStartStep = s + e),
                  (u.quantizedEndStep = h);
              } else (u.quantizedStartStep = c), (u.quantizedEndStep = h);
              if (
                ((u.quantizedEndStep > e || u.quantizedStartStep > e) &&
                  (t -= 1),
                0 !== a.length)
              ) {
                const t = l(n);
                (t.notes = a), (t.totalQuantizedSteps = e), o.push(t);
              }
              (a = []), (s += e);
            }
        }
        if (0 !== a.length) {
          const t = l(n);
          (t.notes = a), (t.totalQuantizedSteps = e), o.push(t);
        }
        return o;
      }
    },
    function (t, e, n) {
      "use strict";
      (function (t) {
        var r = e;
        function i(t, e, n) {
          for (var r = Object.keys(e), i = 0; i < r.length; ++i)
            (void 0 !== t[r[i]] && n) || (t[r[i]] = e[r[i]]);
          return t;
        }
        function o(t) {
          function e(t, n) {
            if (!(this instanceof e)) return new e(t, n);
            Object.defineProperty(this, "message", {
              get: function () {
                return t;
              },
            }),
              Error.captureStackTrace
                ? Error.captureStackTrace(this, e)
                : Object.defineProperty(this, "stack", {
                    value: new Error().stack || "",
                  }),
              n && i(this, n);
          }
          return (
            ((e.prototype = Object.create(Error.prototype)).constructor = e),
            Object.defineProperty(e.prototype, "name", {
              get: function () {
                return t;
              },
            }),
            (e.prototype.toString = function () {
              return this.name + ": " + this.message;
            }),
            e
          );
        }
        (r.asPromise = n(22)),
          (r.base64 = n(23)),
          (r.EventEmitter = n(24)),
          (r.float = n(25)),
          (r.inquire = n(26)),
          (r.utf8 = n(27)),
          (r.pool = n(28)),
          (r.LongBits = n(29)),
          (r.isNode = Boolean(
            void 0 !== t &&
              t &&
              t.process &&
              t.process.versions &&
              t.process.versions.node
          )),
          (r.global =
            (r.isNode && t) ||
            ("undefined" != typeof window && window) ||
            ("undefined" != typeof self && self) ||
            this),
          (r.emptyArray = Object.freeze ? Object.freeze([]) : []),
          (r.emptyObject = Object.freeze ? Object.freeze({}) : {}),
          (r.isInteger =
            Number.isInteger ||
            function (t) {
              return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
            }),
          (r.isString = function (t) {
            return "string" == typeof t || t instanceof String;
          }),
          (r.isObject = function (t) {
            return t && "object" == typeof t;
          }),
          (r.isset = r.isSet = function (t, e) {
            var n = t[e];
            return (
              !(null == n || !t.hasOwnProperty(e)) &&
              ("object" != typeof n ||
                (Array.isArray(n) ? n.length : Object.keys(n).length) > 0)
            );
          }),
          (r.Buffer = (function () {
            try {
              var t = r.inquire("buffer").Buffer;
              return t.prototype.utf8Write ? t : null;
            } catch (t) {
              return null;
            }
          })()),
          (r._Buffer_from = null),
          (r._Buffer_allocUnsafe = null),
          (r.newBuffer = function (t) {
            return "number" == typeof t
              ? r.Buffer
                ? r._Buffer_allocUnsafe(t)
                : new r.Array(t)
              : r.Buffer
              ? r._Buffer_from(t)
              : "undefined" == typeof Uint8Array
              ? t
              : new Uint8Array(t);
          }),
          (r.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array),
          (r.Long =
            (r.global.dcodeIO && r.global.dcodeIO.Long) ||
            r.global.Long ||
            r.inquire("long")),
          (r.key2Re = /^true|false|0|1$/),
          (r.key32Re = /^-?(?:0|[1-9][0-9]*)$/),
          (r.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/),
          (r.longToHash = function (t) {
            return t ? r.LongBits.from(t).toHash() : r.LongBits.zeroHash;
          }),
          (r.longFromHash = function (t, e) {
            var n = r.LongBits.fromHash(t);
            return r.Long
              ? r.Long.fromBits(n.lo, n.hi, e)
              : n.toNumber(Boolean(e));
          }),
          (r.merge = i),
          (r.lcFirst = function (t) {
            return t.charAt(0).toLowerCase() + t.substring(1);
          }),
          (r.newError = o),
          (r.ProtocolError = o("ProtocolError")),
          (r.oneOfGetter = function (t) {
            for (var e = {}, n = 0; n < t.length; ++n) e[t[n]] = 1;
            return function () {
              for (var t = Object.keys(this), n = t.length - 1; n > -1; --n)
                if (
                  1 === e[t[n]] &&
                  void 0 !== this[t[n]] &&
                  null !== this[t[n]]
                )
                  return t[n];
            };
          }),
          (r.oneOfSetter = function (t) {
            return function (e) {
              for (var n = 0; n < t.length; ++n)
                t[n] !== e && delete this[t[n]];
            };
          }),
          (r.toJSONOptions = {
            longs: String,
            enums: String,
            bytes: String,
            json: !0,
          }),
          (r._configure = function () {
            var t = r.Buffer;
            t
              ? ((r._Buffer_from =
                  (t.from !== Uint8Array.from && t.from) ||
                  function (e, n) {
                    return new t(e, n);
                  }),
                (r._Buffer_allocUnsafe =
                  t.allocUnsafe ||
                  function (e) {
                    return new t(e);
                  }))
              : (r._Buffer_from = r._Buffer_allocUnsafe = null);
          });
      }.call(this, n(9)));
    },
    function (t, e) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (t) {
        "object" == typeof window && (n = window);
      }
      t.exports = n;
    },
    function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "NO_EVENT", function () {
          return s;
        }),
        n.d(e, "NOTE_OFF", function () {
          return a;
        }),
        n.d(e, "Melody", function () {
          return u;
        }),
        n.d(e, "MelodyRhythm", function () {
          return c;
        }),
        n.d(e, "MelodyShape", function () {
          return l;
        }),
        n.d(e, "MelodyRegister", function () {
          return h;
        });
      var r = n(0),
        i = n(2),
        o = n(7);
      const s = 0,
        a = 1;
      class u {
        constructor(t, e, n) {
          (this.events = t), (this.minPitch = e), (this.maxPitch = n);
        }
        static fromNoteSequence(t, e, n, r = !0, i) {
          o.assertIsQuantizedSequence(t);
          const s = t.notes.sort((t, e) =>
              t.quantizedStartStep === e.quantizedStartStep
                ? e.pitch - t.pitch
                : t.quantizedStartStep - e.quantizedStartStep
            ),
            c = new Int32Array(i || t.totalQuantizedSteps);
          let l = -1;
          return (
            s.forEach((t) => {
              if (t.quantizedStartStep === l) {
                if (r) return;
                throw new Error("`NoteSequence` is not monophonic.");
              }
              if (t.pitch < e || t.pitch > n)
                throw Error(
                  "`NoteSequence` has a pitch outside of the valid range: " +
                    t.pitch
                );
              (c[t.quantizedStartStep] = t.pitch - e + 2),
                (c[t.quantizedEndStep] = a),
                (l = t.quantizedStartStep);
            }),
            new u(c, e, n)
          );
        }
        toNoteSequence(t, e) {
          const n = o.createQuantizedNoteSequence(t, e);
          let r = null;
          for (let t = 0; t < this.events.length; ++t) {
            const e = this.events[t];
            switch (e) {
              case s:
                break;
              case a:
                r && ((r.quantizedEndStep = t), n.notes.push(r), (r = null));
                break;
              default:
                r && ((r.quantizedEndStep = t), n.notes.push(r)),
                  (r = i.a.Note.create({
                    pitch: e - 2 + this.minPitch,
                    quantizedStartStep: t,
                  }));
            }
          }
          return (
            r && ((r.quantizedEndStep = this.events.length), n.notes.push(r)),
            (n.totalQuantizedSteps = this.events.length),
            n
          );
        }
      }
      class c {
        constructor() {
          this.depth = 1;
        }
        extract(t) {
          const e = t.events.length,
            n = r.buffer([e, 1]);
          for (let r = 0; r < e; ++r) n.set(t.events[r] >= 2 ? 1 : 0, r, 0);
          return n.toTensor().as2D(e, 1);
        }
      }
      class l {
        constructor() {
          this.depth = 3;
        }
        extract(t) {
          const e = t.events.length,
            n = r.buffer([e, 3]);
          let i = null,
            o = null;
          for (let r = 0; r < e; ++r)
            if (t.events[r] >= 2) {
              if (null !== i) {
                let e;
                0 === n.get(i, 0) &&
                  0 === n.get(i, 1) &&
                  0 === n.get(i, 2) &&
                  (i = -1),
                  (e = t.events[r] < o ? 0 : t.events[r] > o ? 2 : 1);
                for (let t = r; t > i; --t) n.set(1, t, e);
              }
              (i = r), (o = t.events[r]);
            }
          if (i !== e - 1)
            if (
              null === i ||
              (0 === n.get(i, 0) && 0 === n.get(i, 1) && 0 === n.get(i, 2))
            )
              for (let t = 0; t < e; ++t) n.set(1, t, 1);
            else
              for (let t = e - 1; t > i; --t)
                for (let e = 0; e < 3; e++) n.set(n.get(i, e), t, e);
          return n.toTensor().as2D(e, 3);
        }
      }
      class h {
        constructor(t) {
          (this.boundaryPitches = t), (this.depth = t.length + 1);
        }
        meanMelodyPitch(t) {
          let e = 0,
            n = 0,
            r = null;
          for (let i = 0; i < t.events.length; ++i)
            t.events[i] === a
              ? (r = null)
              : t.events[i] >= 2 && (r = t.minPitch + t.events[i] - 2),
              null !== r && ((e += r), (n += 1));
          return n ? e / n : null;
        }
        extract(t) {
          const e = t.events.length,
            n = this.meanMelodyPitch(t);
          if (null === n) return r.zeros([e, this.depth]);
          let i = 0;
          for (
            ;
            i < this.boundaryPitches.length && n >= this.boundaryPitches[i];

          )
            i++;
          const o = r.buffer([e, this.depth]);
          for (let t = 0; t < e; ++t) o.set(1, t, i);
          return o.toTensor().as2D(e, this.depth);
        }
      }
    },
    ,
    function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "DEFAULT_DRUM_PITCH_CLASSES", function () {
          return l;
        }),
        n.d(e, "converterFromSpec", function () {
          return h;
        }),
        n.d(e, "DataConverter", function () {
          return p;
        }),
        n.d(e, "DrumsConverter", function () {
          return f;
        }),
        n.d(e, "DrumRollConverter", function () {
          return m;
        }),
        n.d(e, "DrumsOneHotConverter", function () {
          return d;
        }),
        n.d(e, "MelodyConverter", function () {
          return g;
        }),
        n.d(e, "MelodyRhythmConverter", function () {
          return y;
        }),
        n.d(e, "MelodyShapeConverter", function () {
          return b;
        }),
        n.d(e, "TrioConverter", function () {
          return w;
        }),
        n.d(e, "MultitrackConverter", function () {
          return P;
        }),
        n.d(e, "GrooveConverter", function () {
          return v;
        });
      var r = n(0),
        i = n(2),
        o = n(1),
        s = n(4),
        a = n(10),
        u = n(13),
        c = n(7);
      const l = [
        [36, 35],
        [38, 27, 28, 31, 32, 33, 34, 37, 39, 40, 56, 65, 66, 75, 85],
        [42, 44, 54, 68, 69, 70, 71, 73, 78, 80],
        [46, 67, 72, 74, 79, 81],
        [45, 29, 41, 61, 64, 84],
        [48, 47, 60, 63, 77, 86, 87],
        [50, 30, 43, 62, 76, 83],
        [49, 55, 57, 58],
        [51, 52, 53, 59, 82],
      ];
      function h(t) {
        switch (t.type) {
          case "MelodyConverter":
            return new g(t.args);
          case "MelodyRhythmConverter":
            return new y(t.args);
          case "MelodyShapeConverter":
            return new b(t.args);
          case "DrumsConverter":
            return new f(t.args);
          case "DrumRollConverter":
            return new m(t.args);
          case "TrioConverter":
            return new w(t.args);
          case "DrumsOneHotConverter":
            return new d(t.args);
          case "MultitrackConverter":
            return new P(t.args);
          case "GrooveConverter":
            return new v(t.args);
          default:
            throw new Error("Unknown DataConverter type: " + t);
        }
      }
      class p {
        constructor(t) {
          (this.NUM_SPLITS = 0),
            (this.SEGMENTED_BY_TRACK = !1),
            (this.numSteps = t.numSteps),
            (this.numSegments = t.numSegments);
        }
        tensorSteps(t) {
          return r.scalar(t.shape[0], "int32");
        }
      }
      class f extends p {
        constructor(t) {
          super(t),
            (this.pitchClasses = t.pitchClasses || l),
            (this.pitchToClass = new Map());
          for (let t = 0; t < this.pitchClasses.length; ++t)
            this.pitchClasses[t].forEach((e) => {
              this.pitchToClass.set(e, t);
            });
          this.depth = this.pitchClasses.length + 1;
        }
        toTensor(t) {
          c.assertIsQuantizedSequence(t);
          const e = this.numSteps || t.totalQuantizedSteps,
            n = r.buffer([e, this.pitchClasses.length + 1], "int32");
          for (let t = 0; t < e; ++t) n.set(1, t, -1);
          return (
            t.notes.forEach((t) => {
              n.set(1, t.quantizedStartStep, this.pitchToClass.get(t.pitch)),
                n.set(0, t.quantizedStartStep, -1);
            }),
            n.toTensor()
          );
        }
        async toNoteSequence(t, e, n) {
          const r = c.createQuantizedNoteSequence(e, n),
            o = t.argMax(1),
            s = await o.data();
          o.dispose();
          for (let t = 0; t < s.length; ++t)
            for (let e = 0; e < this.pitchClasses.length; e++)
              (s[t] >> e) & 1 &&
                r.notes.push(
                  i.a.Note.create({
                    pitch: this.pitchClasses[e][0],
                    quantizedStartStep: t,
                    quantizedEndStep: t + 1,
                    isDrum: !0,
                  })
                );
          return (r.totalQuantizedSteps = s.length), r;
        }
      }
      class m extends f {
        async toNoteSequence(t, e, n) {
          const r = c.createQuantizedNoteSequence(e, n),
            o = await t.data();
          for (let e = 0; e < t.shape[0]; ++e) {
            const t = o.slice(
              e * this.pitchClasses.length,
              (e + 1) * this.pitchClasses.length
            );
            for (let n = 0; n < t.length; ++n)
              t[n] &&
                r.notes.push(
                  i.a.Note.create({
                    pitch: this.pitchClasses[n][0],
                    quantizedStartStep: e,
                    quantizedEndStep: e + 1,
                    isDrum: !0,
                  })
                );
          }
          return (r.totalQuantizedSteps = t.shape[0]), r;
        }
      }
      class d extends f {
        constructor(t) {
          super(t), (this.depth = Math.pow(2, this.pitchClasses.length));
        }
        toTensor(t) {
          c.assertIsRelativeQuantizedSequence(t);
          const e = this.numSteps || t.totalQuantizedSteps,
            n = Array(e).fill(0);
          for (const { pitch: e, quantizedStartStep: r } of t.notes)
            n[r] += Math.pow(2, this.pitchToClass.get(e));
          return r.tidy(() => r.oneHot(r.tensor1d(n, "int32"), this.depth));
        }
      }
      class g extends p {
        constructor(t) {
          super(t),
            (this.NOTE_OFF = 1),
            (this.FIRST_PITCH = 2),
            (this.minPitch = t.minPitch),
            (this.maxPitch = t.maxPitch),
            (this.ignorePolyphony = t.ignorePolyphony),
            (this.depth = t.maxPitch - t.minPitch + 1 + this.FIRST_PITCH);
        }
        toTensor(t) {
          const e = a.Melody.fromNoteSequence(
            t,
            this.minPitch,
            this.maxPitch,
            this.ignorePolyphony,
            this.numSteps
          );
          return r.tidy(() =>
            r.oneHot(r.tensor(e.events, [e.events.length], "int32"), this.depth)
          );
        }
        async toNoteSequence(t, e, n) {
          const r = t.argMax(1),
            i = await r.data();
          r.dispose();
          return new a.Melody(i, this.minPitch, this.maxPitch).toNoteSequence(
            e,
            n
          );
        }
      }
      class S extends p {
        constructor(t, e) {
          super(t),
            (this.minPitch = t.minPitch),
            (this.maxPitch = t.maxPitch),
            (this.ignorePolyphony = t.ignorePolyphony),
            (this.melodyControl = e),
            (this.depth = e.depth);
        }
        toTensor(t) {
          const e = a.Melody.fromNoteSequence(
            t,
            this.minPitch,
            this.maxPitch,
            this.ignorePolyphony,
            this.numSteps
          );
          return this.melodyControl.extract(e);
        }
      }
      class y extends S {
        constructor(t) {
          super(t, new a.MelodyRhythm());
        }
        async toNoteSequence(t, e, n) {
          const r = c.createQuantizedNoteSequence(e, n),
            o = await t.data();
          for (let t = 0; t < o.length; ++t)
            o[t] &&
              r.notes.push(
                i.a.Note.create({
                  pitch: l[1][0],
                  quantizedStartStep: t,
                  quantizedEndStep: t + 1,
                  isDrum: !0,
                })
              );
          return (r.totalQuantizedSteps = o.length), r;
        }
      }
      class b extends S {
        constructor(t) {
          super(t, new a.MelodyShape());
        }
        async toNoteSequence(t, e, n) {
          const r = c.createQuantizedNoteSequence(e, n),
            o = t.argMax(1),
            a = await o.data();
          o.dispose();
          let u = Math.round((this.maxPitch + this.minPitch) / 2);
          for (let t = 0; t < a.length; ++t) {
            switch (a[t]) {
              case 0:
                (u -= 1),
                  u < this.minPitch &&
                    ((u = this.minPitch),
                    s.log(
                      "Pitch range exceeded when creating NoteSequence from shape.",
                      "MelodyShapeConverter"
                    ));
                break;
              case 2:
                (u += 1),
                  u > this.maxPitch &&
                    ((u = this.maxPitch),
                    s.log(
                      "Pitch range exceeded when creating NoteSequence from shape.",
                      "MelodyShapeConverter"
                    ));
            }
            r.notes.push(
              i.a.Note.create({
                pitch: u,
                quantizedStartStep: t,
                quantizedEndStep: t + 1,
              })
            );
          }
          return (r.totalQuantizedSteps = a.length), r;
        }
      }
      class w extends p {
        constructor(t) {
          super(t),
            (this.NUM_SPLITS = 3),
            (this.MEL_PROG_RANGE = [0, 31]),
            (this.BASS_PROG_RANGE = [32, 39]),
            (t.melArgs.numSteps = t.numSteps),
            (t.bassArgs.numSteps = t.numSteps),
            (t.drumsArgs.numSteps = t.numSteps),
            (this.melConverter = new g(t.melArgs)),
            (this.bassConverter = new g(t.bassArgs)),
            (this.drumsConverter = new d(t.drumsArgs)),
            (this.depth =
              this.melConverter.depth +
              this.bassConverter.depth +
              this.drumsConverter.depth);
        }
        toTensor(t) {
          c.assertIsQuantizedSequence(t);
          const e = c.clone(t),
            n = c.clone(t),
            i = c.clone(t);
          return (
            (e.notes = t.notes.filter(
              (t) =>
                !t.isDrum &&
                t.program >= this.MEL_PROG_RANGE[0] &&
                t.program <= this.MEL_PROG_RANGE[1]
            )),
            (n.notes = t.notes.filter(
              (t) =>
                !t.isDrum &&
                t.program >= this.BASS_PROG_RANGE[0] &&
                t.program <= this.BASS_PROG_RANGE[1]
            )),
            (i.notes = t.notes.filter((t) => t.isDrum)),
            r.tidy(() =>
              r.concat(
                [
                  this.melConverter.toTensor(e),
                  this.bassConverter.toTensor(n),
                  this.drumsConverter.toTensor(i),
                ],
                -1
              )
            )
          );
        }
        async toNoteSequence(t, e, n) {
          const i = r.split(
              t,
              [
                this.melConverter.depth,
                this.bassConverter.depth,
                this.drumsConverter.depth,
              ],
              -1
            ),
            o = await this.melConverter.toNoteSequence(i[0], e, n);
          o.notes.forEach((t) => {
            (t.instrument = 0), (t.program = 0);
          });
          const s = await this.bassConverter.toNoteSequence(i[1], e, n);
          o.notes.push(
            ...s.notes.map(
              (t) => (
                (t.instrument = 1), (t.program = this.BASS_PROG_RANGE[0]), t
              )
            )
          );
          const a = await this.drumsConverter.toNoteSequence(i[2], e, n);
          return (
            o.notes.push(...a.notes.map((t) => ((t.instrument = 2), t))),
            i.forEach((t) => t.dispose()),
            o
          );
        }
      }
      class P extends p {
        constructor(t) {
          super(t),
            (this.SEGMENTED_BY_TRACK = !0),
            (this.stepsPerQuarter = t.stepsPerQuarter),
            (this.totalSteps = t.totalSteps),
            (this.numVelocityBins = t.numVelocityBins),
            (this.minPitch = t.minPitch ? t.minPitch : o.MIN_MIDI_PITCH),
            (this.maxPitch = t.maxPitch ? t.maxPitch : o.MAX_MIDI_PITCH),
            (this.numPitches = this.maxPitch - this.minPitch + 1),
            (this.performanceEventDepth =
              2 * this.numPitches + this.totalSteps + this.numVelocityBins),
            (this.numPrograms = o.MAX_MIDI_PROGRAM - o.MIN_MIDI_PROGRAM + 2),
            (this.endToken = this.performanceEventDepth + this.numPrograms),
            (this.depth = this.endToken + 1),
            (this.endTensor = r.tidy(() =>
              r.oneHot(r.tensor1d([this.endToken], "int32"), this.depth).as1D()
            ));
        }
        trackToTensor(t) {
          const e = this.numSteps / this.numSegments;
          let n = void 0;
          if (t) {
            for (; t.events.length > e - 2; ) t.events.pop();
            (n = r.buffer([t.events.length + 2], "int32")),
              n.set(
                this.performanceEventDepth +
                  (t.isDrum ? this.numPrograms - 1 : t.program),
                0
              ),
              t.events.forEach((t, e) => {
                switch (t.type) {
                  case "note-on":
                    n.set(t.pitch - this.minPitch, e + 1);
                    break;
                  case "note-off":
                    n.set(this.numPitches + t.pitch - this.minPitch, e + 1);
                    break;
                  case "time-shift":
                    n.set(2 * this.numPitches + t.steps - 1, e + 1);
                    break;
                  case "velocity-change":
                    n.set(
                      2 * this.numPitches + this.totalSteps + t.velocityBin - 1,
                      e + 1
                    );
                    break;
                  default:
                    throw new Error("Unrecognized performance event: " + t);
                }
              }),
              n.set(this.endToken, t.events.length + 1);
          } else n = r.buffer([1], "int32", new Int32Array([this.endToken]));
          return r.tidy(() => {
            const t = r.oneHot(n.toTensor(), this.depth);
            return t.pad([
              [0, e - t.shape[0]],
              [0, 0],
            ]);
          });
        }
        toTensor(t) {
          if (
            (c.assertIsRelativeQuantizedSequence(t),
            t.quantizationInfo.stepsPerQuarter !== this.stepsPerQuarter)
          )
            throw new Error(
              `Steps per quarter note mismatch: ${t.quantizationInfo.stepsPerQuarter} != ${this.stepsPerQuarter}`
            );
          const e = c.clone(t);
          e.notes = t.notes.filter(
            (t) => t.pitch >= this.minPitch && t.pitch <= this.maxPitch
          );
          const n = new Set(e.notes.map((t) => t.instrument)),
            i = Array.from(n)
              .map((t) =>
                u.Performance.fromNoteSequence(
                  e,
                  this.totalSteps,
                  this.numVelocityBins,
                  t
                )
              )
              .sort((t, e) =>
                e.isDrum ? -1 : t.isDrum ? 1 : t.program - e.program
              );
          for (; i.length > this.numSegments; ) i.pop();
          for (
            i.forEach((t) => t.setNumSteps(this.totalSteps));
            i.length < this.numSegments;

          )
            i.push(void 0);
          return r.tidy(() =>
            r.concat(
              i.map((t) => this.trackToTensor(t)),
              0
            )
          );
        }
        tokensToTrack(t) {
          const e = t.indexOf(this.endToken),
            n = e >= 0 ? e : t.length,
            r = t.slice(0, n),
            i = r.filter((t) => t < this.performanceEventDepth),
            o = r.filter((t) => t >= this.performanceEventDepth),
            [s, a] = o.length
              ? o[0] - this.performanceEventDepth < this.numPrograms - 1
                ? [o[0] - this.performanceEventDepth, !1]
                : [0, !0]
              : [0, !1],
            c = Array.from(i).map((t) => {
              if (t < this.numPitches)
                return { type: "note-on", pitch: this.minPitch + t };
              if (t < 2 * this.numPitches)
                return {
                  type: "note-off",
                  pitch: this.minPitch + t - this.numPitches,
                };
              if (t < 2 * this.numPitches + this.totalSteps)
                return {
                  type: "time-shift",
                  steps: t - 2 * this.numPitches + 1,
                };
              if (
                t <
                2 * this.numPitches + this.totalSteps + this.numVelocityBins
              )
                return {
                  type: "velocity-change",
                  velocityBin: t - 2 * this.numPitches - this.totalSteps + 1,
                };
              throw new Error("Invalid performance event token: " + t);
            });
          return new u.Performance(
            c,
            this.totalSteps,
            this.numVelocityBins,
            s,
            a
          );
        }
        async toNoteSequence(t, e = this.stepsPerQuarter, n) {
          const i = c.createQuantizedNoteSequence(e, n);
          i.totalQuantizedSteps = this.totalSteps;
          const o = r.tidy(() => r.split(t.argMax(1), this.numSegments));
          return (
            (
              await Promise.all(
                o.map(async (t) => {
                  const e = await t.data(),
                    n = this.tokensToTrack(e);
                  return t.dispose(), n;
                })
              )
            ).forEach((t, e) => {
              t.setNumSteps(this.totalSteps),
                i.notes.push(...t.toNoteSequence(e).notes);
            }),
            i
          );
        }
      }
      class v extends p {
        constructor(t) {
          super(t),
            (this.TAPIFY_CHANNEL = 3),
            (this.stepsPerQuarter =
              t.stepsPerQuarter || o.DEFAULT_STEPS_PER_QUARTER),
            (this.pitchClasses = t.pitchClasses || l),
            (this.pitchToClass = new Map());
          for (let t = 0; t < this.pitchClasses.length; ++t)
            this.pitchClasses[t].forEach((e) => {
              this.pitchToClass.set(e, t);
            });
          (this.humanize = t.humanize || !1),
            (this.tapify = t.tapify || !1),
            (this.splitInstruments = t.splitInstruments || !1),
            (this.depth = 3);
        }
        toTensor(t) {
          const e = c.isRelativeQuantizedSequence(t)
              ? t
              : c.quantizeNoteSequence(t, this.stepsPerQuarter),
            n = this.numSteps,
            i =
              e.tempos && e.tempos.length
                ? e.tempos[0].qpm
                : o.DEFAULT_QUARTERS_PER_MINUTE,
            s = 60 / i / this.stepsPerQuarter,
            a = [];
          for (let t = 0; t < n; ++t) a.push(new Map());
          e.notes.forEach((t) => {
            if (!this.tapify && !this.pitchToClass.has(t.pitch)) return;
            const e = t.quantizedStartStep;
            if (e >= a.length)
              throw Error(
                `Model does not support sequences with more than ${n} steps (${
                  n * s
                } seconds at qpm ${i}).`
              );
            const r = this.tapify
              ? this.TAPIFY_CHANNEL
              : this.pitchToClass.get(t.pitch);
            (!a[e].has(r) || a[e].get(r).velocity < t.velocity) &&
              a[e].set(r, t);
          });
          const u = this.pitchClasses.length,
            l = r.buffer([n, u]),
            h = r.buffer([n, u]),
            p = r.buffer([n, u]);
          function f(t) {
            if (void 0 === t.startTime) return 0;
            const e = t.startTime;
            return (2 * (t.quantizedStartStep * s - e)) / s;
          }
          for (let t = 0; t < n; ++t)
            for (let e = 0; e < u; ++e) {
              const n = a[t].get(e);
              l.set(n ? 1 : 0, t, e),
                this.humanize ||
                  this.tapify ||
                  h.set(n ? n.velocity / o.MAX_MIDI_VELOCITY : 0, t, e),
                this.humanize || p.set(n ? f(n) : 0, t, e);
            }
          return r.tidy(() => {
            const t = l.toTensor(),
              e = h.toTensor(),
              i = p.toTensor(),
              o = this.splitInstruments ? n * u : n;
            return r.concat([t.as2D(o, -1), e.as2D(o, -1), i.as2D(o, -1)], 1);
          });
        }
        async toNoteSequence(t, e, n = o.DEFAULT_QUARTERS_PER_MINUTE) {
          if (e && e !== this.stepsPerQuarter)
            throw Error("`stepsPerQuarter` is set by the model.");
          e = this.stepsPerQuarter;
          const r = this.splitInstruments
              ? t.shape[0] / this.pitchClasses.length
              : t.shape[0],
            s = 60 / n / this.stepsPerQuarter,
            a = i.a.create({ totalTime: r * s, tempos: [{ qpm: n }] }),
            u = await t.data();
          function c(t, e, n) {
            return Math.min(Math.max(t, e), n);
          }
          const l = this.pitchClasses.length;
          for (let t = 0; t < r; ++t) {
            const e = u.slice(t * l * this.depth, (t + 1) * l * this.depth);
            for (let n = 0; n < l; ++n) {
              const r = e[this.splitInstruments ? n * this.depth : n],
                u = e[this.splitInstruments ? n * this.depth + 1 : l + n],
                h = e[this.splitInstruments ? n * this.depth + 2 : 2 * l + n];
              if (r > 0.5) {
                const e = c(
                    Math.round(u * o.MAX_MIDI_VELOCITY),
                    o.MIN_MIDI_VELOCITY,
                    o.MAX_MIDI_VELOCITY
                  ),
                  r = c(h / 2, -0.5, 0.5);
                a.notes.push(
                  i.a.Note.create({
                    pitch: this.pitchClasses[n][0],
                    startTime: (t - r) * s,
                    endTime: (t - r + 1) * s,
                    velocity: e,
                    isDrum: !0,
                  })
                );
              }
            }
          }
          return a;
        }
      }
    },
    function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "Performance", function () {
          return a;
        });
      var r = n(2),
        i = n(1),
        o = n(7),
        s = n(4);
      class a {
        constructor(t, e, n, r, i) {
          (this.events = t),
            (this.maxShiftSteps = e),
            (this.numVelocityBins = n),
            (this.program = r),
            (this.isDrum = i);
        }
        static fromNoteSequence(t, e, n, r) {
          o.assertIsQuantizedSequence(t);
          const s = t.notes.filter(
              (t, e) => void 0 === r || t.instrument === r
            ),
            u = s.sort((t, e) =>
              t.startTime === e.startTime
                ? t.pitch - e.pitch
                : t.startTime - e.startTime
            ),
            c = u.map((t, e) => ({
              step: t.quantizedStartStep,
              index: e,
              isOffset: 0,
            })),
            l = u.map((t, e) => ({
              step: t.quantizedEndStep,
              index: e,
              isOffset: 1,
            })),
            h = c
              .concat(l)
              .sort((t, e) =>
                t.step === e.step
                  ? t.index === e.index
                    ? t.isOffset - e.isOffset
                    : t.index - e.index
                  : t.step - e.step
              ),
            p = n ? Math.ceil((i.MIDI_VELOCITIES - 1) / n) : void 0,
            f = [];
          let m = 0,
            d = n;
          for (const t of h) {
            if (t.step > m) {
              for (; t.step > m + e; )
                f.push({ type: "time-shift", steps: e }), (m += e);
              f.push({ type: "time-shift", steps: t.step - m }), (m = t.step);
            }
            if (t.isOffset)
              f.push({ type: "note-off", pitch: u[t.index].pitch });
            else {
              if (p) {
                const e =
                  Math.floor(
                    (u[t.index].velocity - i.MIN_MIDI_VELOCITY - 1) / p
                  ) + 1;
                e !== d &&
                  (f.push({ type: "velocity-change", velocityBin: e }),
                  (d = e));
              }
              f.push({ type: "note-on", pitch: u[t.index].pitch });
            }
          }
          const g =
              !!s.some((t) => t.isDrum) &&
              (!s.some((t) => !t.isDrum) || void 0),
            S = Array.from(new Set(s.map((t) => t.program))),
            y = g || 1 !== S.length ? void 0 : S[0],
            b = new a(f, e, n, y, g);
          return b.setNumSteps(t.totalQuantizedSteps), b;
        }
        getNumSteps() {
          return this.events
            .filter((t) => "time-shift" === t.type)
            .map((t) => t.steps)
            .reduce((t, e) => t + e, 0);
        }
        setNumSteps(t) {
          let e = this.getNumSteps();
          if (e < t) {
            if (this.events.length) {
              const n = this.events[this.events.length - 1];
              if ("time-shift" === n.type) {
                const r = Math.min(t - e, this.maxShiftSteps - n.steps);
                (n.steps += r), (e += r);
              }
            }
            for (; e < t; )
              e + this.maxShiftSteps > t
                ? (this.events.push({ type: "time-shift", steps: t - e }),
                  (e = t))
                : (this.events.push({
                    type: "time-shift",
                    steps: this.maxShiftSteps,
                  }),
                  (e += this.maxShiftSteps));
          } else if (e > t)
            for (; this.events.length && e > t; ) {
              const n = this.events[this.events.length - 1];
              "time-shift" === n.type
                ? e - n.steps < t
                  ? ((n.steps -= e - t), (e = t))
                  : (this.events.pop(), (e -= n.steps))
                : this.events.pop();
            }
        }
        toNoteSequence(t) {
          const e = this.numVelocityBins
              ? Math.ceil((i.MIDI_VELOCITIES - 1) / this.numVelocityBins)
              : void 0,
            n = r.a.create();
          let o = 0,
            a = void 0;
          const u = new Map();
          for (let t = i.MIN_MIDI_PITCH; t <= i.MAX_MIDI_PITCH; ++t)
            u.set(t, []);
          for (const c of this.events)
            switch (c.type) {
              case "note-on":
                u.get(c.pitch).push([o, a]);
                break;
              case "note-off":
                const l = u.get(c.pitch);
                if (l.length) {
                  const [e, i] = l.shift();
                  o > e
                    ? n.notes.push(
                        r.a.Note.create({
                          pitch: c.pitch,
                          velocity: i,
                          instrument: t,
                          quantizedStartStep: e,
                          quantizedEndStep: o,
                          program: this.program,
                          isDrum: this.isDrum,
                        })
                      )
                    : s.log(
                        `Ignoring zero-length note: (pitch = ${c.pitch}, step = ${o})`,
                        "Performance"
                      );
                } else
                  s.log(
                    `Ignoring note-off with no previous note-on:(pitch = ${c.pitch}, step = ${o})`,
                    "Performance"
                  );
                break;
              case "time-shift":
                o += c.steps;
                break;
              case "velocity-change":
                if (!e)
                  throw new Error("Unexpected velocity change event: " + c);
                a = i.MIN_MIDI_VELOCITY + (c.velocityBin - 1) * e + 1;
                break;
              default:
                throw new Error("Unrecognized performance event: " + c);
            }
          return (
            u.forEach((e, i) => {
              for (const [a, u] of e)
                o > a
                  ? n.notes.push(
                      r.a.Note.create({
                        pitch: i,
                        velocity: u,
                        instrument: t,
                        quantizedStartStep: a,
                        quantizedEndStep: o,
                        program: this.program,
                        isDrum: this.isDrum,
                      })
                    )
                  : s.log(
                      `Ignoring zero-length note: (pitch = ${i}, step = ${o})`,
                      "Performance"
                    );
            }),
            (n.totalQuantizedSteps = o),
            n
          );
        }
      }
    },
    function (t, e, n) {
      "use strict";
      t.exports = h;
      var r,
        i = n(8),
        o = i.LongBits,
        s = i.base64,
        a = i.utf8;
      function u(t, e, n) {
        (this.fn = t), (this.len = e), (this.next = void 0), (this.val = n);
      }
      function c() {}
      function l(t) {
        (this.head = t.head),
          (this.tail = t.tail),
          (this.len = t.len),
          (this.next = t.states);
      }
      function h() {
        (this.len = 0),
          (this.head = new u(c, 0, 0)),
          (this.tail = this.head),
          (this.states = null);
      }
      var p = function () {
        return i.Buffer
          ? function () {
              return (h.create = function () {
                return new r();
              })();
            }
          : function () {
              return new h();
            };
      };
      function f(t, e, n) {
        e[n] = 255 & t;
      }
      function m(t, e) {
        (this.len = t), (this.next = void 0), (this.val = e);
      }
      function d(t, e, n) {
        for (; t.hi; )
          (e[n++] = (127 & t.lo) | 128),
            (t.lo = ((t.lo >>> 7) | (t.hi << 25)) >>> 0),
            (t.hi >>>= 7);
        for (; t.lo > 127; ) (e[n++] = (127 & t.lo) | 128), (t.lo = t.lo >>> 7);
        e[n++] = t.lo;
      }
      function g(t, e, n) {
        (e[n] = 255 & t),
          (e[n + 1] = (t >>> 8) & 255),
          (e[n + 2] = (t >>> 16) & 255),
          (e[n + 3] = t >>> 24);
      }
      (h.create = p()),
        (h.alloc = function (t) {
          return new i.Array(t);
        }),
        i.Array !== Array &&
          (h.alloc = i.pool(h.alloc, i.Array.prototype.subarray)),
        (h.prototype._push = function (t, e, n) {
          return (
            (this.tail = this.tail.next = new u(t, e, n)), (this.len += e), this
          );
        }),
        (m.prototype = Object.create(u.prototype)),
        (m.prototype.fn = function (t, e, n) {
          for (; t > 127; ) (e[n++] = (127 & t) | 128), (t >>>= 7);
          e[n] = t;
        }),
        (h.prototype.uint32 = function (t) {
          return (
            (this.len += (this.tail = this.tail.next = new m(
              (t >>>= 0) < 128
                ? 1
                : t < 16384
                ? 2
                : t < 2097152
                ? 3
                : t < 268435456
                ? 4
                : 5,
              t
            )).len),
            this
          );
        }),
        (h.prototype.int32 = function (t) {
          return t < 0 ? this._push(d, 10, o.fromNumber(t)) : this.uint32(t);
        }),
        (h.prototype.sint32 = function (t) {
          return this.uint32(((t << 1) ^ (t >> 31)) >>> 0);
        }),
        (h.prototype.uint64 = function (t) {
          var e = o.from(t);
          return this._push(d, e.length(), e);
        }),
        (h.prototype.int64 = h.prototype.uint64),
        (h.prototype.sint64 = function (t) {
          var e = o.from(t).zzEncode();
          return this._push(d, e.length(), e);
        }),
        (h.prototype.bool = function (t) {
          return this._push(f, 1, t ? 1 : 0);
        }),
        (h.prototype.fixed32 = function (t) {
          return this._push(g, 4, t >>> 0);
        }),
        (h.prototype.sfixed32 = h.prototype.fixed32),
        (h.prototype.fixed64 = function (t) {
          var e = o.from(t);
          return this._push(g, 4, e.lo)._push(g, 4, e.hi);
        }),
        (h.prototype.sfixed64 = h.prototype.fixed64),
        (h.prototype.float = function (t) {
          return this._push(i.float.writeFloatLE, 4, t);
        }),
        (h.prototype.double = function (t) {
          return this._push(i.float.writeDoubleLE, 8, t);
        });
      var S = i.Array.prototype.set
        ? function (t, e, n) {
            e.set(t, n);
          }
        : function (t, e, n) {
            for (var r = 0; r < t.length; ++r) e[n + r] = t[r];
          };
      (h.prototype.bytes = function (t) {
        var e = t.length >>> 0;
        if (!e) return this._push(f, 1, 0);
        if (i.isString(t)) {
          var n = h.alloc((e = s.length(t)));
          s.decode(t, n, 0), (t = n);
        }
        return this.uint32(e)._push(S, e, t);
      }),
        (h.prototype.string = function (t) {
          var e = a.length(t);
          return e ? this.uint32(e)._push(a.write, e, t) : this._push(f, 1, 0);
        }),
        (h.prototype.fork = function () {
          return (
            (this.states = new l(this)),
            (this.head = this.tail = new u(c, 0, 0)),
            (this.len = 0),
            this
          );
        }),
        (h.prototype.reset = function () {
          return (
            this.states
              ? ((this.head = this.states.head),
                (this.tail = this.states.tail),
                (this.len = this.states.len),
                (this.states = this.states.next))
              : ((this.head = this.tail = new u(c, 0, 0)), (this.len = 0)),
            this
          );
        }),
        (h.prototype.ldelim = function () {
          var t = this.head,
            e = this.tail,
            n = this.len;
          return (
            this.reset().uint32(n),
            n && ((this.tail.next = t.next), (this.tail = e), (this.len += n)),
            this
          );
        }),
        (h.prototype.finish = function () {
          for (
            var t = this.head.next, e = this.constructor.alloc(this.len), n = 0;
            t;

          )
            t.fn(t.val, e, n), (n += t.len), (t = t.next);
          return e;
        }),
        (h._configure = function (t) {
          (r = t), (h.create = p()), r._configure();
        });
    },
    function (t, e, n) {
      "use strict";
      t.exports = u;
      var r,
        i = n(8),
        o = i.LongBits,
        s = i.utf8;
      function a(t, e) {
        return RangeError(
          "index out of range: " + t.pos + " + " + (e || 1) + " > " + t.len
        );
      }
      function u(t) {
        (this.buf = t), (this.pos = 0), (this.len = t.length);
      }
      var c,
        l =
          "undefined" != typeof Uint8Array
            ? function (t) {
                if (t instanceof Uint8Array || Array.isArray(t))
                  return new u(t);
                throw Error("illegal buffer");
              }
            : function (t) {
                if (Array.isArray(t)) return new u(t);
                throw Error("illegal buffer");
              },
        h = function () {
          return i.Buffer
            ? function (t) {
                return (u.create = function (t) {
                  return i.Buffer.isBuffer(t) ? new r(t) : l(t);
                })(t);
              }
            : l;
        };
      function p() {
        var t = new o(0, 0),
          e = 0;
        if (!(this.len - this.pos > 4)) {
          for (; e < 3; ++e) {
            if (this.pos >= this.len) throw a(this);
            if (
              ((t.lo = (t.lo | ((127 & this.buf[this.pos]) << (7 * e))) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
          }
          return (
            (t.lo = (t.lo | ((127 & this.buf[this.pos++]) << (7 * e))) >>> 0), t
          );
        }
        for (; e < 4; ++e)
          if (
            ((t.lo = (t.lo | ((127 & this.buf[this.pos]) << (7 * e))) >>> 0),
            this.buf[this.pos++] < 128)
          )
            return t;
        if (
          ((t.lo = (t.lo | ((127 & this.buf[this.pos]) << 28)) >>> 0),
          (t.hi = (t.hi | ((127 & this.buf[this.pos]) >> 4)) >>> 0),
          this.buf[this.pos++] < 128)
        )
          return t;
        if (((e = 0), this.len - this.pos > 4)) {
          for (; e < 5; ++e)
            if (
              ((t.hi =
                (t.hi | ((127 & this.buf[this.pos]) << (7 * e + 3))) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
        } else
          for (; e < 5; ++e) {
            if (this.pos >= this.len) throw a(this);
            if (
              ((t.hi =
                (t.hi | ((127 & this.buf[this.pos]) << (7 * e + 3))) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
          }
        throw Error("invalid varint encoding");
      }
      function f(t, e) {
        return (
          (t[e - 4] | (t[e - 3] << 8) | (t[e - 2] << 16) | (t[e - 1] << 24)) >>>
          0
        );
      }
      function m() {
        if (this.pos + 8 > this.len) throw a(this, 8);
        return new o(
          f(this.buf, (this.pos += 4)),
          f(this.buf, (this.pos += 4))
        );
      }
      (u.create = h()),
        (u.prototype._slice =
          i.Array.prototype.subarray || i.Array.prototype.slice),
        (u.prototype.uint32 =
          ((c = 4294967295),
          function () {
            if (
              ((c = (127 & this.buf[this.pos]) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return c;
            if (
              ((c = (c | ((127 & this.buf[this.pos]) << 7)) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return c;
            if (
              ((c = (c | ((127 & this.buf[this.pos]) << 14)) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return c;
            if (
              ((c = (c | ((127 & this.buf[this.pos]) << 21)) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return c;
            if (
              ((c = (c | ((15 & this.buf[this.pos]) << 28)) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return c;
            if ((this.pos += 5) > this.len)
              throw ((this.pos = this.len), a(this, 10));
            return c;
          })),
        (u.prototype.int32 = function () {
          return 0 | this.uint32();
        }),
        (u.prototype.sint32 = function () {
          var t = this.uint32();
          return ((t >>> 1) ^ -(1 & t)) | 0;
        }),
        (u.prototype.bool = function () {
          return 0 !== this.uint32();
        }),
        (u.prototype.fixed32 = function () {
          if (this.pos + 4 > this.len) throw a(this, 4);
          return f(this.buf, (this.pos += 4));
        }),
        (u.prototype.sfixed32 = function () {
          if (this.pos + 4 > this.len) throw a(this, 4);
          return 0 | f(this.buf, (this.pos += 4));
        }),
        (u.prototype.float = function () {
          if (this.pos + 4 > this.len) throw a(this, 4);
          var t = i.float.readFloatLE(this.buf, this.pos);
          return (this.pos += 4), t;
        }),
        (u.prototype.double = function () {
          if (this.pos + 8 > this.len) throw a(this, 4);
          var t = i.float.readDoubleLE(this.buf, this.pos);
          return (this.pos += 8), t;
        }),
        (u.prototype.bytes = function () {
          var t = this.uint32(),
            e = this.pos,
            n = this.pos + t;
          if (n > this.len) throw a(this, t);
          return (
            (this.pos += t),
            Array.isArray(this.buf)
              ? this.buf.slice(e, n)
              : e === n
              ? new this.buf.constructor(0)
              : this._slice.call(this.buf, e, n)
          );
        }),
        (u.prototype.string = function () {
          var t = this.bytes();
          return s.read(t, 0, t.length);
        }),
        (u.prototype.skip = function (t) {
          if ("number" == typeof t) {
            if (this.pos + t > this.len) throw a(this, t);
            this.pos += t;
          } else
            do {
              if (this.pos >= this.len) throw a(this);
            } while (128 & this.buf[this.pos++]);
          return this;
        }),
        (u.prototype.skipType = function (t) {
          switch (t) {
            case 0:
              this.skip();
              break;
            case 1:
              this.skip(8);
              break;
            case 2:
              this.skip(this.uint32());
              break;
            case 3:
              for (; 4 != (t = 7 & this.uint32()); ) this.skipType(t);
              break;
            case 5:
              this.skip(4);
              break;
            default:
              throw Error("invalid wire type " + t + " at offset " + this.pos);
          }
          return this;
        }),
        (u._configure = function (t) {
          (r = t), (u.create = h()), r._configure();
          var e = i.Long ? "toLong" : "toNumber";
          i.merge(u.prototype, {
            int64: function () {
              return p.call(this)[e](!1);
            },
            uint64: function () {
              return p.call(this)[e](!0);
            },
            sint64: function () {
              return p.call(this).zzDecode()[e](!1);
            },
            fixed64: function () {
              return m.call(this)[e](!0);
            },
            sfixed64: function () {
              return m.call(this)[e](!1);
            },
          });
        });
    },
    function (t, e, n) {
      "use strict";
      var r,
        i,
        o = n(20),
        s = o.Reader,
        a = o.Writer,
        u = o.util,
        c = o.roots.default || (o.roots.default = {});
      (c.tensorflow =
        (((i = {}).magenta =
          (((r = {}).NoteSequence = (function () {
            function t(t) {
              if (
                ((this.timeSignatures = []),
                (this.keySignatures = []),
                (this.tempos = []),
                (this.notes = []),
                (this.pitchBends = []),
                (this.controlChanges = []),
                (this.partInfos = []),
                (this.textAnnotations = []),
                (this.sectionAnnotations = []),
                (this.sectionGroups = []),
                t)
              )
                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                  null != t[e[n]] && (this[e[n]] = t[e[n]]);
            }
            var e, n;
            return (
              (t.prototype.id = ""),
              (t.prototype.filename = ""),
              (t.prototype.referenceNumber = u.Long
                ? u.Long.fromBits(0, 0, !1)
                : 0),
              (t.prototype.collectionName = ""),
              (t.prototype.ticksPerQuarter = 0),
              (t.prototype.timeSignatures = u.emptyArray),
              (t.prototype.keySignatures = u.emptyArray),
              (t.prototype.tempos = u.emptyArray),
              (t.prototype.notes = u.emptyArray),
              (t.prototype.totalTime = 0),
              (t.prototype.totalQuantizedSteps = u.Long
                ? u.Long.fromBits(0, 0, !1)
                : 0),
              (t.prototype.pitchBends = u.emptyArray),
              (t.prototype.controlChanges = u.emptyArray),
              (t.prototype.partInfos = u.emptyArray),
              (t.prototype.sourceInfo = null),
              (t.prototype.textAnnotations = u.emptyArray),
              (t.prototype.sectionAnnotations = u.emptyArray),
              (t.prototype.sectionGroups = u.emptyArray),
              (t.prototype.quantizationInfo = null),
              (t.prototype.subsequenceInfo = null),
              (t.prototype.sequenceMetadata = null),
              (t.create = function (e) {
                return new t(e);
              }),
              (t.encode = function (t, e) {
                if (
                  (e || (e = a.create()),
                  null != t.id &&
                    t.hasOwnProperty("id") &&
                    e.uint32(10).string(t.id),
                  null != t.filename &&
                    t.hasOwnProperty("filename") &&
                    e.uint32(18).string(t.filename),
                  null != t.collectionName &&
                    t.hasOwnProperty("collectionName") &&
                    e.uint32(26).string(t.collectionName),
                  null != t.ticksPerQuarter &&
                    t.hasOwnProperty("ticksPerQuarter") &&
                    e.uint32(32).int32(t.ticksPerQuarter),
                  null != t.timeSignatures && t.timeSignatures.length)
                )
                  for (var n = 0; n < t.timeSignatures.length; ++n)
                    c.tensorflow.magenta.NoteSequence.TimeSignature.encode(
                      t.timeSignatures[n],
                      e.uint32(42).fork()
                    ).ldelim();
                if (null != t.keySignatures && t.keySignatures.length)
                  for (n = 0; n < t.keySignatures.length; ++n)
                    c.tensorflow.magenta.NoteSequence.KeySignature.encode(
                      t.keySignatures[n],
                      e.uint32(50).fork()
                    ).ldelim();
                if (null != t.tempos && t.tempos.length)
                  for (n = 0; n < t.tempos.length; ++n)
                    c.tensorflow.magenta.NoteSequence.Tempo.encode(
                      t.tempos[n],
                      e.uint32(58).fork()
                    ).ldelim();
                if (null != t.notes && t.notes.length)
                  for (n = 0; n < t.notes.length; ++n)
                    c.tensorflow.magenta.NoteSequence.Note.encode(
                      t.notes[n],
                      e.uint32(66).fork()
                    ).ldelim();
                if (
                  (null != t.totalTime &&
                    t.hasOwnProperty("totalTime") &&
                    e.uint32(73).double(t.totalTime),
                  null != t.pitchBends && t.pitchBends.length)
                )
                  for (n = 0; n < t.pitchBends.length; ++n)
                    c.tensorflow.magenta.NoteSequence.PitchBend.encode(
                      t.pitchBends[n],
                      e.uint32(82).fork()
                    ).ldelim();
                if (null != t.controlChanges && t.controlChanges.length)
                  for (n = 0; n < t.controlChanges.length; ++n)
                    c.tensorflow.magenta.NoteSequence.ControlChange.encode(
                      t.controlChanges[n],
                      e.uint32(90).fork()
                    ).ldelim();
                if (null != t.partInfos && t.partInfos.length)
                  for (n = 0; n < t.partInfos.length; ++n)
                    c.tensorflow.magenta.NoteSequence.PartInfo.encode(
                      t.partInfos[n],
                      e.uint32(98).fork()
                    ).ldelim();
                if (
                  (null != t.sourceInfo &&
                    t.hasOwnProperty("sourceInfo") &&
                    c.tensorflow.magenta.NoteSequence.SourceInfo.encode(
                      t.sourceInfo,
                      e.uint32(106).fork()
                    ).ldelim(),
                  null != t.textAnnotations && t.textAnnotations.length)
                )
                  for (n = 0; n < t.textAnnotations.length; ++n)
                    c.tensorflow.magenta.NoteSequence.TextAnnotation.encode(
                      t.textAnnotations[n],
                      e.uint32(114).fork()
                    ).ldelim();
                if (
                  (null != t.quantizationInfo &&
                    t.hasOwnProperty("quantizationInfo") &&
                    c.tensorflow.magenta.NoteSequence.QuantizationInfo.encode(
                      t.quantizationInfo,
                      e.uint32(122).fork()
                    ).ldelim(),
                  null != t.totalQuantizedSteps &&
                    t.hasOwnProperty("totalQuantizedSteps") &&
                    e.uint32(128).int64(t.totalQuantizedSteps),
                  null != t.subsequenceInfo &&
                    t.hasOwnProperty("subsequenceInfo") &&
                    c.tensorflow.magenta.NoteSequence.SubsequenceInfo.encode(
                      t.subsequenceInfo,
                      e.uint32(138).fork()
                    ).ldelim(),
                  null != t.referenceNumber &&
                    t.hasOwnProperty("referenceNumber") &&
                    e.uint32(144).int64(t.referenceNumber),
                  null != t.sequenceMetadata &&
                    t.hasOwnProperty("sequenceMetadata") &&
                    c.tensorflow.magenta.SequenceMetadata.encode(
                      t.sequenceMetadata,
                      e.uint32(154).fork()
                    ).ldelim(),
                  null != t.sectionAnnotations && t.sectionAnnotations.length)
                )
                  for (n = 0; n < t.sectionAnnotations.length; ++n)
                    c.tensorflow.magenta.NoteSequence.SectionAnnotation.encode(
                      t.sectionAnnotations[n],
                      e.uint32(162).fork()
                    ).ldelim();
                if (null != t.sectionGroups && t.sectionGroups.length)
                  for (n = 0; n < t.sectionGroups.length; ++n)
                    c.tensorflow.magenta.NoteSequence.SectionGroup.encode(
                      t.sectionGroups[n],
                      e.uint32(170).fork()
                    ).ldelim();
                return e;
              }),
              (t.encodeDelimited = function (t, e) {
                return this.encode(t, e).ldelim();
              }),
              (t.decode = function (t, e) {
                t instanceof s || (t = s.create(t));
                for (
                  var n = void 0 === e ? t.len : t.pos + e,
                    r = new c.tensorflow.magenta.NoteSequence();
                  t.pos < n;

                ) {
                  var i = t.uint32();
                  switch (i >>> 3) {
                    case 1:
                      r.id = t.string();
                      break;
                    case 2:
                      r.filename = t.string();
                      break;
                    case 18:
                      r.referenceNumber = u.Long
                        ? t.int64().toNumber()
                        : t.int64();
                      break;
                    case 3:
                      r.collectionName = t.string();
                      break;
                    case 4:
                      r.ticksPerQuarter = t.int32();
                      break;
                    case 5:
                      (r.timeSignatures && r.timeSignatures.length) ||
                        (r.timeSignatures = []),
                        r.timeSignatures.push(
                          c.tensorflow.magenta.NoteSequence.TimeSignature.decode(
                            t,
                            t.uint32()
                          )
                        );
                      break;
                    case 6:
                      (r.keySignatures && r.keySignatures.length) ||
                        (r.keySignatures = []),
                        r.keySignatures.push(
                          c.tensorflow.magenta.NoteSequence.KeySignature.decode(
                            t,
                            t.uint32()
                          )
                        );
                      break;
                    case 7:
                      (r.tempos && r.tempos.length) || (r.tempos = []),
                        r.tempos.push(
                          c.tensorflow.magenta.NoteSequence.Tempo.decode(
                            t,
                            t.uint32()
                          )
                        );
                      break;
                    case 8:
                      (r.notes && r.notes.length) || (r.notes = []),
                        r.notes.push(
                          c.tensorflow.magenta.NoteSequence.Note.decode(
                            t,
                            t.uint32()
                          )
                        );
                      break;
                    case 9:
                      r.totalTime = t.double();
                      break;
                    case 16:
                      r.totalQuantizedSteps = u.Long
                        ? t.int64().toNumber()
                        : t.int64();
                      break;
                    case 10:
                      (r.pitchBends && r.pitchBends.length) ||
                        (r.pitchBends = []),
                        r.pitchBends.push(
                          c.tensorflow.magenta.NoteSequence.PitchBend.decode(
                            t,
                            t.uint32()
                          )
                        );
                      break;
                    case 11:
                      (r.controlChanges && r.controlChanges.length) ||
                        (r.controlChanges = []),
                        r.controlChanges.push(
                          c.tensorflow.magenta.NoteSequence.ControlChange.decode(
                            t,
                            t.uint32()
                          )
                        );
                      break;
                    case 12:
                      (r.partInfos && r.partInfos.length) || (r.partInfos = []),
                        r.partInfos.push(
                          c.tensorflow.magenta.NoteSequence.PartInfo.decode(
                            t,
                            t.uint32()
                          )
                        );
                      break;
                    case 13:
                      r.sourceInfo = c.tensorflow.magenta.NoteSequence.SourceInfo.decode(
                        t,
                        t.uint32()
                      );
                      break;
                    case 14:
                      (r.textAnnotations && r.textAnnotations.length) ||
                        (r.textAnnotations = []),
                        r.textAnnotations.push(
                          c.tensorflow.magenta.NoteSequence.TextAnnotation.decode(
                            t,
                            t.uint32()
                          )
                        );
                      break;
                    case 20:
                      (r.sectionAnnotations && r.sectionAnnotations.length) ||
                        (r.sectionAnnotations = []),
                        r.sectionAnnotations.push(
                          c.tensorflow.magenta.NoteSequence.SectionAnnotation.decode(
                            t,
                            t.uint32()
                          )
                        );
                      break;
                    case 21:
                      (r.sectionGroups && r.sectionGroups.length) ||
                        (r.sectionGroups = []),
                        r.sectionGroups.push(
                          c.tensorflow.magenta.NoteSequence.SectionGroup.decode(
                            t,
                            t.uint32()
                          )
                        );
                      break;
                    case 15:
                      r.quantizationInfo = c.tensorflow.magenta.NoteSequence.QuantizationInfo.decode(
                        t,
                        t.uint32()
                      );
                      break;
                    case 17:
                      r.subsequenceInfo = c.tensorflow.magenta.NoteSequence.SubsequenceInfo.decode(
                        t,
                        t.uint32()
                      );
                      break;
                    case 19:
                      r.sequenceMetadata = c.tensorflow.magenta.SequenceMetadata.decode(
                        t,
                        t.uint32()
                      );
                      break;
                    default:
                      t.skipType(7 & i);
                  }
                }
                return r;
              }),
              (t.decodeDelimited = function (t) {
                return (
                  t instanceof s || (t = new s(t)), this.decode(t, t.uint32())
                );
              }),
              (t.verify = function (t) {
                if ("object" != typeof t || null === t)
                  return "object expected";
                if (null != t.id && t.hasOwnProperty("id") && !u.isString(t.id))
                  return "id: string expected";
                if (
                  null != t.filename &&
                  t.hasOwnProperty("filename") &&
                  !u.isString(t.filename)
                )
                  return "filename: string expected";
                if (
                  null != t.referenceNumber &&
                  t.hasOwnProperty("referenceNumber") &&
                  !(
                    u.isInteger(t.referenceNumber) ||
                    (t.referenceNumber &&
                      u.isInteger(t.referenceNumber.low) &&
                      u.isInteger(t.referenceNumber.high))
                  )
                )
                  return "referenceNumber: integer|Long expected";
                if (
                  null != t.collectionName &&
                  t.hasOwnProperty("collectionName") &&
                  !u.isString(t.collectionName)
                )
                  return "collectionName: string expected";
                if (
                  null != t.ticksPerQuarter &&
                  t.hasOwnProperty("ticksPerQuarter") &&
                  !u.isInteger(t.ticksPerQuarter)
                )
                  return "ticksPerQuarter: integer expected";
                if (
                  null != t.timeSignatures &&
                  t.hasOwnProperty("timeSignatures")
                ) {
                  if (!Array.isArray(t.timeSignatures))
                    return "timeSignatures: array expected";
                  for (var e = 0; e < t.timeSignatures.length; ++e)
                    if (
                      (n = c.tensorflow.magenta.NoteSequence.TimeSignature.verify(
                        t.timeSignatures[e]
                      ))
                    )
                      return "timeSignatures." + n;
                }
                if (
                  null != t.keySignatures &&
                  t.hasOwnProperty("keySignatures")
                ) {
                  if (!Array.isArray(t.keySignatures))
                    return "keySignatures: array expected";
                  for (e = 0; e < t.keySignatures.length; ++e)
                    if (
                      (n = c.tensorflow.magenta.NoteSequence.KeySignature.verify(
                        t.keySignatures[e]
                      ))
                    )
                      return "keySignatures." + n;
                }
                if (null != t.tempos && t.hasOwnProperty("tempos")) {
                  if (!Array.isArray(t.tempos)) return "tempos: array expected";
                  for (e = 0; e < t.tempos.length; ++e)
                    if (
                      (n = c.tensorflow.magenta.NoteSequence.Tempo.verify(
                        t.tempos[e]
                      ))
                    )
                      return "tempos." + n;
                }
                if (null != t.notes && t.hasOwnProperty("notes")) {
                  if (!Array.isArray(t.notes)) return "notes: array expected";
                  for (e = 0; e < t.notes.length; ++e)
                    if (
                      (n = c.tensorflow.magenta.NoteSequence.Note.verify(
                        t.notes[e]
                      ))
                    )
                      return "notes." + n;
                }
                if (
                  null != t.totalTime &&
                  t.hasOwnProperty("totalTime") &&
                  "number" != typeof t.totalTime
                )
                  return "totalTime: number expected";
                if (
                  null != t.totalQuantizedSteps &&
                  t.hasOwnProperty("totalQuantizedSteps") &&
                  !(
                    u.isInteger(t.totalQuantizedSteps) ||
                    (t.totalQuantizedSteps &&
                      u.isInteger(t.totalQuantizedSteps.low) &&
                      u.isInteger(t.totalQuantizedSteps.high))
                  )
                )
                  return "totalQuantizedSteps: integer|Long expected";
                if (null != t.pitchBends && t.hasOwnProperty("pitchBends")) {
                  if (!Array.isArray(t.pitchBends))
                    return "pitchBends: array expected";
                  for (e = 0; e < t.pitchBends.length; ++e)
                    if (
                      (n = c.tensorflow.magenta.NoteSequence.PitchBend.verify(
                        t.pitchBends[e]
                      ))
                    )
                      return "pitchBends." + n;
                }
                if (
                  null != t.controlChanges &&
                  t.hasOwnProperty("controlChanges")
                ) {
                  if (!Array.isArray(t.controlChanges))
                    return "controlChanges: array expected";
                  for (e = 0; e < t.controlChanges.length; ++e)
                    if (
                      (n = c.tensorflow.magenta.NoteSequence.ControlChange.verify(
                        t.controlChanges[e]
                      ))
                    )
                      return "controlChanges." + n;
                }
                if (null != t.partInfos && t.hasOwnProperty("partInfos")) {
                  if (!Array.isArray(t.partInfos))
                    return "partInfos: array expected";
                  for (e = 0; e < t.partInfos.length; ++e)
                    if (
                      (n = c.tensorflow.magenta.NoteSequence.PartInfo.verify(
                        t.partInfos[e]
                      ))
                    )
                      return "partInfos." + n;
                }
                if (
                  null != t.sourceInfo &&
                  t.hasOwnProperty("sourceInfo") &&
                  (n = c.tensorflow.magenta.NoteSequence.SourceInfo.verify(
                    t.sourceInfo
                  ))
                )
                  return "sourceInfo." + n;
                if (
                  null != t.textAnnotations &&
                  t.hasOwnProperty("textAnnotations")
                ) {
                  if (!Array.isArray(t.textAnnotations))
                    return "textAnnotations: array expected";
                  for (e = 0; e < t.textAnnotations.length; ++e)
                    if (
                      (n = c.tensorflow.magenta.NoteSequence.TextAnnotation.verify(
                        t.textAnnotations[e]
                      ))
                    )
                      return "textAnnotations." + n;
                }
                if (
                  null != t.sectionAnnotations &&
                  t.hasOwnProperty("sectionAnnotations")
                ) {
                  if (!Array.isArray(t.sectionAnnotations))
                    return "sectionAnnotations: array expected";
                  for (e = 0; e < t.sectionAnnotations.length; ++e)
                    if (
                      (n = c.tensorflow.magenta.NoteSequence.SectionAnnotation.verify(
                        t.sectionAnnotations[e]
                      ))
                    )
                      return "sectionAnnotations." + n;
                }
                if (
                  null != t.sectionGroups &&
                  t.hasOwnProperty("sectionGroups")
                ) {
                  if (!Array.isArray(t.sectionGroups))
                    return "sectionGroups: array expected";
                  for (e = 0; e < t.sectionGroups.length; ++e) {
                    var n;
                    if (
                      (n = c.tensorflow.magenta.NoteSequence.SectionGroup.verify(
                        t.sectionGroups[e]
                      ))
                    )
                      return "sectionGroups." + n;
                  }
                }
                return null != t.quantizationInfo &&
                  t.hasOwnProperty("quantizationInfo") &&
                  (n = c.tensorflow.magenta.NoteSequence.QuantizationInfo.verify(
                    t.quantizationInfo
                  ))
                  ? "quantizationInfo." + n
                  : null != t.subsequenceInfo &&
                    t.hasOwnProperty("subsequenceInfo") &&
                    (n = c.tensorflow.magenta.NoteSequence.SubsequenceInfo.verify(
                      t.subsequenceInfo
                    ))
                  ? "subsequenceInfo." + n
                  : null != t.sequenceMetadata &&
                    t.hasOwnProperty("sequenceMetadata") &&
                    (n = c.tensorflow.magenta.SequenceMetadata.verify(
                      t.sequenceMetadata
                    ))
                  ? "sequenceMetadata." + n
                  : null;
              }),
              (t.fromObject = function (t) {
                if (t instanceof c.tensorflow.magenta.NoteSequence) return t;
                var e = new c.tensorflow.magenta.NoteSequence();
                if (
                  (null != t.id && (e.id = String(t.id)),
                  null != t.filename && (e.filename = String(t.filename)),
                  null != t.referenceNumber &&
                    (u.Long
                      ? ((e.referenceNumber = u.Long.fromValue(
                          t.referenceNumber
                        )).unsigned = !1)
                      : "string" == typeof t.referenceNumber
                      ? (e.referenceNumber = parseInt(t.referenceNumber, 10))
                      : "number" == typeof t.referenceNumber
                      ? (e.referenceNumber = t.referenceNumber)
                      : "object" == typeof t.referenceNumber &&
                        (e.referenceNumber = new u.LongBits(
                          t.referenceNumber.low >>> 0,
                          t.referenceNumber.high >>> 0
                        ).toNumber())),
                  null != t.collectionName &&
                    (e.collectionName = String(t.collectionName)),
                  null != t.ticksPerQuarter &&
                    (e.ticksPerQuarter = 0 | t.ticksPerQuarter),
                  t.timeSignatures)
                ) {
                  if (!Array.isArray(t.timeSignatures))
                    throw TypeError(
                      ".tensorflow.magenta.NoteSequence.timeSignatures: array expected"
                    );
                  e.timeSignatures = [];
                  for (var n = 0; n < t.timeSignatures.length; ++n) {
                    if ("object" != typeof t.timeSignatures[n])
                      throw TypeError(
                        ".tensorflow.magenta.NoteSequence.timeSignatures: object expected"
                      );
                    e.timeSignatures[
                      n
                    ] = c.tensorflow.magenta.NoteSequence.TimeSignature.fromObject(
                      t.timeSignatures[n]
                    );
                  }
                }
                if (t.keySignatures) {
                  if (!Array.isArray(t.keySignatures))
                    throw TypeError(
                      ".tensorflow.magenta.NoteSequence.keySignatures: array expected"
                    );
                  for (
                    e.keySignatures = [], n = 0;
                    n < t.keySignatures.length;
                    ++n
                  ) {
                    if ("object" != typeof t.keySignatures[n])
                      throw TypeError(
                        ".tensorflow.magenta.NoteSequence.keySignatures: object expected"
                      );
                    e.keySignatures[
                      n
                    ] = c.tensorflow.magenta.NoteSequence.KeySignature.fromObject(
                      t.keySignatures[n]
                    );
                  }
                }
                if (t.tempos) {
                  if (!Array.isArray(t.tempos))
                    throw TypeError(
                      ".tensorflow.magenta.NoteSequence.tempos: array expected"
                    );
                  for (e.tempos = [], n = 0; n < t.tempos.length; ++n) {
                    if ("object" != typeof t.tempos[n])
                      throw TypeError(
                        ".tensorflow.magenta.NoteSequence.tempos: object expected"
                      );
                    e.tempos[
                      n
                    ] = c.tensorflow.magenta.NoteSequence.Tempo.fromObject(
                      t.tempos[n]
                    );
                  }
                }
                if (t.notes) {
                  if (!Array.isArray(t.notes))
                    throw TypeError(
                      ".tensorflow.magenta.NoteSequence.notes: array expected"
                    );
                  for (e.notes = [], n = 0; n < t.notes.length; ++n) {
                    if ("object" != typeof t.notes[n])
                      throw TypeError(
                        ".tensorflow.magenta.NoteSequence.notes: object expected"
                      );
                    e.notes[
                      n
                    ] = c.tensorflow.magenta.NoteSequence.Note.fromObject(
                      t.notes[n]
                    );
                  }
                }
                if (
                  (null != t.totalTime && (e.totalTime = Number(t.totalTime)),
                  null != t.totalQuantizedSteps &&
                    (u.Long
                      ? ((e.totalQuantizedSteps = u.Long.fromValue(
                          t.totalQuantizedSteps
                        )).unsigned = !1)
                      : "string" == typeof t.totalQuantizedSteps
                      ? (e.totalQuantizedSteps = parseInt(
                          t.totalQuantizedSteps,
                          10
                        ))
                      : "number" == typeof t.totalQuantizedSteps
                      ? (e.totalQuantizedSteps = t.totalQuantizedSteps)
                      : "object" == typeof t.totalQuantizedSteps &&
                        (e.totalQuantizedSteps = new u.LongBits(
                          t.totalQuantizedSteps.low >>> 0,
                          t.totalQuantizedSteps.high >>> 0
                        ).toNumber())),
                  t.pitchBends)
                ) {
                  if (!Array.isArray(t.pitchBends))
                    throw TypeError(
                      ".tensorflow.magenta.NoteSequence.pitchBends: array expected"
                    );
                  for (e.pitchBends = [], n = 0; n < t.pitchBends.length; ++n) {
                    if ("object" != typeof t.pitchBends[n])
                      throw TypeError(
                        ".tensorflow.magenta.NoteSequence.pitchBends: object expected"
                      );
                    e.pitchBends[
                      n
                    ] = c.tensorflow.magenta.NoteSequence.PitchBend.fromObject(
                      t.pitchBends[n]
                    );
                  }
                }
                if (t.controlChanges) {
                  if (!Array.isArray(t.controlChanges))
                    throw TypeError(
                      ".tensorflow.magenta.NoteSequence.controlChanges: array expected"
                    );
                  for (
                    e.controlChanges = [], n = 0;
                    n < t.controlChanges.length;
                    ++n
                  ) {
                    if ("object" != typeof t.controlChanges[n])
                      throw TypeError(
                        ".tensorflow.magenta.NoteSequence.controlChanges: object expected"
                      );
                    e.controlChanges[
                      n
                    ] = c.tensorflow.magenta.NoteSequence.ControlChange.fromObject(
                      t.controlChanges[n]
                    );
                  }
                }
                if (t.partInfos) {
                  if (!Array.isArray(t.partInfos))
                    throw TypeError(
                      ".tensorflow.magenta.NoteSequence.partInfos: array expected"
                    );
                  for (e.partInfos = [], n = 0; n < t.partInfos.length; ++n) {
                    if ("object" != typeof t.partInfos[n])
                      throw TypeError(
                        ".tensorflow.magenta.NoteSequence.partInfos: object expected"
                      );
                    e.partInfos[
                      n
                    ] = c.tensorflow.magenta.NoteSequence.PartInfo.fromObject(
                      t.partInfos[n]
                    );
                  }
                }
                if (null != t.sourceInfo) {
                  if ("object" != typeof t.sourceInfo)
                    throw TypeError(
                      ".tensorflow.magenta.NoteSequence.sourceInfo: object expected"
                    );
                  e.sourceInfo = c.tensorflow.magenta.NoteSequence.SourceInfo.fromObject(
                    t.sourceInfo
                  );
                }
                if (t.textAnnotations) {
                  if (!Array.isArray(t.textAnnotations))
                    throw TypeError(
                      ".tensorflow.magenta.NoteSequence.textAnnotations: array expected"
                    );
                  for (
                    e.textAnnotations = [], n = 0;
                    n < t.textAnnotations.length;
                    ++n
                  ) {
                    if ("object" != typeof t.textAnnotations[n])
                      throw TypeError(
                        ".tensorflow.magenta.NoteSequence.textAnnotations: object expected"
                      );
                    e.textAnnotations[
                      n
                    ] = c.tensorflow.magenta.NoteSequence.TextAnnotation.fromObject(
                      t.textAnnotations[n]
                    );
                  }
                }
                if (t.sectionAnnotations) {
                  if (!Array.isArray(t.sectionAnnotations))
                    throw TypeError(
                      ".tensorflow.magenta.NoteSequence.sectionAnnotations: array expected"
                    );
                  for (
                    e.sectionAnnotations = [], n = 0;
                    n < t.sectionAnnotations.length;
                    ++n
                  ) {
                    if ("object" != typeof t.sectionAnnotations[n])
                      throw TypeError(
                        ".tensorflow.magenta.NoteSequence.sectionAnnotations: object expected"
                      );
                    e.sectionAnnotations[
                      n
                    ] = c.tensorflow.magenta.NoteSequence.SectionAnnotation.fromObject(
                      t.sectionAnnotations[n]
                    );
                  }
                }
                if (t.sectionGroups) {
                  if (!Array.isArray(t.sectionGroups))
                    throw TypeError(
                      ".tensorflow.magenta.NoteSequence.sectionGroups: array expected"
                    );
                  for (
                    e.sectionGroups = [], n = 0;
                    n < t.sectionGroups.length;
                    ++n
                  ) {
                    if ("object" != typeof t.sectionGroups[n])
                      throw TypeError(
                        ".tensorflow.magenta.NoteSequence.sectionGroups: object expected"
                      );
                    e.sectionGroups[
                      n
                    ] = c.tensorflow.magenta.NoteSequence.SectionGroup.fromObject(
                      t.sectionGroups[n]
                    );
                  }
                }
                if (null != t.quantizationInfo) {
                  if ("object" != typeof t.quantizationInfo)
                    throw TypeError(
                      ".tensorflow.magenta.NoteSequence.quantizationInfo: object expected"
                    );
                  e.quantizationInfo = c.tensorflow.magenta.NoteSequence.QuantizationInfo.fromObject(
                    t.quantizationInfo
                  );
                }
                if (null != t.subsequenceInfo) {
                  if ("object" != typeof t.subsequenceInfo)
                    throw TypeError(
                      ".tensorflow.magenta.NoteSequence.subsequenceInfo: object expected"
                    );
                  e.subsequenceInfo = c.tensorflow.magenta.NoteSequence.SubsequenceInfo.fromObject(
                    t.subsequenceInfo
                  );
                }
                if (null != t.sequenceMetadata) {
                  if ("object" != typeof t.sequenceMetadata)
                    throw TypeError(
                      ".tensorflow.magenta.NoteSequence.sequenceMetadata: object expected"
                    );
                  e.sequenceMetadata = c.tensorflow.magenta.SequenceMetadata.fromObject(
                    t.sequenceMetadata
                  );
                }
                return e;
              }),
              (t.toObject = function (t, e) {
                e || (e = {});
                var n = {};
                if (
                  ((e.arrays || e.defaults) &&
                    ((n.timeSignatures = []),
                    (n.keySignatures = []),
                    (n.tempos = []),
                    (n.notes = []),
                    (n.pitchBends = []),
                    (n.controlChanges = []),
                    (n.partInfos = []),
                    (n.textAnnotations = []),
                    (n.sectionAnnotations = []),
                    (n.sectionGroups = [])),
                  e.defaults)
                ) {
                  if (
                    ((n.id = ""),
                    (n.filename = ""),
                    (n.collectionName = ""),
                    (n.ticksPerQuarter = 0),
                    (n.totalTime = 0),
                    (n.sourceInfo = null),
                    (n.quantizationInfo = null),
                    u.Long)
                  ) {
                    var r = new u.Long(0, 0, !1);
                    n.totalQuantizedSteps =
                      e.longs === String
                        ? r.toString()
                        : e.longs === Number
                        ? r.toNumber()
                        : r;
                  } else n.totalQuantizedSteps = e.longs === String ? "0" : 0;
                  (n.subsequenceInfo = null),
                    u.Long
                      ? ((r = new u.Long(0, 0, !1)),
                        (n.referenceNumber =
                          e.longs === String
                            ? r.toString()
                            : e.longs === Number
                            ? r.toNumber()
                            : r))
                      : (n.referenceNumber = e.longs === String ? "0" : 0),
                    (n.sequenceMetadata = null);
                }
                if (
                  (null != t.id && t.hasOwnProperty("id") && (n.id = t.id),
                  null != t.filename &&
                    t.hasOwnProperty("filename") &&
                    (n.filename = t.filename),
                  null != t.collectionName &&
                    t.hasOwnProperty("collectionName") &&
                    (n.collectionName = t.collectionName),
                  null != t.ticksPerQuarter &&
                    t.hasOwnProperty("ticksPerQuarter") &&
                    (n.ticksPerQuarter = t.ticksPerQuarter),
                  t.timeSignatures && t.timeSignatures.length)
                ) {
                  n.timeSignatures = [];
                  for (var i = 0; i < t.timeSignatures.length; ++i)
                    n.timeSignatures[
                      i
                    ] = c.tensorflow.magenta.NoteSequence.TimeSignature.toObject(
                      t.timeSignatures[i],
                      e
                    );
                }
                if (t.keySignatures && t.keySignatures.length)
                  for (
                    n.keySignatures = [], i = 0;
                    i < t.keySignatures.length;
                    ++i
                  )
                    n.keySignatures[
                      i
                    ] = c.tensorflow.magenta.NoteSequence.KeySignature.toObject(
                      t.keySignatures[i],
                      e
                    );
                if (t.tempos && t.tempos.length)
                  for (n.tempos = [], i = 0; i < t.tempos.length; ++i)
                    n.tempos[
                      i
                    ] = c.tensorflow.magenta.NoteSequence.Tempo.toObject(
                      t.tempos[i],
                      e
                    );
                if (t.notes && t.notes.length)
                  for (n.notes = [], i = 0; i < t.notes.length; ++i)
                    n.notes[
                      i
                    ] = c.tensorflow.magenta.NoteSequence.Note.toObject(
                      t.notes[i],
                      e
                    );
                if (
                  (null != t.totalTime &&
                    t.hasOwnProperty("totalTime") &&
                    (n.totalTime =
                      e.json && !isFinite(t.totalTime)
                        ? String(t.totalTime)
                        : t.totalTime),
                  t.pitchBends && t.pitchBends.length)
                )
                  for (n.pitchBends = [], i = 0; i < t.pitchBends.length; ++i)
                    n.pitchBends[
                      i
                    ] = c.tensorflow.magenta.NoteSequence.PitchBend.toObject(
                      t.pitchBends[i],
                      e
                    );
                if (t.controlChanges && t.controlChanges.length)
                  for (
                    n.controlChanges = [], i = 0;
                    i < t.controlChanges.length;
                    ++i
                  )
                    n.controlChanges[
                      i
                    ] = c.tensorflow.magenta.NoteSequence.ControlChange.toObject(
                      t.controlChanges[i],
                      e
                    );
                if (t.partInfos && t.partInfos.length)
                  for (n.partInfos = [], i = 0; i < t.partInfos.length; ++i)
                    n.partInfos[
                      i
                    ] = c.tensorflow.magenta.NoteSequence.PartInfo.toObject(
                      t.partInfos[i],
                      e
                    );
                if (
                  (null != t.sourceInfo &&
                    t.hasOwnProperty("sourceInfo") &&
                    (n.sourceInfo = c.tensorflow.magenta.NoteSequence.SourceInfo.toObject(
                      t.sourceInfo,
                      e
                    )),
                  t.textAnnotations && t.textAnnotations.length)
                )
                  for (
                    n.textAnnotations = [], i = 0;
                    i < t.textAnnotations.length;
                    ++i
                  )
                    n.textAnnotations[
                      i
                    ] = c.tensorflow.magenta.NoteSequence.TextAnnotation.toObject(
                      t.textAnnotations[i],
                      e
                    );
                if (
                  (null != t.quantizationInfo &&
                    t.hasOwnProperty("quantizationInfo") &&
                    (n.quantizationInfo = c.tensorflow.magenta.NoteSequence.QuantizationInfo.toObject(
                      t.quantizationInfo,
                      e
                    )),
                  null != t.totalQuantizedSteps &&
                    t.hasOwnProperty("totalQuantizedSteps") &&
                    ("number" == typeof t.totalQuantizedSteps
                      ? (n.totalQuantizedSteps =
                          e.longs === String
                            ? String(t.totalQuantizedSteps)
                            : t.totalQuantizedSteps)
                      : (n.totalQuantizedSteps =
                          e.longs === String
                            ? u.Long.prototype.toString.call(
                                t.totalQuantizedSteps
                              )
                            : e.longs === Number
                            ? new u.LongBits(
                                t.totalQuantizedSteps.low >>> 0,
                                t.totalQuantizedSteps.high >>> 0
                              ).toNumber()
                            : t.totalQuantizedSteps)),
                  null != t.subsequenceInfo &&
                    t.hasOwnProperty("subsequenceInfo") &&
                    (n.subsequenceInfo = c.tensorflow.magenta.NoteSequence.SubsequenceInfo.toObject(
                      t.subsequenceInfo,
                      e
                    )),
                  null != t.referenceNumber &&
                    t.hasOwnProperty("referenceNumber") &&
                    ("number" == typeof t.referenceNumber
                      ? (n.referenceNumber =
                          e.longs === String
                            ? String(t.referenceNumber)
                            : t.referenceNumber)
                      : (n.referenceNumber =
                          e.longs === String
                            ? u.Long.prototype.toString.call(t.referenceNumber)
                            : e.longs === Number
                            ? new u.LongBits(
                                t.referenceNumber.low >>> 0,
                                t.referenceNumber.high >>> 0
                              ).toNumber()
                            : t.referenceNumber)),
                  null != t.sequenceMetadata &&
                    t.hasOwnProperty("sequenceMetadata") &&
                    (n.sequenceMetadata = c.tensorflow.magenta.SequenceMetadata.toObject(
                      t.sequenceMetadata,
                      e
                    )),
                  t.sectionAnnotations && t.sectionAnnotations.length)
                )
                  for (
                    n.sectionAnnotations = [], i = 0;
                    i < t.sectionAnnotations.length;
                    ++i
                  )
                    n.sectionAnnotations[
                      i
                    ] = c.tensorflow.magenta.NoteSequence.SectionAnnotation.toObject(
                      t.sectionAnnotations[i],
                      e
                    );
                if (t.sectionGroups && t.sectionGroups.length)
                  for (
                    n.sectionGroups = [], i = 0;
                    i < t.sectionGroups.length;
                    ++i
                  )
                    n.sectionGroups[
                      i
                    ] = c.tensorflow.magenta.NoteSequence.SectionGroup.toObject(
                      t.sectionGroups[i],
                      e
                    );
                return n;
              }),
              (t.prototype.toJSON = function () {
                return this.constructor.toObject(this, o.util.toJSONOptions);
              }),
              (t.Note = (function () {
                function t(t) {
                  if (t)
                    for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                      null != t[e[n]] && (this[e[n]] = t[e[n]]);
                }
                return (
                  (t.prototype.pitch = 0),
                  (t.prototype.pitchName = 0),
                  (t.prototype.velocity = 0),
                  (t.prototype.startTime = 0),
                  (t.prototype.quantizedStartStep = u.Long
                    ? u.Long.fromBits(0, 0, !1)
                    : 0),
                  (t.prototype.endTime = 0),
                  (t.prototype.quantizedEndStep = u.Long
                    ? u.Long.fromBits(0, 0, !1)
                    : 0),
                  (t.prototype.numerator = 0),
                  (t.prototype.denominator = 0),
                  (t.prototype.instrument = 0),
                  (t.prototype.program = 0),
                  (t.prototype.isDrum = !1),
                  (t.prototype.part = 0),
                  (t.prototype.voice = 0),
                  (t.create = function (e) {
                    return new t(e);
                  }),
                  (t.encode = function (t, e) {
                    return (
                      e || (e = a.create()),
                      null != t.pitch &&
                        t.hasOwnProperty("pitch") &&
                        e.uint32(8).int32(t.pitch),
                      null != t.velocity &&
                        t.hasOwnProperty("velocity") &&
                        e.uint32(16).int32(t.velocity),
                      null != t.startTime &&
                        t.hasOwnProperty("startTime") &&
                        e.uint32(25).double(t.startTime),
                      null != t.endTime &&
                        t.hasOwnProperty("endTime") &&
                        e.uint32(33).double(t.endTime),
                      null != t.numerator &&
                        t.hasOwnProperty("numerator") &&
                        e.uint32(40).int32(t.numerator),
                      null != t.denominator &&
                        t.hasOwnProperty("denominator") &&
                        e.uint32(48).int32(t.denominator),
                      null != t.instrument &&
                        t.hasOwnProperty("instrument") &&
                        e.uint32(56).int32(t.instrument),
                      null != t.program &&
                        t.hasOwnProperty("program") &&
                        e.uint32(64).int32(t.program),
                      null != t.isDrum &&
                        t.hasOwnProperty("isDrum") &&
                        e.uint32(72).bool(t.isDrum),
                      null != t.part &&
                        t.hasOwnProperty("part") &&
                        e.uint32(80).int32(t.part),
                      null != t.pitchName &&
                        t.hasOwnProperty("pitchName") &&
                        e.uint32(88).int32(t.pitchName),
                      null != t.voice &&
                        t.hasOwnProperty("voice") &&
                        e.uint32(96).int32(t.voice),
                      null != t.quantizedStartStep &&
                        t.hasOwnProperty("quantizedStartStep") &&
                        e.uint32(104).int64(t.quantizedStartStep),
                      null != t.quantizedEndStep &&
                        t.hasOwnProperty("quantizedEndStep") &&
                        e.uint32(112).int64(t.quantizedEndStep),
                      e
                    );
                  }),
                  (t.encodeDelimited = function (t, e) {
                    return this.encode(t, e).ldelim();
                  }),
                  (t.decode = function (t, e) {
                    t instanceof s || (t = s.create(t));
                    for (
                      var n = void 0 === e ? t.len : t.pos + e,
                        r = new c.tensorflow.magenta.NoteSequence.Note();
                      t.pos < n;

                    ) {
                      var i = t.uint32();
                      switch (i >>> 3) {
                        case 1:
                          r.pitch = t.int32();
                          break;
                        case 11:
                          r.pitchName = t.int32();
                          break;
                        case 2:
                          r.velocity = t.int32();
                          break;
                        case 3:
                          r.startTime = t.double();
                          break;
                        case 13:
                          r.quantizedStartStep = u.Long
                            ? t.int64().toNumber()
                            : t.int64();
                          break;
                        case 4:
                          r.endTime = t.double();
                          break;
                        case 14:
                          r.quantizedEndStep = u.Long
                            ? t.int64().toNumber()
                            : t.int64();
                          break;
                        case 5:
                          r.numerator = t.int32();
                          break;
                        case 6:
                          r.denominator = t.int32();
                          break;
                        case 7:
                          r.instrument = t.int32();
                          break;
                        case 8:
                          r.program = t.int32();
                          break;
                        case 9:
                          r.isDrum = t.bool();
                          break;
                        case 10:
                          r.part = t.int32();
                          break;
                        case 12:
                          r.voice = t.int32();
                          break;
                        default:
                          t.skipType(7 & i);
                      }
                    }
                    return r;
                  }),
                  (t.decodeDelimited = function (t) {
                    return (
                      t instanceof s || (t = new s(t)),
                      this.decode(t, t.uint32())
                    );
                  }),
                  (t.verify = function (t) {
                    if ("object" != typeof t || null === t)
                      return "object expected";
                    if (
                      null != t.pitch &&
                      t.hasOwnProperty("pitch") &&
                      !u.isInteger(t.pitch)
                    )
                      return "pitch: integer expected";
                    if (null != t.pitchName && t.hasOwnProperty("pitchName"))
                      switch (t.pitchName) {
                        default:
                          return "pitchName: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                        case 16:
                        case 17:
                        case 18:
                        case 19:
                        case 20:
                        case 21:
                        case 22:
                        case 23:
                        case 24:
                        case 25:
                        case 26:
                        case 27:
                        case 28:
                        case 29:
                        case 30:
                        case 31:
                        case 32:
                        case 33:
                        case 34:
                        case 35:
                      }
                    return null != t.velocity &&
                      t.hasOwnProperty("velocity") &&
                      !u.isInteger(t.velocity)
                      ? "velocity: integer expected"
                      : null != t.startTime &&
                        t.hasOwnProperty("startTime") &&
                        "number" != typeof t.startTime
                      ? "startTime: number expected"
                      : null != t.quantizedStartStep &&
                        t.hasOwnProperty("quantizedStartStep") &&
                        !(
                          u.isInteger(t.quantizedStartStep) ||
                          (t.quantizedStartStep &&
                            u.isInteger(t.quantizedStartStep.low) &&
                            u.isInteger(t.quantizedStartStep.high))
                        )
                      ? "quantizedStartStep: integer|Long expected"
                      : null != t.endTime &&
                        t.hasOwnProperty("endTime") &&
                        "number" != typeof t.endTime
                      ? "endTime: number expected"
                      : null != t.quantizedEndStep &&
                        t.hasOwnProperty("quantizedEndStep") &&
                        !(
                          u.isInteger(t.quantizedEndStep) ||
                          (t.quantizedEndStep &&
                            u.isInteger(t.quantizedEndStep.low) &&
                            u.isInteger(t.quantizedEndStep.high))
                        )
                      ? "quantizedEndStep: integer|Long expected"
                      : null != t.numerator &&
                        t.hasOwnProperty("numerator") &&
                        !u.isInteger(t.numerator)
                      ? "numerator: integer expected"
                      : null != t.denominator &&
                        t.hasOwnProperty("denominator") &&
                        !u.isInteger(t.denominator)
                      ? "denominator: integer expected"
                      : null != t.instrument &&
                        t.hasOwnProperty("instrument") &&
                        !u.isInteger(t.instrument)
                      ? "instrument: integer expected"
                      : null != t.program &&
                        t.hasOwnProperty("program") &&
                        !u.isInteger(t.program)
                      ? "program: integer expected"
                      : null != t.isDrum &&
                        t.hasOwnProperty("isDrum") &&
                        "boolean" != typeof t.isDrum
                      ? "isDrum: boolean expected"
                      : null != t.part &&
                        t.hasOwnProperty("part") &&
                        !u.isInteger(t.part)
                      ? "part: integer expected"
                      : null != t.voice &&
                        t.hasOwnProperty("voice") &&
                        !u.isInteger(t.voice)
                      ? "voice: integer expected"
                      : null;
                  }),
                  (t.fromObject = function (t) {
                    if (t instanceof c.tensorflow.magenta.NoteSequence.Note)
                      return t;
                    var e = new c.tensorflow.magenta.NoteSequence.Note();
                    switch (
                      (null != t.pitch && (e.pitch = 0 | t.pitch), t.pitchName)
                    ) {
                      case "UNKNOWN_PITCH_NAME":
                      case 0:
                        e.pitchName = 0;
                        break;
                      case "F_FLAT_FLAT":
                      case 1:
                        e.pitchName = 1;
                        break;
                      case "C_FLAT_FLAT":
                      case 2:
                        e.pitchName = 2;
                        break;
                      case "G_FLAT_FLAT":
                      case 3:
                        e.pitchName = 3;
                        break;
                      case "D_FLAT_FLAT":
                      case 4:
                        e.pitchName = 4;
                        break;
                      case "A_FLAT_FLAT":
                      case 5:
                        e.pitchName = 5;
                        break;
                      case "E_FLAT_FLAT":
                      case 6:
                        e.pitchName = 6;
                        break;
                      case "B_FLAT_FLAT":
                      case 7:
                        e.pitchName = 7;
                        break;
                      case "F_FLAT":
                      case 8:
                        e.pitchName = 8;
                        break;
                      case "C_FLAT":
                      case 9:
                        e.pitchName = 9;
                        break;
                      case "G_FLAT":
                      case 10:
                        e.pitchName = 10;
                        break;
                      case "D_FLAT":
                      case 11:
                        e.pitchName = 11;
                        break;
                      case "A_FLAT":
                      case 12:
                        e.pitchName = 12;
                        break;
                      case "E_FLAT":
                      case 13:
                        e.pitchName = 13;
                        break;
                      case "B_FLAT":
                      case 14:
                        e.pitchName = 14;
                        break;
                      case "F":
                      case 15:
                        e.pitchName = 15;
                        break;
                      case "C":
                      case 16:
                        e.pitchName = 16;
                        break;
                      case "G":
                      case 17:
                        e.pitchName = 17;
                        break;
                      case "D":
                      case 18:
                        e.pitchName = 18;
                        break;
                      case "A":
                      case 19:
                        e.pitchName = 19;
                        break;
                      case "E":
                      case 20:
                        e.pitchName = 20;
                        break;
                      case "B":
                      case 21:
                        e.pitchName = 21;
                        break;
                      case "F_SHARP":
                      case 22:
                        e.pitchName = 22;
                        break;
                      case "C_SHARP":
                      case 23:
                        e.pitchName = 23;
                        break;
                      case "G_SHARP":
                      case 24:
                        e.pitchName = 24;
                        break;
                      case "D_SHARP":
                      case 25:
                        e.pitchName = 25;
                        break;
                      case "A_SHARP":
                      case 26:
                        e.pitchName = 26;
                        break;
                      case "E_SHARP":
                      case 27:
                        e.pitchName = 27;
                        break;
                      case "B_SHARP":
                      case 28:
                        e.pitchName = 28;
                        break;
                      case "F_SHARP_SHARP":
                      case 29:
                        e.pitchName = 29;
                        break;
                      case "C_SHARP_SHARP":
                      case 30:
                        e.pitchName = 30;
                        break;
                      case "G_SHARP_SHARP":
                      case 31:
                        e.pitchName = 31;
                        break;
                      case "D_SHARP_SHARP":
                      case 32:
                        e.pitchName = 32;
                        break;
                      case "A_SHARP_SHARP":
                      case 33:
                        e.pitchName = 33;
                        break;
                      case "E_SHARP_SHARP":
                      case 34:
                        e.pitchName = 34;
                        break;
                      case "B_SHARP_SHARP":
                      case 35:
                        e.pitchName = 35;
                    }
                    return (
                      null != t.velocity && (e.velocity = 0 | t.velocity),
                      null != t.startTime &&
                        (e.startTime = Number(t.startTime)),
                      null != t.quantizedStartStep &&
                        (u.Long
                          ? ((e.quantizedStartStep = u.Long.fromValue(
                              t.quantizedStartStep
                            )).unsigned = !1)
                          : "string" == typeof t.quantizedStartStep
                          ? (e.quantizedStartStep = parseInt(
                              t.quantizedStartStep,
                              10
                            ))
                          : "number" == typeof t.quantizedStartStep
                          ? (e.quantizedStartStep = t.quantizedStartStep)
                          : "object" == typeof t.quantizedStartStep &&
                            (e.quantizedStartStep = new u.LongBits(
                              t.quantizedStartStep.low >>> 0,
                              t.quantizedStartStep.high >>> 0
                            ).toNumber())),
                      null != t.endTime && (e.endTime = Number(t.endTime)),
                      null != t.quantizedEndStep &&
                        (u.Long
                          ? ((e.quantizedEndStep = u.Long.fromValue(
                              t.quantizedEndStep
                            )).unsigned = !1)
                          : "string" == typeof t.quantizedEndStep
                          ? (e.quantizedEndStep = parseInt(
                              t.quantizedEndStep,
                              10
                            ))
                          : "number" == typeof t.quantizedEndStep
                          ? (e.quantizedEndStep = t.quantizedEndStep)
                          : "object" == typeof t.quantizedEndStep &&
                            (e.quantizedEndStep = new u.LongBits(
                              t.quantizedEndStep.low >>> 0,
                              t.quantizedEndStep.high >>> 0
                            ).toNumber())),
                      null != t.numerator && (e.numerator = 0 | t.numerator),
                      null != t.denominator &&
                        (e.denominator = 0 | t.denominator),
                      null != t.instrument && (e.instrument = 0 | t.instrument),
                      null != t.program && (e.program = 0 | t.program),
                      null != t.isDrum && (e.isDrum = Boolean(t.isDrum)),
                      null != t.part && (e.part = 0 | t.part),
                      null != t.voice && (e.voice = 0 | t.voice),
                      e
                    );
                  }),
                  (t.toObject = function (t, e) {
                    e || (e = {});
                    var n = {};
                    if (e.defaults) {
                      if (
                        ((n.pitch = 0),
                        (n.velocity = 0),
                        (n.startTime = 0),
                        (n.endTime = 0),
                        (n.numerator = 0),
                        (n.denominator = 0),
                        (n.instrument = 0),
                        (n.program = 0),
                        (n.isDrum = !1),
                        (n.part = 0),
                        (n.pitchName =
                          e.enums === String ? "UNKNOWN_PITCH_NAME" : 0),
                        (n.voice = 0),
                        u.Long)
                      ) {
                        var r = new u.Long(0, 0, !1);
                        n.quantizedStartStep =
                          e.longs === String
                            ? r.toString()
                            : e.longs === Number
                            ? r.toNumber()
                            : r;
                      } else
                        n.quantizedStartStep = e.longs === String ? "0" : 0;
                      u.Long
                        ? ((r = new u.Long(0, 0, !1)),
                          (n.quantizedEndStep =
                            e.longs === String
                              ? r.toString()
                              : e.longs === Number
                              ? r.toNumber()
                              : r))
                        : (n.quantizedEndStep = e.longs === String ? "0" : 0);
                    }
                    return (
                      null != t.pitch &&
                        t.hasOwnProperty("pitch") &&
                        (n.pitch = t.pitch),
                      null != t.velocity &&
                        t.hasOwnProperty("velocity") &&
                        (n.velocity = t.velocity),
                      null != t.startTime &&
                        t.hasOwnProperty("startTime") &&
                        (n.startTime =
                          e.json && !isFinite(t.startTime)
                            ? String(t.startTime)
                            : t.startTime),
                      null != t.endTime &&
                        t.hasOwnProperty("endTime") &&
                        (n.endTime =
                          e.json && !isFinite(t.endTime)
                            ? String(t.endTime)
                            : t.endTime),
                      null != t.numerator &&
                        t.hasOwnProperty("numerator") &&
                        (n.numerator = t.numerator),
                      null != t.denominator &&
                        t.hasOwnProperty("denominator") &&
                        (n.denominator = t.denominator),
                      null != t.instrument &&
                        t.hasOwnProperty("instrument") &&
                        (n.instrument = t.instrument),
                      null != t.program &&
                        t.hasOwnProperty("program") &&
                        (n.program = t.program),
                      null != t.isDrum &&
                        t.hasOwnProperty("isDrum") &&
                        (n.isDrum = t.isDrum),
                      null != t.part &&
                        t.hasOwnProperty("part") &&
                        (n.part = t.part),
                      null != t.pitchName &&
                        t.hasOwnProperty("pitchName") &&
                        (n.pitchName =
                          e.enums === String
                            ? c.tensorflow.magenta.NoteSequence.PitchName[
                                t.pitchName
                              ]
                            : t.pitchName),
                      null != t.voice &&
                        t.hasOwnProperty("voice") &&
                        (n.voice = t.voice),
                      null != t.quantizedStartStep &&
                        t.hasOwnProperty("quantizedStartStep") &&
                        ("number" == typeof t.quantizedStartStep
                          ? (n.quantizedStartStep =
                              e.longs === String
                                ? String(t.quantizedStartStep)
                                : t.quantizedStartStep)
                          : (n.quantizedStartStep =
                              e.longs === String
                                ? u.Long.prototype.toString.call(
                                    t.quantizedStartStep
                                  )
                                : e.longs === Number
                                ? new u.LongBits(
                                    t.quantizedStartStep.low >>> 0,
                                    t.quantizedStartStep.high >>> 0
                                  ).toNumber()
                                : t.quantizedStartStep)),
                      null != t.quantizedEndStep &&
                        t.hasOwnProperty("quantizedEndStep") &&
                        ("number" == typeof t.quantizedEndStep
                          ? (n.quantizedEndStep =
                              e.longs === String
                                ? String(t.quantizedEndStep)
                                : t.quantizedEndStep)
                          : (n.quantizedEndStep =
                              e.longs === String
                                ? u.Long.prototype.toString.call(
                                    t.quantizedEndStep
                                  )
                                : e.longs === Number
                                ? new u.LongBits(
                                    t.quantizedEndStep.low >>> 0,
                                    t.quantizedEndStep.high >>> 0
                                  ).toNumber()
                                : t.quantizedEndStep)),
                      n
                    );
                  }),
                  (t.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      o.util.toJSONOptions
                    );
                  }),
                  t
                );
              })()),
              (t.PitchName =
                ((e = {}),
                ((n = Object.create(e))[(e[0] = "UNKNOWN_PITCH_NAME")] = 0),
                (n[(e[1] = "F_FLAT_FLAT")] = 1),
                (n[(e[2] = "C_FLAT_FLAT")] = 2),
                (n[(e[3] = "G_FLAT_FLAT")] = 3),
                (n[(e[4] = "D_FLAT_FLAT")] = 4),
                (n[(e[5] = "A_FLAT_FLAT")] = 5),
                (n[(e[6] = "E_FLAT_FLAT")] = 6),
                (n[(e[7] = "B_FLAT_FLAT")] = 7),
                (n[(e[8] = "F_FLAT")] = 8),
                (n[(e[9] = "C_FLAT")] = 9),
                (n[(e[10] = "G_FLAT")] = 10),
                (n[(e[11] = "D_FLAT")] = 11),
                (n[(e[12] = "A_FLAT")] = 12),
                (n[(e[13] = "E_FLAT")] = 13),
                (n[(e[14] = "B_FLAT")] = 14),
                (n[(e[15] = "F")] = 15),
                (n[(e[16] = "C")] = 16),
                (n[(e[17] = "G")] = 17),
                (n[(e[18] = "D")] = 18),
                (n[(e[19] = "A")] = 19),
                (n[(e[20] = "E")] = 20),
                (n[(e[21] = "B")] = 21),
                (n[(e[22] = "F_SHARP")] = 22),
                (n[(e[23] = "C_SHARP")] = 23),
                (n[(e[24] = "G_SHARP")] = 24),
                (n[(e[25] = "D_SHARP")] = 25),
                (n[(e[26] = "A_SHARP")] = 26),
                (n[(e[27] = "E_SHARP")] = 27),
                (n[(e[28] = "B_SHARP")] = 28),
                (n[(e[29] = "F_SHARP_SHARP")] = 29),
                (n[(e[30] = "C_SHARP_SHARP")] = 30),
                (n[(e[31] = "G_SHARP_SHARP")] = 31),
                (n[(e[32] = "D_SHARP_SHARP")] = 32),
                (n[(e[33] = "A_SHARP_SHARP")] = 33),
                (n[(e[34] = "E_SHARP_SHARP")] = 34),
                (n[(e[35] = "B_SHARP_SHARP")] = 35),
                n)),
              (t.TimeSignature = (function () {
                function t(t) {
                  if (t)
                    for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                      null != t[e[n]] && (this[e[n]] = t[e[n]]);
                }
                return (
                  (t.prototype.time = 0),
                  (t.prototype.numerator = 0),
                  (t.prototype.denominator = 0),
                  (t.create = function (e) {
                    return new t(e);
                  }),
                  (t.encode = function (t, e) {
                    return (
                      e || (e = a.create()),
                      null != t.time &&
                        t.hasOwnProperty("time") &&
                        e.uint32(9).double(t.time),
                      null != t.numerator &&
                        t.hasOwnProperty("numerator") &&
                        e.uint32(16).int32(t.numerator),
                      null != t.denominator &&
                        t.hasOwnProperty("denominator") &&
                        e.uint32(24).int32(t.denominator),
                      e
                    );
                  }),
                  (t.encodeDelimited = function (t, e) {
                    return this.encode(t, e).ldelim();
                  }),
                  (t.decode = function (t, e) {
                    t instanceof s || (t = s.create(t));
                    for (
                      var n = void 0 === e ? t.len : t.pos + e,
                        r = new c.tensorflow.magenta.NoteSequence.TimeSignature();
                      t.pos < n;

                    ) {
                      var i = t.uint32();
                      switch (i >>> 3) {
                        case 1:
                          r.time = t.double();
                          break;
                        case 2:
                          r.numerator = t.int32();
                          break;
                        case 3:
                          r.denominator = t.int32();
                          break;
                        default:
                          t.skipType(7 & i);
                      }
                    }
                    return r;
                  }),
                  (t.decodeDelimited = function (t) {
                    return (
                      t instanceof s || (t = new s(t)),
                      this.decode(t, t.uint32())
                    );
                  }),
                  (t.verify = function (t) {
                    return "object" != typeof t || null === t
                      ? "object expected"
                      : null != t.time &&
                        t.hasOwnProperty("time") &&
                        "number" != typeof t.time
                      ? "time: number expected"
                      : null != t.numerator &&
                        t.hasOwnProperty("numerator") &&
                        !u.isInteger(t.numerator)
                      ? "numerator: integer expected"
                      : null != t.denominator &&
                        t.hasOwnProperty("denominator") &&
                        !u.isInteger(t.denominator)
                      ? "denominator: integer expected"
                      : null;
                  }),
                  (t.fromObject = function (t) {
                    if (
                      t instanceof
                      c.tensorflow.magenta.NoteSequence.TimeSignature
                    )
                      return t;
                    var e = new c.tensorflow.magenta.NoteSequence.TimeSignature();
                    return (
                      null != t.time && (e.time = Number(t.time)),
                      null != t.numerator && (e.numerator = 0 | t.numerator),
                      null != t.denominator &&
                        (e.denominator = 0 | t.denominator),
                      e
                    );
                  }),
                  (t.toObject = function (t, e) {
                    e || (e = {});
                    var n = {};
                    return (
                      e.defaults &&
                        ((n.time = 0), (n.numerator = 0), (n.denominator = 0)),
                      null != t.time &&
                        t.hasOwnProperty("time") &&
                        (n.time =
                          e.json && !isFinite(t.time)
                            ? String(t.time)
                            : t.time),
                      null != t.numerator &&
                        t.hasOwnProperty("numerator") &&
                        (n.numerator = t.numerator),
                      null != t.denominator &&
                        t.hasOwnProperty("denominator") &&
                        (n.denominator = t.denominator),
                      n
                    );
                  }),
                  (t.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      o.util.toJSONOptions
                    );
                  }),
                  t
                );
              })()),
              (t.KeySignature = (function () {
                function t(t) {
                  if (t)
                    for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                      null != t[e[n]] && (this[e[n]] = t[e[n]]);
                }
                return (
                  (t.prototype.time = 0),
                  (t.prototype.key = 0),
                  (t.prototype.mode = 0),
                  (t.create = function (e) {
                    return new t(e);
                  }),
                  (t.encode = function (t, e) {
                    return (
                      e || (e = a.create()),
                      null != t.time &&
                        t.hasOwnProperty("time") &&
                        e.uint32(9).double(t.time),
                      null != t.key &&
                        t.hasOwnProperty("key") &&
                        e.uint32(16).int32(t.key),
                      null != t.mode &&
                        t.hasOwnProperty("mode") &&
                        e.uint32(24).int32(t.mode),
                      e
                    );
                  }),
                  (t.encodeDelimited = function (t, e) {
                    return this.encode(t, e).ldelim();
                  }),
                  (t.decode = function (t, e) {
                    t instanceof s || (t = s.create(t));
                    for (
                      var n = void 0 === e ? t.len : t.pos + e,
                        r = new c.tensorflow.magenta.NoteSequence.KeySignature();
                      t.pos < n;

                    ) {
                      var i = t.uint32();
                      switch (i >>> 3) {
                        case 1:
                          r.time = t.double();
                          break;
                        case 2:
                          r.key = t.int32();
                          break;
                        case 3:
                          r.mode = t.int32();
                          break;
                        default:
                          t.skipType(7 & i);
                      }
                    }
                    return r;
                  }),
                  (t.decodeDelimited = function (t) {
                    return (
                      t instanceof s || (t = new s(t)),
                      this.decode(t, t.uint32())
                    );
                  }),
                  (t.verify = function (t) {
                    if ("object" != typeof t || null === t)
                      return "object expected";
                    if (
                      null != t.time &&
                      t.hasOwnProperty("time") &&
                      "number" != typeof t.time
                    )
                      return "time: number expected";
                    if (null != t.key && t.hasOwnProperty("key"))
                      switch (t.key) {
                        default:
                          return "key: enum value expected";
                        case 0:
                        case 1:
                        case 1:
                        case 2:
                        case 3:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 6:
                        case 7:
                        case 8:
                        case 8:
                        case 9:
                        case 10:
                        case 10:
                        case 11:
                      }
                    if (null != t.mode && t.hasOwnProperty("mode"))
                      switch (t.mode) {
                        default:
                          return "mode: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                      }
                    return null;
                  }),
                  (t.fromObject = function (t) {
                    if (
                      t instanceof
                      c.tensorflow.magenta.NoteSequence.KeySignature
                    )
                      return t;
                    var e = new c.tensorflow.magenta.NoteSequence.KeySignature();
                    switch (
                      (null != t.time && (e.time = Number(t.time)), t.key)
                    ) {
                      case "C":
                      case 0:
                        e.key = 0;
                        break;
                      case "C_SHARP":
                      case 1:
                        e.key = 1;
                        break;
                      case "D_FLAT":
                      case 1:
                        e.key = 1;
                        break;
                      case "D":
                      case 2:
                        e.key = 2;
                        break;
                      case "D_SHARP":
                      case 3:
                        e.key = 3;
                        break;
                      case "E_FLAT":
                      case 3:
                        e.key = 3;
                        break;
                      case "E":
                      case 4:
                        e.key = 4;
                        break;
                      case "F":
                      case 5:
                        e.key = 5;
                        break;
                      case "F_SHARP":
                      case 6:
                        e.key = 6;
                        break;
                      case "G_FLAT":
                      case 6:
                        e.key = 6;
                        break;
                      case "G":
                      case 7:
                        e.key = 7;
                        break;
                      case "G_SHARP":
                      case 8:
                        e.key = 8;
                        break;
                      case "A_FLAT":
                      case 8:
                        e.key = 8;
                        break;
                      case "A":
                      case 9:
                        e.key = 9;
                        break;
                      case "A_SHARP":
                      case 10:
                        e.key = 10;
                        break;
                      case "B_FLAT":
                      case 10:
                        e.key = 10;
                        break;
                      case "B":
                      case 11:
                        e.key = 11;
                    }
                    switch (t.mode) {
                      case "MAJOR":
                      case 0:
                        e.mode = 0;
                        break;
                      case "MINOR":
                      case 1:
                        e.mode = 1;
                        break;
                      case "NOT_SPECIFIED":
                      case 2:
                        e.mode = 2;
                        break;
                      case "MIXOLYDIAN":
                      case 3:
                        e.mode = 3;
                        break;
                      case "DORIAN":
                      case 4:
                        e.mode = 4;
                        break;
                      case "PHRYGIAN":
                      case 5:
                        e.mode = 5;
                        break;
                      case "LYDIAN":
                      case 6:
                        e.mode = 6;
                        break;
                      case "LOCRIAN":
                      case 7:
                        e.mode = 7;
                    }
                    return e;
                  }),
                  (t.toObject = function (t, e) {
                    e || (e = {});
                    var n = {};
                    return (
                      e.defaults &&
                        ((n.time = 0),
                        (n.key = e.enums === String ? "C" : 0),
                        (n.mode = e.enums === String ? "MAJOR" : 0)),
                      null != t.time &&
                        t.hasOwnProperty("time") &&
                        (n.time =
                          e.json && !isFinite(t.time)
                            ? String(t.time)
                            : t.time),
                      null != t.key &&
                        t.hasOwnProperty("key") &&
                        (n.key =
                          e.enums === String
                            ? c.tensorflow.magenta.NoteSequence.KeySignature
                                .Key[t.key]
                            : t.key),
                      null != t.mode &&
                        t.hasOwnProperty("mode") &&
                        (n.mode =
                          e.enums === String
                            ? c.tensorflow.magenta.NoteSequence.KeySignature
                                .Mode[t.mode]
                            : t.mode),
                      n
                    );
                  }),
                  (t.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      o.util.toJSONOptions
                    );
                  }),
                  (t.Key = (function () {
                    var t = {},
                      e = Object.create(t);
                    return (
                      (e[(t[0] = "C")] = 0),
                      (e[(t[1] = "C_SHARP")] = 1),
                      (e.D_FLAT = 1),
                      (e[(t[2] = "D")] = 2),
                      (e[(t[3] = "D_SHARP")] = 3),
                      (e.E_FLAT = 3),
                      (e[(t[4] = "E")] = 4),
                      (e[(t[5] = "F")] = 5),
                      (e[(t[6] = "F_SHARP")] = 6),
                      (e.G_FLAT = 6),
                      (e[(t[7] = "G")] = 7),
                      (e[(t[8] = "G_SHARP")] = 8),
                      (e.A_FLAT = 8),
                      (e[(t[9] = "A")] = 9),
                      (e[(t[10] = "A_SHARP")] = 10),
                      (e.B_FLAT = 10),
                      (e[(t[11] = "B")] = 11),
                      e
                    );
                  })()),
                  (t.Mode = (function () {
                    var t = {},
                      e = Object.create(t);
                    return (
                      (e[(t[0] = "MAJOR")] = 0),
                      (e[(t[1] = "MINOR")] = 1),
                      (e[(t[2] = "NOT_SPECIFIED")] = 2),
                      (e[(t[3] = "MIXOLYDIAN")] = 3),
                      (e[(t[4] = "DORIAN")] = 4),
                      (e[(t[5] = "PHRYGIAN")] = 5),
                      (e[(t[6] = "LYDIAN")] = 6),
                      (e[(t[7] = "LOCRIAN")] = 7),
                      e
                    );
                  })()),
                  t
                );
              })()),
              (t.Tempo = (function () {
                function t(t) {
                  if (t)
                    for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                      null != t[e[n]] && (this[e[n]] = t[e[n]]);
                }
                return (
                  (t.prototype.time = 0),
                  (t.prototype.qpm = 0),
                  (t.create = function (e) {
                    return new t(e);
                  }),
                  (t.encode = function (t, e) {
                    return (
                      e || (e = a.create()),
                      null != t.time &&
                        t.hasOwnProperty("time") &&
                        e.uint32(9).double(t.time),
                      null != t.qpm &&
                        t.hasOwnProperty("qpm") &&
                        e.uint32(17).double(t.qpm),
                      e
                    );
                  }),
                  (t.encodeDelimited = function (t, e) {
                    return this.encode(t, e).ldelim();
                  }),
                  (t.decode = function (t, e) {
                    t instanceof s || (t = s.create(t));
                    for (
                      var n = void 0 === e ? t.len : t.pos + e,
                        r = new c.tensorflow.magenta.NoteSequence.Tempo();
                      t.pos < n;

                    ) {
                      var i = t.uint32();
                      switch (i >>> 3) {
                        case 1:
                          r.time = t.double();
                          break;
                        case 2:
                          r.qpm = t.double();
                          break;
                        default:
                          t.skipType(7 & i);
                      }
                    }
                    return r;
                  }),
                  (t.decodeDelimited = function (t) {
                    return (
                      t instanceof s || (t = new s(t)),
                      this.decode(t, t.uint32())
                    );
                  }),
                  (t.verify = function (t) {
                    return "object" != typeof t || null === t
                      ? "object expected"
                      : null != t.time &&
                        t.hasOwnProperty("time") &&
                        "number" != typeof t.time
                      ? "time: number expected"
                      : null != t.qpm &&
                        t.hasOwnProperty("qpm") &&
                        "number" != typeof t.qpm
                      ? "qpm: number expected"
                      : null;
                  }),
                  (t.fromObject = function (t) {
                    if (t instanceof c.tensorflow.magenta.NoteSequence.Tempo)
                      return t;
                    var e = new c.tensorflow.magenta.NoteSequence.Tempo();
                    return (
                      null != t.time && (e.time = Number(t.time)),
                      null != t.qpm && (e.qpm = Number(t.qpm)),
                      e
                    );
                  }),
                  (t.toObject = function (t, e) {
                    e || (e = {});
                    var n = {};
                    return (
                      e.defaults && ((n.time = 0), (n.qpm = 0)),
                      null != t.time &&
                        t.hasOwnProperty("time") &&
                        (n.time =
                          e.json && !isFinite(t.time)
                            ? String(t.time)
                            : t.time),
                      null != t.qpm &&
                        t.hasOwnProperty("qpm") &&
                        (n.qpm =
                          e.json && !isFinite(t.qpm) ? String(t.qpm) : t.qpm),
                      n
                    );
                  }),
                  (t.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      o.util.toJSONOptions
                    );
                  }),
                  t
                );
              })()),
              (t.PitchBend = (function () {
                function t(t) {
                  if (t)
                    for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                      null != t[e[n]] && (this[e[n]] = t[e[n]]);
                }
                return (
                  (t.prototype.time = 0),
                  (t.prototype.bend = 0),
                  (t.prototype.instrument = 0),
                  (t.prototype.program = 0),
                  (t.prototype.isDrum = !1),
                  (t.create = function (e) {
                    return new t(e);
                  }),
                  (t.encode = function (t, e) {
                    return (
                      e || (e = a.create()),
                      null != t.time &&
                        t.hasOwnProperty("time") &&
                        e.uint32(9).double(t.time),
                      null != t.bend &&
                        t.hasOwnProperty("bend") &&
                        e.uint32(16).int32(t.bend),
                      null != t.instrument &&
                        t.hasOwnProperty("instrument") &&
                        e.uint32(24).int32(t.instrument),
                      null != t.program &&
                        t.hasOwnProperty("program") &&
                        e.uint32(32).int32(t.program),
                      null != t.isDrum &&
                        t.hasOwnProperty("isDrum") &&
                        e.uint32(40).bool(t.isDrum),
                      e
                    );
                  }),
                  (t.encodeDelimited = function (t, e) {
                    return this.encode(t, e).ldelim();
                  }),
                  (t.decode = function (t, e) {
                    t instanceof s || (t = s.create(t));
                    for (
                      var n = void 0 === e ? t.len : t.pos + e,
                        r = new c.tensorflow.magenta.NoteSequence.PitchBend();
                      t.pos < n;

                    ) {
                      var i = t.uint32();
                      switch (i >>> 3) {
                        case 1:
                          r.time = t.double();
                          break;
                        case 2:
                          r.bend = t.int32();
                          break;
                        case 3:
                          r.instrument = t.int32();
                          break;
                        case 4:
                          r.program = t.int32();
                          break;
                        case 5:
                          r.isDrum = t.bool();
                          break;
                        default:
                          t.skipType(7 & i);
                      }
                    }
                    return r;
                  }),
                  (t.decodeDelimited = function (t) {
                    return (
                      t instanceof s || (t = new s(t)),
                      this.decode(t, t.uint32())
                    );
                  }),
                  (t.verify = function (t) {
                    return "object" != typeof t || null === t
                      ? "object expected"
                      : null != t.time &&
                        t.hasOwnProperty("time") &&
                        "number" != typeof t.time
                      ? "time: number expected"
                      : null != t.bend &&
                        t.hasOwnProperty("bend") &&
                        !u.isInteger(t.bend)
                      ? "bend: integer expected"
                      : null != t.instrument &&
                        t.hasOwnProperty("instrument") &&
                        !u.isInteger(t.instrument)
                      ? "instrument: integer expected"
                      : null != t.program &&
                        t.hasOwnProperty("program") &&
                        !u.isInteger(t.program)
                      ? "program: integer expected"
                      : null != t.isDrum &&
                        t.hasOwnProperty("isDrum") &&
                        "boolean" != typeof t.isDrum
                      ? "isDrum: boolean expected"
                      : null;
                  }),
                  (t.fromObject = function (t) {
                    if (
                      t instanceof c.tensorflow.magenta.NoteSequence.PitchBend
                    )
                      return t;
                    var e = new c.tensorflow.magenta.NoteSequence.PitchBend();
                    return (
                      null != t.time && (e.time = Number(t.time)),
                      null != t.bend && (e.bend = 0 | t.bend),
                      null != t.instrument && (e.instrument = 0 | t.instrument),
                      null != t.program && (e.program = 0 | t.program),
                      null != t.isDrum && (e.isDrum = Boolean(t.isDrum)),
                      e
                    );
                  }),
                  (t.toObject = function (t, e) {
                    e || (e = {});
                    var n = {};
                    return (
                      e.defaults &&
                        ((n.time = 0),
                        (n.bend = 0),
                        (n.instrument = 0),
                        (n.program = 0),
                        (n.isDrum = !1)),
                      null != t.time &&
                        t.hasOwnProperty("time") &&
                        (n.time =
                          e.json && !isFinite(t.time)
                            ? String(t.time)
                            : t.time),
                      null != t.bend &&
                        t.hasOwnProperty("bend") &&
                        (n.bend = t.bend),
                      null != t.instrument &&
                        t.hasOwnProperty("instrument") &&
                        (n.instrument = t.instrument),
                      null != t.program &&
                        t.hasOwnProperty("program") &&
                        (n.program = t.program),
                      null != t.isDrum &&
                        t.hasOwnProperty("isDrum") &&
                        (n.isDrum = t.isDrum),
                      n
                    );
                  }),
                  (t.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      o.util.toJSONOptions
                    );
                  }),
                  t
                );
              })()),
              (t.ControlChange = (function () {
                function t(t) {
                  if (t)
                    for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                      null != t[e[n]] && (this[e[n]] = t[e[n]]);
                }
                return (
                  (t.prototype.time = 0),
                  (t.prototype.quantizedStep = u.Long
                    ? u.Long.fromBits(0, 0, !1)
                    : 0),
                  (t.prototype.controlNumber = 0),
                  (t.prototype.controlValue = 0),
                  (t.prototype.instrument = 0),
                  (t.prototype.program = 0),
                  (t.prototype.isDrum = !1),
                  (t.create = function (e) {
                    return new t(e);
                  }),
                  (t.encode = function (t, e) {
                    return (
                      e || (e = a.create()),
                      null != t.time &&
                        t.hasOwnProperty("time") &&
                        e.uint32(9).double(t.time),
                      null != t.controlNumber &&
                        t.hasOwnProperty("controlNumber") &&
                        e.uint32(16).int32(t.controlNumber),
                      null != t.controlValue &&
                        t.hasOwnProperty("controlValue") &&
                        e.uint32(24).int32(t.controlValue),
                      null != t.instrument &&
                        t.hasOwnProperty("instrument") &&
                        e.uint32(32).int32(t.instrument),
                      null != t.program &&
                        t.hasOwnProperty("program") &&
                        e.uint32(40).int32(t.program),
                      null != t.isDrum &&
                        t.hasOwnProperty("isDrum") &&
                        e.uint32(48).bool(t.isDrum),
                      null != t.quantizedStep &&
                        t.hasOwnProperty("quantizedStep") &&
                        e.uint32(56).int64(t.quantizedStep),
                      e
                    );
                  }),
                  (t.encodeDelimited = function (t, e) {
                    return this.encode(t, e).ldelim();
                  }),
                  (t.decode = function (t, e) {
                    t instanceof s || (t = s.create(t));
                    for (
                      var n = void 0 === e ? t.len : t.pos + e,
                        r = new c.tensorflow.magenta.NoteSequence.ControlChange();
                      t.pos < n;

                    ) {
                      var i = t.uint32();
                      switch (i >>> 3) {
                        case 1:
                          r.time = t.double();
                          break;
                        case 7:
                          r.quantizedStep = u.Long
                            ? t.int64().toNumber()
                            : t.int64();
                          break;
                        case 2:
                          r.controlNumber = t.int32();
                          break;
                        case 3:
                          r.controlValue = t.int32();
                          break;
                        case 4:
                          r.instrument = t.int32();
                          break;
                        case 5:
                          r.program = t.int32();
                          break;
                        case 6:
                          r.isDrum = t.bool();
                          break;
                        default:
                          t.skipType(7 & i);
                      }
                    }
                    return r;
                  }),
                  (t.decodeDelimited = function (t) {
                    return (
                      t instanceof s || (t = new s(t)),
                      this.decode(t, t.uint32())
                    );
                  }),
                  (t.verify = function (t) {
                    return "object" != typeof t || null === t
                      ? "object expected"
                      : null != t.time &&
                        t.hasOwnProperty("time") &&
                        "number" != typeof t.time
                      ? "time: number expected"
                      : null != t.quantizedStep &&
                        t.hasOwnProperty("quantizedStep") &&
                        !(
                          u.isInteger(t.quantizedStep) ||
                          (t.quantizedStep &&
                            u.isInteger(t.quantizedStep.low) &&
                            u.isInteger(t.quantizedStep.high))
                        )
                      ? "quantizedStep: integer|Long expected"
                      : null != t.controlNumber &&
                        t.hasOwnProperty("controlNumber") &&
                        !u.isInteger(t.controlNumber)
                      ? "controlNumber: integer expected"
                      : null != t.controlValue &&
                        t.hasOwnProperty("controlValue") &&
                        !u.isInteger(t.controlValue)
                      ? "controlValue: integer expected"
                      : null != t.instrument &&
                        t.hasOwnProperty("instrument") &&
                        !u.isInteger(t.instrument)
                      ? "instrument: integer expected"
                      : null != t.program &&
                        t.hasOwnProperty("program") &&
                        !u.isInteger(t.program)
                      ? "program: integer expected"
                      : null != t.isDrum &&
                        t.hasOwnProperty("isDrum") &&
                        "boolean" != typeof t.isDrum
                      ? "isDrum: boolean expected"
                      : null;
                  }),
                  (t.fromObject = function (t) {
                    if (
                      t instanceof
                      c.tensorflow.magenta.NoteSequence.ControlChange
                    )
                      return t;
                    var e = new c.tensorflow.magenta.NoteSequence.ControlChange();
                    return (
                      null != t.time && (e.time = Number(t.time)),
                      null != t.quantizedStep &&
                        (u.Long
                          ? ((e.quantizedStep = u.Long.fromValue(
                              t.quantizedStep
                            )).unsigned = !1)
                          : "string" == typeof t.quantizedStep
                          ? (e.quantizedStep = parseInt(t.quantizedStep, 10))
                          : "number" == typeof t.quantizedStep
                          ? (e.quantizedStep = t.quantizedStep)
                          : "object" == typeof t.quantizedStep &&
                            (e.quantizedStep = new u.LongBits(
                              t.quantizedStep.low >>> 0,
                              t.quantizedStep.high >>> 0
                            ).toNumber())),
                      null != t.controlNumber &&
                        (e.controlNumber = 0 | t.controlNumber),
                      null != t.controlValue &&
                        (e.controlValue = 0 | t.controlValue),
                      null != t.instrument && (e.instrument = 0 | t.instrument),
                      null != t.program && (e.program = 0 | t.program),
                      null != t.isDrum && (e.isDrum = Boolean(t.isDrum)),
                      e
                    );
                  }),
                  (t.toObject = function (t, e) {
                    e || (e = {});
                    var n = {};
                    if (e.defaults)
                      if (
                        ((n.time = 0),
                        (n.controlNumber = 0),
                        (n.controlValue = 0),
                        (n.instrument = 0),
                        (n.program = 0),
                        (n.isDrum = !1),
                        u.Long)
                      ) {
                        var r = new u.Long(0, 0, !1);
                        n.quantizedStep =
                          e.longs === String
                            ? r.toString()
                            : e.longs === Number
                            ? r.toNumber()
                            : r;
                      } else n.quantizedStep = e.longs === String ? "0" : 0;
                    return (
                      null != t.time &&
                        t.hasOwnProperty("time") &&
                        (n.time =
                          e.json && !isFinite(t.time)
                            ? String(t.time)
                            : t.time),
                      null != t.controlNumber &&
                        t.hasOwnProperty("controlNumber") &&
                        (n.controlNumber = t.controlNumber),
                      null != t.controlValue &&
                        t.hasOwnProperty("controlValue") &&
                        (n.controlValue = t.controlValue),
                      null != t.instrument &&
                        t.hasOwnProperty("instrument") &&
                        (n.instrument = t.instrument),
                      null != t.program &&
                        t.hasOwnProperty("program") &&
                        (n.program = t.program),
                      null != t.isDrum &&
                        t.hasOwnProperty("isDrum") &&
                        (n.isDrum = t.isDrum),
                      null != t.quantizedStep &&
                        t.hasOwnProperty("quantizedStep") &&
                        ("number" == typeof t.quantizedStep
                          ? (n.quantizedStep =
                              e.longs === String
                                ? String(t.quantizedStep)
                                : t.quantizedStep)
                          : (n.quantizedStep =
                              e.longs === String
                                ? u.Long.prototype.toString.call(
                                    t.quantizedStep
                                  )
                                : e.longs === Number
                                ? new u.LongBits(
                                    t.quantizedStep.low >>> 0,
                                    t.quantizedStep.high >>> 0
                                  ).toNumber()
                                : t.quantizedStep)),
                      n
                    );
                  }),
                  (t.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      o.util.toJSONOptions
                    );
                  }),
                  t
                );
              })()),
              (t.PartInfo = (function () {
                function t(t) {
                  if (t)
                    for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                      null != t[e[n]] && (this[e[n]] = t[e[n]]);
                }
                return (
                  (t.prototype.part = 0),
                  (t.prototype.name = ""),
                  (t.create = function (e) {
                    return new t(e);
                  }),
                  (t.encode = function (t, e) {
                    return (
                      e || (e = a.create()),
                      null != t.part &&
                        t.hasOwnProperty("part") &&
                        e.uint32(8).int32(t.part),
                      null != t.name &&
                        t.hasOwnProperty("name") &&
                        e.uint32(18).string(t.name),
                      e
                    );
                  }),
                  (t.encodeDelimited = function (t, e) {
                    return this.encode(t, e).ldelim();
                  }),
                  (t.decode = function (t, e) {
                    t instanceof s || (t = s.create(t));
                    for (
                      var n = void 0 === e ? t.len : t.pos + e,
                        r = new c.tensorflow.magenta.NoteSequence.PartInfo();
                      t.pos < n;

                    ) {
                      var i = t.uint32();
                      switch (i >>> 3) {
                        case 1:
                          r.part = t.int32();
                          break;
                        case 2:
                          r.name = t.string();
                          break;
                        default:
                          t.skipType(7 & i);
                      }
                    }
                    return r;
                  }),
                  (t.decodeDelimited = function (t) {
                    return (
                      t instanceof s || (t = new s(t)),
                      this.decode(t, t.uint32())
                    );
                  }),
                  (t.verify = function (t) {
                    return "object" != typeof t || null === t
                      ? "object expected"
                      : null != t.part &&
                        t.hasOwnProperty("part") &&
                        !u.isInteger(t.part)
                      ? "part: integer expected"
                      : null != t.name &&
                        t.hasOwnProperty("name") &&
                        !u.isString(t.name)
                      ? "name: string expected"
                      : null;
                  }),
                  (t.fromObject = function (t) {
                    if (t instanceof c.tensorflow.magenta.NoteSequence.PartInfo)
                      return t;
                    var e = new c.tensorflow.magenta.NoteSequence.PartInfo();
                    return (
                      null != t.part && (e.part = 0 | t.part),
                      null != t.name && (e.name = String(t.name)),
                      e
                    );
                  }),
                  (t.toObject = function (t, e) {
                    e || (e = {});
                    var n = {};
                    return (
                      e.defaults && ((n.part = 0), (n.name = "")),
                      null != t.part &&
                        t.hasOwnProperty("part") &&
                        (n.part = t.part),
                      null != t.name &&
                        t.hasOwnProperty("name") &&
                        (n.name = t.name),
                      n
                    );
                  }),
                  (t.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      o.util.toJSONOptions
                    );
                  }),
                  t
                );
              })()),
              (t.SourceInfo = (function () {
                function t(t) {
                  if (t)
                    for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                      null != t[e[n]] && (this[e[n]] = t[e[n]]);
                }
                return (
                  (t.prototype.sourceType = 0),
                  (t.prototype.encodingType = 0),
                  (t.prototype.parser = 0),
                  (t.create = function (e) {
                    return new t(e);
                  }),
                  (t.encode = function (t, e) {
                    return (
                      e || (e = a.create()),
                      null != t.sourceType &&
                        t.hasOwnProperty("sourceType") &&
                        e.uint32(8).int32(t.sourceType),
                      null != t.encodingType &&
                        t.hasOwnProperty("encodingType") &&
                        e.uint32(16).int32(t.encodingType),
                      null != t.parser &&
                        t.hasOwnProperty("parser") &&
                        e.uint32(24).int32(t.parser),
                      e
                    );
                  }),
                  (t.encodeDelimited = function (t, e) {
                    return this.encode(t, e).ldelim();
                  }),
                  (t.decode = function (t, e) {
                    t instanceof s || (t = s.create(t));
                    for (
                      var n = void 0 === e ? t.len : t.pos + e,
                        r = new c.tensorflow.magenta.NoteSequence.SourceInfo();
                      t.pos < n;

                    ) {
                      var i = t.uint32();
                      switch (i >>> 3) {
                        case 1:
                          r.sourceType = t.int32();
                          break;
                        case 2:
                          r.encodingType = t.int32();
                          break;
                        case 3:
                          r.parser = t.int32();
                          break;
                        default:
                          t.skipType(7 & i);
                      }
                    }
                    return r;
                  }),
                  (t.decodeDelimited = function (t) {
                    return (
                      t instanceof s || (t = new s(t)),
                      this.decode(t, t.uint32())
                    );
                  }),
                  (t.verify = function (t) {
                    if ("object" != typeof t || null === t)
                      return "object expected";
                    if (null != t.sourceType && t.hasOwnProperty("sourceType"))
                      switch (t.sourceType) {
                        default:
                          return "sourceType: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                      }
                    if (
                      null != t.encodingType &&
                      t.hasOwnProperty("encodingType")
                    )
                      switch (t.encodingType) {
                        default:
                          return "encodingType: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                      }
                    if (null != t.parser && t.hasOwnProperty("parser"))
                      switch (t.parser) {
                        default:
                          return "parser: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                      }
                    return null;
                  }),
                  (t.fromObject = function (t) {
                    if (
                      t instanceof c.tensorflow.magenta.NoteSequence.SourceInfo
                    )
                      return t;
                    var e = new c.tensorflow.magenta.NoteSequence.SourceInfo();
                    switch (t.sourceType) {
                      case "UNKNOWN_SOURCE_TYPE":
                      case 0:
                        e.sourceType = 0;
                        break;
                      case "SCORE_BASED":
                      case 1:
                        e.sourceType = 1;
                        break;
                      case "PERFORMANCE_BASED":
                      case 2:
                        e.sourceType = 2;
                    }
                    switch (t.encodingType) {
                      case "UNKNOWN_ENCODING_TYPE":
                      case 0:
                        e.encodingType = 0;
                        break;
                      case "MUSIC_XML":
                      case 1:
                        e.encodingType = 1;
                        break;
                      case "ABC":
                      case 2:
                        e.encodingType = 2;
                        break;
                      case "MIDI":
                      case 3:
                        e.encodingType = 3;
                        break;
                      case "MUSICNET":
                      case 4:
                        e.encodingType = 4;
                    }
                    switch (t.parser) {
                      case "UNKNOWN_PARSER":
                      case 0:
                        e.parser = 0;
                        break;
                      case "MUSIC21":
                      case 1:
                        e.parser = 1;
                        break;
                      case "PRETTY_MIDI":
                      case 2:
                        e.parser = 2;
                        break;
                      case "MAGENTA_MUSIC_XML":
                      case 3:
                        e.parser = 3;
                        break;
                      case "MAGENTA_MUSICNET":
                      case 4:
                        e.parser = 4;
                        break;
                      case "MAGENTA_ABC":
                      case 5:
                        e.parser = 5;
                        break;
                      case "TONEJS_MIDI_CONVERT":
                      case 6:
                        e.parser = 6;
                    }
                    return e;
                  }),
                  (t.toObject = function (t, e) {
                    e || (e = {});
                    var n = {};
                    return (
                      e.defaults &&
                        ((n.sourceType =
                          e.enums === String ? "UNKNOWN_SOURCE_TYPE" : 0),
                        (n.encodingType =
                          e.enums === String ? "UNKNOWN_ENCODING_TYPE" : 0),
                        (n.parser = e.enums === String ? "UNKNOWN_PARSER" : 0)),
                      null != t.sourceType &&
                        t.hasOwnProperty("sourceType") &&
                        (n.sourceType =
                          e.enums === String
                            ? c.tensorflow.magenta.NoteSequence.SourceInfo
                                .SourceType[t.sourceType]
                            : t.sourceType),
                      null != t.encodingType &&
                        t.hasOwnProperty("encodingType") &&
                        (n.encodingType =
                          e.enums === String
                            ? c.tensorflow.magenta.NoteSequence.SourceInfo
                                .EncodingType[t.encodingType]
                            : t.encodingType),
                      null != t.parser &&
                        t.hasOwnProperty("parser") &&
                        (n.parser =
                          e.enums === String
                            ? c.tensorflow.magenta.NoteSequence.SourceInfo
                                .Parser[t.parser]
                            : t.parser),
                      n
                    );
                  }),
                  (t.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      o.util.toJSONOptions
                    );
                  }),
                  (t.SourceType = (function () {
                    var t = {},
                      e = Object.create(t);
                    return (
                      (e[(t[0] = "UNKNOWN_SOURCE_TYPE")] = 0),
                      (e[(t[1] = "SCORE_BASED")] = 1),
                      (e[(t[2] = "PERFORMANCE_BASED")] = 2),
                      e
                    );
                  })()),
                  (t.EncodingType = (function () {
                    var t = {},
                      e = Object.create(t);
                    return (
                      (e[(t[0] = "UNKNOWN_ENCODING_TYPE")] = 0),
                      (e[(t[1] = "MUSIC_XML")] = 1),
                      (e[(t[2] = "ABC")] = 2),
                      (e[(t[3] = "MIDI")] = 3),
                      (e[(t[4] = "MUSICNET")] = 4),
                      e
                    );
                  })()),
                  (t.Parser = (function () {
                    var t = {},
                      e = Object.create(t);
                    return (
                      (e[(t[0] = "UNKNOWN_PARSER")] = 0),
                      (e[(t[1] = "MUSIC21")] = 1),
                      (e[(t[2] = "PRETTY_MIDI")] = 2),
                      (e[(t[3] = "MAGENTA_MUSIC_XML")] = 3),
                      (e[(t[4] = "MAGENTA_MUSICNET")] = 4),
                      (e[(t[5] = "MAGENTA_ABC")] = 5),
                      (e[(t[6] = "TONEJS_MIDI_CONVERT")] = 6),
                      e
                    );
                  })()),
                  t
                );
              })()),
              (t.TextAnnotation = (function () {
                function t(t) {
                  if (t)
                    for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                      null != t[e[n]] && (this[e[n]] = t[e[n]]);
                }
                return (
                  (t.prototype.time = 0),
                  (t.prototype.quantizedStep = u.Long
                    ? u.Long.fromBits(0, 0, !1)
                    : 0),
                  (t.prototype.text = ""),
                  (t.prototype.annotationType = 0),
                  (t.create = function (e) {
                    return new t(e);
                  }),
                  (t.encode = function (t, e) {
                    return (
                      e || (e = a.create()),
                      null != t.time &&
                        t.hasOwnProperty("time") &&
                        e.uint32(9).double(t.time),
                      null != t.text &&
                        t.hasOwnProperty("text") &&
                        e.uint32(18).string(t.text),
                      null != t.annotationType &&
                        t.hasOwnProperty("annotationType") &&
                        e.uint32(24).int32(t.annotationType),
                      null != t.quantizedStep &&
                        t.hasOwnProperty("quantizedStep") &&
                        e.uint32(32).int64(t.quantizedStep),
                      e
                    );
                  }),
                  (t.encodeDelimited = function (t, e) {
                    return this.encode(t, e).ldelim();
                  }),
                  (t.decode = function (t, e) {
                    t instanceof s || (t = s.create(t));
                    for (
                      var n = void 0 === e ? t.len : t.pos + e,
                        r = new c.tensorflow.magenta.NoteSequence.TextAnnotation();
                      t.pos < n;

                    ) {
                      var i = t.uint32();
                      switch (i >>> 3) {
                        case 1:
                          r.time = t.double();
                          break;
                        case 4:
                          r.quantizedStep = u.Long
                            ? t.int64().toNumber()
                            : t.int64();
                          break;
                        case 2:
                          r.text = t.string();
                          break;
                        case 3:
                          r.annotationType = t.int32();
                          break;
                        default:
                          t.skipType(7 & i);
                      }
                    }
                    return r;
                  }),
                  (t.decodeDelimited = function (t) {
                    return (
                      t instanceof s || (t = new s(t)),
                      this.decode(t, t.uint32())
                    );
                  }),
                  (t.verify = function (t) {
                    if ("object" != typeof t || null === t)
                      return "object expected";
                    if (
                      null != t.time &&
                      t.hasOwnProperty("time") &&
                      "number" != typeof t.time
                    )
                      return "time: number expected";
                    if (
                      null != t.quantizedStep &&
                      t.hasOwnProperty("quantizedStep") &&
                      !(
                        u.isInteger(t.quantizedStep) ||
                        (t.quantizedStep &&
                          u.isInteger(t.quantizedStep.low) &&
                          u.isInteger(t.quantizedStep.high))
                      )
                    )
                      return "quantizedStep: integer|Long expected";
                    if (
                      null != t.text &&
                      t.hasOwnProperty("text") &&
                      !u.isString(t.text)
                    )
                      return "text: string expected";
                    if (
                      null != t.annotationType &&
                      t.hasOwnProperty("annotationType")
                    )
                      switch (t.annotationType) {
                        default:
                          return "annotationType: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                      }
                    return null;
                  }),
                  (t.fromObject = function (t) {
                    if (
                      t instanceof
                      c.tensorflow.magenta.NoteSequence.TextAnnotation
                    )
                      return t;
                    var e = new c.tensorflow.magenta.NoteSequence.TextAnnotation();
                    switch (
                      (null != t.time && (e.time = Number(t.time)),
                      null != t.quantizedStep &&
                        (u.Long
                          ? ((e.quantizedStep = u.Long.fromValue(
                              t.quantizedStep
                            )).unsigned = !1)
                          : "string" == typeof t.quantizedStep
                          ? (e.quantizedStep = parseInt(t.quantizedStep, 10))
                          : "number" == typeof t.quantizedStep
                          ? (e.quantizedStep = t.quantizedStep)
                          : "object" == typeof t.quantizedStep &&
                            (e.quantizedStep = new u.LongBits(
                              t.quantizedStep.low >>> 0,
                              t.quantizedStep.high >>> 0
                            ).toNumber())),
                      null != t.text && (e.text = String(t.text)),
                      t.annotationType)
                    ) {
                      case "UNKNOWN":
                      case 0:
                        e.annotationType = 0;
                        break;
                      case "CHORD_SYMBOL":
                      case 1:
                        e.annotationType = 1;
                        break;
                      case "BEAT":
                      case 2:
                        e.annotationType = 2;
                    }
                    return e;
                  }),
                  (t.toObject = function (t, e) {
                    e || (e = {});
                    var n = {};
                    if (e.defaults)
                      if (
                        ((n.time = 0),
                        (n.text = ""),
                        (n.annotationType = e.enums === String ? "UNKNOWN" : 0),
                        u.Long)
                      ) {
                        var r = new u.Long(0, 0, !1);
                        n.quantizedStep =
                          e.longs === String
                            ? r.toString()
                            : e.longs === Number
                            ? r.toNumber()
                            : r;
                      } else n.quantizedStep = e.longs === String ? "0" : 0;
                    return (
                      null != t.time &&
                        t.hasOwnProperty("time") &&
                        (n.time =
                          e.json && !isFinite(t.time)
                            ? String(t.time)
                            : t.time),
                      null != t.text &&
                        t.hasOwnProperty("text") &&
                        (n.text = t.text),
                      null != t.annotationType &&
                        t.hasOwnProperty("annotationType") &&
                        (n.annotationType =
                          e.enums === String
                            ? c.tensorflow.magenta.NoteSequence.TextAnnotation
                                .TextAnnotationType[t.annotationType]
                            : t.annotationType),
                      null != t.quantizedStep &&
                        t.hasOwnProperty("quantizedStep") &&
                        ("number" == typeof t.quantizedStep
                          ? (n.quantizedStep =
                              e.longs === String
                                ? String(t.quantizedStep)
                                : t.quantizedStep)
                          : (n.quantizedStep =
                              e.longs === String
                                ? u.Long.prototype.toString.call(
                                    t.quantizedStep
                                  )
                                : e.longs === Number
                                ? new u.LongBits(
                                    t.quantizedStep.low >>> 0,
                                    t.quantizedStep.high >>> 0
                                  ).toNumber()
                                : t.quantizedStep)),
                      n
                    );
                  }),
                  (t.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      o.util.toJSONOptions
                    );
                  }),
                  (t.TextAnnotationType = (function () {
                    var t = {},
                      e = Object.create(t);
                    return (
                      (e[(t[0] = "UNKNOWN")] = 0),
                      (e[(t[1] = "CHORD_SYMBOL")] = 1),
                      (e[(t[2] = "BEAT")] = 2),
                      e
                    );
                  })()),
                  t
                );
              })()),
              (t.QuantizationInfo = (function () {
                function t(t) {
                  if (t)
                    for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                      null != t[e[n]] && (this[e[n]] = t[e[n]]);
                }
                var e;
                return (
                  (t.prototype.stepsPerQuarter = 0),
                  (t.prototype.stepsPerSecond = 0),
                  Object.defineProperty(t.prototype, "resolution", {
                    get: u.oneOfGetter(
                      (e = ["stepsPerQuarter", "stepsPerSecond"])
                    ),
                    set: u.oneOfSetter(e),
                  }),
                  (t.create = function (e) {
                    return new t(e);
                  }),
                  (t.encode = function (t, e) {
                    return (
                      e || (e = a.create()),
                      null != t.stepsPerQuarter &&
                        t.hasOwnProperty("stepsPerQuarter") &&
                        e.uint32(8).int32(t.stepsPerQuarter),
                      null != t.stepsPerSecond &&
                        t.hasOwnProperty("stepsPerSecond") &&
                        e.uint32(16).int32(t.stepsPerSecond),
                      e
                    );
                  }),
                  (t.encodeDelimited = function (t, e) {
                    return this.encode(t, e).ldelim();
                  }),
                  (t.decode = function (t, e) {
                    t instanceof s || (t = s.create(t));
                    for (
                      var n = void 0 === e ? t.len : t.pos + e,
                        r = new c.tensorflow.magenta.NoteSequence.QuantizationInfo();
                      t.pos < n;

                    ) {
                      var i = t.uint32();
                      switch (i >>> 3) {
                        case 1:
                          r.stepsPerQuarter = t.int32();
                          break;
                        case 2:
                          r.stepsPerSecond = t.int32();
                          break;
                        default:
                          t.skipType(7 & i);
                      }
                    }
                    return r;
                  }),
                  (t.decodeDelimited = function (t) {
                    return (
                      t instanceof s || (t = new s(t)),
                      this.decode(t, t.uint32())
                    );
                  }),
                  (t.verify = function (t) {
                    if ("object" != typeof t || null === t)
                      return "object expected";
                    var e = {};
                    if (
                      null != t.stepsPerQuarter &&
                      t.hasOwnProperty("stepsPerQuarter") &&
                      ((e.resolution = 1), !u.isInteger(t.stepsPerQuarter))
                    )
                      return "stepsPerQuarter: integer expected";
                    if (
                      null != t.stepsPerSecond &&
                      t.hasOwnProperty("stepsPerSecond")
                    ) {
                      if (1 === e.resolution)
                        return "resolution: multiple values";
                      if (((e.resolution = 1), !u.isInteger(t.stepsPerSecond)))
                        return "stepsPerSecond: integer expected";
                    }
                    return null;
                  }),
                  (t.fromObject = function (t) {
                    if (
                      t instanceof
                      c.tensorflow.magenta.NoteSequence.QuantizationInfo
                    )
                      return t;
                    var e = new c.tensorflow.magenta.NoteSequence.QuantizationInfo();
                    return (
                      null != t.stepsPerQuarter &&
                        (e.stepsPerQuarter = 0 | t.stepsPerQuarter),
                      null != t.stepsPerSecond &&
                        (e.stepsPerSecond = 0 | t.stepsPerSecond),
                      e
                    );
                  }),
                  (t.toObject = function (t, e) {
                    e || (e = {});
                    var n = {};
                    return (
                      null != t.stepsPerQuarter &&
                        t.hasOwnProperty("stepsPerQuarter") &&
                        ((n.stepsPerQuarter = t.stepsPerQuarter),
                        e.oneofs && (n.resolution = "stepsPerQuarter")),
                      null != t.stepsPerSecond &&
                        t.hasOwnProperty("stepsPerSecond") &&
                        ((n.stepsPerSecond = t.stepsPerSecond),
                        e.oneofs && (n.resolution = "stepsPerSecond")),
                      n
                    );
                  }),
                  (t.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      o.util.toJSONOptions
                    );
                  }),
                  t
                );
              })()),
              (t.SubsequenceInfo = (function () {
                function t(t) {
                  if (t)
                    for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                      null != t[e[n]] && (this[e[n]] = t[e[n]]);
                }
                return (
                  (t.prototype.startTimeOffset = 0),
                  (t.prototype.endTimeOffset = 0),
                  (t.create = function (e) {
                    return new t(e);
                  }),
                  (t.encode = function (t, e) {
                    return (
                      e || (e = a.create()),
                      null != t.startTimeOffset &&
                        t.hasOwnProperty("startTimeOffset") &&
                        e.uint32(9).double(t.startTimeOffset),
                      null != t.endTimeOffset &&
                        t.hasOwnProperty("endTimeOffset") &&
                        e.uint32(17).double(t.endTimeOffset),
                      e
                    );
                  }),
                  (t.encodeDelimited = function (t, e) {
                    return this.encode(t, e).ldelim();
                  }),
                  (t.decode = function (t, e) {
                    t instanceof s || (t = s.create(t));
                    for (
                      var n = void 0 === e ? t.len : t.pos + e,
                        r = new c.tensorflow.magenta.NoteSequence.SubsequenceInfo();
                      t.pos < n;

                    ) {
                      var i = t.uint32();
                      switch (i >>> 3) {
                        case 1:
                          r.startTimeOffset = t.double();
                          break;
                        case 2:
                          r.endTimeOffset = t.double();
                          break;
                        default:
                          t.skipType(7 & i);
                      }
                    }
                    return r;
                  }),
                  (t.decodeDelimited = function (t) {
                    return (
                      t instanceof s || (t = new s(t)),
                      this.decode(t, t.uint32())
                    );
                  }),
                  (t.verify = function (t) {
                    return "object" != typeof t || null === t
                      ? "object expected"
                      : null != t.startTimeOffset &&
                        t.hasOwnProperty("startTimeOffset") &&
                        "number" != typeof t.startTimeOffset
                      ? "startTimeOffset: number expected"
                      : null != t.endTimeOffset &&
                        t.hasOwnProperty("endTimeOffset") &&
                        "number" != typeof t.endTimeOffset
                      ? "endTimeOffset: number expected"
                      : null;
                  }),
                  (t.fromObject = function (t) {
                    if (
                      t instanceof
                      c.tensorflow.magenta.NoteSequence.SubsequenceInfo
                    )
                      return t;
                    var e = new c.tensorflow.magenta.NoteSequence.SubsequenceInfo();
                    return (
                      null != t.startTimeOffset &&
                        (e.startTimeOffset = Number(t.startTimeOffset)),
                      null != t.endTimeOffset &&
                        (e.endTimeOffset = Number(t.endTimeOffset)),
                      e
                    );
                  }),
                  (t.toObject = function (t, e) {
                    e || (e = {});
                    var n = {};
                    return (
                      e.defaults &&
                        ((n.startTimeOffset = 0), (n.endTimeOffset = 0)),
                      null != t.startTimeOffset &&
                        t.hasOwnProperty("startTimeOffset") &&
                        (n.startTimeOffset =
                          e.json && !isFinite(t.startTimeOffset)
                            ? String(t.startTimeOffset)
                            : t.startTimeOffset),
                      null != t.endTimeOffset &&
                        t.hasOwnProperty("endTimeOffset") &&
                        (n.endTimeOffset =
                          e.json && !isFinite(t.endTimeOffset)
                            ? String(t.endTimeOffset)
                            : t.endTimeOffset),
                      n
                    );
                  }),
                  (t.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      o.util.toJSONOptions
                    );
                  }),
                  t
                );
              })()),
              (t.SectionAnnotation = (function () {
                function t(t) {
                  if (t)
                    for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                      null != t[e[n]] && (this[e[n]] = t[e[n]]);
                }
                return (
                  (t.prototype.time = 0),
                  (t.prototype.sectionId = u.Long
                    ? u.Long.fromBits(0, 0, !1)
                    : 0),
                  (t.create = function (e) {
                    return new t(e);
                  }),
                  (t.encode = function (t, e) {
                    return (
                      e || (e = a.create()),
                      null != t.time &&
                        t.hasOwnProperty("time") &&
                        e.uint32(9).double(t.time),
                      null != t.sectionId &&
                        t.hasOwnProperty("sectionId") &&
                        e.uint32(32).int64(t.sectionId),
                      e
                    );
                  }),
                  (t.encodeDelimited = function (t, e) {
                    return this.encode(t, e).ldelim();
                  }),
                  (t.decode = function (t, e) {
                    t instanceof s || (t = s.create(t));
                    for (
                      var n = void 0 === e ? t.len : t.pos + e,
                        r = new c.tensorflow.magenta.NoteSequence.SectionAnnotation();
                      t.pos < n;

                    ) {
                      var i = t.uint32();
                      switch (i >>> 3) {
                        case 1:
                          r.time = t.double();
                          break;
                        case 4:
                          r.sectionId = u.Long
                            ? t.int64().toNumber()
                            : t.int64();
                          break;
                        default:
                          t.skipType(7 & i);
                      }
                    }
                    return r;
                  }),
                  (t.decodeDelimited = function (t) {
                    return (
                      t instanceof s || (t = new s(t)),
                      this.decode(t, t.uint32())
                    );
                  }),
                  (t.verify = function (t) {
                    return "object" != typeof t || null === t
                      ? "object expected"
                      : null != t.time &&
                        t.hasOwnProperty("time") &&
                        "number" != typeof t.time
                      ? "time: number expected"
                      : null != t.sectionId &&
                        t.hasOwnProperty("sectionId") &&
                        !(
                          u.isInteger(t.sectionId) ||
                          (t.sectionId &&
                            u.isInteger(t.sectionId.low) &&
                            u.isInteger(t.sectionId.high))
                        )
                      ? "sectionId: integer|Long expected"
                      : null;
                  }),
                  (t.fromObject = function (t) {
                    if (
                      t instanceof
                      c.tensorflow.magenta.NoteSequence.SectionAnnotation
                    )
                      return t;
                    var e = new c.tensorflow.magenta.NoteSequence.SectionAnnotation();
                    return (
                      null != t.time && (e.time = Number(t.time)),
                      null != t.sectionId &&
                        (u.Long
                          ? ((e.sectionId = u.Long.fromValue(
                              t.sectionId
                            )).unsigned = !1)
                          : "string" == typeof t.sectionId
                          ? (e.sectionId = parseInt(t.sectionId, 10))
                          : "number" == typeof t.sectionId
                          ? (e.sectionId = t.sectionId)
                          : "object" == typeof t.sectionId &&
                            (e.sectionId = new u.LongBits(
                              t.sectionId.low >>> 0,
                              t.sectionId.high >>> 0
                            ).toNumber())),
                      e
                    );
                  }),
                  (t.toObject = function (t, e) {
                    e || (e = {});
                    var n = {};
                    if (e.defaults)
                      if (((n.time = 0), u.Long)) {
                        var r = new u.Long(0, 0, !1);
                        n.sectionId =
                          e.longs === String
                            ? r.toString()
                            : e.longs === Number
                            ? r.toNumber()
                            : r;
                      } else n.sectionId = e.longs === String ? "0" : 0;
                    return (
                      null != t.time &&
                        t.hasOwnProperty("time") &&
                        (n.time =
                          e.json && !isFinite(t.time)
                            ? String(t.time)
                            : t.time),
                      null != t.sectionId &&
                        t.hasOwnProperty("sectionId") &&
                        ("number" == typeof t.sectionId
                          ? (n.sectionId =
                              e.longs === String
                                ? String(t.sectionId)
                                : t.sectionId)
                          : (n.sectionId =
                              e.longs === String
                                ? u.Long.prototype.toString.call(t.sectionId)
                                : e.longs === Number
                                ? new u.LongBits(
                                    t.sectionId.low >>> 0,
                                    t.sectionId.high >>> 0
                                  ).toNumber()
                                : t.sectionId)),
                      n
                    );
                  }),
                  (t.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      o.util.toJSONOptions
                    );
                  }),
                  t
                );
              })()),
              (t.Section = (function () {
                function t(t) {
                  if (t)
                    for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                      null != t[e[n]] && (this[e[n]] = t[e[n]]);
                }
                var e;
                return (
                  (t.prototype.sectionId = u.Long
                    ? u.Long.fromBits(0, 0, !1)
                    : 0),
                  (t.prototype.sectionGroup = null),
                  Object.defineProperty(t.prototype, "sectionType", {
                    get: u.oneOfGetter((e = ["sectionId", "sectionGroup"])),
                    set: u.oneOfSetter(e),
                  }),
                  (t.create = function (e) {
                    return new t(e);
                  }),
                  (t.encode = function (t, e) {
                    return (
                      e || (e = a.create()),
                      null != t.sectionId &&
                        t.hasOwnProperty("sectionId") &&
                        e.uint32(8).int64(t.sectionId),
                      null != t.sectionGroup &&
                        t.hasOwnProperty("sectionGroup") &&
                        c.tensorflow.magenta.NoteSequence.SectionGroup.encode(
                          t.sectionGroup,
                          e.uint32(18).fork()
                        ).ldelim(),
                      e
                    );
                  }),
                  (t.encodeDelimited = function (t, e) {
                    return this.encode(t, e).ldelim();
                  }),
                  (t.decode = function (t, e) {
                    t instanceof s || (t = s.create(t));
                    for (
                      var n = void 0 === e ? t.len : t.pos + e,
                        r = new c.tensorflow.magenta.NoteSequence.Section();
                      t.pos < n;

                    ) {
                      var i = t.uint32();
                      switch (i >>> 3) {
                        case 1:
                          r.sectionId = u.Long
                            ? t.int64().toNumber()
                            : t.int64();
                          break;
                        case 2:
                          r.sectionGroup = c.tensorflow.magenta.NoteSequence.SectionGroup.decode(
                            t,
                            t.uint32()
                          );
                          break;
                        default:
                          t.skipType(7 & i);
                      }
                    }
                    return r;
                  }),
                  (t.decodeDelimited = function (t) {
                    return (
                      t instanceof s || (t = new s(t)),
                      this.decode(t, t.uint32())
                    );
                  }),
                  (t.verify = function (t) {
                    if ("object" != typeof t || null === t)
                      return "object expected";
                    var e = {};
                    if (
                      null != t.sectionId &&
                      t.hasOwnProperty("sectionId") &&
                      ((e.sectionType = 1),
                      !(
                        u.isInteger(t.sectionId) ||
                        (t.sectionId &&
                          u.isInteger(t.sectionId.low) &&
                          u.isInteger(t.sectionId.high))
                      ))
                    )
                      return "sectionId: integer|Long expected";
                    if (
                      null != t.sectionGroup &&
                      t.hasOwnProperty("sectionGroup")
                    ) {
                      if (1 === e.sectionType)
                        return "sectionType: multiple values";
                      e.sectionType = 1;
                      var n = c.tensorflow.magenta.NoteSequence.SectionGroup.verify(
                        t.sectionGroup
                      );
                      if (n) return "sectionGroup." + n;
                    }
                    return null;
                  }),
                  (t.fromObject = function (t) {
                    if (t instanceof c.tensorflow.magenta.NoteSequence.Section)
                      return t;
                    var e = new c.tensorflow.magenta.NoteSequence.Section();
                    if (
                      (null != t.sectionId &&
                        (u.Long
                          ? ((e.sectionId = u.Long.fromValue(
                              t.sectionId
                            )).unsigned = !1)
                          : "string" == typeof t.sectionId
                          ? (e.sectionId = parseInt(t.sectionId, 10))
                          : "number" == typeof t.sectionId
                          ? (e.sectionId = t.sectionId)
                          : "object" == typeof t.sectionId &&
                            (e.sectionId = new u.LongBits(
                              t.sectionId.low >>> 0,
                              t.sectionId.high >>> 0
                            ).toNumber())),
                      null != t.sectionGroup)
                    ) {
                      if ("object" != typeof t.sectionGroup)
                        throw TypeError(
                          ".tensorflow.magenta.NoteSequence.Section.sectionGroup: object expected"
                        );
                      e.sectionGroup = c.tensorflow.magenta.NoteSequence.SectionGroup.fromObject(
                        t.sectionGroup
                      );
                    }
                    return e;
                  }),
                  (t.toObject = function (t, e) {
                    e || (e = {});
                    var n = {};
                    return (
                      null != t.sectionId &&
                        t.hasOwnProperty("sectionId") &&
                        ("number" == typeof t.sectionId
                          ? (n.sectionId =
                              e.longs === String
                                ? String(t.sectionId)
                                : t.sectionId)
                          : (n.sectionId =
                              e.longs === String
                                ? u.Long.prototype.toString.call(t.sectionId)
                                : e.longs === Number
                                ? new u.LongBits(
                                    t.sectionId.low >>> 0,
                                    t.sectionId.high >>> 0
                                  ).toNumber()
                                : t.sectionId),
                        e.oneofs && (n.sectionType = "sectionId")),
                      null != t.sectionGroup &&
                        t.hasOwnProperty("sectionGroup") &&
                        ((n.sectionGroup = c.tensorflow.magenta.NoteSequence.SectionGroup.toObject(
                          t.sectionGroup,
                          e
                        )),
                        e.oneofs && (n.sectionType = "sectionGroup")),
                      n
                    );
                  }),
                  (t.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      o.util.toJSONOptions
                    );
                  }),
                  t
                );
              })()),
              (t.SectionGroup = (function () {
                function t(t) {
                  if (((this.sections = []), t))
                    for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                      null != t[e[n]] && (this[e[n]] = t[e[n]]);
                }
                return (
                  (t.prototype.sections = u.emptyArray),
                  (t.prototype.numTimes = 0),
                  (t.create = function (e) {
                    return new t(e);
                  }),
                  (t.encode = function (t, e) {
                    if (
                      (e || (e = a.create()),
                      null != t.sections && t.sections.length)
                    )
                      for (var n = 0; n < t.sections.length; ++n)
                        c.tensorflow.magenta.NoteSequence.Section.encode(
                          t.sections[n],
                          e.uint32(10).fork()
                        ).ldelim();
                    return (
                      null != t.numTimes &&
                        t.hasOwnProperty("numTimes") &&
                        e.uint32(16).int32(t.numTimes),
                      e
                    );
                  }),
                  (t.encodeDelimited = function (t, e) {
                    return this.encode(t, e).ldelim();
                  }),
                  (t.decode = function (t, e) {
                    t instanceof s || (t = s.create(t));
                    for (
                      var n = void 0 === e ? t.len : t.pos + e,
                        r = new c.tensorflow.magenta.NoteSequence.SectionGroup();
                      t.pos < n;

                    ) {
                      var i = t.uint32();
                      switch (i >>> 3) {
                        case 1:
                          (r.sections && r.sections.length) ||
                            (r.sections = []),
                            r.sections.push(
                              c.tensorflow.magenta.NoteSequence.Section.decode(
                                t,
                                t.uint32()
                              )
                            );
                          break;
                        case 2:
                          r.numTimes = t.int32();
                          break;
                        default:
                          t.skipType(7 & i);
                      }
                    }
                    return r;
                  }),
                  (t.decodeDelimited = function (t) {
                    return (
                      t instanceof s || (t = new s(t)),
                      this.decode(t, t.uint32())
                    );
                  }),
                  (t.verify = function (t) {
                    if ("object" != typeof t || null === t)
                      return "object expected";
                    if (null != t.sections && t.hasOwnProperty("sections")) {
                      if (!Array.isArray(t.sections))
                        return "sections: array expected";
                      for (var e = 0; e < t.sections.length; ++e) {
                        var n = c.tensorflow.magenta.NoteSequence.Section.verify(
                          t.sections[e]
                        );
                        if (n) return "sections." + n;
                      }
                    }
                    return null != t.numTimes &&
                      t.hasOwnProperty("numTimes") &&
                      !u.isInteger(t.numTimes)
                      ? "numTimes: integer expected"
                      : null;
                  }),
                  (t.fromObject = function (t) {
                    if (
                      t instanceof
                      c.tensorflow.magenta.NoteSequence.SectionGroup
                    )
                      return t;
                    var e = new c.tensorflow.magenta.NoteSequence.SectionGroup();
                    if (t.sections) {
                      if (!Array.isArray(t.sections))
                        throw TypeError(
                          ".tensorflow.magenta.NoteSequence.SectionGroup.sections: array expected"
                        );
                      e.sections = [];
                      for (var n = 0; n < t.sections.length; ++n) {
                        if ("object" != typeof t.sections[n])
                          throw TypeError(
                            ".tensorflow.magenta.NoteSequence.SectionGroup.sections: object expected"
                          );
                        e.sections[
                          n
                        ] = c.tensorflow.magenta.NoteSequence.Section.fromObject(
                          t.sections[n]
                        );
                      }
                    }
                    return (
                      null != t.numTimes && (e.numTimes = 0 | t.numTimes), e
                    );
                  }),
                  (t.toObject = function (t, e) {
                    e || (e = {});
                    var n = {};
                    if (
                      ((e.arrays || e.defaults) && (n.sections = []),
                      e.defaults && (n.numTimes = 0),
                      t.sections && t.sections.length)
                    ) {
                      n.sections = [];
                      for (var r = 0; r < t.sections.length; ++r)
                        n.sections[
                          r
                        ] = c.tensorflow.magenta.NoteSequence.Section.toObject(
                          t.sections[r],
                          e
                        );
                    }
                    return (
                      null != t.numTimes &&
                        t.hasOwnProperty("numTimes") &&
                        (n.numTimes = t.numTimes),
                      n
                    );
                  }),
                  (t.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      o.util.toJSONOptions
                    );
                  }),
                  t
                );
              })()),
              t
            );
          })()),
          (r.SequenceMetadata = (function () {
            function t(t) {
              if (((this.genre = []), (this.composers = []), t))
                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                  null != t[e[n]] && (this[e[n]] = t[e[n]]);
            }
            return (
              (t.prototype.title = ""),
              (t.prototype.artist = ""),
              (t.prototype.genre = u.emptyArray),
              (t.prototype.composers = u.emptyArray),
              (t.create = function (e) {
                return new t(e);
              }),
              (t.encode = function (t, e) {
                if (
                  (e || (e = a.create()),
                  null != t.title &&
                    t.hasOwnProperty("title") &&
                    e.uint32(10).string(t.title),
                  null != t.artist &&
                    t.hasOwnProperty("artist") &&
                    e.uint32(18).string(t.artist),
                  null != t.genre && t.genre.length)
                )
                  for (var n = 0; n < t.genre.length; ++n)
                    e.uint32(26).string(t.genre[n]);
                if (null != t.composers && t.composers.length)
                  for (n = 0; n < t.composers.length; ++n)
                    e.uint32(34).string(t.composers[n]);
                return e;
              }),
              (t.encodeDelimited = function (t, e) {
                return this.encode(t, e).ldelim();
              }),
              (t.decode = function (t, e) {
                t instanceof s || (t = s.create(t));
                for (
                  var n = void 0 === e ? t.len : t.pos + e,
                    r = new c.tensorflow.magenta.SequenceMetadata();
                  t.pos < n;

                ) {
                  var i = t.uint32();
                  switch (i >>> 3) {
                    case 1:
                      r.title = t.string();
                      break;
                    case 2:
                      r.artist = t.string();
                      break;
                    case 3:
                      (r.genre && r.genre.length) || (r.genre = []),
                        r.genre.push(t.string());
                      break;
                    case 4:
                      (r.composers && r.composers.length) || (r.composers = []),
                        r.composers.push(t.string());
                      break;
                    default:
                      t.skipType(7 & i);
                  }
                }
                return r;
              }),
              (t.decodeDelimited = function (t) {
                return (
                  t instanceof s || (t = new s(t)), this.decode(t, t.uint32())
                );
              }),
              (t.verify = function (t) {
                if ("object" != typeof t || null === t)
                  return "object expected";
                if (
                  null != t.title &&
                  t.hasOwnProperty("title") &&
                  !u.isString(t.title)
                )
                  return "title: string expected";
                if (
                  null != t.artist &&
                  t.hasOwnProperty("artist") &&
                  !u.isString(t.artist)
                )
                  return "artist: string expected";
                if (null != t.genre && t.hasOwnProperty("genre")) {
                  if (!Array.isArray(t.genre)) return "genre: array expected";
                  for (var e = 0; e < t.genre.length; ++e)
                    if (!u.isString(t.genre[e]))
                      return "genre: string[] expected";
                }
                if (null != t.composers && t.hasOwnProperty("composers")) {
                  if (!Array.isArray(t.composers))
                    return "composers: array expected";
                  for (e = 0; e < t.composers.length; ++e)
                    if (!u.isString(t.composers[e]))
                      return "composers: string[] expected";
                }
                return null;
              }),
              (t.fromObject = function (t) {
                if (t instanceof c.tensorflow.magenta.SequenceMetadata)
                  return t;
                var e = new c.tensorflow.magenta.SequenceMetadata();
                if (
                  (null != t.title && (e.title = String(t.title)),
                  null != t.artist && (e.artist = String(t.artist)),
                  t.genre)
                ) {
                  if (!Array.isArray(t.genre))
                    throw TypeError(
                      ".tensorflow.magenta.SequenceMetadata.genre: array expected"
                    );
                  e.genre = [];
                  for (var n = 0; n < t.genre.length; ++n)
                    e.genre[n] = String(t.genre[n]);
                }
                if (t.composers) {
                  if (!Array.isArray(t.composers))
                    throw TypeError(
                      ".tensorflow.magenta.SequenceMetadata.composers: array expected"
                    );
                  for (e.composers = [], n = 0; n < t.composers.length; ++n)
                    e.composers[n] = String(t.composers[n]);
                }
                return e;
              }),
              (t.toObject = function (t, e) {
                e || (e = {});
                var n = {};
                if (
                  ((e.arrays || e.defaults) &&
                    ((n.genre = []), (n.composers = [])),
                  e.defaults && ((n.title = ""), (n.artist = "")),
                  null != t.title &&
                    t.hasOwnProperty("title") &&
                    (n.title = t.title),
                  null != t.artist &&
                    t.hasOwnProperty("artist") &&
                    (n.artist = t.artist),
                  t.genre && t.genre.length)
                ) {
                  n.genre = [];
                  for (var r = 0; r < t.genre.length; ++r)
                    n.genre[r] = t.genre[r];
                }
                if (t.composers && t.composers.length)
                  for (n.composers = [], r = 0; r < t.composers.length; ++r)
                    n.composers[r] = t.composers[r];
                return n;
              }),
              (t.prototype.toJSON = function () {
                return this.constructor.toObject(this, o.util.toJSONOptions);
              }),
              t
            );
          })()),
          (r.VelocityRange = (function () {
            function t(t) {
              if (t)
                for (var e = Object.keys(t), n = 0; n < e.length; ++n)
                  null != t[e[n]] && (this[e[n]] = t[e[n]]);
            }
            return (
              (t.prototype.min = 0),
              (t.prototype.max = 0),
              (t.create = function (e) {
                return new t(e);
              }),
              (t.encode = function (t, e) {
                return (
                  e || (e = a.create()),
                  null != t.min &&
                    t.hasOwnProperty("min") &&
                    e.uint32(8).int32(t.min),
                  null != t.max &&
                    t.hasOwnProperty("max") &&
                    e.uint32(16).int32(t.max),
                  e
                );
              }),
              (t.encodeDelimited = function (t, e) {
                return this.encode(t, e).ldelim();
              }),
              (t.decode = function (t, e) {
                t instanceof s || (t = s.create(t));
                for (
                  var n = void 0 === e ? t.len : t.pos + e,
                    r = new c.tensorflow.magenta.VelocityRange();
                  t.pos < n;

                ) {
                  var i = t.uint32();
                  switch (i >>> 3) {
                    case 1:
                      r.min = t.int32();
                      break;
                    case 2:
                      r.max = t.int32();
                      break;
                    default:
                      t.skipType(7 & i);
                  }
                }
                return r;
              }),
              (t.decodeDelimited = function (t) {
                return (
                  t instanceof s || (t = new s(t)), this.decode(t, t.uint32())
                );
              }),
              (t.verify = function (t) {
                return "object" != typeof t || null === t
                  ? "object expected"
                  : null != t.min &&
                    t.hasOwnProperty("min") &&
                    !u.isInteger(t.min)
                  ? "min: integer expected"
                  : null != t.max &&
                    t.hasOwnProperty("max") &&
                    !u.isInteger(t.max)
                  ? "max: integer expected"
                  : null;
              }),
              (t.fromObject = function (t) {
                if (t instanceof c.tensorflow.magenta.VelocityRange) return t;
                var e = new c.tensorflow.magenta.VelocityRange();
                return (
                  null != t.min && (e.min = 0 | t.min),
                  null != t.max && (e.max = 0 | t.max),
                  e
                );
              }),
              (t.toObject = function (t, e) {
                e || (e = {});
                var n = {};
                return (
                  e.defaults && ((n.min = 0), (n.max = 0)),
                  null != t.min && t.hasOwnProperty("min") && (n.min = t.min),
                  null != t.max && t.hasOwnProperty("max") && (n.max = t.max),
                  n
                );
              }),
              (t.prototype.toJSON = function () {
                return this.constructor.toObject(this, o.util.toJSONOptions);
              }),
              t
            );
          })()),
          r)),
        i)),
        (t.exports = c);
    },
    ,
    function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "ChordQuality", function () {
          return vt;
        }),
        n.d(e, "ChordSymbolException", function () {
          return Nt;
        }),
        n.d(e, "ChordEncodingException", function () {
          return Tt;
        }),
        n.d(e, "ChordSymbols", function () {
          return Ot;
        }),
        n.d(e, "ChordEncoder", function () {
          return It;
        }),
        n.d(e, "chordEncoderFromType", function () {
          return Mt;
        }),
        n.d(e, "MajorMinorChordEncoder", function () {
          return At;
        }),
        n.d(e, "TriadChordEncoder", function () {
          return kt;
        }),
        n.d(e, "PitchChordEncoder", function () {
          return qt;
        });
      var r = {};
      n.r(r),
        n.d(r, "names", function () {
          return a;
        }),
        n.d(r, "tokenize", function () {
          return h;
        }),
        n.d(r, "props", function () {
          return m;
        }),
        n.d(r, "name", function () {
          return d;
        }),
        n.d(r, "pc", function () {
          return g;
        }),
        n.d(r, "midi", function () {
          return S;
        }),
        n.d(r, "midiToFreq", function () {
          return y;
        }),
        n.d(r, "freq", function () {
          return b;
        }),
        n.d(r, "freqToMidi", function () {
          return v;
        }),
        n.d(r, "chroma", function () {
          return N;
        }),
        n.d(r, "oct", function () {
          return T;
        }),
        n.d(r, "stepToLetter", function () {
          return O;
        }),
        n.d(r, "altToAcc", function () {
          return M;
        }),
        n.d(r, "from", function () {
          return A;
        }),
        n.d(r, "build", function () {
          return k;
        }),
        n.d(r, "fromMidi", function () {
          return q;
        }),
        n.d(r, "simplify", function () {
          return E;
        }),
        n.d(r, "enharmonic", function () {
          return _;
        });
      var i = {};
      n.r(i),
        n.d(i, "names", function () {
          return lt;
        }),
        n.d(i, "props", function () {
          return pt;
        }),
        n.d(i, "intervals", function () {
          return ft;
        }),
        n.d(i, "notes", function () {
          return mt;
        }),
        n.d(i, "exists", function () {
          return dt;
        }),
        n.d(i, "supersets", function () {
          return gt;
        }),
        n.d(i, "subsets", function () {
          return St;
        }),
        n.d(i, "tokenize", function () {
          return bt;
        });
      var o = n(0),
        s = "C C# Db D D# Eb E F F# Gb G G# Ab A A# Bb B".split(" "),
        a = function (t) {
          return "string" != typeof t
            ? s.slice()
            : s.filter(function (e) {
                var n = e[1] || " ";
                return -1 !== t.indexOf(n);
              });
        },
        u = a(" #"),
        c = a(" b"),
        l = /^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;
      function h(t) {
        "string" != typeof t && (t = "");
        var e = l.exec(t);
        return [e[1].toUpperCase(), e[2].replace(/x/g, "##"), e[3], e[4]];
      }
      var p = Object.freeze({
          pc: null,
          name: null,
          step: null,
          alt: null,
          oct: null,
          octStr: null,
          chroma: null,
          midi: null,
          freq: null,
        }),
        f = [0, 2, 4, 5, 7, 9, 11],
        m = (function (t, e) {
          return (
            void 0 === e && (e = {}),
            function (n) {
              return e[n] || (e[n] = t(n));
            }
          );
        })(function (t) {
          var e = h(t);
          if ("" === e[0] || "" !== e[3]) return p;
          var n = e[0],
            r = e[1],
            i = e[2],
            o = {
              letter: n,
              acc: r,
              octStr: i,
              pc: n + r,
              name: n + r + i,
              step: (n.charCodeAt(0) + 3) % 7,
              alt: "b" === r[0] ? -r.length : r.length,
              oct: i.length ? +i : null,
              chroma: 0,
              midi: null,
              freq: null,
            };
          return (
            (o.chroma = (f[o.step] + o.alt + 120) % 12),
            (o.midi =
              null !== o.oct ? f[o.step] + o.alt + 12 * (o.oct + 1) : null),
            (o.freq = y(o.midi)),
            Object.freeze(o)
          );
        }),
        d = function (t) {
          return m(t).name;
        },
        g = function (t) {
          return m(t).pc;
        },
        S = function (t) {
          if ("number" != typeof t && "string" != typeof t) return null;
          var e,
            n = m(t).midi,
            r = n || 0 === n ? n : +t;
          return (e = r) >= 0 && e <= 127 ? r : null;
        },
        y = function (t, e) {
          return (
            void 0 === e && (e = 440),
            "number" == typeof t ? Math.pow(2, (t - 69) / 12) * e : null
          );
        },
        b = function (t) {
          return m(t).freq || y(t);
        },
        w = Math.log(2),
        P = Math.log(440),
        v = function (t) {
          var e = (12 * (Math.log(t) - P)) / w + 69;
          return Math.round(100 * e) / 100;
        },
        N = function (t) {
          return m(t).chroma;
        },
        T = function (t) {
          return m(t).oct;
        },
        O = function (t) {
          return "CDEFGAB"[t];
        },
        I = function (t, e) {
          return Array(e + 1).join(t);
        },
        M = function (t) {
          return (function (t, e) {
            return "number" != typeof t ? "" : e(t);
          })(t, function (t) {
            return t < 0 ? I("b", -t) : I("#", t);
          });
        },
        A = function (t, e) {
          void 0 === t && (t = {}), void 0 === e && (e = null);
          var n = e ? Object.assign({}, m(e), t) : t,
            r = n.step,
            i = n.alt,
            o = n.oct;
          if ("number" != typeof r) return null;
          var s = O(r);
          if (!s) return null;
          var a = s + M(i);
          return o || 0 === o ? a + o : a;
        },
        k = A;
      function q(t, e) {
        return (
          void 0 === e && (e = !1),
          (t = Math.round(t)),
          (!0 === e ? u : c)[t % 12] + (Math.floor(t / 12) - 1)
        );
      }
      var E = function (t, e) {
          void 0 === e && (e = !0);
          var n = m(t),
            r = n.alt,
            i = n.chroma,
            o = n.midi;
          if (null === i) return null;
          var s = !1 === e ? r < 0 : r > 0;
          return null === o ? g(q(i, s)) : q(o, s);
        },
        _ = function (t) {
          return E(t, !1);
        };
      var x = new RegExp(
          "^([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})|(AA|A|P|M|m|d|dd)([-+]?\\d+)$"
        ),
        C = [0, 2, 4, 5, 7, 9, 11],
        z =
          ("1P 2m 2M 3m 3M 4P 5P 6m 6M 7m 7M 8P".split(" "),
          Object.freeze({
            name: null,
            num: null,
            q: null,
            step: null,
            alt: null,
            dir: null,
            type: null,
            simple: null,
            semitones: null,
            chroma: null,
            oct: null,
          })),
        D = function (t) {
          return (Math.abs(t) - 1) % 7;
        },
        j = function (t) {
          var e = (function (t) {
            var e = x.exec("" + t);
            return null === e ? null : e[1] ? [e[1], e[2]] : [e[4], e[3]];
          })(t);
          if (null === e) return z;
          var n,
            r,
            i = {
              num: 0,
              q: "d",
              name: "",
              type: "M",
              step: 0,
              dir: -1,
              simple: 1,
              alt: 0,
              oct: 0,
              semitones: 0,
              chroma: 0,
              ic: 0,
            };
          return (
            (i.num = +e[0]),
            (i.q = e[1]),
            (i.step = D(i.num)),
            (i.type = "PMMPPMM"[i.step]),
            "M" === i.type && "P" === i.q
              ? z
              : ((i.name = "" + i.num + i.q),
                (i.dir = i.num < 0 ? -1 : 1),
                (i.simple =
                  8 === i.num || -8 === i.num ? i.num : i.dir * (i.step + 1)),
                (i.alt =
                  ((n = i.type),
                  ("M" === (r = i.q) && "M" === n) || ("P" === r && "P" === n)
                    ? 0
                    : "m" === r && "M" === n
                    ? -1
                    : /^A+$/.test(r)
                    ? r.length
                    : /^d+$/.test(r)
                    ? "P" === n
                      ? -r.length
                      : -r.length - 1
                    : null)),
                (i.oct = Math.floor((Math.abs(i.num) - 1) / 7)),
                (i.semitones = i.dir * (C[i.step] + i.alt + 12 * i.oct)),
                (i.chroma = (((i.dir * (C[i.step] + i.alt)) % 12) + 12) % 12),
                Object.freeze(i))
          );
        },
        L = {};
      function R(t) {
        return "string" != typeof t ? z : L[t] || (L[t] = j(t));
      }
      "P m M m M P d P m M m M".split(" ");
      var B = [0, 2, 4, -1, 1, 3, 5],
        U = B.map(function (t) {
          return Math.floor((7 * t) / 12);
        }),
        G = [3, 0, 4, 1, 5, 2, 6];
      var F = function (t, e, n) {
          var r =
              G[
                (function (t) {
                  var e = (t + 1) % 7;
                  return e < 0 ? 7 + e : e;
                })(t)
              ],
            i = Math.floor((t + 1) / 7);
          return void 0 === e
            ? { step: r, alt: i, dir: n }
            : { step: r, alt: i, oct: e + 4 * i + U[r], dir: n };
        },
        Q = function (t) {
          return (function (t, e) {
            return (
              void 0 === e && (e = {}),
              function (n) {
                return e[n] || (e[n] = t(n));
              }
            );
          })(function (e) {
            var n = t(e);
            return null === n.name
              ? null
              : (function (t) {
                  var e = t.step,
                    n = t.alt,
                    r = t.oct,
                    i = t.dir;
                  void 0 === i && (i = 1);
                  var o = B[e] + 7 * n;
                  return null === r ? [i * o] : [i * o, i * (r - U[e] - 4 * n)];
                })(n);
          });
        },
        V = Q(m),
        H = Q(R);
      function $(t, e) {
        if (1 === arguments.length)
          return function (e) {
            return $(t, e);
          };
        var n = V(t),
          r = H(e);
        if (null === n || null === r) return null;
        var i = 1 === n.length ? [n[0] + r[0]] : [n[0] + r[0], n[1] + r[1]];
        return k(F(i[0], i[1]));
      }
      var K = n(37),
        W = n(38),
        J = function (t) {
          return (
            N(t) ||
            (function (t) {
              return R(t).chroma;
            })(t) ||
            0
          );
        },
        Y = function (t) {
          return parseInt(X(t), 2);
        };
      function X(t) {
        if (tt(t)) return t;
        if (!Array.isArray(t)) return "";
        var e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        return (
          t.map(J).forEach(function (t) {
            e[t] = 1;
          }),
          e.join("")
        );
      }
      var Z = /^[01]{12}$/;
      function tt(t) {
        return Z.test(t);
      }
      "1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M".split(" ");
      function et(t, e) {
        return arguments.length > 1
          ? et(t)(e)
          : ((t = Y(t)),
            function (e) {
              return (e = Y(e)) !== t && (e & t) === e;
            });
      }
      function nt(t, e) {
        return arguments.length > 1
          ? nt(t)(e)
          : ((t = Y(t)),
            function (e) {
              return (e = Y(e)) !== t && (e | t) === e;
            });
      }
      var rt,
        it,
        ot,
        st = function (t) {
          var e = Object.keys(t).sort(),
            n = [],
            r = [],
            i = function (t, e, i) {
              (n[t] = e), (r[i] = r[i] || []), r[i].push(t);
            };
          e.forEach(function (e) {
            var n = t[e][0].split(" "),
              r = t[e][1],
              o = X(n);
            i(e, n, o),
              r &&
                r.forEach(function (t) {
                  return i(t, n, o);
                });
          });
          var o = Object.keys(n).sort(),
            s = function (t) {
              return n[t];
            };
          return (
            (s.names = function (t) {
              return "string" == typeof t
                ? (r[t] || []).slice()
                : (!0 === t ? o : e).slice();
            }),
            s
          );
        },
        at = st(K),
        ut = st(W),
        ct =
          ((rt = at),
          (it = ut),
          ((ot = function (t) {
            return rt(t) || it(t);
          }).names = function (t) {
            return rt.names(t).concat(it.names(t));
          }),
          Object.freeze({
            name: null,
            intervals: [],
            names: [],
            chroma: null,
            setnum: null,
          }));
      at.names;
      var lt = ut.names,
        ht = Object.freeze({
          name: null,
          names: [],
          intervals: [],
          chroma: null,
          setnum: null,
        }),
        pt = (function (t, e) {
          return (
            void 0 === e && (e = {}),
            function (n) {
              return e[n] || (e[n] = t(n));
            }
          );
        })(function (t) {
          var e = ut(t);
          if (!e) return ht;
          var n = { intervals: e, name: t };
          return (
            (n.chroma = X(e)),
            (n.setnum = parseInt(n.chroma, 2)),
            (n.names = ut.names(n.chroma)),
            n
          );
        }),
        ft = function (t) {
          return pt(bt(t)[1]).intervals;
        };
      function mt(t, e) {
        if (e) return pt(e).intervals.map($(t));
        var n = bt(t),
          r = n[0],
          i = n[1];
        return pt(i).intervals.map($(r));
      }
      var dt = function (t) {
          return void 0 !== ut(bt(t)[1]);
        },
        gt = function (t) {
          if (!ft(t).length) return [];
          var e = nt(ft(t));
          return ut.names().filter(function (t) {
            return e(ut(t));
          });
        },
        St = function (t) {
          var e = et(ft(t));
          return ut.names().filter(function (t) {
            return e(ut(t));
          });
        },
        yt = /^(6|64|7|9|11|13)$/;
      function bt(t) {
        var e = h(t);
        return "" === e[0]
          ? ["", t]
          : "A" === e[0] && "ug" === e[3]
          ? ["", "aug"]
          : yt.test(e[2])
          ? [e[0] + e[1], e[2] + e[3]]
          : [e[0] + e[1] + e[2], e[3]];
      }
      var wt = n(1);
      const Pt = [
        ["1P", "3M", "5P"],
        ["1P", "3m", "5P"],
        ["1P", "3M", "5A"],
        ["1P", "3m", "5d"],
      ];
      var vt;
      !(function (t) {
        (t[(t.Major = 0)] = "Major"),
          (t[(t.Minor = 1)] = "Minor"),
          (t[(t.Augmented = 2)] = "Augmented"),
          (t[(t.Diminished = 3)] = "Diminished"),
          (t[(t.Other = 4)] = "Other");
      })(vt || (vt = {}));
      class Nt extends Error {
        constructor(t) {
          super(t), Object.setPrototypeOf(this, new.target.prototype);
        }
      }
      class Tt extends Error {
        constructor(t) {
          super(t), Object.setPrototypeOf(this, new.target.prototype);
        }
      }
      class Ot {
        static pitches(t) {
          if (!i.tokenize(t)[0] || !i.exists(t))
            throw new Nt("Unrecognized chord symbol: " + t);
          return i.notes(t).map(r.chroma);
        }
        static root(t) {
          const e = i.tokenize(t)[0];
          if (!e) throw new Nt("Chord symbol has unknown root: " + t);
          return r.chroma(e);
        }
        static quality(t) {
          if (!i.exists(t)) throw new Nt("Unrecognized chord symbol: " + t);
          const e = i.intervals(t),
            n = Pt.map((t) => t.every((t) => e.includes(t))),
            r = n.indexOf(!0),
            o = n.lastIndexOf(!0);
          return r >= 0 && r === o ? r : vt.Other;
        }
      }
      class It {
        encodeProgression(t, e) {
          const n = t.map((t) => this.encode(t)),
            r = Array.from(Array(e).keys()).map((t) =>
              Math.floor((t * n.length) / e)
            );
          return o.stack(r.map((t) => n[t]));
        }
      }
      function Mt(t) {
        switch (t) {
          case "MajorMinorChordEncoder":
            return new At();
          case "TriadChordEncoder":
            return new kt();
          case "PitchChordEncoder":
            return new qt();
          default:
            throw new Error("Unknown chord encoder type: " + t);
        }
      }
      class At extends It {
        constructor() {
          super(...arguments), (this.depth = 1 + 2 * wt.NUM_PITCH_CLASSES);
        }
        index(t) {
          if (t === wt.NO_CHORD) return 0;
          const e = Ot.root(t),
            n = 1 + Ot.quality(t) * wt.NUM_PITCH_CLASSES + e;
          if (n >= this.depth)
            throw new Tt("Chord is neither major nor minor: " + t);
          return n;
        }
        encode(t) {
          return o.tidy(() =>
            o.oneHot(o.tensor1d([this.index(t)], "int32"), this.depth).as1D()
          );
        }
      }
      class kt extends It {
        constructor() {
          super(...arguments), (this.depth = 1 + 4 * wt.NUM_PITCH_CLASSES);
        }
        index(t) {
          if (t === wt.NO_CHORD) return 0;
          const e = Ot.root(t),
            n = 1 + Ot.quality(t) * wt.NUM_PITCH_CLASSES + e;
          if (n >= this.depth)
            throw new Tt("Chord is not a standard triad: " + t);
          return n;
        }
        encode(t) {
          return o.tidy(() =>
            o.oneHot(o.tensor1d([this.index(t)], "int32"), this.depth).as1D()
          );
        }
      }
      class qt extends It {
        constructor() {
          super(...arguments), (this.depth = 1 + 3 * wt.NUM_PITCH_CLASSES);
        }
        encode(t) {
          return o.tidy(() => {
            if (t === wt.NO_CHORD)
              return o.oneHot(o.tensor1d([0], "int32"), this.depth).as1D();
            const e = Ot.root(t),
              n = o
                .oneHot(o.tensor1d([e], "int32"), wt.NUM_PITCH_CLASSES)
                .as1D(),
              r = o.buffer([wt.NUM_PITCH_CLASSES]);
            Ot.pitches(t).forEach((t) => r.set(1, t));
            const i = r.toTensor().as1D(),
              s = n;
            return o.concat1d([o.tensor1d([0]), n, i, s]);
          });
        }
      }
    },
    ,
    function (t, e, n) {
      "use strict";
      t.exports = n(21);
    },
    function (t, e, n) {
      "use strict";
      var r = e;
      function i() {
        r.util._configure(),
          r.Writer._configure(r.BufferWriter),
          r.Reader._configure(r.BufferReader);
      }
      (r.build = "minimal"),
        (r.Writer = n(14)),
        (r.BufferWriter = n(30)),
        (r.Reader = n(15)),
        (r.BufferReader = n(31)),
        (r.util = n(8)),
        (r.rpc = n(32)),
        (r.roots = n(34)),
        (r.configure = i),
        i();
    },
    function (t, e, n) {
      "use strict";
      t.exports = function (t, e) {
        var n = new Array(arguments.length - 1),
          r = 0,
          i = 2,
          o = !0;
        for (; i < arguments.length; ) n[r++] = arguments[i++];
        return new Promise(function (i, s) {
          n[r] = function (t) {
            if (o)
              if (((o = !1), t)) s(t);
              else {
                for (
                  var e = new Array(arguments.length - 1), n = 0;
                  n < e.length;

                )
                  e[n++] = arguments[n];
                i.apply(null, e);
              }
          };
          try {
            t.apply(e || null, n);
          } catch (t) {
            o && ((o = !1), s(t));
          }
        });
      };
    },
    function (t, e, n) {
      "use strict";
      var r = e;
      r.length = function (t) {
        var e = t.length;
        if (!e) return 0;
        for (var n = 0; --e % 4 > 1 && "=" === t.charAt(e); ) ++n;
        return Math.ceil(3 * t.length) / 4 - n;
      };
      for (var i = new Array(64), o = new Array(123), s = 0; s < 64; )
        o[
          (i[s] =
            s < 26 ? s + 65 : s < 52 ? s + 71 : s < 62 ? s - 4 : (s - 59) | 43)
        ] = s++;
      r.encode = function (t, e, n) {
        for (var r, o = null, s = [], a = 0, u = 0; e < n; ) {
          var c = t[e++];
          switch (u) {
            case 0:
              (s[a++] = i[c >> 2]), (r = (3 & c) << 4), (u = 1);
              break;
            case 1:
              (s[a++] = i[r | (c >> 4)]), (r = (15 & c) << 2), (u = 2);
              break;
            case 2:
              (s[a++] = i[r | (c >> 6)]), (s[a++] = i[63 & c]), (u = 0);
          }
          a > 8191 &&
            ((o || (o = [])).push(String.fromCharCode.apply(String, s)),
            (a = 0));
        }
        return (
          u && ((s[a++] = i[r]), (s[a++] = 61), 1 === u && (s[a++] = 61)),
          o
            ? (a && o.push(String.fromCharCode.apply(String, s.slice(0, a))),
              o.join(""))
            : String.fromCharCode.apply(String, s.slice(0, a))
        );
      };
      (r.decode = function (t, e, n) {
        for (var r, i = n, s = 0, a = 0; a < t.length; ) {
          var u = t.charCodeAt(a++);
          if (61 === u && s > 1) break;
          if (void 0 === (u = o[u])) throw Error("invalid encoding");
          switch (s) {
            case 0:
              (r = u), (s = 1);
              break;
            case 1:
              (e[n++] = (r << 2) | ((48 & u) >> 4)), (r = u), (s = 2);
              break;
            case 2:
              (e[n++] = ((15 & r) << 4) | ((60 & u) >> 2)), (r = u), (s = 3);
              break;
            case 3:
              (e[n++] = ((3 & r) << 6) | u), (s = 0);
          }
        }
        if (1 === s) throw Error("invalid encoding");
        return n - i;
      }),
        (r.test = function (t) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
            t
          );
        });
    },
    function (t, e, n) {
      "use strict";
      function r() {
        this._listeners = {};
      }
      (t.exports = r),
        (r.prototype.on = function (t, e, n) {
          return (
            (this._listeners[t] || (this._listeners[t] = [])).push({
              fn: e,
              ctx: n || this,
            }),
            this
          );
        }),
        (r.prototype.off = function (t, e) {
          if (void 0 === t) this._listeners = {};
          else if (void 0 === e) this._listeners[t] = [];
          else
            for (var n = this._listeners[t], r = 0; r < n.length; )
              n[r].fn === e ? n.splice(r, 1) : ++r;
          return this;
        }),
        (r.prototype.emit = function (t) {
          var e = this._listeners[t];
          if (e) {
            for (var n = [], r = 1; r < arguments.length; )
              n.push(arguments[r++]);
            for (r = 0; r < e.length; ) e[r].fn.apply(e[r++].ctx, n);
          }
          return this;
        });
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return (
          "undefined" != typeof Float32Array
            ? (function () {
                var e = new Float32Array([-0]),
                  n = new Uint8Array(e.buffer),
                  r = 128 === n[3];
                function i(t, r, i) {
                  (e[0] = t),
                    (r[i] = n[0]),
                    (r[i + 1] = n[1]),
                    (r[i + 2] = n[2]),
                    (r[i + 3] = n[3]);
                }
                function o(t, r, i) {
                  (e[0] = t),
                    (r[i] = n[3]),
                    (r[i + 1] = n[2]),
                    (r[i + 2] = n[1]),
                    (r[i + 3] = n[0]);
                }
                function s(t, r) {
                  return (
                    (n[0] = t[r]),
                    (n[1] = t[r + 1]),
                    (n[2] = t[r + 2]),
                    (n[3] = t[r + 3]),
                    e[0]
                  );
                }
                function a(t, r) {
                  return (
                    (n[3] = t[r]),
                    (n[2] = t[r + 1]),
                    (n[1] = t[r + 2]),
                    (n[0] = t[r + 3]),
                    e[0]
                  );
                }
                (t.writeFloatLE = r ? i : o),
                  (t.writeFloatBE = r ? o : i),
                  (t.readFloatLE = r ? s : a),
                  (t.readFloatBE = r ? a : s);
              })()
            : (function () {
                function e(t, e, n, r) {
                  var i = e < 0 ? 1 : 0;
                  if ((i && (e = -e), 0 === e))
                    t(1 / e > 0 ? 0 : 2147483648, n, r);
                  else if (isNaN(e)) t(2143289344, n, r);
                  else if (e > 34028234663852886e22)
                    t(((i << 31) | 2139095040) >>> 0, n, r);
                  else if (e < 11754943508222875e-54)
                    t(
                      ((i << 31) | Math.round(e / 1401298464324817e-60)) >>> 0,
                      n,
                      r
                    );
                  else {
                    var o = Math.floor(Math.log(e) / Math.LN2);
                    t(
                      ((i << 31) |
                        ((o + 127) << 23) |
                        (8388607 &
                          Math.round(e * Math.pow(2, -o) * 8388608))) >>>
                        0,
                      n,
                      r
                    );
                  }
                }
                function n(t, e, n) {
                  var r = t(e, n),
                    i = 2 * (r >> 31) + 1,
                    o = (r >>> 23) & 255,
                    s = 8388607 & r;
                  return 255 === o
                    ? s
                      ? NaN
                      : i * (1 / 0)
                    : 0 === o
                    ? 1401298464324817e-60 * i * s
                    : i * Math.pow(2, o - 150) * (s + 8388608);
                }
                (t.writeFloatLE = e.bind(null, i)),
                  (t.writeFloatBE = e.bind(null, o)),
                  (t.readFloatLE = n.bind(null, s)),
                  (t.readFloatBE = n.bind(null, a));
              })(),
          "undefined" != typeof Float64Array
            ? (function () {
                var e = new Float64Array([-0]),
                  n = new Uint8Array(e.buffer),
                  r = 128 === n[7];
                function i(t, r, i) {
                  (e[0] = t),
                    (r[i] = n[0]),
                    (r[i + 1] = n[1]),
                    (r[i + 2] = n[2]),
                    (r[i + 3] = n[3]),
                    (r[i + 4] = n[4]),
                    (r[i + 5] = n[5]),
                    (r[i + 6] = n[6]),
                    (r[i + 7] = n[7]);
                }
                function o(t, r, i) {
                  (e[0] = t),
                    (r[i] = n[7]),
                    (r[i + 1] = n[6]),
                    (r[i + 2] = n[5]),
                    (r[i + 3] = n[4]),
                    (r[i + 4] = n[3]),
                    (r[i + 5] = n[2]),
                    (r[i + 6] = n[1]),
                    (r[i + 7] = n[0]);
                }
                function s(t, r) {
                  return (
                    (n[0] = t[r]),
                    (n[1] = t[r + 1]),
                    (n[2] = t[r + 2]),
                    (n[3] = t[r + 3]),
                    (n[4] = t[r + 4]),
                    (n[5] = t[r + 5]),
                    (n[6] = t[r + 6]),
                    (n[7] = t[r + 7]),
                    e[0]
                  );
                }
                function a(t, r) {
                  return (
                    (n[7] = t[r]),
                    (n[6] = t[r + 1]),
                    (n[5] = t[r + 2]),
                    (n[4] = t[r + 3]),
                    (n[3] = t[r + 4]),
                    (n[2] = t[r + 5]),
                    (n[1] = t[r + 6]),
                    (n[0] = t[r + 7]),
                    e[0]
                  );
                }
                (t.writeDoubleLE = r ? i : o),
                  (t.writeDoubleBE = r ? o : i),
                  (t.readDoubleLE = r ? s : a),
                  (t.readDoubleBE = r ? a : s);
              })()
            : (function () {
                function e(t, e, n, r, i, o) {
                  var s = r < 0 ? 1 : 0;
                  if ((s && (r = -r), 0 === r))
                    t(0, i, o + e), t(1 / r > 0 ? 0 : 2147483648, i, o + n);
                  else if (isNaN(r)) t(0, i, o + e), t(2146959360, i, o + n);
                  else if (r > 17976931348623157e292)
                    t(0, i, o + e), t(((s << 31) | 2146435072) >>> 0, i, o + n);
                  else {
                    var a;
                    if (r < 22250738585072014e-324)
                      t((a = r / 5e-324) >>> 0, i, o + e),
                        t(((s << 31) | (a / 4294967296)) >>> 0, i, o + n);
                    else {
                      var u = Math.floor(Math.log(r) / Math.LN2);
                      1024 === u && (u = 1023),
                        t(
                          (4503599627370496 * (a = r * Math.pow(2, -u))) >>> 0,
                          i,
                          o + e
                        ),
                        t(
                          ((s << 31) |
                            ((u + 1023) << 20) |
                            ((1048576 * a) & 1048575)) >>>
                            0,
                          i,
                          o + n
                        );
                    }
                  }
                }
                function n(t, e, n, r, i) {
                  var o = t(r, i + e),
                    s = t(r, i + n),
                    a = 2 * (s >> 31) + 1,
                    u = (s >>> 20) & 2047,
                    c = 4294967296 * (1048575 & s) + o;
                  return 2047 === u
                    ? c
                      ? NaN
                      : a * (1 / 0)
                    : 0 === u
                    ? 5e-324 * a * c
                    : a * Math.pow(2, u - 1075) * (c + 4503599627370496);
                }
                (t.writeDoubleLE = e.bind(null, i, 0, 4)),
                  (t.writeDoubleBE = e.bind(null, o, 4, 0)),
                  (t.readDoubleLE = n.bind(null, s, 0, 4)),
                  (t.readDoubleBE = n.bind(null, a, 4, 0));
              })(),
          t
        );
      }
      function i(t, e, n) {
        (e[n] = 255 & t),
          (e[n + 1] = (t >>> 8) & 255),
          (e[n + 2] = (t >>> 16) & 255),
          (e[n + 3] = t >>> 24);
      }
      function o(t, e, n) {
        (e[n] = t >>> 24),
          (e[n + 1] = (t >>> 16) & 255),
          (e[n + 2] = (t >>> 8) & 255),
          (e[n + 3] = 255 & t);
      }
      function s(t, e) {
        return (
          (t[e] | (t[e + 1] << 8) | (t[e + 2] << 16) | (t[e + 3] << 24)) >>> 0
        );
      }
      function a(t, e) {
        return (
          ((t[e] << 24) | (t[e + 1] << 16) | (t[e + 2] << 8) | t[e + 3]) >>> 0
        );
      }
      t.exports = r(r);
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      function inquire(moduleName) {
        try {
          var mod = eval("quire".replace(/^/, "re"))(moduleName);
          if (mod && (mod.length || Object.keys(mod).length)) return mod;
        } catch (t) {}
        return null;
      }
      module.exports = inquire;
    },
    function (t, e, n) {
      "use strict";
      var r = e;
      (r.length = function (t) {
        for (var e = 0, n = 0, r = 0; r < t.length; ++r)
          (n = t.charCodeAt(r)) < 128
            ? (e += 1)
            : n < 2048
            ? (e += 2)
            : 55296 == (64512 & n) && 56320 == (64512 & t.charCodeAt(r + 1))
            ? (++r, (e += 4))
            : (e += 3);
        return e;
      }),
        (r.read = function (t, e, n) {
          if (n - e < 1) return "";
          for (var r, i = null, o = [], s = 0; e < n; )
            (r = t[e++]) < 128
              ? (o[s++] = r)
              : r > 191 && r < 224
              ? (o[s++] = ((31 & r) << 6) | (63 & t[e++]))
              : r > 239 && r < 365
              ? ((r =
                  (((7 & r) << 18) |
                    ((63 & t[e++]) << 12) |
                    ((63 & t[e++]) << 6) |
                    (63 & t[e++])) -
                  65536),
                (o[s++] = 55296 + (r >> 10)),
                (o[s++] = 56320 + (1023 & r)))
              : (o[s++] =
                  ((15 & r) << 12) | ((63 & t[e++]) << 6) | (63 & t[e++])),
              s > 8191 &&
                ((i || (i = [])).push(String.fromCharCode.apply(String, o)),
                (s = 0));
          return i
            ? (s && i.push(String.fromCharCode.apply(String, o.slice(0, s))),
              i.join(""))
            : String.fromCharCode.apply(String, o.slice(0, s));
        }),
        (r.write = function (t, e, n) {
          for (var r, i, o = n, s = 0; s < t.length; ++s)
            (r = t.charCodeAt(s)) < 128
              ? (e[n++] = r)
              : r < 2048
              ? ((e[n++] = (r >> 6) | 192), (e[n++] = (63 & r) | 128))
              : 55296 == (64512 & r) &&
                56320 == (64512 & (i = t.charCodeAt(s + 1)))
              ? ((r = 65536 + ((1023 & r) << 10) + (1023 & i)),
                ++s,
                (e[n++] = (r >> 18) | 240),
                (e[n++] = ((r >> 12) & 63) | 128),
                (e[n++] = ((r >> 6) & 63) | 128),
                (e[n++] = (63 & r) | 128))
              : ((e[n++] = (r >> 12) | 224),
                (e[n++] = ((r >> 6) & 63) | 128),
                (e[n++] = (63 & r) | 128));
          return n - o;
        });
    },
    function (t, e, n) {
      "use strict";
      t.exports = function (t, e, n) {
        var r = n || 8192,
          i = r >>> 1,
          o = null,
          s = r;
        return function (n) {
          if (n < 1 || n > i) return t(n);
          s + n > r && ((o = t(r)), (s = 0));
          var a = e.call(o, s, (s += n));
          return 7 & s && (s = 1 + (7 | s)), a;
        };
      };
    },
    function (t, e, n) {
      "use strict";
      t.exports = i;
      var r = n(8);
      function i(t, e) {
        (this.lo = t >>> 0), (this.hi = e >>> 0);
      }
      var o = (i.zero = new i(0, 0));
      (o.toNumber = function () {
        return 0;
      }),
        (o.zzEncode = o.zzDecode = function () {
          return this;
        }),
        (o.length = function () {
          return 1;
        });
      var s = (i.zeroHash = "\0\0\0\0\0\0\0\0");
      (i.fromNumber = function (t) {
        if (0 === t) return o;
        var e = t < 0;
        e && (t = -t);
        var n = t >>> 0,
          r = ((t - n) / 4294967296) >>> 0;
        return (
          e &&
            ((r = ~r >>> 0),
            (n = ~n >>> 0),
            ++n > 4294967295 && ((n = 0), ++r > 4294967295 && (r = 0))),
          new i(n, r)
        );
      }),
        (i.from = function (t) {
          if ("number" == typeof t) return i.fromNumber(t);
          if (r.isString(t)) {
            if (!r.Long) return i.fromNumber(parseInt(t, 10));
            t = r.Long.fromString(t);
          }
          return t.low || t.high ? new i(t.low >>> 0, t.high >>> 0) : o;
        }),
        (i.prototype.toNumber = function (t) {
          if (!t && this.hi >>> 31) {
            var e = (1 + ~this.lo) >>> 0,
              n = ~this.hi >>> 0;
            return e || (n = (n + 1) >>> 0), -(e + 4294967296 * n);
          }
          return this.lo + 4294967296 * this.hi;
        }),
        (i.prototype.toLong = function (t) {
          return r.Long
            ? new r.Long(0 | this.lo, 0 | this.hi, Boolean(t))
            : { low: 0 | this.lo, high: 0 | this.hi, unsigned: Boolean(t) };
        });
      var a = String.prototype.charCodeAt;
      (i.fromHash = function (t) {
        return t === s
          ? o
          : new i(
              (a.call(t, 0) |
                (a.call(t, 1) << 8) |
                (a.call(t, 2) << 16) |
                (a.call(t, 3) << 24)) >>>
                0,
              (a.call(t, 4) |
                (a.call(t, 5) << 8) |
                (a.call(t, 6) << 16) |
                (a.call(t, 7) << 24)) >>>
                0
            );
      }),
        (i.prototype.toHash = function () {
          return String.fromCharCode(
            255 & this.lo,
            (this.lo >>> 8) & 255,
            (this.lo >>> 16) & 255,
            this.lo >>> 24,
            255 & this.hi,
            (this.hi >>> 8) & 255,
            (this.hi >>> 16) & 255,
            this.hi >>> 24
          );
        }),
        (i.prototype.zzEncode = function () {
          var t = this.hi >> 31;
          return (
            (this.hi = (((this.hi << 1) | (this.lo >>> 31)) ^ t) >>> 0),
            (this.lo = ((this.lo << 1) ^ t) >>> 0),
            this
          );
        }),
        (i.prototype.zzDecode = function () {
          var t = -(1 & this.lo);
          return (
            (this.lo = (((this.lo >>> 1) | (this.hi << 31)) ^ t) >>> 0),
            (this.hi = ((this.hi >>> 1) ^ t) >>> 0),
            this
          );
        }),
        (i.prototype.length = function () {
          var t = this.lo,
            e = ((this.lo >>> 28) | (this.hi << 4)) >>> 0,
            n = this.hi >>> 24;
          return 0 === n
            ? 0 === e
              ? t < 16384
                ? t < 128
                  ? 1
                  : 2
                : t < 2097152
                ? 3
                : 4
              : e < 16384
              ? e < 128
                ? 5
                : 6
              : e < 2097152
              ? 7
              : 8
            : n < 128
            ? 9
            : 10;
        });
    },
    function (t, e, n) {
      "use strict";
      t.exports = o;
      var r = n(14);
      (o.prototype = Object.create(r.prototype)).constructor = o;
      var i = n(8);
      function o() {
        r.call(this);
      }
      function s(t, e, n) {
        t.length < 40
          ? i.utf8.write(t, e, n)
          : e.utf8Write
          ? e.utf8Write(t, n)
          : e.write(t, n);
      }
      (o._configure = function () {
        (o.alloc = i._Buffer_allocUnsafe),
          (o.writeBytesBuffer =
            i.Buffer &&
            i.Buffer.prototype instanceof Uint8Array &&
            "set" === i.Buffer.prototype.set.name
              ? function (t, e, n) {
                  e.set(t, n);
                }
              : function (t, e, n) {
                  if (t.copy) t.copy(e, n, 0, t.length);
                  else for (var r = 0; r < t.length; ) e[n++] = t[r++];
                });
      }),
        (o.prototype.bytes = function (t) {
          i.isString(t) && (t = i._Buffer_from(t, "base64"));
          var e = t.length >>> 0;
          return (
            this.uint32(e), e && this._push(o.writeBytesBuffer, e, t), this
          );
        }),
        (o.prototype.string = function (t) {
          var e = i.Buffer.byteLength(t);
          return this.uint32(e), e && this._push(s, e, t), this;
        }),
        o._configure();
    },
    function (t, e, n) {
      "use strict";
      t.exports = o;
      var r = n(15);
      (o.prototype = Object.create(r.prototype)).constructor = o;
      var i = n(8);
      function o(t) {
        r.call(this, t);
      }
      (o._configure = function () {
        i.Buffer && (o.prototype._slice = i.Buffer.prototype.slice);
      }),
        (o.prototype.string = function () {
          var t = this.uint32();
          return this.buf.utf8Slice
            ? this.buf.utf8Slice(
                this.pos,
                (this.pos = Math.min(this.pos + t, this.len))
              )
            : this.buf.toString(
                "utf-8",
                this.pos,
                (this.pos = Math.min(this.pos + t, this.len))
              );
        }),
        o._configure();
    },
    function (t, e, n) {
      "use strict";
      e.Service = n(33);
    },
    function (t, e, n) {
      "use strict";
      t.exports = i;
      var r = n(8);
      function i(t, e, n) {
        if ("function" != typeof t)
          throw TypeError("rpcImpl must be a function");
        r.EventEmitter.call(this),
          (this.rpcImpl = t),
          (this.requestDelimited = Boolean(e)),
          (this.responseDelimited = Boolean(n));
      }
      ((i.prototype = Object.create(r.EventEmitter.prototype)).constructor = i),
        (i.prototype.rpcCall = function t(e, n, i, o, s) {
          if (!o) throw TypeError("request must be specified");
          var a = this;
          if (!s) return r.asPromise(t, a, e, n, i, o);
          if (a.rpcImpl)
            try {
              return a.rpcImpl(
                e,
                n[a.requestDelimited ? "encodeDelimited" : "encode"](
                  o
                ).finish(),
                function (t, n) {
                  if (t) return a.emit("error", t, e), s(t);
                  if (null !== n) {
                    if (!(n instanceof i))
                      try {
                        n = i[
                          a.responseDelimited ? "decodeDelimited" : "decode"
                        ](n);
                      } catch (t) {
                        return a.emit("error", t, e), s(t);
                      }
                    return a.emit("data", n, e), s(null, n);
                  }
                  a.end(!0);
                }
              );
            } catch (t) {
              return (
                a.emit("error", t, e),
                void setTimeout(function () {
                  s(t);
                }, 0)
              );
            }
          else
            setTimeout(function () {
              s(Error("already ended"));
            }, 0);
        }),
        (i.prototype.end = function (t) {
          return (
            this.rpcImpl &&
              (t || this.rpcImpl(null, null, null),
              (this.rpcImpl = null),
              this.emit("end").off()),
            this
          );
        });
    },
    function (t, e, n) {
      "use strict";
      t.exports = {};
    },
    ,
    function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "auxiliaryInputFromSpec", function () {
          return i;
        }),
        n.d(e, "AuxiliaryInput", function () {
          return o;
        }),
        n.d(e, "BinaryCounter", function () {
          return s;
        });
      var r = n(0);
      function i(t) {
        switch (t.type) {
          case "BinaryCounter":
            return new s(t.args);
          default:
            throw new Error("Unknown auxiliary input: " + t);
        }
      }
      class o {
        constructor(t) {
          this.depth = t;
        }
      }
      class s extends o {
        constructor(t) {
          super(t.numBits);
        }
        getTensors(t) {
          const e = r.buffer([t, this.depth]);
          for (let n = 0; n < t; ++n)
            for (let t = 0; t < this.depth; ++t)
              e.set(Math.floor((n + 1) / Math.pow(2, t)) % 2 ? 1 : -1, n, t);
          return e.toTensor().as2D(t, this.depth);
        }
      }
    },
    function (t) {
      t.exports = JSON.parse(
        '{"chromatic":["1P 2m 2M 3m 3M 4P 4A 5P 6m 6M 7m 7M"],"lydian":["1P 2M 3M 4A 5P 6M 7M"],"major":["1P 2M 3M 4P 5P 6M 7M",["ionian"]],"mixolydian":["1P 2M 3M 4P 5P 6M 7m",["dominant"]],"dorian":["1P 2M 3m 4P 5P 6M 7m"],"aeolian":["1P 2M 3m 4P 5P 6m 7m",["minor"]],"phrygian":["1P 2m 3m 4P 5P 6m 7m"],"locrian":["1P 2m 3m 4P 5d 6m 7m"],"melodic minor":["1P 2M 3m 4P 5P 6M 7M"],"melodic minor second mode":["1P 2m 3m 4P 5P 6M 7m"],"lydian augmented":["1P 2M 3M 4A 5A 6M 7M"],"lydian dominant":["1P 2M 3M 4A 5P 6M 7m",["lydian b7"]],"melodic minor fifth mode":["1P 2M 3M 4P 5P 6m 7m",["hindu","mixolydian b6M"]],"locrian #2":["1P 2M 3m 4P 5d 6m 7m",["half-diminished"]],"altered":["1P 2m 3m 3M 5d 6m 7m",["super locrian","diminished whole tone","pomeroy"]],"harmonic minor":["1P 2M 3m 4P 5P 6m 7M"],"phrygian dominant":["1P 2m 3M 4P 5P 6m 7m",["spanish","phrygian major"]],"half-whole diminished":["1P 2m 3m 3M 4A 5P 6M 7m",["dominant diminished"]],"diminished":["1P 2M 3m 4P 5d 6m 6M 7M",["whole-half diminished"]],"major pentatonic":["1P 2M 3M 5P 6M",["pentatonic"]],"lydian pentatonic":["1P 3M 4A 5P 7M",["chinese"]],"mixolydian pentatonic":["1P 3M 4P 5P 7m",["indian"]],"locrian pentatonic":["1P 3m 4P 5d 7m",["minor seven flat five pentatonic"]],"minor pentatonic":["1P 3m 4P 5P 7m"],"minor six pentatonic":["1P 3m 4P 5P 6M"],"minor hexatonic":["1P 2M 3m 4P 5P 7M"],"flat three pentatonic":["1P 2M 3m 5P 6M",["kumoi"]],"flat six pentatonic":["1P 2M 3M 5P 6m"],"major flat two pentatonic":["1P 2m 3M 5P 6M"],"whole tone pentatonic":["1P 3M 5d 6m 7m"],"ionian pentatonic":["1P 3M 4P 5P 7M"],"lydian #5P pentatonic":["1P 3M 4A 5A 7M"],"lydian dominant pentatonic":["1P 3M 4A 5P 7m"],"minor #7M pentatonic":["1P 3m 4P 5P 7M"],"super locrian pentatonic":["1P 3m 4d 5d 7m"],"in-sen":["1P 2m 4P 5P 7m"],"iwato":["1P 2m 4P 5d 7m"],"hirajoshi":["1P 2M 3m 5P 6m"],"kumoijoshi":["1P 2m 4P 5P 6m"],"pelog":["1P 2m 3m 5P 6m"],"vietnamese 1":["1P 3m 4P 5P 6m"],"vietnamese 2":["1P 3m 4P 5P 7m"],"prometheus":["1P 2M 3M 4A 6M 7m"],"prometheus neopolitan":["1P 2m 3M 4A 6M 7m"],"ritusen":["1P 2M 4P 5P 6M"],"scriabin":["1P 2m 3M 5P 6M"],"piongio":["1P 2M 4P 5P 6M 7m"],"major blues":["1P 2M 3m 3M 5P 6M"],"minor blues":["1P 3m 4P 5d 5P 7m",["blues"]],"composite blues":["1P 2M 3m 3M 4P 5d 5P 6M 7m"],"augmented":["1P 2A 3M 5P 5A 7M"],"augmented heptatonic":["1P 2A 3M 4P 5P 5A 7M"],"dorian #4":["1P 2M 3m 4A 5P 6M 7m"],"lydian diminished":["1P 2M 3m 4A 5P 6M 7M"],"whole tone":["1P 2M 3M 4A 5A 7m"],"leading whole tone":["1P 2M 3M 4A 5A 7m 7M"],"lydian minor":["1P 2M 3M 4A 5P 6m 7m"],"locrian major":["1P 2M 3M 4P 5d 6m 7m",["arabian"]],"neopolitan":["1P 2m 3m 4P 5P 6m 7M"],"neopolitan minor":["1P 2m 3m 4P 5P 6m 7M"],"neopolitan major":["1P 2m 3m 4P 5P 6M 7M",["dorian b2"]],"neopolitan major pentatonic":["1P 3M 4P 5d 7m"],"romanian minor":["1P 2M 3m 5d 5P 6M 7m"],"double harmonic lydian":["1P 2m 3M 4A 5P 6m 7M"],"harmonic major":["1P 2M 3M 4P 5P 6m 7M"],"double harmonic major":["1P 2m 3M 4P 5P 6m 7M",["gypsy"]],"egyptian":["1P 2M 4P 5P 7m"],"hungarian minor":["1P 2M 3m 4A 5P 6m 7M"],"hungarian major":["1P 2A 3M 4A 5P 6M 7m"],"oriental":["1P 2m 3M 4P 5d 6M 7m"],"spanish heptatonic":["1P 2m 3m 3M 4P 5P 6m 7m"],"flamenco":["1P 2m 3m 3M 4A 5P 7m"],"balinese":["1P 2m 3m 4P 5P 6m 7M"],"todi raga":["1P 2m 3m 4A 5P 6m 7M"],"malkos raga":["1P 3m 4P 6m 7m"],"kafi raga":["1P 3m 3M 4P 5P 6M 7m 7M"],"purvi raga":["1P 2m 3M 4P 4A 5P 6m 7M"],"persian":["1P 2m 3M 4P 5d 6m 7M"],"bebop":["1P 2M 3M 4P 5P 6M 7m 7M"],"bebop dominant":["1P 2M 3M 4P 5P 6M 7m 7M"],"bebop minor":["1P 2M 3m 3M 4P 5P 6M 7m"],"bebop major":["1P 2M 3M 4P 5P 5A 6M 7M"],"bebop locrian":["1P 2m 3m 4P 5d 5P 6m 7m"],"minor bebop":["1P 2M 3m 4P 5P 6m 7m 7M"],"mystery #1":["1P 2m 3M 5d 6m 7m"],"enigmatic":["1P 2m 3M 5d 6m 7m 7M"],"minor six diminished":["1P 2M 3m 4P 5P 6m 6M 7M"],"ionian augmented":["1P 2M 3M 4P 5A 6M 7M"],"lydian #9":["1P 2m 3M 4A 5P 6M 7M"],"ichikosucho":["1P 2M 3M 4P 5d 5P 6M 7M"],"six tone symmetric":["1P 2m 3M 4P 5A 6M"]}'
      );
    },
    function (t) {
      t.exports = JSON.parse(
        '{"4":["1P 4P 7m 10m",["quartal"]],"5":["1P 5P"],"7":["1P 3M 5P 7m",["Dominant","Dom"]],"9":["1P 3M 5P 7m 9M",["79"]],"11":["1P 5P 7m 9M 11P"],"13":["1P 3M 5P 7m 9M 13M",["13_"]],"64":["5P 8P 10M"],"M":["1P 3M 5P",["Major",""]],"M#5":["1P 3M 5A",["augmented","maj#5","Maj#5","+","aug"]],"M#5add9":["1P 3M 5A 9M",["+add9"]],"M13":["1P 3M 5P 7M 9M 13M",["maj13","Maj13"]],"M13#11":["1P 3M 5P 7M 9M 11A 13M",["maj13#11","Maj13#11","M13+4","M13#4"]],"M6":["1P 3M 5P 13M",["6"]],"M6#11":["1P 3M 5P 6M 11A",["M6b5","6#11","6b5"]],"M69":["1P 3M 5P 6M 9M",["69"]],"M69#11":["1P 3M 5P 6M 9M 11A"],"M7#11":["1P 3M 5P 7M 11A",["maj7#11","Maj7#11","M7+4","M7#4"]],"M7#5":["1P 3M 5A 7M",["maj7#5","Maj7#5","maj9#5","M7+"]],"M7#5sus4":["1P 4P 5A 7M"],"M7#9#11":["1P 3M 5P 7M 9A 11A"],"M7add13":["1P 3M 5P 6M 7M 9M"],"M7b5":["1P 3M 5d 7M"],"M7b6":["1P 3M 6m 7M"],"M7b9":["1P 3M 5P 7M 9m"],"M7sus4":["1P 4P 5P 7M"],"M9":["1P 3M 5P 7M 9M",["maj9","Maj9"]],"M9#11":["1P 3M 5P 7M 9M 11A",["maj9#11","Maj9#11","M9+4","M9#4"]],"M9#5":["1P 3M 5A 7M 9M",["Maj9#5"]],"M9#5sus4":["1P 4P 5A 7M 9M"],"M9b5":["1P 3M 5d 7M 9M"],"M9sus4":["1P 4P 5P 7M 9M"],"Madd9":["1P 3M 5P 9M",["2","add9","add2"]],"Maj7":["1P 3M 5P 7M",["maj7","M7"]],"Mb5":["1P 3M 5d"],"Mb6":["1P 3M 13m"],"Msus2":["1P 2M 5P",["add9no3","sus2"]],"Msus4":["1P 4P 5P",["sus","sus4"]],"Maddb9":["1P 3M 5P 9m"],"11b9":["1P 5P 7m 9m 11P"],"13#11":["1P 3M 5P 7m 9M 11A 13M",["13+4","13#4"]],"13#9":["1P 3M 5P 7m 9A 13M",["13#9_"]],"13#9#11":["1P 3M 5P 7m 9A 11A 13M"],"13b5":["1P 3M 5d 6M 7m 9M"],"13b9":["1P 3M 5P 7m 9m 13M"],"13b9#11":["1P 3M 5P 7m 9m 11A 13M"],"13no5":["1P 3M 7m 9M 13M"],"13sus4":["1P 4P 5P 7m 9M 13M",["13sus"]],"69#11":["1P 3M 5P 6M 9M 11A"],"7#11":["1P 3M 5P 7m 11A",["7+4","7#4","7#11_","7#4_"]],"7#11b13":["1P 3M 5P 7m 11A 13m",["7b5b13"]],"7#5":["1P 3M 5A 7m",["+7","7aug","aug7"]],"7#5#9":["1P 3M 5A 7m 9A",["7alt","7#5#9_","7#9b13_"]],"7#5b9":["1P 3M 5A 7m 9m"],"7#5b9#11":["1P 3M 5A 7m 9m 11A"],"7#5sus4":["1P 4P 5A 7m"],"7#9":["1P 3M 5P 7m 9A",["7#9_"]],"7#9#11":["1P 3M 5P 7m 9A 11A",["7b5#9"]],"7#9#11b13":["1P 3M 5P 7m 9A 11A 13m"],"7#9b13":["1P 3M 5P 7m 9A 13m"],"7add6":["1P 3M 5P 7m 13M",["67","7add13"]],"7b13":["1P 3M 7m 13m"],"7b5":["1P 3M 5d 7m"],"7b6":["1P 3M 5P 6m 7m"],"7b9":["1P 3M 5P 7m 9m"],"7b9#11":["1P 3M 5P 7m 9m 11A",["7b5b9"]],"7b9#9":["1P 3M 5P 7m 9m 9A"],"7b9b13":["1P 3M 5P 7m 9m 13m"],"7b9b13#11":["1P 3M 5P 7m 9m 11A 13m",["7b9#11b13","7b5b9b13"]],"7no5":["1P 3M 7m"],"7sus4":["1P 4P 5P 7m",["7sus"]],"7sus4b9":["1P 4P 5P 7m 9m",["susb9","7susb9","7b9sus","7b9sus4","phryg"]],"7sus4b9b13":["1P 4P 5P 7m 9m 13m",["7b9b13sus4"]],"9#11":["1P 3M 5P 7m 9M 11A",["9+4","9#4","9#11_","9#4_"]],"9#11b13":["1P 3M 5P 7m 9M 11A 13m",["9b5b13"]],"9#5":["1P 3M 5A 7m 9M",["9+"]],"9#5#11":["1P 3M 5A 7m 9M 11A"],"9b13":["1P 3M 7m 9M 13m"],"9b5":["1P 3M 5d 7m 9M"],"9no5":["1P 3M 7m 9M"],"9sus4":["1P 4P 5P 7m 9M",["9sus"]],"m":["1P 3m 5P"],"m#5":["1P 3m 5A",["m+","mb6"]],"m11":["1P 3m 5P 7m 9M 11P",["_11"]],"m11A 5":["1P 3m 6m 7m 9M 11P"],"m11b5":["1P 3m 7m 12d 2M 4P",["h11","_11b5"]],"m13":["1P 3m 5P 7m 9M 11P 13M",["_13"]],"m6":["1P 3m 4P 5P 13M",["_6"]],"m69":["1P 3m 5P 6M 9M",["_69"]],"m7":["1P 3m 5P 7m",["minor7","_","_7"]],"m7#5":["1P 3m 6m 7m"],"m7add11":["1P 3m 5P 7m 11P",["m7add4"]],"m7b5":["1P 3m 5d 7m",["half-diminished","h7","_7b5"]],"m9":["1P 3m 5P 7m 9M",["_9"]],"m9#5":["1P 3m 6m 7m 9M"],"m9b5":["1P 3m 7m 12d 2M",["h9","-9b5"]],"mMaj7":["1P 3m 5P 7M",["mM7","_M7"]],"mMaj7b6":["1P 3m 5P 6m 7M",["mM7b6"]],"mM9":["1P 3m 5P 7M 9M",["mMaj9","-M9"]],"mM9b6":["1P 3m 5P 6m 7M 9M",["mMaj9b6"]],"mb6M7":["1P 3m 6m 7M"],"mb6b9":["1P 3m 6m 9m"],"o":["1P 3m 5d",["mb5","dim"]],"o7":["1P 3m 5d 13M",["diminished","m6b5","dim7"]],"o7M7":["1P 3m 5d 6M 7M"],"oM7":["1P 3m 5d 7M"],"sus24":["1P 2M 4P 5P",["sus4add9"]],"+add#9":["1P 3M 5A 9A"],"madd4":["1P 3m 4P 5P"],"madd9":["1P 3m 5P 9M"]}'
      );
    },
    ,
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(52),
        i = new WeakMap();
      e.keySignatureKeys = [
        "Cb",
        "Gb",
        "Db",
        "Ab",
        "Eb",
        "Bb",
        "F",
        "C",
        "G",
        "D",
        "A",
        "E",
        "B",
        "F#",
        "C#",
      ];
      var o = (function () {
        function t(t) {
          var n = this;
          (this.tempos = []),
            (this.timeSignatures = []),
            (this.keySignatures = []),
            (this.meta = []),
            (this.name = ""),
            i.set(this, 480),
            t &&
              (i.set(this, t.header.ticksPerBeat),
              t.tracks[0].forEach(function (t) {
                t.meta &&
                  ("timeSignature" === t.type
                    ? n.timeSignatures.push({
                        ticks: t.absoluteTime,
                        timeSignature: [t.numerator, t.denominator],
                      })
                    : "setTempo" === t.type
                    ? n.tempos.push({
                        bpm: 6e7 / t.microsecondsPerBeat,
                        ticks: t.absoluteTime,
                      })
                    : "keySignature" === t.type
                    ? n.keySignatures.push({
                        key: e.keySignatureKeys[t.key + 7],
                        scale: 0 === t.scale ? "major" : "minor",
                        ticks: t.absoluteTime,
                      })
                    : "trackName" === t.type
                    ? (n.name = t.text)
                    : "endOfTrack" !== t.type &&
                      n.meta.push({
                        text: t.text,
                        ticks: t.absoluteTime,
                        type: t.type,
                      }));
              }),
              this.update());
        }
        return (
          (t.prototype.update = function () {
            var t = this,
              e = 0,
              n = 0;
            this.tempos.sort(function (t, e) {
              return t.ticks - e.ticks;
            }),
              this.tempos.forEach(function (r, i) {
                var o = i > 0 ? t.tempos[i - 1].bpm : t.tempos[0].bpm,
                  s = r.ticks / t.ppq - n,
                  a = (60 / o) * s;
                (r.time = a + e), (e = r.time), (n += s);
              }),
              this.timeSignatures.sort(function (t, e) {
                return t.ticks - e.ticks;
              }),
              this.timeSignatures.forEach(function (e, n) {
                var r = n > 0 ? t.timeSignatures[n - 1] : t.timeSignatures[0],
                  i =
                    (e.ticks - r.ticks) /
                    t.ppq /
                    r.timeSignature[0] /
                    (r.timeSignature[1] / 4);
                (r.measures = r.measures || 0), (e.measures = i + r.measures);
              });
          }),
          (t.prototype.ticksToSeconds = function (t) {
            var e = r.search(this.tempos, t);
            if (-1 !== e) {
              var n = this.tempos[e],
                i = n.time,
                o = (t - n.ticks) / this.ppq;
              return i + (60 / n.bpm) * o;
            }
            return 0.5 * (t / this.ppq);
          }),
          (t.prototype.ticksToMeasures = function (t) {
            var e = r.search(this.timeSignatures, t);
            if (-1 !== e) {
              var n = this.timeSignatures[e],
                i = (t - n.ticks) / this.ppq;
              return (
                n.measures + i / (n.timeSignature[0] / n.timeSignature[1]) / 4
              );
            }
            return t / this.ppq / 4;
          }),
          Object.defineProperty(t.prototype, "ppq", {
            get: function () {
              return i.get(this);
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.secondsToTicks = function (t) {
            var e = r.search(this.tempos, t, "time");
            if (-1 !== e) {
              var n = this.tempos[e],
                i = (t - n.time) / (60 / n.bpm);
              return Math.round(n.ticks + i * this.ppq);
            }
            var o = t / 0.5;
            return Math.round(o * this.ppq);
          }),
          (t.prototype.toJSON = function () {
            return {
              keySignatures: this.keySignatures,
              meta: this.meta,
              name: this.name,
              ppq: this.ppq,
              tempos: this.tempos.map(function (t) {
                return { bpm: t.bpm, ticks: t.ticks };
              }),
              timeSignatures: this.timeSignatures,
            };
          }),
          (t.prototype.fromJSON = function (t) {
            (this.name = t.name),
              (this.tempos = t.tempos.map(function (t) {
                return Object.assign({}, t);
              })),
              (this.timeSignatures = t.timeSignatures.map(function (t) {
                return Object.assign({}, t);
              })),
              (this.keySignatures = t.keySignatures.map(function (t) {
                return Object.assign({}, t);
              })),
              (this.meta = t.meta.map(function (t) {
                return Object.assign({}, t);
              })),
              i.set(this, t.ppq),
              this.update();
          }),
          (t.prototype.setTempo = function (t) {
            (this.tempos = [{ bpm: t, ticks: 0 }]), this.update();
          }),
          t
        );
      })();
      e.Header = o;
    },
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      var r =
          (this && this.__awaiter) ||
          function (t, e, n, r) {
            return new (n || (n = Promise))(function (i, o) {
              function s(t) {
                try {
                  u(r.next(t));
                } catch (t) {
                  o(t);
                }
              }
              function a(t) {
                try {
                  u(r.throw(t));
                } catch (t) {
                  o(t);
                }
              }
              function u(t) {
                var e;
                t.done
                  ? i(t.value)
                  : ((e = t.value),
                    e instanceof n
                      ? e
                      : new n(function (t) {
                          t(e);
                        })).then(s, a);
              }
              u((r = r.apply(t, e || [])).next());
            });
          },
        i =
          (this && this.__generator) ||
          function (t, e) {
            var n,
              r,
              i,
              o,
              s = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: a(0), throw: a(1), return: a(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function a(o) {
              return function (a) {
                return (function (o) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; s; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (i =
                            2 & o[0]
                              ? r.return
                              : o[0]
                              ? r.throw || ((i = r.return) && i.call(r), 0)
                              : r.next) &&
                          !(i = i.call(r, o[1])).done)
                      )
                        return i;
                      switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                        case 0:
                        case 1:
                          i = o;
                          break;
                        case 4:
                          return s.label++, { value: o[1], done: !1 };
                        case 5:
                          s.label++, (r = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !((i = s.trys),
                            (i = i.length > 0 && i[i.length - 1]) ||
                              (6 !== o[0] && 2 !== o[0]))
                          ) {
                            s = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!i || (o[1] > i[0] && o[1] < i[3]))
                          ) {
                            s.label = o[1];
                            break;
                          }
                          if (6 === o[0] && s.label < i[1]) {
                            (s.label = i[1]), (i = o);
                            break;
                          }
                          if (i && s.label < i[2]) {
                            (s.label = i[2]), s.ops.push(o);
                            break;
                          }
                          i[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      o = e.call(t, s);
                    } catch (t) {
                      (o = [6, t]), (r = 0);
                    } finally {
                      n = i = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, a]);
              };
            }
          };
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = n(51),
        s = n(82),
        a = n(40),
        u = n(53),
        c = (function () {
          function t(t) {
            var e = this,
              n = null;
            t &&
              (t instanceof ArrayBuffer && (t = new Uint8Array(t)),
              (n = o.parseMidi(t)).tracks.forEach(function (t) {
                var e = 0;
                t.forEach(function (t) {
                  (e += t.deltaTime), (t.absoluteTime = e);
                });
              }),
              (n.tracks = (function (t) {
                for (var e = [], n = 0; n < t.length; n++)
                  for (
                    var r = e.length,
                      i = new Map(),
                      o = Array(16).fill(0),
                      s = 0,
                      a = t[n];
                    s < a.length;
                    s++
                  ) {
                    var u = a[s],
                      c = r,
                      l = u.channel;
                    if (void 0 !== l) {
                      "programChange" === u.type && (o[l] = u.programNumber);
                      var h = o[l] + " " + l;
                      i.has(h)
                        ? (c = i.get(h))
                        : ((c = r + i.size), i.set(h, c));
                    }
                    e[c] || e.push([]), e[c].push(u);
                  }
                return e;
              })(n.tracks))),
              (this.header = new a.Header(n)),
              (this.tracks = []),
              t &&
                ((this.tracks = n.tracks.map(function (t) {
                  return new u.Track(t, e.header);
                })),
                1 === n.header.format &&
                  0 === this.tracks[0].duration &&
                  this.tracks.shift());
          }
          return (
            (t.fromUrl = function (e) {
              return r(this, void 0, void 0, function () {
                var n;
                return i(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, fetch(e)];
                    case 1:
                      return (n = r.sent()).ok ? [4, n.arrayBuffer()] : [3, 3];
                    case 2:
                      return [2, new t(r.sent())];
                    case 3:
                      throw new Error("could not load " + e);
                  }
                });
              });
            }),
            Object.defineProperty(t.prototype, "name", {
              get: function () {
                return this.header.name;
              },
              set: function (t) {
                this.header.name = t;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "duration", {
              get: function () {
                var t = this.tracks.map(function (t) {
                  return t.duration;
                });
                return Math.max.apply(Math, t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "durationTicks", {
              get: function () {
                var t = this.tracks.map(function (t) {
                  return t.durationTicks;
                });
                return Math.max.apply(Math, t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.addTrack = function () {
              var t = new u.Track(void 0, this.header);
              return this.tracks.push(t), t;
            }),
            (t.prototype.toArray = function () {
              return s.encode(this);
            }),
            (t.prototype.toJSON = function () {
              return {
                header: this.header.toJSON(),
                tracks: this.tracks.map(function (t) {
                  return t.toJSON();
                }),
              };
            }),
            (t.prototype.fromJSON = function (t) {
              var e = this;
              (this.header = new a.Header()),
                this.header.fromJSON(t.header),
                (this.tracks = t.tracks.map(function (t) {
                  var n = new u.Track(void 0, e.header);
                  return n.fromJSON(t), n;
                }));
            }),
            (t.prototype.clone = function () {
              var e = new t();
              return e.fromJSON(this.toJSON()), e;
            }),
            t
          );
        })();
      e.Midi = c;
      var l = n(53);
      e.Track = l.Track;
      var h = n(40);
      e.Header = h.Header;
    },
    ,
    ,
    ,
    ,
    function (t, e, n) {
      (e.parseMidi = n(80)), (e.writeMidi = n(81));
    },
    function (t, e, n) {
      "use strict";
      function r(t, e, n) {
        void 0 === n && (n = "ticks");
        var r = 0,
          i = t.length,
          o = i;
        if (i > 0 && t[i - 1][n] <= e) return i - 1;
        for (; r < o; ) {
          var s = Math.floor(r + (o - r) / 2),
            a = t[s],
            u = t[s + 1];
          if (a[n] === e) {
            for (var c = s; c < t.length; c++) {
              t[c][n] === e && (s = c);
            }
            return s;
          }
          if (a[n] < e && u[n] > e) return s;
          a[n] > e ? (o = s) : a[n] < e && (r = s + 1);
        }
        return -1;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.search = r),
        (e.insert = function (t, e, n) {
          if ((void 0 === n && (n = "ticks"), t.length)) {
            var i = r(t, e[n], n);
            t.splice(i + 1, 0, e);
          } else t.push(e);
        });
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(52),
        i = n(54),
        o = n(84),
        s = n(85),
        a = n(86),
        u = n(88),
        c = new WeakMap(),
        l = (function () {
          function t(t, e) {
            var n = this;
            if (
              ((this.name = ""),
              (this.notes = []),
              (this.controlChanges = o.createControlChanges()),
              (this.pitchBends = []),
              c.set(this, e),
              t)
            ) {
              var r = t.find(function (t) {
                return "trackName" === t.type;
              });
              this.name = r ? r.text : "";
            }
            if (
              ((this.instrument = new a.Instrument(t, this)),
              (this.channel = 0),
              t)
            ) {
              for (
                var i = t.filter(function (t) {
                    return "noteOn" === t.type;
                  }),
                  s = t.filter(function (t) {
                    return "noteOff" === t.type;
                  }),
                  u = function () {
                    var t = i.shift();
                    l.channel = t.channel;
                    var e = s.findIndex(function (e) {
                      return (
                        e.noteNumber === t.noteNumber &&
                        e.absoluteTime >= t.absoluteTime
                      );
                    });
                    if (-1 !== e) {
                      var n = s.splice(e, 1)[0];
                      l.addNote({
                        durationTicks: n.absoluteTime - t.absoluteTime,
                        midi: t.noteNumber,
                        noteOffVelocity: n.velocity / 127,
                        ticks: t.absoluteTime,
                        velocity: t.velocity / 127,
                      });
                    }
                  },
                  l = this;
                i.length;

              )
                u();
              t
                .filter(function (t) {
                  return "controller" === t.type;
                })
                .forEach(function (t) {
                  n.addCC({
                    number: t.controllerType,
                    ticks: t.absoluteTime,
                    value: t.value / 127,
                  });
                }),
                t
                  .filter(function (t) {
                    return "pitchBend" === t.type;
                  })
                  .forEach(function (t) {
                    n.addPitchBend({
                      ticks: t.absoluteTime,
                      value: t.value / Math.pow(2, 13),
                    });
                  });
            }
          }
          return (
            (t.prototype.addNote = function (t) {
              var e = c.get(this),
                n = new u.Note(
                  { midi: 0, ticks: 0, velocity: 1 },
                  { ticks: 0, velocity: 0 },
                  e
                );
              return (
                Object.assign(n, t), r.insert(this.notes, n, "ticks"), this
              );
            }),
            (t.prototype.addCC = function (t) {
              var e = c.get(this),
                n = new i.ControlChange({ controllerType: t.number }, e);
              return (
                delete t.number,
                Object.assign(n, t),
                Array.isArray(this.controlChanges[n.number]) ||
                  (this.controlChanges[n.number] = []),
                r.insert(this.controlChanges[n.number], n, "ticks"),
                this
              );
            }),
            (t.prototype.addPitchBend = function (t) {
              var e = c.get(this),
                n = new s.PitchBend({}, e);
              return (
                Object.assign(n, t), r.insert(this.pitchBends, n, "ticks"), this
              );
            }),
            Object.defineProperty(t.prototype, "duration", {
              get: function () {
                if (!this.notes.length) return 0;
                for (
                  var t =
                      this.notes[this.notes.length - 1].time +
                      this.notes[this.notes.length - 1].duration,
                    e = 0;
                  e < this.notes.length - 1;
                  e++
                ) {
                  var n = this.notes[e].time + this.notes[e].duration;
                  t < n && (t = n);
                }
                return t;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "durationTicks", {
              get: function () {
                if (!this.notes.length) return 0;
                for (
                  var t =
                      this.notes[this.notes.length - 1].ticks +
                      this.notes[this.notes.length - 1].durationTicks,
                    e = 0;
                  e < this.notes.length - 1;
                  e++
                ) {
                  var n = this.notes[e].ticks + this.notes[e].durationTicks;
                  t < n && (t = n);
                }
                return t;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.fromJSON = function (t) {
              var e = this;
              for (var n in ((this.name = t.name),
              (this.channel = t.channel),
              (this.instrument = new a.Instrument(void 0, this)),
              this.instrument.fromJSON(t.instrument),
              t.controlChanges))
                t.controlChanges[n] &&
                  t.controlChanges[n].forEach(function (t) {
                    e.addCC({
                      number: t.number,
                      ticks: t.ticks,
                      value: t.value,
                    });
                  });
              t.notes.forEach(function (t) {
                e.addNote({
                  durationTicks: t.durationTicks,
                  midi: t.midi,
                  ticks: t.ticks,
                  velocity: t.velocity,
                });
              });
            }),
            (t.prototype.toJSON = function () {
              for (var t = {}, e = 0; e < 127; e++)
                this.controlChanges.hasOwnProperty(e) &&
                  (t[e] = this.controlChanges[e].map(function (t) {
                    return t.toJSON();
                  }));
              return {
                channel: this.channel,
                controlChanges: t,
                pitchBends: this.pitchBends.map(function (t) {
                  return t.toJSON();
                }),
                instrument: this.instrument.toJSON(),
                name: this.name,
                notes: this.notes.map(function (t) {
                  return t.toJSON();
                }),
              };
            }),
            t
          );
        })();
      e.Track = l;
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.controlChangeNames = {
          1: "modulationWheel",
          2: "breath",
          4: "footController",
          5: "portamentoTime",
          7: "volume",
          8: "balance",
          10: "pan",
          64: "sustain",
          65: "portamentoTime",
          66: "sostenuto",
          67: "softPedal",
          68: "legatoFootswitch",
          84: "portamentoControl",
        }),
        (e.controlChangeIds = Object.keys(e.controlChangeNames).reduce(
          function (t, n) {
            return (t[e.controlChangeNames[n]] = n), t;
          },
          {}
        ));
      var r = new WeakMap(),
        i = new WeakMap(),
        o = (function () {
          function t(t, e) {
            r.set(this, e),
              i.set(this, t.controllerType),
              (this.ticks = t.absoluteTime),
              (this.value = t.value);
          }
          return (
            Object.defineProperty(t.prototype, "number", {
              get: function () {
                return i.get(this);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "name", {
              get: function () {
                return e.controlChangeNames[this.number]
                  ? e.controlChangeNames[this.number]
                  : null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "time", {
              get: function () {
                return r.get(this).ticksToSeconds(this.ticks);
              },
              set: function (t) {
                var e = r.get(this);
                this.ticks = e.secondsToTicks(t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.toJSON = function () {
              return {
                number: this.number,
                ticks: this.ticks,
                time: this.time,
                value: this.value,
              };
            }),
            t
          );
        })();
      e.ControlChange = o;
    },
    function (t, e, n) {
      self,
        (t.exports = (function (t) {
          var e = {};
          function n(r) {
            if (e[r]) return e[r].exports;
            var i = (e[r] = { i: r, l: !1, exports: {} });
            return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
          }
          return (
            (n.m = t),
            (n.c = e),
            (n.d = function (t, e, r) {
              n.o(t, e) ||
                Object.defineProperty(t, e, { enumerable: !0, get: r });
            }),
            (n.r = function (t) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (n.t = function (t, e) {
              if ((1 & e && (t = n(t)), 8 & e)) return t;
              if (4 & e && "object" == typeof t && t && t.__esModule) return t;
              var r = Object.create(null);
              if (
                (n.r(r),
                Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: t,
                }),
                2 & e && "string" != typeof t)
              )
                for (var i in t)
                  n.d(
                    r,
                    i,
                    function (e) {
                      return t[e];
                    }.bind(null, i)
                  );
              return r;
            }),
            (n.n = function (t) {
              var e =
                t && t.__esModule
                  ? function () {
                      return t.default;
                    }
                  : function () {
                      return t;
                    };
              return n.d(e, "a", e), e;
            }),
            (n.o = function (t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.p = ""),
            n((n.s = 4))
          );
        })([
          function (t, e, n) {
            "use strict";
            n.r(e),
              n.d(e, "SVGNS", function () {
                return r;
              }),
              n.d(e, "drawSVGPath", function () {
                return i;
              }),
              n.d(e, "drawSVGText", function () {
                return o;
              }),
              n.d(e, "createSVGGroupChild", function () {
                return s;
              }),
              n.d(e, "setFade", function () {
                return a;
              });
            const r = "http://www.w3.org/2000/svg";
            function i(t, e, n, i, o, s, a = 1) {
              const u = document.createElementNS(r, "path");
              return (
                u.setAttributeNS(null, "d", e),
                u.setAttributeNS(
                  null,
                  "transform",
                  `translate(${n}, ${i}) scale(${o}, ${s})`
                ),
                u.setAttributeNS(null, "opacity", "" + a),
                t.appendChild(u),
                u
              );
            }
            function o(t, e, n, i, o, s = !1, a = 1, u = 1) {
              const c = document.createElementNS(r, "text");
              c.setAttributeNS(null, "font-family", "Times"),
                c.setAttributeNS(null, "font-size", o),
                s && c.setAttributeNS(null, "font-weight", "bold"),
                c.setAttributeNS(
                  null,
                  "transform",
                  `translate(${n}, ${i}) scale(${a}, ${u})`
                );
              const l = document.createTextNode(e);
              return c.appendChild(l), t.appendChild(c), c;
            }
            function s(t, e) {
              const n = document.createElementNS(r, "g");
              return n.setAttribute("data-id", e), t.appendChild(n), n;
            }
            function a(t, e = !1, n = 1, i = 0) {
              let o = t.querySelector("animate");
              if (!o) {
                (o = document.createElementNS(r, "animate")).setAttributeNS(
                  null,
                  "attributeName",
                  "opacity"
                ),
                  o.setAttributeNS(null, "dur", "4s"),
                  o.setAttributeNS(null, "fill", "freeze"),
                  o.setAttributeNS(null, "keyTimes", "0; 0.25; 0.5; 0.75; 1");
                const t = (n + 3 * i) / 4;
                o.setAttributeNS(
                  null,
                  "values",
                  `${n}; ${t}; ${i}; ${t}; ${n}`
                );
              }
              return (
                e
                  ? o.setAttributeNS(null, "repeatCount", "indefinite")
                  : o.setAttributeNS(null, "repeatCount", "1"),
                t.appendChild(o),
                t
              );
            }
          },
          function (t, e, n) {
            "use strict";
            n.r(e),
              n.d(e, "PATH_SCALE", function () {
                return r;
              }),
              n.d(e, "staffLinePath", function () {
                return o;
              }),
              n.d(e, "extraLinePath", function () {
                return s;
              }),
              n.d(e, "barPath", function () {
                return a;
              }),
              n.d(e, "stemPath", function () {
                return u;
              }),
              n.d(e, "singleFlagPath", function () {
                return c;
              }),
              n.d(e, "multiFlagPath", function () {
                return l;
              }),
              n.d(e, "tiePath", function () {
                return h;
              }),
              n.d(e, "dotPath", function () {
                return p;
              }),
              n.d(e, "NOTE_PATHS", function () {
                return f;
              }),
              n.d(e, "REST_PATHS", function () {
                return m;
              }),
              n.d(e, "CLEF_PATHS", function () {
                return d;
              }),
              n.d(e, "ACCIDENTAL_PATHS", function () {
                return g;
              });
            const r = 100,
              i =
                "M 0,10 C 0,-15 35,-50 80,-50 110,-50 125,-35 125,-10 \n125,15 90,50 45,50 15,50 0,35 0,10 Z",
              o = "m 0,0 h 100",
              s = "m -25,0 h 175",
              a = "m 0,-200 v 400",
              u = "m 0,0 v 100 h 15 v -100 z",
              c =
                "M0,0 h 12 c 7,100 175,156 62,314 79,-177 -49,\n-193 -61,-200 l -13,-5 z",
              l =
                "m 0,0 h 10 c 6,72 173,64 84,227 44,-120 -44,\n-123 -94,-167 z",
              h =
                "M 0,25 C 10,46 30,67 50,67 69,67 90,47 100,25 94,\n65 73,89 50,89 26,89 5,63 0,25 Z",
              p = "M 5 -20 a 20 20 0 1 0 0.00001 0 z",
              f = {
                4: {
                  path:
                    "m 0,0 c 0,-37 49,-51 79,-51 31,0 83,13 83,51 0,39 \n-55,51 -84,51 C 49,51 0,37 0,0 Z m 111,31 c 13,-19 0,-58 -22,-68 -33,-15 \n-53,10 -39,49 9,27 48,39 61,19 z",
                  width: 150,
                  stemVSteps: 0,
                  stemAnchor: 0,
                  flags: 0,
                },
                2: {
                  path:
                    "m 0,10 c 0,-25 35,-60 80,-60 15,0 45,4 45,40 C 125,16 \n89,50 45,50 17,50 0,36 0,10 Z m 71,7 c 17,-11 45,-34 38,-45 -7,-10 -39,1 \n-57,12 -19,11 -42,31 -36,42 6,10 37,2 55,-9 z",
                  width: 125,
                  stemVSteps: 7,
                  stemAnchor: -10,
                  flags: 0,
                },
                1: {
                  path: i,
                  width: 125,
                  stemVSteps: 7,
                  stemAnchor: -10,
                  flags: 0,
                },
                0.5: {
                  path: i,
                  width: 125,
                  stemVSteps: 7,
                  stemAnchor: -10,
                  flags: 1,
                },
                0.25: {
                  path: i,
                  width: 125,
                  stemVSteps: 9,
                  stemAnchor: -10,
                  flags: 2,
                },
                0.125: {
                  path: i,
                  width: 125,
                  stemVSteps: 11,
                  stemAnchor: -10,
                  flags: 3,
                },
                0.0625: {
                  path: i,
                  width: 125,
                  stemVSteps: 13,
                  stemAnchor: -10,
                  flags: 4,
                },
              },
              m = {
                4: "m 0,-50 h 125 v -50 H 0 Z",
                2: "M 0,0 H 125 V -50 H 0 Z",
                1: "m 0,-25 c 39,-39 37,-75 8,-120 l 6,-5 61,103 C \n40,-13 31,4 73,71 l -5,5 C 14,52 16,125 67,144 l -4,6 C -37,102 -1,22 59,60 Z",
                0.5: "m 52,-47 c 26,-2 42,-21 48,-42 l 12,4 L 64,83 52,79 \n88,-49 c 0,0 -17,22 -57,22 -16,0 -31,-13 -31,-27 0,-18 10,-31 27,-31 17,0 \n33,15 25,38 z",
                0.25: "m 129,-191 c -6,21 -22,40 -48,42 8,-23 -8,-38 \n-25,-38 -17,0 -27,13 -27,31 0,14 15,27 31,27 40,0 57,-22 57,-22 l -20,69 \nc -7,18 -22,33 -45,35 8,-23 -8,-38 -25,-38 -17,0 -27,13 -27,31 0,14 15,27 \n31,27 40,0 57,-22 57,-22 l -36,128 12,4 77,-270 z",
                0.125: "m 129,-191 c -6,21 -22,40 -48,42 8,-23 -8,-38 \n-25,-38 -17,0 -27,13 -27,31 0,14 15,27 31,27 40,0 57,-22 57,-22 l -20,69 \nc -7,18 -22,33 -45,35 8,-23 -8,-38 -25,-38 -17,0 -27,13 -27,31 0,14 15,27 \n31,27 40,0 57,-22 57,-22 L 68,20 C 61,37 46,51 24,52 32,29 16,14 -1,14 c \n-17,0 -27,13 -27,31 0,14 15,27 31,27 38,0 55,-20 57,-22 l -36,128 12,4 \n105,-369 z",
                0.0625: "m 158,-292 c -6,21 -22,40 -48,42 8,-23 -8,-38 \n-25,-38 -17,0 -27,13 -27,31 0,14 15,27 31,27 40,0 57,-22 57,-22 l -17,61 \nv 0 c -6,21 -22,40 -48,42 8,-23 -8,-38 -25,-38 -17,0 -27,13 -27,31 0,14 \n15,27 31,27 40,0 57,-22 57,-22 l -20,69 c -7,18 -22,33 -45,35 8,-23 -8,-38 \n-25,-38 -17,0 -27,13 -27,31 0,14 15,27 31,27 40,0 57,-22 57,-22 L 68,20 C \n61,37 46,51 24,52 32,29 16,14 -1,14 c -17,0 -27,13 -27,31 0,14 15,27 31,27 \n38,0 55,-20 57,-22 l -36,128 12,4 134,-469 z",
              },
              d = {
                50: {
                  path:
                    "m 101,-199 c -49,0 -100,28 -100,83 0,39 58,57 82,26 15,-20 \n-4,-47 -32,-47 -23,1 -25,0 -25,-8 0,-22 40,-46 71,-41 91,16 67,208 -105,302 \n75,-27 198,-94 211,-201 6,-66 -42,-114 -102,-114 z m 143,33 c -13,0 -23,11 \n-23,24 0,14 10,24 23,24 13,0 23,-11 23,-24 0,-13 -10,-24 -23,-24 z m 2,83 c \n-13,0 -23,11 -23,24 0,14 10,24 23,24 13,0 23,-11 23,-24 0,-13 -10,-24 -23,-24 \nz",
                  upper: -4,
                  lower: 3,
                },
                71: {
                  path:
                    "M 139,48 C 102,57 76,120 131,151 41,128 64,24 129,2 L \n117,-57 C -32,47 26,217 166,182 Z m 12,-1 27,131 C 242,153 216,46 151,47 \nZ m -35,-177 c 34,-23 82,-117 50,-140 -23,-17 -71,33 -50,140 z m -10,10 c \n-23,-77 -20,-200 48,-213 19,-4 89,171 -26,266 l 13,66 c 120,-6 137,155 \n39,191 l 12,58 c 30,131 -137,145 -138,47 0,-29 37,-59 63,-37 21,18 25,71 \n-25,70 32,42 103,0 91,-65 L 167,193 C 56,232 -112,63 106,-120 Z",
                  upper: -7,
                  lower: 8,
                },
              },
              g = [
                null,
                "m -49,-121 v 52 l -29,9 v -48 h -8 v 51 l -20,6 v 29 l \n20,-6 v 70 l -20,6 v 30 l 20,-6 v 51 h 8 V 69 l 30,-8 v 50 h 8 V 58 l 20,-6 \nV 23 l -20,6 v -71 l 20,-6 v -29 l -20,6 v -50 z m 1,82 v 71 l -29,9 v -71 z",
                "M -106,-166 V 67 c 52,-42 85,-56 85,-94 0,-47 -46,-51 \n-73,-22 v -117 z m 31,120 c 20,0 42,46 -20,91 V -7 c 0,-28 10,-39 20,-39 z",
                "m -81,-58 v -48 H -92 V 73 l 60,-13 v 50 h 11 V -72 Z m \n50,24 v 58 l -50,11 v -58 z",
              ];
          },
          function (t, e, n) {
            "use strict";
            n.r(e),
              n.d(e, "MIN_RESOLUTION", function () {
                return r;
              }),
              n.d(e, "STEM_WIDTH", function () {
                return i;
              }),
              n.d(e, "LINE_STROKE", function () {
                return o;
              }),
              n.d(e, "COMPACT_SPACING", function () {
                return s;
              });
            const r = 0.0625,
              i = 15,
              o = 1,
              s = 150;
          },
          function (t, e, n) {
            "use strict";
            n.r(e),
              n.d(e, "MAX_QUARTER_DIVISION", function () {
                return u;
              }),
              n.d(e, "ScrollType", function () {
                return c;
              }),
              n.d(e, "StaffSVGRender", function () {
                return l;
              });
            var r = n(2),
              i = n(0),
              o = n(1);
            const s = [
                {
                  steps: [0, 0, -1, -1, -2, -3, -3, -4, -4, -5, -5, -6],
                  accidental: [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
                },
                {
                  steps: [0, -1, -1, -2, -2, -3, -4, -4, -5, -5, -6, -6],
                  accidental: [0, 0, 3, 0, 3, 0, 0, 3, 0, 3, 0, 3],
                },
                {
                  steps: [0, 0, -1, -1, -2, -3, -3, -4, -4, -5, -5, -6],
                  accidental: [3, 0, 0, 1, 0, 3, 0, 0, 1, 0, 1, 0],
                },
                {
                  steps: [0, -1, -1, -2, -2, -3, -4, -4, -5, -5, -6, -6],
                  accidental: [0, 2, 0, 0, 3, 0, 2, 0, 0, 3, 0, 3],
                },
                {
                  steps: [0, 0, -1, -1, -2, -3, -3, -4, -4, -5, -5, -6],
                  accidental: [3, 0, 3, 0, 0, 3, 0, 3, 0, 0, 1, 0],
                },
                {
                  steps: [0, -1, -1, -2, -2, -3, -4, -4, -5, -5, -6, -6],
                  accidental: [0, 2, 0, 2, 0, 0, 2, 0, 2, 0, 0, 3],
                },
                {
                  steps: [0, -1, -1, -2, -2, -3, -4, -4, -5, -5, -6, -7],
                  accidental: [3, 0, 3, 0, 3, 0, 0, 3, 0, 3, 0, 0],
                },
                {
                  steps: [0, 0, -1, -1, -2, -3, -3, -4, -4, -5, -5, -6],
                  accidental: [0, 1, 0, 1, 0, 3, 0, 0, 1, 0, 1, 0],
                },
                {
                  steps: [0, -1, -1, -2, -2, -3, -4, -4, -5, -5, -6, -6],
                  accidental: [0, 0, 3, 0, 3, 0, 2, 0, 0, 3, 0, 3],
                },
                {
                  steps: [0, 0, -1, -1, -2, -3, -3, -4, -4, -5, -5, -6],
                  accidental: [3, 0, 0, 1, 0, 3, 0, 3, 0, 0, 1, 0],
                },
                {
                  steps: [0, -1, -1, -2, -2, -3, -4, -4, -5, -5, -6, -6],
                  accidental: [0, 2, 0, 0, 3, 0, 2, 0, 2, 0, 0, 3],
                },
                {
                  steps: [0, 0, -1, -1, -2, -3, -3, -4, -4, -5, -5, -6],
                  accidental: [3, 0, 3, 0, 0, 3, 0, 3, 0, 3, 0, 0],
                },
              ],
              a = [
                { accidental: 1, pitches: [] },
                { accidental: 2, pitches: [70, 75, 68, 73, 66] },
                { accidental: 1, pitches: [78, 73] },
                { accidental: 2, pitches: [70, 75, 68] },
                { accidental: 1, pitches: [78, 73, 80, 75] },
                { accidental: 2, pitches: [70] },
                { accidental: 2, pitches: [70, 75, 68, 73, 66, 71] },
                { accidental: 1, pitches: [78] },
                { accidental: 2, pitches: [70, 75, 68, 73] },
                { accidental: 1, pitches: [78, 73, 80] },
                { accidental: 2, pitches: [70, 75] },
                { accidental: 1, pitches: [78, 73, 80, 75, 70] },
              ],
              u = 16;
            var c;
            !(function (t) {
              (t[(t.PAGE = 0)] = "PAGE"),
                (t[(t.NOTE = 1)] = "NOTE"),
                (t[(t.BAR = 2)] = "BAR");
            })(c || (c = {}));
            class l {
              constructor(t, e, n) {
                (this.handleScrollEvent = (t) => {
                  (this.lastKnownScrollLeft = this.parentElement.scrollLeft),
                    this.ticking ||
                      window.requestAnimationFrame(() => {
                        this.changeAndDrawSignaturesIfNeeded(
                          this.lastKnownScrollLeft
                        ),
                          (this.ticking = !1);
                      }),
                    (this.ticking = !0);
                }),
                  (this.scoreInfo = t),
                  (this.config = {
                    noteHeight: e.noteHeight || 6,
                    noteSpacing: e.noteSpacing || 1,
                    pixelsPerTimeStep: e.pixelsPerTimeStep || 30,
                    noteRGB: e.noteRGB || "8, 41, 64",
                    activeNoteRGB: e.activeNoteRGB || "240, 84, 119",
                  }),
                  (this.div = n),
                  (this.timeSignatureNumerator = 4),
                  (this.timeSignatureDenominator = 4),
                  (this.key = e.defaultKey || 0),
                  (this.scrollType = e.scrollType || c.PAGE),
                  (this.scale = this.config.noteHeight / o.PATH_SCALE),
                  (void 0 === e.pixelsPerTimeStep ||
                    e.pixelsPerTimeStep <= 0) &&
                    ((this.config.pixelsPerTimeStep = 0),
                    (this.config.noteSpacing = r.COMPACT_SPACING * this.scale)),
                  this.clear(),
                  this.redraw();
              }
              clear() {
                for (; this.div.lastChild; )
                  this.div.removeChild(this.div.lastChild);
                (this.div.style.overflow = "visible"),
                  (this.div.style.position = "relative"),
                  (this.overlaySVG = document.createElementNS(i.SVGNS, "svg")),
                  (this.overlaySVG.style.position = "absolute"),
                  this.div.appendChild(this.overlaySVG),
                  (this.overlayG = Object(i.createSVGGroupChild)(
                    this.overlaySVG,
                    "overlay"
                  )),
                  (this.signaturesBlinking = !1),
                  (this.signaturesQuarters = 0),
                  (this.parentElement = document.createElement("div")),
                  (this.parentElement.style.overflow = "auto"),
                  this.div.appendChild(this.parentElement),
                  (this.ticking = !1),
                  (this.lastKnownScrollLeft = 0),
                  this.parentElement.addEventListener(
                    "scroll",
                    this.handleScrollEvent
                  ),
                  (this.staffSVG = document.createElementNS(i.SVGNS, "svg")),
                  this.parentElement.appendChild(this.staffSVG),
                  (this.staffG = Object(i.createSVGGroupChild)(
                    this.staffSVG,
                    "staff"
                  )),
                  (this.linesG = Object(i.createSVGGroupChild)(
                    this.staffSVG,
                    "lines"
                  )),
                  this.setStroke(this.linesG),
                  this.staffG.appendChild(this.linesG),
                  (this.musicG = Object(i.createSVGGroupChild)(
                    this.staffSVG,
                    "music"
                  )),
                  this.setFill(this.musicG),
                  this.setStroke(this.musicG, 0),
                  this.staffG.appendChild(this.musicG),
                  (this.signaturesG = Object(i.createSVGGroupChild)(
                    this.staffSVG,
                    "signatures"
                  )),
                  this.staffG.appendChild(this.signaturesG);
                let t = 0,
                  e = 0;
                this.scoreInfo.notes.forEach((n) => {
                  (t += n.pitch), ++e;
                });
                const n = t / e;
                (this.clef = n < 60 ? 50 : 71),
                  (this.signaturesList = [{ x: 0, q: 0 }]),
                  (this.signatureCurrent = 0),
                  (this.signatureNext = 0),
                  this.changeKeySignatureIfNeeded(0),
                  this.changeTimeSignatureIfNeeded(0),
                  (this.vStepSize = this.config.noteHeight / 2),
                  (this.hStepSize = this.config.pixelsPerTimeStep),
                  (this.staffOffset = 0),
                  (this.height = 0),
                  (this.width = 0),
                  (this.musicBlockMap = new Map()),
                  (this.playingNotes = []),
                  (this.lastBar = 0),
                  (this.barAccidentals = {}),
                  (this.lastQ = -1);
              }
              isPaintingActiveNote(t, e) {
                const n = t.start === e.start,
                  r =
                    t.start <= e.start &&
                    t.start + t.length >= e.start + e.length;
                return n || r;
              }
              redraw(t, e) {
                let n = -1;
                const r = 0 === this.config.pixelsPerTimeStep;
                if (t) {
                  const o = [];
                  this.playingNotes.forEach((e) => {
                    this.isPaintingActiveNote(e, t)
                      ? o.push(e)
                      : this.highlightElement(this.getGroup(e), !1);
                  }),
                    (this.playingNotes = o);
                  const s = this.getGroup(t);
                  if (s) {
                    this.playingNotes.push(t),
                      this.highlightElement(s, !0),
                      (n =
                        s.getBoundingClientRect().left -
                        this.staffSVG.getBoundingClientRect().left);
                    const o = t.start,
                      a = s.getAttribute("data-is-bar-beginning");
                    (this.scrollType !== c.BAR || a) &&
                      this.scrollIntoViewIfNeeded(e, n),
                      !r &&
                        this.signaturesBlinking &&
                        o >= this.signaturesQuarters &&
                        ((this.signaturesBlinking = !1),
                        Object(i.setFade)(
                          this.overlayG,
                          this.signaturesBlinking
                        ));
                  }
                } else {
                  this.setDetails();
                  const t = -1 === this.lastQ;
                  let e = 0,
                    n = 0;
                  t
                    ? ((n = this.drawSignatures(this.overlayG, e, !0, !0, !0)),
                      r && ((this.width = 0), (n += this.config.noteSpacing)),
                      (n += this.drawRests(this.initialRest, e + n)))
                    : (e = this.width),
                    this.musicBlockMap.forEach((t, i) => {
                      r || (e = this.quartersToTime(i) * this.hStepSize),
                        i > this.lastQ
                          ? ((n += this.drawMusicBlock(t, e + n)),
                            (this.lastQ = i))
                          : i === this.lastQ && (n += this.drawRests(t, e + n));
                    });
                  const i = this.staffSVG.getBoundingClientRect(),
                    o = this.musicG.getBoundingClientRect();
                  if (
                    (this.updateVerticalBoundaries(
                      o.top - i.top,
                      o.bottom - i.top
                    ),
                    r)
                  )
                    this.width += n;
                  else {
                    const t = this.musicBlockMap.get(this.lastQ),
                      e = this.quartersToTime(this.lastQ + t.notes[0].length);
                    this.width = e * this.config.pixelsPerTimeStep;
                  }
                  this.staffSVG.setAttributeNS(null, "width", "" + this.width),
                    this.redrawStaff(this.linesG, 0, this.width);
                }
                return n;
              }
              drawMusicBlock(t, e) {
                const n = t.notes[0].start;
                let s = this.drawBarIfNeeded(n, e);
                s += this.drawSignaturesIfNeeded(n, e + s);
                let a = 0;
                for (let e = 4; e >= r.MIN_RESOLUTION && !a; e /= 2)
                  e <= t.notes[0].length && (a = e);
                if (0 === a) {
                  const e =
                    0 === t.notes[0].length
                      ? "[infinite]"
                      : "" + 4 / t.notes[0].length;
                  console.warn(
                    " StaffRender ",
                    "background:orange; color:white",
                    `StaffRender does not handle notes shorther than 1/${
                      4 / r.MIN_RESOLUTION
                    }th, and this score tries to draw a 1/${e}th. Shortest possible note will be drawn instead.`
                  ),
                    (a = r.MIN_RESOLUTION);
                }
                const u = o.NOTE_PATHS[a];
                let c;
                if (
                  (u.stemAnchor &&
                    (c = Object(i.createSVGGroupChild)(this.musicG, "stem")),
                  t.notes.forEach((n) => {
                    const r = n.vSteps * this.vStepSize,
                      c =
                        2 *
                        (n.vSteps > 0
                          ? Math.floor(n.vSteps / 2)
                          : Math.ceil(n.vSteps / 2)),
                      l = n.vSteps > 0 ? -2 : 2;
                    for (let t = c; Math.abs(t) > 4; t += l)
                      Object(i.drawSVGPath)(
                        this.linesG,
                        o.extraLinePath,
                        e + s,
                        t * this.vStepSize,
                        this.scale,
                        1
                      );
                    if (
                      ((n.g = n.tiedFrom
                        ? n.tiedFrom.g
                        : Object(i.createSVGGroupChild)(
                            this.musicG,
                            `${n.start}-${n.pitch}`
                          )),
                      t.isBarBeginning &&
                        n.g.setAttribute("data-is-bar-beginning", "true"),
                      n.tiedFrom)
                    ) {
                      const t = e + s - n.tiedFrom.xHeadRight;
                      Object(i.drawSVGPath)(
                        n.g,
                        o.tiePath,
                        n.tiedFrom.xHeadRight,
                        r,
                        t / o.PATH_SCALE,
                        this.scale * (n.vSteps < 0 ? -1 : 1),
                        n.opacity
                      );
                    }
                    Object(i.drawSVGPath)(
                      n.g,
                      u.path,
                      e + s,
                      r,
                      this.scale,
                      this.scale,
                      n.opacity
                    ),
                      (n.xHeadRight = e + s + u.width * this.scale),
                      1.5 * a <= n.length &&
                        Object(i.drawSVGPath)(
                          n.g,
                          o.dotPath,
                          e + s + u.width * this.scale + this.vStepSize / 2,
                          r - this.vStepSize / 2,
                          this.scale,
                          this.scale,
                          n.opacity
                        ),
                      0 !== n.accidental &&
                        Object(i.drawSVGPath)(
                          n.g,
                          o.ACCIDENTAL_PATHS[n.accidental],
                          e + s,
                          r,
                          this.scale,
                          this.scale,
                          n.opacity
                        );
                  }),
                  u.stemAnchor)
                ) {
                  let n,
                    a,
                    l = e + s;
                  const h = u.stemAnchor * this.scale,
                    p = t.minVStep + t.maxVStep < 0,
                    f = u.flags > 2 ? 2 * (u.flags - 2) : 0;
                  if (
                    (p
                      ? ((n = t.maxVStep * this.vStepSize - h),
                        (a = (t.minVStep + 7 + f) * this.vStepSize))
                      : ((l += (u.width - r.STEM_WIDTH) * this.scale),
                        (n = t.minVStep * this.vStepSize + h),
                        (a = (t.maxVStep - 7 - f) * this.vStepSize)),
                    Object(i.drawSVGPath)(
                      c,
                      o.stemPath,
                      l,
                      n,
                      this.scale,
                      (a - n) / o.PATH_SCALE
                    ),
                    1 === u.flags)
                  )
                    Object(i.drawSVGPath)(
                      c,
                      o.singleFlagPath,
                      l,
                      a,
                      this.scale,
                      this.scale * (p ? -1 : 1),
                      1
                    );
                  else if (u.flags > 1)
                    for (let t = 0; t < u.flags; ++t)
                      Object(i.drawSVGPath)(
                        c,
                        o.multiFlagPath,
                        l,
                        a,
                        this.scale,
                        this.scale * (p ? -1 : 1),
                        1
                      ),
                        (a += (p ? -2 : 2) * this.vStepSize);
                }
                return (
                  0 === this.config.pixelsPerTimeStep &&
                    ((s += u.width * this.scale),
                    c && (s += c.getBoundingClientRect().width),
                    (s += this.config.noteSpacing)),
                  (s += this.drawRests(t, e + s))
                );
              }
              drawBarIfNeeded(t, e) {
                let n = 0;
                const r = this.lastBar + this.getBarLength();
                return (
                  0 !== t &&
                    t >= r &&
                    (this.config.pixelsPerTimeStep > 0
                      ? (e -= this.config.noteSpacing)
                      : (n = this.config.noteSpacing),
                    Object(i.drawSVGPath)(
                      this.linesG,
                      o.barPath,
                      e,
                      0,
                      1,
                      this.scale
                    ),
                    (this.lastBar = r)),
                  n
                );
              }
              drawRests(t, e) {
                let n = 0,
                  s = t.restToNextLength;
                if (s) {
                  this.config.pixelsPerTimeStep > 0 &&
                    (e +=
                      this.quartersToTime(t.notes[0].length) * this.hStepSize);
                  let a = t.notes[0].start + t.notes[0].length,
                    u = 0;
                  const c = this.lastBar + this.getBarLength() - a;
                  let l;
                  for (
                    s > c && ((u = s - c), (s = c)), l = 4;
                    l > this.getBarLength() && l >= r.MIN_RESOLUTION;
                    l /= 2
                  );
                  let h = l;
                  for (; (s || u) && h >= r.MIN_RESOLUTION; ) {
                    if (h <= s) {
                      (n += this.drawBarIfNeeded(a, e + n)),
                        (n += this.drawSignaturesIfNeeded(a, e + n));
                      const t = Object(i.drawSVGPath)(
                        this.musicG,
                        o.REST_PATHS[h],
                        e + n,
                        0,
                        this.scale,
                        this.scale
                      );
                      this.config.pixelsPerTimeStep > 0
                        ? (e += this.quartersToTime(h) * this.hStepSize)
                        : ((n += t.getBoundingClientRect().width),
                          (n += this.config.noteSpacing)),
                        (a += h),
                        (s -= h);
                    }
                    if (u && s <= 0) {
                      const t = this.getBarLength();
                      for (
                        u > t ? ((s = t), (u -= t)) : ((s = u), (u = 0)), l = 4;
                        l > this.getBarLength() && l >= r.MIN_RESOLUTION;
                        l /= 2
                      );
                      h = l;
                    }
                    s < h && (h /= 2);
                  }
                }
                return n;
              }
              redrawStaff(t, e, n) {
                let r = t.querySelector('g[data-id="staff-five-lines"]');
                if (r)
                  r.setAttributeNS(
                    null,
                    "transform",
                    `scale(${n / o.PATH_SCALE}, 1)`
                  );
                else {
                  r = Object(i.createSVGGroupChild)(t, "staff-five-lines");
                  const s = 0;
                  for (let t = -4; t <= 4; t += 2)
                    Object(i.drawSVGPath)(
                      r,
                      o.staffLinePath,
                      e,
                      s + t * this.vStepSize,
                      n / o.PATH_SCALE,
                      1
                    );
                }
                return r;
              }
              clearSignatureOverlay() {
                for (; this.overlayG.lastChild; )
                  this.overlayG.removeChild(this.overlayG.lastChild);
              }
              drawSignaturesIfNeeded(t, e) {
                let n = 0;
                const o = this.changeKeySignatureIfNeeded(t),
                  s = this.changeTimeSignatureIfNeeded(t);
                if (o || s) {
                  const a =
                    r.COMPACT_SPACING *
                    this.scale *
                    (this.config.pixelsPerTimeStep > 0 ? 3 : 2);
                  this.signaturesList.push({ x: e - a, q: t }),
                    null === this.signatureNext && (this.signatureNext = e);
                  const u =
                    t > 0
                      ? Object(i.createSVGGroupChild)(
                          this.signaturesG,
                          "signatures"
                        )
                      : this.overlayG;
                  n += this.drawSignatures(u, e + n, !1, o, s);
                }
                return 0 === this.config.pixelsPerTimeStep ? n : 0;
              }
              drawSignatures(t, e, n, s, u) {
                const c = r.COMPACT_SPACING * this.scale;
                let l,
                  h = c;
                const p =
                  t === this.overlayG || this.config.pixelsPerTimeStep > 0;
                if (p) {
                  (l = document.createElementNS(
                    i.SVGNS,
                    "rect"
                  )).setAttributeNS(null, "x", "" + e),
                    l.setAttributeNS(null, "y", "0"),
                    l.setAttributeNS(null, "width", "1"),
                    l.setAttributeNS(null, "height", "1"),
                    l.setAttribute("data-id", "background"),
                    t.appendChild(l);
                  const n = document.defaultView.getComputedStyle(
                    this.div.parentElement
                  );
                  l.setAttributeNS(
                    null,
                    "fill",
                    n.getPropertyValue("background-color")
                  );
                }
                if (n) {
                  const n = Object(i.drawSVGPath)(
                    t,
                    o.CLEF_PATHS[this.clef].path,
                    e + h,
                    0,
                    this.scale,
                    this.scale
                  );
                  this.setFill(n), (h += 3 * c);
                }
                if (s) {
                  const n = a[this.key].accidental,
                    r = 71 === this.clef ? 0 : 14;
                  a[this.key].pitches.forEach((s) => {
                    const a = this.getPitchDetails(s).vSteps,
                      u = Object(i.drawSVGPath)(
                        t,
                        o.ACCIDENTAL_PATHS[n],
                        e + h,
                        (r + a) * this.vStepSize,
                        this.scale,
                        this.scale
                      );
                    this.setFill(u), (h += u.getBoundingClientRect().width);
                  });
                }
                if (u) {
                  const n = Object(i.createSVGGroupChild)(t, "time-key"),
                    r = 2.85 * this.config.noteHeight + "px";
                  Object(i.drawSVGText)(
                    n,
                    "" + this.timeSignatureNumerator,
                    e + h,
                    -0.5,
                    r,
                    !0
                  ),
                    Object(i.drawSVGText)(
                      n,
                      "" + this.timeSignatureDenominator,
                      e + h,
                      4 * this.vStepSize - 0.5,
                      r,
                      !0
                    ),
                    this.setFill(n),
                    (h += n.getBoundingClientRect().width + c);
                }
                const f = this.redrawStaff(t, e, h);
                this.setStroke(f);
                const m = this.div.getBoundingClientRect(),
                  d = t.getBoundingClientRect();
                if (
                  (this.updateVerticalBoundaries(
                    d.top - m.top,
                    d.bottom - m.top
                  ),
                  p &&
                    (l.setAttributeNS(null, "y", "" + -this.staffOffset),
                    l.setAttributeNS(null, "height", "" + this.height),
                    l.setAttributeNS(null, "width", "" + h)),
                  t === this.overlayG)
                ) {
                  this.overlaySVG.setAttributeNS(null, "width", "" + (h + 5));
                  for (let e = 0; e < 5; ++e) {
                    const n = Object(i.drawSVGPath)(
                      t,
                      o.stemPath,
                      h + e,
                      e * e - this.staffOffset,
                      1 / r.STEM_WIDTH,
                      (this.height - 2 * e * e) / o.PATH_SCALE,
                      ((e - 5) * (e - 5) * 2) / o.PATH_SCALE
                    );
                    this.setFill(n);
                  }
                }
                if (this.config.pixelsPerTimeStep > 0) {
                  const n = 0 === this.signaturesQuarters;
                  return (
                    n &&
                      (this.signaturesQuarters = this.timeToQuarters(
                        h / this.hStepSize
                      )),
                    (n || e > 0) &&
                      ((this.signaturesBlinking = !0),
                      Object(i.setFade)(t, this.signaturesBlinking)),
                    0
                  );
                }
                return h;
              }
              changeKeySignatureIfNeeded(t) {
                if (this.scoreInfo.keySignatures) {
                  let e = this.key;
                  for (
                    let n = 0;
                    n < this.scoreInfo.keySignatures.length &&
                    this.scoreInfo.keySignatures[n].start <= t;
                    ++n
                  )
                    e = this.scoreInfo.keySignatures[n].key;
                  if (e !== this.key) return (this.key = e), !0;
                }
                return !1;
              }
              changeTimeSignatureIfNeeded(t) {
                if (this.scoreInfo.timeSignatures) {
                  let e = this.timeSignatureNumerator,
                    n = this.timeSignatureDenominator;
                  for (
                    let r = 0;
                    r < this.scoreInfo.timeSignatures.length &&
                    this.scoreInfo.timeSignatures[r].start <= t;
                    ++r
                  )
                    (e = this.scoreInfo.timeSignatures[r].numerator),
                      (n = this.scoreInfo.timeSignatures[r].denominator);
                  if (
                    e !== this.timeSignatureNumerator ||
                    n !== this.timeSignatureDenominator
                  )
                    return (
                      (this.timeSignatureNumerator = e),
                      (this.timeSignatureDenominator = n),
                      !0
                    );
                }
                return !1;
              }
              changeAndDrawSignaturesIfNeeded(t) {
                let e;
                if (
                  t < this.signatureCurrent ||
                  (null !== this.signatureNext && this.signatureNext <= t)
                ) {
                  (e = this.signaturesList[0].q), (this.signatureNext = null);
                  for (let n = 0; n < this.signaturesList.length; ++n) {
                    if (t < this.signaturesList[n].x) {
                      this.signatureNext = this.signaturesList[n].x;
                      break;
                    }
                    (this.signatureCurrent = this.signaturesList[n].x),
                      (e = this.signaturesList[n].q);
                  }
                }
                if (void 0 !== e) {
                  const t = this.key,
                    n = this.timeSignatureNumerator,
                    r = this.timeSignatureDenominator;
                  this.changeKeySignatureIfNeeded(e),
                    this.changeTimeSignatureIfNeeded(e),
                    this.clearSignatureOverlay(),
                    this.drawSignatures(this.overlayG, 0, !0, !0, !0),
                    (this.key = t),
                    (this.timeSignatureNumerator = n),
                    (this.timeSignatureDenominator = r);
                }
                this.config.pixelsPerTimeStep > 0 &&
                  0 === t &&
                  ((this.signatureNext = 0),
                  (this.signaturesBlinking = !0),
                  Object(i.setFade)(this.overlayG, this.signaturesBlinking));
              }
              getBarLength() {
                return (
                  (4 * this.timeSignatureNumerator) /
                  this.timeSignatureDenominator
                );
              }
              scrollIntoViewIfNeeded(t, e) {
                if (t)
                  if (this.scrollType === c.PAGE) {
                    const t = this.parentElement.getBoundingClientRect().width;
                    e > this.parentElement.scrollLeft + t &&
                      (this.parentElement.scrollLeft = e - 20);
                  } else {
                    const t = this.parentElement.getBoundingClientRect().width;
                    this.parentElement.scrollLeft = e - 0.5 * t;
                  }
              }
              updateVerticalBoundaries(t, e) {
                let n = 0;
                if (t < 0) {
                  this.staffOffset -= t;
                  const e = `translate(0, ${this.staffOffset})`;
                  this.overlayG.setAttributeNS(null, "transform", e),
                    this.staffG.setAttributeNS(null, "transform", e),
                    (n = this.height - t);
                }
                if ((n = Math.max(n, e - t)) > this.height) {
                  (this.height = n),
                    this.overlaySVG.setAttributeNS(
                      null,
                      "height",
                      "" + this.height
                    ),
                    this.staffSVG.setAttributeNS(
                      null,
                      "height",
                      "" + this.height
                    );
                  const t = this.div.querySelectorAll(
                    'rect[data-id="background"]'
                  );
                  for (let e = 0; e < t.length; ++e) {
                    const n = t[e];
                    n.setAttributeNS(null, "y", "" + -this.staffOffset),
                      n.setAttributeNS(null, "height", "" + this.height);
                  }
                }
              }
              setFill(t, e = !1) {
                t.setAttributeNS(null, "fill", this.getColor(e));
              }
              setStroke(t, e = r.LINE_STROKE, n = !1) {
                t.setAttributeNS(null, "stroke", this.getColor(n)),
                  t.setAttributeNS(null, "stroke-width", "" + e);
              }
              getColor(t) {
                return `rgb(${
                  t ? this.config.activeNoteRGB : this.config.noteRGB
                })`;
              }
              getOpacity(t) {
                return t ? (t / 127) * 0.8 + 0.2 : 1;
              }
              getGroup(t) {
                const e = t.start,
                  n = t.pitch;
                return this.staffSVG.querySelector(`g[data-id="${e}-${n}"]`);
              }
              highlightElement(t, e) {
                t.setAttribute("fill", this.getColor(e)),
                  t.setAttribute("stroke", this.getColor(e));
              }
              getBarBeginnings() {
                const t = new Set();
                let e = 0;
                this.scoreInfo.notes.forEach((t) => {
                  t.start + t.length > e && (e = t.start + t.length);
                });
                const n = this.scoreInfo.timeSignatures
                  ? this.scoreInfo.timeSignatures.slice(0)
                  : [{ start: 0, numerator: 4, denominator: 4 }];
                n.sort((t, e) => t.start - e.start);
                let r = 0;
                for (let i = 0; i < n.length; ++i) {
                  const o = i === n.length - 1 ? e : n[i].start,
                    s = (4 * n[i].numerator) / n[i].denominator;
                  for (; r < o; r += s) t.add(r);
                }
                return t;
              }
              quartersToTime(t) {
                return (t / this.scoreInfo.tempos[0].qpm) * 60;
              }
              timeToQuarters(t) {
                return (t * this.scoreInfo.tempos[0].qpm) / 60;
              }
              setDetails() {
                let t = new Map();
                const e = this.getBarBeginnings(),
                  n = new Set(e);
                this.scoreInfo.notes
                  .slice()
                  .sort((t, e) => t.start - e.start)
                  .forEach((e) => {
                    const r = this.getQNote(e);
                    n.add(r.start),
                      n.add(r.start + r.length),
                      t.has(r.start)
                        ? t.get(r.start).push(r)
                        : t.set(r.start, [r]);
                  }),
                  Array.from(n)
                    .sort((t, e) => t - e)
                    .forEach((e) => {
                      const n = [];
                      t.forEach((t) => {
                        t.forEach((t) => {
                          const r = this.splitQNote(t, e);
                          r && n.push(r);
                        });
                      }),
                        n.forEach((e) => {
                          t.has(e.start)
                            ? t.get(e.start).push(e)
                            : t.set(e.start, [e]);
                        });
                    }),
                  (t = new Map(Array.from(t).sort((t, e) => t[0] - e[0])));
                const r = this.key;
                let i = null,
                  o = 0;
                const s = e[Symbol.iterator]();
                let a = s.next();
                t.forEach((t, e) => {
                  const n = {
                    maxVStep: Number.MAX_SAFE_INTEGER,
                    minVStep: Number.MIN_SAFE_INTEGER,
                    restToNextLength: 0,
                    isBarBeginning: !1,
                    notes: [],
                  };
                  this.changeKeySignatureIfNeeded(e);
                  const r = a.value + this.getBarLength();
                  !a.done &&
                    e >= r &&
                    ((a = s.next()),
                    (this.barAccidentals = {}),
                    (n.isBarBeginning = !0)),
                    t.forEach((t) => {
                      this.analyzePitch(t, e),
                        (n.minVStep = Math.max(t.vSteps, n.minVStep)),
                        (n.maxVStep = Math.min(t.vSteps, n.maxVStep)),
                        n.notes.push(t);
                    }),
                    i && (i.restToNextLength = e - o),
                    this.musicBlockMap.set(e, n),
                    (i = n),
                    (o = e + n.notes[0].length);
                }),
                  (this.initialRest = {
                    maxVStep: 0,
                    minVStep: 0,
                    restToNextLength: this.musicBlockMap.values().next().value
                      .notes[0].start,
                    isBarBeginning: !0,
                    notes: [
                      {
                        start: 0,
                        length: 0,
                        vSteps: 0,
                        accidental: 0,
                        opacity: 0,
                        pitch: 0,
                        xHeadRight: 0,
                      },
                    ],
                  }),
                  (this.key = r);
              }
              getQNote(t) {
                return {
                  start: t.start,
                  length: t.length,
                  vSteps: 0,
                  accidental: 0,
                  opacity: this.getOpacity(t.intensity),
                  pitch: t.pitch,
                  xHeadRight: 0,
                };
              }
              splitQNote(t, e) {
                const n = t.start + t.length - e;
                return e > t.start && n > 0
                  ? ((t.length -= n),
                    {
                      start: e,
                      length: n,
                      vSteps: t.vSteps,
                      accidental: t.accidental,
                      opacity: t.opacity,
                      pitch: t.pitch,
                      xHeadRight: 0,
                      tiedFrom: t,
                    })
                  : null;
              }
              analyzePitch(t, e) {
                const n = this.getPitchDetails(t.pitch);
                n.vSteps in this.barAccidentals
                  ? n.accidental === this.barAccidentals[n.vSteps]
                    ? (n.accidental = 0)
                    : (3 === this.barAccidentals[n.vSteps]
                        ? (n.accidental = n.keyAccidental)
                        : 0 === n.accidental && (n.accidental = 3),
                      (this.barAccidentals[n.vSteps] = n.accidental))
                  : (t.tiedFrom && (n.accidental = 0),
                    (this.barAccidentals[n.vSteps] = n.accidental)),
                  (t.vSteps = n.vSteps),
                  (t.accidental = n.accidental);
              }
              getPitchDetails(t) {
                const e = t - 60,
                  n = Math.floor(e / 12),
                  r = e - 12 * n,
                  i = s[this.key].steps[r],
                  o = 71 === this.clef ? 6 : -6,
                  u =
                    1 === a[this.key].accidental
                      ? 69 + ((r + 3) % 12)
                      : 64 + ((r + 8) % 12);
                return {
                  vSteps: o - 7 * n + i,
                  accidental: s[this.key].accidental[r],
                  keyAccidental:
                    a[this.key].pitches.indexOf(u) > -1
                      ? a[this.key].accidental
                      : 0,
                };
              }
            }
          },
          function (t, e, n) {
            "use strict";
            n.r(e);
            var r = n(3);
            n.d(e, "MAX_QUARTER_DIVISION", function () {
              return r.MAX_QUARTER_DIVISION;
            }),
              n.d(e, "ScrollType", function () {
                return r.ScrollType;
              }),
              n.d(e, "StaffSVGRender", function () {
                return r.StaffSVGRender;
              });
          },
        ]));
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "aux_inputs", function () {
          return r;
        }),
        n.d(e, "chords", function () {
          return i;
        }),
        n.d(e, "constants", function () {
          return o;
        }),
        n.d(e, "data", function () {
          return s;
        }),
        n.d(e, "logging", function () {
          return a;
        }),
        n.d(e, "melodies", function () {
          return u;
        }),
        n.d(e, "performance", function () {
          return c;
        }),
        n.d(e, "sequences", function () {
          return l;
        }),
        n.d(e, "MetronomeCallbackObject", function () {
          return p;
        }),
        n.d(e, "Metronome", function () {
          return f;
        }),
        n.d(e, "MidiConversionError", function () {
          return S;
        }),
        n.d(e, "midiToSequenceProto", function () {
          return y;
        }),
        n.d(e, "sequenceProtoToMidi", function () {
          return b;
        }),
        n.d(e, "urlToBlob", function () {
          return w;
        }),
        n.d(e, "blobToNoteSequence", function () {
          return P;
        }),
        n.d(e, "urlToNoteSequence", function () {
          return v;
        }),
        n.d(e, "BasePlayerCallback", function () {
          return I;
        }),
        n.d(e, "BasePlayer", function () {
          return M;
        }),
        n.d(e, "Player", function () {
          return k;
        }),
        n.d(e, "SoundFontPlayer", function () {
          return q;
        }),
        n.d(e, "PlayerWithClick", function () {
          return E;
        }),
        n.d(e, "MIDIPlayer", function () {
          return _;
        }),
        n.d(e, "BaseRecorderCallback", function () {
          return x;
        }),
        n.d(e, "Recorder", function () {
          return C;
        }),
        n.d(e, "BaseVisualizer", function () {
          return D;
        }),
        n.d(e, "PianoRollCanvasVisualizer", function () {
          return j;
        }),
        n.d(e, "Visualizer", function () {
          return L;
        }),
        n.d(e, "BaseSVGVisualizer", function () {
          return R;
        }),
        n.d(e, "PianoRollSVGVisualizer", function () {
          return B;
        }),
        n.d(e, "WaterfallSVGVisualizer", function () {
          return U;
        }),
        n.d(e, "ScrollType", function () {
          return G;
        }),
        n.d(e, "StaffSVGVisualizer", function () {
          return F;
        });
      var r = n(36),
        i = n(18),
        o = n(1),
        s = n(12),
        a = n(4),
        u = n(10),
        c = n(13),
        l = n(7),
        h = n(3);
      class p {}
      class f {
        constructor(t, e = 1) {
          (this.clicksPerQuarter = 1),
            (this.muted = !1),
            (this.loClick = new h.MembraneSynth({
              pitchDecay: 0.008,
              envelope: { attack: 0.001, decay: 0.3, sustain: 0 },
            }).toMaster()),
            (this.hiClick = new h.MembraneSynth({
              pitchDecay: 0.008,
              envelope: { attack: 0.001, decay: 0.3, sustain: 0 },
            }).toMaster()),
            (this.loClickNote = "c5"),
            (this.hiClickNote = "g5"),
            (this.ticking = !1),
            (this.startedAt = null),
            (this.step = -1),
            this.reset(),
            (this.callbackObject = t),
            (this.clicksPerQuarter = e);
        }
        isTicking() {
          return this.ticking;
        }
        getStartedAt() {
          return this.startedAt;
        }
        getOffsetTime() {
          return h.immediate() - this.startedAt;
        }
        start(t = 120) {
          this.reset(),
            (this.ticking = !0),
            this.callbackObject.click || (this.callbackObject.click = () => {}),
            this.callbackObject.quarter ||
              (this.callbackObject.quarter = () => {}),
            this.callbackObject.bar || (this.callbackObject.bar = () => {});
          let e = 0;
          const n = 4 * this.clicksPerQuarter;
          h.Transport.scheduleRepeat((t) => {
            this.startedAt || (this.startedAt = t);
            const r = t - this.startedAt;
            this.step++;
            const i = this.step % n,
              o = Math.floor(i / this.clicksPerQuarter),
              s = i % this.clicksPerQuarter;
            this.callbackObject.click(r, i),
              0 === s && this.callbackObject.quarter(r, o),
              this.muted ||
                (0 === i
                  ? this.hiClick.triggerAttack(this.hiClickNote, t, 0.1)
                  : this.loClick.triggerAttack(this.loClickNote, t, 0.1)),
              0 === i && (this.callbackObject.bar(r, e), e++);
          }, n + "n"),
            (h.Transport.bpm.value = t),
            h.Transport.start();
        }
        stop() {
          (this.ticking = !1), h.Transport.cancel(), h.Transport.stop();
        }
        reset() {
          (this.muted = !1),
            (this.ticking = !1),
            (this.step = -1),
            (this.startedAt = null);
        }
      }
      var m = n(46),
        d = n(6),
        g = n(2);
      class S extends Error {
        constructor(t) {
          super(t), Object.setPrototypeOf(this, new.target.prototype);
        }
      }
      function y(t) {
        const e = new m.Midi(t),
          n = g.a.create();
        (n.ticksPerQuarter = e.header.ppq),
          (n.sourceInfo = g.a.SourceInfo.create({
            parser: g.a.SourceInfo.Parser.TONEJS_MIDI_CONVERT,
            encodingType: g.a.SourceInfo.EncodingType.MIDI,
          }));
        for (const t of e.header.timeSignatures)
          n.timeSignatures.push(
            g.a.TimeSignature.create({
              time: e.header.ticksToSeconds(t.ticks),
              numerator: t.timeSignature[0],
              denominator: t.timeSignature[1],
            })
          );
        n.timeSignatures.length ||
          n.timeSignatures.push(
            g.a.TimeSignature.create({
              time: 0,
              numerator: 4,
              denominator: 4,
            })
          );
        for (const t of e.header.tempos)
          n.tempos.push(g.a.Tempo.create({ time: t.time, qpm: t.bpm }));
        let r = -1;
        for (const t of e.tracks) {
          t.notes.length > 0 && (r += 1);
          for (const e of t.notes) {
            const i = e.time,
              s = i + e.duration;
            n.notes.push(
              g.a.Note.create({
                instrument: r,
                program: t.instrument.number,
                startTime: i,
                endTime: s,
                pitch: e.midi,
                velocity: Math.floor(e.velocity * o.MIDI_VELOCITIES),
                isDrum: t.instrument.percussion,
              })
            ),
              s > n.totalTime && (n.totalTime = s);
          }
        }
        return n;
      }
      function b(t) {
        l.isQuantizedSequence(t) && (t = l.unquantizeSequence(t));
        const e = new m.Midi();
        e.fromJSON({
          header: {
            name: "",
            ppq: t.ticksPerQuarter || o.DEFAULT_TICKS_PER_QUARTER,
            tempos: [],
            timeSignatures: [],
            keySignatures: [],
            meta: [],
          },
          tracks: [],
        });
        const n = Array.from(t.tempos || []);
        0 === n.length &&
          n.push({ time: 0, qpm: o.DEFAULT_QUARTERS_PER_MINUTE }),
          n.sort((t, e) => t.time - e.time);
        for (const t of n)
          e.header.tempos.push({
            ticks: e.header.secondsToTicks(t.time),
            bpm: t.qpm,
          }),
            e.header.update();
        if (t.timeSignatures && 0 !== t.timeSignatures.length)
          for (const n of t.timeSignatures)
            e.header.timeSignatures.push({
              ticks: e.header.secondsToTicks(n.time),
              timeSignature: [n.numerator, n.denominator],
            });
        else e.header.timeSignatures.push({ ticks: 0, timeSignature: [4, 4] });
        e.header.update();
        const r = new Map();
        for (const e of t.notes) {
          const t = e.instrument ? e.instrument : 0,
            n = void 0 === e.program ? o.DEFAULT_PROGRAM : e.program,
            i = !!e.isDrum,
            s = JSON.stringify([t, n, i]);
          r.has(s) || r.set(s, []), r.get(s).push(e);
        }
        return (
          r.forEach((t, n) => {
            const [r, i] = JSON.parse(n).slice(1),
              s = e.addTrack();
            (s.channel = i
              ? o.DRUM_CHANNEL
              : o.NON_DRUM_CHANNELS[
                  (e.tracks.length - 1) % o.NON_DRUM_CHANNELS.length
                ]),
              (s.instrument.number = r);
            for (const e of t) {
              const t = void 0 === e.velocity ? o.DEFAULT_VELOCITY : e.velocity;
              s.addNote({
                midi: e.pitch,
                time: e.startTime,
                duration: e.endTime - e.startTime,
                velocity: (t + 1) / o.MIDI_VELOCITIES,
              });
            }
          }),
          e.toArray()
        );
      }
      function w(t) {
        return new Promise((e, n) => {
          Object(d.a)(t)
            .then((t) => t.blob())
            .then((t) => {
              e(t);
            })
            .catch((t) => n(t));
        });
      }
      function P(t) {
        return new Promise((e, n) => {
          const r = new FileReader();
          (r.onload = (t) => {
            try {
              const t = y(r.result);
              e(t);
            } catch (t) {
              n(t);
            }
          }),
            (r.onerror = (t) => n(t)),
            r.readAsArrayBuffer(t);
        });
      }
      function v(t) {
        return w(t).then(P);
      }
      class N {
        constructor(t) {
          (this.FADE_SECONDS = 0.1),
            (this.baseURL = t),
            (this.buffers = new h.Buffers([])),
            (this.sourceMap = new Map()),
            (this.initialized = !1);
        }
        async initialize() {
          await Object(d.a)(this.baseURL + "/instrument.json")
            .then((t) => t.json())
            .then((t) => {
              (this.name = t.name),
                (this.minPitch = t.minPitch),
                (this.maxPitch = t.maxPitch),
                (this.durationSeconds = t.durationSeconds),
                (this.releaseSeconds = t.releaseSeconds),
                (this.percussive = t.percussive),
                (this.velocities = t.velocities),
                (this.initialized = !0);
            });
        }
        sampleInfoToName(t) {
          return this.velocities ? `p${t.pitch}_v${t.velocity}` : "p" + t.pitch;
        }
        sampleNameToURL(t) {
          return `${this.baseURL}/${t}.mp3`;
        }
        nearestVelocity(t) {
          if (!this.velocities) return t;
          t || (t = o.DEFAULT_VELOCITY);
          let e = void 0,
            n = o.MIDI_VELOCITIES;
          return (
            this.velocities.forEach((r) => {
              const i = Math.abs(r - t);
              i < n && ((e = r), (n = i));
            }),
            e
          );
        }
        async loadSamples(t) {
          this.initialized || (await this.initialize());
          const e = t
              .filter(
                (t) =>
                  !(t.pitch < this.minPitch || t.pitch > this.maxPitch) ||
                  (a.log(
                    `Pitch ${t.pitch} is outside the valid range for ${this.name}, ignoring.`,
                    "SoundFont"
                  ),
                  !1)
              )
              .map((t) =>
                this.sampleInfoToName({
                  pitch: t.pitch,
                  velocity: this.nearestVelocity(t.velocity),
                })
              ),
            n = Array.from(new Set(e))
              .filter((t) => !this.buffers.has(t))
              .map((t) => ({ name: t, url: this.sampleNameToURL(t) }));
          n.length > 0 &&
            (n.forEach((t) => this.buffers.add(t.name, t.url)),
            await new Promise((t) => h.Buffer.on("load", t)),
            a.log(`Loaded samples for ${this.name}.`, "SoundFont"));
        }
        playNote(t, e, n, r, i) {
          const o = this.getBuffer(t, e);
          r > this.durationSeconds &&
            a.log(
              `Requested note duration longer than sample duration: ${r} > ${this.durationSeconds}`,
              "SoundFont"
            );
          const s = new h.BufferSource({
            buffer: o,
            fadeOut: this.FADE_SECONDS,
          }).connect(i);
          if (
            (s.start(n, 0, void 0, 1, 0),
            !this.percussive && r < this.durationSeconds)
          ) {
            const t = new h.BufferSource(o).connect(i);
            s.stop(n + r + this.FADE_SECONDS),
              t.start(
                n + r,
                this.durationSeconds,
                void 0,
                1,
                this.FADE_SECONDS
              );
          }
        }
        playNoteDown(t, e, n) {
          const r = this.getBuffer(t, e),
            i = new h.BufferSource(r).connect(n);
          i.start(0, 0, void 0, 1, 0),
            this.sourceMap.has(t) &&
              this.sourceMap
                .get(t)
                .stop(h.now() + this.FADE_SECONDS, this.FADE_SECONDS),
            this.sourceMap.set(t, i);
        }
        playNoteUp(t, e, n) {
          if (!this.sourceMap.has(t)) return;
          const r = this.getBuffer(t, e);
          new h.BufferSource(r)
            .connect(n)
            .start(0, this.durationSeconds, void 0, 1, this.FADE_SECONDS),
            this.sourceMap
              .get(t)
              .stop(h.now() + this.FADE_SECONDS, this.FADE_SECONDS),
            this.sourceMap.delete(t);
        }
        getBuffer(t, e) {
          if (!this.initialized)
            throw new Error("Instrument is not initialized.");
          if (t < this.minPitch || t > this.maxPitch)
            return void a.log(
              `Pitch ${t} is outside the valid range for ${this.name} (${this.minPitch}-${this.maxPitch})`,
              "SoundFont"
            );
          const n = this.sampleInfoToName({
            pitch: t,
            velocity: this.nearestVelocity(e),
          });
          if (!this.buffers.has(n))
            throw new Error(`Buffer not found for ${this.name}: ${n}`);
          const r = this.buffers.get(n);
          if (!r.loaded)
            throw new Error(`Buffer not loaded for ${this.name}: ${n}`);
          return r;
        }
      }
      class T {
        constructor(t) {
          (this.baseURL = t),
            (this.instruments = new Map()),
            (this.initialized = !1);
        }
        async initialize() {
          await Object(d.a)(this.baseURL + "/soundfont.json")
            .then((t) => t.json())
            .then((t) => {
              this.name = t.name;
              for (const e in t.instruments) {
                const n = `${this.baseURL}/${t.instruments[e]}`;
                this.instruments.set("drums" === e ? "drums" : +e, new N(n));
              }
              this.initialized = !0;
            });
        }
        async loadSamples(t) {
          this.initialized || (await this.initialize());
          const e = new Map();
          t.forEach((t) => {
            (t.isDrum = t.isDrum || !1), (t.program = t.program || 0);
            const n = t.isDrum ? "drums" : t.program,
              r = { pitch: t.pitch, velocity: t.velocity };
            e.has(n)
              ? e.get(n).push(r)
              : this.instruments.has(n)
              ? e.set(n, [r])
              : a.log(
                  `No instrument in ${this.name} for: program=${t.program}, isDrum=${t.isDrum}`,
                  "SoundFont"
                );
          }),
            await Promise.all(
              Array.from(e.keys()).map((t) =>
                this.instruments.get(t).loadSamples(e.get(t))
              )
            );
        }
        playNote(t, e, n, r, i = 0, o = !1, s) {
          const u = o ? "drums" : i;
          if (!this.initialized)
            throw new Error("SoundFont is not initialized.");
          this.instruments.has(u)
            ? this.instruments.get(u).playNote(t, e, n, r, s)
            : a.log(
                `No instrument in ${this.name} for: program=${i}, isDrum=${o}`,
                "SoundFont"
              );
        }
        playNoteDown(t, e, n = 0, r = !1, i) {
          const o = r ? "drums" : n;
          if (!this.initialized)
            throw new Error("SoundFont is not initialized.");
          this.instruments.has(o)
            ? this.instruments.get(o).playNoteDown(t, e, i)
            : a.log(
                `No instrument in ${this.name} for: program=${n}, isDrum=${r}`,
                "SoundFont"
              );
        }
        playNoteUp(t, e, n = 0, r = !1, i) {
          const o = r ? "drums" : n;
          if (!this.initialized)
            throw new Error("SoundFont is not initialized.");
          this.instruments.has(o)
            ? this.instruments.get(o).playNoteUp(t, e, i)
            : a.log(
                `No instrument in ${this.name} for: program=${n}, isDrum=${r}`,
                "SoundFont"
              );
        }
      }
      function O(t, e) {
        return t.quantizedStartStep < e.quantizedStartStep
          ? -1
          : t.quantizedStartStep > e.quantizedStartStep
          ? 1
          : t.pitch < e.pitch
          ? -1
          : 1;
      }
      class I {}
      class M {
        constructor(t = !1, e) {
          (this.playClick = t),
            (this.callbackObject = e),
            (this.desiredQPM = void 0);
        }
        setTempo(t) {
          (this.desiredQPM = t),
            "started" === h.Transport.state && (h.Transport.bpm.value = t);
        }
        makeClickSequence(t) {
          const e = l.clone(t),
            n = e.notes.map((t) => t.quantizedEndStep),
            r = Math.max(...n);
          for (let t = 0; t < r; t += 4) {
            const n = {
              pitch: t % 16 == 0 ? o.LO_CLICK_PITCH : o.HI_CLICK_PITCH,
              quantizedStartStep: t,
              isDrum: !0,
              quantizedEndStep: t + 1,
            };
            e.notes.push(n);
          }
          return e.notes.sort(O), e;
        }
        resumeContext() {
          h.context.resume();
        }
        start(t, e) {
          if ("started" === this.getPlayState())
            throw new Error(
              "Cannot start playback; player is already playing."
            );
          if ("paused" === this.getPlayState())
            throw new Error(
              "Cannot `start()` a paused player; use `resume()`."
            );
          if ("stopped" !== h.Transport.state)
            throw new Error(
              "Cannot start playback while `Tone.Transport` is in use."
            );
          this.resumeContext();
          const n = l.isQuantizedSequence(t);
          if (
            (this.playClick && n && (t = this.makeClickSequence(t)),
            e
              ? (h.Transport.bpm.value = e)
              : t.tempos && t.tempos.length > 0 && t.tempos[0].qpm > 0
              ? (h.Transport.bpm.value = t.tempos[0].qpm)
              : (h.Transport.bpm.value = o.DEFAULT_QUARTERS_PER_MINUTE),
            n)
          )
            t = l.unquantizeSequence(t, e);
          else if (e)
            throw new Error(
              "Cannot specify a `qpm` for a non-quantized sequence."
            );
          const r = new h.Part(
            (t, e) => {
              this.currentPart === r &&
                ((this.playClick ||
                  (e.pitch !== o.LO_CLICK_PITCH &&
                    e.pitch !== o.HI_CLICK_PITCH)) &&
                  this.playNote(t, e),
                this.callbackObject &&
                  h.Draw.schedule(() => {
                    this.callbackObject.run(e, t);
                  }, t));
            },
            t.notes.map((t) => [t.startTime, t])
          );
          return (
            (this.currentPart = r),
            this.desiredQPM && (h.Transport.bpm.value = this.desiredQPM),
            this.currentPart.start(),
            "started" !== h.Transport.state && h.Transport.start(),
            new Promise((e) => {
              this.scheduledStop = h.Transport.schedule(() => {
                this.stop(),
                  e(),
                  this.callbackObject && this.callbackObject.stop();
              }, "+" + t.totalTime);
            })
          );
        }
        stop() {
          this.isPlaying() &&
            (this.currentPart.stop(),
            h.Transport.stop(),
            (this.currentPart = null)),
            h.Transport.clear(this.scheduledStop),
            (this.scheduledStop = void 0),
            (this.desiredQPM = void 0);
        }
        pause() {
          if (!this.isPlaying())
            throw new Error(
              "Cannot pause playback while the player is stopped."
            );
          h.Transport.pause();
        }
        resume() {
          if ("paused" !== this.getPlayState())
            throw new Error(
              `Cannot resume playback while "${this.getPlayState()}".`
            );
          h.Transport.start();
        }
        seekTo(t) {
          if (!this.isPlaying())
            throw new Error("Cannot seek while the player is stopped.");
          h.Transport.seconds = t;
        }
        isPlaying() {
          return !!this.currentPart;
        }
        getPlayState() {
          return this.isPlaying() ? h.Transport.state : "stopped";
        }
      }
      class A {
        constructor() {
          (this.DRUM_PITCH_TO_CLASS = new Map()),
            (this.kick = new h.MembraneSynth().toMaster()),
            (this.tomLow = new h.MembraneSynth({
              pitchDecay: 0.008,
              envelope: { attack: 0.01, decay: 0.5, sustain: 0 },
            }).toMaster()),
            (this.tomMid = new h.MembraneSynth({
              pitchDecay: 0.008,
              envelope: { attack: 0.01, decay: 0.5, sustain: 0 },
            }).toMaster()),
            (this.tomHigh = new h.MembraneSynth({
              pitchDecay: 0.008,
              envelope: { attack: 0.01, decay: 0.5, sustain: 0 },
            }).toMaster()),
            (this.closedHihat = new h.MetalSynth({
              frequency: 400,
              envelope: { attack: 0.001, decay: 0.1, release: 0.8 },
              harmonicity: 5.1,
              modulationIndex: 32,
              resonance: 4e3,
              octaves: 1,
            }).toMaster()),
            (this.openHihat = new h.MetalSynth({
              frequency: 400,
              envelope: {
                attack: 0.001,
                decay: 0.5,
                release: 0.8,
                sustain: 1,
              },
              harmonicity: 5.1,
              modulationIndex: 32,
              resonance: 4e3,
              octaves: 1,
            }).toMaster()),
            (this.ride = new h.MetalSynth().toMaster()),
            (this.crash = new h.MetalSynth({
              frequency: 300,
              envelope: { attack: 0.001, decay: 1, release: 3 },
              harmonicity: 5.1,
              modulationIndex: 64,
              resonance: 4e3,
              octaves: 1.5,
            }).toMaster()),
            (this.snare = new h.NoiseSynth({
              noise: { type: "white" },
              envelope: {
                attack: 0.005,
                decay: 0.05,
                sustain: 0.1,
                release: 0.4,
              },
            }).toMaster()),
            (this.loClick = new h.MembraneSynth({
              pitchDecay: 0.008,
              envelope: { attack: 0.001, decay: 0.3, sustain: 0 },
            }).toMaster()),
            (this.hiClick = new h.MembraneSynth({
              pitchDecay: 0.008,
              envelope: { attack: 0.001, decay: 0.3, sustain: 0 },
            }).toMaster()),
            (this.pitchPlayers = [
              (t, e = 1) => this.kick.triggerAttackRelease("C2", "8n", t, e),
              (t, e = 1) => this.snare.triggerAttackRelease("16n", t, e),
              (t, e = 1) => this.closedHihat.triggerAttack(t, 0.3, e),
              (t, e = 1) => this.openHihat.triggerAttack(t, 0.3, e),
              (t, e = 0.5) => this.tomLow.triggerAttack("G3", t, e),
              (t, e = 0.5) => this.tomMid.triggerAttack("C4", t, e),
              (t, e = 0.5) => this.tomHigh.triggerAttack("F4", t, e),
              (t, e = 1) => this.crash.triggerAttack(t, 1, e),
              (t, e = 1) => this.ride.triggerAttack(t, 0.5, e),
              (t, e = 0.5) => this.loClick.triggerAttack("G5", t, e),
              (t, e = 0.5) => this.hiClick.triggerAttack("C6", t, e),
            ]);
          for (let t = 0; t < s.DEFAULT_DRUM_PITCH_CLASSES.length; ++t)
            s.DEFAULT_DRUM_PITCH_CLASSES[t].forEach((e) => {
              this.DRUM_PITCH_TO_CLASS.set(e, t);
            });
          this.DRUM_PITCH_TO_CLASS.set(o.LO_CLICK_PITCH, o.LO_CLICK_CLASS),
            this.DRUM_PITCH_TO_CLASS.set(o.HI_CLICK_PITCH, o.HI_CLICK_CLASS);
        }
        static getInstance() {
          return A.instance || (A.instance = new A()), A.instance;
        }
        playNote(t, e, n) {
          this.pitchPlayers[this.DRUM_PITCH_TO_CLASS.get(t)](e, n);
        }
      }
      class k extends M {
        constructor() {
          super(...arguments),
            (this.drumKit = A.getInstance()),
            (this.bassSynth = new h.Synth({
              volume: 5,
              oscillator: { type: "triangle" },
            }).toMaster()),
            (this.polySynth = new h.PolySynth(10).toMaster());
        }
        playNote(t, e) {
          const n = e.hasOwnProperty("velocity")
            ? e.velocity / o.MAX_MIDI_VELOCITY
            : void 0;
          if (e.isDrum) this.drumKit.playNote(e.pitch, t, n);
          else {
            const r = new h.Frequency(e.pitch, "midi"),
              i = e.endTime - e.startTime;
            this.getSynth(e.instrument, e.program).triggerAttackRelease(
              r,
              i,
              t,
              n
            );
          }
        }
        getSynth(t, e) {
          return void 0 !== e && e >= 32 && e <= 39
            ? this.bassSynth
            : this.polySynth;
        }
      }
      k.tone = h;
      class q extends M {
        constructor(t, e = h.Master, n, r, i) {
          super(!1, i),
            (this.soundFont = new T(t)),
            (this.output = e),
            (this.programOutputs = n),
            (this.drumOutputs = r);
        }
        async loadSamples(t) {
          await this.soundFont.loadSamples(
            t.notes.map((t) => ({
              pitch: t.pitch,
              velocity: t.velocity,
              program: t.program || 0,
              isDrum: t.isDrum || !1,
            }))
          );
        }
        async loadAllSamples(t = 0, e = !1) {
          const n = g.a.create(),
            r = e ? o.MIN_DRUM_PITCH : o.MIN_PIANO_PITCH,
            i = e ? o.MAX_DRUM_PITCH : o.MAX_PIANO_PITCH;
          for (let s = r; s <= i; s++)
            for (let r = o.MIN_MIDI_VELOCITY; r < o.MAX_MIDI_VELOCITY; r++)
              n.notes.push({ pitch: s, velocity: r, program: t, isDrum: e });
          return this.loadSamples(n);
        }
        resumeContext() {
          h.context.resume();
        }
        start(t, e) {
          return (
            this.resumeContext(),
            this.loadSamples(t).then(() => super.start(t, e))
          );
        }
        playNote(t, e) {
          this.soundFont.playNote(
            e.pitch,
            e.velocity,
            t,
            e.endTime - e.startTime,
            e.program,
            e.isDrum,
            this.getAudioNodeOutput(e)
          );
        }
        playNoteDown(t) {
          this.soundFont.playNoteDown(
            t.pitch,
            t.velocity,
            t.program,
            t.isDrum,
            this.getAudioNodeOutput(t)
          );
        }
        playNoteUp(t) {
          this.soundFont.playNoteUp(
            t.pitch,
            t.velocity,
            t.program,
            t.isDrum,
            this.getAudioNodeOutput(t)
          );
        }
        getAudioNodeOutput(t) {
          let e = this.output;
          return (
            this.programOutputs && !t.isDrum
              ? this.programOutputs.has(t.program) &&
                (e = this.programOutputs.get(t.program))
              : this.drumOutputs &&
                t.isDrum &&
                this.drumOutputs.has(t.pitch) &&
                (e = this.drumOutputs.get(t.pitch)),
            e
          );
        }
      }
      class E extends k {
        constructor(t) {
          super(!0, t);
        }
      }
      class _ extends M {
        constructor(t) {
          super(!1, t),
            (this.outputs = []),
            (this.outputChannel = 0),
            (this.availableOutputs = []),
            (this.NOTE_ON = 144),
            (this.NOTE_OFF = 128);
        }
        async requestMIDIAccess() {
          return navigator.requestMIDIAccess
            ? new Promise((t, e) => {
                navigator.requestMIDIAccess().then(
                  (e) => {
                    e.addEventListener("statechange", (t) =>
                      this.initOutputs(e)
                    ),
                      t(this.initOutputs(e));
                  },
                  (t) => console.log("Something went wrong", e(t))
                );
              })
            : null;
        }
        initOutputs(t) {
          const e = t.outputs.values();
          for (let t = e.next(); t && !t.done; t = e.next())
            this.availableOutputs.push(t.value);
          return this.availableOutputs;
        }
        playNote(t, e) {
          const n = e.velocity || 100,
            r = 1e3 * (e.endTime - e.startTime),
            i = [this.NOTE_ON + this.outputChannel, e.pitch, n],
            o = [this.NOTE_OFF + this.outputChannel, e.pitch, n],
            s = this.outputs ? this.outputs : this.availableOutputs;
          for (let t = 0; t < s.length; t++)
            this.sendMessageToOutput(s[t], i),
              this.sendMessageToOutput(s[t], o, d.d.now() + r);
        }
        sendMessageToOutput(t, e, n) {
          t && t.send(e, n);
        }
        playNoteDown(t) {
          const e = [this.NOTE_ON, t.pitch, t.velocity],
            n = this.outputs ? this.outputs : this.availableOutputs;
          for (let t = 0; t < n.length; t++) this.sendMessageToOutput(n[t], e);
        }
        playNoteUp(t) {
          const e = [this.NOTE_OFF, t.pitch, t.velocity],
            n = this.outputs ? this.outputs : this.availableOutputs;
          for (let r = 0; r < n.length; r++)
            this.sendMessageToOutput(n[r], e, t.endTime - t.startTime);
        }
      }
      class x {}
      class C {
        constructor(t = {}, e) {
          (this.notes = []),
            (this.midiInputs = []),
            (this.loClick = new h.MembraneSynth({
              pitchDecay: 0.008,
              envelope: { attack: 0.001, decay: 0.3, sustain: 0 },
            }).toMaster()),
            (this.hiClick = new h.MembraneSynth({
              pitchDecay: 0.008,
              envelope: { attack: 0.001, decay: 0.3, sustain: 0 },
            }).toMaster()),
            (this.config = {
              playClick: t.playClick,
              qpm: t.qpm || o.DEFAULT_QUARTERS_PER_MINUTE,
              playCountIn: t.playCountIn,
              startRecordingAtFirstNote: t.startRecordingAtFirstNote || !1,
            }),
            (this.callbackObject = e),
            (this.recording = !1),
            (this.onNotes = new Map());
        }
        async initialize() {
          await navigator.requestMIDIAccess().then(
            (t) => this.midiReady(t),
            (t) => console.log("Something went wrong", t)
          );
        }
        midiReady(t) {
          a.log("Initialized Recorder", "Recorder");
          const e = t.inputs.values();
          for (let t = e.next(); t && !t.done; t = e.next())
            this.midiInputs.push(t.value);
        }
        isRecording() {
          return this.recording;
        }
        setTempo(t) {
          (this.config.qpm = t),
            "started" === h.Transport.state && (h.Transport.bpm.value = t);
        }
        enablePlayClick(t) {
          this.config.playClick = t;
        }
        enablePlayCountIn(t) {
          this.config.playCountIn = t;
        }
        initClickLoop() {
          let t = 0;
          this.clickLoop = new h.Loop((e) => {
            t % 4 == 0
              ? this.loClick.triggerAttack("G5", e)
              : this.hiClick.triggerAttack("C6", e),
              t++,
              this.config.playCountIn &&
                4 === t &&
                (h.Transport.stop(), this.clickLoop.stop());
          }, "4n");
        }
        getMIDIInputs() {
          return this.midiInputs;
        }
        start(t) {
          const e = t || this.midiInputs;
          for (const t of e)
            t.onmidimessage = (t) => {
              this.midiMessageReceived(t);
            };
          if (
            (this.config.playClick || this.config.playCountIn
              ? (this.initClickLoop(),
                (h.Transport.bpm.value = this.config.qpm),
                h.Transport.start(),
                this.clickLoop.start())
              : (this.clickLoop = null),
            (this.recording = !0),
            (this.firstNoteTimestamp = void 0),
            (this.notes = []),
            (this.onNotes = new Map()),
            !this.startRecordingAtFirstNote)
          ) {
            const t = Date.now();
            this.firstNoteTimestamp = t;
          }
        }
        stop() {
          this.recording = !1;
          const t = Date.now();
          this.onNotes.forEach((e, n) => {
            this.noteOff(n, t);
          });
          for (const t of this.midiInputs) t.onmidimessage = null;
          return (
            this.clickLoop && (h.Transport.stop(), this.clickLoop.stop()),
            0 === this.notes.length ? null : this.getNoteSequence()
          );
        }
        getNoteSequence() {
          return 0 === this.notes.length
            ? null
            : g.a.create({
                notes: this.notes,
                totalTime: this.notes[this.notes.length - 1].endTime,
              });
        }
        reset() {
          const t = this.stop();
          return (
            (this.firstNoteTimestamp = void 0),
            (this.notes = []),
            (this.onNotes = new Map()),
            t
          );
        }
        midiMessageReceived(t) {
          if (!this.recording) return;
          let e;
          e =
            void 0 !== t.timeStamp && 0 !== t.timeStamp
              ? t.timeStamp
              : d.d.now();
          const n = e + d.d.timing.navigationStart;
          void 0 === this.firstNoteTimestamp && (this.firstNoteTimestamp = n);
          const r = t.data[0] >> 4,
            i = t.data[1],
            o = t.data.length > 2 ? t.data[2] : 1,
            s = t.srcElement;
          8 === r || (9 === r && 0 === o)
            ? (this.callbackObject &&
                this.callbackObject.noteOff &&
                this.callbackObject.noteOff(i, o, s),
              this.noteOff(i, n),
              this.callbackObject &&
                this.callbackObject.run &&
                this.callbackObject.run(this.getNoteSequence()))
            : 9 === r &&
              (this.callbackObject &&
                this.callbackObject.noteOn &&
                this.callbackObject.noteOn(i, o, s),
              this.noteOn(i, o, n));
        }
        noteOn(t, e, n) {
          const r = new g.a.Note();
          (r.pitch = t),
            (r.startTime = (n - this.firstNoteTimestamp) / 1e3),
            (r.velocity = e),
            this.onNotes.set(t, r);
        }
        noteOff(t, e) {
          const n = this.onNotes.get(t);
          n &&
            ((n.endTime = (e - this.firstNoteTimestamp) / 1e3),
            this.notes.push(n)),
            this.onNotes.delete(t);
        }
      }
      var z = n(55);
      class D {
        constructor(t, e = {}) {
          (this.noteSequence = t),
            (this.sequenceIsQuantized = l.isQuantizedSequence(
              this.noteSequence
            ));
          if (
            ((this.config = {
              noteHeight: e.noteHeight || 6,
              noteSpacing: e.noteSpacing || 1,
              pixelsPerTimeStep: e.pixelsPerTimeStep || 30,
              noteRGB: e.noteRGB || "8, 41, 64",
              activeNoteRGB: e.activeNoteRGB || "240, 84, 119",
              minPitch: e.minPitch,
              maxPitch: e.maxPitch,
            }),
            this.sequenceIsQuantized)
          ) {
            const e = t.quantizationInfo.stepsPerQuarter;
            this.config.pixelsPerTimeStep = e
              ? this.config.pixelsPerTimeStep / e
              : 7;
          }
          const n = this.getSize();
          (this.width = n.width), (this.height = n.height);
        }
        updateMinMaxPitches(t = !1) {
          if (!this.config.minPitch || !this.config.maxPitch) {
            void 0 === this.config.minPitch &&
              (this.config.minPitch = o.MAX_MIDI_PITCH),
              void 0 === this.config.maxPitch &&
                (this.config.maxPitch = o.MIN_MIDI_PITCH);
            for (const t of this.noteSequence.notes)
              (this.config.minPitch = Math.min(t.pitch, this.config.minPitch)),
                (this.config.maxPitch = Math.max(
                  t.pitch,
                  this.config.maxPitch
                ));
            t || ((this.config.minPitch -= 2), (this.config.maxPitch += 2));
          }
        }
        getSize() {
          this.updateMinMaxPitches();
          const t =
              (this.config.maxPitch - this.config.minPitch) *
              this.config.noteHeight,
            e = this.sequenceIsQuantized
              ? this.noteSequence.totalQuantizedSteps
              : this.noteSequence.totalTime;
          if (!e)
            throw new Error(
              "The sequence you are using with the visualizer does not have a " +
                (this.sequenceIsQuantized
                  ? "totalQuantizedSteps"
                  : "totalTime") +
                " field set, so the visualizer can't be horizontally sized correctly."
            );
          return { width: e * this.config.pixelsPerTimeStep, height: t };
        }
        getNotePosition(t, e) {
          const n = this.getNoteEndTime(t) - this.getNoteStartTime(t),
            r = this.getNoteStartTime(t) * this.config.pixelsPerTimeStep,
            i = Math.max(
              this.config.pixelsPerTimeStep * n - this.config.noteSpacing,
              1
            );
          return {
            x: r,
            y:
              this.height -
              (t.pitch - this.config.minPitch) * this.config.noteHeight,
            w: i,
            h: this.config.noteHeight,
          };
        }
        scrollIntoViewIfNeeded(t, e) {
          if (t && this.parentElement) {
            const t = this.parentElement.getBoundingClientRect().width;
            e > this.parentElement.scrollLeft + t &&
              (this.parentElement.scrollLeft = e - 20);
          }
        }
        getNoteStartTime(t) {
          return this.sequenceIsQuantized
            ? t.quantizedStartStep
            : Math.round(1e8 * t.startTime) / 1e8;
        }
        getNoteEndTime(t) {
          return this.sequenceIsQuantized
            ? t.quantizedEndStep
            : Math.round(1e8 * t.endTime) / 1e8;
        }
        isPaintingActiveNote(t, e) {
          const n = this.getNoteStartTime(t) === this.getNoteStartTime(e),
            r =
              this.getNoteStartTime(t) <= this.getNoteStartTime(e) &&
              this.getNoteEndTime(t) >= this.getNoteEndTime(e);
          return n || r;
        }
      }
      class j extends D {
        constructor(t, e, n = {}) {
          super(t, n),
            (this.ctx = e.getContext("2d")),
            (this.parentElement = e.parentElement);
          const r = window.devicePixelRatio || 1;
          this.ctx &&
            ((this.ctx.canvas.width = r * this.width),
            (this.ctx.canvas.height = r * this.height),
            (e.style.width = this.width + "px"),
            (e.style.height = this.height + "px"),
            this.ctx.scale(r, r)),
            this.redraw();
        }
        redraw(t, e) {
          let n;
          this.clear();
          for (let e = 0; e < this.noteSequence.notes.length; e++) {
            const r = this.noteSequence.notes[e],
              i = this.getNotePosition(r, e),
              o = 0.2,
              s = r.velocity ? r.velocity / 100 + o : 1,
              a = t && this.isPaintingActiveNote(r, t),
              u = `rgba(${
                a ? this.config.activeNoteRGB : this.config.noteRGB
              },\n  ${s})`;
            this.redrawNote(i.x, i.y, i.w, i.h, u), a && r === t && (n = i.x);
          }
          return this.scrollIntoViewIfNeeded(e, n), n;
        }
        clear() {
          this.ctx.clearRect(
            0,
            0,
            this.ctx.canvas.width,
            this.ctx.canvas.height
          );
        }
        clearActiveNotes() {
          this.redraw();
        }
        redrawNote(t, e, n, r, i) {
          (this.ctx.fillStyle = i),
            this.ctx.fillRect(
              Math.round(t),
              Math.round(e),
              Math.round(n),
              Math.round(r)
            );
        }
      }
      class L extends j {
        constructor(t, e, n = {}) {
          super(t, e, n),
            a.log(
              "mm.Visualizer is deprecated, and will be removed in a future          version. Please use mm.PianoRollCanvasVisualizer instead",
              "mm.Visualizer",
              5
            );
        }
      }
      class R extends D {
        constructor(t, e = {}) {
          super(t, e), (this.drawn = !1);
        }
        redraw(t, e) {
          if ((this.drawn || this.draw(), !t)) return null;
          let n;
          this.unfillActiveRect(this.svg);
          for (let e = 0; e < this.noteSequence.notes.length; e++) {
            const r = this.noteSequence.notes[e];
            if (!(t && this.isPaintingActiveNote(r, t))) continue;
            const i = this.svg.querySelector(`rect[data-index="${e}"]`);
            this.fillActiveRect(i, r),
              r === t && (n = parseFloat(i.getAttribute("x")));
          }
          return this.scrollIntoViewIfNeeded(e, n), n;
        }
        fillActiveRect(t, e) {
          t.setAttribute("fill", this.getNoteFillColor(e, !0)),
            t.classList.add("active");
        }
        unfillActiveRect(t) {
          const e = t.querySelectorAll("rect.active");
          for (let t = 0; t < e.length; ++t) {
            const n = e[t],
              r = this.getNoteFillColor(
                this.noteSequence.notes[
                  parseInt(n.getAttribute("data-index"), 10)
                ],
                !1
              );
            n.setAttribute("fill", r), n.classList.remove("active");
          }
        }
        draw() {
          for (let t = 0; t < this.noteSequence.notes.length; t++) {
            const e = this.noteSequence.notes[t],
              n = this.getNotePosition(e, t),
              r = this.getNoteFillColor(e, !1),
              i = [
                ["index", t],
                ["instrument", e.instrument],
                ["program", e.program],
                ["isDrum", !0 === e.isDrum],
                ["pitch", e.pitch],
              ],
              o = [
                [
                  "--midi-velocity",
                  String(void 0 !== e.velocity ? e.velocity : 127),
                ],
              ];
            this.drawNote(n.x, n.y, n.w, n.h, r, i, o);
          }
          this.drawn = !0;
        }
        getNoteFillColor(t, e) {
          const n = t.velocity ? t.velocity / 100 + 0.2 : 1;
          return `rgba(${
            e ? this.config.activeNoteRGB : this.config.noteRGB
          },\n  ${n})`;
        }
        drawNote(t, e, n, r, i, o, s) {
          if (!this.svg) return;
          const a = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "rect"
          );
          a.classList.add("note"),
            a.setAttribute("fill", i),
            a.setAttribute("x", "" + Math.round(t)),
            a.setAttribute("y", "" + Math.round(e)),
            a.setAttribute("width", "" + Math.round(n)),
            a.setAttribute("height", "" + Math.round(r)),
            o.forEach(([t, e]) => {
              void 0 !== e && (a.dataset[t] = "" + e);
            }),
            s.forEach(([t, e]) => {
              a.style.setProperty(t, e);
            }),
            this.svg.appendChild(a);
        }
        clear() {
          (this.svg.innerHTML = ""), (this.drawn = !1);
        }
        clearActiveNotes() {
          this.unfillActiveRect(this.svg);
        }
      }
      class B extends R {
        constructor(t, e, n = {}) {
          if ((super(t, n), !(e instanceof SVGSVGElement)))
            throw new Error(
              "This visualizer requires an <svg> element to display the visualization"
            );
          (this.svg = e), (this.parentElement = e.parentElement);
          const r = this.getSize();
          (this.width = r.width),
            (this.height = r.height),
            (this.svg.style.width = this.width + "px"),
            (this.svg.style.height = this.height + "px"),
            this.clear(),
            this.draw();
        }
      }
      class U extends R {
        constructor(t, e, n = {}) {
          if (
            (super(t, n),
            (this.NOTES_PER_OCTAVE = 12),
            (this.WHITE_NOTES_PER_OCTAVE = 7),
            (this.LOW_C = 24),
            (this.firstDrawnOctave = 0),
            (this.lastDrawnOctave = 6),
            !(e instanceof HTMLDivElement))
          )
            throw new Error(
              "This visualizer requires a <div> element to display the visualization"
            );
          (this.config.whiteNoteWidth = n.whiteNoteWidth || 20),
            (this.config.blackNoteWidth =
              n.blackNoteWidth || (2 * this.config.whiteNoteWidth) / 3),
            (this.config.whiteNoteHeight = n.whiteNoteHeight || 70),
            (this.config.blackNoteHeight = n.blackNoteHeight || 140 / 3),
            (this.config.showOnlyOctavesUsed = n.showOnlyOctavesUsed),
            this.setupDOM(e);
          const r = this.getSize();
          (this.width = r.width),
            (this.height = r.height),
            (this.svg.style.width = this.width + "px"),
            (this.svg.style.height = this.height + "px"),
            (this.svgPiano.style.width = this.width + "px"),
            (this.svgPiano.style.height = this.config.whiteNoteHeight + "px"),
            (this.parentElement.style.width =
              this.width + this.config.whiteNoteWidth + "px"),
            (this.parentElement.scrollTop = this.parentElement.scrollHeight),
            this.clear(),
            this.drawPiano(),
            this.draw();
        }
        setupDOM(t) {
          (this.parentElement = document.createElement("div")),
            this.parentElement.classList.add("waterfall-notes-container");
          const e = Math.max(t.getBoundingClientRect().height, 200);
          (this.parentElement.style.paddingTop =
            e - this.config.whiteNoteHeight + "px"),
            (this.parentElement.style.height =
              e - this.config.whiteNoteHeight + "px"),
            (this.parentElement.style.boxSizing = "border-box"),
            (this.parentElement.style.overflowX = "hidden"),
            (this.parentElement.style.overflowY = "auto"),
            (this.svg = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "svg"
            )),
            (this.svgPiano = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "svg"
            )),
            this.svg.classList.add("waterfall-notes"),
            this.svgPiano.classList.add("waterfall-piano"),
            this.parentElement.appendChild(this.svg),
            (t.innerHTML = ""),
            t.appendChild(this.parentElement),
            t.appendChild(this.svgPiano);
        }
        redraw(t, e) {
          if ((this.drawn || this.draw(), !t)) return null;
          this.clearActiveNotes(),
            (this.parentElement.style.paddingTop = this.parentElement.style.height);
          for (let e = 0; e < this.noteSequence.notes.length; e++) {
            const n = this.noteSequence.notes[e];
            if (!(t && this.isPaintingActiveNote(n, t))) continue;
            const r = this.svg.querySelector(`rect[data-index="${e}"]`);
            this.fillActiveRect(r, n);
            const i = this.svgPiano.querySelector(
              `rect[data-pitch="${n.pitch}"]`
            );
            if ((this.fillActiveRect(i, n), n === t)) {
              const t = parseFloat(r.getAttribute("y")),
                e = parseFloat(r.getAttribute("height"));
              return (
                t < this.parentElement.scrollTop - e &&
                  (this.parentElement.scrollTop = t + e),
                t
              );
            }
          }
          return null;
        }
        getSize() {
          this.updateMinMaxPitches(!0);
          let t = 52;
          if (this.config.showOnlyOctavesUsed) {
            let e = !1,
              n = !1;
            for (let t = 1; t < 7; t++) {
              const r = this.LOW_C + this.NOTES_PER_OCTAVE * t;
              !e &&
                r > this.config.minPitch &&
                ((this.firstDrawnOctave = t - 1), (e = !0)),
                !n &&
                  r > this.config.maxPitch &&
                  ((this.lastDrawnOctave = t - 1), (n = !0));
            }
            t =
              (this.lastDrawnOctave - this.firstDrawnOctave + 1) *
              this.WHITE_NOTES_PER_OCTAVE;
          }
          const e = t * this.config.whiteNoteWidth,
            n = this.sequenceIsQuantized
              ? this.noteSequence.totalQuantizedSteps
              : this.noteSequence.totalTime;
          if (!n)
            throw new Error(
              "The sequence you are using with the visualizer does not have a " +
                (this.sequenceIsQuantized
                  ? "totalQuantizedSteps"
                  : "totalTime") +
                " field set, so the visualizer can't be horizontally sized correctly."
            );
          return {
            width: e,
            height: Math.max(n * this.config.pixelsPerTimeStep, 1),
          };
        }
        getNotePosition(t, e) {
          const n = this.svgPiano.querySelector(
            `rect[data-pitch="${t.pitch}"]`
          );
          if (!n) return null;
          const r = this.getNoteEndTime(t) - this.getNoteStartTime(t),
            i = Number(n.getAttribute("x")),
            o = Number(n.getAttribute("width")),
            s = Math.max(
              this.config.pixelsPerTimeStep * r - this.config.noteSpacing,
              1
            );
          return {
            x: i,
            y:
              this.height -
              this.getNoteStartTime(t) * this.config.pixelsPerTimeStep -
              s,
            w: o,
            h: s,
          };
        }
        drawPiano() {
          this.svgPiano.innerHTML = "";
          const t = this.config.whiteNoteWidth - this.config.blackNoteWidth / 2,
            e = [1, 3, 6, 8, 10];
          let n = 0,
            r = 0;
          this.config.showOnlyOctavesUsed
            ? (r = this.firstDrawnOctave * this.NOTES_PER_OCTAVE + this.LOW_C)
            : ((r = this.LOW_C - 3),
              this.drawWhiteKey(r, n),
              this.drawWhiteKey(r + 2, this.config.whiteNoteWidth),
              (r += 3),
              (n = 2 * this.config.whiteNoteWidth));
          for (let t = this.firstDrawnOctave; t <= this.lastDrawnOctave; t++)
            for (let t = 0; t < this.NOTES_PER_OCTAVE; t++)
              -1 === e.indexOf(t) &&
                (this.drawWhiteKey(r, n), (n += this.config.whiteNoteWidth)),
                r++;
          this.config.showOnlyOctavesUsed
            ? ((r = this.firstDrawnOctave * this.NOTES_PER_OCTAVE + this.LOW_C),
              (n = -this.config.whiteNoteWidth))
            : (this.drawWhiteKey(r, n),
              (r = this.LOW_C - 3),
              this.drawBlackKey(r + 1, t),
              (r += 3),
              (n = this.config.whiteNoteWidth));
          for (let i = this.firstDrawnOctave; i <= this.lastDrawnOctave; i++)
            for (let i = 0; i < this.NOTES_PER_OCTAVE; i++)
              -1 !== e.indexOf(i)
                ? this.drawBlackKey(r, n + t)
                : (n += this.config.whiteNoteWidth),
                r++;
        }
        drawWhiteKey(t, e) {
          const n = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "rect"
          );
          return (
            (n.dataset.pitch = String(t)),
            n.setAttribute("x", String(e)),
            n.setAttribute("y", "0"),
            n.setAttribute("width", String(this.config.whiteNoteWidth)),
            n.setAttribute("height", String(this.config.whiteNoteHeight)),
            n.setAttribute("fill", "white"),
            n.setAttribute("original-fill", "white"),
            n.setAttribute("stroke", "black"),
            n.setAttribute("stroke-width", "3px"),
            n.classList.add("white"),
            this.svgPiano.appendChild(n),
            n
          );
        }
        drawBlackKey(t, e) {
          const n = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "rect"
          );
          return (
            (n.dataset.pitch = String(t)),
            n.setAttribute("x", String(e)),
            n.setAttribute("y", "0"),
            n.setAttribute("width", String(this.config.blackNoteWidth)),
            n.setAttribute("height", String(this.config.blackNoteHeight)),
            n.setAttribute("fill", "black"),
            n.setAttribute("original-fill", "black"),
            n.setAttribute("stroke", "black"),
            n.setAttribute("stroke-width", "3px"),
            n.classList.add("black"),
            this.svgPiano.appendChild(n),
            n
          );
        }
        clearActiveNotes() {
          super.unfillActiveRect(this.svg);
          const t = this.svgPiano.querySelectorAll("rect.active");
          for (let e = 0; e < t.length; ++e) {
            const n = t[e];
            n.setAttribute("fill", n.getAttribute("original-fill")),
              n.classList.remove("active");
          }
        }
      }
      var G;
      !(function (t) {
        (t[(t.PAGE = 0)] = "PAGE"),
          (t[(t.NOTE = 1)] = "NOTE"),
          (t[(t.BAR = 2)] = "BAR");
      })(G || (G = {}));
      class F extends D {
        constructor(t, e, n = {}) {
          super(t, n),
            (void 0 === n.pixelsPerTimeStep || n.pixelsPerTimeStep <= 0) &&
              (this.config.pixelsPerTimeStep = 0),
            (this.instruments = n.instruments || []),
            (this.render = new z.StaffSVGRender(
              this.getScoreInfo(t),
              {
                noteHeight: this.config.noteHeight,
                noteSpacing: this.config.noteSpacing,
                pixelsPerTimeStep: this.config.pixelsPerTimeStep,
                noteRGB: this.config.noteRGB,
                activeNoteRGB: this.config.activeNoteRGB,
                defaultKey: n.defaultKey || 0,
                scrollType: n.scrollType || G.PAGE,
              },
              e
            )),
            (this.drawnNotes = t.notes.length),
            this.clear(),
            this.redraw();
        }
        clear() {
          this.render.clear();
        }
        redraw(t, e) {
          this.drawnNotes !== this.noteSequence.notes.length &&
            (this.render.scoreInfo = this.getScoreInfo(this.noteSequence));
          const n = t ? this.getNoteInfo(t) : void 0;
          return this.render.redraw(n, e);
        }
        isNoteInInstruments(t) {
          return (
            void 0 === t.instrument ||
            0 === this.instruments.length ||
            this.instruments.indexOf(t.instrument) >= 0
          );
        }
        timeToQuarters(t) {
          const e = (t * this.noteSequence.tempos[0].qpm) / 60;
          return Math.round(16 * e) / 16;
        }
        quantizedStepsToQuarters(t) {
          const e = t / this.noteSequence.quantizationInfo.stepsPerQuarter;
          return Math.round(16 * e) / 16;
        }
        getNoteInfo(t) {
          const e = this.sequenceIsQuantized
            ? this.quantizedStepsToQuarters(t.quantizedStartStep)
            : this.timeToQuarters(t.startTime);
          return {
            start: e,
            length:
              (this.sequenceIsQuantized
                ? this.quantizedStepsToQuarters(t.quantizedEndStep)
                : this.timeToQuarters(t.endTime)) - e,
            pitch: t.pitch,
            intensity: t.velocity,
          };
        }
        getScoreInfo(t) {
          const e = [];
          return (
            t.notes.forEach((t) => {
              this.isNoteInInstruments(t) && e.push(this.getNoteInfo(t));
            }),
            {
              notes: e,
              tempos: t.tempos
                ? t.tempos.map((t) => ({
                    start: this.timeToQuarters(t.time),
                    qpm: t.qpm,
                  }))
                : [],
              keySignatures: t.keySignatures
                ? t.keySignatures.map((t) => ({
                    start: this.timeToQuarters(t.time),
                    key: t.key,
                  }))
                : [],
              timeSignatures: t.timeSignatures
                ? t.timeSignatures.map((t) => ({
                    start: this.timeToQuarters(t.time),
                    numerator: t.numerator,
                    denominator: t.denominator,
                  }))
                : [],
            }
          );
        }
        clearActiveNotes() {
          this.redraw();
        }
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e) {
      function n(t) {
        for (var e, n = new r(t), i = []; !n.eof(); ) {
          var o = s();
          i.push(o);
        }
        return i;
        function s() {
          var t = {};
          t.deltaTime = n.readVarInt();
          var r = n.readUInt8();
          if (240 == (240 & r)) {
            if (255 !== r) {
              if (240 == r) {
                t.type = "sysEx";
                o = n.readVarInt();
                return (t.data = n.readBytes(o)), t;
              }
              if (247 == r) {
                t.type = "endSysEx";
                o = n.readVarInt();
                return (t.data = n.readBytes(o)), t;
              }
              throw "Unrecognised MIDI event type byte: " + r;
            }
            t.meta = !0;
            var i = n.readUInt8(),
              o = n.readVarInt();
            switch (i) {
              case 0:
                if (((t.type = "sequenceNumber"), 2 !== o))
                  throw (
                    "Expected length for sequenceNumber event is 2, got " + o
                  );
                return (t.number = n.readUInt16()), t;
              case 1:
                return (t.type = "text"), (t.text = n.readString(o)), t;
              case 2:
                return (
                  (t.type = "copyrightNotice"), (t.text = n.readString(o)), t
                );
              case 3:
                return (t.type = "trackName"), (t.text = n.readString(o)), t;
              case 4:
                return (
                  (t.type = "instrumentName"), (t.text = n.readString(o)), t
                );
              case 5:
                return (t.type = "lyrics"), (t.text = n.readString(o)), t;
              case 6:
                return (t.type = "marker"), (t.text = n.readString(o)), t;
              case 7:
                return (t.type = "cuePoint"), (t.text = n.readString(o)), t;
              case 32:
                if (((t.type = "channelPrefix"), 1 != o))
                  throw (
                    "Expected length for channelPrefix event is 1, got " + o
                  );
                return (t.channel = n.readUInt8()), t;
              case 33:
                if (((t.type = "portPrefix"), 1 != o))
                  throw "Expected length for portPrefix event is 1, got " + o;
                return (t.port = n.readUInt8()), t;
              case 47:
                if (((t.type = "endOfTrack"), 0 != o))
                  throw "Expected length for endOfTrack event is 0, got " + o;
                return t;
              case 81:
                if (((t.type = "setTempo"), 3 != o))
                  throw "Expected length for setTempo event is 3, got " + o;
                return (t.microsecondsPerBeat = n.readUInt24()), t;
              case 84:
                if (((t.type = "smpteOffset"), 5 != o))
                  throw "Expected length for smpteOffset event is 5, got " + o;
                var s = n.readUInt8();
                return (
                  (t.frameRate = { 0: 24, 32: 25, 64: 29, 96: 30 }[96 & s]),
                  (t.hour = 31 & s),
                  (t.min = n.readUInt8()),
                  (t.sec = n.readUInt8()),
                  (t.frame = n.readUInt8()),
                  (t.subFrame = n.readUInt8()),
                  t
                );
              case 88:
                if (((t.type = "timeSignature"), 4 != o))
                  throw (
                    "Expected length for timeSignature event is 4, got " + o
                  );
                return (
                  (t.numerator = n.readUInt8()),
                  (t.denominator = 1 << n.readUInt8()),
                  (t.metronome = n.readUInt8()),
                  (t.thirtyseconds = n.readUInt8()),
                  t
                );
              case 89:
                if (((t.type = "keySignature"), 2 != o))
                  throw "Expected length for keySignature event is 2, got " + o;
                return (t.key = n.readInt8()), (t.scale = n.readUInt8()), t;
              case 127:
                return (
                  (t.type = "sequencerSpecific"), (t.data = n.readBytes(o)), t
                );
              default:
                return (
                  (t.type = "unknownMeta"),
                  (t.data = n.readBytes(o)),
                  (t.metatypeByte = i),
                  t
                );
            }
          } else {
            var a;
            if (0 == (128 & r)) {
              if (null === e)
                throw "Running status byte encountered before status byte";
              (a = r), (r = e), (t.running = !0);
            } else (a = n.readUInt8()), (e = r);
            var u = r >> 4;
            switch (((t.channel = 15 & r), u)) {
              case 8:
                return (
                  (t.type = "noteOff"),
                  (t.noteNumber = a),
                  (t.velocity = n.readUInt8()),
                  t
                );
              case 9:
                var c = n.readUInt8();
                return (
                  (t.type = 0 === c ? "noteOff" : "noteOn"),
                  (t.noteNumber = a),
                  (t.velocity = c),
                  0 === c && (t.byte9 = !0),
                  t
                );
              case 10:
                return (
                  (t.type = "noteAftertouch"),
                  (t.noteNumber = a),
                  (t.amount = n.readUInt8()),
                  t
                );
              case 11:
                return (
                  (t.type = "controller"),
                  (t.controllerType = a),
                  (t.value = n.readUInt8()),
                  t
                );
              case 12:
                return (t.type = "programChange"), (t.programNumber = a), t;
              case 13:
                return (t.type = "channelAftertouch"), (t.amount = a), t;
              case 14:
                return (
                  (t.type = "pitchBend"),
                  (t.value = a + (n.readUInt8() << 7) - 8192),
                  t
                );
              default:
                throw "Unrecognised MIDI event type: " + u;
            }
          }
        }
      }
      function r(t) {
        (this.buffer = t),
          (this.bufferLen = this.buffer.length),
          (this.pos = 0);
      }
      (r.prototype.eof = function () {
        return this.pos >= this.bufferLen;
      }),
        (r.prototype.readUInt8 = function () {
          var t = this.buffer[this.pos];
          return (this.pos += 1), t;
        }),
        (r.prototype.readInt8 = function () {
          var t = this.readUInt8();
          return 128 & t ? t - 256 : t;
        }),
        (r.prototype.readUInt16 = function () {
          return (this.readUInt8() << 8) + this.readUInt8();
        }),
        (r.prototype.readInt16 = function () {
          var t = this.readUInt16();
          return 32768 & t ? t - 65536 : t;
        }),
        (r.prototype.readUInt24 = function () {
          return (
            (this.readUInt8() << 16) +
            (this.readUInt8() << 8) +
            this.readUInt8()
          );
        }),
        (r.prototype.readInt24 = function () {
          var t = this.readUInt24();
          return 8388608 & t ? t - 16777216 : t;
        }),
        (r.prototype.readUInt32 = function () {
          return (
            (this.readUInt8() << 24) +
            (this.readUInt8() << 16) +
            (this.readUInt8() << 8) +
            this.readUInt8()
          );
        }),
        (r.prototype.readBytes = function (t) {
          var e = this.buffer.slice(this.pos, this.pos + t);
          return (this.pos += t), e;
        }),
        (r.prototype.readString = function (t) {
          var e = this.readBytes(t);
          return String.fromCharCode.apply(null, e);
        }),
        (r.prototype.readVarInt = function () {
          for (var t = 0; !this.eof(); ) {
            var e = this.readUInt8();
            if (!(128 & e)) return t + e;
            (t += 127 & e), (t <<= 7);
          }
          return t;
        }),
        (r.prototype.readChunk = function () {
          var t = this.readString(4),
            e = this.readUInt32();
          return { id: t, length: e, data: this.readBytes(e) };
        }),
        (t.exports = function (t) {
          var e = new r(t),
            i = e.readChunk();
          if ("MThd" != i.id)
            throw "Bad MIDI file.  Expected 'MHdr', got: '" + i.id + "'";
          for (
            var o = (function (t) {
                var e = new r(t),
                  n = e.readUInt16(),
                  i = e.readUInt16(),
                  o = { format: n, numTracks: i },
                  s = e.readUInt16();
                32768 & s
                  ? ((o.framesPerSecond = 256 - (s >> 8)),
                    (o.ticksPerFrame = 255 & s))
                  : (o.ticksPerBeat = s);
                return o;
              })(i.data),
              s = [],
              a = 0;
            !e.eof() && a < o.numTracks;
            a++
          ) {
            var u = e.readChunk();
            if ("MTrk" != u.id)
              throw "Bad MIDI file.  Expected 'MTrk', got: '" + u.id + "'";
            var c = n(u.data);
            s.push(c);
          }
          return { header: o, tracks: s };
        });
    },
    function (t, e) {
      function n(t, e, n) {
        var o,
          s = new i(),
          a = e.length,
          u = null;
        for (o = 0; o < a; o++)
          (!1 !== n.running && (n.running || e[o].running)) || (u = null),
            (u = r(s, e[o], u, n.useByte9ForNoteOff));
        t.writeChunk("MTrk", s.buffer);
      }
      function r(t, e, n, r) {
        var i = e.type,
          o = e.deltaTime,
          s = e.text || "",
          a = e.data || [],
          u = null;
        switch ((t.writeVarInt(o), i)) {
          case "sequenceNumber":
            t.writeUInt8(255),
              t.writeUInt8(0),
              t.writeVarInt(2),
              t.writeUInt16(e.number);
            break;
          case "text":
            t.writeUInt8(255),
              t.writeUInt8(1),
              t.writeVarInt(s.length),
              t.writeString(s);
            break;
          case "copyrightNotice":
            t.writeUInt8(255),
              t.writeUInt8(2),
              t.writeVarInt(s.length),
              t.writeString(s);
            break;
          case "trackName":
            t.writeUInt8(255),
              t.writeUInt8(3),
              t.writeVarInt(s.length),
              t.writeString(s);
            break;
          case "instrumentName":
            t.writeUInt8(255),
              t.writeUInt8(4),
              t.writeVarInt(s.length),
              t.writeString(s);
            break;
          case "lyrics":
            t.writeUInt8(255),
              t.writeUInt8(5),
              t.writeVarInt(s.length),
              t.writeString(s);
            break;
          case "marker":
            t.writeUInt8(255),
              t.writeUInt8(6),
              t.writeVarInt(s.length),
              t.writeString(s);
            break;
          case "cuePoint":
            t.writeUInt8(255),
              t.writeUInt8(7),
              t.writeVarInt(s.length),
              t.writeString(s);
            break;
          case "channelPrefix":
            t.writeUInt8(255),
              t.writeUInt8(32),
              t.writeVarInt(1),
              t.writeUInt8(e.channel);
            break;
          case "portPrefix":
            t.writeUInt8(255),
              t.writeUInt8(33),
              t.writeVarInt(1),
              t.writeUInt8(e.port);
            break;
          case "endOfTrack":
            t.writeUInt8(255), t.writeUInt8(47), t.writeVarInt(0);
            break;
          case "setTempo":
            t.writeUInt8(255),
              t.writeUInt8(81),
              t.writeVarInt(3),
              t.writeUInt24(e.microsecondsPerBeat);
            break;
          case "smpteOffset":
            t.writeUInt8(255), t.writeUInt8(84), t.writeVarInt(5);
            var c =
              (31 & e.hour) | { 24: 0, 25: 32, 29: 64, 30: 96 }[e.frameRate];
            t.writeUInt8(c),
              t.writeUInt8(e.min),
              t.writeUInt8(e.sec),
              t.writeUInt8(e.frame),
              t.writeUInt8(e.subFrame);
            break;
          case "timeSignature":
            t.writeUInt8(255),
              t.writeUInt8(88),
              t.writeVarInt(4),
              t.writeUInt8(e.numerator);
            var l = 255 & Math.floor(Math.log(e.denominator) / Math.LN2);
            t.writeUInt8(l),
              t.writeUInt8(e.metronome),
              t.writeUInt8(e.thirtyseconds || 8);
            break;
          case "keySignature":
            t.writeUInt8(255),
              t.writeUInt8(89),
              t.writeVarInt(2),
              t.writeInt8(e.key),
              t.writeUInt8(e.scale);
            break;
          case "sequencerSpecific":
            t.writeUInt8(255),
              t.writeUInt8(127),
              t.writeVarInt(a.length),
              t.writeBytes(a);
            break;
          case "unknownMeta":
            null != e.metatypeByte &&
              (t.writeUInt8(255),
              t.writeUInt8(e.metatypeByte),
              t.writeVarInt(a.length),
              t.writeBytes(a));
            break;
          case "sysEx":
            t.writeUInt8(240), t.writeVarInt(a.length), t.writeBytes(a);
            break;
          case "endSysEx":
            t.writeUInt8(247), t.writeVarInt(a.length), t.writeBytes(a);
            break;
          case "noteOff":
            (u =
              ((!1 !== r && e.byte9) || (r && 0 == e.velocity) ? 144 : 128) |
              e.channel) !== n && t.writeUInt8(u),
              t.writeUInt8(e.noteNumber),
              t.writeUInt8(e.velocity);
            break;
          case "noteOn":
            (u = 144 | e.channel) !== n && t.writeUInt8(u),
              t.writeUInt8(e.noteNumber),
              t.writeUInt8(e.velocity);
            break;
          case "noteAftertouch":
            (u = 160 | e.channel) !== n && t.writeUInt8(u),
              t.writeUInt8(e.noteNumber),
              t.writeUInt8(e.amount);
            break;
          case "controller":
            (u = 176 | e.channel) !== n && t.writeUInt8(u),
              t.writeUInt8(e.controllerType),
              t.writeUInt8(e.value);
            break;
          case "programChange":
            (u = 192 | e.channel) !== n && t.writeUInt8(u),
              t.writeUInt8(e.programNumber);
            break;
          case "channelAftertouch":
            (u = 208 | e.channel) !== n && t.writeUInt8(u),
              t.writeUInt8(e.amount);
            break;
          case "pitchBend":
            (u = 224 | e.channel) !== n && t.writeUInt8(u);
            var h = 8192 + e.value,
              p = 127 & h,
              f = (h >> 7) & 127;
            t.writeUInt8(p), t.writeUInt8(f);
            break;
          default:
            throw "Unrecognized event type: " + i;
        }
        return u;
      }
      function i() {
        this.buffer = [];
      }
      (i.prototype.writeUInt8 = function (t) {
        this.buffer.push(255 & t);
      }),
        (i.prototype.writeInt8 = i.prototype.writeUInt8),
        (i.prototype.writeUInt16 = function (t) {
          var e = (t >> 8) & 255,
            n = 255 & t;
          this.writeUInt8(e), this.writeUInt8(n);
        }),
        (i.prototype.writeInt16 = i.prototype.writeUInt16),
        (i.prototype.writeUInt24 = function (t) {
          var e = (t >> 16) & 255,
            n = (t >> 8) & 255,
            r = 255 & t;
          this.writeUInt8(e), this.writeUInt8(n), this.writeUInt8(r);
        }),
        (i.prototype.writeInt24 = i.prototype.writeUInt24),
        (i.prototype.writeUInt32 = function (t) {
          var e = (t >> 24) & 255,
            n = (t >> 16) & 255,
            r = (t >> 8) & 255,
            i = 255 & t;
          this.writeUInt8(e),
            this.writeUInt8(n),
            this.writeUInt8(r),
            this.writeUInt8(i);
        }),
        (i.prototype.writeInt32 = i.prototype.writeUInt32),
        (i.prototype.writeBytes = function (t) {
          this.buffer = this.buffer.concat(Array.prototype.slice.call(t, 0));
        }),
        (i.prototype.writeString = function (t) {
          var e,
            n = t.length,
            r = [];
          for (e = 0; e < n; e++) r.push(t.codePointAt(e));
          this.writeBytes(r);
        }),
        (i.prototype.writeVarInt = function (t) {
          if (t < 0) throw "Cannot write negative variable-length integer";
          if (t <= 127) this.writeUInt8(t);
          else {
            var e = t,
              n = [];
            for (n.push(127 & e), e >>= 7; e; ) {
              var r = (127 & e) | 128;
              n.push(r), (e >>= 7);
            }
            this.writeBytes(n.reverse());
          }
        }),
        (i.prototype.writeChunk = function (t, e) {
          this.writeString(t), this.writeUInt32(e.length), this.writeBytes(e);
        }),
        (t.exports = function (t, e) {
          if ("object" != typeof t) throw "Invalid MIDI data";
          e = e || {};
          var r,
            o = t.header || {},
            s = t.tracks || [],
            a = s.length,
            u = new i();
          for (
            (function (t, e, n) {
              var r = null == e.format ? 1 : e.format,
                o = 128;
              e.timeDivision
                ? (o = e.timeDivision)
                : e.ticksPerFrame && e.framesPerSecond
                ? (o =
                    (-(255 & e.framesPerSecond) << 8) | (255 & e.ticksPerFrame))
                : e.ticksPerBeat && (o = 32767 & e.ticksPerBeat);
              var s = new i();
              s.writeUInt16(r),
                s.writeUInt16(n),
                s.writeUInt16(o),
                t.writeChunk("MThd", s.buffer);
            })(u, o, a),
              r = 0;
            r < a;
            r++
          )
            n(u, s[r], e);
          return u.buffer;
        });
    },
    function (t, e, n) {
      "use strict";
      var r =
          (this && this.__spreadArrays) ||
          function () {
            for (var t = 0, e = 0, n = arguments.length; e < n; e++)
              t += arguments[e].length;
            var r = Array(t),
              i = 0;
            for (e = 0; e < n; e++)
              for (var o = arguments[e], s = 0, a = o.length; s < a; s++, i++)
                r[i] = o[s];
            return r;
          },
        i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = n(51),
        s = n(40),
        a = i(n(83));
      function u(t) {
        return a.default(
          t.notes.map(function (e) {
            return (function (t, e) {
              return [
                {
                  absoluteTime: t.ticks,
                  channel: e,
                  deltaTime: 0,
                  noteNumber: t.midi,
                  type: "noteOn",
                  velocity: Math.floor(127 * t.velocity),
                },
                {
                  absoluteTime: t.ticks + t.durationTicks,
                  channel: e,
                  deltaTime: 0,
                  noteNumber: t.midi,
                  type: "noteOff",
                  velocity: Math.floor(127 * t.noteOffVelocity),
                },
              ];
            })(e, t.channel);
          })
        );
      }
      function c(t, e) {
        return {
          absoluteTime: t.ticks,
          channel: e,
          controllerType: t.number,
          deltaTime: 0,
          type: "controller",
          value: t.value,
        };
      }
      function l(t) {
        return {
          absoluteTime: 0,
          channel: t.channel,
          deltaTime: 0,
          programNumber: t.instrument.number,
          type: "programChange",
        };
      }
      e.encode = function (t) {
        var e = {
          header: {
            format: 1,
            numTracks: t.tracks.length + 1,
            ticksPerBeat: t.header.ppq,
          },
          tracks: r(
            [
              r(
                [
                  {
                    absoluteTime: 0,
                    deltaTime: 0,
                    meta: !0,
                    text: t.header.name,
                    type: "trackName",
                  },
                ],
                t.header.keySignatures.map(function (t) {
                  return (function (t) {
                    var e = s.keySignatureKeys.indexOf(t.key);
                    return {
                      absoluteTime: t.ticks,
                      deltaTime: 0,
                      key: e + 7,
                      meta: !0,
                      scale: "major" === t.scale ? 0 : 1,
                      type: "keySignature",
                    };
                  })(t);
                }),
                t.header.meta.map(function (t) {
                  return {
                    absoluteTime: (e = t).ticks,
                    deltaTime: 0,
                    meta: !0,
                    text: e.text,
                    type: e.type,
                  };
                  var e;
                }),
                t.header.tempos.map(function (t) {
                  return (function (t) {
                    return {
                      absoluteTime: t.ticks,
                      deltaTime: 0,
                      meta: !0,
                      microsecondsPerBeat: Math.floor(6e7 / t.bpm),
                      type: "setTempo",
                    };
                  })(t);
                }),
                t.header.timeSignatures.map(function (t) {
                  return (function (t) {
                    return {
                      absoluteTime: t.ticks,
                      deltaTime: 0,
                      denominator: t.timeSignature[1],
                      meta: !0,
                      metronome: 24,
                      numerator: t.timeSignature[0],
                      thirtyseconds: 8,
                      type: "timeSignature",
                    };
                  })(t);
                })
              ),
            ],
            t.tracks.map(function (t) {
              return r(
                [
                  ((e = t.name),
                  {
                    absoluteTime: 0,
                    deltaTime: 0,
                    meta: !0,
                    text: e,
                    type: "trackName",
                  }),
                  l(t),
                ],
                u(t),
                (function (t) {
                  for (var e = [], n = 0; n < 127; n++)
                    t.controlChanges.hasOwnProperty(n) &&
                      t.controlChanges[n].forEach(function (n) {
                        e.push(c(n, t.channel));
                      });
                  return e;
                })(t),
                (function (t) {
                  var e = [];
                  return (
                    t.pitchBends.forEach(function (n) {
                      e.push(
                        (function (t, e) {
                          return {
                            absoluteTime: t.ticks,
                            channel: e,
                            deltaTime: 0,
                            type: "pitchBend",
                            value: t.value,
                          };
                        })(n, t.channel)
                      );
                    }),
                    e
                  );
                })(t)
              );
              var e;
            })
          ),
        };
        return (
          (e.tracks = e.tracks.map(function (t) {
            t = t.sort(function (t, e) {
              return t.absoluteTime - e.absoluteTime;
            });
            var e = 0;
            return (
              t.forEach(function (t) {
                (t.deltaTime = t.absoluteTime - e),
                  (e = t.absoluteTime),
                  delete t.absoluteTime;
              }),
              t.push({ deltaTime: 0, meta: !0, type: "endOfTrack" }),
              t
            );
          })),
          new Uint8Array(o.writeMidi(e))
        );
      };
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return (function t(e, n) {
          for (var r = 0; r < e.length; r++) {
            var i = e[r];
            Array.isArray(i) ? t(i, n) : n.push(i);
          }
          return n;
        })(t, []);
      }
      function i(t, e) {
        if ("number" != typeof e)
          throw new TypeError("Expected the depth to be a number");
        return (function t(e, n, r) {
          r--;
          for (var i = 0; i < e.length; i++) {
            var o = e[i];
            r > -1 && Array.isArray(o) ? t(o, n, r) : n.push(o);
          }
          return n;
        })(t, [], e);
      }
      (t.exports = function (t) {
        if (!Array.isArray(t))
          throw new TypeError("Expected value to be an array");
        return r(t);
      }),
        (t.exports.from = r),
        (t.exports.depth = function (t, e) {
          if (!Array.isArray(t))
            throw new TypeError("Expected value to be an array");
          return i(t, e);
        }),
        (t.exports.fromDepth = i);
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(54);
      e.createControlChanges = function () {
        return new Proxy(
          {},
          {
            get: function (t, e) {
              return t[e]
                ? t[e]
                : r.controlChangeIds.hasOwnProperty(e)
                ? t[r.controlChangeIds[e]]
                : void 0;
            },
            set: function (t, e, n) {
              return (
                r.controlChangeIds.hasOwnProperty(e)
                  ? (t[r.controlChangeIds[e]] = n)
                  : (t[e] = n),
                !0
              );
            },
          }
        );
      };
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = new WeakMap(),
        i = (function () {
          function t(t, e) {
            r.set(this, e),
              (this.ticks = t.absoluteTime),
              (this.value = t.value);
          }
          return (
            Object.defineProperty(t.prototype, "time", {
              get: function () {
                return r.get(this).ticksToSeconds(this.ticks);
              },
              set: function (t) {
                var e = r.get(this);
                this.ticks = e.secondsToTicks(t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.toJSON = function () {
              return {
                ticks: this.ticks,
                time: this.time,
                value: this.value,
              };
            }),
            t
          );
        })();
      e.PitchBend = i;
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(87),
        i = new WeakMap(),
        o = (function () {
          function t(t, e) {
            if (((this.number = 0), i.set(this, e), (this.number = 0), t)) {
              var n = t.find(function (t) {
                return "programChange" === t.type;
              });
              n && (this.number = n.programNumber);
            }
          }
          return (
            Object.defineProperty(t.prototype, "name", {
              get: function () {
                return this.percussion
                  ? r.DrumKitByPatchID[this.number]
                  : r.instrumentByPatchID[this.number];
              },
              set: function (t) {
                var e = r.instrumentByPatchID.indexOf(t);
                -1 !== e && (this.number = e);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "family", {
              get: function () {
                return this.percussion
                  ? "drums"
                  : r.InstrumentFamilyByID[Math.floor(this.number / 8)];
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "percussion", {
              get: function () {
                return 9 === i.get(this).channel;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.toJSON = function () {
              return {
                family: this.family,
                name: this.name,
                number: this.number,
              };
            }),
            (t.prototype.fromJSON = function (t) {
              this.number = t.number;
            }),
            t
          );
        })();
      e.Instrument = o;
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.instrumentByPatchID = [
          "acoustic grand piano",
          "bright acoustic piano",
          "electric grand piano",
          "honky-tonk piano",
          "electric piano 1",
          "electric piano 2",
          "harpsichord",
          "clavi",
          "celesta",
          "glockenspiel",
          "music box",
          "vibraphone",
          "marimba",
          "xylophone",
          "tubular bells",
          "dulcimer",
          "drawbar organ",
          "percussive organ",
          "rock organ",
          "church organ",
          "reed organ",
          "accordion",
          "harmonica",
          "tango accordion",
          "acoustic guitar (nylon)",
          "acoustic guitar (steel)",
          "electric guitar (jazz)",
          "electric guitar (clean)",
          "electric guitar (muted)",
          "overdriven guitar",
          "distortion guitar",
          "guitar harmonics",
          "acoustic bass",
          "electric bass (finger)",
          "electric bass (pick)",
          "fretless bass",
          "slap bass 1",
          "slap bass 2",
          "synth bass 1",
          "synth bass 2",
          "violin",
          "viola",
          "cello",
          "contrabass",
          "tremolo strings",
          "pizzicato strings",
          "orchestral harp",
          "timpani",
          "string ensemble 1",
          "string ensemble 2",
          "synthstrings 1",
          "synthstrings 2",
          "choir aahs",
          "voice oohs",
          "synth voice",
          "orchestra hit",
          "trumpet",
          "trombone",
          "tuba",
          "muted trumpet",
          "french horn",
          "brass section",
          "synthbrass 1",
          "synthbrass 2",
          "soprano sax",
          "alto sax",
          "tenor sax",
          "baritone sax",
          "oboe",
          "english horn",
          "bassoon",
          "clarinet",
          "piccolo",
          "flute",
          "recorder",
          "pan flute",
          "blown bottle",
          "shakuhachi",
          "whistle",
          "ocarina",
          "lead 1 (square)",
          "lead 2 (sawtooth)",
          "lead 3 (calliope)",
          "lead 4 (chiff)",
          "lead 5 (charang)",
          "lead 6 (voice)",
          "lead 7 (fifths)",
          "lead 8 (bass + lead)",
          "pad 1 (new age)",
          "pad 2 (warm)",
          "pad 3 (polysynth)",
          "pad 4 (choir)",
          "pad 5 (bowed)",
          "pad 6 (metallic)",
          "pad 7 (halo)",
          "pad 8 (sweep)",
          "fx 1 (rain)",
          "fx 2 (soundtrack)",
          "fx 3 (crystal)",
          "fx 4 (atmosphere)",
          "fx 5 (brightness)",
          "fx 6 (goblins)",
          "fx 7 (echoes)",
          "fx 8 (sci-fi)",
          "sitar",
          "banjo",
          "shamisen",
          "koto",
          "kalimba",
          "bag pipe",
          "fiddle",
          "shanai",
          "tinkle bell",
          "agogo",
          "steel drums",
          "woodblock",
          "taiko drum",
          "melodic tom",
          "synth drum",
          "reverse cymbal",
          "guitar fret noise",
          "breath noise",
          "seashore",
          "bird tweet",
          "telephone ring",
          "helicopter",
          "applause",
          "gunshot",
        ]),
        (e.InstrumentFamilyByID = [
          "piano",
          "chromatic percussion",
          "organ",
          "guitar",
          "bass",
          "strings",
          "ensemble",
          "brass",
          "reed",
          "pipe",
          "synth lead",
          "synth pad",
          "synth effects",
          "world",
          "percussive",
          "sound effects",
        ]),
        (e.DrumKitByPatchID = {
          0: "standard kit",
          8: "room kit",
          16: "power kit",
          24: "electronic kit",
          25: "tr-808 kit",
          32: "jazz kit",
          40: "brush kit",
          48: "orchestra kit",
          56: "sound fx kit",
        });
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return [
          "C",
          "C#",
          "D",
          "D#",
          "E",
          "F",
          "F#",
          "G",
          "G#",
          "A",
          "A#",
          "B",
        ][t % 12];
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i,
        o,
        s =
          ((i = /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i),
          (o = {
            cbb: -2,
            cb: -1,
            c: 0,
            "c#": 1,
            cx: 2,
            dbb: 0,
            db: 1,
            d: 2,
            "d#": 3,
            dx: 4,
            ebb: 2,
            eb: 3,
            e: 4,
            "e#": 5,
            ex: 6,
            fbb: 3,
            fb: 4,
            f: 5,
            "f#": 6,
            fx: 7,
            gbb: 5,
            gb: 6,
            g: 7,
            "g#": 8,
            gx: 9,
            abb: 7,
            ab: 8,
            a: 9,
            "a#": 10,
            ax: 11,
            bbb: 9,
            bb: 10,
            b: 11,
            "b#": 12,
            bx: 13,
          }),
          function (t) {
            var e = i.exec(t),
              n = e[1],
              r = e[2];
            return o[n.toLowerCase()] + 12 * (parseInt(r, 10) + 1);
          }),
        a = new WeakMap(),
        u = (function () {
          function t(t, e, n) {
            a.set(this, n),
              (this.midi = t.midi),
              (this.velocity = t.velocity),
              (this.noteOffVelocity = e.velocity),
              (this.ticks = t.ticks),
              (this.durationTicks = e.ticks - t.ticks);
          }
          return (
            Object.defineProperty(t.prototype, "name", {
              get: function () {
                return (
                  (t = this.midi),
                  (e = Math.floor(t / 12) - 1),
                  r(t) + e.toString()
                );
                var t, e;
              },
              set: function (t) {
                this.midi = s(t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "octave", {
              get: function () {
                return Math.floor(this.midi / 12) - 1;
              },
              set: function (t) {
                var e = t - this.octave;
                this.midi += 12 * e;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "pitch", {
              get: function () {
                return r(this.midi);
              },
              set: function (t) {
                this.midi =
                  12 * (this.octave + 1) +
                  [
                    "C",
                    "C#",
                    "D",
                    "D#",
                    "E",
                    "F",
                    "F#",
                    "G",
                    "G#",
                    "A",
                    "A#",
                    "B",
                  ].indexOf(t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "duration", {
              get: function () {
                var t = a.get(this);
                return (
                  t.ticksToSeconds(this.ticks + this.durationTicks) -
                  t.ticksToSeconds(this.ticks)
                );
              },
              set: function (t) {
                var e = a.get(this).secondsToTicks(this.time + t);
                this.durationTicks = e - this.ticks;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "time", {
              get: function () {
                return a.get(this).ticksToSeconds(this.ticks);
              },
              set: function (t) {
                var e = a.get(this);
                this.ticks = e.secondsToTicks(t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "bars", {
              get: function () {
                return a.get(this).ticksToMeasures(this.ticks);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.toJSON = function () {
              return {
                duration: this.duration,
                durationTicks: this.durationTicks,
                midi: this.midi,
                name: this.name,
                ticks: this.ticks,
                time: this.time,
                velocity: this.velocity,
              };
            }),
            t
          );
        })();
      e.Note = u;
    },
  ]);
});

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t()
    : "function" == typeof define && define.amd
    ? define(t)
    : t();
})(0, function () {
  "use strict";
  function e(e) {
    var t = !0,
      n = !1,
      o = null,
      d = {
        text: !0,
        search: !0,
        url: !0,
        tel: !0,
        email: !0,
        password: !0,
        number: !0,
        date: !0,
        month: !0,
        week: !0,
        time: !0,
        datetime: !0,
        "datetime-local": !0,
      };
    function i(e) {
      return !!(
        e &&
        e !== document &&
        "HTML" !== e.nodeName &&
        "BODY" !== e.nodeName &&
        "classList" in e &&
        "contains" in e.classList
      );
    }
    function s(e) {
      e.classList.contains("focus-visible") ||
        (e.classList.add("focus-visible"),
        e.setAttribute("data-focus-visible-added", ""));
    }
    function u(e) {
      t = !1;
    }
    function a() {
      document.addEventListener("mousemove", c),
        document.addEventListener("mousedown", c),
        document.addEventListener("mouseup", c),
        document.addEventListener("pointermove", c),
        document.addEventListener("pointerdown", c),
        document.addEventListener("pointerup", c),
        document.addEventListener("touchmove", c),
        document.addEventListener("touchstart", c),
        document.addEventListener("touchend", c);
    }
    function c(e) {
      (e.target.nodeName && "html" === e.target.nodeName.toLowerCase()) ||
        ((t = !1),
        document.removeEventListener("mousemove", c),
        document.removeEventListener("mousedown", c),
        document.removeEventListener("mouseup", c),
        document.removeEventListener("pointermove", c),
        document.removeEventListener("pointerdown", c),
        document.removeEventListener("pointerup", c),
        document.removeEventListener("touchmove", c),
        document.removeEventListener("touchstart", c),
        document.removeEventListener("touchend", c));
    }
    document.addEventListener(
      "keydown",
      function (n) {
        n.metaKey ||
          n.altKey ||
          n.ctrlKey ||
          (i(e.activeElement) && s(e.activeElement), (t = !0));
      },
      !0
    ),
      document.addEventListener("mousedown", u, !0),
      document.addEventListener("pointerdown", u, !0),
      document.addEventListener("touchstart", u, !0),
      document.addEventListener(
        "visibilitychange",
        function (e) {
          "hidden" === document.visibilityState && (n && (t = !0), a());
        },
        !0
      ),
      a(),
      e.addEventListener(
        "focus",
        function (e) {
          var n, o, u;
          i(e.target) &&
            (t ||
              ((n = e.target),
              (o = n.type),
              ("INPUT" === (u = n.tagName) && d[o] && !n.readOnly) ||
                ("TEXTAREA" === u && !n.readOnly) ||
                n.isContentEditable)) &&
            s(e.target);
        },
        !0
      ),
      e.addEventListener(
        "blur",
        function (e) {
          var t;
          i(e.target) &&
            (e.target.classList.contains("focus-visible") ||
              e.target.hasAttribute("data-focus-visible-added")) &&
            ((n = !0),
            window.clearTimeout(o),
            (o = window.setTimeout(function () {
              n = !1;
            }, 100)),
            (t = e.target).hasAttribute("data-focus-visible-added") &&
              (t.classList.remove("focus-visible"),
              t.removeAttribute("data-focus-visible-added")));
        },
        !0
      ),
      e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host
        ? e.host.setAttribute("data-js-focus-visible", "")
        : e.nodeType === Node.DOCUMENT_NODE &&
          (document.documentElement.classList.add("js-focus-visible"),
          document.documentElement.setAttribute("data-js-focus-visible", ""));
  }
  if ("undefined" != typeof window && "undefined" != typeof document) {
    var t;
    window.applyFocusVisiblePolyfill = e;
    try {
      t = new CustomEvent("focus-visible-polyfill-ready");
    } catch (e) {
      (t = document.createEvent("CustomEvent")).initCustomEvent(
        "focus-visible-polyfill-ready",
        !1,
        !1,
        {}
      );
    }
    window.dispatchEvent(t);
  }
  "undefined" != typeof document && e(document);
});

/**
 * html-midi-player@1.0.1
 * https://github.com/cifkao/html-midi-player.git
 * @author Ondřej Cífka (@cifkao)
 * @license BSD-2-Clause
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("@magenta/music/es6/core"))
    : "function" == typeof define && define.amd
    ? define(["exports", "@magenta/music/es6/core"], e)
    : e(
        ((t =
          "undefined" != typeof globalThis
            ? globalThis
            : t || self).midiPlayer = {}),
        t.core
      );
})(this, function (t, e) {
  "use strict";
  function i(t, e, i, n, s, r, a) {
    try {
      var o = t[r](a),
        l = o.value;
    } catch (t) {
      return void i(t);
    }
    o.done ? e(l) : Promise.resolve(l).then(n, s);
  }
  function n(t) {
    return function () {
      var e = this,
        n = arguments;
      return new Promise(function (s, r) {
        var a = t.apply(e, n);
        function o(t) {
          i(a, s, r, o, l, "next", t);
        }
        function l(t) {
          i(a, s, r, o, l, "throw", t);
        }
        o(void 0);
      });
    };
  }
  var s = document.createElement("template");
  function r(t) {
    var e = t < 0,
      i = (t = Math.floor(Math.abs(t || 0))) % 60,
      n = (t - i) / 60,
      s = (t - i - 60 * n) / 3600,
      r = i > 9 ? "".concat(i) : "0".concat(i),
      a = n > 9 || !s ? "".concat(n, ":") : "0".concat(n, ":");
    return (e ? "-" : "") + (s ? "".concat(s, ":") : "") + a + r;
  }
  s.innerHTML = "\n<style>\n"
    .concat(
      ":host {\n  display: inline-block;\n  width: 300px;\n  margin: 3px;\n  vertical-align: bottom;\n  font-family: sans-serif;\n  font-size: 14px;\n}\n\n:focus:not(.focus-visible) {\n  outline: none;\n}\n\n.controls {\n  width: inherit;\n  height: inherit;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border-radius: 100px;\n  background: #f2f5f6;\n  padding: 0 0.2rem;\n  user-select: none;\n}\n.controls > * {\n  margin: 0.7rem 0.4rem;\n}\n.controls input, .controls button {\n  cursor: pointer;\n}\n.controls input:disabled, .controls button:disabled {\n  cursor: inherit;\n}\n.controls button {\n  text-align: center;\n  background: rgba(204, 204, 204, 0);\n  border: none;\n  width: 32px;\n  height: 32px;\n  border-radius: 100%;\n  transition: background-color 0.25s ease 0s;\n  padding: 0;\n}\n.controls button:not(:disabled):hover {\n  background: rgba(204, 204, 204, 0.3);\n}\n.controls button:active {\n  background: rgba(204, 204, 204, 0.6);\n}\n.controls .seek-bar {\n  flex: 1;\n  min-width: 0;\n  margin-right: 1rem;\n  background: transparent;\n}\n.controls .seek-bar::-moz-range-track {\n  background-color: #555;\n}\n.controls.playing .play-icon, .controls.stopped .stop-icon {\n  display: none;\n}\n.controls.frozen > div, .controls > button:disabled .icon {\n  opacity: 0.5;\n}",
      '\n</style>\n<div class="controls stopped frozen" part="control-panel">\n  <button class="play" part="play-button" disabled>\n    <img src="'
    )
    .concat(
      "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20version%3D%221.1%22%20viewBox%3D%220%200%206.35%206.35%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%3Cpath%20d%3D%22m4.4979%203.175-2.1167%201.5875v-3.175z%22%20stroke-width%3D%22.70201%22%2F%3E%3C%2Fsvg%3E",
      '" class="icon play-icon">\n    <img src="'
    )
    .concat(
      "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20version%3D%221.1%22%20viewBox%3D%220%200%206.35%206.35%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%3Cpath%20d%3D%22m1.5875%201.5875h3.175v3.175h-3.175z%22%20stroke-width%3D%22.75001%22%2F%3E%3C%2Fsvg%3E",
      '" class="icon stop-icon">\n  </button>\n  <div part="time"><span class="current-time" part="current-time">0:00</span> / <span class="total-time" part="total-time">0:00</span></div>\n  <input type="range" min="0" max="0" value="0" step="any" class="seek-bar" part="seek-bar" disabled>\n</div>\n'
    );
  var a = ["piano-roll", "waterfall", "staff"];
  class o extends HTMLElement {
    constructor() {
      super(...arguments),
        (this.domInitialized = !1),
        (this.ns = null),
        (this._config = {});
    }
    static get observedAttributes() {
      return ["src", "type"];
    }
    connectedCallback() {
      this.domInitialized ||
        ((this.domInitialized = !0),
        (this.wrapper = document.createElement("div")),
        this.appendChild(this.wrapper),
        this.initVisualizerNow());
    }
    attributeChangedCallback(t, e, i) {
      ("src" !== t && "type" !== t) || this.initVisualizer();
    }
    initVisualizer() {
      null == this.initTimeout &&
        (this.initTimeout = window.setTimeout(() => this.initVisualizerNow()));
    }
    initVisualizerNow() {
      var t = this;
      return n(function* () {
        if (
          ((t.initTimeout = null),
          t.domInitialized &&
            (t.src &&
              ((t.ns = null), (t.ns = yield e.urlToNoteSequence(t.src))),
            (t.wrapper.innerHTML = ""),
            t.ns))
        )
          if ("piano-roll" === t.type) {
            t.wrapper.classList.add("piano-roll-visualizer");
            var i = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "svg"
            );
            t.wrapper.appendChild(i),
              (t.visualizer = new e.PianoRollSVGVisualizer(t.ns, i, t._config));
          } else if ("waterfall" === t.type)
            t.wrapper.classList.add("waterfall-visualizer"),
              (t.visualizer = new e.WaterfallSVGVisualizer(
                t.ns,
                t.wrapper,
                t._config
              ));
          else if ("staff" === t.type) {
            t.wrapper.classList.add("staff-visualizer");
            var n = document.createElement("div");
            t.wrapper.appendChild(n),
              (t.visualizer = new e.StaffSVGVisualizer(t.ns, n, t._config));
          }
      })();
    }
    redraw(t) {
      this.visualizer && this.visualizer.redraw(t, null != t);
    }
    clearActiveNotes() {
      this.visualizer && this.visualizer.clearActiveNotes();
    }
    get noteSequence() {
      return this.ns;
    }
    set noteSequence(t) {
      (this.ns = t), this.removeAttribute("src"), this.initVisualizer();
    }
    get src() {
      return this.getAttribute("src");
    }
    set src(t) {
      (this.ns = null),
        this.setOrRemoveAttribute("src", t),
        this.initVisualizer();
    }
    get type() {
      var t = this.getAttribute("type");
      return a.indexOf(t) < 0 && (t = "piano-roll"), t;
    }
    set type(t) {
      if (null != t && a.indexOf(t) < 0)
        throw new Error(
          "Unknown visualizer type "
            .concat(t, ". Allowed values: ")
            .concat(a.join(", "))
        );
      this.setOrRemoveAttribute("type", t);
    }
    get config() {
      return this._config;
    }
    set config(t) {
      (this._config = t), this.initVisualizer();
    }
    setOrRemoveAttribute(t, e) {
      null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
    }
  }
  var l = ["start", "stop", "note"],
    u = null;
  class c extends HTMLElement {
    constructor() {
      super(),
        (this.domInitialized = !1),
        (this.needInitNs = !1),
        (this.visualizerListeners = new Map()),
        (this.ns = null),
        (this._playing = !1),
        this.attachShadow({ mode: "open" }),
        this.shadowRoot.appendChild(s.content.cloneNode(!0)),
        (this.controlPanel = this.shadowRoot.querySelector(".controls")),
        (this.playButton = this.controlPanel.querySelector(".play")),
        (this.currentTimeLabel = this.controlPanel.querySelector(
          ".current-time"
        )),
        (this.totalTimeLabel = this.controlPanel.querySelector(".total-time")),
        (this.seekBar = this.controlPanel.querySelector(".seek-bar"));
    }
    static get observedAttributes() {
      return ["sound-font", "src", "visualizer"];
    }
    connectedCallback() {
      if (!this.domInitialized) {
        this.domInitialized = !0;
        var t = window.applyFocusVisiblePolyfill;
        null != t && t(this.shadowRoot),
          this.playButton.addEventListener("click", () => {
            this.player.isPlaying() ? this.stop() : this.start();
          }),
          this.seekBar.addEventListener("input", () => {
            this.player &&
              "started" === this.player.getPlayState() &&
              this.player.pause();
          }),
          this.seekBar.addEventListener("change", () => {
            var t = this.currentTime;
            (this.currentTimeLabel.textContent = r(t)),
              this.player &&
                this.player.isPlaying() &&
                (this.player.seekTo(t),
                "paused" === this.player.getPlayState() &&
                  this.player.resume());
          }),
          this.initPlayerNow();
      }
    }
    attributeChangedCallback(t, e, i) {
      if (
        (this.hasAttribute(t) || (i = null), "sound-font" === t || "src" === t)
      )
        this.initPlayer();
      else if ("visualizer" === t) {
        var n = () => {
          this.setVisualizerSelector(i);
        };
        "loading" === document.readyState
          ? window.addEventListener("DOMContentLoaded", n)
          : n();
      }
    }
    initPlayer(t = !0) {
      (this.needInitNs = this.needInitNs || t),
        null == this.initTimeout &&
          (this.stop(),
          this.freeze(),
          (this.initTimeout = window.setTimeout(() =>
            this.initPlayerNow(this.needInitNs)
          )));
    }
    initPlayerNow(t = !0) {
      var i = this;
      return n(function* () {
        if (((i.initTimeout = null), (i.needInitNs = !1), i.domInitialized)) {
          var n;
          if (
            (t &&
              (i.src &&
                ((i.ns = null), (i.ns = yield e.urlToNoteSequence(i.src))),
              (i.currentTime = 0)),
            !(n = i.ns))
          )
            return (
              (i.seekBar.max = "0"), void (i.totalTimeLabel.textContent = r(0))
            );
          (i.seekBar.max = String(n.totalTime)),
            (i.totalTimeLabel.textContent = r(n.totalTime));
          var s = i.soundFont,
            a = { run: (t) => i.ns === n && i.noteCallback(t), stop: () => {} };
          null === s
            ? (i.player = new e.Player(!1, a))
            : ("" === s &&
                (s =
                  "https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus"),
              (i.player = new e.SoundFontPlayer(s, void 0, void 0, void 0, a)),
              yield i.player.loadSamples(n)),
            i.ns === n &&
              (i.unfreeze(), i.dispatchEvent(new CustomEvent("load")));
        }
      })();
    }
    start() {
      var t = this;
      n(function* () {
        if (t.player)
          if ("stopped" == t.player.getPlayState()) {
            u && u.playing && u.stop(),
              (u = t),
              (t._playing = !0),
              t.controlPanel.classList.remove("stopped"),
              t.controlPanel.classList.add("playing");
            try {
              var e = t.player.start(t.ns);
              t.dispatchEvent(new CustomEvent("start")),
                yield e,
                t.handleStop(!0);
            } catch (e) {
              throw (t.handleStop(), e);
            }
          } else "paused" == t.player.getPlayState() && t.player.resume();
      })();
    }
    stop() {
      this.player && this.player.isPlaying() && this.player.stop(),
        this.handleStop(!1);
    }
    addVisualizer(t) {
      var e = {
        start: () => {
          t.noteSequence = this.noteSequence;
        },
        stop: () => {
          t.clearActiveNotes();
        },
        note: (e) => {
          t.redraw(e.detail.note);
        },
      };
      for (var i of l) this.addEventListener(i, e[i]);
      this.visualizerListeners.set(t, e);
    }
    removeVisualizer(t) {
      var e = this.visualizerListeners.get(t);
      for (var i of l) this.removeEventListener(i, e[i]);
      this.visualizerListeners.delete(t);
    }
    noteCallback(t) {
      this.playing &&
        (this.dispatchEvent(new CustomEvent("note", { detail: { note: t } })),
        (this.seekBar.value = String(t.startTime)),
        (this.currentTimeLabel.textContent = r(t.startTime)));
    }
    handleStop(t = !1) {
      t && (this.currentTime = this.duration),
        this.controlPanel.classList.remove("playing"),
        this.controlPanel.classList.add("stopped"),
        this._playing &&
          ((this._playing = !1),
          this.dispatchEvent(
            new CustomEvent("stop", { detail: { finished: t } })
          ));
    }
    setVisualizerSelector(t) {
      for (var e of this.visualizerListeners.values())
        for (var i of l) this.removeEventListener(i, e[i]);
      if ((this.visualizerListeners.clear(), null != t))
        for (var n of document.querySelectorAll(t))
          n instanceof o
            ? this.addVisualizer(n)
            : console.warn(
                "Selector ".concat(t, " matched non-visualizer element"),
                n
              );
    }
    freeze() {
      (this.playButton.disabled = !0),
        (this.seekBar.disabled = !0),
        this.controlPanel.classList.add("frozen");
    }
    unfreeze() {
      this.controlPanel.classList.remove("frozen"),
        (this.playButton.disabled = !1),
        (this.seekBar.disabled = !1);
    }
    get noteSequence() {
      return this.ns;
    }
    set noteSequence(t) {
      (this.ns = t), this.removeAttribute("src"), this.initPlayer();
    }
    get src() {
      return this.getAttribute("src");
    }
    set src(t) {
      (this.ns = null), this.setOrRemoveAttribute("src", t), this.initPlayer();
    }
    get soundFont() {
      return this.getAttribute("sound-font");
    }
    set soundFont(t) {
      this.setOrRemoveAttribute("sound-font", t);
    }
    get currentTime() {
      return parseFloat(this.seekBar.value);
    }
    set currentTime(t) {
      (this.seekBar.value = String(t)),
        (this.currentTimeLabel.textContent = r(this.currentTime)),
        this.player && this.player.isPlaying() && this.player.seekTo(t);
    }
    get duration() {
      return parseFloat(this.seekBar.max);
    }
    get playing() {
      return this._playing;
    }
    setOrRemoveAttribute(t, e) {
      null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
    }
  }
  window.customElements.define("midi-player", c),
    window.customElements.define("midi-visualizer", o),
    (t.PlayerElement = c),
    (t.VisualizerElement = o),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=/sm/e290dc56381b53871e69c5c7855274476fcb4e1690ab51cac1e19f831b9bd22d.map
