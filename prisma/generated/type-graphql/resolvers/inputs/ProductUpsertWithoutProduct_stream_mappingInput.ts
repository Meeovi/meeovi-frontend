import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutProduct_stream_mappingInput } from "../inputs/ProductCreateWithoutProduct_stream_mappingInput";
import { ProductUpdateWithoutProduct_stream_mappingInput } from "../inputs/ProductUpdateWithoutProduct_stream_mappingInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpsertWithoutProduct_stream_mappingInput", {})
export class ProductUpsertWithoutProduct_stream_mappingInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_stream_mappingInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutProduct_stream_mappingInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_stream_mappingInput, {
    nullable: false
  })
  create!: ProductCreateWithoutProduct_stream_mappingInput;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;
}
