type MyReadonly2<T extends object, K extends string> = Readonly<{
    [P in Extract<keyof T, K>]: T[P];
}> & {[P in Exclude<keyof T, K>]: T[P];}


// type Todo ={
//     title: string
//     description: string
//     completed: boolean
//   }
//
//
//   const todo: MyReadonly2<Todo, 'title' | 'description'> = {
//     title: "Hey",
//     description: "foobar",
//     completed: false,
//   }
//
//
//   todo.title = "Hello" // Error: cannot reassign a readonly property
//   todo.description = "barFoo" // Error: cannot reassign a readonly property
//   todo.completed = true // OK
//

