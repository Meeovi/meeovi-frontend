import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_filterScalarWhereInput } from "../inputs/Product_stream_filterScalarWhereInput";
import { Product_stream_filterUpdateManyMutationInput } from "../inputs/Product_stream_filterUpdateManyMutationInput";

@TypeGraphQL.InputType("Product_stream_filterUpdateManyWithWhereWithoutProduct_stream_filterInput", {})
export class Product_stream_filterUpdateManyWithWhereWithoutProduct_stream_filterInput {
  @TypeGraphQL.Field(_type => Product_stream_filterScalarWhereInput, {
    nullable: false
  })
  where!: Product_stream_filterScalarWhereInput;

  @TypeGraphQL.Field(_type => Product_stream_filterUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_stream_filterUpdateManyMutationInput;
}
