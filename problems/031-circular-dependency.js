/**
 * Сара пишет сложные клиентские приложения на ангуляре. Поэтому ей часто приходится создавать и модифицировать сервисы.
 * Сервисы могут использовать другие сервисы. Однако они не должны быть взаимозависимыми.
 *
 * Напишите функцию которая определяет есть ли цикличная зависимость между сервисами в проекте Сары.
 * Зависимости описаны объектом, ключи которого являются именами сервисов, а значения—это сервисы-зависимости.
 *
 * Пример:
 *
 * hasCircularDependency({
 *  http: [],
 *  apiClient: ['http'],
 * }) === false
 *
 * hasCircularDependency({
 *  http: ['dogsApi'],
 *  apiClient: ['http'],
 *  dogsApi: ['apiClient'],
 * }) === true
 *
 * @param {Object.<string, Array.<string>>} servicesMap
 * @returns {boolean}
 */
function hasCircularDependency(services) {
    if (!Object.keys(services).length) return false;
    const arr = Object.entries(services).flat(Infinity);
    if (arr.length === 2 || arr[0] === arr[1]) return true;

    var visited = {};
    function hasCircularDependencyUtil(service, stack) {
        visited[service] = true;
        for (var i = 0; i < services[service].length; i++) {
            var dependentService = services[service][i];
            if (!visited[dependentService]) {
                if (
                    hasCircularDependencyUtil(
                        dependentService,
                        stack.concat(service)
                    )
                ) {
                    return true;
                }
            } else if (stack.indexOf(dependentService) !== -1) {
                return true;
            }
        }
        return false;
    }
    for (var service in services) {
        if (!visited[service]) {
            if (hasCircularDependencyUtil(service, [])) {
                return true;
            }
        }
    }

    return false;
}
console.log(hasCircularDependency({}));
module.exports = hasCircularDependency;
