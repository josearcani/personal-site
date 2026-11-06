# Configurar cuentas de Github y Gitlab en una misma máquina con SSH

Para acceder a los recursos de nuestras cuentas necesitamos una forma de autenticación y autorización. Con llaves SSH podemos autenticarnos de forma segura en Github y Gitlab sin ingresar usuario y contraseña cada vez que hacemos pull o push de código.

Ambas plataformas ofrecen una guía para generar las llaves SSH, agregarlas a tu cuenta y verificar la conexión.

*Referencia: [Github Docs - SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) y [Gitlab Docs - SSH](https://docs.gitlab.com/user/ssh/)*

En resumen, necesitamos:

- Generar las llaves en nuestra máquina para cada cuenta.
- Agregar las llaves públicas a sus respectivas cuentas.
- Crear y configurar el archivo `config` de SSH (para múltiples llaves).
- Verificar la conexión a nuestras cuentas.

## Paso 1: Generar una nueva llave SSH con ssh-keygen

Abre la terminal de tu preferencia.

```bash
ssh-keygen -t ed25519 -C "user@example.com" -f ~/.ssh/id_ed25519_github
```

Si usas PowerShell, es posible que no encuentre la carpeta `/.ssh`. En ese caso usa este comando.

```bash
ssh-keygen -t ed25519 -C "user@example.com" -f "$env:USERPROFILE\.ssh\id_ed25519_github"
```

- La opción -t especifica el tipo de llave a crear, en este caso ed25519, un tipo popular de criptografía de llave pública.
- La opción -C agrega información adicional sobre la llave, como su propósito o el usuario que la generó.
- La opción -f indica el nombre del archivo (filename).
- Hazlo para cada cuenta.

Ve a la carpeta .ssh. En Windows debería estar en `C:\Users\<user>\.ssh`.

```bash
id_ed25519_github
id_ed25519_github.pub
id_ed25519_gitlab
id_ed25519_gitlab.pub
```

Los archivos .pub son tus llaves públicas, que deben agregarse a tu cuenta de Github y a tu cuenta de Gitlab respectivamente.

### Agrega tu llave SSH al ssh-agent

```bash
ssh-add ~/.ssh/id_ed25519_github
```

Para PowerShell.

```bash
ssh-add c:/Users/<user>/.ssh/id_ed25519_github
```

Si no quieres escribir tu passphrase cada vez que Git use la llave SSH, puedes agregarla a la lista de llaves administradas por el agente SSH.

## Paso 2: Agrega la llave pública a tus cuentas de Github y Gitlab

Agrégala en Github:

- Copia el contenido de `id_ed25519_github.pub` al portapapeles.
- Sigue: [Adding a new SSH key to your account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account?tool=webui&platform=windows#adding-a-new-ssh-key-to-your-account).

Agrégala en Gitlab:

- Copia el contenido de `id_ed25519_gitlab.pub` al portapapeles.
- Sigue: [Add an SSH key to your GitLab account](https://docs.gitlab.com/user/ssh/?tab=Git+Bash+on+Windows#add-an-ssh-key-to-your-gitlab-account).

## Paso 3: Crea y configura el archivo `config` de SSH (para múltiples llaves)

En la ruta `~/.ssh` crea un archivo nuevo llamado `config`. Este archivo le indica al cliente SSH qué llave usar para cada host.

```bash
cd ~/.ssh
touch config
# *puedes editar este archivo con el bloc de notas*
```

Agrega el siguiente contenido.

```bash
# Github account
Host github.com
	HostName github.com
	User git
	IdentityFile ~/.ssh/id_ed25519_github

# Gitlab account
Host gitlab.com
	HostName gitlab.com
	User git
	IdentityFile ~/.ssh/id_ed25519_gitlab
```

### Paso 4: Verifica la conexión a nuestras cuentas

Para Github:

```bash
ssh -T git@github.com
```

Para Gitlab:

```bash
ssh -T git@gitlab.com
```

Deberías ver un mensaje de éxito indicando que tu llave SSH fue autenticada con tus cuentas.

Finalmente, puedes clonar un repositorio de Github o Gitlab y empezar a hacer pull y commits.
