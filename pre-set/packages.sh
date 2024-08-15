# Install lint

ng lint

# run Lint - check some config
npm run lint

# Husky - for control git hooks
npm install --save-dev husky

#Init Husky
npx husky init
# Navega ate a pasta criada, e configura de acordo com o script que você precisa, exempli npm run lint.

# Pode adc um plugin para configuração juntamente com o eslint
npm install eslint-plugin-unused-imports --save-dev

# Lint Staged - rodar o lint somente no que foi alterado
npm install --save-dev lint-staged # requires further setup
