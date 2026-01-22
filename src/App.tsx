import {JSX} from 'react';
import {ShowApp} from "./ui/showApp";
import {ShowError} from "./ui/showError";

function App(): JSX.Element {
    try
    {
        return ShowApp();
    }
    catch (error)
    {
        return ShowError(error);
    }
}

export default App;
