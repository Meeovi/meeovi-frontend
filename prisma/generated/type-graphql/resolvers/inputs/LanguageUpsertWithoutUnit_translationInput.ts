import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutUnit_translationInput } from "../inputs/LanguageCreateWithoutUnit_translationInput";
import { LanguageUpdateWithoutUnit_translationInput } from "../inputs/LanguageUpdateWithoutUnit_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutUnit_translationInput", {})
export class LanguageUpsertWithoutUnit_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutUnit_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutUnit_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutUnit_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutUnit_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
