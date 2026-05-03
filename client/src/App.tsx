import { createSignal } from 'solid-js'
import beaver from './assets/beaver.svg'
import type { ApiResponse } from 'shared'
import './App.css'

const SERVER_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:3000"

function App() {
  const [data, setData] = createSignal<ApiResponse | undefined>()

  async function sendRequest() {
    try {
      const req = await fetch(`${SERVER_URL}/hello`)
      const res: ApiResponse = await req.json()
      setData(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div>
        <a href="https://github.com/stevedylandev/bhvr" target="_blank">
          <img src={beaver} class="logo" alt="beaver logo" />
        </a>
        <a href="https://github.com/stevedylandev/bhvr" target="_blank">
          <img src={beaver} class="logo" alt="beaver logo" />
        </a>
        <a href="https://github.com/stevedylandev/bhvr" target="_blank">
          <img src={beaver} class="logo" alt="beaver logo" />
        </a>
      </div>
      <h1>bhvrs</h1>
      <h2>Bun + Hono + Vite + <span style={{ 'text-decoration': 'line-through' }}>React</span> + Solid</h2>
      <p>A typesafe fullstack monorepo</p>
      <p>Modified from bhvr to use Solid instead of React</p>
      <div class="card">
        <div class='button-container'>
          <button onClick={sendRequest}>
            Call API
          </button>
          <a class='docs-link' target='_blank' href="https://bhvr.dev">Docs</a>
        </div>
        {data && (
          <pre class='response'>
            <code>
              Message: {data()?.message} <br />
              Success: {data()?.success.toString()}
            </code>
          </pre>
        )}
      </div>
    </>
  )
}

export default App
