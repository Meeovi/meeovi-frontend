import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klaviyo_job_eventScalarWhereInput } from "../inputs/Klaviyo_job_eventScalarWhereInput";
import { Klaviyo_job_eventUpdateManyMutationInput } from "../inputs/Klaviyo_job_eventUpdateManyMutationInput";

@TypeGraphQL.InputType("Klaviyo_job_eventUpdateManyWithWhereWithoutSales_channelInput", {})
export class Klaviyo_job_eventUpdateManyWithWhereWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Klaviyo_job_eventScalarWhereInput, {
    nullable: false
  })
  where!: Klaviyo_job_eventScalarWhereInput;

  @TypeGraphQL.Field(_type => Klaviyo_job_eventUpdateManyMutationInput, {
    nullable: false
  })
  data!: Klaviyo_job_eventUpdateManyMutationInput;
}
