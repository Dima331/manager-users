import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { RegistrationPage } from './pages/RegistrationPage'
import { AuthPage } from './pages/AuthPage'

export const useRouters = isAuthenticated => {
    // if (isAuthenticated) {
    //     return (
    //         <Switch>
    //             <Route path="/manage" exact>
    //                 {/* <LinksPage /> */}
    //             </Route>
    //             <Redirect to="/manage" />
    //         </Switch>
    //     )
    // }
    return (
        <Switch>
            <Route path="/" exact>
                <RegistrationPage />
            </Route>
            <Route path="/auth" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}