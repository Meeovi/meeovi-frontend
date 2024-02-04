import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutApp_translationInput } from "../inputs/LanguageCreateWithoutApp_translationInput";
import { LanguageUpdateWithoutApp_translationInput } from "../inputs/LanguageUpdateWithoutApp_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutApp_translationInput", {})
export class LanguageUpsertWithoutApp_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutApp_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutApp_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutApp_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutApp_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
