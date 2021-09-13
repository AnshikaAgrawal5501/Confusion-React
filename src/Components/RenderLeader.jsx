import React from 'react';
import { Media } from 'reactstrap';
import { baseUrl } from '../Shared/baseUrl';

function RenderLeader(props) {

    return (
        <Media className="my-5">
            <Media left href="#">
                <Media object src={baseUrl + props.image} alt={props.name} />
            </Media>
            
            <Media body className="ml-5">
                <Media heading>
                    {props.name}
                </Media>

                {props.designation}
                <br />
                <br />
                {props.description}
            </Media>
        </Media>
  );
}

export default RenderLeader;