import React, { useContext } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { ArchiveFill } from 'react-bootstrap-icons';
import { ShieldFillX } from 'react-bootstrap-icons';
import { ShieldFillCheck } from 'react-bootstrap-icons';

export const ToolBar = ({deleteUser, block, unBlock}) => {

    return (
        <Row className="justify-content-md-center">
            <Col xs lg="10" className=" mt-5">
                <Button
                    variant="primary"
                    onClick={block}
                ><ShieldFillX color="#00ff09" size={34} /></Button>
                <Button
                    variant="primary"
                    onClick={unBlock}
                ><ShieldFillCheck color="#00ff09" size={34}/></Button>
                <Button
                    variant="primary"
                    onClick={deleteUser}
                ><ArchiveFill   color="#00ff09" size={34}/></Button>
                
            </Col>
        </Row>
    )
}