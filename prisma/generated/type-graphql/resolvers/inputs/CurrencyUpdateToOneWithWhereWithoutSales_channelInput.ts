import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyUpdateWithoutSales_channelInput } from "../inputs/CurrencyUpdateWithoutSales_channelInput";
import { CurrencyWhereInput } from "../inputs/CurrencyWhereInput";

@TypeGraphQL.InputType("CurrencyUpdateToOneWithWhereWithoutSales_channelInput", {})
export class CurrencyUpdateToOneWithWhereWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => CurrencyWhereInput, {
    nullable: true
  })
  where?: CurrencyWhereInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyUpdateWithoutSales_channelInput, {
    nullable: false
  })
  data!: CurrencyUpdateWithoutSales_channelInput;
}
