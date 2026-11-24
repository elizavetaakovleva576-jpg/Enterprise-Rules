import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link, useNavigate } from 'react-router-dom';
import { api } from './api';

const styles = {
  header: { background: '#1a237e', color: '#fff', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  container: { maxWidth: '1100px', margin: '30px auto', display: 'flex', gap: '20px', padding: '0 20px', fontFamily: 'sans-serif' },
  sidebar: { width: '250px', background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #ddd', height: 'fit-content' },
  main: { flex: 1 },
  card: { background: '#fff', border: '1px solid #ddd', borderRadius: '8px', padding: '20px', marginBottom: '15px' },
  input: { padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginRight: '10px' },
  btn: { padding: '8px 15px', background: '#1a237e', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  btnDanger: { padding: '4px 8px', background: '#d32f2f', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }
};
