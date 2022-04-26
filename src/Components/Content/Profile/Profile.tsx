import React from 'react';
import {ProfileInfo} from "./ProfileInfo";
import {PostsContainer} from "./PostContainer";

export const Profile = () => {
    return (
        <div >
            <ProfileInfo/>
            <PostsContainer/>
        </div>
    );
};

