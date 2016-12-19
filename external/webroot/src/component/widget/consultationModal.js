/**
 * @file 技术咨询模态框容器
 * @author shiliang@baidu.com
 */
'use strict';

import EJS from 'ejs';
import $ from 'jquery';

import Modal from '../common/modal';
import {CONSULTATION_TMPL} from '../../partials/consultation';
import {sendConsultation} from '../../model/consultation';
import {checkQRCode} from '../../model/qrCode';


export default class ConsultationModal extends Modal {
    constructor(container = 'body', id = 'consultation-modal', title = '合作咨询') {
        super(container, id, title);
    }

    init() {
        super.init();
        super.getModal().addClass('consult-modal');
        this.reset();
    }

    hide() {
        super.hide();
        this.reset();
    }

    reset() {
        this.setContent(EJS.render(CONSULTATION_TMPL.APPLY));
    }

    apply() {
        this.setContent(EJS.render(CONSULTATION_TMPL.LOADING));
    }

    applySuccess() {
        this.setContent(EJS.render(CONSULTATION_TMPL.SUCCESS));
    }

    applyFail() {
        this.setContent(EJS.render(CONSULTATION_TMPL.FAIL));
    }

    refreshQRCode() {
        this.getModal().find('.qr-code-input img')
            .attr('src', '/index/seccode?action=show&t=' + new Date().getTime());
    }

    bindEvent() {
        super.bindEvent();
        let modal = this.getModal();

        modal.on('click', 'button.submit', e => {
            e.preventDefault();
            let form = $('#consult-form');
            let inputsToCheck = [
                'input[name=company]', 'input[name=username]', 'input[name=phone]', 'input[name=code]'
            ];
            form.find(inputsToCheck.join()).removeClass('has-error');
            form.find('.consult-info-warning').html('');
            for (let i = 0, len = inputsToCheck.length; i < len; i++) {
                let input = form.find(inputsToCheck[i]);
                if (!input.val()) {
                    input.addClass('has-error');
                    form.find('.info-warning').html(input.attr('placeholder'));
                    return false;
                }
            }
            checkQRCode({
                code: form.find('input[name=code]').val(),
                success: res => {
                    if (res.errno !== 0) {
                        let codeInput = form.find('input[name=code]');
                        codeInput.addClass('has-error');
                        form.find('.info-warning').html(codeInput.attr('placeholder'));
                        this.refreshQRCode();
                        return false;
                    }
                    this.apply();
                    sendConsultation({
                        data: {
                            tech: form.find('input[name=tech]:checked').val(),
                            company: form.find('input[name=company]').val(),
                            username: form.find('input[name=username]').val(),
                            phone: form.find('input[name=phone]').val(),
                            contactWay: form.find('input[name=contactWay]').val(),
                            content: form.find('textarea[name=content]').val(),
                            code: form.find('input[name=code]').val()
                        },
                        success: res => {
                            if (res.errno === 0) {
                                this.applySuccess();
                            } else {
                                this.applyFail();
                                this.refreshQRCode();
                            }
                        },
                        fail: () => this.applyFail()
                    });
                },
                fail: () => this.applyFail()
            });
        });

        modal.on('click', 'button.cancel', e => {
            e.preventDefault();
            this.hide();
        });

        modal.on('click', 'button.back', e => {
            e.preventDefault();
            this.reset();
        });

        modal.on('click', '.qr-code-input>a', e => {
            e.preventDefault();
            this.refreshQRCode();
        });
    }
}