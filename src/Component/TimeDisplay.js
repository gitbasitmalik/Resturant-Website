import {useContext} from 'react';
import {PrefsContext} from './UserPrefs.js.js';
function TimeDisplay(props){
 const userPrefs = useContext(PrefsContext);
 return (
 <>
 Your language preference is {userPrefs.language}
 <br />
 Your timezone is {userPrefs.timezone}
 </>
 );
}
export default TimeDisplay;