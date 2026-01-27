import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{
          padding: '2rem',
          maxWidth: '600px',
          margin: '2rem auto',
          fontFamily: 'system-ui, sans-serif',
          background: '#fef2f2',
          border: '1px solid #fecaca',
          borderRadius: '8px',
        }}>
          <h1 style={{ color: '#b91c1c', marginTop: 0 }}>Something went wrong</h1>
          <pre style={{
            overflow: 'auto',
            padding: '1rem',
            background: '#fff',
            borderRadius: '4px',
            fontSize: '14px',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}>
            {this.state.error?.message ?? String(this.state.error)}
          </pre>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Check the browser console (F12 → Console) for more details.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
