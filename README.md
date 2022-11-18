## Getting Started

First, run the development server:

```bash
yarn initial
```

Config .env files

```
NEXTAUTH_URL="your correct url"
```

```bash
npm run dev
# or
yarn dev
```

```bash
// Please turn off ignoreBuildErrors and ignoreDuringBuilds when build project at next.config.js
typescript: {
  // !! WARN !!
  // Dangerously allow production builds to successfully complete even if
  // your project has type errors.
  // !! WARN !!
  ignoreBuildErrors: false,
}
eslint: {
  // Warning: This allows production builds to successfully complete even if
  // your project has ESLint errors.
  ignoreDuringBuilds: false,
},

yarn build
```

## Structure

```
src
   → assets (not sure but the bridge to get assets ⇒ import { assets } from ‘@asses/index’ ⇒ assets(’name of asset’)
   → pages
   → components
       → atoms
       → molecules
           → AppButton
               → AppButton
               → AppButton.style
       → organisms
       → pages
           → Home
               → Home
               → Home.style (generate style code here)
   → constants
   → models
   → states
   → services
   → utils
```

## Guildline

### 1. Update local library

- Update the code inside libraries/jitera-web-ui-library
- Increase version number in libraries/jitera-web-ui-library/package.json
- Upgrade local package

```javascript
yarn rebuild_local_libraries
```

- Go back to main source code
- Upgrade the package

```javascript
yarn install_local_libraries
```

### 2. Navigation

Supported navigation function over services/navigate

```javascript
const navigation = useNavigateService();
navigation.push();
navigation.replace();
navigation.goBack();
navigation.reload();
```

### 3. Service

Service support function based on bussiness model
How to use service

```javascript
// Create service
const todoService = useTodoService();
// Call a function to get data (noted: api retry 3 times if API failed)
const getApiTodosResult = todoService.getApiTodos.hooks();
// Call a function to create or update
const getApiTodosResult = todoService.getApiTodos.fetch();
```

To handle error you can hooks error callback in service

```javascript
const getApiTodos = {
    args: (params?: FetchGetApiTodosRequestBody) => [
      ["Todo", "/api/todos", params],
      fetchGetApiTodos,
      {
        onError: commonFunctionToHandleError <- add this
      }
    ],
    hooks: (params?: FetchGetApiTodosRequestBody) =>
      useQuery<FetchGetApiTodosResponseBody>(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        /* @ts-ignore */
        ...getApiTodos.args(params)
      ),
    fetch: (
      params?: FetchGetApiTodosRequestBody
    ): FetchGetApiTodosResponseBody =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      /* @ts-ignore */
      queryClient.fetchQuery(...getApiTodos.args(params)),
  };
```

### 4. Setup next/auth server

```javascript
// Setup in .env if you want to custom the next auth server or want to run it on another port.
NEXTAUTH_URL=http://localhost:3000
// Not providing any secret or NEXTAUTH_SECRET will throw an error in production.
NEXTAUTH_SECRET=xxx
```

### 5. Check authentication info

Use below hook to check authentication info

```javascript
import { useSession } from "next-auth/react";

const { data: session, status } = useSession();
```

Or you can get anywhere

```javascript
import sessionStorage from "@utils/sessionStorage";

const authenticationInfo = sessionStorage.getAuthenticationInfo();
```
