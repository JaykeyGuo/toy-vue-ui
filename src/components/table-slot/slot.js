export default {
  functional: true,
  inject: ['tableRoot'],
  props: {
    row: Object,
    column: Object,
    index: Number,
  },
  render: (h, ctx) => h('div', ctx.injections.tableRoot.$scopeSlots[ctx.props.column.slot]({
    row: ctx.props.row,
    column: ctx.props.column,
    index: ctx.props.index,
  })),
};
