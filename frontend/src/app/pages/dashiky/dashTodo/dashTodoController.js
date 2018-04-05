/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashiky')
      .controller('dashTodoController', dashTodoController);

  /** @ngInject */
  function dashTodoController($scope, baConfig) {

    $scope.transparent = baConfig.theme.blur;
    var dashboardColors = baConfig.colors.dashboard;
    var colors = [];
    for (var key in dashboardColors) {
      colors.push(dashboardColors[key]);
    }

    function getRandomColor() {
      var i = Math.floor(Math.random() * (colors.length - 1));
      return colors[i];
    }

    $scope.todoList = [
      { text: 'Convert definitions in Trello boards' },
      { text: 'Manage multiples api keys' },
      { text: 'Create module Klout with Cloud 3d Tag' },
      { text: 'Cloud 3d Tag directive for profile' },
      { text: 'Modify module Keybase' },
      { text: 'Create module Twitter' },
      { text: 'Try to get calendar from github' },
      { text: 'Maps module and submodule' },
      { text: 'Maps module running and submodule running' },
      { text: 'Smart Profile' },
      { text: 'Contributors in dash, from based software and github contributions' },
      { text: 'Documentation for contributions' },
      { text: 'Normalize everything, python and angularjs' },
      { text: 'Fix : When resize the windows the logo doenst resize' },
    ];

    $scope.todoList.forEach(function(item) {
      item.color = getRandomColor();
    });

    $scope.newTodoText = '';

    $scope.addToDoItem = function (event, clickPlus) {
      if (clickPlus || event.which === 13) {
        $scope.todoList.unshift({
          text: $scope.newTodoText,
          color: getRandomColor(),
        });
        $scope.newTodoText = '';
      }
    };
  }
})();
