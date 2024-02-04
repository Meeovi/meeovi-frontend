import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_roleUpdateOneRequiredWithoutIntegration_roleNestedInput } from "../inputs/Acl_roleUpdateOneRequiredWithoutIntegration_roleNestedInput";
import { IntegrationUpdateOneRequiredWithoutIntegration_roleNestedInput } from "../inputs/IntegrationUpdateOneRequiredWithoutIntegration_roleNestedInput";

@TypeGraphQL.InputType("Integration_roleUpdateInput", {})
export class Integration_roleUpdateInput {
  @TypeGraphQL.Field(_type => Acl_roleUpdateOneRequiredWithoutIntegration_roleNestedInput, {
    nullable: true
  })
  acl_role?: Acl_roleUpdateOneRequiredWithoutIntegration_roleNestedInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationUpdateOneRequiredWithoutIntegration_roleNestedInput, {
    nullable: true
  })
  integration?: IntegrationUpdateOneRequiredWithoutIntegration_roleNestedInput | undefined;
}
