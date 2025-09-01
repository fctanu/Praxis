import React from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  message?: string;
}

export class ErrorBoundary extends React.Component<
  React.PropsWithChildren,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: unknown): ErrorBoundaryState {
    return {
      hasError: true,
      message: error instanceof Error ? error.message : "Unknown error",
    };
  }

  componentDidCatch(error: unknown, info: React.ErrorInfo) {
    console.error("Unhandled UI error", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-8 text-center">
          <div>
            <h1 className="text-2xl font-semibold mb-4">
              Something went wrong.
            </h1>
            <p className="text-muted-foreground mb-6">{this.state.message}</p>
            <button
              type="button"
              onClick={() =>
                this.setState({ hasError: false, message: undefined })
              }
              className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
