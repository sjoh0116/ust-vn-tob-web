import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import GlobalStyles from 'assets/js/GlobalStyles';

// 레이아웃
import Loading from "./layout/Loading";
import ContentLayout from "layout/CommonLayout";
import BoardWrite from "./pages/Qna/boardWrite";
import BoardModify from "./pages/Qna/boardModify";
import ScrollToTop from "./hooks/ScrollTop";

// 페이지
const Main = lazy(() => import('pages/main'));
const ProductList = lazy(() => import('./pages/productList'));
const ProductDetail = lazy(() => import('./pages/product'));
const BrandStory= lazy(() => import('./pages/brand'));
const BoardList = lazy(() => import('./pages/Qna/boardList'));
const BoardDetail = lazy(() => import('./pages/Qna/boardDetail'));

function App() {

  const router = createBrowserRouter([
      {
          path:'/',
          element: (
              <>
                  <ScrollToTop />
                  <ContentLayout />
              </>
          ),
          children: [
              {
                  index:true,
                  element:
                      <Suspense fallback={<Loading />}>
                          <Main />
                      </Suspense>
              },
              {
                  path: '/product/',
                  element:
                      <Suspense fallback={<Loading />}>
                          <ProductList />
                      </Suspense>
              },
              {
                  path: '/product/:prdNum',
                  element:
                      <Suspense fallback={<Loading />}>
                          <ProductDetail />
                      </Suspense>
              },
              {
                  path: '/brand',
                  element:
                      <Suspense fallback={<Loading />}>
                          <BrandStory />
                      </Suspense>
              },
              {
                  path: '/board',
                  element:
                      <Suspense fallback={<Loading />}>
                          <BoardList />
                      </Suspense>
              },
              {
                  path: '/board/write',
                  element:
                      <Suspense fallback={<Loading />}>
                          <BoardWrite />
                      </Suspense>
              },
              {
                  path: '/board/modify/:boardNum',
                  element:
                      <Suspense fallback={<Loading />}>
                          <BoardModify />
                      </Suspense>
              },
              {
                  path: '/board/detail/:boardNum',
                  element:
                      <Suspense fallback={<Loading />}>
                          <BoardDetail />
                      </Suspense>
              }
          ]
      },
  ])

  return (
    <>
        <GlobalStyles />
        <RouterProvider router={router} />
    </>
  );
}

export default App;
