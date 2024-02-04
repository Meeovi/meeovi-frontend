import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutProduct_sorting_translationInput } from "../inputs/LanguageCreateOrConnectWithoutProduct_sorting_translationInput";
import { LanguageCreateWithoutProduct_sorting_translationInput } from "../inputs/LanguageCreateWithoutProduct_sorting_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutProduct_sorting_translationInput", {})
export class LanguageCreateNestedOneWithoutProduct_sorting_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_sorting_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutProduct_sorting_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutProduct_sorting_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutProduct_sorting_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
