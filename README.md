# Embedded Wallet Implementation JS

This is Javascript implementation of the Embedded Wallet

## Quick start
1. Start development server locally:
```
nvm exec npm start
```
2. Include the bundle in your HTML. Example:
```html
<script src="http://localhost:8111/cereSDK.js"></script>
```
3. Now you can access `cereSDK` object

## API
### **init(): Promise\<void>**
#### *Parameters:*
- appID: string
- integrationPartnerUserId: string
- token?: string
#### *Example:*
```
await cereSDK.init(242, 'sdfsdfsdf3243rfsd');
```
## How to build SDK
```bash
nvm exec npm run build
```

## How to deploy
1.Create prod version for .env file:
```bash
cp .env.local .env.prod
```
2. Change parameters for prod
3. Copy build script for `build.sh.example`:
```bash
cp build.sh.example build.sh
```
4. Modify it and specify your S3 bucket and distribution ID
5. Run and deploy:
```bash
./build.sh
```
