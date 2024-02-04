import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klaviyo_job_cart_requestScalarWhereInput } from "../inputs/Klaviyo_job_cart_requestScalarWhereInput";
import { Klaviyo_job_cart_requestUpdateManyMutationInput } from "../inputs/Klaviyo_job_cart_requestUpdateManyMutationInput";

@TypeGraphQL.InputType("Klaviyo_job_cart_requestUpdateManyWithWhereWithoutSales_channelInput", {})
export class Klaviyo_job_cart_requestUpdateManyWithWhereWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Klaviyo_job_cart_requestScalarWhereInput, {
    nullable: false
  })
  where!: Klaviyo_job_cart_requestScalarWhereInput;

  @TypeGraphQL.Field(_type => Klaviyo_job_cart_requestUpdateManyMutationInput, {
    nullable: false
  })
  data!: Klaviyo_job_cart_requestUpdateManyMutationInput;
}
