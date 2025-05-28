import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
// import { Loader2 } from 'lucide-react'; // Example: uncomment if you want to use an icon

// Schema for login form validation
const loginFormSchema = z.object({
  username: z.string().min(1, { message: 'Username is required.' }),
  // For a more production-ready feel, you might use:
  // username: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
  // For a more production-ready feel, you might use:
  // password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    console.log('Login form submitted:', data);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // In a real application, you would handle success/error responses here.
    // For example, redirect on success, or use form.setError() for field-specific
    // or root errors (e.g., form.setError('root', { message: 'Invalid credentials' })).
    console.log('Simulated login successful for:', data.username);
    // form.reset(); // Optionally reset form fields on success

    setIsLoading(false);
  };

  return (
    <div className={cn('w-full flex flex-col gap-4', className)}>
      <h1 className="text-3xl font-bold text-center text-card-foreground">
        Log in
      </h1>
      
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)} 
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Username</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Username" 
                    {...field} 
                    // Ensure input background matches card, and text/placeholder colors are correct
                    // Shadcn's default Input component already includes border and focus styling respecting theme variables.
                    className="bg-card text-card-foreground placeholder:text-muted-foreground"
                    autoComplete="username"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Password</FormLabel>
                <FormControl>
                  <Input 
                    type="password" 
                    placeholder="Password" 
                    {...field}
                    className="bg-card text-card-foreground placeholder:text-muted-foreground"
                    autoComplete="current-password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Display root form errors, e.g., from form.setError('root', ...) */}
          {form.formState.errors.root && (
            <FormMessage className="text-destructive">
              {form.formState.errors.root.message}
            </FormMessage>
          )}

          <Button 
            type="submit" 
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                {/* Example of adding a spinner icon: */}
                {/* <Loader2 className="mr-2 h-4 w-4 animate-spin" /> */}
                Logging in...
              </>
            ) : (
              'Log in'
            )}
          </Button>
        </form>
      </Form>

      <p className="text-center text-sm text-muted-foreground">
        or,{' '}
        <a 
          href="#" 
          className="font-medium text-primary hover:text-primary/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 rounded"
          onClick={(e) => { 
            e.preventDefault(); 
            // In a real app, this would navigate to a sign-up page or open a sign-up modal.
            alert('"Sign up" link clicked!'); 
          }}
        >
          sign up
        </a>
      </p>
    </div>
  );
};

export default LoginForm;
