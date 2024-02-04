import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_mappingCreateWithoutProduct_streamInput } from "../inputs/Product_stream_mappingCreateWithoutProduct_streamInput";
import { Product_stream_mappingWhereUniqueInput } from "../inputs/Product_stream_mappingWhereUniqueInput";

@TypeGraphQL.InputType("Product_stream_mappingCreateOrConnectWithoutProduct_streamInput", {})
export class Product_stream_mappingCreateOrConnectWithoutProduct_streamInput {
  @TypeGraphQL.Field(_type => Product_stream_mappingWhereUniqueInput, {
    nullable: false
  })
  where!: Product_stream_mappingWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_stream_mappingCreateWithoutProduct_streamInput, {
    nullable: false
  })
  create!: Product_stream_mappingCreateWithoutProduct_streamInput;
}
