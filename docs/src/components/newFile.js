;<Transition
  items={this.state.activeImage}
  keys={item => item.alt}
  enter={{ opacity: 1 }}
  leave={{ opacity: 0 }}
>
  {item => props => <Img fluid={item.src} alt={item.alt} {...props} />}
</Transition>
