import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateOrConnectWithoutSales_channelInput } from "../inputs/CountryCreateOrConnectWithoutSales_channelInput";
import { CountryCreateWithoutSales_channelInput } from "../inputs/CountryCreateWithoutSales_channelInput";
import { CountryUpdateToOneWithWhereWithoutSales_channelInput } from "../inputs/CountryUpdateToOneWithWhereWithoutSales_channelInput";
import { CountryUpsertWithoutSales_channelInput } from "../inputs/CountryUpsertWithoutSales_channelInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType("CountryUpdateOneRequiredWithoutSales_channelNestedInput", {})
export class CountryUpdateOneRequiredWithoutSales_channelNestedInput {
  @TypeGraphQL.Field(_type => CountryCreateWithoutSales_channelInput, {
    nullable: true
  })
  create?: CountryCreateWithoutSales_channelInput | undefined;

  @TypeGraphQL.Field(_type => CountryCreateOrConnectWithoutSales_channelInput, {
    nullable: true
  })
  connectOrCreate?: CountryCreateOrConnectWithoutSales_channelInput | undefined;

  @TypeGraphQL.Field(_type => CountryUpsertWithoutSales_channelInput, {
    nullable: true
  })
  upsert?: CountryUpsertWithoutSales_channelInput | undefined;

  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: true
  })
  connect?: CountryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CountryUpdateToOneWithWhereWithoutSales_channelInput, {
    nullable: true
  })
  update?: CountryUpdateToOneWithWhereWithoutSales_channelInput | undefined;
}
