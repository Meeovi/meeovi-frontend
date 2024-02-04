import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutApp_action_button_translationInput } from "../inputs/LanguageCreateOrConnectWithoutApp_action_button_translationInput";
import { LanguageCreateWithoutApp_action_button_translationInput } from "../inputs/LanguageCreateWithoutApp_action_button_translationInput";
import { LanguageUpdateToOneWithWhereWithoutApp_action_button_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutApp_action_button_translationInput";
import { LanguageUpsertWithoutApp_action_button_translationInput } from "../inputs/LanguageUpsertWithoutApp_action_button_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutApp_action_button_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutApp_action_button_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutApp_action_button_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutApp_action_button_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutApp_action_button_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutApp_action_button_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutApp_action_button_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutApp_action_button_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutApp_action_button_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutApp_action_button_translationInput | undefined;
}
