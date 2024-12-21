<style
  type="text/css">
  @import 'src/assets/css/fonts.css';
  .preview {
    width: 20px;
    height: 20px;
    background-color: var(--bg);
    border-radius: 5px;
    &.orange {
      --bg: #D08000
    }
    &.purple {
      --bg: #60099C
    }
    &.green {
      --bg: #167701
    }
    &.font-title {
      font-family: "GrusskartenGotisch", fantasy;
      font-size: 3rem;
    }
    &.font-page {
      font-family: "Roboto";
      font-size: 3rem;
    }
  }
</style>

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

# Basic information

## Colors:

| Preview                                             | Code    |
| --------------------------------------------------- | ------- |
| <center><div class='preview orange'></div></center> | #D08000 |
| <center><div class='preview purple'></div></center> | #60099C |
| <center><div class='preview green'></div></center>  | #167701 |

## Typography:

### Title:

<span class='preview font-title'>THIS IS A PREVIEW TEXT</span>  
<span class='preview font-title'>this is a preview text</span>

### Page:

<span class='preview font-page'>THIS IS A PREVIEW TEXT</span>  
<span class='preview font-page'>this is a preview text</span>
