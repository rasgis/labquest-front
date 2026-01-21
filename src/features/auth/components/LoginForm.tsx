'use client';

import * as React from 'react';
import { Button, Input, Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui';

export const LoginForm: React.FC = (): React.ReactElement => {
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmit = React.useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Временная имитация запроса
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoading(false);
    }, []);

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Вход в систему</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Input
                            type="email"
                            placeholder="Email"
                            required
                            label="Email"
                        />
                        <Input
                            type="password"
                            placeholder="Пароль"
                            required
                            label="Пароль"
                        />
                    </div>
                    <div className="flex gap-2">
                        <Button
                            type="submit"
                            className="w-full"
                            isLoading={isLoading}
                            variant="primary"
                        >
                            Войти
                        </Button>
                        <Button
                            type="button"
                            variant="ghost"
                            className="w-full"
                        >
                            Отмена
                        </Button>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="link" size="sm" className="px-0">
                        Забыли пароль?
                    </Button>
                    <Button variant="primary" size="sm">
                        Регистрация
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
};

LoginForm.displayName = 'LoginForm';
