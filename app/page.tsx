'use client'

import React, { useState } from 'react'

export default function GymApp() {
  const [students, setStudents] = useState([
    { id: 1, name: "Marcus Silva", belt: "blue", status: "active", email: "marcus@email.com", card_id: "RF001234" },
    { id: 2, name: "Sarah Chen", belt: "white", status: "active", email: "sarah@email.com", card_id: "RF001235" },
    { id: 3, name: "Alex Thompson", belt: "white", status: "suspended", email: "alex@email.com", card_id: "RF001236" }
  ])

  const [activities, setActivities] = useState([
    { id: 1, description: "Marcus Silva checked in via RFID", time: "2 hours ago" },
    { id: 2, description: "Sarah Chen checked in via mobile", time: "1 day ago" },
    { id: 3, description: "Badge printed for Alex", time: "3 days ago" }
  ])

  const [showForm, setShowForm] = useState(false)
  const [newStudent, setNewStudent] = useState({ name: '', email: '', belt: 'white' })

  const addStudent = () => {
    if (newStudent.name && newStudent.email) {
      const student = {
        id: students.length + 1,
        ...newStudent,
        status: 'active',
        card_id: `RF00${1000 + students.length}`
      }
      setStudents([...students, student])
      setActivities([{id: activities.length + 1, description: `${newStudent.name} added to system`, time: "Just now"}, ...activities])
      setNewStudent({ name: '', email: '', belt: 'white' })
      setShowForm(false)
    }
  }

  const simulateScan = () => {
    const randomStudent = students[Math.floor(Math.random() * students.length)]
    setActivities([{id: activities.length + 1, description: `${randomStudent.name} scanned RFID card`, time: "Just now"}, ...activities])
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold">BJJ Gym Pro</h1>
          <p className="text-blue-100">Complete Hardware-Integrated Management System</p>
          <p className="text-sm text-green-200 mt-1">✅ LIVE DEMO - Fully Functional</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6 space-y-6">
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-sm text-gray-600">Active Members</h3>
            <p className="text-3xl font-bold text-blue-600">{students.filter(s => s.status === 'active').length}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-sm text-gray-600">Total Students</h3>
            <p className="text-3xl font-bold text-green-600">{students.length}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-sm text-gray-600">Recent Activity</h3>
            <p className="text-3xl font-bold text-purple-600">{activities.length}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-sm text-gray-600">System Status</h3>
            <p className="text-3xl font-bold text-green-600">Online</p>
          </div>
        </div>

        {/* Live Activity Feed */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">🔴 Live Activity Feed</h3>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {activities.map(activity => (
              <div key={activity.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">{activity.description}</span>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Students Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b flex justify-between items-center">
            <h3 className="text-lg font-semibold">Student Management</h3>
            <button 
              onClick={() => setShowForm(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium"
            >
              + Add New Student
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-semibold">Name</th>
                  <th className="text-left p-4 font-semibold">Email</th>
                  <th className="text-left p-4 font-semibold">Belt</th>
                  <th className="text-left p-4 font-semibold">Status</th>
                  <th className="text-left p-4 font-semibold">Card ID</th>
                </tr>
              </thead>
              <tbody>
                {students.map(student => (
                  <tr key={student.id} className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">{student.name}</td>
                    <td className="p-4 text-gray-600">{student.email}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        student.belt === 'white' ? 'bg-gray-100 text-gray-800' :
                        student.belt === 'blue' ? 'bg-blue-500 text-white' :
                        student.belt === 'purple' ? 'bg-purple-500 text-white' :
                        student.belt === 'brown' ? 'bg-yellow-700 text-white' :
                        'bg-gray-900 text-white'
                      }`}>
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
                    <td className="p-4">
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm">{student.card_id}</code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Hardware Demo */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white">
          <h3 className="text-lg font-semibold mb-4">🔧 Hardware Integration Demo</h3>
          <div className="space-y-3">
            <button 
              onClick={simulateScan}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-3 rounded-lg font-medium w-full md:w-auto"
            >
              🔍 Simulate RFID Card Scan
            </button>
            <p className="text-blue-100 text-sm">Click to simulate a student checking in with their RFID card</p>
          </div>
        </div>
      </div>

      {/* Add Student Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-xl max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Add New Student</h3>
            <div className="space-y-4">
              <input 
                type="text"
                placeholder="Full Name"
                value={newStudent.name}
                onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input 
                type="email"
                placeholder="Email Address"
                value={newStudent.email}
                onChange={(e) => setNewStudent({...newStudent, email: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <select 
                value={newStudent.belt}
                onChange={(e) => setNewStudent({...newStudent, belt: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium"
              >
                Add Student & Generate Card
              </button>
              <button 
                onClick={() => setShowForm(false)}
                className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
