import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klaviyo_job_eventUpdateWithoutSales_channelInput } from "../inputs/Klaviyo_job_eventUpdateWithoutSales_channelInput";
import { Klaviyo_job_eventWhereUniqueInput } from "../inputs/Klaviyo_job_eventWhereUniqueInput";

@TypeGraphQL.InputType("Klaviyo_job_eventUpdateWithWhereUniqueWithoutSales_channelInput", {})
export class Klaviyo_job_eventUpdateWithWhereUniqueWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Klaviyo_job_eventWhereUniqueInput, {
    nullable: false
  })
  where!: Klaviyo_job_eventWhereUniqueInput;

  @TypeGraphQL.Field(_type => Klaviyo_job_eventUpdateWithoutSales_channelInput, {
    nullable: false
  })
  data!: Klaviyo_job_eventUpdateWithoutSales_channelInput;
}
