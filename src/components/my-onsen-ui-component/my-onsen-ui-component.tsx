import React from 'react';
import { Page, Toolbar, ToolbarButton, Icon, Button } from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

const MyOnsenUIComponent = () => {
    return (
        <div>
            <Toolbar>
                <div className="left">
                    <ToolbarButton onClick={() => alert('Parent Page')}>
                        <Icon icon="fa-arrow-left" />
                    </ToolbarButton>
                    <span style={{ marginLeft: 8 }}>Parent Page</span>
                </div>
                <div className="center">
                    <strong>Page Title</strong>
                </div>
                <div className="right">
                    <Button modifier="quiet" onClick={() => alert('Edit')}>
                        Edit
                    </Button>
                </div>
            </Toolbar>
        </div>
    );
};

export default MyOnsenUIComponent;
