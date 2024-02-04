import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateWithoutSales_channelInput } from "../inputs/CountryCreateWithoutSales_channelInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType("CountryCreateOrConnectWithoutSales_channelInput", {})
export class CountryCreateOrConnectWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: false
  })
  where!: CountryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CountryCreateWithoutSales_channelInput, {
    nullable: false
  })
  create!: CountryCreateWithoutSales_channelInput;
}
