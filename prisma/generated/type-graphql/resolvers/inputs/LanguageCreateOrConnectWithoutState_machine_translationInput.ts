import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutState_machine_translationInput } from "../inputs/LanguageCreateWithoutState_machine_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutState_machine_translationInput", {})
export class LanguageCreateOrConnectWithoutState_machine_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutState_machine_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutState_machine_translationInput;
}
