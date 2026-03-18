using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Portfolio.Application.Interfaces;
using Portfolio.Infrastructure.Data;
using Portfolio.Infrastructure.Repositories.Static;
using Portfolio.Infrastructure.Services;

var builder = WebApplication.CreateBuilder(args);

// -- Database ----------------------------------------------------------
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// -- Identity ----------------------------------------------------------
builder.Services.AddIdentity<IdentityUser, IdentityRole>()
    .AddEntityFrameworkStores<AppDbContext>()
    .AddDefaultTokenProviders();

// ── Repositories & Services ──────────────────────────────────────────
builder.Services.AddScoped<IContactService, ContactService>();
builder.Services.AddSingleton<IProjectRepository, StaticProjectRepository>();
builder.Services.AddSingleton<IExperienceRepository, StaticExperienceRepository>();

// ── Controllers & Swagger ────────────────────────────────────────────
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// ── CORS ─────────────────────────────────────────────────────────────
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod());
});

var app = builder.Build();

// ── Middleware ─────────────────────────────────────────
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowFrontend");
app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.Run();