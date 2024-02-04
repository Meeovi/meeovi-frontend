import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klaviyo_job_cart_requestWhereInput } from "../inputs/Klaviyo_job_cart_requestWhereInput";

@TypeGraphQL.InputType("Klaviyo_job_cart_requestListRelationFilter", {})
export class Klaviyo_job_cart_requestListRelationFilter {
  @TypeGraphQL.Field(_type => Klaviyo_job_cart_requestWhereInput, {
    nullable: true
  })
  every?: Klaviyo_job_cart_requestWhereInput | undefined;

  @TypeGraphQL.Field(_type => Klaviyo_job_cart_requestWhereInput, {
    nullable: true
  })
  some?: Klaviyo_job_cart_requestWhereInput | undefined;

  @TypeGraphQL.Field(_type => Klaviyo_job_cart_requestWhereInput, {
    nullable: true
  })
  none?: Klaviyo_job_cart_requestWhereInput | undefined;
}
