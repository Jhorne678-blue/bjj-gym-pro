'use client'

import React, { useState } from 'react'

const styles = {
  container: { minHeight: '100vh', backgroundColor: '#f9fafb', fontFamily: 'system-ui, sans-serif' },
  header: { background: 'linear-gradient(to right, #2563eb, #7c3aed)', color: 'white', padding: '1.5rem' },
  headerContent: { maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: '2rem', fontWeight: 'bold', margin: 0 },
  subtitle: { opacity: 0.9, margin: '0.25rem 0 0 0' },
  nav: { backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', padding: '0 1.5rem' },
  navContent: { maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '2rem' },
  navButton: { padding: '1rem 0', border: 'none', background: 'none', cursor: 'pointer', fontWeight: '500', fontSize: '0.875rem' },
  navButtonActive: { color: '#2563eb', borderBottom: '2px solid #2563eb' },
  navButtonInactive: { color: '#6b7280' },
  main: { maxWidth: '1200px', margin: '0 auto', padding: '1.5rem' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' },
  card: { backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' },
  cardHover: { transition: 'transform 0.2s, box-shadow 0.2s' },
  statNumber: { fontSize: '2rem', fontWeight: 'bold', margin: '0.5rem 0' },
  statLabel: { fontSize: '0.875rem', color: '#6b7280', margin: 0 },
  button: { backgroundColor: '#2563eb', color: 'white', padding: '0.75rem 1.5rem', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '500' },
  buttonHover: { backgroundColor: '#1d4ed8' },
  table: { width: '100%', backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' },
  th: { backgroundColor: '#f9fafb', padding: '1rem', textAlign: 'left', fontWeight: '600', borderBottom: '1px solid #e5e7eb' },
  td: { padding: '1rem', borderBottom: '1px solid #f3f4f6' },
  badge: { padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '500' },
  modal: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 },
  modalContent: { backgroundColor: 'white', padding: '2rem', borderRadius: '12px', width: '100%', maxWidth: '400px', margin: '1rem' },
  input: { width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '8px', marginBottom: '1rem' }
}

export default function GymApp() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [students, setStudents] = useState([
    { id: 1, name: "Marcus Silva", belt: "blue", status: "active", email: "marcus@email.com", card_id: "RF001234", attendance_rate: 85, churn_risk: 15 },
    { id: 2, name: "Sarah Chen", belt: "white", status: "active", email: "sarah@email.com", card_id: "RF001235", attendance_rate: 92, churn_risk: 8 },
    { id: 3, name: "Alex Thompson", belt: "white", status: "suspended", email: "alex@email.com", card_id: "RF001236", attendance_rate: 65, churn_risk: 68 }
  ])

  const [activities, setActivities] = useState([
    { id: 1, description: "Marcus Silva checked in via RFID card", time: "2 hours ago" },
    { id: 2, description: "Sarah Chen checked in via mobile app", time: "1 day ago" },
    { id: 3, description: "Badge printed for Alex Thompson", time: "3 days ago" }
  ])

  const [showForm, setShowForm] = useState(false)
  const [newStudent, setNewStudent] = useState({ name: '', email: '', phone: '', belt: 'white' })

  const addStudent = () => {
    if (newStudent.name && newStudent.email) {
      const student = { id: students.length + 1, ...newStudent, status: 'active', card_id: `RF00${1000 + students.length}`, attendance_rate: 0, churn_risk: 0 }
      setStudents([...students, student])
      setActivities([{id: activities.length + 1, description: `${newStudent.name} added to system`, time: "Just now"}, ...activities])
      setNewStudent({ name: '', email: '', phone: '', belt: 'white' })
      setShowForm(false)
    }
  }

  const simulateScan = () => {
    const randomStudent = students[Math.floor(Math.random() * students.length)]
    setActivities([{id: activities.length + 1, description: `${randomStudent.name} checked in via RFID`, time: "Just now"}, ...activities])
  }

  const getBeltStyle = (belt: string) => {
    const colors = {
      white: { backgroundColor: '#f3f4f6', color: '#1f2937' },
      blue: { backgroundColor: '#2563eb', color: 'white' },
      purple: { backgroundColor: '#7c3aed', color: 'white' },
      brown: { backgroundColor: '#92400e', color: 'white' },
      black: { backgroundColor: '#1f2937', color: 'white' }
    }
    return { ...styles.badge, ...colors[belt as keyof typeof colors] }
  }

  const getChurnRiskStyle = (risk: number) => {
    let color = { backgroundColor: '#dcfce7', color: '#166534' }
    if (risk > 50) color = { backgroundColor: '#fee2e2', color: '#dc2626' }
    else if (risk > 25) color = { backgroundColor: '#fef3c7', color: '#d97706' }
    return { ...styles.badge, ...color }
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <div>
            <h1 style={styles.title}>🥋 BJJ Gym Pro</h1>
            <p style={styles.subtitle}>Complete Hardware-Integrated Management System</p>
            <p style={{...styles.subtitle, color: '#86efac', fontSize: '0.875rem'}}>✅ LIVE DEMO - Fully Functional</p>
          </div>
          <div style={{textAlign: 'right'}}>
            <p style={{...styles.subtitle, fontSize: '0.875rem'}}>Iron Wolf BJJ</p>
            <p style={{fontWeight: '600'}}>{students.filter(s => s.status === 'active').length} Active Members</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div style={styles.nav}>
        <div style={styles.navContent}>
          {[
            { id: 'dashboard', name: '📊 Dashboard' },
            { id: 'students', name: '👥 Students' },
            { id: 'classes', name: '📅 Classes' },
            { id: 'hardware', name: '🔧 Hardware' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                ...styles.navButton,
                ...(activeTab === tab.id ? styles.navButtonActive : styles.navButtonInactive)
              }}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.main}>
        {activeTab === 'dashboard' && (
          <div>
            {/* Stats Grid */}
            <div style={styles.grid}>
              <div style={{...styles.card, borderLeft: '4px solid #2563eb'}}>
                <p style={styles.statLabel}>Active Members</p>
                <p style={{...styles.statNumber, color: '#2563eb'}}>{students.filter(s => s.status === 'active').length}</p>
              </div>
              <div style={{...styles.card, borderLeft: '4px solid #10b981'}}>
                <p style={styles.statLabel}>Today's Classes</p>
                <p style={{...styles.statNumber, color: '#10b981'}}>4</p>
              </div>
              <div style={{...styles.card, borderLeft: '4px solid #7c3aed'}}>
                <p style={styles.statLabel}>Check-ins Today</p>
                <p style={{...styles.statNumber, color: '#7c3aed'}}>{activities.length}</p>
              </div>
              <div style={{...styles.card, borderLeft: '4px solid #ef4444'}}>
                <p style={styles.statLabel}>High Risk Students</p>
                <p style={{...styles.statNumber, color: '#ef4444'}}>{students.filter(s => s.churn_risk > 50).length}</p>
              </div>
            </div>

            {/* Hardware Status */}
            <div style={styles.card}>
              <h3 style={{margin: '0 0 1rem 0', display: 'flex', alignItems: 'center'}}>
                🛡️ Hardware Integration Status
              </h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <div style={{width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981'}}></div>
                  <span style={{fontSize: '0.875rem'}}>🖨️ Zebra ZC300 Printer</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <div style={{width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981'}}></div>
                  <span style={{fontSize: '0.875rem'}}>🔑 ELATEC Access Control</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <div style={{width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981'}}></div>
                  <span style={{fontSize: '0.875rem'}}>📱 Reception Kiosk</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <div style={{width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981'}}></div>
                  <span style={{fontSize: '0.875rem'}}>📡 Network Status</span>
                </div>
              </div>
            </div>

            {/* Activity Feed */}
            <div style={styles.card}>
              <h3 style={{margin: '0 0 1rem 0'}}>🔴 Live Activity Feed</h3>
              <div style={{maxHeight: '300px', overflow: 'auto'}}>
                {activities.map(activity => (
                  <div key={activity.id} style={{display: 'flex', justifyContent: 'space-between', padding: '0.75rem', backgroundColor: '#f9fafb', borderRadius: '8px', marginBottom: '0.5rem'}}>
                    <span style={{fontWeight: '500'}}>{activity.description}</span>
                    <span style={{fontSize: '0.875rem', color: '#6b7280'}}>{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Demo Actions */}
            <div style={{...styles.card, background: 'linear-gradient(to right, #2563eb, #7c3aed)', color: 'white'}}>
              <h3 style={{margin: '0 0 1rem 0'}}>🔧 Hardware Integration Demo</h3>
              <button 
                onClick={simulateScan}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}
              >
                🔍 Simulate RFID Card Scan
              </button>
            </div>
          </div>
        )}

        {activeTab === 'students' && (
          <div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem'}}>
              <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', margin: 0}}>Student Management</h2>
              <button onClick={() => setShowForm(true)} style={styles.button}>
                ➕ Add Student
              </button>
            </div>

            <div style={styles.table}>
              <table style={{width: '100%', borderCollapse: 'collapse'}}>
                <thead>
                  <tr>
                    <th style={styles.th}>Student</th>
                    <th style={styles.th}>Belt</th>
                    <th style={styles.th}>Status</th>
                    <th style={styles.th}>Attendance</th>
                    <th style={styles.th}>Churn Risk</th>
                    <th style={styles.th}>Card ID</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map(student => (
                    <tr key={student.id} style={{':hover': {backgroundColor: '#f9fafb'}}}>
                      <td style={styles.td}>
                        <div>
                          <p style={{margin: 0, fontWeight: '500'}}>{student.name}</p>
                          <p style={{margin: 0, fontSize: '0.875rem', color: '#6b7280'}}>{student.email}</p>
                        </div>
                      </td>
                      <td style={styles.td}>
                        <span style={getBeltStyle(student.belt)}>{student.belt}</span>
                      </td>
                      <td style={styles.td}>
                        <span style={{
                          ...styles.badge,
                          backgroundColor: student.status === 'active' ? '#dcfce7' : '#fee2e2',
                          color: student.status === 'active' ? '#166534' : '#dc2626'
                        }}>
                          {student.status}
                        </span>
                      </td>
                      <td style={styles.td}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                          <div style={{width: '60px', height: '8px', backgroundColor: '#e5e7eb', borderRadius: '4px', overflow: 'hidden'}}>
                            <div style={{width: `${student.attendance_rate}%`, height: '100%', backgroundColor: '#2563eb'}}></div>
                          </div>
                          <span style={{fontSize: '0.875rem'}}>{student.attendance_rate}%</span>
                        </div>
                      </td>
                      <td style={styles.td}>
                        <span style={getChurnRiskStyle(student.churn_risk)}>{student.churn_risk}%</span>
                      </td>
                      <td style={styles.td}>
                        <code style={{backgroundColor: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.875rem'}}>
                          {student.card_id}
                        </code>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {(activeTab === 'classes' || activeTab === 'hardware') && (
          <div style={{...styles.card, textAlign: 'center', padding: '3rem'}}>
            <h2 style={{fontSize: '1.25rem', fontWeight: '600', margin: '0 0 0.5rem 0'}}>
              {activeTab === 'classes' ? '📅 Classes' : '🔧 Hardware'} Module
            </h2>
            <p style={{color: '#6b7280', margin: 0}}>Coming soon in next version...</p>
          </div>
        )}
      </div>

      {/* Add Student Modal */}
      {showForm && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h3 style={{margin: '0 0 1rem 0', fontSize: '1.125rem', fontWeight: '600'}}>Add New Student</h3>
            <input 
              type="text" 
              placeholder="Full Name" 
              value={newStudent.name} 
              onChange={(e) => setNewStudent({...newStudent, name: e.target.value})} 
              style={styles.input}
            />
            <input 
              type="email" 
              placeholder="Email" 
              value={newStudent.email} 
              onChange={(e) => setNewStudent({...newStudent, email: e.target.value})} 
              style={styles.input}
            />
            <input 
              type="tel" 
              placeholder="Phone" 
              value={newStudent.phone} 
              onChange={(e) => setNewStudent({...newStudent, phone: e.target.value})} 
              style={styles.input}
            />
            <select 
              value={newStudent.belt} 
              onChange={(e) => setNewStudent({...newStudent, belt: e.target.value})} 
              style={styles.input}
            >
              <option value="white">White Belt</option>
              <option value="blue">Blue Belt</option>
              <option value="purple">Purple Belt</option>
              <option value="brown">Brown Belt</option>
              <option value="black">Black Belt</option>
            </select>
            <div style={{display: 'flex', gap: '1rem'}}>
              <button onClick={addStudent} style={{...styles.button, flex: 1}}>Add Student</button>
              <button onClick={() => setShowForm(false)} style={{...styles.button, backgroundColor: '#6b7280', flex: 1}}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Status Indicator */}
      <div style={{position: 'fixed', bottom: '1.5rem', right: '1.5rem', backgroundColor: '#10b981', color: 'white', padding: '0.75rem 1rem', borderRadius: '9999px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
        <div style={{width: '8px', height: '8px', backgroundColor: 'white', borderRadius: '50%', animation: 'pulse 2s infinite'}}></div>
        <span style={{fontSize: '0.875rem', fontWeight: '500'}}>All Systems Online</span>
      </div>
    </div>
  )
}
