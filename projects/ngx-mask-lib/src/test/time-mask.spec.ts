import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { TestMaskComponent } from './utils/test-component.component';
import { equal } from './utils/test-functions.component';
import { provideNgxMask } from '../lib/ngx-mask.providers';
import { NgxMaskDirective } from '../lib/ngx-mask.directive';

describe('Directive: Mask (Time)', () => {
    let fixture: ComponentFixture<TestMaskComponent>;
    let component: TestMaskComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestMaskComponent],
            imports: [ReactiveFormsModule, NgxMaskDirective],
            providers: [provideNgxMask()],
        });
        fixture = TestBed.createComponent(TestMaskComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('empty', () => {
        component.mask = 'Hh:m0:s0';
        equal('', '', fixture);
    });

    it('Hours', () => {
        component.mask = 'Hh:m0:s0';
        equal('20', '20', fixture);
    });

    it('Hours', () => {
        component.mask = 'Hh:m0:s0';
        equal('03', '03', fixture);
    });

    it('Hours', () => {
        component.mask = 'Hh:m0:s0';
        equal('730', '7:30', fixture);
    });

    it('Hours', () => {
        component.showMaskTyped = true;
        component.mask = 'Hh:m0';
        equal('3__:__', '3_:__', fixture);
        equal('33:__', '3:3_', fixture);
        equal('33__:__', '3:3_', fixture);
    });

    it('Hours (lead zero)', () => {
        component.showMaskTyped = true;
        component.leadZeroDateTime = true;
        component.mask = 'Hh:m0';
        equal('3__:__', '03:__', fixture);
    });

    it('Minutes', () => {
        component.mask = 'Hh:m0:s0';
        equal('1212', '12:12', fixture);
    });

    it('Minutes', () => {
        component.mask = 'Hh:m0:s0';
        equal('1207', '12:07', fixture);
    });

    it('Minutes', () => {
        component.mask = 'Hh:m0:s0';
        equal('127', '12:7', fixture);
    });

    it('Minutes (lead zero)', () => {
        component.leadZeroDateTime = true;
        component.mask = 'Hh:m0:s0';
        equal('127', '12:07', fixture);
    });

    it('Hours and minutes', () => {
        component.mask = 'Hh:m0:s0';
        equal('7712', '7:7:12', fixture);
    });

    it('Seconds (lead zero)', () => {
        component.leadZeroDateTime = true;
        component.mask = 'Hh:m0:s0';
        equal('777', '07:07:07', fixture);
    });

    it('Date', () => {
        component.mask = 'd0/M0/0000';
        equal('321234', '3/2/1234', fixture);
    });

    it('Date', () => {
        component.mask = 'd0/M0/0000';
        equal('3113123', '31/1/3123', fixture);
    });

    it('Date ', () => {
        component.mask = 'd0/M0/0000';
        equal('413234', '4/1/3234', fixture);
    });

    it('Date ', () => {
        component.mask = 'd0/M0/0000';
        equal('01011234', '01/01/1234', fixture);
    });

    it('Date ', () => {
        component.mask = 'd0/M0/0000';
        equal('10101234', '10/10/1234', fixture);
    });

    it('Date ', () => {
        component.mask = 'd0/M0/0000';
        equal('2322123', '23/2/2123', fixture);
    });

    it('Date ', () => {
        component.mask = 'd0/M0/0000';
        equal('23122123', '23/12/2123', fixture);
    });

    it('Date ', () => {
        component.mask = 'd0/M0/0000';
        equal('0314123', '03/1/4123', fixture);
    });

    it('Date ', () => {
        component.mask = 'd0/M0/0000';
        equal('0314123', '03/1/4123', fixture);
    });

    it('Date ', () => {
        component.mask = 'd0/M0/0000';
        equal('414123', '4/1/4123', fixture);
    });

    it('Date ', () => {
        component.mask = 'd0/M0/0000';
        equal('4121234', '4/12/1234', fixture);
    });

    it('Date (day lead zero)', () => {
        component.leadZeroDateTime = true;
        component.mask = 'd0/M0/0000';
        equal('4121234', '04/12/1234', fixture);
    });

    it('Date (month lead zero)', () => {
        component.leadZeroDateTime = true;
        component.mask = 'd0/M0/0000';
        equal('421234', '04/02/1234', fixture);
    });

    it('Date (years, month, day , lead zero', () => {
        component.mask = '0000.M0.d0';
        component.leadZeroDateTime = true;
        equal('9999999', '9999.09.09', fixture);
        equal('8888888', '8888.08.08', fixture);
        equal('7777777', '7777.07.07', fixture);
        equal('6666666', '6666.06.06', fixture);
        equal('5555555', '5555.05.05', fixture);
        equal('4444444', '4444.04.04', fixture);
    });

    it('Date (years, month, day , lead zero', () => {
        component.mask = '0000/M0/d0';
        component.leadZeroDateTime = true;
        equal('9999999', '9999/09/09', fixture);
        equal('8888888', '8888/08/08', fixture);
        equal('7777777', '7777/07/07', fixture);
        equal('6666666', '6666/06/06', fixture);
        equal('5555555', '5555/05/05', fixture);
        equal('4444444', '4444/04/04', fixture);
    });

    it('Date (years, month, day mask 0000.M0.d0', () => {
        component.mask = '0000.M0.d0';
        equal('999999', '9999.9.9', fixture);
        equal('888888', '8888.8.8', fixture);
        equal('777777', '7777.7.7', fixture);
        equal('666666', '6666.6.6', fixture);
        equal('555555', '5555.5.5', fixture);
        equal('444444', '4444.4.4', fixture);
        equal('333333', '3333.3.3', fixture);
        equal('2222222', '2222.2.22', fixture);
        equal('11111111', '1111.11.11', fixture);
        equal('202344', '2023.4.4', fixture);
    });
    it('Date (d0-M0-0000', () => {
        component.mask = 'd0-M0-0000';
        equal('999999', '9-9-9999', fixture);
        equal('888888', '8-8-8888', fixture);
        equal('777777', '7-7-7777', fixture);
        equal('666666', '6-6-6666', fixture);
        equal('555555', '5-5-5555', fixture);
        equal('444444', '4-4-4444', fixture);
        equal('333333', '3-3-3333', fixture);
        equal('2222222', '22-2-2222', fixture);
        equal('11111111', '11-11-1111', fixture);
        equal('20232023', '20-2-3202', fixture);
    });

    it('Date (m0/d0/0000', () => {
        component.mask = 'm0/d0/0000';
        equal('999999', '9/9/9999', fixture);
        equal('888888', '8/8/8888', fixture);
        equal('777777', '7/7/7777', fixture);
        equal('666666', '6/6/6666', fixture);
        equal('5555555', '55/5/5555', fixture);
        equal('4444444', '44/4/4444', fixture);
        equal('3333333', '33/3/3333', fixture);
        equal('22222222', '22/22/2222', fixture);
        equal('11111111', '11/11/1111', fixture);
        equal('20232023', '20/2/3202', fixture);
    });

    it('Date (0000-M0-d0', () => {
        component.mask = '0000-M0-d0';
        equal('999999', '9999-9-9', fixture);
        equal('888888', '8888-8-8', fixture);
        equal('777777', '7777-7-7', fixture);
        equal('666666', '6666-6-6', fixture);
        equal('555555', '5555-5-5', fixture);
        equal('444444', '4444-4-4', fixture);
        equal('333333', '3333-3-3', fixture);
        equal('2222222', '2222-2-22', fixture);
        equal('11111111', '1111-11-11', fixture);
    });

    it('Date (M0/d0/0000', () => {
        component.mask = 'M0/d0/0000';
        equal('999999', '9/9/9999', fixture);
        equal('888888', '8/8/8888', fixture);
        equal('777777', '7/7/7777', fixture);
        equal('666666', '6/6/6666', fixture);
        equal('555555', '5/5/5555', fixture);
        equal('444444', '4/4/4444', fixture);
        equal('333333', '3/3/3333', fixture);
        equal('2222222', '2/22/2222', fixture);
        equal('11111111', '11/11/1111', fixture);
    });

    it('Date (M0-d0-0000', () => {
        component.mask = 'M0-d0-0000';
        equal('999999', '9-9-9999', fixture);
        equal('888888', '8-8-8888', fixture);
        equal('777777', '7-7-7777', fixture);
        equal('666666', '6-6-6666', fixture);
        equal('555555', '5-5-5555', fixture);
        equal('444444', '4-4-4444', fixture);
        equal('333333', '3-3-3333', fixture);
        equal('2222222', '2-22-2222', fixture);
        equal('11111111', '11-11-1111', fixture);
    });

    it('Date (M0.d0.0000', () => {
        component.mask = 'M0.d0.0000';
        equal('999999', '9.9.9999', fixture);
        equal('888888', '8.8.8888', fixture);
        equal('777777', '7.7.7777', fixture);
        equal('666666', '6.6.6666', fixture);
        equal('555555', '5.5.5555', fixture);
        equal('444444', '4.4.4444', fixture);
        equal('333333', '3.3.3333', fixture);
        equal('2222222', '2.22.2222', fixture);
        equal('11111111', '11.11.1111', fixture);
    });
});
