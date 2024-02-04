import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutProduct_stream_mappingInput } from "../inputs/ProductUpdateWithoutProduct_stream_mappingInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpdateToOneWithWhereWithoutProduct_stream_mappingInput", {})
export class ProductUpdateToOneWithWhereWithoutProduct_stream_mappingInput {
  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_stream_mappingInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutProduct_stream_mappingInput;
}
