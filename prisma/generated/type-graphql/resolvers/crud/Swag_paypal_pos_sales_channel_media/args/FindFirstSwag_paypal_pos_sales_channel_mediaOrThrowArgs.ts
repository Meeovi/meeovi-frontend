import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_mediaOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Swag_paypal_pos_sales_channel_mediaOrderByWithRelationAndSearchRelevanceInput";
import { Swag_paypal_pos_sales_channel_mediaWhereInput } from "../../../inputs/Swag_paypal_pos_sales_channel_mediaWhereInput";
import { Swag_paypal_pos_sales_channel_mediaWhereUniqueInput } from "../../../inputs/Swag_paypal_pos_sales_channel_mediaWhereUniqueInput";
import { Swag_paypal_pos_sales_channel_mediaScalarFieldEnum } from "../../../../enums/Swag_paypal_pos_sales_channel_mediaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSwag_paypal_pos_sales_channel_mediaOrThrowArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_mediaWhereInput, {
    nullable: true
  })
  where?: Swag_paypal_pos_sales_channel_mediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Swag_paypal_pos_sales_channel_mediaOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Swag_paypal_pos_sales_channel_mediaOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_mediaWhereUniqueInput, {
    nullable: true
  })
  cursor?: Swag_paypal_pos_sales_channel_mediaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Swag_paypal_pos_sales_channel_mediaScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"sales_channel_id" | "media_id" | "lookup_key" | "url" | "created_at"> | undefined;
}
