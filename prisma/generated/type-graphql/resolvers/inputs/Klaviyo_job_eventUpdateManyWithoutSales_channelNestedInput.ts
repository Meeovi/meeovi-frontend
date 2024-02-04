import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klaviyo_job_eventCreateManySales_channelInputEnvelope } from "../inputs/Klaviyo_job_eventCreateManySales_channelInputEnvelope";
import { Klaviyo_job_eventCreateOrConnectWithoutSales_channelInput } from "../inputs/Klaviyo_job_eventCreateOrConnectWithoutSales_channelInput";
import { Klaviyo_job_eventCreateWithoutSales_channelInput } from "../inputs/Klaviyo_job_eventCreateWithoutSales_channelInput";
import { Klaviyo_job_eventScalarWhereInput } from "../inputs/Klaviyo_job_eventScalarWhereInput";
import { Klaviyo_job_eventUpdateManyWithWhereWithoutSales_channelInput } from "../inputs/Klaviyo_job_eventUpdateManyWithWhereWithoutSales_channelInput";
import { Klaviyo_job_eventUpdateWithWhereUniqueWithoutSales_channelInput } from "../inputs/Klaviyo_job_eventUpdateWithWhereUniqueWithoutSales_channelInput";
import { Klaviyo_job_eventUpsertWithWhereUniqueWithoutSales_channelInput } from "../inputs/Klaviyo_job_eventUpsertWithWhereUniqueWithoutSales_channelInput";
import { Klaviyo_job_eventWhereUniqueInput } from "../inputs/Klaviyo_job_eventWhereUniqueInput";

@TypeGraphQL.InputType("Klaviyo_job_eventUpdateManyWithoutSales_channelNestedInput", {})
export class Klaviyo_job_eventUpdateManyWithoutSales_channelNestedInput {
  @TypeGraphQL.Field(_type => [Klaviyo_job_eventCreateWithoutSales_channelInput], {
    nullable: true
  })
  create?: Klaviyo_job_eventCreateWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_eventCreateOrConnectWithoutSales_channelInput], {
    nullable: true
  })
  connectOrCreate?: Klaviyo_job_eventCreateOrConnectWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_eventUpsertWithWhereUniqueWithoutSales_channelInput], {
    nullable: true
  })
  upsert?: Klaviyo_job_eventUpsertWithWhereUniqueWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => Klaviyo_job_eventCreateManySales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: Klaviyo_job_eventCreateManySales_channelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_eventWhereUniqueInput], {
    nullable: true
  })
  set?: Klaviyo_job_eventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_eventWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Klaviyo_job_eventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_eventWhereUniqueInput], {
    nullable: true
  })
  delete?: Klaviyo_job_eventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_eventWhereUniqueInput], {
    nullable: true
  })
  connect?: Klaviyo_job_eventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_eventUpdateWithWhereUniqueWithoutSales_channelInput], {
    nullable: true
  })
  update?: Klaviyo_job_eventUpdateWithWhereUniqueWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_eventUpdateManyWithWhereWithoutSales_channelInput], {
    nullable: true
  })
  updateMany?: Klaviyo_job_eventUpdateManyWithWhereWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_eventScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Klaviyo_job_eventScalarWhereInput[] | undefined;
}
