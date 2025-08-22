🛍️ Ecommerce Frontend - Next.js
Este es el frontend de un ecommerce desarrollado en Next.js + TypeScript, con funcionalidades de autenticación, carrito de compras y gestión de órdenes. Fue construido con un enfoque en buenas prácticas, componentización y validaciones personalizadas.

🚀 Tecnologías utilizadas
Next.js 13+ (App Router & Middleware)
React 18
TypeScript
CSS Modules para estilos
React Icons
Context API para autenticación
Fetch API para comunicación con el backend
📂 Estructura del proyecto
/src
 ├── components       # Componentes reutilizables (formularios, navbar, etc.)
 ├── context          # Contexto global (AuthContext)
 ├── lib              # Utilidades y validaciones
 ├── services         # Funciones para llamadas a la API
 ├── views            # Vistas principales (Login, Register, ShoppingCart, etc.)
 ├── middleware.ts    # Protección de rutas
 └── types.ts         # Definición de tipos en TypeScript

⚙️ Instalación y ejecución

1. Clona el repositorio:
git clone https://github.com/JulioRoncallo/Project-ecommerce

2. Instala dependencias:
npm install

3. Crea un archivo .env.local en la raíz y define las variables de entorno:
NEXT_PUBLIC_API_URL=http://localhost:3001/api

4. Ejecuta en modo desarrollo:
npm run dev

5. Abre en el navegador:
http://localhost:3000

✨ Funcionalidades principales

✅ Autenticación (Login & Registro con validaciones)
✅ Middleware de protección de rutas (solo usuarios logueados acceden a ciertas páginas)
✅ Carrito de compras persistente en LocalStorage
✅ Gestión de órdenes (crear y listar órdenes del usuario)
✅ Validaciones personalizadas de formularios
✅ Feedback visual (mensajes de error, confirmación, etc.)

📸 Vistas principales

LoginView → inicio de sesión del usuario
RegisterView → registro con validaciones
ShoppingCartView → gestión del carrito y checkout
Dashboard → vista protegida para usuarios autenticados

🔒 Variables de entorno

Este proyecto utiliza un archivo .env.local.
Ejemplo (.env.example):
NEXT_PUBLIC_API_URL=http://localhost:3001/api

💡 Puntos fuertes

Uso de Context API para manejar sesión y token de usuario.
Implementación de middleware de Next.js para redirigir usuarios según su estado.
Carrito sincronizado con LocalStorage y cálculo de total dinámico.
Código tipado con TypeScript para mayor robustez.
Validaciones personalizadas de login y registro en /src/lib/validate.ts.

🚀 Próximos pasos / mejoras

 Integración con pasarela de pagos.
 Manejo de imágenes para productos.
 Diseño con TailwindCSS o Shadcn UI.
 Tests unitarios y de integración.

👨‍💻 Desarrollado por Julio Roncallo - Desarrollador Fullstack
    julioroncallopolo@gmail.com
📌 Proyecto educativo, con fines de práctica y exposición de código.
