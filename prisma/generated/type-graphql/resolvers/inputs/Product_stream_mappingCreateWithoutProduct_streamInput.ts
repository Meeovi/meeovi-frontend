import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateNestedOneWithoutProduct_stream_mappingInput } from "../inputs/ProductCreateNestedOneWithoutProduct_stream_mappingInput";

@TypeGraphQL.InputType("Product_stream_mappingCreateWithoutProduct_streamInput", {})
export class Product_stream_mappingCreateWithoutProduct_streamInput {
  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutProduct_stream_mappingInput, {
    nullable: false
  })
  product!: ProductCreateNestedOneWithoutProduct_stream_mappingInput;
}
