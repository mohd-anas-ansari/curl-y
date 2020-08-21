class LinksController < ApplicationController

  def index
    @links = Link.all
  end

  def new
    # @link = Link.new
  end

  def create
    @link = Link.new(link_params)
    if @link.save
      render status: :ok, json: { notice: 'Link was successfully created' }
    else
      errors = @link.errors.full_messages
      render status: :unprocessable_entity, json: { errors: errors  }
    end
  end

  private

    def link_params
      params.require(:link).permit(:title)
    end
end
