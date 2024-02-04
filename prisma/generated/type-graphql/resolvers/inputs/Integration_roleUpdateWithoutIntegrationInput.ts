import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_roleUpdateOneRequiredWithoutIntegration_roleNestedInput } from "../inputs/Acl_roleUpdateOneRequiredWithoutIntegration_roleNestedInput";

@TypeGraphQL.InputType("Integration_roleUpdateWithoutIntegrationInput", {})
export class Integration_roleUpdateWithoutIntegrationInput {
  @TypeGraphQL.Field(_type => Acl_roleUpdateOneRequiredWithoutIntegration_roleNestedInput, {
    nullable: true
  })
  acl_role?: Acl_roleUpdateOneRequiredWithoutIntegration_roleNestedInput | undefined;
}
