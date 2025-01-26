import click
from client.credentials import save_credentials

@click.command()
@click.option('--username', prompt=True)
@click.option('--password', prompt=True, hide_input=True)
def configure(username, password):
    """Configure client credentials"""
    save_credentials(username, password)
    click.echo("Credentials saved successfully!") 