import React from 'react';
import styled from 'styled-components';

const ArtItem = styled.li`
    width: 200px;

    img {
        width: 100%;
    }
`;

const WorkRepeater = ({ id, title, artist, image, description, prices }) =>
    <ArtItem key={id}>
        <img src={image} />
        <h2><a href={'/work/'+id}>{title}</a></h2>
        <p>{description}</p>
    </ArtItem>

export default WorkRepeater;
