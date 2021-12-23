class VendorsController < ApplicationController
    def show
        vendor = Vendor.find_by(user_id: params[:id])
        logo = rails_blob_path(vendor.logo)
        render json: {vendor: vendor, logo: logo}, include: :merchandises,status: :ok
    end
end
