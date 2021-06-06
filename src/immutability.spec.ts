const chris = {
    name: 'Chris',
    age: 21,
    address: {
        street: 'Queen',
        country: {
            name: 'New Zeland',
            capital: 'Auckland',
        },
    },
    favourites: {
        food: [
            {
                name: 'mango',
                type: 'fruit',
            }, 
            {
                name: 'raman',
                type: 'noodle',
            }, 
            {
                name: 'sushi',
                type: 'rice snack',
            }
        ]
    },
};

// watch out for type inference
type Person = typeof chris;

type FaveFood = typeof chris.favourites.food[0];

describe('Immutability quiz!', () => {
    it('birthday', () => {
        const chrisOlder: Person = {
            ...chris, 
            age: chris.age + 1
        };

        // value must change
        expect(chrisOlder.age).not.toEqual(chris.age);

        // reference must also change
        expect(chrisOlder !== chris).toEqual(true);
    });

    it('Capital must be corrected', () => {
        const withCorrectCapital: Person = {
            ...chris,
            address: {
                ...chris.address,
                country: {
                    ...chris.address.country,
                    capital: 'Wellington'
                }
            }
        };

        // value must change
        expect(withCorrectCapital.address.country.capital).not.toEqual('Auckland');

        // reference also change
        expect(withCorrectCapital !== chris).toEqual(true);
    });

    it('Swap sushi for bao bun', () => {
        const baoBun: FaveFood = { name: 'bao bun', type: 'yum' };
        const expectedFavourites: FaveFood[] = [
            {
                name: 'mango',
                type: 'fruit',
            }, 
            {
                name: 'raman',
                type: 'noodle',
            }, 
            {
                name: 'bao bun',
                type: 'yum',
            }
        ];

        const newFavouriteFoods: Person = {
            ...chris,
            favourites: {
                ...chris.favourites,
                food: [...chris.favourites.food.filter(f => f.name !== 'sushi'), baoBun]
            }
        };

        // value must change
        expect(newFavouriteFoods.favourites.food).toEqual(expectedFavourites);

        // reference also change
        expect(newFavouriteFoods !== chris).toEqual(true);
    });    
});

export {};