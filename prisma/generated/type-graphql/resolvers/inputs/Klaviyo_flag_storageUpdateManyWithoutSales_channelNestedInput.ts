import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klaviyo_flag_storageCreateManySales_channelInputEnvelope } from "../inputs/Klaviyo_flag_storageCreateManySales_channelInputEnvelope";
import { Klaviyo_flag_storageCreateOrConnectWithoutSales_channelInput } from "../inputs/Klaviyo_flag_storageCreateOrConnectWithoutSales_channelInput";
import { Klaviyo_flag_storageCreateWithoutSales_channelInput } from "../inputs/Klaviyo_flag_storageCreateWithoutSales_channelInput";
import { Klaviyo_flag_storageScalarWhereInput } from "../inputs/Klaviyo_flag_storageScalarWhereInput";
import { Klaviyo_flag_storageUpdateManyWithWhereWithoutSales_channelInput } from "../inputs/Klaviyo_flag_storageUpdateManyWithWhereWithoutSales_channelInput";
import { Klaviyo_flag_storageUpdateWithWhereUniqueWithoutSales_channelInput } from "../inputs/Klaviyo_flag_storageUpdateWithWhereUniqueWithoutSales_channelInput";
import { Klaviyo_flag_storageUpsertWithWhereUniqueWithoutSales_channelInput } from "../inputs/Klaviyo_flag_storageUpsertWithWhereUniqueWithoutSales_channelInput";
import { Klaviyo_flag_storageWhereUniqueInput } from "../inputs/Klaviyo_flag_storageWhereUniqueInput";

@TypeGraphQL.InputType("Klaviyo_flag_storageUpdateManyWithoutSales_channelNestedInput", {})
export class Klaviyo_flag_storageUpdateManyWithoutSales_channelNestedInput {
  @TypeGraphQL.Field(_type => [Klaviyo_flag_storageCreateWithoutSales_channelInput], {
    nullable: true
  })
  create?: Klaviyo_flag_storageCreateWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_flag_storageCreateOrConnectWithoutSales_channelInput], {
    nullable: true
  })
  connectOrCreate?: Klaviyo_flag_storageCreateOrConnectWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_flag_storageUpsertWithWhereUniqueWithoutSales_channelInput], {
    nullable: true
  })
  upsert?: Klaviyo_flag_storageUpsertWithWhereUniqueWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => Klaviyo_flag_storageCreateManySales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: Klaviyo_flag_storageCreateManySales_channelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_flag_storageWhereUniqueInput], {
    nullable: true
  })
  set?: Klaviyo_flag_storageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_flag_storageWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Klaviyo_flag_storageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_flag_storageWhereUniqueInput], {
    nullable: true
  })
  delete?: Klaviyo_flag_storageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_flag_storageWhereUniqueInput], {
    nullable: true
  })
  connect?: Klaviyo_flag_storageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_flag_storageUpdateWithWhereUniqueWithoutSales_channelInput], {
    nullable: true
  })
  update?: Klaviyo_flag_storageUpdateWithWhereUniqueWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_flag_storageUpdateManyWithWhereWithoutSales_channelInput], {
    nullable: true
  })
  updateMany?: Klaviyo_flag_storageUpdateManyWithWhereWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_flag_storageScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Klaviyo_flag_storageScalarWhereInput[] | undefined;
}
