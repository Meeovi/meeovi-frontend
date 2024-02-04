import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutNumber_range_type_translationInput } from "../inputs/LanguageCreateWithoutNumber_range_type_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutNumber_range_type_translationInput", {})
export class LanguageCreateOrConnectWithoutNumber_range_type_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutNumber_range_type_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutNumber_range_type_translationInput;
}
