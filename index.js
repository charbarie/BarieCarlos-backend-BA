import { getAllProducts, getProductById, createProduct, deleteProduct } from './src/products.js';

const [, , method, resource, ...args] = process.argv;

if (resource !== 'products') {
    console.log(' no válido');
    process.exit(1);
}

switch (method) {
    case 'GET':
        if (args[0]) await getProductById(args[0]);
        else await getAllProducts();
        break;

    case 'POST':
        const [title, price, category] = args;
        if (!title || !price || !category) {
            console.log('Faltan parámetros');
            process.exit(1);
        }
        await createProduct(title, price, category);
        break;

    case 'DELETE':
        const id = args[0]?.split('/')[1];
        if (!id) {
            console.log('Falta el ID del producto a eliminar');
            process.exit(1);
        }
        await deleteProduct(id);
        break;

    default:
        console.log('Método no reconocido. Usar GET, POST o DELETE.');
}
