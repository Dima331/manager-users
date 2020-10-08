import React from 'react'
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
                    style={{ marginRight: '20px'}}
                ><ShieldFillX color="#00ff09" size={34} /></Button>
                <Button
                    variant="primary"
                    onClick={unBlock}
                    style={{ marginRight: '20px'}}
                ><ShieldFillCheck color="yellow" size={34}/></Button>
                <Button
                    variant="primary"
                    onClick={deleteUser}
                    style={{ marginRight: '20px'}}
                ><ArchiveFill   color="#fff" size={34}/></Button>
                
            </Col>
        </Row>
    )
}