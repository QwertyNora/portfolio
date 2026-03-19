using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;

namespace Portfolio.Infrastructure.Data;

public static class DatabaseSeeder
{
    public static async Task SeedAdminAsync(UserManager<IdentityUser> userManager, IConfiguration configuration)
    {
        var adminEmail = configuration["Admin:Email"]!;
        var adminPassword = configuration["Admin:Password"]!;

        var existingUser = await userManager.FindByEmailAsync(adminEmail);

        if (existingUser is null)
        {
            var admin = new IdentityUser
            {
                UserName = adminEmail,
                Email = adminEmail,
                EmailConfirmed = true
            };

            await userManager.CreateAsync(admin, adminPassword);
        }
    }
}