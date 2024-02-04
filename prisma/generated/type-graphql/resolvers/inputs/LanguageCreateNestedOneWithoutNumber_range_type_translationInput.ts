import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutNumber_range_type_translationInput } from "../inputs/LanguageCreateOrConnectWithoutNumber_range_type_translationInput";
import { LanguageCreateWithoutNumber_range_type_translationInput } from "../inputs/LanguageCreateWithoutNumber_range_type_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutNumber_range_type_translationInput", {})
export class LanguageCreateNestedOneWithoutNumber_range_type_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutNumber_range_type_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutNumber_range_type_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutNumber_range_type_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutNumber_range_type_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
