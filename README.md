
## V1 FUNCIONA 
## V2 FUNCIONA 
## V3 ERROR NO FUNCIONA NADA 
## V4 Version Funcional 
## Version  Final 

# 🐾 Veterinary Management App — Patient Tracking Animal Health
 
Aplicación web (Proximamente APP) para el seguimiento y administración de pacientes de una clínica veterinaria. Permite registrar mascotas, sus propietarios, síntomas y fechas de consulta, con persistencia de datos en el navegador.
 
---
 
## 🚀 Demo
 
> Corre localmente en `http://localhost:5173`
 
---
 
## 🛠️ Tecnologías utilizadas
 
| Tecnología | Versión | Uso |
|---|---|---|
| React | 19 | UI y componentes |
| TypeScript | 6 | Tipado estático |
| Vite | 8 | Bundler y dev server |
| Tailwind CSS | 4 | Estilos |
| Zustand | 5 | Estado global |
| React Hook Form | 7 | Manejo de formularios |
| UUID | 14 | Generación de IDs únicos |
| Zustand Persist | - | Persistencia en localStorage |
 
---
 
## 📁 Estructura del proyecto
 
```
src/
├── Components/
│   ├── Error.tsx          # Componente para mostrar errores de validación
│   ├── Form.tsx           # Formulario para agregar/editar pacientes
│   ├── FormList.tsx       # Lista de pacientes registrados
│   ├── PatientsDetail.tsx # Detalle de cada paciente
│   ├── PropsPa.tsx        # Componente reutilizable de propiedades
│   └── Titulo.tsx         # Layout principal con Form y FormList
├── Store/
│   └── Store.ts           # Estado global con Zustand + persist
├── Types/
│   └── Types.ts           # Tipos TypeScript (Patient, DropID)
├── main.tsx               # Punto de entrada
└── index.css              # Estilos globales con Tailwind
```
 
---
 
## ⚙️ Instalación y uso
 
### 1. Clona el repositorio
 
```bash
git clone https://github.com/tu-usuario/Veterinary_Management_App.git
cd Veterinary_Management_App
```
 
### 2. Instala las dependencias
 
```bash
npm install
```
 
### 3. Corre el servidor de desarrollo
 
```bash
npm run dev
```
 
### 4. Build para producción
 
```bash
npm run build
```
 
---
 
## 🧠 Funcionalidades
 
-  Registrar pacientes con nombre, propietario, email, fecha y síntomas
-  Ver lista de pacientes en tiempo real
-  Editar un paciente existente
-  Eliminar pacientes
-  Persistencia de datos en `localStorage` (los datos no se pierden al recargar)
-  Validación de formulario con mensajes de error
-  Diseño responsivo con Tailwind CSS
---
 
## 📦 Scripts disponibles
 
```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Compila para producción
npm run lint     # Revisa errores de código con ESLint
npm run preview  # Previsualiza el build de producción
```
 
---
 
## 📝 Tipos principales
 
```typescript
type Patient = {
    id: string
    name: string
    caretaker: string
    email: string
    date: Date
    symptoms: string
}
```
 
---
 
## ⚠️ Notas importantes
 

- Si la pantalla aparece en blanco, agrega `'use no memo'` al inicio de `Form.tsx` para excluirlo del React Compiler.
---
 
## 👨‍💻 Autor
 
Desarrollado como proyecto de práctica con React + TypeScript + Zustand.
## Juan David Serrato Alvarado
 




