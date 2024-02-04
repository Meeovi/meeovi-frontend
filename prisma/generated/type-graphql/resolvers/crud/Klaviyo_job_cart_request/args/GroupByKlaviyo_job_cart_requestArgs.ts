import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klaviyo_job_cart_requestOrderByWithAggregationInput } from "../../../inputs/Klaviyo_job_cart_requestOrderByWithAggregationInput";
import { Klaviyo_job_cart_requestScalarWhereWithAggregatesInput } from "../../../inputs/Klaviyo_job_cart_requestScalarWhereWithAggregatesInput";
import { Klaviyo_job_cart_requestWhereInput } from "../../../inputs/Klaviyo_job_cart_requestWhereInput";
import { Klaviyo_job_cart_requestScalarFieldEnum } from "../../../../enums/Klaviyo_job_cart_requestScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByKlaviyo_job_cart_requestArgs {
  @TypeGraphQL.Field(_type => Klaviyo_job_cart_requestWhereInput, {
    nullable: true
  })
  where?: Klaviyo_job_cart_requestWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_cart_requestOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Klaviyo_job_cart_requestOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_cart_requestScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "sales_channel_id" | "serialized_request" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Klaviyo_job_cart_requestScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Klaviyo_job_cart_requestScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
