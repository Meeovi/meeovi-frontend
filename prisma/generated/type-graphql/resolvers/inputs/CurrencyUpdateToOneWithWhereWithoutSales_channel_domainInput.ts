import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyUpdateWithoutSales_channel_domainInput } from "../inputs/CurrencyUpdateWithoutSales_channel_domainInput";
import { CurrencyWhereInput } from "../inputs/CurrencyWhereInput";

@TypeGraphQL.InputType("CurrencyUpdateToOneWithWhereWithoutSales_channel_domainInput", {})
export class CurrencyUpdateToOneWithWhereWithoutSales_channel_domainInput {
  @TypeGraphQL.Field(_type => CurrencyWhereInput, {
    nullable: true
  })
  where?: CurrencyWhereInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyUpdateWithoutSales_channel_domainInput, {
    nullable: false
  })
  data!: CurrencyUpdateWithoutSales_channel_domainInput;
}
