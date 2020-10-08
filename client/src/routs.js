import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RegistrationPage } from './pages/RegistrationPage';
import { AuthPage } from './pages/AuthPage';
import { ManagerPage } from './pages/ManagerPage';

export const useRouters = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/manage" exact>
                    <ManagerPage />
                </Route>
                <Redirect to="/manage" />
            </Switch>
        )
    }
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