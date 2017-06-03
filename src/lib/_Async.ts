/* -----------------------------------------------------
* 4. Process order (codes in the same 'async' function are processed in an ordered manner)
*    But if you are calling another function w/o 'await' it looses the context when there is an 'await'
*/

// public callmeFromOutside(): void {
//     console.log('AA');
//     this.doJobAsync();
//     console.log('BB');
// }

// OUTPUT:
// AA
// [After 0s] Knock, knock!
// BB
// [After 1s] Who's there?
// [After 2s] async/await!


// private async doJobAsync(): Promise<void> {
//     console.log("Knock, knock!");

//     await this.delay(1000);
//     console.log("Who's there?");

//     await this.delay(1000);
//     console.log("async/await!");
// }

// private delay(ms: number): Promise<void> {
//     return new Promise<void>((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }


/* -----------------------------------------------------
* 1. Function
*/
interface IGetBooksCallback {
    (error: Error, books: string[]): void;
}

function getBooksAsync(criteria: string, callback: IGetBooksCallback): void {
    setTimeout(() => {
        try {
            const books: string[] = [];   // Access the data

            if (books.length === 0) {
                throw new Error('No results found.');
            }

            callback(null, books);
        } catch (error) {
            callback(error, null);
        }
    }, 2000);
}

getBooksAsync('fiction books', (error: Error, data: string[]) => {
    if (error) {
        console.error(error);
    } else {
        console.table(data);
    }
});

/* -----------------------------------------------------
* 2. Promise
*/

function getBooksAsync2(criteria: string): Promise<string[]> {
    const promise: Promise<string[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            const books: string[] = [];   // Access the data

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
async function getBooksAsync3(criteria: string): Promise<void> {
    const books = await getBooksAsync2(criteria);
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
