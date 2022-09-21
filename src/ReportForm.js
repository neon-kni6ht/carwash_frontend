import React, {Component} from 'react';

import {
    Col,

    Nav,

    NavItem,
    NavLink, Row, TabContent, TabPane,

} from "reactstrap";
import classnames from "classnames";
import SingleWashReport from "./SingleWashReport";
import AllWashesReport from "./AllWashesReport";

export default class ReportForm extends Component{
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {

        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === '1' })}
                                 onClick={() => { this.toggle('1'); }}>
                            Заказы по мойкам
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={classnames({ active: this.state.activeTab === '2' })}
                                 onClick={() => { this.toggle('2'); }}>Все заказы</NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <SingleWashReport/>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <AllWashesReport/>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }

}