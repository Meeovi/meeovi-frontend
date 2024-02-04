import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_mappingScalarWhereInput } from "../inputs/Product_stream_mappingScalarWhereInput";
import { Product_stream_mappingUpdateManyMutationInput } from "../inputs/Product_stream_mappingUpdateManyMutationInput";

@TypeGraphQL.InputType("Product_stream_mappingUpdateManyWithWhereWithoutProductInput", {})
export class Product_stream_mappingUpdateManyWithWhereWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_stream_mappingScalarWhereInput, {
    nullable: false
  })
  where!: Product_stream_mappingScalarWhereInput;

  @TypeGraphQL.Field(_type => Product_stream_mappingUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_stream_mappingUpdateManyMutationInput;
}
