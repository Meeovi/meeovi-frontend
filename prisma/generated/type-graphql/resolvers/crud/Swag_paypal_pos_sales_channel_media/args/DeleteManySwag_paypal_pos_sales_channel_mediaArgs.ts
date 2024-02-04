import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_mediaWhereInput } from "../../../inputs/Swag_paypal_pos_sales_channel_mediaWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySwag_paypal_pos_sales_channel_mediaArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_mediaWhereInput, {
    nullable: true
  })
  where?: Swag_paypal_pos_sales_channel_mediaWhereInput | undefined;
}
