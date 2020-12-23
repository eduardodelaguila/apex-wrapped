import React, { useEffect } from 'react';
import ApexChart$1 from 'apexcharts';

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
  useEffect(function () {
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
  return React.createElement("div", {
    id: "apexLine"
  });
};

var ApexChart = function ApexChart(props) {
  useEffect(function () {
    var chart = new ApexChart$1(document.querySelector('#apexGeneral'), _extends({}, props, lineDefaults));
    chart.render();
  }, [props]);
  return React.createElement("div", {
    id: "apexGeneral"
  });
};

export { ApexChart, ApexLine };
//# sourceMappingURL=apex-wrapped.esm.js.map
