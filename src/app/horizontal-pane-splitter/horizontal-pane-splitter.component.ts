import { Component, OnInit, ViewChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-pane-splitter',
  templateUrl: './horizontal-pane-splitter.component.html',
  styleUrls: ['./horizontal-pane-splitter.component.css']
})
export class HorizontalPaneSplitterComponent implements OnInit, AfterContentInit {
  @ViewChild('dragBar', { static: true }) dragBar: ElementRef;
  private resizingPanel = false;
  bottomPanelHeight = 100;
  topPanelHeight: number;
  showBottom = true;

  constructor() {
    this.onMouseMove = this.onMouseMove.bind(this);
    this.cancelResize = this.cancelResize.bind(this);
  }

  ngOnInit() {

  }

  ngAfterContentInit() {
    const parentHeight = this.getParentHeight();
    this.topPanelHeight = parentHeight - this.dragBar.nativeElement.offsetHeight - this.bottomPanelHeight;
  }

  private getParentHeight() {
    return this.dragBar.nativeElement.parentElement.parentElement.parentElement.offsetHeight;
  }

  private getNewHeights(pageMouseY, parentHeight) {
    const newBottomHeight = parentHeight - pageMouseY - this.dragBar.nativeElement.offsetHeight / 2;
    const newTopHeight = parentHeight - newBottomHeight;
    return { newBottomHeight, newTopHeight };
  }

  onDragBarMouseDown(e) {
    e.preventDefault();
    this.resizingPanel = true;
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseleave', this.cancelResize);
    document.addEventListener('mouseup', this.cancelResize);
  }

  onMouseMove(e) {
    if (this.resizingPanel) {
      e.preventDefault();
      const parentHeight = this.getParentHeight();
      const newHeights = this.getNewHeights(e.pageY, parentHeight);
      // const parent = this.dragBar.nativeElement.parentElement.parentElement;
      // const topElement = parent.firstElementChild;
      // const newTotalHeight = topElement.offsetHeight + this.dragBar.nativeElement.offsetHeight + newHeight;
      // const maxHeight = parent.offsetHeight - topElement.offsetHeight - this.dragBar.nativeElement.offsetHeight;
      // const parentWillOverflow = newTotalHeight > parent.offsetHeight;
      this.bottomPanelHeight = newHeights.newBottomHeight;
      this.topPanelHeight = newHeights.newTopHeight;
    }
  }

  cancelResize(e) {
    this.resizingPanel = false;
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseleave', this.cancelResize);
    document.removeEventListener('mouseup', this.cancelResize);
  }

  hideBottomPanel() {
    this.showBottom = false;
  }

  showBottomPanel() {
    this.showBottom = true;
  }

}
