import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationCreateOrConnectWithoutIntegration_roleInput } from "../inputs/IntegrationCreateOrConnectWithoutIntegration_roleInput";
import { IntegrationCreateWithoutIntegration_roleInput } from "../inputs/IntegrationCreateWithoutIntegration_roleInput";
import { IntegrationWhereUniqueInput } from "../inputs/IntegrationWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationCreateNestedOneWithoutIntegration_roleInput", {})
export class IntegrationCreateNestedOneWithoutIntegration_roleInput {
  @TypeGraphQL.Field(_type => IntegrationCreateWithoutIntegration_roleInput, {
    nullable: true
  })
  create?: IntegrationCreateWithoutIntegration_roleInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationCreateOrConnectWithoutIntegration_roleInput, {
    nullable: true
  })
  connectOrCreate?: IntegrationCreateOrConnectWithoutIntegration_roleInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationWhereUniqueInput, {
    nullable: true
  })
  connect?: IntegrationWhereUniqueInput | undefined;
}
