import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MdCheckboxChange, MdSelectChange } from '@angular/material';

import * as _ from 'lodash';

@Component({
  selector: 'app-stt-option',
  templateUrl: './sttoption.component.html',
  styleUrls: ['./sttoption.component.scss']
})
export class STTOptionComponent implements OnInit {
  isLoggingData = false;
  customizedModelGUID = '';
  languageModels = [
    { name: 'ar-AR_BroadbandModel', language: 'Modern Standard Arabic', sample_rate: '16 KHz' },
    { name: 'en-UK_BroadbandModel', language: 'UK English', sample_rate: '16 KHz' },
    { name: 'en-UK_NarrowbandModel', language: 'UK English', sample_rate: '8 KHz' },
    { name: 'en-US_BroadbandModel', language: 'US English', sample_rate: '16 KHz' },
    { name: 'en-US_NarrowbandModel', language: 'US English', sample_rate: '8 KHz' },
    { name: 'en-ES_BroadbandModel', language: 'Spanish', sample_rate: '16 KHz' },
    { name: 'en-ES_NarrowbandModel', language: 'Spanish', sample_rate: '8 KHz' },
    { name: 'fr-FR_BroadbandModel', language: 'French', sample_rate: '16 KHz' },
    { name: 'ja-JP_BroadbandModel', language: 'Japanese', sample_rate: '16 KHz' },
    { name: 'ja-JP_NarrowbandModel', language: 'Japanese', sample_rate: '8 KHz' },
    { name: 'pt-BR_BroadbandModel', language: 'Brazilian Portuguese', sample_rate: '16 KHz' },
    { name: 'pt-BR_NarrowbandModel', language: 'Brazilian Portuguese', sample_rate: '8 KHz' },
    { name: 'zh-CN_BroadbandModel', language: 'Mandarin Chinese', sample_rate: '16 KHz' },
    { name: 'zh-CN_NarrowbandModel', language: 'Mandarin Chinese', sample_rate: '8 KHz' },
  ];

  selectedModel = 'en-US_BroadbandModel';
  selectedLanguage = 'English';
  selectedSampleRate = '16 KHz';

  @Output() updateOption: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  modelChanged(event: MdSelectChange) {
    const model = _.find(this.languageModels, { name: this.selectedModel });
    this.selectedLanguage = model.language;
    this.selectedSampleRate = model.sample_rate;
    this.updateOption.emit(true);
  }

}
