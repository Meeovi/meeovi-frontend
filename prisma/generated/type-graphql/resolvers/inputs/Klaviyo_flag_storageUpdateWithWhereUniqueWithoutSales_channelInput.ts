import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klaviyo_flag_storageUpdateWithoutSales_channelInput } from "../inputs/Klaviyo_flag_storageUpdateWithoutSales_channelInput";
import { Klaviyo_flag_storageWhereUniqueInput } from "../inputs/Klaviyo_flag_storageWhereUniqueInput";

@TypeGraphQL.InputType("Klaviyo_flag_storageUpdateWithWhereUniqueWithoutSales_channelInput", {})
export class Klaviyo_flag_storageUpdateWithWhereUniqueWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Klaviyo_flag_storageWhereUniqueInput, {
    nullable: false
  })
  where!: Klaviyo_flag_storageWhereUniqueInput;

  @TypeGraphQL.Field(_type => Klaviyo_flag_storageUpdateWithoutSales_channelInput, {
    nullable: false
  })
  data!: Klaviyo_flag_storageUpdateWithoutSales_channelInput;
}
