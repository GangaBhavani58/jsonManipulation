import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  initData: any;
  sizeData: any;
  showSize = false;
  RAMData: any;
  showRAM = false;
  showDisk = false;
  diskData: any;
  showColor = false;
  colorData: any;

  fullData = {
    Data: [
      {
        ParentVariantName1: 'Color',
        VariantName1: 'Blue',
        ParentVariantName2: 'Size',
        VariantName2: 'S',
        ParentVariantName3: null,
        VariantName3: null,
        ParentVariantName4: null,
        VariantName4: null,
      },
      {
        ParentVariantName1: 'Color',
        VariantName1: 'Blue',
        ParentVariantName2: 'Size',
        VariantName2: 'M',
        ParentVariantName3: null,
        VariantName3: null,
        ParentVariantName4: null,
        VariantName4: null,
      },
      {
        ParentVariantName1: 'Color',
        VariantName1: 'Yellow',
        ParentVariantName2: 'Size',
        VariantName2: 'M',
        ParentVariantName3: null,
        VariantName3: null,
        ParentVariantName4: null,
        VariantName4: null,
      },
      {
        ParentVariantName1: 'Camera',
        VariantName1: '16MP',
        ParentVariantName2: 'RAM',
        VariantName2: '128GB',
        ParentVariantName3: 'Disk',
        VariantName3: '256GB',
        ParentVariantName4: 'Color',
        VariantName4: 'Blue',
      },
      {
        ParentVariantName1: 'Camera',
        VariantName1: '16MP',
        ParentVariantName2: 'RAM',
        VariantName2: '128GB',
        ParentVariantName3: 'Disk',
        VariantName3: '256GB',
        ParentVariantName4: 'Color',
        VariantName4: 'Black',
      },
    ],
  };

  ngOnInit() {
    this.initData = [
      ...new Set(this.fullData.Data.map((item) => item.VariantName1)),
    ];
  }

  handleEvent(data: any) {
    if (data === 'Blue') {
      this.showSize = true;
      this.sizeData = Array.from(
        new Set(
          this.fullData.Data.filter(
            (ele) => ele.ParentVariantName2 === 'Size'
          ).map((ele) => ele.VariantName2)
        )
      );
    } else if (data === '16MP') {
      this.showRAM = true;
      this.RAMData = Array.from(
        new Set(
          this.fullData.Data.filter((ele) => ele.VariantName1 === '16MP').map(
            (ele) => ele.VariantName2
          )
        )
      );
    } else if (data === '128GB') {
      this.showDisk = true;
      this.diskData = Array.from(
        new Set(
          this.fullData.Data.filter(
            (ele) => ele.ParentVariantName3 === 'Disk'
          ).map((ele) => ele.VariantName3)
        )
      );
    } else if (data === '256GB') {
      this.showColor = true;
      this.colorData = Array.from(
        new Set(
          this.fullData.Data.filter(
            (ele) => ele.ParentVariantName4 === 'Color'
          ).map((ele) => ele.VariantName4)
        )
      );
    }
  }
}
