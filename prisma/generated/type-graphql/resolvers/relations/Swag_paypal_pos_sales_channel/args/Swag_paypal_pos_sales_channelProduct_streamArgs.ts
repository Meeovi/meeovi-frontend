import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_streamWhereInput } from "../../../inputs/Product_streamWhereInput";

@TypeGraphQL.ArgsType()
export class Swag_paypal_pos_sales_channelProduct_streamArgs {
  @TypeGraphQL.Field(_type => Product_streamWhereInput, {
    nullable: true
  })
  where?: Product_streamWhereInput | undefined;
}
