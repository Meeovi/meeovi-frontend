import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klaviyo_job_cart_requestOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Klaviyo_job_cart_requestOrderByWithRelationAndSearchRelevanceInput";
import { Klaviyo_job_cart_requestWhereInput } from "../../../inputs/Klaviyo_job_cart_requestWhereInput";
import { Klaviyo_job_cart_requestWhereUniqueInput } from "../../../inputs/Klaviyo_job_cart_requestWhereUniqueInput";
import { Klaviyo_job_cart_requestScalarFieldEnum } from "../../../../enums/Klaviyo_job_cart_requestScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class Sales_channelKlaviyo_job_cart_requestArgs {
  @TypeGraphQL.Field(_type => Klaviyo_job_cart_requestWhereInput, {
    nullable: true
  })
  where?: Klaviyo_job_cart_requestWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_cart_requestOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Klaviyo_job_cart_requestOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Klaviyo_job_cart_requestWhereUniqueInput, {
    nullable: true
  })
  cursor?: Klaviyo_job_cart_requestWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_cart_requestScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "sales_channel_id" | "serialized_request" | "created_at" | "updated_at"> | undefined;
}
