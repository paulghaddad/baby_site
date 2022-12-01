import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ActivitiesPagePreview from './preview-templates/ActivitiesPagePreview'
import Activities012PagePreview from './preview-templates/Activities012PagePreview'
import Activities34PagePreview from './preview-templates/Activities34PagePreview'
import Activities56PagePreview from './preview-templates/Activities56PagePreview'
import Activities78PagePreview from './preview-templates/Activities78PagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import BooksPagePreview from './preview-templates/BooksPagePreview'
import ToysPagePreview from './preview-templates/ToysPagePreview'
import BabyLogPagePreview from './preview-templates/BabyLogPagePreview'
import NewsletterPagePreview from './preview-templates/NewsletterPagePreview'
import ParentResourcesPagePreview from './preview-templates/ParentResourcesPagePreview'
import SensoryActivitiesPagePreview from './preview-templates/SensoryActivitiesPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('activities', ActivitiesPagePreview)
CMS.registerPreviewTemplate('activities-0-12-weeks', Activities012PagePreview)
CMS.registerPreviewTemplate('activities-3-4-months', Activities34PagePreview)
CMS.registerPreviewTemplate('activities-5-6-months', Activities56PagePreview)
CMS.registerPreviewTemplate('activities-7-8-months', Activities78PagePreview)
CMS.registerPreviewTemplate('books', BooksPagePreview)
CMS.registerPreviewTemplate('toys', ToysPagePreview)
CMS.registerPreviewTemplate('baby-log', BabyLogPagePreview)
CMS.registerPreviewTemplate('newsletter',NewsletterPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('parent-resources', ParentResourcesPagePreview)
CMS.registerPreviewTemplate('sensory-activities', SensoryActivitiesPagePreview)
