import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutProduct_translationInput } from "../inputs/LanguageCreateOrConnectWithoutProduct_translationInput";
import { LanguageCreateWithoutProduct_translationInput } from "../inputs/LanguageCreateWithoutProduct_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutProduct_translationInput", {})
export class LanguageCreateNestedOneWithoutProduct_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutProduct_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutProduct_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutProduct_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
