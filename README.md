# ridxd

> A tiny (143 bytes) function for reverse indexing a map into an array of objects with that index included.

## Install

```
$ yarn add ridxd
```

## Usage

```js
import ridxd from 'ridxd';

const users = {
  'Chrysostom': {
    id: '001',
    firstName: 'John',
  },
  'the Great': {
    id: '002',
    firstName: 'Basil',
    lastName: 'the Great',
  },
  'of Nyssa': {
    id: '003',
    firstName: 'Gregory',
  },
  'the Syrian': {
    id: '004',
    firstName: 'Ephrem',
  }
};

const usersByLastName = ridxd(users, 'lastName');
/* =>
[
  { id: '001', firstName: 'John', lastName: 'Chrysostom' },
  { id: '002', firstName: 'Basil', lastName: 'the Great' },
  { id: '003', firstName: 'Gregory', lastName: 'of Nyssa' },
  { id: '004', firstName: 'Ephrem', lastName: 'the Syrian' },
]
*/
```

## API

### `ridxd(map, key)`

#### `map`

Type: `{ [key: string]: <Record<any, any>> }`

Required: ✅

An indexed map of objects to reverse index into an array.

#### `key`

Type: `string`

Required: ✅

The name of the field you wish the index to take on in each object.
