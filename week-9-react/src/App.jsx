import './App.css'

function App() {
  return (
    <div style={styles.container}>
      <Card>
        Hi there
      </Card>

      <Card>
        <div style={{ color: "#4ade80", fontWeight: "500" }}>
          Hi there
        </div>
      </Card>
    </div>
  )
}

function Card({ children }) {
  return (
    <div style={styles.card}>
      {children}
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #1e293b, #0f172a)",
    fontFamily: "sans-serif"
  },

  card: {
    backgroundColor: "#111827",
    borderRadius: "14px",
    color: "white",
    padding: "25px 35px",
    margin: "10px",
    fontSize: "18px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer"
  }
}

export default App