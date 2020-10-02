# ridxd

> A tiny (143 bytes) function for reverse indexing a map into an array of objects with that index included.

## Install

```
$ yarn add ridxd
```

## Usage

```js
import ridxd from 'ridxd';

const data = {
  'thing 1': {
    id: '001',
    member: 'Who',
  },
  'thing 2': {
    id: '002',
    member: 'Why',
  },
  'Cat in the Hat': {
    id: '003',
    member: 'How',
  }
};

const dataArray = ridxd(data, 'character');
/* =>
[
  { id: '001', member: 'Who', character: 'thing 1' },
  { id: '002', member: 'Why', character: 'thing 2' },
  { id: '003', member: 'How', character: 'Cat in the Hat' },
]
*/
```

## API

### `ridxd(map, key)`

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `map` | `{ [key: string]: <Record<any, any>> }` | `true` | An indexed map of objects to reverse index into an array. |
| `key` | `string` | `true` | The name of the field you wish the index to take on in each object. |

### Inspiration

This packages was inspired by [idxd](https://github.com/Renddslow/idxd) and the need for the reverse operation of it. 