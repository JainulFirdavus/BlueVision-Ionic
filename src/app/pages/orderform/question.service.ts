import { Injectable } from '@angular/core';

// import { QuestionBase } from './question-base';
/* import { DropdownQuestion } from './question-dropdown';
import { TextboxQuestion } from './question-textbox'; */

import { of } from 'rxjs';

@Injectable()

class QuestionBase<T> {
    value: T | undefined;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    type: string;
    options: { key: string, value: string }[];

    constructor(options: {
        value?: T;
        key?: string;
        label?: string;
        required?: boolean;
        order?: number;
        controlType?: string;
        type?: string;
        options?: { key: string, value: string }[];
    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.type = options.type || '';
        this.options = options.options || [];
    }
}

class DropdownQuestion extends QuestionBase<string> {
    controlType = 'dropdown';
}

class TextboxQuestion extends QuestionBase<string> {
    controlType = 'textbox';
}

export class QuestionService {

    // TODO: get from a remote source of question metadata
    getQuestions() {

        const questions: QuestionBase<string>[] = [
            new TextboxQuestion({
                key: 'firstName',
                label: 'First name',
                value: 'Bombasto',
                required: true,
                order: 1
            }),

            new TextboxQuestion({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                order: 2
            }),
            new DropdownQuestion({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                    { key: 'solid', value: 'Solid' },
                    { key: 'great', value: 'Great' },
                    { key: 'good', value: 'Good' },
                    { key: 'unproven', value: 'Unproven' }
                ],
                order: 3
            }),


        ];

        return of(questions.sort((a, b) => a.order - b.order));
    }
}
