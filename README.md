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
```bash
aws s3 sync build/ s3://some-bucket-on-s3 
```
