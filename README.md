# SDK-JS

## Installation
1. Start server
```
nvm exec npm start
```
2. Include the bundle in your HTML. Example:
```html
<script src="http://localhost:8111/cereSDK.js"></script>
```
2. Now you can access `cereSDK` object

## API
### **init(): Promise\<void>**
#### *Parameters:*
- appID: string
- integrationPartnerUserId: string
- token?: string
#### *Example:*
```
await cereSDK.init(242, 'sdfsdfsdf3243rfsd');
await cereSDK.init(242, 'sdfsdfsdf3243rfsd', 'access_token_from_the_backend');
```
