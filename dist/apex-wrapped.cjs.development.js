'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var ApexChart = _interopDefault(require('apexcharts'));
var dayjs = _interopDefault(require('dayjs'));

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

var formatDate = function formatDate(date, dateFormat) {
  var format = dateFormat ? dateFormat : 'MM/DD/YYYY';
  return dayjs(new Date(date)).format(format);
};

var Line = function Line(props) {
  var series = props.series,
      categories = props.categories,
      dateFormat = props.dateFormat;
  console.log(Object.getPrototypeOf(categories[0]));
  React.useEffect(function () {
    var chart = new ApexChart(document.querySelector('#chartLine'), _extends({}, lineDefaults, {
      series: series,
      chart: {
        type: 'line'
      },
      xaxis: {
        categories: categories,
        labels: {
          formatter: function formatter(value) {
            if (value instanceof Date) {
              console.log(formatDate(value, dateFormat));
              return formatDate(value, dateFormat);
            }

            return value;
          }
        }
      }
    }));
    chart.render();
  }, [props]);
  return React__default.createElement("div", {
    id: "chartLine"
  });
};

var Chart = function Chart(props) {
  React.useEffect(function () {
    var chart = new ApexChart(document.querySelector('#chartGeneral'), _extends({}, props, lineDefaults));
    chart.render();
  }, [props]);
  return React__default.createElement("div", {
    id: "chartGeneral"
  });
};

exports.Chart = Chart;
exports.Line = Line;
//# sourceMappingURL=apex-wrapped.cjs.development.js.map
