const item = [
  {
    name: 'spoon',
    details: {
      value: 4120,
    },
  },
  {
    name: 'fork',
    details: {
      value: 4200,
    },
  },
  {
    name: 'plate',
    details: {
      value: 2032,
    },
  },
]

function result(item) {
  return item.reduce(
    (acc, i) => (acc = acc > i.details.value ? acc : i.details.value),
    0
  )
}

console.log(result(item))
