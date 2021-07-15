import createErrorCenter from '../createErrorCenter';
import { ResponseError, ErrorPromptOption } from '../type';
import errorPrompt from './ErrorPrompt2';


export default createErrorCenter(errorPrompt)
export const ErrorPrompt = (error: ResponseError, option: ErrorPromptOption = {}) => errorPrompt({ error, ...option })