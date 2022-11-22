import {React, useState} from "react";
import {useDispatch} from "react-redux";
import "../ExploreScreen/explore.css"
import TuitStats from "../tuit-stats/tuit-stats";
import {createTuit, deleteTuit, findAllTuits, updateTuit} from "../../../actions/tuits-actions";

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit'});
    return (
            <div className="mt-2 d-flex flex-row border-bottom border-secondary">
                <div className="wd-topic d-flex flex-column ps-2">
                    <img src={tuit['logoImage']} className="rounded-pill"></img>
                </div>
                <div className="ps-3 me-3" style={{width:'100%'}}>
                    <label className="wd-fg-color-white h6 fw-bold">{tuit.postedBy.username}
                        {tuit.verified && <i className="ms-1 fas fa-check-circle"></i>}</label>
                    <label className="wd-topic wd-fg-color-light-gray">&nbsp;@{tuit.handle}</label>
                    <i className="fa fa-pull-right" onClick={() => deleteTuit(dispatch, tuit)}>&#xf00d;</i>
                    <br></br>
                    <label className="wd-fg-color-white h6" onClick={() => deleteTuit(
                        dispatch, tuit)}>{tuit.tuit}</label>
                    {
                        tuit.attachments && tuit.attachments.image &&
                        <img src={tuit.attachments.image}
                             className="mt-2 wd-rounded-borders"
                             style={{width: "100%"}}/>
                    }
                    {
                        tuit.attachments && tuit.attachments.video &&
                        <iframe width="100%" height="350px"
                                className="mt-2 wd-rounded-borders"
                                style={{width: "100%"}}
                                src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    }
                    <div>
                        <i className="far fa-comment"></i>
                        <label className="wd-comment-text me-3">&nbsp;&nbsp;{tuit.stats.comments}</label>
                        <i className="fas fa-retweet ps-3"></i>
                        <label className="wd-comment-text me-3">&nbsp;&nbsp;{tuit.stats.retuits}</label>
                        <label>
                            <i onClick={() => updateTuit(dispatch, {
                                ...tuit,
                                likes: tuit.likes + 1
                            })} className="far fa-thumbs-up ms-3 me-2"></i>
                            {tuit.likes}
                        </label>
                        <label>

                            <i onClick={() => updateTuit(dispatch, {
                                ...tuit,
                                dislikes: tuit.dislikes + 1
                            })} className="far fa-thumbs-down ms-3 me-2"></i>
                            {tuit.dislikes}
                        </label>
                        <i className="fas fa-external-link-alt ps-4"></i>
                    </div>
                    <br></br>

                </div>
            </div>
    );
}

export default TuitListItem;