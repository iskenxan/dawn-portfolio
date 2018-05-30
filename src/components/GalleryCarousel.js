import React, { Component } from 'react';
import {
  Container,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


class GalleryCarousel extends Component {

  constructor(props) {
      super(props);
      this.state = { activeIndex: this.props.active };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
    }

    onExiting() {
      this.animating = true;
    }

    onExited() {
      this.animating = false;
    }

    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }

    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }

    render() {
      const { activeIndex } = this.state;

      const slides = this.props.items.map((item) => {
        console.log(item);
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item}
          >
            <img style={{width:100,height:50}} src={item} />
          </CarouselItem>
        );
      });

      console.log(slides)
      return (
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
          >
          <CarouselIndicators items={this.props.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      );
    }

}

export default GalleryCarousel;
