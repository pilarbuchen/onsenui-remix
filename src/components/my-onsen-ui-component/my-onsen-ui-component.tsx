import React, { useState } from 'react';
import {
  Page,
  Toolbar,
  ToolbarButton,
  Icon,
  Button,
  List,
  ListItem,
  Card,
  Modal,
  Navigator,
  Tab,
  Tabbar,
  Switch,
} from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

const features = [
  {
    title: 'Modern UI Components',
    description: 'Pre-built, customizable components for mobile apps',
    icon: 'md-smartphone',
  },
  {
    title: 'Cross-Platform',
    description: 'Works seamlessly on iOS and Android',
    icon: 'md-desktop',
  },
  {
    title: 'Developer Experience',
    description: 'Easy to use with great documentation',
    icon: 'md-code',
  },
];

// Props interface for UserMenu
interface UserMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// Props interface for FeatureCard
interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const Navigation = () => {
  const navItems = ['Dashboard', 'Projects', 'Team', 'Reports'];
  
  return (
    <List>
      {navItems.map((item, index) => (
        <ListItem key={index} tappable>
          <div className="left">
            <Icon icon="md-menu" />
          </div>
          <div className="center">{item}</div>
        </ListItem>
      ))}
    </List>
  );
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <Card style={{ margin: '8px', padding: '16px' }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
      <Icon icon={icon} size={24} style={{ marginRight: '12px' }} />
      <h3 style={{ margin: 0 }}>{title}</h3>
    </div>
    <p style={{ margin: 0, color: '#666' }}>{description}</p>
    <Button modifier="outline" style={{ marginTop: '12px', width: '100%' }}>
      Learn More
    </Button>
  </Card>
);

const UserMenu: React.FC<UserMenuProps> = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <Page>
      <Toolbar>
        <div className="left">
          <ToolbarButton onClick={onClose}>
            <Icon icon="md-close" />
          </ToolbarButton>
        </div>
        <div className="center">User Menu</div>
      </Toolbar>
      <List>
        <ListItem tappable>
          <div className="left">
            <Icon icon="md-face" />
          </div>
          <div className="center">Profile</div>
        </ListItem>
        <ListItem tappable>
          <div className="left">
            <Icon icon="md-settings" />
          </div>
          <div className="center">Settings</div>
        </ListItem>
        <ListItem tappable>
          <div className="left">
            <Icon icon="md-exit-to-app" />
          </div>
          <div className="center">Logout</div>
        </ListItem>
      </List>
    </Page>
  </Modal>
);

const OnsenUIComponent = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  const renderToolbar = () => (
    <Toolbar>
      <div className="left">
        <ToolbarButton>
          <Icon icon="md-menu" />
        </ToolbarButton>
      </div>
      <div className="center">
        OnsenUI App
      </div>
      <div className="right">
        <ToolbarButton onClick={() => setDarkMode(!isDarkMode)}>
          <Icon icon={isDarkMode ? 'md-sunny' : 'md-moon'} />
        </ToolbarButton>
        <ToolbarButton onClick={() => setMenuOpen(true)}>
          <Icon icon="md-account-circle" />
        </ToolbarButton>
      </div>
    </Toolbar>
  );

  return (
    <Page renderToolbar={renderToolbar}>
      <UserMenu isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
      
      {/* Hero Section */}
      <div style={{ 
        padding: '32px 16px', 
        textAlign: 'center',
        background: 'linear-gradient(45deg, #4a90e2, #67b8e3)'
      }}>
        <h1 style={{ color: '#fff', margin: '0 0 16px 0' }}>
          Build Mobile Apps Faster
        </h1>
        <p style={{ color: '#fff', marginBottom: '24px' }}>
          A powerful UI framework for creating cross-platform mobile applications
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
          <Button modifier="large">
            Get Started
          </Button>
          <Button modifier="large--quiet">
            Documentation
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div style={{ padding: '16px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '24px' }}>Features</h2>
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

      {/* CTA Section */}
      <div style={{
        margin: '32px 16px',
        padding: '32px 16px',
        background: 'linear-gradient(45deg, #4a90e2, #67b8e3)',
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#fff', marginBottom: '16px' }}>
          Ready to Start Building?
        </h2>
        <p style={{ color: '#fff', marginBottom: '24px' }}>
          Join thousands of developers building amazing mobile applications
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
          <Button modifier="large">
            Get Started
          </Button>
          <Button modifier="large--quiet">
            View on GitHub
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <Navigation />
    </Page>
  );
};

export default OnsenUIComponent;
