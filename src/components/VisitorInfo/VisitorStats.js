import React, { useEffect, useState } from "react"
import { API_ROOT } from './app-config'

const getJson = (path) =>
  fetch(`${API_ROOT}${path}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error(`Error fetching ${path}:`, error)
      return null
    })

const VisitorStats = () => {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    let cancelled = false
    Promise.all([getJson('/count'), getJson('/unique'), getJson('/visit')]).then(([total, unique, visit]) => {
      if (!cancelled) setStats({ total, unique, device: visit && visit.device })
    })
    return () => { cancelled = true }
  }, [])

  if (!stats) return null
  const show = (value) => (value === null || value === undefined ? 'N/A' : String(value))

  return (
    <div className="visitor-stats">
      <span>Total visits: {show(stats.total)}</span>
      <span>Unique visitors: {show(stats.unique)}</span>
      <span>Visiting from: {show(stats.device)}</span>
    </div>
  )
}

export default VisitorStats
