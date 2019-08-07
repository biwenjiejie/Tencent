let gl_link_active = false;
class Link{
    constructor(){
        this.init();
    }

    init() {
        this.shixian();
    }

    shixian() {
        let that = this;
        this.point1Active = false;
        this.point2Active = false;

        this.point1_dom = document.getElementsByClassName('TouchAreaL')[0];
        this.point2_dom = document.getElementsByClassName('TouchAreaR')[0];
        this.point1_dom.addEventListener("touchstart",function(e){
            that.point1Active = true;
            that.activeJudage();
        });
        this.point2_dom.addEventListener("touchstart",function(e){
            console.log('point2 active');
            that.point2Active = true;
            that.activeJudage();
        });
        this.point1_dom.addEventListener("touchend",function(e){
            console.log('point1 enabled');
            that.point1Active = false;
        });
        this.point2_dom.addEventListener("touchend",function(e){
            console.log('point2 enabled');
            that.point2Active = false;
        });
    }

    /**
     * 激活状态判断
     */
    activeJudage(){
        if(this.point2Active&&this.point1Active){
            this.point1Active =false;
            this.point2Active =false;
            let computer = document.getElementsByClassName('computer')[0];
            computer.style.display = 'block';
            gl_link_active = true
        }
    }
}