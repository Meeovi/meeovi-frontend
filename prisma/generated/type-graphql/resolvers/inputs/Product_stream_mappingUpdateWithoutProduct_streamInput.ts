import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateOneRequiredWithoutProduct_stream_mappingNestedInput } from "../inputs/ProductUpdateOneRequiredWithoutProduct_stream_mappingNestedInput";

@TypeGraphQL.InputType("Product_stream_mappingUpdateWithoutProduct_streamInput", {})
export class Product_stream_mappingUpdateWithoutProduct_streamInput {
  @TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutProduct_stream_mappingNestedInput, {
    nullable: true
  })
  product?: ProductUpdateOneRequiredWithoutProduct_stream_mappingNestedInput | undefined;
}
