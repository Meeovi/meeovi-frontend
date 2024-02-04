import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutCategory_translationInput } from "../inputs/LanguageCreateWithoutCategory_translationInput";
import { LanguageUpdateWithoutCategory_translationInput } from "../inputs/LanguageUpdateWithoutCategory_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutCategory_translationInput", {})
export class LanguageUpsertWithoutCategory_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutCategory_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutCategory_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutCategory_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutCategory_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
