import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryUpdateWithoutSales_channelInput } from "../inputs/CountryUpdateWithoutSales_channelInput";
import { CountryWhereInput } from "../inputs/CountryWhereInput";

@TypeGraphQL.InputType("CountryUpdateToOneWithWhereWithoutSales_channelInput", {})
export class CountryUpdateToOneWithWhereWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => CountryWhereInput, {
    nullable: true
  })
  where?: CountryWhereInput | undefined;

  @TypeGraphQL.Field(_type => CountryUpdateWithoutSales_channelInput, {
    nullable: false
  })
  data!: CountryUpdateWithoutSales_channelInput;
}
