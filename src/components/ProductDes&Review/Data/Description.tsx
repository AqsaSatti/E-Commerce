export const DescriptionPanel: React.FC<{ description: string }> = ({
  description,
}) => (
  <div className="tab-label rounded-tl-none">
    <p className="description-tab">
      {description}
    </p>
  </div>
);