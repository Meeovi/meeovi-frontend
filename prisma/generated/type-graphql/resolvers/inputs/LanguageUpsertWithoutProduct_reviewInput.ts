import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutProduct_reviewInput } from "../inputs/LanguageCreateWithoutProduct_reviewInput";
import { LanguageUpdateWithoutProduct_reviewInput } from "../inputs/LanguageUpdateWithoutProduct_reviewInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutProduct_reviewInput", {})
export class LanguageUpsertWithoutProduct_reviewInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutProduct_reviewInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutProduct_reviewInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_reviewInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutProduct_reviewInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
