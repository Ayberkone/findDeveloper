import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { fetchJobs, Job } from '../../../services/apis'
import { RootState } from '../../store'

// Action Types
export const REDUX_DATA_TYPES = {
  FETCH_JOBS_REQUEST: 'FETCH_JOBS_REQUEST',
  FETCH_JOBS_SUCCESS: 'FETCH_JOBS_SUCCESS',
  FETCH_JOBS_FAILURE: 'FETCH_JOBS_FAILURE',
  SELECTED_JOB: 'SELECTED_JOB',
  FILTER_JOBS_BY_LOCATION: 'FILTER_JOBS_BY_LOCATION' // New action type for filtering
}

// Action Creators
export const fetchJobsRequest = () => ({ type: REDUX_DATA_TYPES.FETCH_JOBS_REQUEST })

export const fetchJobsSuccess = (jobs: Job[]) => ({
  type: REDUX_DATA_TYPES.FETCH_JOBS_SUCCESS,
  payload: jobs
})

export const fetchJobsFailure = (error: string) => ({
  type: REDUX_DATA_TYPES.FETCH_JOBS_FAILURE,
  payload: error
})

export const selectedJob = (selectedJob: Job) => ({
  type: REDUX_DATA_TYPES.SELECTED_JOB,
  payload: selectedJob
})

export const filterJobsByLocation = (location: string) => ({
  type: REDUX_DATA_TYPES.FILTER_JOBS_BY_LOCATION,
  payload: location
})

// Thunk Action
export const fetchJobsThunk = (): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
  dispatch(fetchJobsRequest())
  try {
    const jobs = await fetchJobs()
    dispatch(fetchJobsSuccess(jobs))
  } catch (error) {
    dispatch(fetchJobsFailure(error.message))
  }
}

export const dispatchSelectedJob = (job: Job): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  dispatch(selectedJob(job))
}
