require 'singleton'

module PulUvRails
  class UniversalViewer
    include Singleton
    class << self
      def viewer_src
        @viewer_src ||= instance.viewer_src
      end
    end

    def viewer_root
      'universalviewer/dist'
    end

    def viewer_src
      "/#{viewer_root}/uv.html".html_safe
    end

    def config_src
      "/#{viewer_root}/config.json".html_safe
    end

    def viewer_version
      PulUvRails::VERSION
    end

    private

    def absolute_root
      Rails.root.join('public', viewer_root)
    end
  end
end
