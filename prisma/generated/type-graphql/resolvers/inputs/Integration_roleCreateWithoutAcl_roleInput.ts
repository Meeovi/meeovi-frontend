import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationCreateNestedOneWithoutIntegration_roleInput } from "../inputs/IntegrationCreateNestedOneWithoutIntegration_roleInput";

@TypeGraphQL.InputType("Integration_roleCreateWithoutAcl_roleInput", {})
export class Integration_roleCreateWithoutAcl_roleInput {
  @TypeGraphQL.Field(_type => IntegrationCreateNestedOneWithoutIntegration_roleInput, {
    nullable: false
  })
  integration!: IntegrationCreateNestedOneWithoutIntegration_roleInput;
}
