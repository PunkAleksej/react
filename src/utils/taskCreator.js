
let id = 1;
export const createTodoTask = (text) => {
  return {
    key: Math.floor(Math.random() * (1000000 - 1) + 1),
    text,
    id: id++,
    active: true
  }
}