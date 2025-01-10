import { ReactNode } from 'react';


interface BodyLayoutProps {
  children: ReactNode;
}

const BodyLayout = ({ children }: BodyLayoutProps) => {
    return (
        <div className="relative min-h-screen w-screen overflow-x-hidden">
            <span className="mt-15">Ashram</span>
            {children}
        </div>
    );
};

export default BodyLayout;
