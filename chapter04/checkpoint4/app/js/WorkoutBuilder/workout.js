'use strict';

angular.module('WorkoutBuilder')
  .controller('WorkoutListController', ['$scope', 'WorkoutService', '$location', function ($scope, WorkoutService, $location) {
      $scope.goto = function (workout) {
          $location.path('/builder/workouts/' + workout.name);
      }
      var init = function () {
          $scope.workouts = WorkoutService.getWorkouts();
      };
      init();
  }]);

angular.module('WorkoutBuilder')
  .controller('WorkoutDetailController', ['$scope', 'WorkoutBuilderService', 'selectedWorkout', '$location', function ($scope, WorkoutBuilderService, selectedWorkout, $location) {
      $scope.removeExercise = function (exercise) {
          WorkoutBuilderService.removeExercise(exercise);
      };

      //var restWatch = $scope.$watch('formWorkout.restBetweenExercise', function (newValue) {
      //    // Conversion logic courtesy http://stackoverflow.com/questions/596467/how-do-i-convert-a-number-to-an-integer-in-javascript
      //    if (newValue) {
      //        newValue.$parsers.unshift(function (value) {
      //            return isNaN(parseInt(value)) ? value : parseInt(value);
      //        });
      //        newValue.$formatters.push(function (value) {
      //            return isNaN(parseInt(value)) ? value : parseInt(value);
      //        });
      //        restWatch(); //De-register the watch.
      //    }
      //});

      $scope.moveExerciseTo = function (exercise, location) {
          WorkoutBuilderService.moveExerciseTo(exercise, location);
      };

      $scope.durations = [{ title: "15 seconds", value: 15 },
                         { title: "30 seconds", value: 30 },
                         { title: "45 seconds", value: 45 },
                         { title: "1 minute", value: 60 },
                         { title: "1 minute 15 seconds", value: 75 },
                         { title: "1 minute 30 seconds", value: 90 },
                         { title: "1 minute 45 seconds", value: 105 },
                         { title: "2 minutes", value: 120 },
                         { title: "2 minutes 15 seconds", value: 135 },
                         { title: "2 minutes 30 seconds", value: 150 },
                         { title: "2 minutes 45 seconds", value: 165 },
                         { title: "3 minutes", value: 180 },
                         { title: "3 minutes 15 seconds", value: 195 },
                         { title: "3 minutes 30 seconds", value: 210 },
                         { title: "3 minutes 45 seconds", value: 225 },
                         { title: "4 minutes", value: 240 },
                         { title: "4 minutes 15 seconds", value: 255 },
                         { title: "4 minutes 30 seconds", value: 270 },
                         { title: "4 minutes 45 seconds", value: 285 },
                         { title: "5 minutes", value: 300 }];

      var init = function () {
          $scope.workout = selectedWorkout;
      };
      init();
  }]);