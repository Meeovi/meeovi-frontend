import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutSales_channel_domainInput } from "../inputs/LanguageCreateOrConnectWithoutSales_channel_domainInput";
import { LanguageCreateWithoutSales_channel_domainInput } from "../inputs/LanguageCreateWithoutSales_channel_domainInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutSales_channel_domainInput", {})
export class LanguageCreateNestedOneWithoutSales_channel_domainInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutSales_channel_domainInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutSales_channel_domainInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutSales_channel_domainInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutSales_channel_domainInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
