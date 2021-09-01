import React from 'react';
import { Media } from 'reactstrap';

function RenderLeader(props) {

    return (
        <Media className="my-5">
            <Media left href="#">
                <Media object src={props.image} alt={props.name} />
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