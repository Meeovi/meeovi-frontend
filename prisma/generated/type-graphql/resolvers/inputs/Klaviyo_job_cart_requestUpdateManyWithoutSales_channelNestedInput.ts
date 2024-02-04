import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klaviyo_job_cart_requestCreateManySales_channelInputEnvelope } from "../inputs/Klaviyo_job_cart_requestCreateManySales_channelInputEnvelope";
import { Klaviyo_job_cart_requestCreateOrConnectWithoutSales_channelInput } from "../inputs/Klaviyo_job_cart_requestCreateOrConnectWithoutSales_channelInput";
import { Klaviyo_job_cart_requestCreateWithoutSales_channelInput } from "../inputs/Klaviyo_job_cart_requestCreateWithoutSales_channelInput";
import { Klaviyo_job_cart_requestScalarWhereInput } from "../inputs/Klaviyo_job_cart_requestScalarWhereInput";
import { Klaviyo_job_cart_requestUpdateManyWithWhereWithoutSales_channelInput } from "../inputs/Klaviyo_job_cart_requestUpdateManyWithWhereWithoutSales_channelInput";
import { Klaviyo_job_cart_requestUpdateWithWhereUniqueWithoutSales_channelInput } from "../inputs/Klaviyo_job_cart_requestUpdateWithWhereUniqueWithoutSales_channelInput";
import { Klaviyo_job_cart_requestUpsertWithWhereUniqueWithoutSales_channelInput } from "../inputs/Klaviyo_job_cart_requestUpsertWithWhereUniqueWithoutSales_channelInput";
import { Klaviyo_job_cart_requestWhereUniqueInput } from "../inputs/Klaviyo_job_cart_requestWhereUniqueInput";

@TypeGraphQL.InputType("Klaviyo_job_cart_requestUpdateManyWithoutSales_channelNestedInput", {})
export class Klaviyo_job_cart_requestUpdateManyWithoutSales_channelNestedInput {
  @TypeGraphQL.Field(_type => [Klaviyo_job_cart_requestCreateWithoutSales_channelInput], {
    nullable: true
  })
  create?: Klaviyo_job_cart_requestCreateWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_cart_requestCreateOrConnectWithoutSales_channelInput], {
    nullable: true
  })
  connectOrCreate?: Klaviyo_job_cart_requestCreateOrConnectWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_cart_requestUpsertWithWhereUniqueWithoutSales_channelInput], {
    nullable: true
  })
  upsert?: Klaviyo_job_cart_requestUpsertWithWhereUniqueWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => Klaviyo_job_cart_requestCreateManySales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: Klaviyo_job_cart_requestCreateManySales_channelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_cart_requestWhereUniqueInput], {
    nullable: true
  })
  set?: Klaviyo_job_cart_requestWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_cart_requestWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Klaviyo_job_cart_requestWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_cart_requestWhereUniqueInput], {
    nullable: true
  })
  delete?: Klaviyo_job_cart_requestWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_cart_requestWhereUniqueInput], {
    nullable: true
  })
  connect?: Klaviyo_job_cart_requestWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_cart_requestUpdateWithWhereUniqueWithoutSales_channelInput], {
    nullable: true
  })
  update?: Klaviyo_job_cart_requestUpdateWithWhereUniqueWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_cart_requestUpdateManyWithWhereWithoutSales_channelInput], {
    nullable: true
  })
  updateMany?: Klaviyo_job_cart_requestUpdateManyWithWhereWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_cart_requestScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Klaviyo_job_cart_requestScalarWhereInput[] | undefined;
}
