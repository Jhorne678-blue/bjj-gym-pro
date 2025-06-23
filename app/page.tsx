'use client'

import React, { useState } from 'react'

// Simple icon components
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

const Scan = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M12 12h-.01M12 12v4h1.01M9 16h.01" />
  </svg>
)

const Settings = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const Shield = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const CheckCircle = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

export default function GymApp() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [students, setStudents] = useState([
    { 
      id: 1, 
      name: "Marcus Silva", 
      belt: "blue", 
      status: "active", 
      email: "marcus@email.com", 
      card_id: "RF001234",
      phone: "(555) 123-4567",
      attendance_rate: 85,
      churn_risk: 15,
      last_check_in: "2025-06-22 07:30"
    },
    { 
      id: 2, 
      name: "Sarah Chen", 
      belt: "white", 
      status: "active", 
      email: "sarah@email.com", 
      card_id: "RF001235",
      phone: "(555) 234-5678",
      attendance_rate: 92,
      churn_risk: 8,
      last_check_in: "2025-06-21 18:45"
    },
    { 
      id: 3, 
      name: "Alex Thompson", 
      belt: "white", 
      status: "suspended", 
      email: "alex@email.com", 
      card_id: "RF001236",
      phone: "(555) 567-8901",
      attendance_rate: 65,
      churn_risk: 68,
      last_check_in: "2025-06-18 19:15"
    }
  ])

  const [activities, setActivities] = useState([
    { id: 1, type: "check-in", description: "Marcus Silva checked in via RFID card", time: "07:30", method: "RFID Card" },
    { id: 2, type: "badge-print", description: "New badge printed for Sarah Chen", time: "07:25", method: "Kiosk" },
    { id: 3, type: "check-in", description: "Sarah Chen checked in via mobile app", time: "07:20", method: "Mobile App" },
    { id: 4, type: "access-denied", description: "Alex Thompson access denied", time: "07:15", method: "RFID Card" }
  ])

  const [showForm, setShowForm] = useState(false)
  const [showBadgePrinting, setShowBadgePrinting] = useState(false)
  const [newStudent, setNewStudent] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    belt: 'white',
    membership_type: 'unlimited',
    emergency_contact: '',
    medical_notes: ''
  })

  const addStudent = () => {
    if (newStudent.name && newStudent.email) {
      const student = {
        id: students.length + 1,
        ...newStudent,
        status: 'active',
        card_id: `RF00${1000 + students.length}`,
        attendance_rate: 0,
        churn_risk: 0,
        last_check_in: null
      }
      setStudents([...students, student])
      setActivities([{
        id: activities.length + 1, 
        type: "student-added",
        description: `New student ${newStudent.name} added to system`, 
        time: "Just now",
        method: "Admin"
      }, ...activities])
      
      setNewStudent({ 
        name: '', 
        email: '', 
        phone: '',
        belt: 'white',
        membership_type: 'unlimited',
        emergency_contact: '',
        medical_notes: ''
      })
      setShowForm(false)
      
      // Simulate badge printing
      setTimeout(() => {
        setShowBadgePrinting(true)
        setTimeout(() => setShowBadgePrinting(false), 3000)
      }, 500)
    }
  }

  const simulateScan = () => {
    const randomStudent = students[Math.floor(Math.random() * students.length)]
    setActivities([{
      id: activities.length + 1, 
      type: "check-in",
      description: `${randomStudent.name} checked in via RFID card`, 
      time: "Just now",
      method: "RFID Card"
    }, ...activities])
  }

  const getBeltColor = (belt: string) => {
    const colors = {
      white: 'bg-gray-100 text-gray-800 border-gray-300',
      blue: 'bg-blue-500 text-white',
      purple: 'bg-purple-500 text-white',
      brown: 'bg-yellow-700 text-white',
      black: 'bg-gray-900 text-white'
    }
    return colors[belt as keyof typeof colors] || 'bg-gray-200'
  }

  const getChurnRiskColor = (risk: number) => {
    if (risk > 50) return 'text-red-600 bg-red-100'
    if (risk > 25) return 'text-yellow-600 bg-yellow-100'
    return 'text-green-600 bg-green-100'
  }

  const Dashboard = () => (
    <div className="space-y-6">
      {/* Quick Stats */}
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
              <p className="text-3xl font-bold text-purple-600">{activities.filter(a => a.type === 'check-in').length}</p>
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

      {/* Live Activity Feed & Alerts */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Activity className="mr-2 h-5 w-5" />
            Live Activity Feed
          </h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {activities.map(activity => (
              <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  {activity.type === 'check-in' && <CheckCircle className="h-4 w-4 text-green-500" />}
                  {activity.type === 'badge-print' && <Activity className="h-4 w-4 text-blue-500" />}
                  {activity.type === 'student-added' && <UserPlus className="h-4 w-4 text-purple-500" />}
                  <div>
                    <p className="font-medium text-sm">{activity.description}</p>
                    <p className="text-xs text-gray-600">{activity.method}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5" />
            Attention Required
          </h3>
          <div className="space-y-3">
            {students.filter(s => s.churn_risk > 50).map(student => (
              <div key={student.id} className="p-3 bg-red-50 rounded-lg border border-red-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-red-800">{student.name}</p>
                    <p className="text-sm text-red-600">High churn risk: {student.churn_risk}%</p>
                  </div>
                  <button className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">
                    Contact
                  </button>
                </div>
              </div>
            ))}
            
            <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-yellow-800">System Recommendation</p>
                  <p className="text-sm text-yellow-600">Consider adding 5:30 PM fundamentals class</p>
                </div>
                <button className="bg-yellow-600 text-white px-3 py-1 rounded text-sm hover:bg-yellow-700">
                  Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Actions */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white">
        <h3 className="text-lg font-semibold mb-4">Hardware Integration Demo</h3>
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={simulateScan}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg flex items-center space-x-2 transition-all"
          >
            <Scan className="h-4 w-4" />
            <span>Simulate Card Scan</span>
          </button>
          <button 
            onClick={() => {
              setShowBadgePrinting(true)
              setTimeout(() => setShowBadgePrinting(false), 3000)
            }}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg flex items-center space-x-2 transition-all"
          >
            <Activity className="h-4 w-4" />
            <span>Test Badge Printer</span>
          </button>
        </div>
      </div>
    </div>
  )

  const StudentsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Student Management</h2>
        <button 
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
        >
          <UserPlus className="h-4 w-4" />
          <span>Add New Student</span>
        </button>
      </div>

      {/* Student List */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold">Student</th>
                <th className="text-left p-4 font-semibold">Belt</th>
                <th className="text-left p-4 font-semibold">Status</th>
                <th className="text-left p-4 font-semibold">Last Check-in</th>
                <th className="text-left p-4 font-semibold">Attendance</th>
                <th className="text-left p-4 font-semibold">Churn Risk</th>
                <th className="text-left p-4 font-semibold">Card ID</th>
                <th className="text-left p-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr key={student.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">
                    <div>
                      <p className="font-medium">{student.name}</p>
                      <p className="text-sm text-gray-600">{student.email}</p>
                      <p className="text-xs text-gray-500">{student.phone}</p>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border-2 ${getBeltColor(student.belt)}`}>
                      {student.belt}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      student.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm">
                    {student.last_check_in || 'Never'}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{width: `${student.attendance_rate}%`}}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{student.attendance_rate}%</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getChurnRiskColor(student.churn_risk)}`}>
                      {student.churn_risk}%
                    </span>
                  </td>
                  <td className="p-4">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">{student.card_id}</code>
                  </td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 p-1">
                        <Settings className="h-4 w-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-800 p-1">
                        <Activity className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: Activity },
    { id: 'students', name: 'Students', icon: Users },
    { id: 'classes', name: 'Classes', icon: Calendar },
    { id: 'hardware', name: 'Hardware', icon: Shield }
  ]

  const renderTabContent = () => {
    switch(activeTab) {
      case 'dashboard': return <Dashboard />
      case 'students': return <StudentsTab />
      case 'classes': return <div className="p-8 text-center text-gray-500">Classes module coming soon...</div>
      case 'hardware': return <div className="p-8 text-center text-gray-500">Hardware module coming soon...</div>
      default: return <Dashboard />
    }
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
            {tabs.map(tab => {
              const IconComponent = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
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
        {renderTabContent()}
      </div>

      {/* Add Student Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Add New Student</h3>
            <div className="space-y-4">
              <input 
                type="text"
                placeholder="Full Name"
                value={newStudent.name}
                onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="email"
                placeholder="Email"
                value={newStudent.email}
                onChange={(e) => setNewStudent({...newStudent, email: e.target.value})}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="tel"
                placeholder="Phone"
                value={newStudent.phone}
                onChange={(e) => setNewStudent({...newStudent, phone: e.target.value})}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <select 
                value={newStudent.belt}
                onChange={(e) => setNewStudent({...newStudent, belt: e.target.value})}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="white">White Belt</option>
                <option value="blue">Blue Belt</option>
                <option value="purple">Purple Belt</option>
                <option value="brown">Brown Belt</option>
                <option value="black">Black Belt</option>
              </select>
            </div>
            <div className="flex space-x-4 mt-6">
              <button 
                onClick={addStudent}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Add Student & Print Badge
              </button>
              <button 
                onClick={() => setShowForm(false)}
                className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
