import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutMedia_translationInput } from "../inputs/LanguageCreateWithoutMedia_translationInput";
import { LanguageUpdateWithoutMedia_translationInput } from "../inputs/LanguageUpdateWithoutMedia_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutMedia_translationInput", {})
export class LanguageUpsertWithoutMedia_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutMedia_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutMedia_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutMedia_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutMedia_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
