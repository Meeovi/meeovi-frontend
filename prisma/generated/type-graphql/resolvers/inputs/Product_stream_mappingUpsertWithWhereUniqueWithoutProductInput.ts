import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_mappingCreateWithoutProductInput } from "../inputs/Product_stream_mappingCreateWithoutProductInput";
import { Product_stream_mappingUpdateWithoutProductInput } from "../inputs/Product_stream_mappingUpdateWithoutProductInput";
import { Product_stream_mappingWhereUniqueInput } from "../inputs/Product_stream_mappingWhereUniqueInput";

@TypeGraphQL.InputType("Product_stream_mappingUpsertWithWhereUniqueWithoutProductInput", {})
export class Product_stream_mappingUpsertWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_stream_mappingWhereUniqueInput, {
    nullable: false
  })
  where!: Product_stream_mappingWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_stream_mappingUpdateWithoutProductInput, {
    nullable: false
  })
  update!: Product_stream_mappingUpdateWithoutProductInput;

  @TypeGraphQL.Field(_type => Product_stream_mappingCreateWithoutProductInput, {
    nullable: false
  })
  create!: Product_stream_mappingCreateWithoutProductInput;
}
