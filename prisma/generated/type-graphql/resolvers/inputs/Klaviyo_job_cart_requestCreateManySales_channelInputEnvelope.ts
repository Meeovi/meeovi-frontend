import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klaviyo_job_cart_requestCreateManySales_channelInput } from "../inputs/Klaviyo_job_cart_requestCreateManySales_channelInput";

@TypeGraphQL.InputType("Klaviyo_job_cart_requestCreateManySales_channelInputEnvelope", {})
export class Klaviyo_job_cart_requestCreateManySales_channelInputEnvelope {
  @TypeGraphQL.Field(_type => [Klaviyo_job_cart_requestCreateManySales_channelInput], {
    nullable: false
  })
  data!: Klaviyo_job_cart_requestCreateManySales_channelInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
