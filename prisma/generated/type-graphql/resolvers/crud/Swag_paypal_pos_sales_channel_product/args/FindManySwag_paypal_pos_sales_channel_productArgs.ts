import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_productOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Swag_paypal_pos_sales_channel_productOrderByWithRelationAndSearchRelevanceInput";
import { Swag_paypal_pos_sales_channel_productWhereInput } from "../../../inputs/Swag_paypal_pos_sales_channel_productWhereInput";
import { Swag_paypal_pos_sales_channel_productWhereUniqueInput } from "../../../inputs/Swag_paypal_pos_sales_channel_productWhereUniqueInput";
import { Swag_paypal_pos_sales_channel_productScalarFieldEnum } from "../../../../enums/Swag_paypal_pos_sales_channel_productScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManySwag_paypal_pos_sales_channel_productArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_productWhereInput, {
    nullable: true
  })
  where?: Swag_paypal_pos_sales_channel_productWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Swag_paypal_pos_sales_channel_productOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Swag_paypal_pos_sales_channel_productOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_productWhereUniqueInput, {
    nullable: true
  })
  cursor?: Swag_paypal_pos_sales_channel_productWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Swag_paypal_pos_sales_channel_productScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"sales_channel_id" | "product_id" | "product_version_id" | "checksum" | "created_at" | "updated_at"> | undefined;
}
