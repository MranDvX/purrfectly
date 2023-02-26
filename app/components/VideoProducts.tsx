import { Link } from '@remix-run/react';

interface VideoProductsProps {
  products: ShoppableProduct[];
}

export default function VideoProducts({ products }: VideoProductsProps) {
  return (
    <div
      className="vjs-modal-dialog"
      tabIndex={-1}
      aria-describedby="first-demo_component_2140_description"
      aria-hidden="false"
      aria-label="Modal Window"
      role="dialog"
    >
      <div className="vjs-modal-dialog-content" role="document">
        <div className="cld-spbl-post-play">
          <div className="cld-spbl-panel base-color-bg">
            {products.map((product) => (
              <Link
                key={product.productId}
                className="cld-spbl-item base-color-bg accent-color-text"
                to={`/catalog/product/${product.productId}`}
              >
                <span aria-hidden="true" className="vjs-icon-placeholder" />
                <span className="vjs-control-text" aria-live="polite" />
                <span
                  className="cld-spbl-overlay text-color-semi-bg base-color-text"
                  title="Ir al producto"
                >
                  <span className="cld-spbl-overlay-text rounded-md bg-black text-white">
                    Ir al producto
                  </span>
                </span>
                <img
                  alt={product.productName}
                  className="cld-spbl-img cld-vp-responsive"
                  src={`https://res.cloudinary.com/${window.ENV.CLOUDINARY_CLOUD_NAME}/image/upload/v1677347478/${product.publicId}.webp`}
                  width={600}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
