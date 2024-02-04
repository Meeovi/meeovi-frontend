import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationUpdateOneRequiredWithoutIntegration_roleNestedInput } from "../inputs/IntegrationUpdateOneRequiredWithoutIntegration_roleNestedInput";

@TypeGraphQL.InputType("Integration_roleUpdateWithoutAcl_roleInput", {})
export class Integration_roleUpdateWithoutAcl_roleInput {
  @TypeGraphQL.Field(_type => IntegrationUpdateOneRequiredWithoutIntegration_roleNestedInput, {
    nullable: true
  })
  integration?: IntegrationUpdateOneRequiredWithoutIntegration_roleNestedInput | undefined;
}
