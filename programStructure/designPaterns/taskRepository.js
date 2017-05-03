var repo = function () {

    var db = {};

    var get = function (id) {
        console.log('Getting task ' + id);
        return {
            name: 'new task'
        }
    }

    var save = function (task) {
        console.log('Saving tast ' + task);
    }

    return {
        get: get,
        save: save
    }
}

module.exports = repo();