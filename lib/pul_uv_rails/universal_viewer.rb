require 'singleton'

module PulUvRails
  class UniversalViewer
    include Singleton
    class << self
      def script_tag
        @script_tag ||= instance.script_tag
      end

      def viewer_src
        @viewer_src ||= instance.viewer_src
      end
    end

    # Hopefully outdated UV2 methods

    def script_tag
      "/#{viewer_root_v3}/uv.html".html_safe
    end

    def viewer_link
      "/#{viewer_root}/uv-#{viewer_version}/lib/embed.js"
    end

    def viewer_root
      'universalviewer/dist'
    end

    def viewer_version
      PulUvRails::VERSION
    end

    # Experimental UV3 methods

    def viewer_root_v3
      'universalviewer/dist/uv-3beta'
    end

    def viewer_src
      "/#{viewer_root_v3}/uv.html".html_safe
    end

    private

    def absolute_root
      Rails.root.join('public', viewer_root)
    end
  end
end
