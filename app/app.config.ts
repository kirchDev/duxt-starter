export default defineAppConfig({
  duxt: {
    title: 'My documentation',
    navigation: [
      {
        label: 'Docs',
        to: '/getting-started',
        icon: 'lucide:book-open-text'
      }
    ],
    landing: {
      actions: [
        {
          label: 'Get started',
          to: '/getting-started',
          icon: 'lucide:arrow-right'
        }
      ]
    }
  }
});
