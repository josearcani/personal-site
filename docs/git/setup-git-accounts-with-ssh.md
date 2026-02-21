# Setup a Github and Gitlab accounts in one machine with SSH

In order to have access to your resources in your accounts, we have to provide a way of authentication and authorization. Using SSH keys we can securely authenticate to Github and Gitlab without entering our username and password each time we pull/push code.

Both platforms provide a guide to generate the SSH keys, add them to your account and verify the connection.

*Reference: [Github Docs - SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) and [Gitlab Docs - SSH](https://docs.gitlab.com/user/ssh/)*

In a nutshell we need to:

- Generate the keys in our machine for each account.
- Add the public keys to our respective accounts.
- Create and configure the SSH `config` file (for multiple keys).
- Verify connection to our accounts.

## Step 1: Generate a new SSH with ssh-keygen

Open your terminal of your preference.

```bash
ssh-keygen -t ed25519 -C "user@example.com" -f ~/.ssh/id_ed25519_github
```

If you are using powershell it might not find the `/.ssh` folder, in that case use this command.

```bash
ssh-keygen -t ed25519 -C "user@example.com" -f "$env:USERPROFILE\.ssh\id_ed25519_github"
```

- The -t flag is used to specify the type of key to create, in this case ed25519, which is a popular type of public-key cryptography.
- The -C flag is used to provide additional information about the key, such as its purpose or user who generated it.
- The -f flag stands for filename.
- Do it for each account.

Go to the .ssh, in windows it should be at `C:\Users\<user>\.ssh`.

```bash
id_ed25519_github
id_ed25519_github.pub
id_ed25519_gitlab
id_ed25519_gitlab.pub
```

The .pub files are your public key that must be added to your Github and Gitlab account respectively.

### Add your SSH key to  the ssh-agent

```bash
ssh-add ~/.ssh/id_ed25519_github
```

For powershell.

```bash
ssh-add c:/Users/<user>/.ssh/id_ed25519_github
```

If you don’t want to type your passphrase every time Git uses the SSH key, you can add the key to the list of keys managed by the SSH agent.

## Step 2: Add the public key to your Github and Gitlab accounts

Add it to Github:

- Copy the content of `id_ed25519_github.pub` to the clipboard.
- Follow: [Adding a new SSH key to your account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account?tool=webui&platform=windows#adding-a-new-ssh-key-to-your-account).

Add it to Gitlab:

- Copy the content of `id_ed25519_gitlab.pub` to the clipboard.
- Follow: [Add an SSH key to your GitLab account](https://docs.gitlab.com/user/ssh/?tab=Git+Bash+on+Windows#add-an-ssh-key-to-your-gitlab-account).

## Step 3: Create and configure the SSH `config` file (for multiple keys)

In the path `~/.ssh` create a new named `config`. This will tell SSH client which key to use for which host.

```bash
cd ~/.ssh
touch config
# *you can edit this file with notepad*
```

Add the following content to it.

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

### Step 4: Verify connection to our accounts

For Github:

```bash
ssh -T git@github.com
```

For Gitlab:

```bash
ssh -T git@gitlab.com
```

You should see a successfull message that your SSH key was authenticated with your accounts.

Finally, you can clone a repository from Github or Gitlab and start pull and making commits.