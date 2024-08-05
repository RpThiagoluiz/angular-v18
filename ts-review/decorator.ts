function MenuItem(itemID: string) {
  //Same with return below
  // return function (value) {
  //   return class extends value {
  //     id = itemID
  //   }
  // }

  return (target: Function) => {
    target.prototype.id = itemID;
  }
} 

@MenuItem('abc')
class Pizza {
  id: string;
}

@MenuItem('xyz')
class Hamburger {
  id: string;
}

console.log({
  pizza: new Pizza().id,
  hamburger: new Hamburger().id,
});