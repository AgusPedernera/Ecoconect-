db = db.getSiblingDB('EcoConecta');

// db.EcoCompra.insertMany([
//     {
//         nombre: 'Feria Las Heras',
//         categoria: 'feria',
//         instagram: 'https://www.instagram.com/paseo_lasheras/',
//         direccion: 'Avenida Costanera Mestre, entre el puente Centenario y el puente Alvear',
//         telefono: '-',
//         pagina_web: '-',
//         comentarios: 'Feria Americana con puestos que venden productos de segunda mano de todo tipo, ropa, accesorios, juguetes, bazar, repuestos, etc.'
//     },
//     {
//         nombre: 'Feria Bv. Bulnes',
//         categoria: 'feria',
//         instagram: '-',
//         direccion: 'Entre avenida Las Malvinas y bulevar Bulnes',
//         telefono: '-',
//         pagina_web: '-',
//         comentarios: 'Feria Americana con puestos que venden una categoria variada de productos. Hay puestos con tablones y manteros. Se desarrolla en el espacio de las vías del tren'
//     }
// ]);

// db.EcoDona.insertMany([
    // {
    //     nombre: 'Piedra libre',
    //     categoria: 'Alimentos',
    //     instagram: 'https://www.instagram.com/piedra.libre.comedor/',
    //     direccion: 'Achaval Rodríguez 547, B° Güemes.',
    //     telefono: '3516529395',
    //     pagina_web: 'https://guemesvintage.empretienda.com.ar/',
    //     comentarios: 'Comedor. Suelen solicitar por historias de instagram donaciones de ingredientes para realizar las comidas del comedor'
    // },
    // {
    //     nombre: 'Riko pan',
    //     categoria: 'Alimentos',
    //     instagram: 'https://www.instagram.com/comedor_riko_pan/',
    //     direccion: 'B° Marques de Sobremonte',
    //     telefono: '3516561769',
    //     pagina_web: '-',
    //     comentarios: 'Comedor. La dueña del número se llama Melisa y reciben donaciones'
    // },
    // {
    //     nombre: 'Corazoncitos Felices Cba',
    //     categoria: 'Alimentos',
    //     instagram: 'https://www.instagram.com/corazoncitosfelicescba/',
    //     direccion: 'B°Arguello',
    //     telefono: '3512503823',
    //     pagina_web: '-',
    //     comentarios: 'Merendero. Brindan la copa de leche a mas de 45 niños y niñas, reciben donaciones comunicándose por el número de teléfono'
    // },
    // {
    //     nombre: 'La Cocinita del Corazón',
    //     categoria: 'Alimentos',
    //     instagram: 'https://www.instagram.com/cocinita_de_corazon/',
    //     direccion: '-',
    //     telefono: '-',
    //     pagina_web: '-',
    //     comentarios: 'Realizan viandas que repartes a personas en situación de calle. Suelen estar más activos en redes cuando comienzan los dias fríos'
    // },
    // {
    //     nombre: 'Ropero Comunitario "Puerta de Belén"',
    //     categoria: 'Ropa',
    //     instagram: 'https://www.instagram.com/roperocomunitariopuertadebelen/',
    //     direccion: 'San Marino 4215, B° Flores',
    //     telefono: '0351 466-4252/ 3513014988',
    //     pagina_web: '-',
    //     comentarios: 'Ropero comunitario, con 16 sucursales en Córdoba y en el interior'
    // },
    // {
    //     nombre: 'Remar Cordoba',
    //     categoria: 'Ropa',
    //     instagram: 'https://www.instagram.com/remarargentina/',
    //     direccion: 'Juan B Justo 2248 B° Pueyrredón',
    //     telefono: '(0351) 4234296',
    //     pagina_web: 'https://remarargentina.org/',
    //     comentarios: 'Organización no gubernamental. Aceptan donaciones de ropa como asi también de dinero a través de transferencias'
    // },


// ]);




cursorC = db.EcoCompra.find();

while (cursorC.hasNext()) {
    compra = cursorC.next();
    // print(cliente);
    print(compra._id, ` | ${compra.nombre} ${compra.categoria} | ${compra.instagram}`);
    print('____________________________________');
}

cursorD = db.EcoDona.find();
while (cursorD.hasNext()) {
    dona = cursorD.next();
    // print(cliente);
    print(dona._id, ` | ${dona.nombre} ${dona.categoria} | ${dona.instagram}`);
    print('____________________________________');
}
