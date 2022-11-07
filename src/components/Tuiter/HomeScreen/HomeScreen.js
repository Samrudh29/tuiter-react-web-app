import HomeComponent from "./homecomponent";
import Navigationsidebar from ".././NavigationSidebar";
import PostList from ".././PostList";
import PostSummaryList from "../PostSummaryList";
import React from "react";
const HomeScreen = () => {
    return (
        <>
        <div className="d-block d-sm-none">
            <div className="row mt-2">
                <div className="col-2">
                    <Navigationsidebar activeParam="home" size="xs"/>
                </div>
                <div className="col-10"
                     style={{"position": "relative"}}>
                    <HomeComponent/>
                </div>
            </div>
        </div>
        <div className="d-none d-sm-block d-md-none">
            <div className="row mt-2">
                <div className="col-2">
                    <Navigationsidebar activeParam="home" size="sm"/>
                </div>
                <div className="col-10"
                     style={{"position": "relative"}}>
                    <HomeComponent/>
                </div>
            </div>
        </div>
        <div className="d-none d-md-block d-lg-none">
            <div className="row mt-2">
                <div className="col-2">
                    <Navigationsidebar activeParam="home" size="md"/>
                </div>
                <div className="col-10"
                     style={{"position": "relative"}}>
                    <HomeComponent/>
                </div>
            </div>
        </div>
        <div className="d-none d-lg-block d-xl-none">
            <div className="row mt-2">
                <div className="col-1">
                    <Navigationsidebar activeParam="home" size="lg"/>
                </div>
                <div className="col-7"
                     style={{"position": "relative"}}>
                    <HomeComponent/>
                </div>
                <div className="col-4">
                    <PostSummaryList/>
                </div>
            </div>
        </div>
        <div className="d-none d-xl-block d-xxl-none">
            <div className="row mt-2">
                <div className="col-2">
                    <Navigationsidebar activeParam="home" size="xxl"/>
                </div>
                <div className="col-6"
                     style={{"position": "relative"}}>
                    <HomeComponent/>
                </div>
                <div className="col-4">
                    <PostSummaryList/>
                </div>
            </div>
        </div>
        <div className="d-none d-xxl-block">
            <div className="row mt-2">
                <div className="col-2">
                    <Navigationsidebar activeParam="home" size="xxl"/>
                </div>
                <div className="col-6"
                     style={{"position": "relative"}}>
                    <HomeComponent/>
                </div>
                <div className="col-4">
                    <PostSummaryList/>
                </div>
            </div>
        </div>
    </>
    );
};
export default HomeScreen;
