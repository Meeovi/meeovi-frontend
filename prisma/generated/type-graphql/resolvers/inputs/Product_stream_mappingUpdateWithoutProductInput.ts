import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_streamUpdateOneRequiredWithoutProduct_stream_mappingNestedInput } from "../inputs/Product_streamUpdateOneRequiredWithoutProduct_stream_mappingNestedInput";

@TypeGraphQL.InputType("Product_stream_mappingUpdateWithoutProductInput", {})
export class Product_stream_mappingUpdateWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_streamUpdateOneRequiredWithoutProduct_stream_mappingNestedInput, {
    nullable: true
  })
  product_stream?: Product_streamUpdateOneRequiredWithoutProduct_stream_mappingNestedInput | undefined;
}
