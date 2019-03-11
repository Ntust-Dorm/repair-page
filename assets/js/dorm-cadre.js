class Cadre {
    constructor(name, position, room) {
        this.name = name;
        this.position = position;
        this.room = room;
    }

    toString() {
        let splitter = 'Resident Assistant';
        if (this.position.indexOf(splitter) > -1) {
            return '<li class="icon fa-user"><h3 data-mlr-text>' + this.name + '</h3><p><i class="icon fa-briefcase"> </i><span data-mlr-text>' + splitter + '</span>' + this.position.split(splitter)[1] + '</p><p><i class="icon fa-bed"> </i>' + this.room + '</p></li>';
        }
        return '<li class="icon fa-user"><h3 data-mlr-text>' + this.name + '</h3><p><i class="icon fa-briefcase"> </i><span data-mlr-text>' + this.position + '</span></p><p><i class="icon fa-bed"> </i>' + this.room + '</p></li>';
    }
}

var cadres = [];
cadres.push(new Cadre("黃偉倫", "Dorm Manager", "312"));
cadres.push(new Cadre("吳俊廷", "Dorm Vice Manager", "415"));
// cadres.push(new Cadre("孫三合", "", "915"));
// cadres.push(new Cadre("李宇翔", "Resident Assistant 2F & 3F", "212"));
// cadres.push(new Cadre("黃郁峻", "Resident Assistant 4F & 5F", "415"));
// cadres.push(new Cadre("江彥成", "Resident Assistant 6F & 7F", "415"));
// cadres.push(new Cadre("劉權紘", "Resident Assistant 8F & 9F", "909"));
// cadres.push(new Cadre("徐孟辰", "Resident Assistant 10F & 11F", "415"));
// cadres.push(new Cadre("胡柏丞", "Resident Assistant 12F & 13F", "213"));
// cadres.push(new Cadre("周儀恩", "Resident Assistant 14F", "415"));

var cadres_strings = [];
$.each(cadres, function (index) {
    cadres_strings.push(cadres[index].toString());
})
$(".features").append(cadres_strings.join(''));