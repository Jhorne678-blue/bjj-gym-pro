'use client'

import React, { useState } from 'react'

// Icons
const Users = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
)

const Activity = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

const Calendar = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const AlertTriangle = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
  </svg>
)

const UserPlus = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
  </svg>
)

const Shield = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const Settings = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const Scan = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M12 12h-.01M12 12v4h1.01M9 16h.01" />
  </svg>
)

export default function GymApp() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [students, setStudents] = useState([
    { id: 1, name: "Marcus Silva", belt: "blue", status: "active", email: "marcus@email.com", card_id: "RF001234", phone: "(555) 123-4567", attendance_rate: 85, churn_risk: 15 },
    { id: 2, name: "Sarah Chen", belt: "white", status: "active", email: "sarah@email.com", card_id: "RF001235", phone: "(555) 234-5678", attendance_rate: 92, churn_risk: 8 },
    { id: 3, name: "Alex Thompson", belt: "white", status: "suspended", email: "alex@email.com", card_id: "RF001236", phone: "(555) 567-8901", attendance_rate: 65, churn_risk: 68 }
  ])

  const [activities, setActivities] = useState([
    { id: 1, description: "Marcus Silva checked in via RFID card", time: "2 hours ago" },
    { id: 2, description: "Sarah Chen checked in via mobile app", time: "1 day ago" },
    { id: 3, description: "New badge printed for Alex Thompson", time: "3 days ago" }
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

  const getBeltColor = (belt: string) => {
    const colors = { white: 'bg-gray-100 text-gray-800', blue: 'bg-blue-500 text-white', purple: 'bg-purple-500 text-white', brown: 'bg-yellow-700 text-white', black: 'bg-gray-900 text-white' }
    return colors[belt as keyof typeof colors] || 'bg-gray-200'
  }

  const getChurnRiskColor = (risk: number) => {
    if (risk > 50) return 'text-red-600 bg-red-100'
    if (risk > 25) return 'text-yellow-600 bg-yellow-100'
    return 'text-green-600 bg-green-100'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                <Shield className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">BJJ Gym Pro</h1>
                <p className="text-blue-100">Complete Hardware-Integrated Management System</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-blue-100">Iron Wolf BJJ</p>
                <p className="font-semibold">{students.filter(s => s.status === 'active').length} Active Members</p>
              </div>
              <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                <Settings className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex space-x-8">
            {[
              { id: 'dashboard', name: 'Dashboard', icon: Activity },
              { id: 'students', name: 'Students', icon: Users },
              { id: 'classes', name: 'Classes', icon: Calendar },
              { id: 'hardware', name: 'Hardware', icon: Shield }
            ].map(tab => {
              const IconComponent = tab.icon
              return (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`py-4 px-2 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${activeTab === tab.id ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
                  <IconComponent className="h-4 w-4" />
                  <span>{tab.name}</span>
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Members</p>
                    <p className="text-3xl font-bold text-blue-600">{students.filter(s => s.status === 'active').length}</p>
                  </div>
                  <Users className="h-12 w-12 text-blue-500" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Today's Classes</p>
                    <p className="text-3xl font-bold text-green-600">4</p>
                  </div>
                  <Calendar className="h-12 w-12 text-green-500" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Check-ins Today</p>
                    <p className="text-3xl font-bold text-purple-600">{activities.length}</p>
                  </div>
                  <Activity className="h-12 w-12 text-purple-500" />
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">High Risk Students</p>
                    <p className="text-3xl font-bold text-red-600">{students.filter(s => s.churn_risk > 50).length}</p>
                  </div>
                  <AlertTriangle className="h-12 w-12 text-red-500" />
                </div>
              </div>
            </div>

            {/* Hardware Status */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Hardware Integration Status
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm">Zebra ZC300 Printer</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm">ELATEC Access Control</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm">Reception Kiosk</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm">Network Status</span>
                </div>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Live Activity Feed</h3>
              <div className="space-y-3">
                {activities.map(activity => (
                  <div key={activity.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">{activity.description}</span>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Demo Actions */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white">
              <h3 className="text-lg font-semibold mb-4">Hardware Integration Demo</h3>
              <button onClick={simulateScan} className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg flex items-center space-x-2">
                <Scan className="h-4 w-4" />
                <span>Simulate RFID Card Scan</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === 'students' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Student Management</h2>
              <button onClick={() => setShowForm(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                <UserPlus className="h-4 w-4" />
                <span>Add Student</span>
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4">Student</th>
                    <th className="text-left p-4">Belt</th>
                    <th className="text-left p-4">Status</th>
                    <th className="text-left p-4">Attendance</th>
                    <th className="text-left p-4">Churn Risk</th>
                    <th className="text-left p-4">Card ID</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map(student => (
                    <tr key={student.id} className="border-b hover:bg-gray-50">
                      <td className="p-4">
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-gray-600">{student.email}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${getBeltColor(student.belt)}`}>
                          {student.belt}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${student.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {student.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{width: `${student.attendance_rate}%`}}></div>
                          </div>
                          <span className="text-sm">{student.attendance_rate}%</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${getChurnRiskColor(student.churn_risk)}`}>
                          {student.churn_risk}%
                        </span>
                      </td>
                      <td className="p-4">
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm">{student.card_id}</code>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {(activeTab === 'classes' || activeTab === 'hardware') && (
          <div className="p-8 text-center text-gray-500">
            <h2 className="text-xl font-semibold mb-2">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Module</h2>
            <p>Coming soon in next version...</p>
          </div>
        )}
      </div>

      {/* Add Student Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Add New Student</h3>
            <div className="space-y-4">
              <input type="text" placeholder="Full Name" value={newStudent.name} onChange={(e) => setNewStudent({...newStudent, name: e.target.value})} className="w-full p-3 border rounded-lg" />
              <input type="email" placeholder="Email" value={newStudent.email} onChange={(e) => setNewStudent({...newStudent, email: e.target.value})} className="w-full p-3 border rounded-lg" />
              <input type="tel" placeholder="Phone" value={newStudent.phone} onChange={(e) => setNewStudent({...newStudent, phone: e.target.value})} className="w-full p-3 border rounded-lg" />
              <select value={newStudent.belt} onChange={(e) => setNewStudent({...newStudent, belt: e.target.value})} className="w-full p-3 border rounded-lg">
                <option value="white">White Belt</option>
                <option value="blue">Blue Belt</option>
                <option value="purple">Purple Belt</option>
                <option value="brown">Brown Belt</option>
                <option value="black">Black Belt</option>
              </select>
            </div>
            <div className="flex space-x-4 mt-6">
              <button onClick={addStudent} className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">Add Student</button>
              <button onClick={() => setShowForm(false)} className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Status Indicator */}
      <div className="fixed bottom-6 right-6">
        <div className="bg-green-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">All Systems Online</span>
        </div>
      </div>
    </div>
  )
}
