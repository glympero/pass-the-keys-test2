Array.prototype.insert = insert;

interface Array<T> {
  insert: typeof insert;
}

function insert( index, item ) {
  this.splice( index, 1, item );
};
