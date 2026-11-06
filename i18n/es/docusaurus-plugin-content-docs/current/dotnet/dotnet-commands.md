---
sidebar_position: 0
---

# Comandos de Dotnet

## Entity Framework (base de datos)

```bash
dotnet ef migrations add CreateInitial
```
Genera una nueva migración de EF Core a partir de los cambios en el modelo. Reemplaza `CreateInitial` por un nombre descriptivo para la migración.

```bash
dotnet ef database update
```
Aplica todas las migraciones pendientes a la base de datos. Crea la base de datos si no existe.

## Creación de proyectos

```bash
dotnet new xunit
```
Crea un nuevo proyecto de pruebas xUnit en el directorio actual.

```bash
dotnet new classlib
```
Crea un nuevo proyecto de biblioteca de clases (un `.dll` sin punto de entrada, pensado para ser referenciado por otros proyectos).

```bash
dotnet new webapi
```
Crea un nuevo proyecto de Web API de ASP.NET Core con controladores y la configuración por defecto.

```bash
dotnet new gitignore
```
Genera un archivo `.gitignore` con las exclusiones comunes de .NET (bin, obj, archivos de usuario, etc.).

## Gestión de soluciones

```bash
dotnet new sln --name <solution_name>
```
Crea un nuevo archivo `.sln`. La solución agrupa varios proyectos para compilarlos juntos y para el soporte del IDE.

```bash
dotnet sln <solution_name.sln> add <path_of_csproj>
```
Agrega un proyecto existente (`.csproj`) a la solución para que se incluya en las compilaciones y aparezca en el IDE.

## Referencias entre proyectos

```bash
dotnet add <path_of_csproj> reference <path_of_csproj>
```
Agrega una referencia de proyecto a proyecto. La primera ruta es el proyecto que **consume** la dependencia y la segunda es el proyecto **referenciado**. Esto permite que un proyecto use los tipos públicos de otro.
