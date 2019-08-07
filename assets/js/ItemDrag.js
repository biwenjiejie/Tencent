let gl_seeMy = false;
class ItemDrag {
    constructor() {
    }

    bind(parent_, childs_, activeBox_) {
        this.parent = parent_;

        this.parentRect = parent_.getBoundingClientRect();
        this.transRect = {x: 0, y: 0};
        this.childs = childs_;
        this.activeBoxRect = activeBox_.getBoundingClientRect();
        this.aRect = {
            x: this.activeBoxRect.left,
            y: this.activeBoxRect.top,
            w: this.activeBoxRect.width,
            h: this.activeBoxRect.height
        };
        this.aRect.y -= this.parentRect.top;

        this.isDrag = false;
        this.dragChild = null;

        this.createEvents();
    }

    start(){
        this.enabled=true;
    }
    stop(){
        this.enabled=false;
    }

    createEvents() {

        //对父容器添加抬起事件
        /*window.addEventListener('touchend', () => {
            this.touchEnd();
            console.log(this.seeMy)
        });*/
        let that = this;

        //对子对象添加 拖动事件
        for (var i = 0; i < this.childs.length; i++) {
            let child = this.childs[i];
            child.addEventListener('touchstart', function (e) {
                that.touchStart(this, e);
            });
            child.addEventListener('touchmove', function (e) {
                that.moveChild(e);
            });
            child.active = false;
            if (child.getAttribute('class').indexOf('resumeImg_') !== -1) {
                child.isTrue = true;
            } else {
                child.isTrue = false;
            }

        }
    }

    moveChild(e) {
        if(!this.enabled)return;
        if (!this.isDrag) return;
        let child_ = this.dragChild;
        let childRect = child_.getBoundingClientRect();
        let touch = e.touches[0];
        let x = touch.pageX;
        let y = touch.pageY;

        x -= this.transRect.x;
        y -= this.transRect.y;

        x -= this.parentRect.left;
        y -= this.parentRect.top;

        if (x < 0 || y < 0) {
            this.isDrag = false;
        }

        if (x + childRect.width > this.parentRect.width) {
            this.isDrag = false;
        }
        if (y + childRect.height > this.parentRect.height) {
            this.isDrag = false;
        }
        child_.style.left = x + 'px';
        child_.style.top = y + 'px';

        if (x > this.aRect.x && x < (this.aRect.x + this.aRect.w)) {
            if (y > this.aRect.y && (y < this.aRect.y + this.aRect.h)) {
                this.dragChild.active = true;
                console.log('active');
            }else{
              this.dragChild.active = false;
            }
        }else{
            this.dragChild.active = false;
        }


        //console.log('e:',e);
    }

    touchEnd() {
        if(!this.enabled)return;
        this.isDrag = false;
        if(!this.dragChild) return;
        if (this.dragChild.active&&!this.dragChild.isTrue) {
            this.dragChild.style.left = '';
            this.dragChild.style.top = '';
            this.dragChild.active = false;
        }else if(this.dragChild.active&&this.dragChild.isTrue){
          this.dragChild.active = false;
          //拖到对应处
          gl_seeMy = true
        }
        this.dragChild = null;

    }

    touchStart(child, e) {
        if(!this.enabled)return;
        this.dragChild = child;
        this.isDrag = true;
        this.transRect = child.getBoundingClientRect();

        let touch = e.touches[0];

        this.transRect.x = touch.pageX - this.transRect.left;
        this.transRect.y = touch.pageY - this.transRect.top;

    }
}