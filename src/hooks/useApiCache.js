// src/hooks/useApiCache.js
import { useState, useEffect } from 'react';
import apiClient from '../api/apiClient';

const DEFAULT_TTL_MS = 60 * 60 * 1000; // 1 hour

function getCached(cacheKey) {
  try {
    const raw = localStorage.getItem(cacheKey);
    if (!raw) return null;
    const { data, expiresAt } = JSON.parse(raw);
    if (Date.now() > expiresAt) {
      localStorage.removeItem(cacheKey);
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

function setCache(cacheKey, data, ttlMs) {
  try {
    localStorage.setItem(
      cacheKey,
      JSON.stringify({ data, expiresAt: Date.now() + ttlMs })
    );
  } catch {
    // localStorage full or unavailable — fail silently
  }
}

// /**
//  * useApiCache(endpoint, options)
//  *
//  * @param {string} endpoint  - e.g. '/api/page-overviews/'
//  * @param {object} options
//  *   @param {number}  ttlMs     - cache lifetime in ms (default 5 min)
//  *   @param {boolean} enabled   - set false to skip fetching
//  */

export function useApiCache(endpoint, { ttlMs = DEFAULT_TTL_MS, enabled = true } = {}) {
  const cacheKey = `api_cache_${endpoint}`;

  const cached = getCached(cacheKey);

  const [data, setData]       = useState(cached ?? null);
  const [loading, setLoading] = useState(!cached && enabled);
  const [error, setError]     = useState(null);
  const [isSlowLoad, setIsSlowLoad] = useState(false); 

    // ── Slow load warning (shows after 4 seconds) ─────────────────
  useEffect(() => {
    if (!loading) {
      setIsSlowLoad(false);
      return;
    }
    const timer = setTimeout(() => setIsSlowLoad(true), 4000);
    return () => clearTimeout(timer);
  }, [loading]);


  useEffect(() => {
    if (!enabled) return;

    // If we already have fresh cached data, skip the network call
    const fresh = getCached(cacheKey);
    if (fresh) {
      setData(fresh);
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const response = await apiClient.get(endpoint);
        if (!cancelled) {
          setData(response.data);
          setCache(cacheKey, response.data, ttlMs);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err?.response?.data?.detail || err.message || 'Failed to load data');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchData();

    return () => { cancelled = true; };
  }, [endpoint, ttlMs, enabled]);

  // Call this to force a fresh fetch (e.g. pull-to-refresh)
  function refresh() {
    localStorage.removeItem(cacheKey);
    setData(null);
    setLoading(true);
    setError(null);

    apiClient.get(endpoint).then(res => {
      setData(res.data);
      setCache(cacheKey, res.data, ttlMs);
    }).catch(err => {
      setError(err?.response?.data?.detail || err.message || 'Failed to load data');
    }).finally(() => {
      setLoading(false);
    });
  }

  return { data, loading, error, refresh };
}

// src/hooks/useApiCache.js 
// const [isSlowLoad, setIsSlowLoad] = useState(false);

// useEffect(() => {
//   if (!loading) {
//     setIsSlowLoad(false);
//     return;
//   }
//   // Show "slow load" warning after 5 seconds
//   const timer = setTimeout(() => setIsSlowLoad(true), 5000);
//   return () => clearTimeout(timer);
// }, [loading]);

// Return it:
// return { data, loading, error, refresh, isSlowLoad };