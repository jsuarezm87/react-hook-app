import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';


describe('Pruebas en <RealExampleRef />', () => {     

    const wrapper = shallow( <RealExampleRef />);
    
    test('debe de mostrarse correntamente ', () => { 

        expect( wrapper ).toMatchSnapshot();  
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( false );  

    });


    test('debe de mostrarse el componente <MultipleCustomHooks />', () => { 

        wrapper.find('button').simulate('click');
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( true );

    });
    
    
});