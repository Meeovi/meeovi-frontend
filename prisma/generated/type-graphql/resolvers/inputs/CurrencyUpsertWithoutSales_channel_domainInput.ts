import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyCreateWithoutSales_channel_domainInput } from "../inputs/CurrencyCreateWithoutSales_channel_domainInput";
import { CurrencyUpdateWithoutSales_channel_domainInput } from "../inputs/CurrencyUpdateWithoutSales_channel_domainInput";
import { CurrencyWhereInput } from "../inputs/CurrencyWhereInput";

@TypeGraphQL.InputType("CurrencyUpsertWithoutSales_channel_domainInput", {})
export class CurrencyUpsertWithoutSales_channel_domainInput {
  @TypeGraphQL.Field(_type => CurrencyUpdateWithoutSales_channel_domainInput, {
    nullable: false
  })
  update!: CurrencyUpdateWithoutSales_channel_domainInput;

  @TypeGraphQL.Field(_type => CurrencyCreateWithoutSales_channel_domainInput, {
    nullable: false
  })
  create!: CurrencyCreateWithoutSales_channel_domainInput;

  @TypeGraphQL.Field(_type => CurrencyWhereInput, {
    nullable: true
  })
  where?: CurrencyWhereInput | undefined;
}
