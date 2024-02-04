import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateNestedOneWithoutProduct_stream_mappingInput } from "../inputs/ProductCreateNestedOneWithoutProduct_stream_mappingInput";
import { Product_streamCreateNestedOneWithoutProduct_stream_mappingInput } from "../inputs/Product_streamCreateNestedOneWithoutProduct_stream_mappingInput";

@TypeGraphQL.InputType("Product_stream_mappingCreateInput", {})
export class Product_stream_mappingCreateInput {
  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutProduct_stream_mappingInput, {
    nullable: false
  })
  product!: ProductCreateNestedOneWithoutProduct_stream_mappingInput;

  @TypeGraphQL.Field(_type => Product_streamCreateNestedOneWithoutProduct_stream_mappingInput, {
    nullable: false
  })
  product_stream!: Product_streamCreateNestedOneWithoutProduct_stream_mappingInput;
}
