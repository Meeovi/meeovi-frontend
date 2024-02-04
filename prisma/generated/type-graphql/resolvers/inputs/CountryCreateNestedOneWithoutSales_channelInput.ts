import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateOrConnectWithoutSales_channelInput } from "../inputs/CountryCreateOrConnectWithoutSales_channelInput";
import { CountryCreateWithoutSales_channelInput } from "../inputs/CountryCreateWithoutSales_channelInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType("CountryCreateNestedOneWithoutSales_channelInput", {})
export class CountryCreateNestedOneWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => CountryCreateWithoutSales_channelInput, {
    nullable: true
  })
  create?: CountryCreateWithoutSales_channelInput | undefined;

  @TypeGraphQL.Field(_type => CountryCreateOrConnectWithoutSales_channelInput, {
    nullable: true
  })
  connectOrCreate?: CountryCreateOrConnectWithoutSales_channelInput | undefined;

  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: true
  })
  connect?: CountryWhereUniqueInput | undefined;
}
