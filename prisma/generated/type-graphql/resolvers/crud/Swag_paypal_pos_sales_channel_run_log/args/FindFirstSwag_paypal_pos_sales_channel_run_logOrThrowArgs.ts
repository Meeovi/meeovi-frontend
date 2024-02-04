import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_run_logOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Swag_paypal_pos_sales_channel_run_logOrderByWithRelationAndSearchRelevanceInput";
import { Swag_paypal_pos_sales_channel_run_logWhereInput } from "../../../inputs/Swag_paypal_pos_sales_channel_run_logWhereInput";
import { Swag_paypal_pos_sales_channel_run_logWhereUniqueInput } from "../../../inputs/Swag_paypal_pos_sales_channel_run_logWhereUniqueInput";
import { Swag_paypal_pos_sales_channel_run_logScalarFieldEnum } from "../../../../enums/Swag_paypal_pos_sales_channel_run_logScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSwag_paypal_pos_sales_channel_run_logOrThrowArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_run_logWhereInput, {
    nullable: true
  })
  where?: Swag_paypal_pos_sales_channel_run_logWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Swag_paypal_pos_sales_channel_run_logOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Swag_paypal_pos_sales_channel_run_logOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_run_logWhereUniqueInput, {
    nullable: true
  })
  cursor?: Swag_paypal_pos_sales_channel_run_logWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Swag_paypal_pos_sales_channel_run_logScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "run_id" | "level" | "message" | "product_id" | "product_version_id" | "created_at" | "updated_at"> | undefined;
}
