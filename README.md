<h1 align="center">
  <br>
  <a href="http://www.amitmerchant.com/electron-markdownify"><img src="https://f.hubspotusercontent20.net/hubfs/2829524/Copia%20de%20LOGOTIPO_original-2.png"></a>
  <br>
  qa-backend-playwright-apis
  <br>
</h1>

<h4 align="center">Proyecto base de <a href="https://github.com/karatelabs/karate" target="_blank">Pragma</a>.</h4>

<p align="center">
  <a href="https://www.oracle.com/java/technologies/javase-jdk11-downloads.html">
    <img src="https://img.shields.io/badge/Java-11+-orange.svg" alt="Java">
  </a>
  <a href="https://www.mysql.com/">
    <img src="https://img.shields.io/badge/Database-MySQL-blue.svg" alt="MySQL">
  </a>
  <a href="https://www.postgresql.org/">
    <img src="https://img.shields.io/badge/Database-PostgreSQL-blue.svg" alt="PostgreSQL">
  </a>
  <a href="https://www.w3schools.com/sql/">
    <img src="https://img.shields.io/badge/SQL-Fundamentals-lightgrey.svg" alt="SQL">
  </a>
  <a href="https://cucumber.io/">
    <img src="https://img.shields.io/badge/Cucumber-BDD-green.svg" alt="Cucumber">
  </a>
  <a href="https://serenity-bdd.info/">
    <img src="https://img.shields.io/badge/Serenity-Reporting-blueviolet.svg" alt="Serenity">
  </a>
  <a href="https://www.selenium.dev/">
    <img src="https://img.shields.io/badge/Selenium-Web_Testing-brightgreen.svg" alt="Selenium">
  </a>
</p>

## Description
Este proyecto utiliza Playwright para automatizar pruebas backend. Proporciona una estructura base para ejecutar pruebas de APIs con configuraciones flexibles que se adaptan a diferentes entornos mediante el uso de variables de entorno.


<p align="center">
  <a href="#topicos">Topicos</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#consideraciones">Consideraciones</a> •
  <a href="#descarga">Descarga</a> •
  <a href="#instalación-y-ejecución">Instalación y ejecución</a> •
  <a href="#autores">Autores</a> •
  <a href="#relacionados">Relacionados</a> •
  <a href="#roadmap">Roadmap</a>
</p>


## Topicos

* Node.js
* TypeScript
* Playwright
* Apis

## Tecnologias
### This project required:
- [Node.js] version 20 o superior
- [playwright] Instalado como dependencia del proyecto
 

## Consideraciones
- Verifique que las versiones de las dependencias y herramientas (Node.js, Playwright) sean compatibles con las especificaciones del proyecto.
- Asegúrese de configurar correctamente las variables de entorno en el archivo .env para cada ambiente (desarrollo, prueba, producción).
- Los reportes generados se almacenan en el directorio   `playwright-report`. Es importante revisarlos para analizar errores o validaciones fallidas.
- Si su entorno no soporta ejecuciones paralelas, modifique la configuración en `playwright.config.ts` para establecer un número menor de workers.


## Descarga
Para clonar está aplicación desde la linea de comando:

```bash
git clone https://github.com/somospragma/qa-backend-playwright-apis.git
cd qa-backend-playwright-apis
git remote remove origin
git remote add origin URL_DE_TU_NUEVO_REPOSITORIO
git push -u origin master
```
Nota: Asegúrate de reemplazar URL_DE_TU_NUEVO_REPOSITORIO con la URL del repositorio que creaste en tu cuenta de GitHub.

Puedes descargar el proyecto en el enlace [download](https://github.com/somospragma/qa-backend-playwright-apis) 

## Instalación y ejecución

Para ejecutar está aplicación, necesitas [Node](https://nodejs.org/es) instalado en tu equipo.

##  🛠️ Ejecución de test con Node:
```
npm install
npx playwright test
npx playwright test tests/<nombre-directorio>
npx playwright show-report
npx playwright test --grep @<tag>
ENV=.env.test npx playwright test
```

Nota:

*   Se recomienda configurar un script en `packeage.json` para facilitar el uso de ambientes:
```
"scripts": {
  "test:dev": "ENV=.env.dev npx playwright test",
  "test:test": "ENV=.env.test npx playwright test",
  "test:prod": "ENV=.env.prod npx playwright test"
}
``` 



### ejemplo
```
ENV=.env.dev npx playwright test --grep @critical
```


## **Ejecución en diferentes ambientes:**
```
Node ENV=.env.dev
Node ENV=.env.qa
Node ENV=.env.prod
```
### Notas: 
    - el ambiente por defecto es el configurado en el `playwright.config.ts`


## Autores


| [<img src="https://avatars.githubusercontent.com/u/68761366?s=400&u=bb480144244c256aabbdebb801c17709fae5a904&v=4" width=115><br><sub>David Bonett</sub>](https://github.com/davito19) |  [<img src="https://gitlab.com/uploads/-/system/user/avatar/13437423/avatar.png?width=400" width=115><br><sub>Mauro L. Ibarra P.</sub>](https://gitlab.com/mauro.ibarrap) <br/>  | 
:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|


## Relacionados

- [qa-backend-playwright-clean-architecture-pattern](https://github.com/somospragma/qa-backend-playwright-clean-architecture-pattern)
- [qa-web-proyecto-base-playwright-screenplay](https://github.com/somospragma/qa-web-proyecto-base-playwright-screenplay)
- [qa-web-proyecto-base-playwright-pom-bdd](https://github.com/somospragma/qa-web-proyecto-base-playwright-pom-bdd)


## Roadmap

- [Guia QA](https://github.com/amitmerchant1990/pomolectron) - (En construcción) Una guia de proyectos Orientados a la Calidad de Software

