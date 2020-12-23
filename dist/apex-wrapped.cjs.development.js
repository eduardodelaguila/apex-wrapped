'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var ApexChart$1 = _interopDefault(require('apexcharts'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var lineDefaults = {
  colors: ['#343334', '#e7e1df', '#2dc9be', '#aba228', '#696e6e']
};

var ApexLine = function ApexLine(props) {
  var series = props.series,
      categories = props.categories;
  console.log(Object.getPrototypeOf(categories[0]));
  React.useEffect(function () {
    var chart = new ApexChart$1(document.querySelector('#apexLine'), _extends({}, lineDefaults, {
      series: series,
      chart: {
        type: 'line'
      },
      xaxis: {
        categories: categories
      }
    }));
    chart.render();
  }, [props]);
  return React__default.createElement("div", {
    id: "apexLine"
  });
};

var ApexChart = function ApexChart(props) {
  React.useEffect(function () {
    var chart = new ApexChart$1(document.querySelector('#apexGeneral'), _extends({}, props, lineDefaults));
    chart.render();
  }, [props]);
  return React__default.createElement("div", {
    id: "apexGeneral"
  });
};

exports.ApexChart = ApexChart;
exports.ApexLine = ApexLine;
//# sourceMappingURL=apex-wrapped.cjs.development.js.map
