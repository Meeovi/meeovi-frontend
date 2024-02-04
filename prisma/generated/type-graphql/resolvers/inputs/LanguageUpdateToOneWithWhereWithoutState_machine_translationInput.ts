import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutState_machine_translationInput } from "../inputs/LanguageUpdateWithoutState_machine_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutState_machine_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutState_machine_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutState_machine_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutState_machine_translationInput;
}
