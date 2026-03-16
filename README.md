# 🎮 Pokémon Playwright - Testing de API

Proyecto de automatización de pruebas de API utilizando Playwright para interactuar con la [PokéAPI](https://pokeapi.co/). Este proyecto incluye tests que obtienen información de Pokémon, sus especies y cadenas de evolución.

## 📋 Descripción

Este proyecto implementa:
- ✅ Tests de API con Playwright
- 🔧 Cliente HTTP personalizado para la PokéAPI
- 📊 Helpers para procesar y ordenar datos de Pokémon
- 🧪 Tests automatizados para validar endpoints y procesamiento de datos

## 🛠️ Tecnologías

- **[Playwright](https://playwright.dev/)** - Framework de testing
- **TypeScript** - Lenguaje de programación
- **[PokéAPI](https://pokeapi.co/)** - API REST de Pokémon

## 📦 Prerequisitos

Antes de comenzar, asegúrate de tener instalado:
- **Node.js** (versión 18 o superior)
- **npm** o **yarn**

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/michaelpena2404/pokemon-playwright.git
cd pokemon-playwright
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Instalar navegadores de Playwright

```bash
npx playwright install
```

## ▶️ Ejecución de Tests

### Ejecutar todos los tests

```bash
npm test
```

### Ejecutar tests en modo UI (interfaz visual)

```bash
npm run test:ui
```

### Ejecutar tests en modo debug

```bash
npm run test:debug
```

### Ejecutar un archivo de test específico

```bash
npx playwright test tests/pokemon-test.spec.ts
```

### Ver reporte de tests

```bash
npm run test:report
```

## 📂 Estructura del Proyecto

```
pokemon-playwright/
├── api-test/
│   ├── helpers/              # Funciones auxiliares
│   │   ├── alphabeticalOrder.ts    # Ordenamiento alfabético (bubble sort)
│   │   ├── extractSpeciesNames.ts  # Extracción de nombres de especies
│   │   ├── getSpeciesWeight.ts     # Obtención de peso de especies
│   │   └── normalizeUrl.ts         # Normalización de URLs
│   └── services/             # Clientes de API
│       ├── httpClient.ts           # Cliente HTTP base
│       └── pokeApiClient.ts        # Cliente específico de PokéAPI
├── tests/                    # Tests de Playwright
│   ├── pokemon-test.spec.ts        # Tests principales de Pokémon
├── playwright.config.ts      # Configuración de Playwright
└── package.json
```

## 🧪 Tests Disponibles

1. **Obtener Pokémon por nombre** - Valida la obtención de datos de un Pokémon específico
2. **Obtener especies de Pokémon** - Verifica información de especies
3. **Obtener cadena de evolución** - Valida la información de evoluciones
4. **Procesar datos de evolución** - Extrae, procesa y ordena datos de evoluciones

## 📖 Uso del Cliente de API

```typescript
import { PokeApiClient } from './api-test/services/pokeApiClient';

// Crear instancia del cliente
const pokeApi = new PokeApiClient(request, baseURL);

// Obtener Pokémon por nombre
const response = await pokeApi.getPokemonByName('pikachu');

// Obtener especies
const species = await pokeApi.getPokemonSpecies(25);

// Obtener cadena de evolución
const evolution = await pokeApi.getPokemonEvolution(1);
```

## 🔧 Configuración

La configuración de Playwright se encuentra en `playwright.config.ts`, incluyendo:
- Base URL de la PokéAPI: `https://pokeapi.co/api/v2`
- Timeouts y reintentos
- Configuración de reportes

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📝 Licencia

ISC

## 👤 Autor

**Michael Peña**

- GitHub: [@michaelpena2404](https://github.com/michaelpena2404)

---

⭐️ Si este proyecto te fue útil, considera darle una estrella en GitHub!