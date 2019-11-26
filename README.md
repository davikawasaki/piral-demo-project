# Demo project for Piral study

First test following Piral tutorials. It has a main piral instance as **my-app** and two pilets: - **my-pilet**: simple tile and a menu registration
- **my-page**: registered page, link to page in the menu and connected REST API for consumption

## How to run

- Make sure you have NodeJS 10+ and npm installed:

```bash
node -v  # v10.10.0
npm -v   # 6.4.1
```

- Install the piral CLI (recommendation is globally, but you can do it inside the pilet without the -g arg)

```bash
npm i piral-cli -g
```

- Go to pilet folder my-page/ and install the dependencies

```bash
cd my-page/ && npm i
```

- To run and test the piral instance, run as debug

```bash
piral debug
```