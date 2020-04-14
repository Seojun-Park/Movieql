export const people =[
    {
        id: 1,
        name: "Jin",
        age: 29,
        gender: "Male"
    },
    {
        id: 2,
        name: "rt",
        age: 11,
        gender: "Female"
    },
    {
        id: 3,
        name: "park",
        age: 21,
        gender: "Male"
    }
]

export const getById = id => {
    const filtered = people.filter(person => person.id === id);
    return filtered[0];
}