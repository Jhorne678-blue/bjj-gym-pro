'use client'

import React, { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

// Simple icons as React components
const Users = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" /></svg>
const Activity = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
const Calendar = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
const AlertTriangle = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
const UserPlus = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
const Scan = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M12 12h-.01M12 12v4h1.01M9 16h.01" /></svg>

interface Student {
  id: number
  name: string
  email: string
  phone: string | null
  belt: string
  status: string
  membership_type: string
  member_since: string
  last_check_in: string | null
  attendance_rate: number
  churn_risk: number
  card_id: string | null
}

interface Activity {
  id: number
  type: string
  description: string
  created_at: string
}

export default function GymManagementApp() {
  const [students, setStudents] = useState<Student[]>([])
  const [activities, setActivities] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [showNewStudentForm, setShowNewStudentForm] = useState(false)

  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    phone: '',
    belt: 'white',
    membership_type: 'unlimited'
  })

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      // Load students
      const { data: studentsData } = await supabase
        .from('students')
        .select('*')
        .order('created_at', { ascending: false })

      setStudents(studentsData || [])

      // Load activities
      const { data: activitiesData } = await supabase
        .from('activity_log')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10)

      setActivities(activitiesData || [])
    } catch (error) {
      console.error('Error loading data:', error)
    } finally {
      setLoading(false)
    }
  }

  const addStudent = async () => {
    if (!newStudent.name || !newStudent.email) return

    try {
      const cardId = `RF${String(Date.now()).slice(-6)}`
      
      await supabase
        .from('students')
        .insert([{
          ...newStudent,
          card_id: cardId,
          gym_id: 1
        }])

      await supabase
        .from('activity_log')
        .insert([{
          type: 'student-added',
          description: `New student ${newStudent.name} added`,
          gym_id: 1
        }])

      setNewStudent({ name: '', email: '', phone: '', belt: 'white', membership_type: 'unlimited' })
      setShowNewStudentForm(false)
      loadData()
    } catch (error) {
      console.error('Error adding student:', error)
    }
  }

  const simulateCardScan = async () => {
    const randomStudent = students[Math.floor(Math.random() * students.length)]
    if (!randomStudent) return

    try {
      await supabase
        .from('activity_log')
        .insert([{
          type: 'check-in',
          description: `${randomStudent.name} checked in via RFID`,
          gym_id: 1
        }])

      loadData()
    } catch (error) {
      console.error('Error simulating scan:', error)
    }
  }

  const getBeltColor = (belt: string) => {
    const colors = {
      white: 'bg-gray-100 text-gray-800',
      blue: 'bg-blue-500 text-white',
      purple: 'bg-purple-500 text-white',
      brown: 'bg-yellow-700 text-white',
      black: 'bg-gray-900 text-white'
    }
    return colors[belt as keyof typeof colors] || 'bg-gray-200'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-16 w-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-lg font-semibold">Loading BJJ Gym Pro...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold">BJJ Gym Pro</h1>
          <p className="text-blue-100">Complete Hardware-Integrated Management System</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`py-4 px-2 font-medium text-sm flex items-center space-x-2 ${
                activeTab === 'dashboard' ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-500'
              }`}
            >
              <Activity />
              <span>Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab('students')}
              className={`py-4 px-2 font-medium text-sm flex items-center space-x-2 ${
                activeTab === 'students' ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-500'
              }`}
            >
              <Users />
              <span>Students</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Members</p>
                    <p className="text-3xl font-bold text-blue-600">{students.filter(s => s.status === 'active').length}</p>
                  </div>
                  <Users />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Students</p>
                    <p className="text-3xl font-bold text-green-600">{students.length}</p>
                  </div>
                  <Calendar />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Recent Activity</p>
                    <p className="text-3xl font-bold text-purple-600">{activities.length}</p>
                  </div>
                  <Activity />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">High Risk</p>
                    <p className="text-3xl font-bold text-red-600">{students.filter(s => s.churn_risk > 50).length}</p>
                  </div>
                  <AlertTriangle />
                </div>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Live Activity Feed</h3>
              <div className="space-y-3">
                {activities.map(activity => (
                  <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium text-sm">{activity.description}</p>
                    <p className="text-xs text-gray-500">{new Date(activity.created_at).toLocaleString()}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Demo Actions */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white">
              <h3 className="text-lg font-semibold mb-4">Hardware Demo</h3>
              <button 
                onClick={simulateCardScan}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg flex items-center space-x-2"
              >
                <Scan />
                <span>Simulate Card Scan</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === 'students' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Student Management</h2>
              <button 
                onClick={() => setShowNewStudentForm(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
              >
                <UserPlus />
                <span>Add Student</span>
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-4">Student</th>
                      <th className="text-left p-4">Belt</th>
                      <th className="text-left p-4">Status</th>
                      <th className="text-left p-4">Card ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map(student => (
                      <tr key={student.id} className="border-b">
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
                          <code className="bg-gray-100 px-2 py-1 rounded text-sm">{student.card_id || 'N/A'}</code>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Add Student Modal */}
            {showNewStudentForm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-xl max-w-md w-full mx-4">
                  <h3 className="text-lg font-semibold mb-4">Add New Student</h3>
                  <div className="space-y-4">
                    <input 
                      type="text"
                      placeholder="Full Name"
                      value={newStudent.name}
                      onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
                      className="w-full p-2 border rounded-lg"
                    />
                    <input 
                      type="email"
                      placeholder="Email"
                      value={newStudent.email}
                      onChange={(e) => setNewStudent({...newStudent, email: e.target.value})}
                      className="w-full p-2 border rounded-lg"
                    />
                    <input 
                      type="tel"
                      placeholder="Phone"
                      value={newStudent.phone}
                      onChange={(e) => setNewStudent({...newStudent, phone: e.target.value})}
                      className="w-full p-2 border rounded-lg"
                    />
                    <select 
                      value={newStudent.belt}
                      onChange={(e) => setNewStudent({...newStudent, belt: e.target.value})}
                      className="w-full p-2 border rounded-lg"
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
                      Add Student
                    </button>
                    <button 
                      onClick={() => setShowNewStudentForm(false)}
                      className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
