# 1. Proje oluşturma

```bash
pnpm create vite 1-react-router --template react-swc
cd 1-react-router
pnpm i
```

# 2. Router yükleme

```bash
pnpm i react-router-dom
```

# 3. main.jsx'e router ekleme

```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Anaysayfa</h1>,
  },
  {
    path: "/contact",
    element: <h1>Iletişim</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

# 4. Masterpage (header, footer içeren sayfa)

```jsx
const Root = () => {
  return (
    <ul>
      <li>Anasayfa</li>
      <li>Hakkımızda</li>
      <li>Iletişim</li>
    </ul>
  );
};

export default Root;
```

## 4.1. Router'a masterpage ekleme

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);
```

# 5. Hata sayfası oluşturma

```jsx
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h1> An error occurred</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
```

## 5.1. Router'a hata sayfası ekleme

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);
```
