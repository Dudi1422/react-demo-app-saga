import { SubmissionError } from 'redux-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values) {
    console.log('submit')
  return sleep(1).then(() => {
    // simulate server latency
    
  })
}

export default submit