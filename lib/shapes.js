class circle extends Shape {
    render() {
        return ‘<circle cx="158" cy="100" r="75" style="fill:${this.color}"/>;
    }
}
class Square extends Shape {
    render() {
        return ‘<rect x="50" y="50" width="200" style="fill:${this.color}"/>;
    }
} 