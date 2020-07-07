import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './components/Home/HomePage'
import ContentPage from './components/Editor/ContentPage'
import Editor from './components/Editor/Editor'
import EntryDetail from './components/Home/EntryDetail'
import LoginPage from './components/auth/LoginPage'

export default () => <Switch>
     <Route exact path="/" component={HomePage} />
     <Route exact path="/content" component={ContentPage} />
     <Route path="/content/:id" component={Editor} />
     <Route path="/login" component={LoginPage} />
     <Route path="/:id" component={EntryDetail} />
</Switch>