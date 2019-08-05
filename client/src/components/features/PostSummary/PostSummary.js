import React from 'react';
import { PropTypes } from 'prop-types';
import './PostSummary.scss';
import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import CutText from '../../../utils/CutText/CutText';

export default ({ id, title, content },maxLength) => { 
    const test =  () => { if (content.length < 1) return 'Error';
        if (content.length <= maxLength) return content;
        return content.substr(0, content.lastIndexOf(' ', maxLength)) + '...';
    }
    
    const AddTripButton = (props) => {
       handleCLick(e) {
            e.preventDefault();
            console.log('The link was clicked.');
       }
    }
    return (
    <article className="post-summary">
        <SmallTitle>{title}</SmallTitle>
        <HtmlBox>{CutText(test(), 250)}</HtmlBox>
        <Button variant="primary" onClick={props.AddTripButton}> 
            Read more
        </Button>
    </article>
)};

// dodaj jeszcze onclick i przeniosi na liste, na singleposta z id na samym koncu /posts/123