import React from 'react';
import ReactDOM from 'react-dom';

// PageLayout Component
const PageLayout = ({ header, footer, children }) => (
  <div className="page-layout">
    <header className="header">{header}</header>
    <main className="content">{children}</main>
    <footer className="footer">{footer}</footer>
  </div>
);

// App Component
const App = () => {
  return (
    <PageLayout
      header={<h1>Welcome to My Website</h1>}
      footer={<p>© 2024 My Website</p>}
    >
      <div>
        <h2>Page Content</h2>
        <p>This is the main content of the page.</p>
      </div>
    </PageLayout>
  );
};

export default App
