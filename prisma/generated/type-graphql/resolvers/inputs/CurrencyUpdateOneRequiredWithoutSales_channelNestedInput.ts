import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyCreateOrConnectWithoutSales_channelInput } from "../inputs/CurrencyCreateOrConnectWithoutSales_channelInput";
import { CurrencyCreateWithoutSales_channelInput } from "../inputs/CurrencyCreateWithoutSales_channelInput";
import { CurrencyUpdateToOneWithWhereWithoutSales_channelInput } from "../inputs/CurrencyUpdateToOneWithWhereWithoutSales_channelInput";
import { CurrencyUpsertWithoutSales_channelInput } from "../inputs/CurrencyUpsertWithoutSales_channelInput";
import { CurrencyWhereUniqueInput } from "../inputs/CurrencyWhereUniqueInput";

@TypeGraphQL.InputType("CurrencyUpdateOneRequiredWithoutSales_channelNestedInput", {})
export class CurrencyUpdateOneRequiredWithoutSales_channelNestedInput {
  @TypeGraphQL.Field(_type => CurrencyCreateWithoutSales_channelInput, {
    nullable: true
  })
  create?: CurrencyCreateWithoutSales_channelInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyCreateOrConnectWithoutSales_channelInput, {
    nullable: true
  })
  connectOrCreate?: CurrencyCreateOrConnectWithoutSales_channelInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyUpsertWithoutSales_channelInput, {
    nullable: true
  })
  upsert?: CurrencyUpsertWithoutSales_channelInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyWhereUniqueInput, {
    nullable: true
  })
  connect?: CurrencyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyUpdateToOneWithWhereWithoutSales_channelInput, {
    nullable: true
  })
  update?: CurrencyUpdateToOneWithWhereWithoutSales_channelInput | undefined;
}
