export interface Job {
  id: number;
  title: string;
  body: string;
  location: string;
}

export interface JobsState {
  jobList: Job[];
  filteredJobs: Job[];
  loading: boolean;
  error: string | null;
  selectedJob: Job | null;
}

const initialJobsState: JobsState = {
  jobList: [],
  filteredJobs: [],
  loading: false,
  error: null,
  selectedJob: null
}

type JobsAction =
  | { type: 'FETCH_JOBS_REQUEST' }
  | { type: 'FETCH_JOBS_SUCCESS'; payload: Job[] }
  | { type: 'FETCH_JOBS_FAILURE'; payload: string }
  | { type: 'FILTER_JOBS_BY_LOCATION'; payload: string }
  | { type: 'SELECTED_JOB'; payload: Job };

const reducer = (state = initialJobsState, action: JobsAction): JobsState => {
  switch (action.type) {
    case 'FETCH_JOBS_REQUEST':
      return { ...state, loading: true, error: null }
    case 'FETCH_JOBS_SUCCESS':
      return { ...state, loading: false, jobList: action.payload, filteredJobs: action.payload }
    case 'FETCH_JOBS_FAILURE':
      return { ...state, loading: false, error: action.payload }
    case 'FILTER_JOBS_BY_LOCATION':
      return { ...state, filteredJobs: state.jobList.filter(job => job.location === action.payload) }
    case 'SELECTED_JOB':
      return { ...state, selectedJob: action.payload }
    default:
      return state
  }
}

export default reducer
