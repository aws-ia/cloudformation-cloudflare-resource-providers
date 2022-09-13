import {CaseTransformer, Transformer, transformObjectCase} from "./util";

describe('Util', () => {
    describe('Transformer class', () => {
        it.each([
            [{
                Foo: 'foo',
                baR: 123,
                HelloWorld: 'Hi'
            }, {
                foo: 'foo',
                ba_r: 123,
                hello_world: 'Hi'
            }],
            [{
                HelloWorld: {
                    Foo: 'foo',
                    baR: 123,
                    HelloWorld: 'Hi'
                }
            }, {
                hello_world: {
                    foo: 'foo',
                    ba_r: 123,
                    hello_world: 'Hi'
                }
            }],
            [{
                HelloWorld: [
                    'foo',
                    ['hello', 'world'],
                    {
                        foo: 'foo',
                        baR: 123,
                        helloWorld: 'Hi'
                    }
                ]
            }, {
                hello_world: [
                    'foo',
                    ['hello', 'world'],
                    {
                        foo: 'foo',
                        ba_r: 123,
                        hello_world: 'Hi'
                    }
                ]
            }]
        ])('converts payload keys from PascalCase to snake_case', (input, expected) => {
            expect(Transformer.for(input)
                .transformKeys(CaseTransformer.PASCAL_TO_SNAKE)
                .transform()
            ).toStrictEqual(expected);
        });

        it.each([
            [{
                Foo: 'foo',
                baR: 123,
                HelloWorld: 'Hi'
            }, {
                foo: 'foo',
                baR: 123,
                helloWorld: 'Hi'
            }],
            [{
                HelloWorld: {
                    Foo: 'foo',
                    baR: 123,
                    HelloWorld: 'Hi'
                }
            }, {
                helloWorld: {
                    foo: 'foo',
                    baR: 123,
                    helloWorld: 'Hi'
                }
            }],
            [{
                HelloWorld: [
                    'foo',
                    ['hello', 'world'],
                    {
                        foo: 'foo',
                        baR: 123,
                        helloWorld: 'Hi'
                    }
                ]
            }, {
                helloWorld: [
                    'foo',
                    ['hello', 'world'],
                    {
                        foo: 'foo',
                        baR: 123,
                        helloWorld: 'Hi'
                    }
                ]
            }]
        ])('converts payload keys from PascalCase to camelCase', (input, expected) => {
            expect(Transformer.for(input)
                .transformKeys(CaseTransformer.PASCAL_TO_CAMEL)
                .transform()
            ).toStrictEqual(expected);
        });

        it.each([
            [{
                foo: 'foo',
                ba_r: 123,
                hello_world: 'Hi'
            }, {
                foo: 'foo',
                baR: 123,
                helloWorld: 'Hi'
            }],
            [{
                hello_world: {
                    foo: 'foo',
                    ba_r: 123,
                    hello_world: 'Hi'
                }
            }, {
                helloWorld: {
                    foo: 'foo',
                    baR: 123,
                    helloWorld: 'Hi'
                }
            }],
            [{
                hello_world: [
                    'foo',
                    ['hello', 'world'],
                    {
                        foo: 'foo',
                        ba_r: 123,
                        hello_world: 'Hi'
                    }
                ]
            }, {
                helloWorld: [
                    'foo',
                    ['hello', 'world'],
                    {
                        foo: 'foo',
                        baR: 123,
                        helloWorld: 'Hi'
                    }
                ]
            }]
        ])('converts payload keys from snake_case to PascalCase', (input, expected) => {
            expect(Transformer.for(input)
                .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
                .transform()
            ).toStrictEqual(expected);
        });

        it.each([
            [{
                foo: 'foo',
                ba_r: 123,
                type: 'Hi'
            }, {
                foo: 'foo',
                baR: 123,
                type_: 'Hi'
            }],
            [{
                hello_world: {
                    foo: 'foo',
                    ba_r: 123,
                    type: 'Hi'
                }
            }, {
                helloWorld: {
                    foo: 'foo',
                    baR: 123,
                    type_: 'Hi'
                }
            }],
            [{
                hello_world: [
                    'foo',
                    ['hello', 'world'],
                    {
                        foo: 'foo',
                        ba_r: 123,
                        type: 'Hi'
                    }
                ]
            }, {
                helloWorld: [
                    'foo',
                    ['hello', 'world'],
                    {
                        foo: 'foo',
                        baR: 123,
                        type_: 'Hi'
                    }
                ]
            }]
        ])('converts payload keys in a safe manner if keys are reserved keywords', (input, expected) => {
            expect(Transformer.for(input)
                .transformKeys(CaseTransformer.SNAKE_TO_CAMEL)
                .forModelIngestion()
                .transform()
            ).toStrictEqual(expected);
        });
    });
});