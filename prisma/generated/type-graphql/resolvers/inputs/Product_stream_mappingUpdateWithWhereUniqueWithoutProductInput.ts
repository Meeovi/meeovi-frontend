import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_mappingUpdateWithoutProductInput } from "../inputs/Product_stream_mappingUpdateWithoutProductInput";
import { Product_stream_mappingWhereUniqueInput } from "../inputs/Product_stream_mappingWhereUniqueInput";

@TypeGraphQL.InputType("Product_stream_mappingUpdateWithWhereUniqueWithoutProductInput", {})
export class Product_stream_mappingUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_stream_mappingWhereUniqueInput, {
    nullable: false
  })
  where!: Product_stream_mappingWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_stream_mappingUpdateWithoutProductInput, {
    nullable: false
  })
  data!: Product_stream_mappingUpdateWithoutProductInput;
}
