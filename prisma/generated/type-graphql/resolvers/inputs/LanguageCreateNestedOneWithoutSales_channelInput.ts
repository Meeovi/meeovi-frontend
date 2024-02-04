import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutSales_channelInput } from "../inputs/LanguageCreateOrConnectWithoutSales_channelInput";
import { LanguageCreateWithoutSales_channelInput } from "../inputs/LanguageCreateWithoutSales_channelInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutSales_channelInput", {})
export class LanguageCreateNestedOneWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutSales_channelInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutSales_channelInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutSales_channelInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutSales_channelInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
