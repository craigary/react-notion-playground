import React, { useState, useEffect } from 'react'
import Notion from './Notion'

function App() {
  const [blockRecord, setBlockRecord] = useState({})
  const API = 'https://notion-api.craigary.net/api/testing'
  const ID = '7a0a55bb7c054b6ea4a7f951e02a67d6'
  useEffect(() => {
    async function getBlockData() {
      const res = await fetch(`${API}/${ID}`)
      const data = await res.json()
      setBlockRecord(data)
    }
    getBlockData()
  }, [])
  if (Object.keys(blockRecord).length) {
    return (
      <div className="App">
        <Notion recordMap={blockRecord} />
      </div>
    )
  }
  return null
}

export default App
