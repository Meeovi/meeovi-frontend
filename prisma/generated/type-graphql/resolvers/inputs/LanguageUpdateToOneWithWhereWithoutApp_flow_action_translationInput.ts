import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutApp_flow_action_translationInput } from "../inputs/LanguageUpdateWithoutApp_flow_action_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutApp_flow_action_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutApp_flow_action_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutApp_flow_action_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutApp_flow_action_translationInput;
}
