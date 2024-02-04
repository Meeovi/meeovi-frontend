import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutState_machine_state_translationInput } from "../inputs/LanguageCreateOrConnectWithoutState_machine_state_translationInput";
import { LanguageCreateWithoutState_machine_state_translationInput } from "../inputs/LanguageCreateWithoutState_machine_state_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutState_machine_state_translationInput", {})
export class LanguageCreateNestedOneWithoutState_machine_state_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutState_machine_state_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutState_machine_state_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutState_machine_state_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutState_machine_state_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
