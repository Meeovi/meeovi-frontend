import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_streamCreateOrConnectWithoutSwag_paypal_pos_sales_channelInput } from "../inputs/Product_streamCreateOrConnectWithoutSwag_paypal_pos_sales_channelInput";
import { Product_streamCreateWithoutSwag_paypal_pos_sales_channelInput } from "../inputs/Product_streamCreateWithoutSwag_paypal_pos_sales_channelInput";
import { Product_streamWhereUniqueInput } from "../inputs/Product_streamWhereUniqueInput";

@TypeGraphQL.InputType("Product_streamCreateNestedOneWithoutSwag_paypal_pos_sales_channelInput", {})
export class Product_streamCreateNestedOneWithoutSwag_paypal_pos_sales_channelInput {
  @TypeGraphQL.Field(_type => Product_streamCreateWithoutSwag_paypal_pos_sales_channelInput, {
    nullable: true
  })
  create?: Product_streamCreateWithoutSwag_paypal_pos_sales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamCreateOrConnectWithoutSwag_paypal_pos_sales_channelInput, {
    nullable: true
  })
  connectOrCreate?: Product_streamCreateOrConnectWithoutSwag_paypal_pos_sales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamWhereUniqueInput, {
    nullable: true
  })
  connect?: Product_streamWhereUniqueInput | undefined;
}
