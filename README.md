# Gettools

This package includes an functions manager from data json in object and array from getting data, avoiding them null results or undefined

## Installation

npm install -g gettools

## Example getData

```
import { getData } from 'gettools'

const data = {
  _id: '1',
  name: 'Cesar'
}

const name = getData(data, 'name', '');
// Cesar

const name = getData(data, 'lastname', 'Not lastname');
// Not lastname

```

## Example getRow

```
import { getRow } from 'gettools'

const data = [
  {_id: '1', name: 'Cesar'},
  {_id: '2', name: 'Lucas'}
]

const name = getRow(data, 0, 'name', '');
// Cesar

const name = getRow(data, 0, 'lastname', 'Not lastname');
// Not lastname

```
