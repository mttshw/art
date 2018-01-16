import React from 'react';
import styled from 'styled-components';
import workitems from './data/workitems'; // data
import WorkRepeater from './workrepeater';

const ArtList = styled.ul`
    list-style: none;
`;

const Work = () =>
    <ArtList>
        {Object.keys(workitems).map((key) =>
            <WorkRepeater id={workitems[key].id} title={workitems[key].title} image={workitems[key].image} artist={workitems[key].artist} description={workitems[key].description} prices={workitems[key].prices} />
        )}
    </ArtList>

export default Work;
