import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_roleCreateNestedOneWithoutIntegration_roleInput } from "../inputs/Acl_roleCreateNestedOneWithoutIntegration_roleInput";
import { IntegrationCreateNestedOneWithoutIntegration_roleInput } from "../inputs/IntegrationCreateNestedOneWithoutIntegration_roleInput";

@TypeGraphQL.InputType("Integration_roleCreateInput", {})
export class Integration_roleCreateInput {
  @TypeGraphQL.Field(_type => Acl_roleCreateNestedOneWithoutIntegration_roleInput, {
    nullable: false
  })
  acl_role!: Acl_roleCreateNestedOneWithoutIntegration_roleInput;

  @TypeGraphQL.Field(_type => IntegrationCreateNestedOneWithoutIntegration_roleInput, {
    nullable: false
  })
  integration!: IntegrationCreateNestedOneWithoutIntegration_roleInput;
}
