export interface OnCreatePageParamsPage {
  path: string
}

export interface OnCreatePageParamsActions {
  deletePage: (page: OnCreatePageParamsPage) => any
  createPage: (page: OnCreatePageParamsPage) => any
}

export interface OnCreatePageParams {
  page: OnCreatePageParamsPage
  actions: OnCreatePageParamsActions
}

export const onCreatePage = ({ page, actions }: OnCreatePageParams) => {
  const { deletePage, createPage } = actions

  if (page.path === '/404/' || page.path === '/dev-404-page/') {
    deletePage(page)
  } else {
    createPage(page)
  }
}
