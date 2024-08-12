import { ReactNode } from 'react'
import api from './api'

export interface Job {
  id: number
  title: string
  company: string
  location: string
	details: string | ReactNode
	criterias: string | ReactNode
	process?: string | ReactNode
}

export const fetchJobs = async (): Promise<Job[]> => {
  const response = await api.get<Job[]>('/jobs')
  return response.data
}
