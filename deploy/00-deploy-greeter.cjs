module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  await deploy("Greeter", {
    contract: "Greeter",
    from: deployer,
    args: ["Hi Dev Azeez for better illustration"], // The message in the Greeter contract function constructor
    log: true, // Logs statements to console
  });
};
module.exports.tags = ["Greeter"];
