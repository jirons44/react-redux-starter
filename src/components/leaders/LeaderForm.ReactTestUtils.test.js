import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import LeaderForm from './LeaderForm';

function setup(saving) {

    let props = {
        leader: {},
        saving: saving,
        errors: {},
        onSave: () => {},
        onChange: () => {}
    };

    let renderer = TestUtils.createRenderer();
    renderer.render(<LeaderForm {...props}/>);
    let output = renderer.getRenderOutput();

    return { props, output, renderer };

}


describe('LeaderForm via React Test Utils', () => {

    it('renders form and h1', () => {
        const { output } = setup();
        expect(output.type).toBe('form');

        let [ h1 ] = output.props.children;
        expect(h1.type).toBe('h1');
    });

    it('save button is labeled "Save" when not saving', () => {
        const { output } = setup(false);
        const submitButton = output.props.children[6];
        expect(submitButton.props.value).toBe('Save');

    });

    it('save button is labeled "Saving..." when saving', () => {
        const { output } = setup(true);
        const submitButton = output.props.children[6];
        expect(submitButton.props.value).toBe('Saving...');

    });

});




/*
*************
 'useful to avoid type so much...

 describe('some description', () => {

 });

 it('some description', () => {

 });


 */
