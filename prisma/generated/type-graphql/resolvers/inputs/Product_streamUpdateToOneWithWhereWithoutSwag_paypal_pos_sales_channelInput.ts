import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_streamUpdateWithoutSwag_paypal_pos_sales_channelInput } from "../inputs/Product_streamUpdateWithoutSwag_paypal_pos_sales_channelInput";
import { Product_streamWhereInput } from "../inputs/Product_streamWhereInput";

@TypeGraphQL.InputType("Product_streamUpdateToOneWithWhereWithoutSwag_paypal_pos_sales_channelInput", {})
export class Product_streamUpdateToOneWithWhereWithoutSwag_paypal_pos_sales_channelInput {
  @TypeGraphQL.Field(_type => Product_streamWhereInput, {
    nullable: true
  })
  where?: Product_streamWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamUpdateWithoutSwag_paypal_pos_sales_channelInput, {
    nullable: false
  })
  data!: Product_streamUpdateWithoutSwag_paypal_pos_sales_channelInput;
}
