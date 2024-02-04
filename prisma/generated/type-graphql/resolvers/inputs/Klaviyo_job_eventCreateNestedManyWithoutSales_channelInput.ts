import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klaviyo_job_eventCreateManySales_channelInputEnvelope } from "../inputs/Klaviyo_job_eventCreateManySales_channelInputEnvelope";
import { Klaviyo_job_eventCreateOrConnectWithoutSales_channelInput } from "../inputs/Klaviyo_job_eventCreateOrConnectWithoutSales_channelInput";
import { Klaviyo_job_eventCreateWithoutSales_channelInput } from "../inputs/Klaviyo_job_eventCreateWithoutSales_channelInput";
import { Klaviyo_job_eventWhereUniqueInput } from "../inputs/Klaviyo_job_eventWhereUniqueInput";

@TypeGraphQL.InputType("Klaviyo_job_eventCreateNestedManyWithoutSales_channelInput", {})
export class Klaviyo_job_eventCreateNestedManyWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => [Klaviyo_job_eventCreateWithoutSales_channelInput], {
    nullable: true
  })
  create?: Klaviyo_job_eventCreateWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_eventCreateOrConnectWithoutSales_channelInput], {
    nullable: true
  })
  connectOrCreate?: Klaviyo_job_eventCreateOrConnectWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => Klaviyo_job_eventCreateManySales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: Klaviyo_job_eventCreateManySales_channelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_eventWhereUniqueInput], {
    nullable: true
  })
  connect?: Klaviyo_job_eventWhereUniqueInput[] | undefined;
}
