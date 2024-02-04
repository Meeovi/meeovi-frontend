import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_filterUpdateWithoutOther_product_stream_filterInput } from "../inputs/Product_stream_filterUpdateWithoutOther_product_stream_filterInput";
import { Product_stream_filterWhereInput } from "../inputs/Product_stream_filterWhereInput";

@TypeGraphQL.InputType("Product_stream_filterUpdateToOneWithWhereWithoutOther_product_stream_filterInput", {})
export class Product_stream_filterUpdateToOneWithWhereWithoutOther_product_stream_filterInput {
  @TypeGraphQL.Field(_type => Product_stream_filterWhereInput, {
    nullable: true
  })
  where?: Product_stream_filterWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_filterUpdateWithoutOther_product_stream_filterInput, {
    nullable: false
  })
  data!: Product_stream_filterUpdateWithoutOther_product_stream_filterInput;
}
