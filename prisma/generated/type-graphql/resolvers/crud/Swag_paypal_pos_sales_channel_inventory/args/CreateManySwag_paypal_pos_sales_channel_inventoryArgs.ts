import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_inventoryCreateManyInput } from "../../../inputs/Swag_paypal_pos_sales_channel_inventoryCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySwag_paypal_pos_sales_channel_inventoryArgs {
  @TypeGraphQL.Field(_type => [Swag_paypal_pos_sales_channel_inventoryCreateManyInput], {
    nullable: false
  })
  data!: Swag_paypal_pos_sales_channel_inventoryCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
