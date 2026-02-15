---
slug: dockerizing-dotnet-api
title: Dockerizing a .NET API for Local Development
authors: josearcani
tags: [backend, dotnet, devops]
---

Setting up a consistent dev environment across machines can be frustrating.
Here's how I containerize my .NET APIs so the setup is just
`docker compose up`.

<!-- truncate -->

## The Problem

Every time I set up a project on a new machine — or onboard someone — there's
a checklist: install the right SDK version, configure connection strings, seed
the database. Docker removes most of that friction.

## The Dockerfile

```dockerfile
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY *.csproj ./
RUN dotnet restore
COPY . ./
RUN dotnet publish -c Release -o /app

FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app .
ENTRYPOINT ["dotnet", "MyApi.dll"]
```

## Docker Compose

```yaml
services:
  api:
    build: .
    ports:
      - "5000:8080"
    depends_on:
      - db
  db:
    image: mcr.microsoft.com/mssql/server:2022-latest
    environment:
      SA_PASSWORD: "YourStrong!Password"
      ACCEPT_EULA: "Y"
    ports:
      - "1433:1433"
```

## Takeaway

This is a starting point — for production you'd want health checks, volume
mounts for data persistence, and proper secret management. But for local dev,
this gets you running in seconds.
