using Microsoft.EntityFrameworkCore;
using Pgvector.EntityFrameworkCore;
using ReqIntel.Api.Data;
using ReqIntel.Api.Services;

var builder = WebApplication.CreateBuilder(args);

// Controllers
builder.Services.AddControllers();

// Swagger/OpenAPI
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Custom Services
builder.Services.AddScoped<PdfExtractionService>();
builder.Services.AddScoped<ChunkingService>();
builder.Services.AddScoped<EmbeddingService>();
builder.Services.AddScoped<SearchService>();
builder.Services.AddScoped<ChatService>();

// CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("ReactPolicy", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// PostgreSQL + pgvector
builder.Services.AddDbContext<ReqIntelDbContext>(options =>
    options.UseNpgsql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        o => o.UseVector()));

var app = builder.Build();

// Swagger
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("ReactPolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();