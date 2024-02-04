import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klaviyo_flag_storageCreateManySales_channelInputEnvelope } from "../inputs/Klaviyo_flag_storageCreateManySales_channelInputEnvelope";
import { Klaviyo_flag_storageCreateOrConnectWithoutSales_channelInput } from "../inputs/Klaviyo_flag_storageCreateOrConnectWithoutSales_channelInput";
import { Klaviyo_flag_storageCreateWithoutSales_channelInput } from "../inputs/Klaviyo_flag_storageCreateWithoutSales_channelInput";
import { Klaviyo_flag_storageWhereUniqueInput } from "../inputs/Klaviyo_flag_storageWhereUniqueInput";

@TypeGraphQL.InputType("Klaviyo_flag_storageCreateNestedManyWithoutSales_channelInput", {})
export class Klaviyo_flag_storageCreateNestedManyWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => [Klaviyo_flag_storageCreateWithoutSales_channelInput], {
    nullable: true
  })
  create?: Klaviyo_flag_storageCreateWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_flag_storageCreateOrConnectWithoutSales_channelInput], {
    nullable: true
  })
  connectOrCreate?: Klaviyo_flag_storageCreateOrConnectWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => Klaviyo_flag_storageCreateManySales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: Klaviyo_flag_storageCreateManySales_channelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_flag_storageWhereUniqueInput], {
    nullable: true
  })
  connect?: Klaviyo_flag_storageWhereUniqueInput[] | undefined;
}
