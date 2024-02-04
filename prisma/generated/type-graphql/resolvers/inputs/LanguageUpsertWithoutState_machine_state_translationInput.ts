import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutState_machine_state_translationInput } from "../inputs/LanguageCreateWithoutState_machine_state_translationInput";
import { LanguageUpdateWithoutState_machine_state_translationInput } from "../inputs/LanguageUpdateWithoutState_machine_state_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutState_machine_state_translationInput", {})
export class LanguageUpsertWithoutState_machine_state_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutState_machine_state_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutState_machine_state_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutState_machine_state_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutState_machine_state_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
