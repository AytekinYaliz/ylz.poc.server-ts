/// <reference types='jest' />

import {IGetCustomersInput} from '../../src/models/Customer';

const Customer1 = {'name': 'aytekin'};

describe('Clients', function() {
    it('should return [] when the response data is []', () => {
        let response = [],
            clients = [];

        expect(clients.length).toBe(0);
    });
});
