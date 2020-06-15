import config from './config'

export const PERMISSION_MAP = {
  'ABOUT_PAGE': 'ABOUT_PAGE',
}

export const init = () => {
  config.register('permission', {
    'CEO': {
      [PERMISSION_MAP.ABOUT_PAGE]: true
    },
    'COO': {
      [PERMISSION_MAP.ABOUT_PAGE]: false
    }
  })
}

export const getPermissionByRole = (role) => {
  return config.get('permission')[role]
}

