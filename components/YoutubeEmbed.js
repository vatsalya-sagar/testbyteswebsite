import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
        <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${embedId}&autoplay=1`}
            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/TQEdWTGHb2w?autoplay=1><img src=/images/youtube-thumbnail.jpg alt='Do not let Bugs destroy your software! Let us fix it'><span style='display: inline-block; background: red; color: #fff; width: 100px; border-radius: 20px; margin-left: auto; margin-right: auto; left: 0; right: 0; opacity: 0.9;'>▶</span></a>"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Do not let Bugs destroy your software! Let us fix it"
        ></iframe>
    </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;