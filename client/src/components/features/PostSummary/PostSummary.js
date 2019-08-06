import React from 'react';
import { PropTypes } from 'prop-types';
import './PostSummary.scss';
import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import CutText from '../../../utils/CutText/CutText';
import { Link } from 'react-router-dom';
import PostsList from '../PostsList/PostsList';

export default ({ id, title, content },maxLength) => { 
    const test =  () => { if (content.length < 1) return 'Error';
        if (content.length <= maxLength) return content;
        return content.substr(0, content.lastIndexOf(' ', maxLength)) + '...';
    }
    
    return (
    <article className="post-summary">
        <SmallTitle>{title}</SmallTitle>
        <HtmlBox>{CutText(test(), 250)}</HtmlBox>
        <Button variant="primary">
            <Link to={PostsList => ({ ...PostsList, pathname: "../PostSummary/PostSummary" })} /> Read More
        </Button>
    </article>
)};

// dodaj jeszcze onclick i przeniosi na liste, na singleposta z id na samym koncu /posts/123