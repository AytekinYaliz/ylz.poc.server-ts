/* -----------------------------------------------------
* 4. Process order (codes in the same 'async' function are processed in an ordered manner)
*    But if you are calling another function w/o 'await' it looses the context when there is an 'await'
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getBooksAsync(criteria, callback) {
    setTimeout(() => {
        try {
            const books = []; // Access the data
            if (books.length === 0) {
                throw new Error('No results found.');
            }
            callback(null, books);
        }
        catch (error) {
            callback(error, null);
        }
    }, 2000);
}
getBooksAsync('fiction books', (error, data) => {
    if (error) {
        console.error(error);
    }
    else {
        console.table(data);
    }
});
/* -----------------------------------------------------
* 2. Promise
*/
function getBooksAsync2(criteria) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const books = []; // Access the data
            if (books.length === 0) {
                reject('No results found.');
            }
            resolve(books);
        }, 2000);
    });
    return promise;
}
getBooksAsync2('fiction books')
    .then(data => console.table(data))
    .catch(error => console.error(error));
getBooksAsync2('horror books')
    .then(data => {
    return data.length;
})
    .then(numOfBooks => console.log(numOfBooks))
    .catch(error => console.error(error));
/* -----------------------------------------------------
* 3. async/await (you can await Promise)
*/
function getBooksAsync3(criteria) {
    return __awaiter(this, void 0, void 0, function* () {
        const books = yield getBooksAsync2(criteria);
    });
}
getBooksAsync3('comedy books')
    .catch(error => console.error(error));
// import * as request from 'request';
// public async getConfig(name: ConfigKeysEnum): Promise<string> {
//     if (!this.config) {
//         await this.loadConfig();
//     }
//
//     return this.config[Utilities.getEnumString(ConfigKeysEnum, name)];
// }
// private async loadConfig(): Promise<void> {
//     if (process.env.NODE_ENV === Utilities.getEnumString(DeploymentTypesEnum, DeploymentTypesEnum.local)) {
//         this.config = {
//             'port': '4001'
//         };
//         return;
//     } else if (process.env.NODE_ENV === Utilities.getEnumString(DeploymentTypesEnum, DeploymentTypesEnum.test)) {
//         this.config = {
//             'port': '3002'
//         };
//         return;
//     }
//
//     this.config = await this.getConfigPromise();
// }
// private getConfigPromise(): Promise<{}> {
//     return new Promise((resolve, reject) => {
//         request.get(`http://hkl102077.hk.hsbc:8888/ui_server-dev.json`, (error, response, body) => {
//             resolve(JSON.parse(body));
//         });
//     });
// }
//# sourceMappingURL=_Async.js.map