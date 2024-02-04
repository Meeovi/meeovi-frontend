import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutSales_channel_translationInput } from "../inputs/LanguageCreateOrConnectWithoutSales_channel_translationInput";
import { LanguageCreateWithoutSales_channel_translationInput } from "../inputs/LanguageCreateWithoutSales_channel_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutSales_channel_translationInput", {})
export class LanguageCreateNestedOneWithoutSales_channel_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutSales_channel_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutSales_channel_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutSales_channel_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutSales_channel_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
