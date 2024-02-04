import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channelCreateManyInput } from "../../../inputs/Swag_paypal_pos_sales_channelCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySwag_paypal_pos_sales_channelArgs {
  @TypeGraphQL.Field(_type => [Swag_paypal_pos_sales_channelCreateManyInput], {
    nullable: false
  })
  data!: Swag_paypal_pos_sales_channelCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
