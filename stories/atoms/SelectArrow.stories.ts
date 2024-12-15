import { Meta, StoryObj } from '@storybook/vue3'
import SelectArrow from '~/components/search/atoms/SelectArrow.vue'

const meta: Meta<typeof SelectArrow> = {
  component: SelectArrow,
  render: args => ({
    components: { SelectArrow },
    setup: () => ({ args }),
    template: `
      <SelectArrow/>
    `
  })
}

export default meta

type Story = StoryObj<typeof SelectArrow>

export const Default: Story = {
}
