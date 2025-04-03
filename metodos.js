// metodos en arreglos

//filter

const routers = [
    { nombre: 'CISCO 1804', interfaz:'RJ45', clockrate: 2000000, tipo: 'router' },
    { nombre: 'CISCO 2804', interfaz:'WIN', clockrate: 5000000, tipo: 'router' },
    { nombre: 'CISCO 3235', interfaz:'RJ45', clockrate: 1000000, tipo: 'router' },
    { nombre: 'CISCO 3500', interfaz:'WAN', clockrate: 2000000, tipo: 'router' },
]

console.log(routers)

const routersClockrate = routers.filter((router) => {
    return router.clockrate > 1000000
    }
)
console.log(routersClockrate)

//find
const router = routers.find((router) => {
    return router.nombre === 'CISCO 1804'
})
console.log(router)

//reduce
const sumaClockrate = routers.reduce((acc, router) => {
    return acc + router.clockrate
}, 0)
console.log(sumaClockrate)
