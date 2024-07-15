export default function Service({ service }) {
  return (
    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
      <div class="service-item">
        <div class="service-icon">
          <i class={service.iconclass}></i>
        </div>
        <div class="service-text p-2">
          <h3>{service.skill}</h3>
          <p className="text-sm">{service.description}</p>
        </div>
      </div>
    </div>
  );
}
