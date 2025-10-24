const API_URL = 'https://fakestoreapi.com/products';

async function handleFetch(res) {
    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Error en la petición: ${res.status} - ${errorText}`);
    }
    return res.json();
}

export async function getAllProducts() {
    try {
        const res = await fetch(API_URL);
        const data = await handleFetch(res);
        console.log('Lista de productos:', data);
        return data;
    } catch (err) {
        console.error('Error al obtener productos:', err.message);
        return null;
    }
}

export async function getProductById(id) {
    try {
        if (!id || isNaN(id)) throw new Error(' inválido');
        const res = await fetch(`${API_URL}/${id}`);
        const data = await handleFetch(res);
        console.log('Producto:', data);
        return data;
    } catch (err) {
        console.error('Error al obtener producto:', err.message);
        return null;
    }
}

export async function createProduct(title, price, category) {
    try {
        if (!title || !category || isNaN(price)) throw new Error('Datos inválidos');
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title,
                price: Number(price),
                category
            })
        });
        const data = await handleFetch(res);
        console.log('Producto creado:', data);
        return data;
    } catch (err) {
        console.error('Error al crear producto:', err.message);
        return null;
    }
}

export async function deleteProduct(id) {
    try {
        if (!id || isNaN(id)) throw new Error('ID inválido');
        const res = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        const data = await handleFetch(res);
        console.log('Producto eliminado:', data);
        return data;
    } catch (err) {
        console.error('Error al eliminar producto:', err.message);
        return null;
    }
}
