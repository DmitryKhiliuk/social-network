import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Profile} from "./Profile/Profile";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {MessagesContainer} from "./Messages/MessagesContainer";

export const Content = () => {
    return (
            <Routes>
                <Route path='/Profile' element={<Profile/>}/>
                <Route path='/Messages' element={<MessagesContainer/>}/>
                <Route path='/News' element={<News/>}/>
                <Route path='/Music' element={<Music/>}/>
                <Route path='/Settings' element={<Settings/>}/>
            </Routes>
    );
};

