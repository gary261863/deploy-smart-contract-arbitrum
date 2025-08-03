# deploy-smart-contract-arbitrum
implementación de un contrato inteligente que demuestra el proceso de despliegue y verificación en la red de pruebas de Arbitrum Sepolia. Utilizando el framework de desarrollo Hardhat

### Descripción del Proyecto
Este repositorio contiene el código y la configuración necesarios para desplegar y verificar un contrato inteligente en la red de pruebas **Arbitrum Sepolia**. El proyecto utiliza **Hardhat** como framework de desarrollo para automatizar la compilación, el despliegue y la verificación del código fuente en el explorador de bloques [Arbiscan Sepolia](https://sepolia.arbiscan.io/). Este trabajo fue desarrollado como parte de la buildathon 2025.

---

### Pruebas del Despliegue
A continuación se muestran las pruebas del despliegue exitoso del contrato en la red de Arbitrum Sepolia.

- **Dirección del Contrato:** `0xff49b5c3Fd278d78cd6DfA5B52dfbd57F9c7dca0`
  

- **Contrato Verificado en Arbiscan:**
  https://sepolia.arbiscan.io/address/0xff49b5c3Fd278d78cd6DfA5B52dfbd57F9c7dca0#code

---

### Requisitos Previos
Para poder ejecutar este proyecto, necesitas tener instalado lo siguiente:

- **Node.js** (v18 o superior)
- **npm** (v9 o superior)
- **Git**

---

### Instalación y Configuración
1. **Clona el repositorio:**
   ```bash
   git clone [https://github.com/](https://github.com/)[tu-usuario]/[tu-repositorio].git
   cd [tu-repositorio]

2. Instala las dependencias:
    ```bash

    npm install

    Configura las variables de entorno:
    Crea un archivo llamado .env en la raíz del proyecto con la siguiente información. No subas este archivo a GitHub.

    ARBITRUM_SEPOLIA_RPC_URL="[Tu URL de RPC de Alchemy para Sepolia]"
    PRIVATE_KEY="[Tu clave privada de la billetera]"
    ARBISCAN_API_KEY="[Tu clave API de Etherscan/Arbiscan]"

Uso

Compilar el Contrato

Para compilar el contrato inteligente, ejecuta el siguiente comando:
npx hardhat compile

Desplegar el Contrato
Para desplegar el contrato en la red de Arbitrum Sepolia, ejecuta este comando:

npx hardhat run scripts/deploy.js --network arbitrumSepolia

Verificar el Contrato
Para verificar el código fuente del contrato en Arbiscan Sepolia, usa el siguiente comando, reemplazando la dirección y el argumento del constructor.
npx hardhat verify --network arbitrumSepolia [DIRECCIÓN_DEL_CONTRATO] "HelloWorld"

Licencia

Este proyecto está bajo la licencia MIT.
