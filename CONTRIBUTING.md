# Contributing to 🎉 Joyeux anniversaire - Interactive Web Birthday Card Project 🎉

Thank you for considering contributing to this project! We follow the **GitFlow** methodology to keep our workflow organized and ensure a stable codebase.

## GitFlow Installation

If you have **GitFlow** installed, you can simplify many of the branching steps outlined below. To install GitFlow:

- **Mac**: `brew install git-flow-avh`
- **Windows**: Use Git Bash or download from [GitFlow for Windows](https://github.com/nvie/gitflow/wiki/Installation).
- **Linux**: Check your package manager (e.g., `sudo apt install git-flow` for Debian-based systems).

Once installed, **initialize GitFlow in the project**:
```bash
git flow init
```
Accept the default branch names (`main` and `develop`), or customize if needed.

## Branching Strategy

### Main Branches

- **`main`**: This branch contains the stable code for production. Only thoroughly tested code is merged into `main`.
- **`develop`**: This branch is where active development happens. New features and fixes are merged here first.

### Supporting Branches

In GitFlow, we use supporting branches for specific purposes:

- **Feature branches**: For new features and enhancements.
- **Hotfix branches**: For critical fixes in production.
- **Release branches**: For final preparations before deploying to production.

### Naming Conventions

GitFlow automatically follows naming conventions, but for reference:

- **Feature branches**: `feature/brief-description`
- **Hotfix branches**: `hotfix/brief-description`
- **Release branches**: `release/version-number`

## Workflow

### 1. Creating a Feature Branch

#### With GitFlow Commands

1. **Start a new feature**:
   ```bash
   git flow feature start your-feature-name
   ```
2. Work on your feature and **commit your changes**. Use clear, concise commit messages (see "Commit Guidelines" below).

3. **Finish the feature**:
   ```bash
   git flow feature finish your-feature-name
   ```
   This command merges the feature into `develop` and deletes the feature branch locally.

4. **Push changes to the remote**:
   ```bash
   git push origin develop
   ```

#### Without GitFlow

Follow these manual steps:
1. **Checkout `develop`** and pull latest changes:
   ```bash
   git checkout develop
   git pull origin develop
   ```

2. **Create a new branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit changes**, then push to the remote:
   ```bash
   git push -u origin feature/your-feature-name
   ```

### 2. Merging a Feature into `develop`

1. **Open a Pull Request (PR)** to merge your feature branch into `develop`.
2. Wait for a code review, address any requested changes, and ensure all checks pass.
3. Once approved, the feature branch can be merged into `develop`.

### 3. Creating a Release

#### With GitFlow

1. **Start a release**:
   ```bash
   git flow release start version-number
   ```

2. Make final preparations and commit any updates or fixes.

3. **Finish the release**:
   ```bash
   git flow release finish version-number
   ```
   This merges the release into both `main` and `develop`, tags the release, and deletes the release branch locally.

4. **Push changes to remote**:
   ```bash
   git push origin main develop --tags
   ```

#### Without GitFlow

1. **Create a release branch** from `develop`:
   ```bash
   git checkout -b release/version-number
   ```

2. Perform final checks, then **merge into both `main` and `develop`**:
   ```bash
   git checkout main
   git merge release/version-number
   git checkout develop
   git merge release/version-number
   ```

3. Tag the release on `main`:
   ```bash
   git tag -a vX.X.X -m "Release version X.X.X"
   git push origin main develop --tags
   ```

### 4. Hotfixes

#### With GitFlow

1. **Start a hotfix**:
   ```bash
   git flow hotfix start description
   ```

2. Commit your hotfix changes.

3. **Finish the hotfix**:
   ```bash
   git flow hotfix finish description
   ```
   This merges the hotfix into both `main` and `develop`, tags it, and deletes the branch locally.

4. **Push changes to remote**:
   ```bash
   git push origin main develop --tags
   ```

#### Without GitFlow

1. **Create a hotfix branch** from `main`:
   ```bash
   git checkout -b hotfix/description
   ```

2. Once fixed, **merge back into both `main` and `develop`**:
   ```bash
   git checkout main
   git merge hotfix/description
   git checkout develop
   git merge hotfix/description
   ```

## Commit Guidelines

- **Use clear, concise commit messages**. Each commit message should include:
  - **Prefix** (e.g., `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`)
  - **Brief description** of the change
- Example:
  ```plaintext
  feat: add color-changing background animation for non-tablet devices
  ```

## Pull Request Process

1. Ensure your code is up-to-date with `develop`.
2. Submit a pull request to merge your feature or hotfix branch into `develop`.
3. Add a clear description and any relevant context.
4. Assign reviewers if required.
5. Once approved, your branch can be merged and deleted.

## Code Style

- Follow consistent coding practices for readability and maintainability.
- Use descriptive variable names, and ensure code is well-structured.

---

Thank you for following these guidelines! We appreciate your contributions to make this project better for everyone! 🎂
