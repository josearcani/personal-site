---
sidebar_position: 0
---

# Dotnet commands

## Entity Framework (Database)

```bash
dotnet ef migrations add CreateInitial
```
Generates a new EF Core migration based on model changes. Replace `CreateInitial` with a descriptive name for the migration.

```bash
dotnet ef database update
```
Applies all pending migrations to the database. Creates the database if it doesn't exist.

## Project scaffolding

```bash
dotnet new xunit
```
Creates a new xUnit test project in the current directory.

```bash
dotnet new classlib
```
Creates a new class library project (a `.dll` with no entry point, meant to be referenced by other projects).

```bash
dotnet new webapi
```
Creates a new ASP.NET Core Web API project with controllers and default configuration.

```bash
dotnet new gitignore
```
Generates a `.gitignore` file with common .NET exclusions (bin, obj, user files, etc.).

## Solution management

```bash
dotnet new sln --name <solution_name>
```
Creates a new `.sln` file. The solution groups multiple projects together for building and IDE support.

```bash
dotnet sln <solution_name.sln> add <path_of_csproj>
```
Adds an existing project (`.csproj`) to the solution so it gets included in builds and shows up in the IDE.

## Project references

```bash
dotnet add <path_of_csproj> reference <path_of_csproj>
```
Adds a project-to-project reference. The first path is the project that **consumes** the dependency, the second is the project **being referenced**. This lets one project use public types from another.