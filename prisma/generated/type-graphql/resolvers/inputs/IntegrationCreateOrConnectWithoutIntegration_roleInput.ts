import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationCreateWithoutIntegration_roleInput } from "../inputs/IntegrationCreateWithoutIntegration_roleInput";
import { IntegrationWhereUniqueInput } from "../inputs/IntegrationWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationCreateOrConnectWithoutIntegration_roleInput", {})
export class IntegrationCreateOrConnectWithoutIntegration_roleInput {
  @TypeGraphQL.Field(_type => IntegrationWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationWhereUniqueInput;

  @TypeGraphQL.Field(_type => IntegrationCreateWithoutIntegration_roleInput, {
    nullable: false
  })
  create!: IntegrationCreateWithoutIntegration_roleInput;
}
