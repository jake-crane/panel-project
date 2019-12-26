import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-pane-splitter',
  templateUrl: './horizontal-pane-splitter.component.html',
  styleUrls: ['./horizontal-pane-splitter.component.css']
})
export class HorizontalPaneSplitterComponent implements OnInit {

  @ViewChild('dragBar', { static: true }) dragBar: ElementRef;
  private resizingPanel = false;
  panelHeight = 100;
  showBottom = true;
  @Input()
  parent;

  constructor() {
    this.onMouseMove = this.onMouseMove.bind(this);
    this.cancelResize = this.cancelResize.bind(this);
  }

  ngOnInit() {
  }

  getBottomPanelHeight(pageMouseY): number {
    const parentMouseY = pageMouseY - this.parent.offsetTop;
    return this.parent.scrollHeight - parentMouseY - this.getHalfDragBarHeight();
  }

  getHalfDragBarHeight() {
    return this.dragBar.nativeElement.offsetHeight / 2;
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
      const newHeight = this.getBottomPanelHeight(e.pageY);
      // const parent = this.dragBar.nativeElement.parentElement.parentElement;
      // const topElement = parent.firstElementChild;
      // const newTotalHeight = topElement.offsetHeight + this.dragBar.nativeElement.offsetHeight + newHeight;
      // const maxHeight = parent.offsetHeight - topElement.offsetHeight - this.dragBar.nativeElement.offsetHeight;
      // const parentWillOverflow = newTotalHeight > parent.offsetHeight;
      this.panelHeight = newHeight;
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
