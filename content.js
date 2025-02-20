(function() {
  const darkStyleId = 'darkmode-style';
  let darkStyle = document.getElementById(darkStyleId);
  if (darkStyle) {
    darkStyle.parentNode.removeChild(darkStyle);
    return;
  }
  darkStyle = document.createElement('style');
  darkStyle.id = darkStyleId;
  darkStyle.innerHTML = `
    :root {
      --primary-dark: hsl(225, 26%, 75%);
      --bg-dark: hsl(0, 0%, 7%);
      --fg-dark: hsl(0, 0%, 20%);
      --fg-secondary-dark: hsl(0, 0%, 12%);
      --text-dark: hsl(0, 0%, 88%);
      --border-dark: hsl(0, 0%, 90%);
      --success-dark: hsl(125, 100%, 80%);
      --accent-header: hsl(135, 94%, 65%);
    }
    .logo {
      display: none !important;
    }
    .no-overflow {
      padding-left: 1em !important;
    }
    html, body {
      background-color: var(--bg-dark) !important;
      color: var(--text-dark) !important;
    }
    .card, .footer, .activity-description, .activity-header, .footer-section, .drawerheader, .footer-content-popover, 
    .page-link, .moremenu, .nav, .morenav, .nav-tab, .notifications, 
    .activity-item, .main-inner, .navbar, .dropdown-menu, .modal-content, 
    .list-group-item, input, textarea, select, button, #region-main, 
    .flexible.table, .cell, .btn.dropdown-toggle, .card-footer {
      background-color: var(--fg-secondary-dark) !important;
      color: var(--text-dark) !important;
      border-color: var(--fg-dark) !important;
    }
    .courseindex .courseindex-item .completioninfo {
      min-width: 34px !important;
    } 
    .courseindex .courseindex-item.pageitem { 
      background-color: var(--success-dark) !important;
    }
    .courseindex .courseindex-item.pageitem a { 
      color: black !important;
    }
    .courseindex .courseindex-item { 
      padding: 0 !important;
    }
    .courseindex-item {
      border-bottom: 1px solid var(--fg-dark) !important;
      color: var(--success-dark) !important;
      background-color: var(--fg-secondary-dark) !important;
      opacity: 0.5 !important;
      padding: 5px !important;
      border-radius: 5px !important;
      margin-left: 5px !important;
    }
    .navbar-toggler-icon {
      filter: invert(100%) !important;
      -webkit-filter: invert(100%) !important;
    }
    .page-link:hover,
    .nav-link:hover,
    .day:hover {
      background-color: var(--fg-dark) !important;
    }
    .nav-link:hover {
      color: var(--text-dark) !important;
    }
    .activity {
      border-top: 1px solid var(--fg-dark) !important;
      color: var(--text-dark) !important;
    }
    .alert, .alert-success {
      background-color: var(--success-dark) !important;
      opacity: 0.84 !important;
    }
    a, .icon {
      color: var(--primary-dark) !important;
    }
    .dropdown-divider {
      border-top: 1px solid var(--fg-dark) !important;
    }
    #page-header h1.h2 {
      color: var(--accent-header) !important;
      font-size: 3em !important;
    }
    .dropdown-item:hover {
      color: var(--text-dark) !important;
    }
    .btn {
      background-color: var(--fg-dark) !important;
      color: var(--text-dark) !important;
    }
    .section-item, .coursebox {
      border: 1px solid var(--fg-dark) !important;
      outline: none !important;
    }
    .header {
      border: none !important;
    }
    .drawercontent {
      background-color: var(--fg-secondary-dark) !important;
    }
  `;
  try {
    document.head.appendChild(darkStyle);
    console.log("[+] darkmode injected successfully");
  } catch (error) {
    console.error("[-] err injecting darkmode:", error);
  }
})();