import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_runCreateManyInput } from "../../../inputs/Swag_paypal_pos_sales_channel_runCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySwag_paypal_pos_sales_channel_runArgs {
  @TypeGraphQL.Field(_type => [Swag_paypal_pos_sales_channel_runCreateManyInput], {
    nullable: false
  })
  data!: Swag_paypal_pos_sales_channel_runCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
