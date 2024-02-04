import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klaviyo_job_cart_requestUpdateWithoutSales_channelInput } from "../inputs/Klaviyo_job_cart_requestUpdateWithoutSales_channelInput";
import { Klaviyo_job_cart_requestWhereUniqueInput } from "../inputs/Klaviyo_job_cart_requestWhereUniqueInput";

@TypeGraphQL.InputType("Klaviyo_job_cart_requestUpdateWithWhereUniqueWithoutSales_channelInput", {})
export class Klaviyo_job_cart_requestUpdateWithWhereUniqueWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Klaviyo_job_cart_requestWhereUniqueInput, {
    nullable: false
  })
  where!: Klaviyo_job_cart_requestWhereUniqueInput;

  @TypeGraphQL.Field(_type => Klaviyo_job_cart_requestUpdateWithoutSales_channelInput, {
    nullable: false
  })
  data!: Klaviyo_job_cart_requestUpdateWithoutSales_channelInput;
}
