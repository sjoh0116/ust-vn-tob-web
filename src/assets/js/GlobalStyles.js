import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`

  :root {

    --font-family: "Noto Sans", sans-serif;

    // Color
    --color-black: #000000;
    --color-white: #ffffff;
    --color-primary: #4cc0cb;
    --color-grey: #666666;
    --color-copy: #808080;
    --border-color: #e7eaf0;

    // Font-Size
    --nav-tit: 16px;
    --info-tit: 24px;
    --info-txt: 14px;

    --prd-info: 22px;
    --prd-tit: 48px;
    --prd-txt: 18px;

    --banner-tit: 60px;

    --m-prd-info: 16px;
    --m-prd-tit: 20px;
    --m-prd-txt: 12px;

    --tit-head: 32px;
    --tit-desc: 16px;

    --m-tit-head: 24px;
    --m-tit-desc: 12px;

    --btn-txt: 16px;
    --m-btn-txt: 12px;

    --foot-cate: 16px;
    --foot-txt: 12px;

    @media only screen and (max-width: 520px) {
      --nav-tit: 14px;
      --info-tit: 18px;
      --info-txt: 12px;

      --prd-info: 16px;
      --prd-tit: 36px;
      --prd-txt: 12px;

      --banner-tit: 36px;

      --m-prd-info: 12px;
      --m-prd-tit: 16px;
      --m-prd-txt: 12px;

      --tit-head: 24px;
      --tit-desc: 16px;

      --m-tit-head: 18px;
      --m-tit-desc: 12px;

      --btn-txt: 14px;
      --m-btn-txt: 12px;

      --foot-cate: 14px;
      --foot-txt: 12px;
    }
  }
  

  ${reset}

  ;
  * {
    box-sizing: border-box;
    line-height: 1.2;
    letter-spacing: -0.03em;
    word-break: keep-all;
  }

  html,
  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  code,
  form,
  fieldset,
  legend,
  input,
  textarea,
  p,
  blockquote,
  th,
  td,
  img {
    margin: 0;
    padding: 0;
  }

  body, html {
    word-wrap: break-word;
    color: var(--color-gray);
    font-family: var(--font-family);
    font-weight: 400;
    font-size: var(--info-txt);
  }

  html {
    width: 100%;
  }

  body#popup {
    min-width: 0;
  }

  li {
    list-style: none;
  }

  img,
  fieldset {
    border: none;
    vertical-align: middle;
  }

  table {
    width: 100%;
    border: 0;
    border-spacing: 0;
    border-collapse: collapse;
  }

  caption {
    display: none;
  }

  th,
  td {
    border: 0;
    vertical-align: top;
  }

  div {
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
  }

  button {
    overflow: visible;
    padding: 0;
    margin: 0;
    border: 0;
    cursor: pointer;
    background: transparent;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
  }

  hr.layout {
    display: none;
  }

  select {
    -webkit-appearance: none;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  a:hover {
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
  }

  input, textarea {
    font-family: 'Pretendard', serif;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #fff inset;
    -webkit-text-fill-color: #000;
  }
`;
export default globalStyles;
